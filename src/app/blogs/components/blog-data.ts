import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

// ============================================
// TYPES
// ============================================

export interface BlogAuthor {
  name: string;
  avatar?: string;
  bio?: string;
  title?: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  email?: string;
}

export interface BlogCategory {
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  count: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedDate?: string;
  author: string;
  authorDetails?: BlogAuthor;
  keywords: string[];
  image: string;
  imageAlt: string;
  category: string;
  tags: string[];
  content: string;
  readingTime: string;
  readingTimeMinutes: number;
  wordCount: number;
  featured: boolean;
  views?: number;
  likes?: number;
}

// ============================================
// CONSTANTS
// ============================================

const blogsDirectory = path.join(process.cwd(), "src", "content", "blogs");

export const brandColors = {
  primary: "#2C727B",
  primaryDark: "#1A394E",
  primaryLight: "#4A9BA6",
  accent: "#E8F4F2",
};

// Author Database
const authors: Record<string, BlogAuthor> = {
  "iCreatixPRO": {
    name: "iCreatixPRO Team",
    avatar: "/authors/icreatixpro.jpg",
    title: "AI SEO Agency",
    bio: "We're a team of AI SEO specialists helping businesses dominate search with cutting-edge strategies, data-driven insights, and proven methodologies.",
    twitter: "https://twitter.com/icreatixpro",
    linkedin: "https://linkedin.com/company/icreatixpro",
    github: "https://github.com/icreatixpro",
    email: "hello@icreatixpro.com",
  },
  "Alexandra Chen": {
    name: "Alexandra Chen",
    avatar: "/authors/alexandra-chen.jpg",
    title: "CEO & Founder",
    bio: "Former Google Search Quality engineer with 18+ years in SEO and AI integration. Alexandra leads our AI strategy and has helped 500+ businesses scale.",
    twitter: "https://twitter.com/alexandrachen",
    linkedin: "https://linkedin.com/in/alexandrachen",
    email: "alexandra@icreatixpro.com",
  },
  "Marcus Rodriguez": {
    name: "Marcus Rodriguez",
    avatar: "/authors/marcus-rodriguez.jpg",
    title: "Chief AI Officer",
    bio: "AI researcher turned SEO architect with a PhD in Machine Learning. Marcus built proprietary ML models for Fortune 500 companies.",
    twitter: "https://twitter.com/marcusrodriguez",
    linkedin: "https://linkedin.com/in/marcusrodriguez",
    github: "https://github.com/marcusrodriguez",
  },
  "Sophia Williams": {
    name: "Sophia Williams",
    avatar: "/authors/sophia-williams.jpg",
    title: "Director of Content Strategy",
    bio: "Former NY Times editor and content strategist. Sophia leads our AI-powered content ecosystems.",
    twitter: "https://twitter.com/sophiawilliams",
    linkedin: "https://linkedin.com/in/sophiawilliams",
  },
};

