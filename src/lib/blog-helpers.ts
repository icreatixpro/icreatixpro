import fs from "fs";
import path from "path";
import matter from "gray-matter";

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
  keywords: string[]; // ✅ NEW: Keywords for auto-categorization
  count: number;
}

const blogsDirectory = path.join(process.cwd(), "src", "content", "blogs");

// ✅ UPDATED: Added keywords to each category for auto-matching
export const categories: Category[] = [
  { 
    slug: "ai-seo", 
    name: "AI SEO", 
    icon: "🤖", 
    keywords: ["ai", "artificial intelligence", "machine learning", "gpt", "chatgpt", "ai seo", "automation"],
    count: 0 
  },
  { 
    slug: "technical-seo", 
    name: "Technical SEO", 
    icon: "⚙️", 
    keywords: ["technical", "seo", "site speed", "core web vitals", "crawl", "indexing", "robots", "schema", "structured data"],
    count: 0 
  },
  { 
    slug: "content-marketing", 
    name: "Content Marketing", 
    icon: "📝", 
    keywords: ["content", "marketing", "copywriting", "blog", "article", "writing", "content strategy", "engagement"],
    count: 0 
  },
  { 
    slug: "local-seo", 
    name: "Local SEO", 
    icon: "📍", 
    keywords: ["local", "seo", "google business", "local search", "citations", "maps", "location", "geo"],
    count: 0 
  },
  { 
    slug: "ecommerce-seo", 
    name: "Ecommerce SEO", 
    icon: "🛒", 
    keywords: ["ecommerce", "ecom", "shopping", "product", "commerce", "store", "sales", "conversion"],
    count: 0 
  },
  { 
    slug: "link-building", 
    name: "Link Building", 
    icon: "🔗", 
    keywords: ["link", "backlink", "linking", "outreach", "link building", "authority", "domain", "external"],
    count: 0 
  },
  { 
    slug: "voice-search", 
    name: "Voice Search", 
    icon: "🎤", 
    keywords: ["voice", "search", "voice search", "alexa", "google assistant", "siri", "conversational", "featured snippet"],
    count: 0 
  },
];

export const brandColors = {
  primary: "#2C727B",
  primaryDark: "#1A394E",
  primaryLight: "#4A9BA6",
  accent: "#E8F4F2",
};

function normalizeSlug(input: string): string {
  return input.replace(/\.mdx?$/, "").toLowerCase().trim();
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
  return `${minutes} min read`;
}

/**
 * ✅ NEW FUNCTION: Infer category from article content, tags, and keywords
 * This enables auto-categorization for articles without explicit category set
 */
function inferCategoryFromContent(
  title: string,
  description: string,
  content: string,
  tags: string[],
  keywords: string[]
): string {
  // Combine all text content to search through
  const fullText = `${title} ${description} ${content} ${tags.join(" ")} ${keywords.join(" ")}`.toLowerCase();
  
  // Score each category based on keyword matches
  let bestMatch = categories[0].slug; // Default fallback
  let highestScore = 0;
  
  for (const category of categories) {
    let score = 0;
    
    // Check category keywords
    for (const keyword of category.keywords) {
      const keywordLower = keyword.toLowerCase();
      
      // Boost score for title matches (higher weight)
      if (title.toLowerCase().includes(keywordLower)) {
        score += 10;
      }
      
      // Good score for description matches
      if (description.toLowerCase().includes(keywordLower)) {
        score += 5;
      }
      
      // Regular score for content matches
      const contentOccurrences = (fullText.match(new RegExp(keywordLower, "g")) || []).length;
      score += contentOccurrences * 2;
    }
    
    // If this category has a higher score, use it
    if (score > highestScore) {
      highestScore = score;
      bestMatch = category.slug;
    }
  }
  
  // Only use inferred category if we found a reasonable match (score > 0)
  // Otherwise fall back to default
  return highestScore > 0 ? bestMatch : "ai-seo";
}

/**
 * ✅ UPDATED: Process blog posts and auto-assign categories
 */
