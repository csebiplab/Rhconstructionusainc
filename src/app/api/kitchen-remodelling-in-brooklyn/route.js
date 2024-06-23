import connectMongoDB from "@/lib/db";
import KitchenRemodelling from "@/models/kitchenRemodelling.model";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title, description, keywords } = await request.json();

        await connectMongoDB();

        await KitchenRemodelling.create({
            title,
            description,
            keywords,
        });
        return NextResponse.json(
            { message: "Request Success" },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

export async function GET() {
    await connectMongoDB();

    const data = await KitchenRemodelling.find();
    return NextResponse.json({ data });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");

    await connectMongoDB();

    await KitchenRemodelling.findByIdAndDelete(id);

    return NextResponse.json(
        { message: "Deleted" },
        { status: 200 }
    );
}
