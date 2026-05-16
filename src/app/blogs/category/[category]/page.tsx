import { getAllCategories, getCategoryBySlug, getAllBlogs } from "@/lib/blog-helpers";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, FolderOpen } from "lucide-react";

// ─── Static Params ────────────────────────────────────────────────────────────
//
// getAllCategories() scans all blog files at build time, so any `category:`
// value in a post's frontmatter automatically produces a static route here —
// no manual registration required.

export async function generateStaticParams() {
  const allCategories = getAllCategories();
  return allCategories.map((cat) => ({ category: cat.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);

  if (!cat) return { title: "Category Not Found" };

  const description = buildDescription(cat.name);

  return {
    title: `${cat.name} Articles | iCreatixPRO Blog`,
    description,
    openGraph: {
      title: `${cat.name} | iCreatixPRO Blog`,
      description,
      type: "website",
    },
  };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function buildDescription(categoryName: string): string {
  return `Explore our collection of ${categoryName} articles. Learn expert strategies, best practices, and actionable tips to improve your ${categoryName.toLowerCase()} efforts.`;
}

/**
 * Matches blog posts to a category with three fallback strategies:
 *
 * 1. Direct slug match          — post.category === categorySlug
 * 2. Name match                 — case-insensitive match against cat.name
 * 3. Keyword inference          — scan tags and title+description for cat.keywords
 *    (only applied when post.category is empty/missing)
 */
function getPostsForCategory(
  allBlogs: ReturnType<typeof getAllBlogs>,
  categorySlug: string,
  categoryName: string,
  categoryKeywords: string[]
) {
  return allBlogs.filter((blog) => {
    const blogCat = blog.category?.toLowerCase() ?? "";

    // Strategy 1: exact slug match (primary — covers 99% of posts)
    if (blogCat === categorySlug.toLowerCase()) return true;

    // Strategy 2: match against the display name (handles legacy data)
    if (blogCat === categoryName.toLowerCase()) return true;

    // Strategy 3: inference for posts with no category set at all
    if (!blogCat) {
      const content = `${blog.title} ${blog.description}`.toLowerCase();
      const hasKeyword = categoryKeywords.some(
        (kw) =>
          content.includes(kw.toLowerCase()) ||
          (blog.tags ?? []).some((tag: string) =>
            tag.toLowerCase().includes(kw.toLowerCase())
          )
      );
      if (hasKeyword) return true;
    }

    return false;
  });
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  // getCategoryBySlug handles both predefined AND auto-generated categories.
  // Returns undefined only if the slug never appeared in any blog post
  // and is not in PREDEFINED_CATEGORIES — i.e. a genuinely invalid URL.
  const cat = getCategoryBySlug(category);

  if (!cat) notFound();

  const allBlogs = getAllBlogs();
  const posts = getPostsForCategory(allBlogs, cat.slug, cat.name, cat.keywords);
  const description = buildDescription(cat.name);

  return (
    <main className="min-h-screen bg-white">

      {/* ── Category Header ──────────────────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-[#2C727B] hover:text-[#1A394E] transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{cat.icon}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {cat.name}
            </h1>
          </div>

          <p className="text-gray-600 max-w-2xl">{description}</p>

          <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
            <FolderOpen className="w-4 h-4" />
            <span>
              {posts.length} {posts.length === 1 ? "article" : "articles"}
            </span>
          </div>
        </div>
      </section>

      {/* ── Posts Grid ───────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {posts.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-xl">
            <FolderOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 text-lg">
              No articles found in this category yet.
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Check back soon for new content!
            </p>
            <Link
              href="/blogs"
              className="text-[#2C727B] hover:underline text-sm mt-4 inline-block font-medium"
            >
              Browse all articles →
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 bg-[#2C727B]/90 text-white text-xs rounded font-medium">
                      {cat.name}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readingTime || "5 min read"}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#2C727B] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-gray-600 text-sm line-clamp-2">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
      {/* Related Pages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="border-t border-gray-100 pt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Related Pages
          </h3>

          <div className="flex flex-col gap-2">
            <Link
              href="/services/email-marketing"
              className="text-[#2C727B] hover:underline"
            >
              Email Marketing Service
            </Link>

            <Link
              href="/blogs/archive"
              className="text-[#2C727B] hover:underline"
            >
              Blog Archive
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
