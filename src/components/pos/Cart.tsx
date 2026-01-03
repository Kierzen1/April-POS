"use client";

import { useState, useMemo } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
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
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Trash2, Plus, Minus, ShoppingCart, Barcode, Loader2, CheckCircle2, X, Camera, Package } from "lucide-react";
import { ScannerListener } from "./ScannerListener";
import { CameraScanner } from "@/components/shared/CameraScanner";
import { getProductByBarcode, completeSale } from "@/lib/actions";

interface CartItem {
    id: string;
    productId: string;
    barcode: string;
    name: string;
    price: number;
    quantity: number;
    image?: string | null;
}

export function POSSystem({ cashierId }: { cashierId: string }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [manualBarcode, setManualBarcode] = useState("");
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState<string | null>(null);
    const [orderTotal, setOrderTotal] = useState(0);
    const [amountGiven, setAmountGiven] = useState("");
    const [change, setChange] = useState(0);
    const [showCamera, setShowCamera] = useState(false);

    const total = useMemo(() => {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }, [cart]);

    const addToCart = async (barcode: string) => {
        const trimmed = barcode.trim();
        if (!trimmed) return;

        setIsAdding(true);
        try {
            const product = await getProductByBarcode(trimmed);

            if (!product) {
                setShowError(`Product not found: "${trimmed}"`);
                return;
            }

            setCart(prev => {
                const existing = prev.find(item => item.barcode === trimmed);
                if (existing) {
                    return prev.map(item =>
                        item.barcode === trimmed
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                }
                return [...prev, {
                    id: Math.random().toString(),
                    productId: product.id,
                    barcode: product.barcode,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    image: product.image
                }];
            });
        } catch (error) {
            console.error("Lookup error:", error);
            setShowError("Error looking up product.");
        } finally {
            setIsAdding(false);
        }
    };

    const handleCheckout = async () => {
        if (cart.length === 0) return;

        setIsCheckingOut(true);
        const currentTotal = total;
        const result = await completeSale(cashierId, cart.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price
        })), currentTotal);

        if (result.success) {
            setOrderTotal(currentTotal);
            const givenNum = parseFloat(amountGiven) || 0;
            setChange(givenNum - currentTotal);
            setShowSuccess(true);
            setCart([]);
            setAmountGiven("");
        } else {
            setShowError("Checkout failed: " + result.error);
        }
        setIsCheckingOut(false);
    };

    const removeItem = (id: string) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id: string, delta: number) => {
        setCart(prev => prev.map(item => {
            if (item.id === id) {
                const newQty = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQty };
            }
            return item;
        }));
    };

    return (
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 min-h-[calc(100vh-140px)]">
            <ScannerListener onScan={addToCart} />

            {/* Items List */}
            <div className="flex-grow flex flex-col min-h-[400px] lg:min-h-0">
                <Card className="flex-grow flex flex-col border-border shadow-lg overflow-hidden bg-card text-card-foreground">
                    <CardHeader className="py-3 lg:py-4 px-4 lg:px-6 border-b bg-muted/30">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                            <CardTitle className="text-lg lg:text-xl font-black uppercase tracking-tight flex items-center gap-2">
                                <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6 text-primary" /> Active Cart
                                <span className="ml-2 bg-primary text-primary-foreground text-[10px] px-2 py-0.5 rounded-full tabular-nums">
                                    {cart.length} ITEMS
                                </span>
                            </CardTitle>
                            <div className="flex gap-2 w-full sm:max-w-sm">
                                <div className="relative flex-grow">
                                    <Barcode className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <Input
                                        placeholder="Scan barcode..."
                                        className="pl-10 h-10 font-mono text-sm tracking-widest"
                                        value={manualBarcode}
                                        onChange={(e) => setManualBarcode(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                addToCart(manualBarcode);
                                                setManualBarcode("");
                                            }
                                        }}
                                    />
                                </div>
                                <Button
                                    size="sm"
                                    onClick={() => {
                                        addToCart(manualBarcode);
                                        setManualBarcode("");
                                    }}
                                    className="font-bold uppercase tracking-tight px-3 lg:px-4 shrink-0"
                                >
                                    ADD
                                </Button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow overflow-auto">
                        <Table>
                            <TableHeader className="sticky top-0 bg-background z-10 shadow-sm">
                                <TableRow className="bg-muted/50 hover:bg-muted/50 border-b-2">
                                    <TableHead className="w-[45%]">PRODUCT</TableHead>
                                    <TableHead>PRICE</TableHead>
                                    <TableHead className="text-center">QUANTITY</TableHead>
                                    <TableHead className="text-right">SUBTOTAL</TableHead>
                                    <TableHead className="w-[80px]"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {cart.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={5} className="h-64 text-center">
                                            <div className="flex flex-col items-center justify-center text-muted-foreground animate-in fade-in zoom-in duration-300">
                                                <div className="bg-muted p-6 rounded-full mb-4">
                                                    <Barcode className="w-12 h-12 opacity-20" />
                                                </div>
                                                <p className="font-bold tracking-tight uppercase text-sm">Cart is currently empty</p>
                                                <p className="text-xs mt-1">Ready for input. Scan items to start.</p>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ) : null}
                                {cart.map((item) => (
                                    <TableRow key={item.id} className="hover:bg-primary/5 transition-colors border-b">
                                        <TableCell className="w-12">
                                            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center overflow-hidden border border-border">
                                                {item.image ? (
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <Package className="w-5 h-5 text-muted-foreground/30" />
                                                )}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-col">
                                                <span className="font-black text-sm uppercase tracking-tight leading-tight">{item.name}</span>
                                                <span className="text-[10px] text-muted-foreground font-mono tracking-tighter mt-0.5">{item.barcode}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="font-mono text-sm">₱{item.price.toFixed(2)}</TableCell>
                                        <TableCell>
                                            <div className="flex items-center justify-center gap-3">
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="h-7 w-7 rounded-md border-border hover:bg-muted"
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                >
                                                    <Minus className="w-3 h-3" />
                                                </Button>
                                                <span className="w-6 text-center text-sm font-black tabular-nums">{item.quantity}</span>
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="h-7 w-7 rounded-md border-border hover:bg-muted"
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                >
                                                    <Plus className="w-3 h-3" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right font-black text-primary tabular-nums tracking-tighter">
                                            ₱{(item.price * item.quantity).toFixed(2)}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex justify-end pr-2">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                                                    onClick={() => removeItem(item.id)}
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>

            {/* Checkout Section */}
            <div className="w-full lg:w-[400px] flex flex-col gap-4 lg:gap-6">
                <Card className="border-border shadow-xl bg-card text-card-foreground overflow-hidden">
                    <CardHeader className="border-b border-border bg-muted/50 py-3 lg:py-4">
                        <CardTitle className="text-base lg:text-lg font-black uppercase tracking-widest flex items-center justify-between">
                            Order Summary
                            <Receipt className="w-5 h-5 opacity-50 text-primary" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-6">
                        <div className="space-y-4 font-bold tracking-tight">
                            <div className="flex justify-between items-center text-sm text-muted-foreground dark:text-zinc-400">
                                <span className="uppercase tracking-widest text-[10px]">Subtotal</span>
                                <span className="tabular-nums font-black text-foreground">₱{total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm text-muted-foreground dark:text-zinc-400">
                                <span className="uppercase tracking-widest text-[10px]">Processing Fee</span>
                                <span className="tabular-nums font-black text-foreground">₱0.00</span>
                            </div>
                            <Separator className="bg-border dark:bg-white/10" />
                            <div className="flex justify-between items-end py-2">
                                <span className="text-muted-foreground uppercase tracking-widest text-[11px] font-black pb-1">Grand Total</span>
                                <span className="text-4xl font-black text-emerald-500 dark:text-emerald-400 tracking-tighter tabular-nums underline decoration-emerald-500/20 underline-offset-8">₱{total.toFixed(2)}</span>
                            </div>

                            <Separator className="bg-border dark:bg-white/10" />

                            <div className="space-y-3 pt-2">
                                <div className="space-y-1.5 text-card-foreground">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Cash Received (₱)</label>
                                    <Input
                                        type="number"
                                        placeholder="0.00"
                                        value={amountGiven}
                                        onChange={(e) => setAmountGiven(e.target.value)}
                                        className="h-12 text-xl font-black bg-muted/50 border-2 border-border focus:border-primary transition-all text-foreground"
                                    />
                                </div>
                                {amountGiven && parseFloat(amountGiven) >= total && (
                                    <div className="flex justify-between items-center p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 animate-in fade-in slide-in-from-top-2">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Change Due</span>
                                        <span className="text-xl font-black text-emerald-600 dark:text-emerald-400 tabular-nums">₱{(parseFloat(amountGiven) - total).toFixed(2)}</span>
                                    </div>
                                )}
                                {amountGiven && parseFloat(amountGiven) < total && (
                                    <div className="flex justify-between items-center p-3 rounded-xl bg-destructive/5 border border-destructive/20 animate-in fade-in slide-in-from-top-2">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-destructive">Shortage</span>
                                        <span className="text-xl font-black text-destructive tabular-nums">₱{(total - parseFloat(amountGiven)).toFixed(2)}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <Button
                            className="w-full h-16 text-lg font-black tracking-widest uppercase bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_8px_16px_rgba(16,185,129,0.3)] disabled:opacity-20 flex items-center gap-3 active:scale-[0.98] transition-all"
                            disabled={cart.length === 0 || isCheckingOut || !amountGiven || parseFloat(amountGiven) < total}
                            onClick={handleCheckout}
                        >
                            {isCheckingOut ? (
                                <Loader2 className="w-6 h-6 animate-spin" />
                            ) : (
                                <>
                                    <CheckCircle2 className="w-6 h-6" />
                                    Complete Sale
                                </>
                            )}
                        </Button>

                        <div className="p-4 rounded-xl bg-muted/50 dark:bg-white/5 border border-border dark:border-white/10 text-card-foreground">
                            <p className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.2em] mb-3">Quick Actions</p>
                            <div className="grid grid-cols-2 gap-2">
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className="h-10 bg-background border-border dark:border-white/10 hover:bg-muted text-[10px] uppercase font-black tracking-widest transition-all"
                                            disabled={cart.length === 0}
                                        >
                                            Clear Cart
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent className="bg-background dark:bg-zinc-950 border-border dark:border-white/10">
                                        <AlertDialogHeader>
                                            <AlertDialogTitle className="text-2xl font-black uppercase tracking-tight text-foreground">Clear Active Items?</AlertDialogTitle>
                                            <AlertDialogDescription className="text-muted-foreground font-medium">
                                                This will remove all products from your current session. This action is irreversible.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel className="bg-transparent border-border dark:border-white/10 hover:bg-muted text-foreground uppercase font-bold text-xs">Cancel</AlertDialogCancel>
                                            <AlertDialogAction
                                                onClick={() => setCart([])}
                                                className="bg-destructive hover:bg-destructive/90 text-white uppercase font-bold text-xs"
                                            >
                                                Clear Everything
                                            </AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                                <Button
                                    variant="outline"
                                    className="h-10 bg-background border-border dark:border-white/10 hover:bg-muted text-[10px] uppercase font-black tracking-widest transition-all gap-2"
                                    onClick={() => setShowCamera(true)}
                                >
                                    <Camera className="w-3 h-3" /> Camera Scan
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 -m-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl transition-all group-hover:scale-110" />
                    <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-2">POS STATUS</h4>
                    <p className="text-[11px] leading-relaxed text-muted-foreground font-medium">System is ready for checkout. Barcode scanner is active and listening for keyboard events.</p>
                </div>
            </div>

            {showCamera && (
                <CameraScanner
                    onScan={addToCart}
                    onClose={() => setShowCamera(false)}
                />
            )}

            {/* Success Dialog */}
            <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
                <DialogContent className="max-w-md bg-background border-border shadow-2xl">
                    <DialogHeader className="flex flex-col items-center pt-6">
                        <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
                            <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                        </div>
                        <DialogTitle className="text-3xl font-black uppercase tracking-tighter text-center">Sale Completed!</DialogTitle>
                        <DialogDescription className="text-center text-muted-foreground font-medium text-lg mt-2">
                            Transaction processed successfully
                        </DialogDescription>
                    </DialogHeader>
                    <div className="bg-muted/50 rounded-2xl p-6 my-4 border border-border space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Order Total</span>
                            <span className="text-xl font-black tabular-nums tracking-tighter text-foreground">₱{orderTotal.toFixed(2)}</span>
                        </div>
                        <Separator className="opacity-50" />
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Cash Received</span>
                            <span className="text-xl font-black tabular-nums tracking-tighter text-foreground">₱{(orderTotal + change).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t-2 border-emerald-500/20">
                            <span className="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold">Change Due</span>
                            <span className="text-3xl font-black text-emerald-500 dark:text-emerald-400 tabular-nums tracking-tighter">₱{change.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="flex justify-center pb-6">
                        <Button
                            onClick={() => setShowSuccess(false)}
                            className="w-full h-12 font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white"
                        >
                            Start Next Order
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Error Dialog */}
            <Dialog open={!!showError} onOpenChange={(open) => !open && setShowError(null)}>
                <DialogContent className="max-w-md bg-background border-destructive/20 shadow-2xl">
                    <DialogHeader className="flex flex-col items-center pt-6">
                        <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                            <X className="w-10 h-10 text-destructive" />
                        </div>
                        <DialogTitle className="text-2xl font-black uppercase tracking-tight text-center">System Error</DialogTitle>
                        <DialogDescription className="text-center text-muted-foreground font-medium mt-1">
                            {showError}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-center pb-4 pt-2">
                        <Button
                            variant="destructive"
                            onClick={() => setShowError(null)}
                            className="px-8 font-black uppercase tracking-widest h-11"
                        >
                            Dismiss
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}

import { Receipt } from "lucide-react";
