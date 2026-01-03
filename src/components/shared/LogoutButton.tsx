"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
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

export function LogoutButton() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                >
                    <LogOut className="w-5 h-5" />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-zinc-950 border-white/10 text-white">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-2xl font-black uppercase tracking-tight">Sign Out System?</AlertDialogTitle>
                    <AlertDialogDescription className="text-zinc-400 font-medium">
                        Are you sure you want to end your current session? You will need to log in again to access the POS.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="bg-transparent border-white/10 hover:bg-white/5 text-white uppercase font-bold text-xs">Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={() => signOut({ callbackUrl: "/login" })}
                        className="bg-destructive hover:bg-destructive/90 text-white uppercase font-bold text-xs"
                    >
                        Sign Out Now
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
