import connectMongoDB from "@/lib/db";
import ProjectDetails from "@/models/project-details.model";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const createData = await request.json();

        await connectMongoDB();
        const res = await ProjectDetails.create(createData);

        return NextResponse.json(
            {
                status: 201,
                message: "Request success",
                data: res
            },
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

    const res = await ProjectDetails.find()
    return NextResponse.json(
        {
            status: 200,
            message: "Request success",
            data: res
        },
        { status: 200 }
    );
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");

    await connectMongoDB();

    await projects.findByIdAndDelete(id);


    return NextResponse.json(
        {
            status: 200,
            message: "Request success",
        },
        { status: 200 }
    );
}