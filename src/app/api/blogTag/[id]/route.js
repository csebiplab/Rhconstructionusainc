
import connectMongoDB from "@/lib/db";
import blogTag from "@/models/blogTag";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { name, slug, description } = await request.json();
  await connectMongoDB();
  const blogTagData = await blogTag.findByIdAndUpdate(id, {
    name,
    slug,
    description,
  });
  return NextResponse.json({ blogTagData }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const blogTagData = await blogTag.findOne({ _id: id });
  return NextResponse.json({ blogTagData }, { status: 200 });
}
