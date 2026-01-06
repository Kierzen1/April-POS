import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, Package, ShoppingCart, TrendingUp, History } from "lucide-react";
import { adminDb } from "@/lib/firebase-admin";
import Link from "next/link";

async function getStats() {
    const usersSnap = await adminDb.collection("users").count().get();
    const productsSnap = await adminDb.collection("products").count().get();
    const transactionsSnap = await adminDb.collection("transactions").count().get();

    const userCount = usersSnap.data().count;
    const productCount = productsSnap.data().count;
    const transactionCount = transactionsSnap.data().count;

    // Fetch products to check for low stock
    const productsDocs = await adminDb.collection("products").get();
    const lowStockCount = productsDocs.docs.filter(doc => {
        const data = doc.data();
        return data.stock <= (data.lowStockThreshold || 5);
    }).length;

    // Calculate today's sales
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayTransactionsSnap = await adminDb.collection("transactions")
        .where("createdAt", ">=", today)
        .get();

    const todaySales = todayTransactionsSnap.docs.reduce((sum, doc) => sum + Number(doc.data().total || 0), 0);

    return { userCount, productCount, transactionCount, todaySales, lowStockCount };
}

export default async function AdminDashboard() {
    const stats = await getStats();

    const cards = [
        { name: "Total Users", icon: Users, value: stats.userCount, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
        { name: "Total Products", icon: Package, value: stats.productCount, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" },
        { name: "Transactions", icon: ShoppingCart, value: stats.transactionCount, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
        { name: "Today's Sales", icon: TrendingUp, value: `₱${stats.todaySales.toFixed(2)}`, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    ];

    if (stats.lowStockCount > 0) {
        cards.push({ name: "Low Stock Alerts", icon: History, value: stats.lowStockCount, color: "text-rose-500", bg: "bg-rose-500/10", border: "border-rose-500/20" });
    }

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
                <h1 className="text-4xl font-black tracking-tighter uppercase">Dashboard</h1>
                <p className="text-muted-foreground mt-1 text-lg font-medium">Real-time insights for April POS</p>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${cards.length} gap-6`}>
                {cards.map((card) => (
                    <Card key={card.name} className={`border-2 ${card.border} shadow-sm hover:shadow-md transition-all`}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                                {card.name}
                            </CardTitle>
                            <div className={`p-2 rounded-xl ${card.bg}`}>
                                <card.icon className={`w-4 h-4 ${card.color}`} />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-black tabular-nums tracking-tighter">{card.value}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2 border-border shadow-md">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div className="flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-emerald-500" />
                            <div>
                                <CardTitle className="uppercase tracking-tight font-black">Quick Management</CardTitle>
                                <CardDescription>Direct access to core administrative tools</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <Link href="/admin/users">
                            <div className="group p-6 rounded-2xl border-2 border-muted bg-muted/20 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all cursor-pointer">
                                <Users className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-black uppercase tracking-tighter text-lg">Manage Cashiers</h3>
                                <p className="text-xs text-muted-foreground mt-1">Activate/Deactivate staff accounts</p>
                            </div>
                        </Link>
                        <Link href="/admin/products">
                            <div className="group p-6 rounded-2xl border-2 border-muted bg-muted/20 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all cursor-pointer">
                                <Package className="w-8 h-8 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-black uppercase tracking-tighter text-lg">Update Inventory</h3>
                                <p className="text-xs text-muted-foreground mt-1">Edit product details & prices</p>
                            </div>
                        </Link>
                    </CardContent>
                </Card>

                <Card className="border-border shadow-md bg-card dark:bg-zinc-950 transition-colors">
                    <CardHeader>
                        <CardTitle className="uppercase tracking-tight font-black text-muted-foreground text-[10px]">System Status</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between items-center text-sm font-bold tracking-tight">
                            <span className="text-muted-foreground">Database</span>
                            <span className="text-emerald-500 font-black flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                ONLINE
                            </span>
                        </div>
                        <div className="flex justify-between items-center text-sm font-bold tracking-tight">
                            <span className="text-muted-foreground">Vercel Status</span>
                            <span className="text-emerald-500 font-black flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                OPERATIONAL
                            </span>
                        </div>
                        <div className="flex justify-between items-center text-sm font-bold tracking-tight border-t border-border pt-4">
                            <span className="text-muted-foreground uppercase text-[10px] tracking-widest">Last Backup</span>
                            <span className="text-foreground uppercase text-[10px] font-black">2h ago</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
