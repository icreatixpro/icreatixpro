import fs from "fs";
import path from "path";
import matter from "gray-matter";

// ─── Interfaces ──────────────────────────────────────────────────────────────

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  keywords: string[];
  image: string;
  imageAlt: string;
  category: string;
  tags: string[];
  content: string;
  readingTime: string;
  wordCount: number;
  featured: boolean;
  views?: number;
  likes?: number;
}

export interface Category {
  slug: string;
  name: string;
  icon: string;
  keywords: string[];
  count: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const blogsDirectory = path.join(process.cwd(), "src", "content", "blogs");

export const brandColors = {
  primary: "#2C727B",
  primaryDark: "#1A394E",
  primaryLight: "#4A9BA6",
  accent: "#E8F4F2",
};

// ─── Predefined Categories ────────────────────────────────────────────────────
//
// These are your "known" categories with curated icons and keyword sets.
// Any category that appears in a blog's frontmatter but is NOT listed here
// will be auto-generated at runtime by autoGenerateCategory().

export const PREDEFINED_CATEGORIES: Category[] = [
  {
    slug: "ai-seo",
    name: "AI SEO",
    icon: "🤖",
    keywords: ["ai", "artificial intelligence", "machine learning", "gpt", "chatgpt", "ai seo", "automation"],
    count: 0,
  },
  {
    slug: "technical-seo",
    name: "Technical SEO",
    icon: "⚙️",
    keywords: ["technical", "seo", "site speed", "core web vitals", "crawl", "indexing", "robots", "schema", "structured data"],
    count: 0,
  },
  {
    slug: "content-marketing",
    name: "Content Marketing",
    icon: "📝",
    keywords: ["content", "marketing", "copywriting", "blog", "article", "writing", "content strategy", "engagement"],
    count: 0,
  },
  {
    slug: "local-seo",
    name: "Local SEO",
    icon: "📍",
    keywords: ["local", "seo", "google business", "local search", "citations", "maps", "location", "geo"],
    count: 0,
  },
  {
    slug: "ecommerce-seo",
    name: "Ecommerce SEO",
    icon: "🛒",
    keywords: ["ecommerce", "ecom", "shopping", "product", "commerce", "store", "sales", "conversion"],
    count: 0,
  },
  {
    slug: "link-building",
    name: "Link Building",
    icon: "🔗",
    keywords: ["link", "backlink", "linking", "outreach", "link building", "authority", "domain", "external"],
    count: 0,
  },
  {
    slug: "voice-search",
    name: "Voice Search",
    icon: "🎤",
    keywords: ["voice", "search", "voice search", "alexa", "google assistant", "siri", "conversational", "featured snippet"],
    count: 0,
  },
];

// Legacy export — kept so existing imports of `categories` still work.
// This is now a SNAPSHOT; use getAllCategories() for the live, dynamic list.
export const categories: Category[] = PREDEFINED_CATEGORIES;

// ─── Auto-Generation Helpers ──────────────────────────────────────────────────

/**
 * Acronyms that should be fully uppercased when formatting a slug into a name.
 * e.g. "video-seo" → "Video SEO", "ai-tools" → "AI Tools"
 */
const UPPERCASE_ACRONYMS = new Set([
  "seo", "ai", "api", "url", "cms", "ctr", "serp", "sem", "ppc",
  "roi", "ux", "ui", "js", "css", "html", "xml", "json", "b2b", "b2c",
]);

/**
 * Maps slug keywords → emoji icons for auto-generated categories.
 * Checked in order; first match wins.
 */
const AUTO_ICON_MAP: Array<[string, string]> = [
  ["video",      "🎬"],
  ["youtube",    "▶️"],
  ["image",      "🖼️"],
  ["photo",      "📸"],
  ["social",     "📱"],
  ["instagram",  "📸"],
  ["facebook",   "👍"],
  ["twitter",    "🐦"],
  ["linkedin",   "💼"],
  ["email",      "📧"],
  ["analytics",  "📊"],
  ["data",       "📊"],
  ["speed",      "⚡"],
  ["performance","⚡"],
  ["security",   "🔒"],
  ["mobile",     "📲"],
  ["wordpress",  "🔷"],
  ["news",       "📰"],
  ["guide",      "📚"],
  ["tutorial",   "🎓"],
  ["tool",       "🛠️"],
  ["strategy",   "♟️"],
  ["keyword",    "🔍"],
  ["search",     "🔍"],
  ["rank",       "🏆"],
  ["audit",      "🔎"],
  ["report",     "📋"],
];

/**
 * Converts a slug like "video-seo" into a formatted display name like "Video SEO".
 */
function slugToName(slug: string): string {
  return slug
    .split("-")
    .map((word) =>
      UPPERCASE_ACRONYMS.has(word.toLowerCase())
        ? word.toUpperCase()
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
}

/**
 * Picks the best emoji for a slug, falling back to 📄.
 */
function slugToIcon(slug: string): string {
  const lower = slug.toLowerCase();
  for (const [keyword, icon] of AUTO_ICON_MAP) {
    if (lower.includes(keyword)) return icon;
  }
  return "📄";
}

/**
 * Auto-generates a full Category object from a slug that isn't in PREDEFINED_CATEGORIES.
 * Called whenever getAllBlogs() / getAllCategories() encounters an unknown category slug.
 */
function autoGenerateCategory(slug: string): Category {
  return {
    slug,
    name: slugToName(slug),
    icon: slugToIcon(slug),
    // Keywords are derived from the slug words so the page-level filter still works
    keywords: slug.split("-").filter(Boolean),
    count: 0,
  };
}

// ─── Core Helpers ─────────────────────────────────────────────────────────────

function normalizeSlug(input: string): string {
  return input.replace(/\.mdx?$/, "").toLowerCase().trim();
}

function calculateReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

/**
 * Infers the best-matching predefined category slug for content that has no
 * explicit `category:` in its frontmatter.
 *
 * Scoring:
 *   - Title match   → +10 per keyword
 *   - Description   → +5 per keyword
 *   - Full content  → +2 per occurrence
 */
function inferCategoryFromContent(
  title: string,
  description: string,
  content: string,
  tags: string[],
  keywords: string[]
): string {
  const fullText =
    `${title} ${description} ${content} ${tags.join(" ")} ${keywords.join(" ")}`.toLowerCase();

  let bestSlug = PREDEFINED_CATEGORIES[0].slug;
  let highestScore = 0;

  for (const cat of PREDEFINED_CATEGORIES) {
    let score = 0;
    for (const kw of cat.keywords) {
      const kwLower = kw.toLowerCase();
      if (title.toLowerCase().includes(kwLower)) score += 10;
      if (description.toLowerCase().includes(kwLower)) score += 5;
      score += ((fullText.match(new RegExp(kwLower, "g")) || []).length) * 2;
    }
    if (score > highestScore) {
      highestScore = score;
      bestSlug = cat.slug;
    }
  }

  return highestScore > 0 ? bestSlug : "ai-seo";
}

// ─── In-memory category registry ─────────────────────────────────────────────
//
// Populated the first time getAllBlogs() runs. Subsequent calls reuse the same
// map so auto-generated categories accumulate across a request lifecycle.

const categoryRegistry = new Map<string, Category>(
  PREDEFINED_CATEGORIES.map((c) => [c.slug, { ...c }])
);

/**
 * Returns or creates a Category for the given slug.
 * If the slug is not predefined, a new category is auto-generated and cached.
 */
function getOrCreateCategory(slug: string): Category {
  if (!categoryRegistry.has(slug)) {
    categoryRegistry.set(slug, autoGenerateCategory(slug));
  }
  return categoryRegistry.get(slug)!;
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Returns ALL categories — predefined + any that were discovered in blog
 * frontmatter. Counts are updated to reflect the current blog corpus.
 *
 * Use this instead of the static `categories` export wherever you need
 * a live, dynamic list (e.g. navigation, generateStaticParams).
 */
export function getAllCategories(): Category[] {
  // Re-scan blogs so counts and new categories are always fresh
  const blogs = getAllBlogs();

  // Reset counts
  categoryRegistry.forEach((cat) => {
    cat.count = 0;
  });

  // Tally counts (getOrCreateCategory already registered any new slugs during getAllBlogs)
  blogs.forEach((blog) => {
    const cat = categoryRegistry.get(blog.category);
    if (cat) cat.count++;
  });

  return Array.from(categoryRegistry.values());
}

/**
 * Returns a single category by slug — predefined or auto-generated.
 * Returns undefined only if the slug is completely absent from all blog posts
 * AND is not in PREDEFINED_CATEGORIES.
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  // Ensure registry is populated
  getAllCategories();
  return categoryRegistry.get(slug);
}

/**
 * Reads all .md / .mdx files in the blogs directory, parses frontmatter,
 * assigns categories (explicit or inferred), and returns sorted BlogPost[].
 *
 * Any `category:` slug found in frontmatter is automatically registered in
 * the categoryRegistry — so it will show up in getAllCategories() and get
 * its own page via generateStaticParams.
 */
export function getAllBlogs(): BlogPost[] {
  try {
    if (!fs.existsSync(blogsDirectory)) return [];

    const files = fs.readdirSync(blogsDirectory).filter(
      (f) => f.endsWith(".md") || f.endsWith(".mdx")
    );

    const blogs: BlogPost[] = files.map((file) => {
      const fullPath = path.join(blogsDirectory, file);
      const { data, content } = matter(fs.readFileSync(fullPath, "utf-8"));

      const tags: string[] = Array.isArray(data.tags)
        ? data.tags
        : data.tags
        ? [data.tags]
        : [];
      const keywords: string[] = Array.isArray(data.keywords)
        ? data.keywords
        : data.keywords
        ? [data.keywords]
        : [];

      // ── Category resolution ───────────────────────────────────────────────
      //
      // Priority:
      //   1. Explicit `category:` in frontmatter  → use as-is (normalised to slug)
      //   2. No `category:` set                   → infer from content
      //
      // Either way, getOrCreateCategory() ensures the slug has a Category
      // record in the registry (predefined or auto-generated).

      let categorySlug: string;

      if (data.category && String(data.category).trim() !== "") {
        // Normalise: "Video SEO" → "video-seo", "video_seo" → "video-seo"
        categorySlug = String(data.category)
          .trim()
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/_/g, "-");
      } else {
        categorySlug = inferCategoryFromContent(
          data.title || "",
          data.description || "",
          content,
          tags,
          keywords
        );
      }

      // Register the category (no-op if already known)
      getOrCreateCategory(categorySlug);

      return {
        slug: normalizeSlug(file),
        title: data.title || "Untitled",
        description: data.description || "",
        date: data.date || new Date().toISOString(),
        author: data.author || "iCreatixPRO",
        keywords,
        image: data.image || "/blogs/default.jpg",
        imageAlt: data.image_alt || data.title || "Blog image",
        category: categorySlug,
        tags,
        content,
        readingTime: calculateReadingTime(content),
        wordCount: content.trim().split(/\s+/).length,
        featured: data.featured || false,
        views: Math.floor(Math.random() * 10000) + 100,
        likes: Math.floor(Math.random() * 500) + 10,
      };
    });

    return blogs.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error("getAllBlogs error:", error);
    return [];
  }
}

/**
 * Returns a single BlogPost by slug, or undefined if not found.
 */
export function getBlogBySlug(slug: string): BlogPost | undefined {
  if (!slug) return undefined;
  try {
    const normalizedSlug = slug.toLowerCase().trim();
    if (!fs.existsSync(blogsDirectory)) return undefined;

    const file = fs
      .readdirSync(blogsDirectory)
      .find((f) => normalizeSlug(f) === normalizedSlug);
    if (!file) return undefined;

    const { data, content } = matter(
      fs.readFileSync(path.join(blogsDirectory, file), "utf-8")
    );

    const tags: string[] = Array.isArray(data.tags)
      ? data.tags
      : data.tags
      ? [data.tags]
      : [];
    const keywords: string[] = Array.isArray(data.keywords)
      ? data.keywords
      : data.keywords
      ? [data.keywords]
      : [];

    let categorySlug: string;
    if (data.category && String(data.category).trim() !== "") {
      categorySlug = String(data.category)
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/_/g, "-");
    } else {
      categorySlug = inferCategoryFromContent(
        data.title || "",
        data.description || "",
        content,
        tags,
        keywords
      );
    }

    getOrCreateCategory(categorySlug);

    return {
      slug: normalizedSlug,
      title: data.title || "Untitled",
      description: data.description || "",
      date: data.date || new Date().toISOString(),
      author: data.author || "iCreatixPRO",
      keywords,
      image: data.image || "/blogs/default.jpg",
      imageAlt: data.image_alt || data.title || "Blog image",
      category: categorySlug,
      tags,
      content,
      readingTime: calculateReadingTime(content),
      wordCount: content.trim().split(/\s+/).length,
      featured: data.featured || false,
      views: Math.floor(Math.random() * 10000) + 100,
      likes: Math.floor(Math.random() * 500) + 10,
    };
  } catch (error) {
    console.error("getBlogBySlug error:", error);
    return undefined;
  }
}

// ─── Convenience helpers ──────────────────────────────────────────────────────

export function getFeaturedPosts(limit = 3): BlogPost[] {
  const all = getAllBlogs();
  const featured = all.filter((p) => p.featured);
  return (featured.length > 0 ? featured : all).slice(0, limit);
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return getAllBlogs().filter((p) => p.category === categorySlug);
}

export function searchPosts(query: string): BlogPost[] {
  if (!query || query.length < 2) return [];
  const term = query.toLowerCase();
  return getAllBlogs().filter(
    (p) =>
      p.title.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term) ||
      p.content.toLowerCase().includes(term)
  );
}

export function getArchive(): {
  year: number;
  months: { month: number; name: string; count: number; posts: BlogPost[] }[];
}[] {
  const posts = getAllBlogs();
  const map = new Map<number, Map<number, BlogPost[]>>();

  posts.forEach((post) => {
    const d = new Date(post.date);
    const y = d.getFullYear();
    const m = d.getMonth();
    if (!map.has(y)) map.set(y, new Map());
    const ym = map.get(y)!;
    if (!ym.has(m)) ym.set(m, []);
    ym.get(m)!.push(post);
  });

  const MONTHS = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December",
  ];

  return Array.from(map.entries())
    .sort(([a], [b]) => b - a)
    .map(([year, months]) => ({
      year,
      months: Array.from(months.entries())
        .sort(([a], [b]) => b - a)
        .map(([m, ps]) => ({
          month: m + 1,
          name: MONTHS[m],
          count: ps.length,
          posts: ps.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ),
        })),
    }));
}