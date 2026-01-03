"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export function LoginForm() {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const registered = searchParams.get("registered");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (result?.error) {
            setError("Invalid email or password");
            setLoading(false);
        } else {
            router.push("/pos");
            router.refresh();
        }
    }

    return (
        <Card className="w-full max-w-md shadow-xl border-zinc-200 dark:border-zinc-800">
            <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-3xl font-black tracking-tighter">Welcome Back</CardTitle>
                <CardDescription>Sign in to your account to continue</CardDescription>
                {registered && (
                    <p className="text-emerald-500 text-sm font-medium mt-2">
                        Registration successful! Please login.
                    </p>
                )}
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input
                            name="email"
                            type="email"
                            placeholder="name@example.com"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Password</label>
                        <Input
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    {error && <p className="text-destructive text-sm font-medium">{error}</p>}
                    <Button
                        className="w-full font-bold h-11"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : null}
                        SIGN IN
                    </Button>
                    <p className="text-center text-sm text-muted-foreground mt-4">
                        Don&apos;t have an account?{" "}
                        <Link href="/register" className="text-primary font-bold hover:underline">
                            Register
                        </Link>
                    </p>
                </form>
            </CardContent>
        </Card>
    );
}
