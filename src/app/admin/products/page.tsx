"use client";

import { useEffect, useState, useCallback } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit3, Trash2, Package, Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { getProducts, upsertProduct, deleteProduct } from "@/lib/actions";
import { CameraScanner } from "@/components/shared/CameraScanner";

export default function ProductsManagement() {
    const [products, setProducts] = useState<any[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [showScanner, setShowScanner] = useState(false);
    const [scannedBarcode, setScannedBarcode] = useState("");
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);

    const calculateItemsPerPage = useCallback(() => {
        if (typeof window !== 'undefined') {
            const height = window.innerHeight;
            // Fixed overhead: Header (~220px) + Table Header/Footer (~140px) = ~360px
            // Average row height: ~74px
            const calculated = Math.max(4, Math.floor((height - 360) / 74));
            setItemsPerPage(calculated);
        }
    }, []);

    useEffect(() => {
        calculateItemsPerPage();
        window.addEventListener('resize', calculateItemsPerPage);
        return () => window.removeEventListener('resize', calculateItemsPerPage);
    }, [calculateItemsPerPage]);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, itemsPerPage]); // Reset to page 1 if items per page changes

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {
        const data = await getProducts();
        setProducts(data);
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            id: selectedProduct?.id,
            name: formData.get("name"),
            barcode: formData.get("barcode"),
            price: formData.get("price"),
            stock: formData.get("stock"),
            lowStockThreshold: formData.get("lowStockThreshold"),
            category: formData.get("category"),
            image: imagePreview
        };
        await upsertProduct(data);
        fetchProducts();
        setIsOpen(false);
        setImagePreview(null);
        setScannedBarcode("");
    }

    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.barcode.includes(searchTerm)
    );

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this product? This action cannot be undone.")) {
            await deleteProduct(id);
            fetchProducts();
        }
    };

    return (
        <div className="space-y-4 md:space-y-6 pb-20 md:pb-0">
            <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-black tracking-tight uppercase flex items-center gap-2">
                        <Package className="w-6 h-6 md:w-8 md:h-8 text-primary" /> Inventory
                    </h1>
                    <p className="text-sm text-muted-foreground">Manage products, prices, and stock</p>
                </div>
                <Button
                    onClick={() => {
                        setSelectedProduct(null);
                        setScannedBarcode("");
                        setImagePreview(null);
                        setIsOpen(true);
                    }}
                    className="w-full sm:w-auto font-black uppercase tracking-widest text-xs h-11 shadow-lg shadow-primary/20"
                >
                    <Plus className="w-4 h-4 mr-2" /> New Product
                </Button>
            </header>

            <Card className="border-border shadow-md bg-card overflow-hidden">
                <div className="p-4 border-b border-border bg-muted/30">
                    <div className="relative w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            placeholder="Search by name or barcode..."
                            className="pl-10 h-11 bg-background border-border w-full"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-muted/50 transition-none hover:bg-muted/50">
                                <TableHead className="min-w-[200px] uppercase text-[10px] font-black">Product</TableHead>
                                <TableHead className="min-w-[120px] uppercase text-[10px] font-black">Barcode</TableHead>
                                <TableHead className="min-w-[100px] uppercase text-[10px] font-black hidden md:table-cell">Category</TableHead>
                                <TableHead className="min-w-[100px] uppercase text-[10px] font-black text-right">Price</TableHead>
                                <TableHead className="min-w-[100px] uppercase text-[10px] font-black text-center">Stock</TableHead>
                                <TableHead className="min-w-[100px] uppercase text-[10px] font-black text-center">Sold</TableHead>
                                <TableHead className="min-w-[120px] uppercase text-[10px] font-black text-right px-4 md:px-6">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={7} className="text-center h-24 text-muted-foreground italic">
                                        No products found
                                    </TableCell>
                                </TableRow>
                            ) : null}
                            {products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.barcode.includes(searchTerm))
                                .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                                .map((product: any) => {
                                    const isLowStock = product.stock <= (product.lowStockThreshold || 5);
                                    return (
                                        <TableRow key={product.id} className={`hover:bg-muted/30 transition-colors ${isLowStock ? 'bg-amber-500/5' : ''}`}>
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-lg overflow-hidden bg-muted border border-border flex shrink-0">
                                                        {product.image ? (
                                                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                                        ) : (
                                                            <Package className="w-5 h-5 m-auto text-muted-foreground/30" />
                                                        )}
                                                    </div>
                                                    <span className="font-bold text-sm tracking-tight text-foreground uppercase">{product.name}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <span className="text-[10px] font-mono text-muted-foreground font-black bg-muted/50 px-2 py-0.5 rounded uppercase">{product.barcode}</span>
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-full">{product.category}</span>
                                            </TableCell>
                                            <TableCell className="text-right font-mono font-black text-primary italic tabular-nums">
                                                ₱{product.price.toFixed(2)}
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <div className="flex flex-col items-center gap-1">
                                                    <span className={`font-mono font-black text-sm tabular-nums ${isLowStock ? 'text-amber-500' : 'text-emerald-500'}`}>
                                                        {product.stock}
                                                    </span>
                                                    {isLowStock && (
                                                        <span className="text-[8px] font-black bg-amber-500 text-white px-1.5 py-0.5 rounded uppercase tracking-tighter w-fit">Low Stock</span>
                                                    )}
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-center font-mono font-black text-zinc-500 italic tabular-nums">
                                                {product.soldCount || 0}
                                            </TableCell>
                                            <TableCell className="text-right px-4 md:px-6">
                                                <div className="flex justify-end gap-1">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-8 w-8 text-muted-foreground hover:text-primary"
                                                        onClick={() => {
                                                            setSelectedProduct(product);
                                                            setImagePreview(product.image);
                                                            setIsOpen(true);
                                                        }}
                                                    >
                                                        <Edit3 className="w-4 h-4" />
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                                                        onClick={() => handleDelete(product.id)}
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </div>

                {/* Pagination Controls */}
                <div className="flex items-center justify-between px-2 py-4 border-t border-border mt-4">
                    <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                        Showing {Math.min((currentPage - 1) * itemsPerPage + 1, products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.barcode.includes(searchTerm)).length)} to {Math.min(currentPage * itemsPerPage, products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.barcode.includes(searchTerm)).length)} of {products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.barcode.includes(searchTerm)).length} Products
                    </div>
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-9 px-4 font-bold rounded-xl border-border"
                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                            disabled={currentPage === 1}
                        >
                            <ChevronLeft className="w-4 h-4 mr-1" />
                            PREV
                        </Button>
                        <div className="flex items-center gap-1">
                            {Array.from({ length: Math.ceil(products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.barcode.includes(searchTerm)).length / itemsPerPage) }).map((_, i) => (
                                <Button
                                    key={i}
                                    variant={currentPage === i + 1 ? "default" : "ghost"}
                                    size="icon"
                                    className={`h-9 w-9 font-black rounded-xl transition-all ${currentPage === i + 1 ? 'shadow-lg shadow-primary/20 scale-110' : ''}`}
                                    onClick={() => setCurrentPage(i + 1)}
                                >
                                    {i + 1}
                                </Button>
                            ))}
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-9 px-4 font-bold rounded-xl border-border"
                            onClick={() => setCurrentPage(prev => Math.min(Math.ceil(products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.barcode.includes(searchTerm)).length / itemsPerPage), prev + 1))}
                            disabled={currentPage === Math.ceil(products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.barcode.includes(searchTerm)).length / itemsPerPage)}
                        >
                            NEXT
                            <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                    </div>
                </div>
            </Card>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-[425px] bg-background">
                    <form onSubmit={handleSubmit}>
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-black uppercase tracking-tight">
                                {selectedProduct ? "Edit Product" : "Add New Product"}
                            </DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Product Image</label>
                                <div className="flex flex-col gap-3">
                                    {(imagePreview || selectedProduct?.image) && (
                                        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-muted">
                                            <img
                                                src={imagePreview || selectedProduct?.image}
                                                className="w-full h-full object-cover"
                                                alt="Preview"
                                            />
                                            <Button
                                                type="button"
                                                variant="destructive"
                                                size="icon"
                                                className="absolute top-2 right-2 h-7 w-7 rounded-full"
                                                onClick={() => setImagePreview(null)}
                                            >
                                                <Trash2 className="w-3 h-3" />
                                            </Button>
                                        </div>
                                    )}
                                    <div className="flex items-center justify-center w-full">
                                        <label className={`flex flex-col items-center justify-center w-full h-24 border-2 border-dashed rounded-xl cursor-pointer transition-all hover:bg-muted/50 ${imagePreview || selectedProduct?.image ? 'border-primary/20' : 'border-border'}`}>
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <Plus className="w-6 h-6 text-muted-foreground mb-1" />
                                                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Upload Product Image</p>
                                            </div>
                                            <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Product Name</label>
                                <Input name="name" defaultValue={selectedProduct?.name} required placeholder="e.g. Classic Burger" />
                            </div>
                            <div className="grid gap-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Barcode</label>
                                <div className="flex gap-2">
                                    <Input
                                        name="barcode"
                                        value={scannedBarcode || selectedProduct?.barcode || ""}
                                        onChange={(e) => setScannedBarcode(e.target.value)}
                                        required
                                        placeholder="Scan or type barcode"
                                        className="font-mono"
                                    />
                                    <Button
                                        type="button"
                                        variant="secondary"
                                        size="icon"
                                        onClick={() => setShowScanner(true)}
                                        className="shrink-0"
                                    >
                                        <Camera className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Price (₱)</label>
                                    <Input name="price" type="number" step="0.01" defaultValue={selectedProduct?.price} required placeholder="0.00" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Current Stock</label>
                                        <Input name="stock" type="number" defaultValue={selectedProduct?.stock || 0} required className="h-11 rounded-xl" />
                                    </div>
                                    <div className="grid gap-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Alert Threshold</label>
                                        <Input name="lowStockThreshold" type="number" defaultValue={selectedProduct?.lowStockThreshold || 5} required className="h-11 rounded-xl" />
                                    </div>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Category</label>
                                <Input name="category" defaultValue={selectedProduct?.category} placeholder="e.g. Food" />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="button" variant="outline" onClick={() => {
                                setIsOpen(false);
                                setScannedBarcode("");
                            }}>CANCEL</Button>
                            <Button type="submit" className="font-bold">SAVE PRODUCT</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            {
                showScanner && (
                    <CameraScanner
                        onScan={(barcode) => {
                            setScannedBarcode(barcode);
                            setShowScanner(false);
                        }}
                        onClose={() => setShowScanner(false)}
                    />
                )
            }
        </div >
    );
}
