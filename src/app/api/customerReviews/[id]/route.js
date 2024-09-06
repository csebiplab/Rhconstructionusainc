import connectMongoDB from "@/lib/db";
import customerReveiws from "@/models/customerReviewsMetadata";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { title, description, keywords } = await request.json();
    await connectMongoDB();
    const metaData = await customerReveiws.findByIdAndUpdate(id, {
        title,
        description,
        keywords,
    });
    return NextResponse.json({ metaData }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const metaData = await customerReveiws.findOne({ _id: id });
    return NextResponse.json({ metaData }, { status: 200 });
}
