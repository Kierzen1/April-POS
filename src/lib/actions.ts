"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { Prisma } from "@prisma/client";

const registerSchema = z.object({
    name: z.string().min(2, "Name is too short"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function registerUser(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const validated = registerSchema.safeParse({ name, email, password });

    if (!validated.success) {
        return { error: validated.error.issues[0]?.message || "Validation failed" };
    }

    try {
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return { error: "User already exists" };
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // First user created in the system should be an ADMIN and ACTIVE
        const userCount = await prisma.user.count();
        const role = userCount === 0 ? "ADMIN" : "STAFF";
        const isActive = userCount === 0;

        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role,
                isActive,
            },
        });

        return { success: true };
    } catch (error) {
        console.error("Registration error:", error);
        return { error: "Something went wrong" };
    }
}

const adminCreateUserSchema = z.object({
    name: z.string().min(2, "Name is too short"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    role: z.enum(["ADMIN", "STAFF"]),
});

export async function adminCreateUser(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const role = formData.get("role") as "ADMIN" | "STAFF";

    const validated = adminCreateUserSchema.safeParse({ name, email, password, role });

    if (!validated.success) {
        return { error: validated.error.issues[0]?.message || "Validation failed" };
    }

    try {
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return { error: "User already exists" };
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role,
                isActive: true, // Admin-created users are active by default
            },
        });

        return { success: true };
    } catch (error) {
        console.error("Admin user creation error:", error);
        return { error: "Something went wrong" };
    }
}

// User Management
export async function getUsers() {
    return await prisma.user.findMany({
        orderBy: { createdAt: "desc" },
    });
}

export async function toggleUserActivation(userId: string) {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return { error: "User not found" };

    await prisma.user.update({
        where: { id: userId },
        data: { isActive: !user.isActive },
    });

    return { success: true };
}

// Product Management
export async function getProducts() {
    const products = await prisma.product.findMany({
        include: {
            items: {
                select: {
                    quantity: true
                }
            }
        },
        orderBy: { updatedAt: "desc" },
    });

    // Convert Decimal to number and calculate sold count
    return products.map((p: any) => {
        const soldCount = p.items.reduce((sum: number, item: any) => sum + item.quantity, 0);
        return {
            ...p,
            price: Number(p.price),
            soldCount,
            items: undefined // Remove items array to keep object clean
        };
    });
}

export async function getLowStockCount() {
    const products = await prisma.product.findMany({
        select: {
            id: true,
            name: true,
            stock: true,
            lowStockThreshold: true,
        }
    });

    const lowStockItems = products.filter(p => p.stock <= (p.lowStockThreshold || 5));
    return {
        count: lowStockItems.length,
        items: lowStockItems
    };
}

export async function getProductByBarcode(barcode: string) {
    const trimmedBarcode = barcode.trim();
    const product = await prisma.product.findUnique({
        where: { barcode: trimmedBarcode },
        include: {
            items: {
                select: {
                    quantity: true
                }
            }
        }
    });

    if (!product) return null;

    const soldCount = (product as any).items.reduce((sum: number, item: any) => sum + item.quantity, 0);

    return {
        ...product,
        price: Number(product.price),
        soldCount,
        items: undefined
    };
}

export async function upsertProduct(data: any) {
    const { id, barcode, name, price, stock, lowStockThreshold, category, image } = data;
    const parsedPrice = new Prisma.Decimal(parseFloat(price) || 0);
    const parsedStock = parseInt(stock) || 0;
    const parsedThreshold = parseInt(lowStockThreshold) || 5;

    if (id) {
        await prisma.product.update({
            where: { id },
            data: {
                barcode,
                name,
                price: parsedPrice,
                stock: parsedStock,
                lowStockThreshold: parsedThreshold,
                category,
                image
            },
        });
    } else {
        await prisma.product.create({
            data: {
                barcode,
                name,
                price: parsedPrice,
                stock: parsedStock,
                lowStockThreshold: parsedThreshold,
                category,
                image
            },
        });
    }

    return { success: true };
}

export async function deleteProduct(id: string) {
    await prisma.product.delete({ where: { id } });
    return { success: true };
}

// Transaction Management
export async function completeSale(cashierId: string, items: any[], total: number) {
    try {
        await prisma.$transaction(async (tx: any) => {
            // 1. Create Transaction
            await tx.transaction.create({
                data: {
                    cashierId,
                    total,
                    items: {
                        create: items.map(item => ({
                            productId: item.productId,
                            quantity: item.quantity,
                            priceAtTime: item.price
                        }))
                    }
                }
            });

            // 2. Update Stocks
            for (const item of items) {
                await tx.product.update({
                    where: { id: item.productId },
                    data: {
                        stock: {
                            decrement: item.quantity
                        }
                    }
                });
            }
        });

        return { success: true };
    } catch (error) {
        console.error("Sale error:", error);
        return { error: "Failed to complete sale" };
    }
}

export async function getTransactions() {
    const transactions = await prisma.transaction.findMany({
        include: {
            cashier: true,
            items: {
                include: {
                    product: true
                }
            }
        },
        orderBy: { createdAt: "desc" }
    });

    return transactions.map((tx: any) => ({
        ...tx,
        total: Number(tx.total),
        items: tx.items.map((item: any) => ({
            ...item,
            priceAtTime: Number(item.priceAtTime),
            product: item.product ? {
                ...item.product,
                price: Number(item.product.price)
            } : null
        }))
    }));
}
