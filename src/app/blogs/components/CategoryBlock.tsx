import Link from "next/link"
import Image from "next/image"

function getImage(src: string) {
  if (!src) return "/blogs/default.jpg"
  if (src.startsWith("http")) return src
  if (src.startsWith("/")) return src
  return `/blogs/${src}`
}

export default function CategoryBlock({ title, blogs }: any) {
  if (!blogs || blogs.length === 0) return null

  const main = blogs[0]
  const rest = blogs.slice(1, 5)

  return (
    <section>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">{title}</h2>

        <button className="text-xs border px-3 py-1">
          View All
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {/* MAIN */}
        <Link href={`/blogs/${main.slug}`} className="group">

          <div className="relative h-56 mb-3">
            <Image
              src={getImage(main.image)}
              alt={main.title}
              fill
              className="object-cover"
            />
          </div>

          <h3 className="font-semibold group-hover:text-blue-600">
            {main.title}
          </h3>

        </Link>

        {/* LIST */}
        <div className="space-y-4">

          {rest.map((b: any) => (
            <Link
              key={b.slug}
              href={`/blogs/${b.slug}`}
              className="flex gap-3 group border-b pb-3"
            >
              <div className="relative w-20 h-16">
                <Image
                  src={getImage(b.image)}
                  alt={b.title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-sm group-hover:text-blue-600">
                {b.title}
              </p>
            </Link>
          ))}

        </div>

      </div>
    </section>
  )
}