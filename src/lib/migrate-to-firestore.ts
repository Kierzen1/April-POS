import prisma from "./prisma";
import { adminDb, adminAuth } from "./firebase-admin";

export async function migrateAllToFirestore() {
    console.log("Starting Comprehensive Migration...");
    const results: any = {};

    try {
        // 1. Migrate Users
        console.log("--- Migrating Users ---");
        const users = await prisma.user.findMany();
        console.log(`Found ${users.length} users.`);

        const userBatch = [];
        for (const user of users) {
            // 1a. Migrate to Firestore
            await adminDb.collection("users").doc(user.id).set({
                name: user.name,
                email: user.email,
                password: user.password, // IMPORTANT: Missing in previous version
                role: user.role,
                isActive: user.isActive,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            });

            // 1b. Prepare for Auth Migration
            // Note: Password migration from bcrypt is complex. 
            // We'll create users with a placeholder or attempt to import if we have hashes.
            // For now, let's create them so they exist in Auth.
            try {
                await adminAuth.createUser({
                    uid: user.id,
                    email: user.email,
                    displayName: user.name || "",
                    // We don't set password here because it's hashed in DB.
                    // Users will need to reset passwords or we can set a default.
                });
                console.log(`- Created Auth User: ${user.email}`);
            } catch (authError: any) {
                if (authError.code === 'auth/uid-already-exists' || authError.code === 'auth/email-already-exists') {
                    console.log(`- Auth User already exists: ${user.email}`);
                } else {
                    console.error(`- Error creating Auth user ${user.email}:`, authError.message);
                }
            }
        }
        results.users = { count: users.length };

        // 2. Migrate Products
        console.log("--- Migrating Products ---");
        const products = await prisma.product.findMany();
        console.log(`Found ${products.length} products.`);
        for (const product of products) {
            await adminDb.collection("products").doc(product.id).set({
                barcode: String(product.barcode),
                name: String(product.name),
                description: product.description || "",
                price: Number(product.price),
                stock: Number(product.stock),
                lowStockThreshold: Number(product.lowStockThreshold),
                category: product.category || "General",
                image: product.image || "",
                createdAt: product.createdAt,
                updatedAt: product.updatedAt,
            });
            console.log(`- Migrated Product: ${product.name}`);
        }
        results.products = { count: products.length };

        // 3. Migrate Transactions
        console.log("--- Migrating Transactions ---");
        const transactions = await prisma.transaction.findMany({
            include: { items: true }
        });
        console.log(`Found ${transactions.length} transactions.`);
        for (const tx of transactions) {
            // Write Transaction
            await adminDb.collection("transactions").doc(tx.id).set({
                total: Number(tx.total),
                cashierId: tx.cashierId,
                createdAt: tx.createdAt,
            });

            // Write Transaction Items
            for (const item of tx.items) {
                await adminDb.collection("transaction_items").doc(item.id).set({
                    transactionId: tx.id,
                    productId: item.productId,
                    quantity: item.quantity,
                    priceAtTime: Number(item.priceAtTime),
                });
            }
            console.log(`- Migrated Transaction: ${tx.id}`);
        }
        results.transactions = { count: transactions.length };

        console.log("SUCCESS: Full migration completed.");
        return { success: true, results };
    } catch (error: any) {
        console.error("Migration FAILED:", error);
        return { success: false, error: error.message };
    }
}
