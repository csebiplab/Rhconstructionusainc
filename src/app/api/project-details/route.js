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
