"use client"

import Link from "next/link"
import Image from "next/image"
import AdBanner from "./AdBanner"

function formatDate(date: any) {
  if (!date) return ""
  const d = new Date(date)
  if (isNaN(d.getTime())) return ""

  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

// ✅ SAFE IMAGE FIX
function getImage(src: string) {
  if (!src) return "/blogs/default.jpg"
  if (src.startsWith("http")) return src
  if (src.startsWith("/")) return src
  return `/blogs/${src}`
}

export default function LatestFeed({ blogs }: any) {
  return (
    <section>

      <h2 className="text-xl font-bold mb-6">Latest News</h2>

      <div className="space-y-6">

        {blogs.map((blog: any, i: number) => (
          <div key={blog.slug}>

            <Link
              href={`/blogs/${blog.slug}`}
              className="flex gap-4 border-b pb-4 group"
            >
              <div className="relative w-32 h-24 shrink-0">
                <Image
                  src={getImage(blog.image)}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  {formatDate(blog.date)}
                </p>

                <h3 className="font-semibold leading-snug group-hover:text-blue-600">
                  {blog.title}
                </h3>
              </div>
            </Link>

            {i === 3 && <AdBanner />}

          </div>
        ))}

      </div>
    </section>
  )
}