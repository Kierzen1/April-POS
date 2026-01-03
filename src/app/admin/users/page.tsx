"use client";

import { useEffect, useState } from "react";
import { getUsers, toggleUserActivation, adminCreateUser } from "@/lib/actions";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, UserPlus } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function UsersManagement() {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        const data = await getUsers();
        setUsers(data);
        setLoading(false);
    }

    async function handleToggle(id: string) {
        await toggleUserActivation(id);
        fetchUsers(); // Refresh
    }

    async function handleAddUser(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.currentTarget);
        const result = await adminCreateUser(formData);

        if (result.error) {
            alert(result.error);
        } else {
            setIsAddOpen(false);
            fetchUsers();
        }
        setIsSubmitting(false);
    }

    return (
        <div className="space-y-4 md:space-y-6 pb-20 md:pb-0">
            <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-black tracking-tight uppercase flex items-center gap-2">
                        <UserPlus className="w-6 h-6 md:w-8 md:h-8 text-primary" /> User Management
                    </h1>
                    <p className="text-sm text-muted-foreground">Manage staff access and account activation</p>
                </div>
                <Button onClick={() => setIsAddOpen(true)} className="w-full sm:w-auto font-black uppercase tracking-widest text-xs h-11 shadow-lg shadow-primary/20">
                    <Plus className="w-4 h-4 mr-2" /> New Staff
                </Button>
            </header>

            <Card className="border-border shadow-md overflow-hidden bg-card transition-colors">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-muted/50 transition-none hover:bg-muted/50 border-b-2">
                                <TableHead className="min-w-[200px] uppercase text-[10px] font-black">USER</TableHead>
                                <TableHead className="min-w-[100px] uppercase text-[10px] font-black">ROLE</TableHead>
                                <TableHead className="min-w-[120px] uppercase text-[10px] font-black">STATUS</TableHead>
                                <TableHead className="text-right min-w-[100px] uppercase text-[10px] font-black px-4 md:px-6">ACTIONS</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.length === 0 && !loading ? (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center h-24 text-muted-foreground">
                                        No users found
                                    </TableCell>
                                </TableRow>
                            ) : null}
                            {users.map((user: any) => (
                                <TableRow key={user.id} className="hover:bg-muted/30 transition-colors">
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-9 w-9 border border-border">
                                                <AvatarImage src={`https://i.pravatar.cc/150?u=${user.id}`} />
                                                <AvatarFallback className="bg-primary/10 text-primary font-bold text-xs">
                                                    {user.name?.charAt(0)}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col">
                                                <span className="font-bold text-sm tracking-tight leading-none mb-1">{user.name}</span>
                                                <span className="text-[11px] text-muted-foreground font-mono">{user.email}</span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={user.role === "ADMIN" ? "default" : "secondary"} className="font-bold text-[10px] tracking-widest px-1.5 py-0">
                                            {user.role}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <div className={`h-1.5 w-1.5 rounded-full ${user.isActive ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"}`} />
                                            <span className="text-xs font-semibold tracking-tight uppercase">
                                                {user.isActive ? "Active" : "Pending"}
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right px-4 md:px-6">
                                        <div className="flex justify-end pr-2">
                                            <Switch
                                                checked={user.isActive}
                                                onCheckedChange={() => handleToggle(user.id)}
                                                className="data-[state=checked]:bg-primary"
                                            />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </Card>

            <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                <DialogContent className="sm:max-w-[425px] w-[95vw] rounded-2xl md:w-full">
                    <form onSubmit={handleAddUser}>
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-black uppercase tracking-tight">Add New User</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-6">
                            <div className="grid gap-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Full Name</label>
                                <Input name="name" placeholder="Juana Dela Cruz" required className="h-11 rounded-xl" />
                            </div>
                            <div className="grid gap-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Email Address</label>
                                <Input name="email" type="email" placeholder="juana@example.com" required className="h-11 rounded-xl" />
                            </div>
                            <div className="grid gap-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Password</label>
                                <Input name="password" type="password" required className="h-11 rounded-xl" />
                            </div>
                            <div className="grid gap-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Role</label>
                                <Select name="role" defaultValue="STAFF">
                                    <SelectTrigger className="h-11 rounded-xl">
                                        <SelectValue placeholder="Select role" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-xl">
                                        <SelectItem value="STAFF">CASHIER (STAFF)</SelectItem>
                                        <SelectItem value="ADMIN">ADMINISTRATOR</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <DialogFooter className="flex flex-col sm:flex-row gap-2">
                            <Button type="button" variant="ghost" onClick={() => setIsAddOpen(false)} className="font-black uppercase tracking-widest text-[10px] h-11 order-2 sm:order-1">CANCEL</Button>
                            <Button type="submit" disabled={isSubmitting} className="font-black uppercase tracking-widest text-[10px] h-11 px-8 shadow-lg shadow-primary/20 order-1 sm:order-2">
                                {isSubmitting ? "CREATING..." : "CREATE USER"}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
