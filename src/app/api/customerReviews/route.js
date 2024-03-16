import connectMongoDB from "@/lib/db";
import customerReveiws from "@/models/customerReviewsMetadata";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title, description, keywords } = await request.json();
        await connectMongoDB();
        await customerReveiws.create({
            title,
            description,
            keywords,
        });
        return NextResponse.json(
            { message: "MetaData generated" },
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
    const metaData = await customerReveiws.find();
    return NextResponse.json({ metaData });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await customerReveiws.findByIdAndDelete(id);
    return NextResponse.json(
        { message: "Metadata deleted" },
        { status: 200 }
    );
}