// Categories Database
export const categories: BlogCategory[] = [
  { slug: "ai-seo", name: "AI SEO", description: "Artificial Intelligence powered SEO strategies for 2026", icon: "🤖", color: "#2C727B", count: 0 },
  { slug: "technical-seo", name: "Technical SEO", description: "Site architecture, Core Web Vitals, and performance", icon: "⚙️", color: "#1A394E", count: 0 },
  { slug: "content-marketing", name: "Content Marketing", description: "Content strategy, creation, and AI optimization", icon: "📝", color: "#4A9BA6", count: 0 },
  { slug: "local-seo", name: "Local SEO", description: "Local search optimization and Google Business Profile", icon: "📍", color: "#2C727B", count: 0 },
  { slug: "ecommerce-seo", name: "Ecommerce SEO", description: "SEO for online stores and product pages", icon: "🛒", color: "#1A394E", count: 0 },
  { slug: "link-building", name: "Link Building", description: "Authority building and backlink strategies", icon: "🔗", color: "#4A9BA6", count: 0 },
  { slug: "google-updates", name: "Google Updates", description: "Algorithm changes and industry news", icon: "📢", color: "#2C727B", count: 0 },
  { slug: "voice-search", name: "Voice Search", description: "Voice and conversational AI optimization", icon: "🎤", color: "#1A394E", count: 0 },
  { slug: "analytics", name: "Analytics", description: "Data analysis and performance measurement", icon: "📊", color: "#4A9BA6", count: 0 },
  { slug: "seo-tools", name: "SEO Tools", description: "Reviews and tutorials for SEO software", icon: "🛠️", color: "#2C727B", count: 0 },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

function parseDate(date: any): Date {
  if (!date) return new Date(0);
  const parsed = new Date(date);
  return isNaN(parsed.getTime()) ? new Date(0) : parsed;
}

function normalizeSlug(input: string): string {
  return input.replace(/\.mdx?$/, "").toLowerCase().trim();
}

function calculateReadingTime(content: string): { text: string; minutes: number } {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
  return {
    text: `${minutes} min read`,
    minutes,
  };
}

// ============================================
// CORE FUNCTIONS - ALL EXPORTED
// ============================================

// Get all blog posts
export function getAllBlogs(): BlogPost[] {
  try {
    if (!fs.existsSync(blogsDirectory)) {
      console.log("⚠️ Blogs directory not found at:", blogsDirectory);
      return [];
    }

    const files = fs.readdirSync(blogsDirectory);
    const blogFiles = files.filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));
    
    const blogs: BlogPost[] = blogFiles.map((file) => {
      const slug = normalizeSlug(file);
      const fullPath = path.join(blogsDirectory, file);
      const fileContent = fs.readFileSync(fullPath, "utf-8");
      const { data, content } = matter(fileContent);
      
      const readingTimeData = calculateReadingTime(content);
      
      let tags: string[] = [];
      if (data.tags) {
        tags = typeof data.tags === "string" ? [data.tags] : data.tags;
      }
      
      let keywords: string[] = [];
      if (data.keywords) {
        keywords = typeof data.keywords === "string" ? [data.keywords] : data.keywords;
      }
      
      return {
        slug,
        title: data.title || "Untitled",
        description: data.description || "",
        date: data.date || new Date().toISOString(),
        updatedDate: data.updatedDate,
        author: data.author || "iCreatixPRO",
        keywords,
        image: data.image || "/blogs/default.jpg",
        imageAlt: data.image_alt || data.title || "Blog post image",
        category: (data.category || "ai-seo").toLowerCase(),
        tags,
        content,
        readingTime: readingTimeData.text,
        readingTimeMinutes: readingTimeData.minutes,
        wordCount: content.trim().split(/\s+/).length,
        featured: data.featured || false,
        views: Math.floor(Math.random() * 10000) + 100,
        likes: Math.floor(Math.random() * 500) + 10,
      };
    });

    // Update category counts
    const categoryCounts: Record<string, number> = {};
    blogs.forEach(blog => {
      categoryCounts[blog.category] = (categoryCounts[blog.category] || 0) + 1;
    });
    
    categories.forEach(cat => {
      cat.count = categoryCounts[cat.slug] || 0;
    });

    // Add author details
    blogs.forEach(blog => {
      blog.authorDetails = authors[blog.author] || authors["iCreatixPRO"];
    });

    return blogs.sort((a, b) => 
      parseDate(b.date).getTime() - parseDate(a.date).getTime()
    );
    
  } catch (err) {
    console.error("❌ getAllBlogs ERROR:", err);
    return [];
  }
}

