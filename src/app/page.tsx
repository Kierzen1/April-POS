"use client";

import { Button } from "@heroui/react";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black">
            <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex flex-col gap-8 text-center">
                <h1 className="text-8xl font-black italic tracking-tighter bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    APRIL POS
                </h1>
                <p className="text-xl text-zinc-400 max-w-lg">
                    Modern, lightning-fast Point of Sale system for the Philippines. Designed for speed, built for reliability.
                </p>
                <div className="flex gap-4 mt-4">
                    <Link href="/login">
                        <Button color="primary" variant="shadow" size="lg" className="w-40 font-bold h-14 text-lg">
                            Sign In
                        </Button>
                    </Link>
                    <Link href="/register">
                        <Button color="default" variant="flat" size="lg" className="w-40 font-bold h-14 text-zinc-300 text-lg">
                            Register
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="fixed bottom-10 text-zinc-600 text-xs tracking-widest uppercase">
                Built with Next.js & HeroUI • POS Philippines 2025
            </div>
        </main>
    );
}
