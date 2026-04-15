import { NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("image") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // Compress image (JPEG output)
    const compressed = await sharp(buffer)
      .jpeg({ quality: 60 }) // adjust quality (0–100)
      .toBuffer();

    const originalSize = buffer.length / 1024;
    const compressedSize = compressed.length / 1024;

    return new NextResponse(compressed, {
      headers: {
        "Content-Type": "image/jpeg",
        "X-Original-Size": originalSize.toFixed(2),
        "X-Compressed-Size": compressedSize.toFixed(2),
      },
    });

  } catch (error) {
    return NextResponse.json({ error: "Compression failed" });
  }
}