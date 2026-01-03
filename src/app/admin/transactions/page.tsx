"use client";

import React, { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { getTransactions } from "@/lib/actions";
import { Receipt, Calendar, User, ShoppingBag, ChevronDown, ChevronRight, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TransactionsPage() {
    const [transactions, setTransactions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

    useEffect(() => {
        fetchTransactions();
    }, []);

    async function fetchTransactions() {
        const data = await getTransactions();
        setTransactions(data);
        setLoading(false);
    }

    const toggleExpand = (id: string) => {
        const newExpanded = new Set(expandedIds);
        if (newExpanded.has(id)) {
            newExpanded.delete(id);
        } else {
            newExpanded.add(id);
        }
        setExpandedIds(newExpanded);
    };

    return (
        <div className="space-y-4 md:space-y-6 pb-20 md:pb-0">
            <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-black tracking-tighter uppercase flex items-center gap-2">
                        <Receipt className="w-6 h-6 md:w-8 md:h-8 text-primary" /> Transactions
                    </h1>
                    <p className="text-sm text-muted-foreground font-medium">History of all completed sales</p>
                </div>
            </header>

            <Card className="border-border shadow-md overflow-hidden bg-card transition-colors">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-muted/50 transition-none hover:bg-muted/50 border-b-2">
                                <TableHead className="w-[40px] px-2 md:px-4"></TableHead>
                                <TableHead className="min-w-[100px] uppercase text-[10px] font-black">REF ID</TableHead>
                                <TableHead className="min-w-[150px]">
                                    <div className="flex items-center gap-1 uppercase text-[10px] font-black">
                                        <Calendar className="w-3 h-3" /> DATE & TIME
                                    </div>
                                </TableHead>
                                <TableHead className="min-w-[120px]">
                                    <div className="flex items-center gap-1 uppercase text-[10px] font-black">
                                        <User className="w-3 h-3" /> CASHIER
                                    </div>
                                </TableHead>
                                <TableHead className="min-w-[80px]">
                                    <div className="flex items-center gap-1 uppercase text-[10px] font-black">
                                        <ShoppingBag className="w-3 h-3" /> ITEMS
                                    </div>
                                </TableHead>
                                <TableHead className="text-right font-black uppercase text-[10px] min-w-[100px]">TOTAL</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {transactions.length === 0 && !loading ? (
                                <TableRow>
                                    <TableCell colSpan={6} className="text-center h-24 text-muted-foreground italic">
                                        No transactions recorded yet
                                    </TableCell>
                                </TableRow>
                            ) : null}
                            {transactions.map((tx) => {
                                const isExpanded = expandedIds.has(tx.id);
                                return (
                                    <React.Fragment key={tx.id}>
                                        <TableRow
                                            className={`cursor-pointer transition-colors ${isExpanded ? 'bg-primary/5 hover:bg-primary/10' : 'hover:bg-muted/30'}`}
                                            onClick={() => toggleExpand(tx.id)}
                                        >
                                            <TableCell className="px-2 md:px-4">
                                                {isExpanded ? <ChevronDown className="w-4 h-4 text-primary" /> : <ChevronRight className="w-4 h-4 text-muted-foreground" />}
                                            </TableCell>
                                            <TableCell className="font-mono text-[10px] text-muted-foreground font-black tracking-tighter">
                                                #{tx.id.substring(0, 6).toUpperCase()}
                                            </TableCell>
                                            <TableCell className="text-xs font-medium">
                                                {new Date(tx.createdAt).toLocaleString('en-PH', {
                                                    dateStyle: 'medium',
                                                    timeStyle: 'short'
                                                })}
                                            </TableCell>
                                            <TableCell className="text-xs font-bold uppercase tracking-tight">
                                                {tx.cashier.name}
                                            </TableCell>
                                            <TableCell className="text-xs font-medium">
                                                {tx.items.length} {tx.items.length === 1 ? 'item' : 'items'}
                                            </TableCell>
                                            <TableCell className="text-right font-black text-primary tabular-nums tracking-tighter">
                                                ₱{tx.total.toFixed(2)}
                                            </TableCell>
                                        </TableRow>
                                        {isExpanded && (
                                            <TableRow className="bg-muted/20 border-b">
                                                <TableCell colSpan={6} className="p-0">
                                                    <div className="p-4 md:p-6 bg-card border-x border-b shadow-inner animate-in slide-in-from-top-2 duration-200">
                                                        <div className="flex items-center gap-2 mb-4">
                                                            <Package2 className="w-4 h-4 text-primary" />
                                                            <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground">Order Breakdown</h3>
                                                        </div>

                                                        {/* Desktop Header */}
                                                        <div className="hidden sm:grid grid-cols-12 gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3 px-4 py-2 bg-muted/50 rounded-lg">
                                                            <div className="col-span-6">Product</div>
                                                            <div className="col-span-2 text-center">Qty</div>
                                                            <div className="col-span-2 text-right">Price</div>
                                                            <div className="col-span-2 text-right">Subtotal</div>
                                                        </div>

                                                        {/* Items List */}
                                                        <div className="space-y-1">
                                                            {tx.items.map((item: any, idx: number) => (
                                                                <div key={idx} className="flex flex-col sm:grid sm:grid-cols-12 gap-2 px-3 md:px-4 py-3 rounded-lg border-b border-muted sm:border-0 sm:border-b last:border-0 transition-colors bg-background/50 sm:bg-transparent mb-2 sm:mb-0">
                                                                    <div className="col-span-6 flex flex-col">
                                                                        <span className="font-black text-sm tracking-tight text-foreground uppercase">{item.product.name}</span>
                                                                        <span className="text-[10px] font-mono text-muted-foreground font-bold leading-none mt-1">{item.product.barcode}</span>
                                                                    </div>
                                                                    <div className="flex sm:grid sm:col-span-6 mt-2 sm:mt-0 items-center justify-between sm:grid-cols-6 gap-2">
                                                                        <div className="sm:col-span-2 flex items-center sm:justify-center font-mono font-black text-primary text-sm sm:text-base">
                                                                            x{item.quantity}
                                                                        </div>
                                                                        <div className="sm:col-span-2 flex items-center justify-end font-mono text-muted-foreground text-xs font-bold tabular-nums">
                                                                            ₱{item.priceAtTime.toFixed(2)}
                                                                        </div>
                                                                        <div className="sm:col-span-2 flex items-center justify-end font-black text-primary tabular-nums text-sm sm:text-base italic">
                                                                            ₱{(item.quantity * item.priceAtTime).toFixed(2)}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>

                                                        <div className="mt-4 pt-4 border-t flex flex-col sm:flex-row gap-4 justify-between items-center px-2 md:px-4">
                                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50 text-center sm:text-left">SYSTEM GENERATED RECEIPT • {tx.id.toUpperCase()}</span>
                                                            <div className="flex items-center gap-4 justify-between w-full sm:w-auto mt-2 sm:mt-0">
                                                                <span className="text-xs font-black uppercase tracking-widest text-muted-foreground shrink-0">Total Amount</span>
                                                                <span className="text-xl font-black text-primary italic tabular-nums">₱{tx.total.toFixed(2)}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </React.Fragment>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>
            </Card>
        </div>
    );
}
