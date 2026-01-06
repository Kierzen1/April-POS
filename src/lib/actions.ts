"use server";

import { adminDb, adminAuth } from "@/lib/firebase-admin";
import bcrypt from "bcryptjs";
import { z } from "zod";

// Helper to sanitize Firestore data for Next.js Client Components
function sanitizeData(data: any): any {
    if (!data) return data;

    // Handle Firestore Timestamp
    if (data && typeof data.toDate === 'function') {
        return data.toDate().toISOString();
    }

    if (Array.isArray(data)) {
        return data.map(sanitizeData);
    }

    if (typeof data === 'object' && data !== null) {
        // Handle native Date objects - convert to ISO string for safe serialization
        if (data instanceof Date) {
            return data.toISOString();
        }

        const sanitized: any = {};
        for (const [key, value] of Object.entries(data)) {
            if (key === 'password') continue; // Security: Never send passwords to client
            sanitized[key] = sanitizeData(value);
        }
        return sanitized;
    }

    return data;
}

const registerSchema = z.object({
    name: z.string().min(2, "Name is too short"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function registerUser(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const validated = registerSchema.safeParse({ name, email, password });

    if (!validated.success) {
        return { error: validated.error.issues[0]?.message || "Validation failed" };
    }

    try {
        const userSnap = await adminDb.collection("users").where("email", "==", email).get();

        if (!userSnap.empty) {
            return { error: "User already exists" };
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const usersSnap = await adminDb.collection("users").count().get();
        const userCount = usersSnap.data().count;

        const role = userCount === 0 ? "ADMIN" : "STAFF";
        const isActive = userCount === 0;

        const authUser = await adminAuth.createUser({
            email,
            password,
            displayName: name,
        });

        await adminDb.collection("users").doc(authUser.uid).set({
            name,
            email,
            password: hashedPassword,
            role,
            isActive,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        return { success: true };
    } catch (error) {
        console.error("Registration error:", error);
        return { error: "Something went wrong" };
    }
}

const adminCreateUserSchema = z.object({
    name: z.string().min(2, "Name is too short"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    role: z.enum(["ADMIN", "STAFF"]),
});

export async function adminCreateUser(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const role = formData.get("role") as "ADMIN" | "STAFF";

    const validated = adminCreateUserSchema.safeParse({ name, email, password, role });

    if (!validated.success) {
        return { error: validated.error.issues[0]?.message || "Validation failed" };
    }

    try {
        const userSnap = await adminDb.collection("users").where("email", "==", email).get();

        if (!userSnap.empty) {
            return { error: "User already exists" };
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // 1. Create in Firebase Auth
        const authUser = await adminAuth.createUser({
            email,
            password,
            displayName: name,
        });

        // 2. Create in Firestore
        await adminDb.collection("users").doc(authUser.uid).set({
            name,
            email,
            password: hashedPassword,
            role,
            isActive: true, // Admin-created users are active by default
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        return { success: true };
    } catch (error) {
        console.error("Admin user creation error:", error);
        return { error: "Something went wrong" };
    }
}

// User Management
export async function getUsers() {
    try {
        const snap = await adminDb.collection("users").orderBy("createdAt", "desc").get();
        return snap.docs.map(doc => sanitizeData({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export async function toggleUserActivation(userId: string) {
    const docRef = adminDb.collection("users").doc(userId);
    const doc = await docRef.get();

    if (!doc.exists) return { error: "User not found" };

    const currentStatus = doc.data()?.isActive;
    await docRef.update({ isActive: !currentStatus });
    await adminAuth.updateUser(userId, { disabled: currentStatus });

    return { success: true };
}

// Product Management
export async function getProducts() {
    try {
        const snap = await adminDb.collection("products").orderBy("updatedAt", "desc").get();
        const products = snap.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        const txItemsSnap = await adminDb.collection("transaction_items").get();
        const soldCounts: Record<string, number> = {};

        txItemsSnap.docs.forEach(doc => {
            const item = doc.data();
            soldCounts[item.productId] = (soldCounts[item.productId] || 0) + (item.quantity || 0);
        });

        return products.map(p => sanitizeData({
            ...p,
            price: Number((p as any).price || 0),
            soldCount: soldCounts[p.id] || 0
        }));
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}

export async function getLowStockCount() {
    try {
        const snap = await adminDb.collection("products").get();
        const products = snap.docs.map(doc => ({
            id: doc.id,
            name: doc.data().name,
            stock: doc.data().stock,
            lowStockThreshold: doc.data().lowStockThreshold || 5,
        }));

        const lowStockItems = products.filter(p => p.stock <= p.lowStockThreshold);
        return sanitizeData({
            count: lowStockItems.length,
            items: lowStockItems
        });
    } catch (error) {
        console.error("Error fetching low stock count:", error);
        return { count: 0, items: [] };
    }
}

export async function getProductByBarcode(barcode: string) {
    const trimmedBarcode = barcode.trim();
    const snap = await adminDb.collection("products").where("barcode", "==", trimmedBarcode).get();

    if (snap.empty) return null;

    const doc = snap.docs[0];
    const product = {
        id: doc.id,
        ...doc.data()
    };

    const txItemsSnap = await adminDb.collection("transaction_items").where("productId", "==", doc.id).get();
    const soldCount = txItemsSnap.docs.reduce((sum, d) => sum + (d.data().quantity || 0), 0);

    return sanitizeData({
        ...product,
        price: Number((product as any).price || 0),
        soldCount
    });
}

export async function upsertProduct(data: any) {
    const { id, barcode, name, price, stock, lowStockThreshold, category, image } = data;

    const firestoreData = {
        barcode: String(barcode),
        name: String(name),
        price: parseFloat(price) || 0,
        stock: parseInt(stock) || 0,
        lowStockThreshold: parseInt(lowStockThreshold) || 5,
        category: category || "General",
        image: image || "",
        updatedAt: new Date(),
    };

    if (id) {
        await adminDb.collection("products").doc(id).update(firestoreData);
    } else {
        await adminDb.collection("products").add({
            ...firestoreData,
            createdAt: new Date(),
        });
    }

    return { success: true };
}

export async function deleteProduct(id: string) {
    await adminDb.collection("products").doc(id).delete();
    return { success: true };
}

// Transaction Management
export async function completeSale(cashierId: string, items: any[], total: number) {
    try {
        await adminDb.runTransaction(async (transaction) => {
            // 1. PERFORM ALL READS FIRST
            const productDocs = [];
            for (const item of items) {
                const productRef = adminDb.collection("products").doc(item.productId);
                const doc = await transaction.get(productRef);
                productDocs.push({ ref: productRef, doc });
            }

            // 2. PERFORM ALL WRITES SECOND
            const txRef = adminDb.collection("transactions").doc();

            transaction.set(txRef, {
                cashierId,
                total: Number(total),
                createdAt: new Date(),
            });

            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                const { ref: productRef, doc: productDoc } = productDocs[i];

                const itemRef = adminDb.collection("transaction_items").doc();
                transaction.set(itemRef, {
                    transactionId: txRef.id,
                    productId: item.productId,
                    quantity: item.quantity,
                    priceAtTime: Number(item.price),
                });

                if (productDoc.exists) {
                    const currentStock = productDoc.data()?.stock || 0;
                    transaction.update(productRef, {
                        stock: currentStock - item.quantity,
                        updatedAt: new Date()
                    });
                }
            }
        });

        return { success: true };
    } catch (error) {
        console.error("Sale error:", error);
        return { error: "Failed to complete sale" };
    }
}

export async function getTransactions() {
    try {
        const snap = await adminDb.collection("transactions").orderBy("createdAt", "desc").get();
        const transactions = [];

        for (const doc of snap.docs) {
            const txData = doc.data();

            const cashierDoc = await adminDb.collection("users").doc(txData.cashierId).get();
            const cashier = cashierDoc.exists ? { id: cashierDoc.id, ...cashierDoc.data() } : null;

            const itemsSnap = await adminDb.collection("transaction_items").where("transactionId", "==", doc.id).get();
            const items = [];

            for (const itemDoc of itemsSnap.docs) {
                const itemData = itemDoc.data();
                const productDoc = await adminDb.collection("products").doc(itemData.productId).get();
                const product = productDoc.exists ? { id: productDoc.id, ...productDoc.data() } : null;

                items.push({
                    ...itemData,
                    id: itemDoc.id,
                    product
                });
            }

            transactions.push({
                id: doc.id,
                ...txData,
                cashier,
                items
            });
        }

        return sanitizeData(transactions);
    } catch (error) {
        console.error("Error fetching transactions:", error);
        return [];
    }
}