// Get single blog by slug - THIS IS THE MISSING EXPORT
export function getBlogBySlug(slug: string): BlogPost | undefined {
  try {
    if (!slug) {
      console.log("❌ No slug provided");
      return undefined;
    }
    
    const normalizedSlug = slug.toLowerCase().trim();
    console.log(`🔍 Looking for blog with slug: ${normalizedSlug}`);
    
    if (!fs.existsSync(blogsDirectory)) {
      console.log("⚠️ Blogs directory not found");
      return undefined;
    }
    
    const files = fs.readdirSync(blogsDirectory);
    
    const matchedFile = files.find((file) => {
      const fileSlug = normalizeSlug(file);
      return fileSlug === normalizedSlug;
    });
    
    if (!matchedFile) {
      console.log(`❌ No blog found for slug: ${normalizedSlug}`);
      return undefined;
    }
    
    console.log(`✅ Found blog file: ${matchedFile}`);
    
    const fullPath = path.join(blogsDirectory, matchedFile);
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContent);
    
    const readingTimeData = calculateReadingTime(content);
    
    let tags: string[] = [];
    if (data.tags) {
      tags = typeof data.tags === "string" ? [data.tags] : data.tags;
    }
    
    let keywords: string[] = [];
    if (data.keywords) {
      keywords = typeof data.keywords === "string" ? [data.keywords] : data.keywords;
    }
    
    const blog: BlogPost = {
      slug: normalizedSlug,
      title: data.title || "Untitled",
      description: data.description || "",
      date: data.date || new Date().toISOString(),
      updatedDate: data.updatedDate,
      author: data.author || "iCreatixPRO",
      keywords,
      image: data.image || "/blogs/default.jpg",
      imageAlt: data.image_alt || data.title || "Blog post image",
      category: (data.category || "ai-seo").toLowerCase(),
      tags,
      content,
      readingTime: readingTimeData.text,
      readingTimeMinutes: readingTimeData.minutes,
      wordCount: content.trim().split(/\s+/).length,
      featured: data.featured || false,
      views: Math.floor(Math.random() * 10000) + 100,
      likes: Math.floor(Math.random() * 500) + 10,
    };
    
    blog.authorDetails = authors[blog.author] || authors["iCreatixPRO"];
    
    return blog;
    
  } catch (err) {
    console.error("❌ getBlogBySlug ERROR:", err);
    return undefined;
  }
}

// Get featured posts
export function getFeaturedPosts(limit: number = 3): BlogPost[] {
  const allPosts = getAllBlogs();
  const featured = allPosts.filter((post) => post.featured);
  return featured.length > 0 ? featured.slice(0, limit) : allPosts.slice(0, limit);
}

// Get trending posts
export function getTrendingPosts(limit: number = 5): BlogPost[] {
  const allPosts = getAllBlogs();
  return [...allPosts]
    .sort((a, b) => {
      const scoreA = (a.views || 0) / (Date.now() - new Date(a.date).getTime());
      const scoreB = (b.views || 0) / (Date.now() - new Date(b.date).getTime());
      return scoreB - scoreA;
    })
    .slice(0, limit);
}

// Get posts by category
export function getPostsByCategory(categorySlug: string): BlogPost[] {
  const allPosts = getAllBlogs();
  return allPosts.filter((post) => post.category === categorySlug);
}

// Get posts by author
export function getPostsByAuthor(authorName: string): BlogPost[] {
  const allPosts = getAllBlogs();
  return allPosts.filter((post) => post.author === authorName);
}

// Get related posts
export function getRelatedPosts(currentSlug: string, category: string, tags: string[] = [], limit: number = 4): BlogPost[] {
  const allPosts = getAllBlogs();
  
  return allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      let score = 0;
      if (post.category === category) score += 10;
      const tagOverlap = post.tags?.filter(tag => tags.includes(tag)).length || 0;
      score += tagOverlap * 3;
      return { post, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
}

// Search posts
export function searchPosts(query: string): BlogPost[] {
  if (!query || query.length < 2) return [];
  
  const allPosts = getAllBlogs();
  const searchTerm = query.toLowerCase();
  
  return allPosts
    .map((post) => {
      let score = 0;
      if (post.title.toLowerCase().includes(searchTerm)) score += 10;
      if (post.description.toLowerCase().includes(searchTerm)) score += 5;
      const keywordMatches = post.keywords.filter(kw => kw.toLowerCase().includes(searchTerm)).length;
      score += keywordMatches * 3;
      if (post.content.toLowerCase().includes(searchTerm)) score += 1;
      return { post, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.post);
}

// Get all unique tags
export function getAllTags(): { name: string; count: number }[] {
  const posts = getAllBlogs();
  const tagMap = new Map<string, number>();
  
  posts.forEach(post => {
    post.tags?.forEach(tag => {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    });
  });
  
  return Array.from(tagMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

// Get archive by year/month
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

// Get popular posts
export function getPopularPosts(limit: number = 5): BlogPost[] {
  const allPosts = getAllBlogs();
  return [...allPosts]
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, limit);
}

// Clear cache (for development)
export function clearBlogCache(): void {
  console.log("🔄 Blog cache cleared (if implemented)");
}

// Get blog sitemap entries
export function getBlogSitemapEntries(): Array<{ slug: string; lastmod: string; priority: number }> {
  const posts = getAllBlogs();
  return posts.map((post) => ({
    slug: post.slug,
    lastmod: post.updatedDate || post.date,
    priority: 0.7,
  }));
}