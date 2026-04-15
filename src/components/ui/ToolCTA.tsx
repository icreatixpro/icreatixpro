"use client";

import Link from "next/link";

interface ToolCTAProps {
  text: string;
  href?: string;
}

export default function ToolCTA({ text, href = "/contact" }: ToolCTAProps) {
  return (
    <Link href={href}>
      <button className="w-full py-3 bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white rounded-xl font-semibold hover:shadow-lg transition-all">
        {text}
      </button>
    </Link>
  );
}