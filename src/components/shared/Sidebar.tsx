"use client";

import { Button } from "@/components/ui/button";
import {
    Users,
    Package,
    History,
    LayoutDashboard,
    LogOut,
    ChevronRight,
    Monitor
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/admin" },
    { name: "User Management", icon: Users, path: "/admin/users" },
    { name: "Product Management", icon: Package, path: "/admin/products" },
    { name: "Transactions", icon: History, path: "/admin/transactions" },
];

import { ThemeToggle } from "./ThemeToggle";

export function AdminSidebar() {
    const pathname = usePathname();

    return (
        <div className="flex flex-col h-full bg-card text-card-foreground transition-colors">
            <div className="p-6 flex justify-between items-start">
                <div>
                    <h1 className="text-2xl font-black text-primary italic tracking-tighter">APRIL.POS</h1>
                    <p className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.3em] mt-1">Admin Console</p>
                </div>
                <ThemeToggle />
            </div>

            <nav className="flex-grow px-4 space-y-2 mt-4">
                {menuItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link key={item.path} href={item.path}>
                            <div className={`
                                flex items-center justify-between p-3 rounded-xl transition-all group
                                ${isActive
                                    ? "bg-primary text-white shadow-[0_4px_12px_rgba(var(--primary),0.3)]"
                                    : "text-muted-foreground hover:bg-muted hover:text-foreground"}
                            `}>
                                <div className="flex items-center gap-3">
                                    <item.icon className={`w-5 h-5 ${isActive ? "text-white" : "group-hover:text-primary transition-colors"}`} />
                                    <span className="font-black uppercase text-xs tracking-widest">{item.name}</span>
                                </div>
                                {isActive && <ChevronRight className="w-4 h-4" />}
                            </div>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-border space-y-2">
                <Link href="/pos" className="block">
                    <Button
                        variant="secondary"
                        className="w-full justify-start gap-4 h-12 font-black uppercase tracking-widest text-[10px] bg-muted hover:bg-primary hover:text-white border-border transition-all group"
                    >
                        <Monitor className="w-4 h-4 group-hover:scale-110 transition-transform" /> POS System
                    </Button>
                </Link>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button
                            variant="destructive"
                            className="w-full justify-start gap-4 h-12 font-black uppercase tracking-widest text-[10px] shadow-sm active:scale-[0.98] transition-all"
                        >
                            <LogOut className="w-4 h-4" /> Sign Out System
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-background border-border text-foreground">
                        <AlertDialogHeader>
                            <AlertDialogTitle className="text-2xl font-black uppercase tracking-tight">End Admin Session?</AlertDialogTitle>
                            <AlertDialogDescription className="text-muted-foreground font-medium">
                                Are you sure you want to log out from the administrative console?
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel className="bg-transparent border-border hover:bg-muted text-foreground uppercase font-bold text-xs">Cancel</AlertDialogCancel>
                            <AlertDialogAction
                                onClick={() => signOut({ callbackUrl: "/login" })}
                                className="bg-destructive hover:bg-destructive/90 text-white uppercase font-bold text-xs"
                            >
                                Confirm Logout
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </div>
    );
}
