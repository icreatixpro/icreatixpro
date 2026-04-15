import Link from "next/link"

const categories = [
  { name: "AI SEO", slug: "ai-seo" },
  { name: "AI Tools", slug: "ai-tools" },
  { name: "Technical SEO", slug: "technical-seo" },
  { name: "On Page SEO", slug: "on-page-seo" },
  { name: "Off Page SEO", slug: "off-page-seo" },
  { name: "Keyword Research", slug: "keyword-research" },
  { name: "Link Building", slug: "link-building" },
  { name: "Local SEO", slug: "local-seo" },
  { name: "Ecommerce SEO", slug: "ecommerce-seo" },
  { name: "Content SEO", slug: "content-seo" },
  { name: "SEO Case Studies", slug: "seo-case-studies" },
  { name: "SEO Strategy", slug: "seo-strategy" },
  { name: "SEO News", slug: "seo-news" },
  { name: "Google Updates", slug: "google-updates" },
  { name: "SEO Experiments", slug: "seo-experiments" },
  { name: "AI Marketing", slug: "ai-marketing" },
  { name: "AI Content", slug: "ai-content" },
  { name: "Automation", slug: "automation" },
  { name: "Digital Marketing", slug: "digital-marketing" },
  { name: "Growth Hacking", slug: "growth-hacking" }
]

export default function Categories() {
  return (
    <div className="flex flex-wrap gap-3 mb-10">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/blogs/category/${cat.slug}`}
          className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200 transition"
        >
          {cat.name}
        </Link>
      ))}
    </div>
  )
}

