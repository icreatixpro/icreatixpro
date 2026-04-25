import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { validateUrl } from "@/lib/seo/urlValidator"

type ChangeFrequency =
  | 'always' | 'hourly' | 'daily'
  | 'weekly' | 'monthly'
  | 'yearly' | 'never'

const baseUrl = 'https://icreatixpro.com'

// =====================================================
// 🚀 CACHE (10x PERFORMANCE BOOST)
// =====================================================
const sitemapCache = globalThis as any

if (!sitemapCache.__SITEMAP_CACHE__) {
  sitemapCache.__SITEMAP_CACHE__ = {
    data: null,
    timestamp: 0
  }
}

const CACHE_TTL = 1000 * 60 * 60 // 1 hour

// =====================================================
// CANONICAL URL BUILDER
// =====================================================
const getCanonicalUrl = (p: string) => {
  const clean = p === '' ? '/' : p.startsWith('/') ? p : '/' + p
  return new URL(clean, baseUrl).toString()
}

// =====================================================
// INVALID ROUTES FILTER
// =====================================================
const isInvalid = (p: string) =>
  p.includes('/api') ||
  p.includes('/_next') ||
  p.includes('[')

// =====================================================
// 🧠 AI PRIORITY SCORING ENGINE (SMART SEO)
// =====================================================
const aiPriorityScore = (path: string, depth = 1): number => {
  let score = 0.5

  if (path === '/') score = 1.0
  else if (path.startsWith('/services')) score = 0.95
  else if (path.startsWith('/blogs')) score = 0.92
  else if (path.startsWith('/tools')) score = 0.85
  else if (path.startsWith('/case-studies')) score = 0.88
  else if (path.startsWith('/contact')) score = 0.75

  // depth penalty (crawl optimization)
  score -= depth * 0.02

  return Math.max(0.3, Math.min(1, score))
}

// =====================================================
// CHANGE FREQUENCY ENGINE
// =====================================================
const getChangeFreq = (p: string): ChangeFrequency => {
  if (p === '/') return 'daily'
  if (p.startsWith('/blogs')) return 'weekly'
  if (p.startsWith('/services')) return 'weekly'
  if (p.startsWith('/tools')) return 'monthly'
  return 'monthly'
}

// =====================================================
// 🧠 CRAWL BUDGET OPTIMIZER
// =====================================================
const isImportantPage = (path: string) => {
  return (
    path === '/' ||
    path.startsWith('/services') ||
    path.startsWith('/blogs') ||
    path.startsWith('/tools') ||
    path.startsWith('/case-studies')
  )
}

// =====================================================
// MAIN SITEMAP
// =====================================================
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  // 🚀 CACHE HIT
  const cached = sitemapCache.__SITEMAP_CACHE__
  const now = Date.now()

  if (cached.data && now - cached.timestamp < CACHE_TTL) {
    return cached.data
  }

  const routes = [
    ...getAppRoutes(),
    ...getBlogRoutes(),
    ...getServiceRoutes(),
    ...getToolRoutes(),
  ]

  const unique = new Map<string, any>()

  for (const route of routes) {
    if (isInvalid(route.path)) continue

    const url = getCanonicalUrl(route.path)
    if (!validateUrl(url)) continue

    // 🧠 crawl budget optimization
    if (!isImportantPage(route.path) && Math.random() > 0.6) continue

    if (!unique.has(url)) {
      const priority = route.priority ?? aiPriorityScore(route.path)

      unique.set(url, {
        url,
        lastModified: route.lastModified || new Date(),
        changeFrequency: getChangeFreq(route.path),
        priority,

        // =====================================================
        // 🌍 HREFLANG SUPPORT
        // =====================================================
        alternates: {
          languages: {
            en: url,
            "x-default": url
          }
        },

        // =====================================================
        // 🖼️ IMAGE SITEMAP SUPPORT
        // =====================================================
        images: route.images || []
      })
    }
  }

  const result = Array.from(unique.values())

  // 🚀 CACHE SAVE
  sitemapCache.__SITEMAP_CACHE__ = {
    data: result,
    timestamp: now
  }

  return result
}

// =====================================================
// STATIC ROUTES SCANNER (OPTIMIZED)
// =====================================================
function getAppRoutes() {
  const dir = path.join(process.cwd(), 'src/app')
  const routes: any[] = []

  function scan(folder: string, base = '', depth = 1) {
    if (!fs.existsSync(folder)) return

    const items = fs.readdirSync(folder, { withFileTypes: true })

    for (const item of items) {
      if (!item.isDirectory()) continue

      const skip = ['api', 'components', 'lib', 'hooks', 'utils']

      if (skip.includes(item.name)) continue

      const full = path.join(folder, item.name)
      const routePath = base + '/' + item.name

      if (fs.existsSync(path.join(full, 'page.tsx'))) {
        const stats = fs.statSync(path.join(full, 'page.tsx'))

        routes.push({
          path: routePath,
          lastModified: stats.mtime,
          priority: aiPriorityScore(routePath, depth)
        })
      }

      scan(full, routePath, depth + 1)
    }
  }

  scan(dir)

  routes.push({
    path: '/',
    lastModified: new Date(),
    priority: 1.0
  })

  return routes
}

// =====================================================
// BLOG ROUTES + 🧠 IMAGE SUPPORT + SCHEMA READY
// =====================================================
function getBlogRoutes() {
  const dir = path.join(process.cwd(), 'src/content/blogs')
  const routes: any[] = []

  if (!fs.existsSync(dir)) return routes

  const files = fs.readdirSync(dir)

  for (const file of files) {
    if (!file.endsWith('.md')) continue

    const slug = file.replace('.md', '')
    const stats = fs.statSync(path.join(dir, file))

    routes.push({
      path: `/blogs/${slug}`,
      lastModified: stats.mtime,

      // 🖼️ featured image support
      images: [`${baseUrl}/images/blogs/${slug}.webp`]
    })
  }

  return routes
}

// =====================================================
// SERVICES ROUTES
// =====================================================
function getServiceRoutes() {
  const dir = path.join(process.cwd(), 'src/app/services')
  const routes: any[] = []

  if (!fs.existsSync(dir)) return routes

  const items = fs.readdirSync(dir)

  for (const item of items) {
    const full = path.join(dir, item)

    if (fs.existsSync(path.join(full, 'page.tsx'))) {
      const stats = fs.statSync(path.join(full, 'page.tsx'))

      routes.push({
        path: `/services/${item}`,
        lastModified: stats.mtime
      })
    }
  }

  return routes
}

// =====================================================
// TOOLS ROUTES
// =====================================================
function getToolRoutes() {
  const dir = path.join(process.cwd(), 'src/app/tools')
  const routes: any[] = []

  if (!fs.existsSync(dir)) return routes

  const items = fs.readdirSync(dir)

  for (const item of items) {
    const full = path.join(dir, item)

    if (item !== 'api' && fs.existsSync(path.join(full, 'page.tsx'))) {
      const stats = fs.statSync(path.join(full, 'page.tsx'))

      routes.push({
        path: `/tools/${item}`,
        lastModified: stats.mtime
      })
    }
  }

  return routes
}

// =====================================================
// 🧠 BLOG SCHEMA INJECTION (EXPORT FOR SEO JSON-LD)
// =====================================================
export function generateBlogSchema(slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "url": `${baseUrl}/blogs/${slug}`,
    "headline": slug.replace(/-/g, ' '),
    "publisher": {
      "@type": "Organization",
      "name": "iCreatixPRO"
    }
  }
}