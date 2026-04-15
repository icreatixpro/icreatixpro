// src/lib/blog-data.ts
export interface BlogAuthor {
  name: string;
  avatar: string;
  bio: string;
  twitter?: string;
  linkedin?: string;
  website?: string;
  email?: string;
}

// Optional: Export some default authors if you want
export const defaultAuthors: Record<string, BlogAuthor> = {
  // Add your authors here
  "John Doe": {
    name: "John Doe",
    avatar: "/authors/default.jpg",
    bio: "SEO expert with 10+ years of experience helping businesses grow online.",
    twitter: "https://twitter.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    website: "https://johndoe.com",
  },
  // Add more authors as needed
};