export function getAllBlogs(): BlogPost[] {
  try {
    if (!fs.existsSync(blogsDirectory)) return [];

    const files = fs.readdirSync(blogsDirectory);
    const blogFiles = files.filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));
    
    const blogs: BlogPost[] = [];

    for (const file of blogFiles) {
      const fullPath = path.join(blogsDirectory, file);
      const fileContent = fs.readFileSync(fullPath, "utf-8");
      const { data, content } = matter(fileContent);
      
      // Parse tags and keywords
      const tags = Array.isArray(data.tags) ? data.tags : (data.tags ? [data.tags] : []);
      const keywords = Array.isArray(data.keywords) ? data.keywords : (data.keywords ? [data.keywords] : []);
      
      // ✅ SMART CATEGORY ASSIGNMENT:
      // 1. Use explicit category if set in frontmatter
      // 2. Otherwise, infer from content
      let assignedCategory = data.category ? data.category.toLowerCase() : null;
      
      if (!assignedCategory || assignedCategory === "") {
        assignedCategory = inferCategoryFromContent(
          data.title || "Untitled",
          data.description || "",
          content,
          tags,
          keywords
        );
      } else {
        assignedCategory = assignedCategory.toLowerCase();
      }
      
      blogs.push({
        slug: normalizeSlug(file),
        title: data.title || "Untitled",
        description: data.description || "",
        date: data.date || new Date().toISOString(),
        author: data.author || "iCreatixPRO",
        keywords,
        image: data.image || "/blogs/default.jpg",
        imageAlt: data.image_alt || data.title || "Blog image",
        category: assignedCategory, // ✅ AUTO-ASSIGNED or explicit
        tags,
        content,
        readingTime: calculateReadingTime(content),
        wordCount: content.trim().split(/\s+/).length,
        featured: data.featured || false,
        views: Math.floor(Math.random() * 10000) + 100,
        likes: Math.floor(Math.random() * 500) + 10,
      });
    }

    // Update category counts
    const categoryCounts: Record<string, number> = {};
    blogs.forEach(blog => {
      categoryCounts[blog.category] = (categoryCounts[blog.category] || 0) + 1;
    });
    categories.forEach(cat => {
      cat.count = categoryCounts[cat.slug] || 0;
    });

    return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

/**
 * ✅ UPDATED: Single blog retrieval with auto-categorization
 */
export function getBlogBySlug(slug: string): BlogPost | undefined {
  try {
    if (!slug) return undefined;
    
    const normalizedSlug = slug.toLowerCase().trim();
    
    if (!fs.existsSync(blogsDirectory)) return undefined;
    
    const files = fs.readdirSync(blogsDirectory);
    const matchedFile = files.find((file) => normalizeSlug(file) === normalizedSlug);
    
    if (!matchedFile) return undefined;
    
    const fullPath = path.join(blogsDirectory, matchedFile);
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContent);
    
    // Parse tags and keywords
    const tags = Array.isArray(data.tags) ? data.tags : (data.tags ? [data.tags] : []);
    const keywords = Array.isArray(data.keywords) ? data.keywords : (data.keywords ? [data.keywords] : []);
    
    // ✅ SMART CATEGORY ASSIGNMENT
    let assignedCategory = data.category ? data.category.toLowerCase() : null;
    
    if (!assignedCategory || assignedCategory === "") {
      assignedCategory = inferCategoryFromContent(
        data.title || "Untitled",
        data.description || "",
        content,
        tags,
        keywords
      );
    } else {
      assignedCategory = assignedCategory.toLowerCase();
    }
    
    return {
      slug: normalizedSlug,
      title: data.title || "Untitled",
      description: data.description || "",
      date: data.date || new Date().toISOString(),
      author: data.author || "iCreatixPRO",
      keywords,
      image: data.image || "/blogs/default.jpg",
      imageAlt: data.image_alt || data.title || "Blog image",
      category: assignedCategory, // ✅ AUTO-ASSIGNED or explicit
      tags,
      content,
      readingTime: calculateReadingTime(content),
      wordCount: content.trim().split(/\s+/).length,
      featured: data.featured || false,
      views: Math.floor(Math.random() * 10000) + 100,
      likes: Math.floor(Math.random() * 500) + 10,
    };
  } catch (error) {
    console.error("Error:", error);
    return undefined;
  }
}

export function getFeaturedPosts(limit: number = 3): BlogPost[] {
  const allPosts = getAllBlogs();
  const featured = allPosts.filter(post => post.featured);
  return featured.length > 0 ? featured.slice(0, limit) : allPosts.slice(0, limit);
}

// Archive by Year/Month
export function getArchive(): { year: number; months: { month: number; name: string; count: number; posts: BlogPost[] }[] }[] {
  const posts = getAllBlogs();
  const archiveMap: Map<number, Map<number, BlogPost[]>> = new Map();
  
  posts.forEach(post => {
    const date = new Date(post.date);
    const year = date.getFullYear();
    const month = date.getMonth();
    
    if (!archiveMap.has(year)) {
      archiveMap.set(year, new Map());
    }
    
    const yearMap = archiveMap.get(year)!;
    if (!yearMap.has(month)) {
      yearMap.set(month, []);
    }
    
    yearMap.get(month)!.push(post);
  });
  
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const archive: { year: number; months: { month: number; name: string; count: number; posts: BlogPost[] }[] }[] = [];
  
  archiveMap.forEach((months, year) => {
    const archiveMonths = Array.from(months.entries())
      .sort((a, b) => b[0] - a[0])
      .map(([month, posts]) => ({
        month: month + 1,
        name: monthNames[month],
        count: posts.length,
        posts: posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
      }));
    
    archive.push({ year, months: archiveMonths });
  });
  
  return archive.sort((a, b) => b.year - a.year);
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  const allPosts = getAllBlogs();
  return allPosts.filter(post => post.category === categorySlug);
}

export function searchPosts(query: string): BlogPost[] {
  if (!query || query.length < 2) return [];
  const searchTerm = query.toLowerCase();
  return getAllBlogs().filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.description.toLowerCase().includes(searchTerm) ||
    post.content.toLowerCase().includes(searchTerm)
  );
}