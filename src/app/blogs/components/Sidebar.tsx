"use client"

import Link from "next/link"

export default function Sidebar({ blogs }: any) {
  return (
    <div className="space-y-8 sticky top-24">

      {/* Headlines */}
      <div className="border p-5">
        <h3 className="text-xs uppercase text-gray-500 mb-4 font-bold">
          Top Headlines
        </h3>

        <ul className="space-y-3">
          {blogs.slice(0, 6).map((b: any) => (
            <li key={b.slug}>
              <Link href={`/blogs/${b.slug}`} className="text-sm hover:text-blue-600">
                {b.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular */}
      <div className="border p-5">
        <h3 className="text-xs uppercase text-gray-500 mb-4 font-bold">
          Most Popular
        </h3>

        <ul className="space-y-3">
          {blogs.slice(3, 9).map((b: any) => (
            <li key={b.slug}>
              <Link href={`/blogs/${b.slug}`} className="text-sm hover:text-blue-600">
                {b.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter */}
      <div className="border p-5">
        <h3 className="font-bold mb-2">Get SEO Updates</h3>
        <input className="w-full border p-2 text-sm mb-2" placeholder="Email" />
        <button className="w-full bg-black text-white py-2 text-sm">
          Subscribe
        </button>
      </div>

      {/* Ad */}
      <div className="border border-dashed h-40 flex items-center justify-center text-gray-400">
        Ad Space
      </div>

    </div>
  )
}