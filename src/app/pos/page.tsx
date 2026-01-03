import { POSSystem } from "@/components/pos/Cart";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { LogoutButton } from "@/components/shared/LogoutButton";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Shield, LayoutDashboard } from "lucide-react";
import Link from "next/link"; // Reverted to original to maintain syntactical correctness
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { NotificationBell } from "@/components/shared/NotificationBell";

export default async function POSPage() {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
        redirect("/login");
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <header className="px-4 md:px-6 py-3 border-b border-border flex justify-between items-center bg-background/80 backdrop-blur-md sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <h1 className="text-xl md:text-2xl font-black text-primary italic tracking-tighter">APRIL.POS</h1>
                    <Badge variant="outline" className="hidden sm:inline-flex font-black text-[10px] tracking-widest border-primary/20 bg-primary/5 text-primary">
                        LIVE
                    </Badge>
                </div>

                <div className="flex gap-2 md:gap-6 items-center">
                    {session.user.role === "ADMIN" && (
                        <Link href="/admin">
                            <Button variant="ghost" size="icon" className="md:hidden text-primary">
                                <Shield className="w-5 h-5" />
                            </Button>
                            <Badge variant="secondary" className="hidden md:inline-flex hover:bg-primary hover:text-white transition-colors cursor-pointer gap-2 py-1.5 px-3 font-black text-[10px] tracking-widest border-border shadow-sm">
                                <Shield className="w-3 h-3" />
                                DASHBOARD
                            </Badge>
                        </Link>
                    )}

                    <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full border border-emerald-500/20">
                        <div className="w-2 h-2 bg-emerald-500 animate-pulse rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">
                            {session.user.role}
                        </span>
                    </div>

                    <ThemeToggle />
                    <NotificationBell />

                    <div className="flex items-center gap-2 md:gap-3 border-l border-border pl-2 md:pl-6">
                        <Avatar className="h-8 w-8 md:h-10 md:w-10 border-2 border-primary/20 shadow-lg shadow-primary/10">
                            <AvatarFallback className="bg-gradient-to-br from-primary to-purple-600 text-white font-black text-xs md:text-base">
                                {session.user.name?.charAt(0) || "U"}
                            </AvatarFallback>
                        </Avatar>
                        <LogoutButton />
                    </div>
                </div>
            </header>

            <main className="container mx-auto p-6">
                <POSSystem cashierId={session.user.id} />
            </main>
        </div>
    );
}
