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

export async function GET(req) {
    const projectType = req.nextUrl.searchParams.get("projectType");
    const projectCat = req.nextUrl.searchParams.get("projectCat");

    await connectMongoDB();

    const query = {};
    let res;
    let projectsFields = {
        _id: 1,
        projectType: 1,
        projectCat: 1,
        projectCatHeading: 1,
        thumbPic: 1,
    };

    if (projectType) {
        query["projectType"] = { $regex: new RegExp(projectType, 'i') };
    }

    if (projectCat) {
        query["projectCat"] = { $regex: new RegExp(projectCat, 'i') };
        projectsFields = {
            _id: 1,
            projectName: 1,
            projectPictures: 1,
        };

    }

    const aggregationPipeline = [
        { $match: query },
        {
            $group: {
                _id: "$projectCat",
                doc: { $first: "$$ROOT" },
            },
        },
        {
            $replaceRoot: { newRoot: "$doc" },
        },
        {
            $project: projectsFields,
        },
    ];

    if (projectCat) {
        res = await ProjectDetails.find(query, projectsFields);
    } else {
        res = await ProjectDetails.aggregate(aggregationPipeline);
    }



    return NextResponse.json(
        {
            status: 200,
            message: "Request success",
            data: res,
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