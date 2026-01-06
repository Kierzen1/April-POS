import { firestoreProducts } from "./firestore-products";

export async function verifyFirestore() {
    console.log("Starting Firestore Verification...");

    try {
        // 1. Try to add a test product
        console.log("Adding test product...");
        const productId = await firestoreProducts.addProduct({
            barcode: "TEST-" + Date.now(),
            name: "Test Firestore Product",
            description: "This is a test product to verify Firestore integration.",
            price: 9.99,
            stock: 100,
            lowStockThreshold: 10,
            category: "Test"
        });
        console.log("Success: Added product with ID:", productId);

        // 2. Try to retrieve it
        console.log("Retrieving product...");
        const product = await firestoreProducts.getProductById(productId);
        if (product) {
            console.log("Success: Retrieved product:", product.name);
        } else {
            throw new Error("Failed to retrieve product after adding it.");
        }

        // 3. Clean up (Optional)
        console.log("Cleaning up test product...");
        await firestoreProducts.deleteProduct(productId);
        console.log("Success: Deleted test product.");

        console.log("Firestore Verification COMPLETED SUCCESSFULLY!");
        return true;
    } catch (error) {
        console.error("Firestore Verification FAILED:", error);
        return false;
    }
}
