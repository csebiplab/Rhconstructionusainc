import { join } from "path";
import { stat, mkdir, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
    try {
        const formData = await req.formData();
        const image = formData.get("image");

        const buffer = Buffer.from(await image.arrayBuffer());
        const relativeUploadDir = `/uploads/${new Date().toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        }).replace(/\//g, "-")}`;

        const uploadDir = join(process.cwd(), "public", relativeUploadDir);
        const imageName = `${Date.now()}-${image.name}`;
        const imageUrl = join(relativeUploadDir, imageName);
        const imagePath = join(uploadDir, imageName);

        try {
            await stat(uploadDir);
        } catch (e) {
            if (e.code === "ENOENT") {
                await mkdir(uploadDir, { recursive: true });
            } else {
                console.error("Error while trying to create directory when uploading a file\n", e);
                return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
            }
        }

        await writeFile(imagePath, buffer);
        return NextResponse.json({ name: imageName, url: imageUrl }, { status: 201 });

    } catch (error) {
        console.error("Error during file upload:\n", error);
        return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
    }
}
