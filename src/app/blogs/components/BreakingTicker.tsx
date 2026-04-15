"use client"

import Link from "next/link"

export default function BreakingTicker({ blogs }: any) {

  return (
    <div className="border-y bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto flex items-center">

        {/* LABEL */}
        <div className="bg-red-600 text-white text-xs px-3 py-2 font-bold">
          TRENDING
        </div>

        {/* SCROLL */}
        <div className="overflow-hidden relative flex-1">

          <div className="animate-marquee whitespace-nowrap flex gap-10 px-6 py-2 text-sm">

            {blogs.slice(0, 10).map((b: any) => (
              <Link key={b.slug} href={`/blogs/${b.slug}`}>
                <span className="hover:text-blue-600 cursor-pointer">
                  {b.title}
                </span>
              </Link>
            ))}

          </div>

        </div>

      </div>

      {/* 🔥 ANIMATION */}
      <style jsx>{`
        .animate-marquee {
          display: inline-flex;
          animation: marquee 25s linear infinite;
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

    </div>
  )
}