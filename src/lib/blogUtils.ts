import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"

const blogsDirectory = path.join(process.cwd(), "src/content/blogs")

export type Blog = {
  slug: string
  title: string
  description: string
  date: string
  author: string
  keywords: string[]
  image: string
  image_alt: string
  category: string
  content: string
  readingTime: string
}

// ✅ SAFE DATE
function parseDate(date: string) {
  if (!date) return new Date(0)
  const parsed = new Date(date)
  return isNaN(parsed.getTime()) ? new Date(0) : parsed
}

// ✅ GET ALL BLOGS (OPTIMIZED)
export function getAllBlogs(): Blog[] {

  if (!fs.existsSync(blogsDirectory)) return []

  const files = fs.readdirSync(blogsDirectory)

  const blogs: Blog[] = files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => {

      const slug = file.replace(/\.mdx?$/, "").toLowerCase().trim()

      const fullPath = path.join(blogsDirectory, file)
      const fileContent = fs.readFileSync(fullPath, "utf-8")

      const { data, content } = matter(fileContent)

      return {
        slug,
        title: data.title || "No title",
        description: data.description || "",
        date: data.date || "",
        author: data.author || "Admin",
        keywords: data.keywords || [],
        image: data.image || "/blogs/default.jpg",
        image_alt: data.image_alt || data.title || "Blog image",
        category: (data.category || "General").toLowerCase().trim(),
        content,
        readingTime: readingTime(content).text
      }

    })

  return blogs.sort(
    (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
  )
}

// ✅ GET BLOG BY SLUG (ULTRA SAFE)
export function getBlogBySlug(slug: string): Blog | undefined {

  if (!slug) return undefined

  const files = fs.readdirSync(blogsDirectory)

  const matchedFile = files.find((file) =>
    file.replace(/\.mdx?$/, "").toLowerCase().trim() === slug.toLowerCase().trim()
  )

  if (!matchedFile) return undefined

  const fullPath = path.join(blogsDirectory, matchedFile)
  const fileContent = fs.readFileSync(fullPath, "utf-8")

  const { data, content } = matter(fileContent)

  return {
    slug: slug.toLowerCase().trim(),
    title: data.title || "No title",
    description: data.description || "",
    date: data.date || "",
    author: data.author || "Admin",
    keywords: data.keywords || [],
    image: data.image || "/blogs/default.jpg",
    image_alt: data.image_alt || data.title || "Blog image",
    category: (data.category || "General").toLowerCase().trim(),
    content,
    readingTime: readingTime(content).text
  }
}

// ✅ RELATED BLOGS (SMART MATCH)
export function getRelatedBlogs(currentSlug: string, category: string): Blog[] {

  const blogs = getAllBlogs()

  return blogs
    .filter((blog) => blog.slug !== currentSlug)
    .filter((blog) => blog.category === category.toLowerCase().trim())
    .slice(0, 4)
}

// ✅ SMART FAQ (ONLY REAL FAQ SECTION)
export function extractFAQs(content: string) {

  const faqs: { question: string; answer: string }[] = []

  const faqSection = content.split("## Frequently Asked Questions")[1]
  if (!faqSection) return []

  const regex = /### (.*)\n([\s\S]*?)(?=\n###|$)/g

  let match

  while ((match = regex.exec(faqSection)) !== null) {
    faqs.push({
      question: match[1].trim(),
      answer: match[2].trim()
    })
  }

  return faqs
}

// ✅ SAFE INTERNAL LINKS (NO NESTED LINKS)
export function addInternalLinks(content: string, blogs: Blog[]) {

  let updated = content

  blogs.slice(0, 5).forEach((blog) => {

    const safeTitle = blog.title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

    const regex = new RegExp(`(?<!\\[)\\b${safeTitle}\\b`, "gi")

    updated = updated.replace(
      regex,
      `[${blog.title}](/blogs/${blog.slug})`
    )
  })

  return updated
}

// ✅ KEYWORD BOLD (SAFE)
export function highlightKeywords(content: string, keywords: string[]) {

  let updated = content

  keywords.forEach((kw) => {

    const safe = kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

    const regex = new RegExp(`\\b(${safe})\\b`, "gi")

    updated = updated.replace(regex, `**$1**`)
  })

  return updated
}