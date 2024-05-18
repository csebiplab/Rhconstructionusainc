import connectMongoDB from "@/lib/db";
import ProjectDetails from "@/models/project-details.model";
import { NextResponse } from "next/server";
import { ObjectId } from 'mongodb';

export async function PATCH(request) {
    try {
        const updateData = await request.json();

        await connectMongoDB();
        const res = await ProjectDetails.findByIdAndUpdate(id, { ...updateData });

        return NextResponse.json(
            {
                status: 200,
                message: "Request success",
                data: res
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

export async function GET(request, { params }) {
    const { id } = params;

    // Check if the id is a valid ObjectId
    if (!ObjectId.isValid(id)) {
        return NextResponse.json(
            {
                status: 400,
                message: "Invalid project ID format",
            },
            { status: 400 }
        );
    }

    await connectMongoDB();

    try {
        const res = await ProjectDetails.findById(id);

        if (!res) {
            return NextResponse.json(
                {
                    status: 404,
                    message: "Project not found",
                },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                status: 200,
                message: "Request success",
                data: res
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                status: 500,
                message: "Internal Server Error",
                error: error.message,
            },
            { status: 500 }
        );
    }
}