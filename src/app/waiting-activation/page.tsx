"use client";

import { signOut } from "next-auth/react";
import { Clock, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function WaitingActivationPage() {
    return (
        <div className="flex min-h-screen items-center justify-center p-4 bg-muted/30">
            <Card className="w-full max-w-md border-border shadow-2xl bg-card transition-colors rounded-2xl overflow-hidden">
                <CardHeader className="flex flex-col items-center gap-6 text-center pt-10 pb-8 px-6">
                    <div className="w-24 h-24 bg-amber-500/10 rounded-full flex items-center justify-center border-4 border-amber-500/20 relative">
                        <Clock className="w-12 h-12 text-amber-500 animate-pulse" />
                        <div className="absolute inset-0 rounded-full border-4 border-amber-500/50 animate-ping opacity-20" />
                    </div>
                    <div>
                        <CardTitle className="text-3xl font-black uppercase tracking-tighter text-foreground">Access Pending</CardTitle>
                        <CardDescription className="text-muted-foreground mt-3 text-base font-medium max-w-[280px] mx-auto">
                            Your account is currently in the verification queue.
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="space-y-8 px-8 pb-10">
                    <div className="bg-muted/50 p-6 rounded-2xl text-center border border-border">
                        <p className="text-sm font-bold leading-relaxed text-muted-foreground uppercase tracking-tight">
                            An Administrator must activate your account before you can log in.
                            <span className="block mt-2 text-primary font-black">Please contact your manager.</span>
                        </p>
                    </div>

                    <Button
                        variant="destructive"
                        className="w-full h-12 font-black uppercase tracking-widest flex items-center justify-center gap-3 group rounded-xl shadow-lg shadow-destructive/20 border-b-4 border-destructive-foreground/20 active:border-b-0 active:translate-y-1 transition-all"
                        onClick={() => signOut({ callbackUrl: "/login" })}
                    >
                        <LogOut className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Return to Login
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
