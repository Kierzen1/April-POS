import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware(req) {
        const token = req.nextauth.token
        const isAuth = !!token
        const path = req.nextUrl.pathname

        // If not authenticated, the middleware handles the redirect to /login automatically (due to secret presence)

        if (isAuth) {
            // 1. Check Activation
            if (!token.isActive && path !== "/waiting-activation" && path !== "/logout") {
                return NextResponse.redirect(new URL("/waiting-activation", req.url))
            }

            // 2. Prevent active users from seeing the waiting page
            if (token.isActive && path === "/waiting-activation") {
                return NextResponse.redirect(new URL("/pos", req.url))
            }

            // 3. Admin-only routes
            if (path.startsWith("/admin") && token.role !== "ADMIN") {
                return NextResponse.redirect(new URL("/pos", req.url))
            }

            // 4. Staff-only routes (if any specific ones exist, currently POS is for all)
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    }
)

export const config = {
    matcher: [
        "/pos/:path*",
        "/admin/:path*",
        "/waiting-activation",
    ],
}
