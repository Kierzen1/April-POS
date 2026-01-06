import * as admin from 'firebase-admin';

const privateKey = process.env.FIREBASE_PRIVATE_KEY;
const firebaseAdminConfig = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: privateKey ? privateKey.replace(/\\n/g, '\n') : undefined,
};

// Use a global variable to persist the admin instance across HMR reloads
const globalForAdmin = global as unknown as { admin: typeof admin };

if (!admin.apps.length) {
    console.log("Initializing Firebase Admin SDK for project:", firebaseAdminConfig.projectId);
    try {
        admin.initializeApp({
            credential: admin.credential.cert(firebaseAdminConfig as any),
            projectId: firebaseAdminConfig.projectId,
        });
        console.log("Firebase Admin SDK initialized successfully.");
    } catch (error) {
        console.error("Critical: Failed to initialize Firebase Admin SDK", error);
    }
}

export const adminDb = admin.firestore();
export const adminAuth = admin.auth();
export default admin;
