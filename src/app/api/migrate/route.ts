import { NextResponse } from "next/server";
import { migrateAllToFirestore } from "@/lib/migrate-to-firestore";

export async function GET() {
    try {
        const result = await migrateAllToFirestore();
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: (error as Error).message
        }, { status: 500 });
    }
}
