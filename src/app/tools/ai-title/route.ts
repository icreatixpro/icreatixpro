import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { keyword } = await req.json();

    if (!keyword) {
      return NextResponse.json({ titles: [] });
    }

    // Basic AI-style templates (later upgrade to OpenAI)
    const templates = [
      `10 Powerful ${keyword} Tips That Actually Work`,
      `Best ${keyword} Strategies for 2026`,
      `How to Master ${keyword} (Step-by-Step Guide)`,
      `${keyword}: Ultimate Beginner to Pro Guide`,
      `Top Mistakes to Avoid in ${keyword}`,
      `${keyword} Secrets No One Tells You`,
      `Is ${keyword} Worth It? Honest Guide`,
      `Boost Your Results with ${keyword} Today`,
      `${keyword} Trends You Must Know in 2026`,
      `Step-by-Step ${keyword} Blueprint for Success`,
    ];

    // Shuffle
    const shuffled = templates.sort(() => 0.5 - Math.random());

    return NextResponse.json({
      titles: shuffled.slice(0, 6),
    });

  } catch (error) {
    return NextResponse.json({ titles: [] });
  }
}