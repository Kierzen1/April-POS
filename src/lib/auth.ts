import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { adminDb } from "@/lib/firebase-admin"
import bcrypt from "bcryptjs"

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null

                const usersSnap = await adminDb.collection("users").where("email", "==", credentials.email).get();

                if (usersSnap.empty) {
                    console.log(`Login failed: No user found with email ${credentials.email}`);
                    return null
                }

                const userDoc = usersSnap.docs[0];
                const user = userDoc.data();

                if (!user.password) {
                    console.log(`Login failed: User ${credentials.email} has no password set in Firestore.`);
                    return null;
                }

                const isValid = await bcrypt.compare(credentials.password, user.password)

                if (!isValid) {
                    console.log(`Login failed: Invalid password for user ${credentials.email}`);
                    return null
                }

                return {
                    id: userDoc.id,
                    email: user.email,
                    name: user.name,
                    role: user.role,
                    isActive: user.isActive
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user, trigger, session }) {
            if (user) {
                token.id = user.id
                token.role = user.role
                token.isActive = user.isActive
            }
            return token
        },
        async session({ session, token }) {
            if (token && session.user) {
                (session.user as any).id = token.id;
                (session.user as any).role = token.role;
                (session.user as any).isActive = token.isActive;
            }
            return session
        },
        async signIn({ user }) {
            // Allow sign-in if user is active OR is an Admin (Admin should always be active ideally, but we check role too)
            // Check logic: If user is not active, they can still "sign in" but middleware will block them from protected pages
            // This allows them to reach the "Waiting for Activation" page while authenticated
            return true
        }
    },
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET
}
