"use client"

import Link from "next/link"
import Image from "next/image"

export default function EditorialStrip({ blogs }: any) {

  return (
    <section className="max-w-7xl mx-auto px-4 mt-6">

      <h3 className="text-sm font-bold uppercase mb-4 text-gray-500">
        Editor’s Picks
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {blogs.slice(0, 4).map((b: any) => (
          <Link key={b.slug} href={`/blogs/${b.slug}`} className="group">

            <div className="relative h-32 mb-2 overflow-hidden">
              <Image
                src={b.image}
                alt={b.title}
                fill
                className="object-cover group-hover:scale-105 transition"
              />
            </div>

            <p className="text-xs font-semibold group-hover:text-blue-600">
              {b.title}
            </p>

          </Link>
        ))}

      </div>

    </section>
  )
}