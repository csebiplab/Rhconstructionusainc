import { join } from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
    const { path } = params;
    const filePath = join("/", 'uploads', ...path);

    // console.log(path, filePath)

    try {
        const file = await fs.readFile(filePath);
        return new NextResponse(file, {
            status: 200,
            headers: {
                'Content-Type': 'application/octet-stream',
            },
        });
    } catch (error) {
        console.error('Error serving file:', error);
        return NextResponse.json({ error: 'File not found.' }, { status: 404 });
    }
}
