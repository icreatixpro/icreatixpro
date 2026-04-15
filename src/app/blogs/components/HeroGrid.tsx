"use client"

import Link from "next/link"
import Image from "next/image"

type Blog = {
  slug: string
  title: string
  image: string
  date?: any
}

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

export default function HeroGrid({ blogs }: { blogs: Blog[] }) {
  if (!blogs || blogs.length < 1) return null

  const main = blogs[0]
  const side = blogs.slice(1, 5)

  return (
    <section className="max-w-7xl mx-auto px-4">

      <div className="grid grid-cols-12 gap-6">

        {/* 🔥 MAIN STORY */}
        <Link
          href={`/blogs/${main.slug}`}
          className="col-span-12 lg:col-span-8 group"
        >
          <div className="relative w-full aspect-[16/9] overflow-hidden">

            <Image
              src={getImage(main.image)}
              alt={main.title}
              fill
              className="object-cover group-hover:scale-105 transition"
              priority
            />

            <div className="absolute bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">

              <span className="text-xs bg-red-600 px-2 py-1 inline-block mb-2">
                BREAKING
              </span>

              <p className="text-xs opacity-80 mb-1">
                {formatDate(main.date)}
              </p>

              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                {main.title}
              </h2>

            </div>
          </div>
        </Link>

        {/* 🔥 SIDE STORIES */}
        <div className="col-span-12 lg:col-span-4 space-y-4">

          {side.map((b) => (
            <Link
              key={b.slug}
              href={`/blogs/${b.slug}`}
              className="flex gap-3 group border-b pb-3"
            >
              <div className="relative w-24 h-20 shrink-0">
                <Image
                  src={getImage(b.image)}
                  alt={b.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  {formatDate(b.date)}
                </p>

                <h3 className="text-sm font-semibold group-hover:text-blue-600">
                  {b.title}
                </h3>
              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  )
}