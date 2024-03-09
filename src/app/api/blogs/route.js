import connectMongoDB from "@/lib/db";
import blogRouteMetaData from "@/models/blogMetaDataFile";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description, keywords } = await request.json();
    await connectMongoDB();
    await blogRouteMetaData.create({
      title,
      description,
      keywords,
    });
    return NextResponse.json(
      { message: "BLog MetaData generated" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error storing metadata:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectMongoDB();
  const blogRouteAllMetaData = await blogRouteMetaData.find();
  return NextResponse.json({ blogRouteAllMetaData });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await blogRouteMetaData.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Blog route meta deleted" },
    { status: 200 }
  );
}
