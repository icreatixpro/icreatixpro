import { NextRequest, NextResponse } from "next/server";
import { searchPosts } from "@/lib/blogs";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q") || "";

    // agar query choti hai to empty return
    if (query.length < 2) {
      return NextResponse.json([]);
    }

    const results = searchPosts(query);

    return NextResponse.json(results);
  } catch (error) {
    console.error("Search API Error:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}