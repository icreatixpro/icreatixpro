"use client"

import Link from "next/link"

export default function TrendingBar({ blogs }: any) {
  if (!blogs || blogs.length === 0) return null

  return (
    <div className="border-y border-gray-200 py-2 flex items-center gap-4 overflow-x-auto bg-gray-50">

      <span className="text-xs font-bold text-red-600 whitespace-nowrap">
        TRENDING
      </span>

      <div className="flex gap-6 text-sm">
        {blogs.slice(0, 8).map((b: any) => (
          <Link
            key={b.slug}
            href={`/blogs/${b.slug}`}
            className="whitespace-nowrap hover:text-blue-600 transition"
          >
            • {b.title}
          </Link>
        ))}
      </div>

    </div>
  )
}