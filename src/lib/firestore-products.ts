import {
    collection,
    addDoc,
    getDocs,
    doc,
    getDoc,
    updateDoc,
    deleteDoc,
    query,
    where
} from "firebase/firestore";
import { db } from "./firebase";

export interface Product {
    id?: string;
    barcode: string;
    name: string;
    description?: string;
    price: number;
    stock: number;
    lowStockThreshold: number;
    category?: string;
    image?: string;
    createdAt: Date;
    updatedAt: Date;
}

const PRODUCTS_COLLECTION = "products";

export const firestoreProducts = {
    // Add a new product
    async addProduct(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) {
        const now = new Date();
        const docRef = await addDoc(collection(db, PRODUCTS_COLLECTION), {
            ...product,
            createdAt: now,
            updatedAt: now,
        });
        return docRef.id;
    },

    // Get all products
    async getAllProducts(): Promise<Product[]> {
        const querySnapshot = await getDocs(collection(db, PRODUCTS_COLLECTION));
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate(),
            updatedAt: doc.data().updatedAt?.toDate(),
        } as Product));
    },

    // Get product by ID
    async getProductById(id: string): Promise<Product | null> {
        const docRef = doc(db, PRODUCTS_COLLECTION, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            return {
                id: docSnap.id,
                ...data,
                createdAt: data.createdAt?.toDate(),
                updatedAt: data.updatedAt?.toDate(),
            } as Product;
        }
        return null;
    },

    // Update product
    async updateProduct(id: string, updates: Partial<Product>) {
        const docRef = doc(db, PRODUCTS_COLLECTION, id);
        await updateDoc(docRef, {
            ...updates,
            updatedAt: new Date(),
        });
    },

    // Delete product
    async deleteProduct(id: string) {
        const docRef = doc(db, PRODUCTS_COLLECTION, id);
        await deleteDoc(docRef);
    },

    // Search by barcode
    async getProductByBarcode(barcode: string): Promise<Product | null> {
        const q = query(collection(db, PRODUCTS_COLLECTION), where("barcode", "==", barcode));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const docSnap = querySnapshot.docs[0];
            const data = docSnap.data();
            return {
                id: docSnap.id,
                ...data,
                createdAt: data.createdAt?.toDate(),
                updatedAt: data.updatedAt?.toDate(),
            } as Product;
        }
        return null;
    }
};
