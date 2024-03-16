import connectMongoDB from "@/lib/db";
import ourServiceRouteMetaData from "@/models/ourServiceMetaDataFile";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description, keywords } = await request.json();
    await connectMongoDB();
    await ourServiceRouteMetaData.create({
      title,
      description,
      keywords,
    });
    return NextResponse.json(
      { message: "MetaData generated successfull." },
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
  const ourServiceRouteMetadata =
    await ourServiceRouteMetaData.find();
  return NextResponse.json({ ourServiceRouteMetadata });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await ourServiceRouteMetaData.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Metadata deleted successfully" },
    { status: 200 }
  );
}
