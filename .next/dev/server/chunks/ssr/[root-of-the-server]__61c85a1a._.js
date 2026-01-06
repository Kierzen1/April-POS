module.exports = [
"[project]/src/lib/firebase-admin.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminAuth",
    ()=>adminAuth,
    "adminDb",
    ()=>adminDb,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin__$5b$external$5d$__$28$firebase$2d$admin$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__ = __turbopack_context__.i("[externals]/firebase-admin [external] (firebase-admin, cjs, [project]/node_modules/firebase-admin)");
;
const privateKey = process.env.FIREBASE_PRIVATE_KEY;
const firebaseAdminConfig = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: privateKey ? privateKey.replace(/\\n/g, '\n') : undefined
};
// Use a global variable to persist the admin instance across HMR reloads
const globalForAdmin = /*TURBOPACK member replacement*/ __turbopack_context__.g;
if (!__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin__$5b$external$5d$__$28$firebase$2d$admin$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__.apps.length) {
    console.log("Initializing Firebase Admin SDK for project:", firebaseAdminConfig.projectId);
    try {
        __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin__$5b$external$5d$__$28$firebase$2d$admin$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__.initializeApp({
            credential: __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin__$5b$external$5d$__$28$firebase$2d$admin$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__.credential.cert(firebaseAdminConfig),
            projectId: firebaseAdminConfig.projectId
        });
        console.log("Firebase Admin SDK initialized successfully.");
    } catch (error) {
        console.error("Critical: Failed to initialize Firebase Admin SDK", error);
    }
}
const adminDb = __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin__$5b$external$5d$__$28$firebase$2d$admin$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__.firestore();
const adminAuth = __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin__$5b$external$5d$__$28$firebase$2d$admin$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__.auth();
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin__$5b$external$5d$__$28$firebase$2d$admin$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/src/lib/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0010a0e7e03244c85b1ef1e76c577415abfc878172":"getUsers","009d9c4f32d6b7eabfbb33c4bdababb53aed6d5f5d":"getTransactions","00b7da2130fcff59e6ef4e2860acc4be0dc7f333a5":"getLowStockCount","00df78ebb5383cb59f76e1fec79847930b21c1e633":"getProducts","403e3f9c60d3a714533fe1cfb72328b31492e38e5d":"deleteProduct","4060053ab880f036dc2cbd5ed233bade4acca2a179":"registerUser","407cdcd394561f2e242cfdbb0d53299e1d52fc8ce4":"getProductByBarcode","40dbf2964ef7daa9133c2476e2c0b9d1ea785a590e":"adminCreateUser","40e676a01cbb53febeaec99ec96860933e8c2ec0fd":"toggleUserActivation","40eea97e91cf7ed8cacdab14034cf02133cea0b866":"upsertProduct","703ce1cec6fb1173c8db2e67b4b493e77341ac90c3":"completeSale"},"",""] */ __turbopack_context__.s([
    "adminCreateUser",
    ()=>adminCreateUser,
    "completeSale",
    ()=>completeSale,
    "deleteProduct",
    ()=>deleteProduct,
    "getLowStockCount",
    ()=>getLowStockCount,
    "getProductByBarcode",
    ()=>getProductByBarcode,
    "getProducts",
    ()=>getProducts,
    "getTransactions",
    ()=>getTransactions,
    "getUsers",
    ()=>getUsers,
    "registerUser",
    ()=>registerUser,
    "toggleUserActivation",
    ()=>toggleUserActivation,
    "upsertProduct",
    ()=>upsertProduct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase-admin.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const registerSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Name is too short"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("Invalid email"),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(6, "Password must be at least 6 characters")
});
async function registerUser(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const validated = registerSchema.safeParse({
        name,
        email,
        password
    });
    if (!validated.success) {
        return {
            error: validated.error.issues[0]?.message || "Validation failed"
        };
    }
    try {
        // Check if user exists in Firestore
        const userSnap = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("users").where("email", "==", email).get();
        if (!userSnap.empty) {
            return {
                error: "User already exists"
            };
        }
        const hashedPassword = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].hash(password, 10);
        // Check user count for role assignment
        const usersSnap = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("users").count().get();
        const userCount = usersSnap.data().count;
        const role = userCount === 0 ? "ADMIN" : "STAFF";
        const isActive = userCount === 0;
        // 1. Create in Firebase Auth
        const authUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminAuth"].createUser({
            email,
            password,
            displayName: name
        });
        // 2. Create in Firestore
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("users").doc(authUser.uid).set({
            name,
            email,
            password: hashedPassword,
            role,
            isActive,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        return {
            success: true
        };
    } catch (error) {
        console.error("Registration error:", error);
        return {
            error: "Something went wrong"
        };
    }
}
const adminCreateUserSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Name is too short"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("Invalid email"),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(6, "Password must be at least 6 characters"),
    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "ADMIN",
        "STAFF"
    ])
});
async function adminCreateUser(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const role = formData.get("role");
    const validated = adminCreateUserSchema.safeParse({
        name,
        email,
        password,
        role
    });
    if (!validated.success) {
        return {
            error: validated.error.issues[0]?.message || "Validation failed"
        };
    }
    try {
        const userSnap = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("users").where("email", "==", email).get();
        if (!userSnap.empty) {
            return {
                error: "User already exists"
            };
        }
        const hashedPassword = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].hash(password, 10);
        // 1. Create in Firebase Auth
        const authUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminAuth"].createUser({
            email,
            password,
            displayName: name
        });
        // 2. Create in Firestore
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("users").doc(authUser.uid).set({
            name,
            email,
            password: hashedPassword,
            role,
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        return {
            success: true
        };
    } catch (error) {
        console.error("Admin user creation error:", error);
        return {
            error: "Something went wrong"
        };
    }
}
async function getUsers() {
    const snap = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("users").orderBy("createdAt", "desc").get();
    return snap.docs.map((doc)=>({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate(),
            updatedAt: doc.data().updatedAt?.toDate()
        }));
}
async function toggleUserActivation(userId) {
    const docRef = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("users").doc(userId);
    const doc = await docRef.get();
    if (!doc.exists) return {
        error: "User not found"
    };
    const currentStatus = doc.data()?.isActive;
    await docRef.update({
        isActive: !currentStatus
    });
    // Update Firebase Auth status if needed (optional)
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminAuth"].updateUser(userId, {
        disabled: currentStatus
    });
    return {
        success: true
    };
}
async function getProducts() {
    const snap = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("products").orderBy("updatedAt", "desc").get();
    const products = snap.docs.map((doc)=>({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate(),
            updatedAt: doc.data().updatedAt?.toDate()
        }));
    // Calculate sold count from transactions
    const txItemsSnap = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("transaction_items").get();
    const soldCounts = {};
    txItemsSnap.docs.forEach((doc)=>{
        const item = doc.data();
        soldCounts[item.productId] = (soldCounts[item.productId] || 0) + item.quantity;
    });
    return products.map((p)=>({
            ...p,
            price: Number(p.price),
            soldCount: soldCounts[p.id] || 0
        }));
}
async function getLowStockCount() {
    const snap = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("products").get();
    const products = snap.docs.map((doc)=>({
            id: doc.id,
            name: doc.data().name,
            stock: doc.data().stock,
            lowStockThreshold: doc.data().lowStockThreshold || 5
        }));
    const lowStockItems = products.filter((p)=>p.stock <= p.lowStockThreshold);
    return {
        count: lowStockItems.length,
        items: lowStockItems
    };
}
async function getProductByBarcode(barcode) {
    const trimmedBarcode = barcode.trim();
    const snap = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("products").where("barcode", "==", trimmedBarcode).get();
    if (snap.empty) return null;
    const doc = snap.docs[0];
    const product = {
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate(),
        updatedAt: doc.data().updatedAt?.toDate()
    };
    // Calculate sold count
    const txItemsSnap = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("transaction_items").where("productId", "==", doc.id).get();
    const soldCount = txItemsSnap.docs.reduce((sum, d)=>sum + d.data().quantity, 0);
    return {
        ...product,
        price: Number(product.price),
        soldCount
    };
}
async function upsertProduct(data) {
    const { id, barcode, name, price, stock, lowStockThreshold, category, image } = data;
    const parsedPrice = parseFloat(price) || 0;
    const parsedStock = parseInt(stock) || 0;
    const parsedThreshold = parseInt(lowStockThreshold) || 5;
    const firestoreData = {
        barcode,
        name,
        price: parsedPrice,
        stock: parsedStock,
        lowStockThreshold: parsedThreshold,
        category,
        image,
        updatedAt: new Date()
    };
    if (id) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("products").doc(id).update(firestoreData);
    } else {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("products").add({
            ...firestoreData,
            createdAt: new Date()
        });
    }
    return {
        success: true
    };
}
async function deleteProduct(id) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("products").doc(id).delete();
    return {
        success: true
    };
}
async function completeSale(cashierId, items, total) {
    try {
        // Firestore Transaction
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].runTransaction(async (transaction)=>{
            const txRef = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("transactions").doc();
            // 1. Create Transaction
            transaction.set(txRef, {
                cashierId,
                total: Number(total),
                createdAt: new Date()
            });
            // 2. Create Items and Update Stocks
            for (const item of items){
                const itemRef = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("transaction_items").doc();
                transaction.set(itemRef, {
                    transactionId: txRef.id,
                    productId: item.productId,
                    quantity: item.quantity,
                    priceAtTime: Number(item.price)
                });
                const productRef = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("products").doc(item.productId);
                const productDoc = await transaction.get(productRef);
                if (productDoc.exists) {
                    const currentStock = productDoc.data()?.stock || 0;
                    transaction.update(productRef, {
                        stock: currentStock - item.quantity,
                        updatedAt: new Date()
                    });
                }
            }
        });
        return {
            success: true
        };
    } catch (error) {
        console.error("Sale error:", error);
        return {
            error: "Failed to complete sale"
        };
    }
}
async function getTransactions() {
    const snap = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("transactions").orderBy("createdAt", "desc").get();
    const transactions = [];
    for (const doc of snap.docs){
        const txData = doc.data();
        // Fetch Cashier
        const cashierDoc = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("users").doc(txData.cashierId).get();
        const cashier = cashierDoc.exists ? {
            id: cashierDoc.id,
            ...cashierDoc.data()
        } : null;
        // Fetch Items
        const itemsSnap = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("transaction_items").where("transactionId", "==", doc.id).get();
        const items = [];
        for (const itemDoc of itemsSnap.docs){
            const itemData = itemDoc.data();
            const productDoc = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("products").doc(itemData.productId).get();
            const product = productDoc.exists ? {
                id: productDoc.id,
                ...productDoc.data()
            } : null;
            items.push({
                ...itemData,
                id: itemDoc.id,
                product
            });
        }
        transactions.push({
            id: doc.id,
            ...txData,
            createdAt: txData.createdAt?.toDate(),
            cashier,
            items
        });
    }
    return transactions;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    registerUser,
    adminCreateUser,
    getUsers,
    toggleUserActivation,
    getProducts,
    getLowStockCount,
    getProductByBarcode,
    upsertProduct,
    deleteProduct,
    completeSale,
    getTransactions
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(registerUser, "4060053ab880f036dc2cbd5ed233bade4acca2a179", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(adminCreateUser, "40dbf2964ef7daa9133c2476e2c0b9d1ea785a590e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUsers, "0010a0e7e03244c85b1ef1e76c577415abfc878172", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(toggleUserActivation, "40e676a01cbb53febeaec99ec96860933e8c2ec0fd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProducts, "00df78ebb5383cb59f76e1fec79847930b21c1e633", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLowStockCount, "00b7da2130fcff59e6ef4e2860acc4be0dc7f333a5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProductByBarcode, "407cdcd394561f2e242cfdbb0d53299e1d52fc8ce4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(upsertProduct, "40eea97e91cf7ed8cacdab14034cf02133cea0b866", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProduct, "403e3f9c60d3a714533fe1cfb72328b31492e38e5d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(completeSale, "703ce1cec6fb1173c8db2e67b4b493e77341ac90c3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTransactions, "009d9c4f32d6b7eabfbb33c4bdababb53aed6d5f5d", null);
}),
"[project]/.next-internal/server/app/admin/users/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions.ts [app-rsc] (ecmascript)");
;
;
;
;
}),
"[project]/.next-internal/server/app/admin/users/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0010a0e7e03244c85b1ef1e76c577415abfc878172",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUsers"],
    "00b7da2130fcff59e6ef4e2860acc4be0dc7f333a5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLowStockCount"],
    "40dbf2964ef7daa9133c2476e2c0b9d1ea785a590e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminCreateUser"],
    "40e676a01cbb53febeaec99ec96860933e8c2ec0fd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toggleUserActivation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$users$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/users/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__61c85a1a._.js.map