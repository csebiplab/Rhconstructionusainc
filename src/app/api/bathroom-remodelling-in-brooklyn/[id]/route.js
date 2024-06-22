
import connectMongoDB from "@/lib/db";
import BathroomRemodelling from "@/models/bathroomRemodelling.model";
import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
    const { id } = params;
    const { title, description, keywords } = await request.json();

    await connectMongoDB();

    const data = await BathroomRemodelling.findByIdAndUpdate(id, {
        title,
        description,
        keywords,
    });

    return NextResponse.json({ data }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;

    await connectMongoDB();

    const data = await BathroomRemodelling.findOne({ _id: id });
    return NextResponse.json({ data }, { status: 200 });
}
