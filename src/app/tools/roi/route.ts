import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { spend, revenue } = await req.json();

    if (!spend || !revenue) {
      return NextResponse.json({ error: "Missing data" });
    }

    const cost = parseFloat(spend);
    const rev = parseFloat(revenue);

    const profit = rev - cost;
    const roi = ((profit / cost) * 100).toFixed(2);

    let status = "";
    if (parseFloat(roi) > 50) status = "🔥 Highly Profitable";
    else if (parseFloat(roi) > 0) status = "⚠️ Moderate";
    else status = "❌ Loss";

    return NextResponse.json({
      profit,
      roi,
      status,
    });

  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" });
  }
}