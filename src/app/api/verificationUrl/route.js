import connectMongoDB from "@/lib/db";
import verificationSite from "@/models/siteVerification";
import { NextResponse } from "next/server";


export async function POST(request) {
  const { title, url } = await request.json();
  await connectMongoDB();
  await verificationSite.create({ title, url });
  return NextResponse.json(
    { message: "verification ownership url and meta title is generated" },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const verificationUrl = await verificationSite.find().sort({ createdAt: -1 }).limit(1);
  return NextResponse.json({ verificationUrl });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await verificationSite.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Verification sitemap data deleted" },
    { status: 200 }
  );
}
