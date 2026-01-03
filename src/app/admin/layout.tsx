"use client";

import { AdminSidebar } from "@/components/shared/Sidebar";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NotificationBell } from "@/components/shared/NotificationBell";
import { ThemeToggle } from "@/components/shared/ThemeToggle"; // Added ThemeToggle import

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex flex-col md:flex-row h-screen w-full bg-background overflow-hidden relative">
            {/* Mobile Header */}
            <header className="md:hidden flex items-center justify-between p-4 border-b border-border bg-card sticky top-0 z-50">
                <h1 className="text-xl font-black text-primary italic tracking-tighter">APRIL.POS</h1>
                <div className="flex items-center gap-2">
                    <NotificationBell />
                    <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(true)}>
                        <Menu className="w-6 h-6" />
                    </Button>
                </div>
            </header>

            {/* Desktop Sidebar */}
            <div className="hidden md:block w-64 shrink-0 h-full z-40 border-r border-border">
                <AdminSidebar />
            </div>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsSidebarOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] md:hidden"
                        />
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 left-0 w-[280px] bg-card z-[100] md:hidden shadow-2xl"
                        >
                            <div className="flex flex-col h-full">
                                <div className="p-4 flex justify-end border-b border-border">
                                    <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(false)}>
                                        <X className="w-6 h-6" />
                                    </Button>
                                </div>
                                <div className="flex-1 overflow-y-auto">
                                    <AdminSidebar />
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <main className="flex-1 h-full overflow-y-auto bg-zinc-50/30 dark:bg-black relative z-10">
                <div className="p-4 md:p-8 max-w-7xl mx-auto w-full">
                    {children}
                </div>
            </main>
        </div>
    );
}
