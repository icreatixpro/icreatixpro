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

const blogsDirectory = path.join(process.cwd(), "src", "content", "blogs");

export const categories = [
  { slug: "ai-seo", name: "AI SEO", icon: "🤖", count: 0 },
  { slug: "technical-seo", name: "Technical SEO", icon: "⚙️", count: 0 },
  { slug: "content-marketing", name: "Content Marketing", icon: "📝", count: 0 },
  { slug: "local-seo", name: "Local SEO", icon: "📍", count: 0 },
  { slug: "ecommerce-seo", name: "Ecommerce SEO", icon: "🛒", count: 0 },
  { slug: "link-building", name: "Link Building", icon: "🔗", count: 0 },
  { slug: "voice-search", name: "Voice Search", icon: "🎤", count: 0 },
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
      
      blogs.push({
        slug: normalizeSlug(file),
        title: data.title || "Untitled",
        description: data.description || "",
        date: data.date || new Date().toISOString(),
        author: data.author || "iCreatixPRO",
        keywords: Array.isArray(data.keywords) ? data.keywords : (data.keywords ? [data.keywords] : []),
        image: data.image || "/blogs/default.jpg",
        imageAlt: data.image_alt || data.title || "Blog image",
        category: (data.category || "ai-seo").toLowerCase(),
        tags: Array.isArray(data.tags) ? data.tags : (data.tags ? [data.tags] : []),
        content,
        readingTime: calculateReadingTime(content),
        wordCount: content.trim().split(/\s+/).length,
        featured: data.featured || false,
        views: Math.floor(Math.random() * 10000) + 100,
        likes: Math.floor(Math.random() * 500) + 10,
      });
    }

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
    
    return {
      slug: normalizedSlug,
      title: data.title || "Untitled",
      description: data.description || "",
      date: data.date || new Date().toISOString(),
      author: data.author || "iCreatixPRO",
      keywords: Array.isArray(data.keywords) ? data.keywords : (data.keywords ? [data.keywords] : []),
      image: data.image || "/blogs/default.jpg",
      imageAlt: data.image_alt || data.title || "Blog image",
      category: (data.category || "ai-seo").toLowerCase(),
      tags: Array.isArray(data.tags) ? data.tags : (data.tags ? [data.tags] : []),
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

// ✅ ADD THIS FUNCTION - Archive by Year/Month
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