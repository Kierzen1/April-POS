"use client";

import { useEffect, useState } from "react";
import { Bell, ShoppingCart, AlertCircle } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getLowStockCount } from "@/lib/actions";
import Link from "next/link";

export function NotificationBell() {
    const [lowStock, setLowStock] = useState<{ count: number; items: any[] }>({ count: 0, items: [] });
    const [isOpen, setIsOpen] = useState(false);

    const fetchAlerts = async () => {
        const data = await getLowStockCount();
        setLowStock(data);
    };

    useEffect(() => {
        fetchAlerts();
        // Poll every 30 seconds for new alerts
        const interval = setInterval(fetchAlerts, 30000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="relative h-10 w-10 rounded-full hover:bg-muted transition-colors">
                    <Bell className="h-5 w-5 text-muted-foreground" />
                    {lowStock.count > 0 && (
                        <span className="absolute top-2 right-2 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-black text-white shadow-lg shadow-rose-500/30 animate-in zoom-in duration-300">
                            {lowStock.count}
                        </span>
                    )}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden rounded-3xl border-2 border-border gap-0 bg-card">
                <DialogHeader className="p-6 bg-gradient-to-br from-rose-500 to-rose-600 text-white">
                    <DialogTitle className="text-xl font-black uppercase tracking-tight flex items-center gap-2">
                        <AlertCircle className="w-6 h-6" /> Low Stock Alerts
                    </DialogTitle>
                    <p className="text-rose-100 text-sm font-medium mt-1">
                        {lowStock.count} items require immediate attention
                    </p>
                </DialogHeader>
                <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3 bg-zinc-50/50 dark:bg-zinc-900/50">
                    {lowStock.items.length === 0 ? (
                        <div className="py-12 text-center">
                            <ShoppingCart className="w-12 h-12 mx-auto text-muted-foreground/20 mb-3" />
                            <p className="text-muted-foreground font-black uppercase tracking-widest text-xs">All stock levels healthy</p>
                        </div>
                    ) : (
                        lowStock.items.map((item) => (
                            <div key={item.id} className="group flex items-center justify-between p-3 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-rose-200 transition-all cursor-default">
                                <div className="flex flex-col">
                                    <span className="font-black text-sm uppercase tracking-tight text-foreground group-hover:text-rose-600 transition-colors">
                                        {item.name}
                                    </span>
                                    <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                                        Current Stock: <span className="text-rose-500">{item.stock}</span>
                                    </span>
                                </div>
                                <Link
                                    href="/admin/products"
                                    onClick={() => setIsOpen(false)}
                                    className="px-3 py-1.5 rounded-xl bg-muted hover:bg-rose-500 hover:text-white transition-all text-[10px] font-black uppercase tracking-widest"
                                >
                                    Refill
                                </Link>
                            </div>
                        ))
                    )}
                </div>
                <div className="p-4 border-t border-border bg-card">
                    <Link href="/admin/products" onClick={() => setIsOpen(false)} className="w-full">
                        <Button className="w-full font-black uppercase tracking-widest text-xs h-11 rounded-2xl shadow-lg shadow-primary/10">
                            Manage Inventory
                        </Button>
                    </Link>
                </div>
            </DialogContent>
        </Dialog>
    );
}
