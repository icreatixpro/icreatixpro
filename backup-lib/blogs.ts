import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const blogsDirectory = path.join(process.cwd(), "src/content/blogs");

function parseDate(date: any) {
  if (!date) return new Date(0);
  return new Date(date);
}

export function getAllBlogs() {

  if (!fs.existsSync(blogsDirectory)) return [];

  const files = fs.readdirSync(blogsDirectory);

  const blogs = files.map((file) => {

    // ✅ FIX: md + mdx support
    const slug = file.replace(/\.mdx?$/, "");

    const fullPath = path.join(blogsDirectory, file);

    const fileContent = fs.readFileSync(fullPath, "utf-8");

    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title || "No title",
      description: data.description || "",
      date: data.date || "",
      author: data.author || "Admin",
      keywords: data.keywords || [],
      image: data.image || "/blogs/default.jpg",
      image_alt: data.image_alt || data.title,
      category: data.category || "General",
      content,
      readingTime: readingTime(content).text,
    };
  });

  return blogs.sort(
    (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
  );
}

export function getBlogBySlug(slug: string) {

  if (!slug) return undefined;

  const files = fs.readdirSync(blogsDirectory);

  // ✅ FIX: dynamic file match (no extension issue)
  const matchedFile = files.find((file) =>
    file.replace(/\.mdx?$/, "") === slug
  );

  if (!matchedFile) return undefined;

  const fullPath = path.join(blogsDirectory, matchedFile);

  const fileContent = fs.readFileSync(fullPath, "utf-8");

  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || "No title",
    description: data.description || "",
    date: data.date || "",
    author: data.author || "Admin",
    keywords: data.keywords || [],
    image: data.image || "/blogs/default.jpg",
    image_alt: data.image_alt || data.title,
    category: data.category || "General",
    content,
    readingTime: readingTime(content).text,
  };
}

export function getRelatedBlogs(currentSlug: string, category: string) {

  const blogs = getAllBlogs();

  return blogs
    .filter((blog) => blog.slug !== currentSlug)
    .filter((blog) => blog.category === category)
    .slice(0, 4);

}