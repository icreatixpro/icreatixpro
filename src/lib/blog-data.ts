// src/lib/blog-data.ts

// Author interface
export interface BlogAuthor {
  name: string;
  avatar: string;
  bio: string;
  twitter?: string;
  linkedin?: string;
  website?: string;
  email?: string;
}

// Blog Post interface
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  imageAlt?: string;
  category: string;
  tags: string[];
  readingTime: string;
  content: string;
  views?: number;
  keywords?: string[];
  wordCount?: number;
}

// Default authors
export const defaultAuthors: Record<string, BlogAuthor> = {
  "default": {
    name: "iCreatixPRO Team",
    avatar: "",
    bio: "Expert SEO consultants helping businesses dominate search results with AI-powered strategies.",
    twitter: "https://x.com/iCreatixPRO",
    linkedin: "https://www.linkedin.com/company/icreatixpro/",
    website: "https://icreatixpro.com",
  },
};