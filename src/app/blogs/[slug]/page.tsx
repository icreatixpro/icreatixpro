import { getBlogBySlug, getAllBlogs } from "@/lib/blog-helpers";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import ShareButtons from "@/app/blogs/components/ShareButtons";

import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Eye,
  Sparkles,
  List,
  Quote,
  Link as LinkIcon,
  MessageCircle,
  Share2,
  ThumbsUp,
} from "lucide-react";

import Script from "next/script";

export async function generateStaticParams() {
  const blogs = getAllBlogs();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://icreatixpro.com";

  return {
    title: `${blog.title} | iCreatixPRO`,
    description: blog.description,

    keywords: blog.keywords,

    authors: [
      {
        name: blog.author,
      },
    ],

    alternates: {
      canonical: `${baseUrl}/blogs/${blog.slug}`,
    },

    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `${baseUrl}/blogs/${blog.slug}`,
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author],
      images: [blog.image, ...previousImages],
      siteName: "iCreatixPRO",
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

// ─── Helpers ────────────────────────────────────────────────────────────────

/**
 * Extracts the first `# H1` from markdown content and returns:
 *  - h1Text : the raw heading text (or null if none found)
 *  - bodyContent : the rest of the content with that H1 line removed
 *
 * This ensures there is exactly ONE <h1> on the page (rendered in the hero),
 * and the article body never produces a duplicate heading.
 */
function extractH1FromContent(content: string): {
  h1Text: string | null;
  bodyContent: string;
} {
  // Match the very first `# Heading` line (H1 only, not ## or ###)
  const h1Regex = /^#(?!#)\s+(.+)$/m;
  const match = h1Regex.exec(content);

  if (!match) {
    return { h1Text: null, bodyContent: content };
  }

  const h1Text = match[1].trim();
  // Remove only the first occurrence of that H1 line
  const bodyContent = content.replace(h1Regex, "").trim();

  return { h1Text, bodyContent };
}

/**
 * Builds the Table of Contents from ## and ### headings only.
 * (H1 is now in the hero, so we start TOC from H2.)
 */
function extractTOC(content: string) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const items: { text: string; level: number; id: string }[] = [];
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length; // 2 or 3
    const text = match[2];
    items.push({
      text,
      level,
      id: text.toLowerCase().replace(/[^\w]+/g, "-"),
    });
  }

  return items;
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  // ── Extract H1 from content so it only renders once (in the hero) ──
  const { h1Text, bodyContent } = extractH1FromContent(blog.content);

  // The displayed H1: prefer the one written in the markdown; fall back to blog.title
  const pageH1 = h1Text ?? blog.title;

  // TOC is built from bodyContent so H1 is never listed there
  const tocItems = extractTOC(bodyContent);

  const blogUrl = `https://icreatixpro.com/blogs/${blog.slug}`;

  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // ── Schema markup ──
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: blog.title,
    description: blog.description,
    image: blog.image,
    datePublished: blog.date,
    dateModified: blog.date,
    author: {
      "@type": "Person",
      name: blog.author,
    },
    publisher: {
      "@type": "Organization",
      name: "iCreatixPRO",
      logo: {
        "@type": "ImageObject",
        url: "https://icreatixpro.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": blogUrl,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://icreatixpro.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: "https://icreatixpro.com/blogs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: blogUrl,
      },
    ],
  };

  return (
    <>
      {/* ── Structured data (SEO only, invisible) ── */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="bg-white overflow-hidden">

        {/* ══════════════════════════════════════════
            HERO
            • The ONE and ONLY <h1> on this page lives here.
            • It comes from the first `# Heading` in your markdown.
            • Metadata (og:title, twitter:title, <title> tag) is
              handled exclusively by generateMetadata() above — it
              never appears as visible text on the page.
        ══════════════════════════════════════════ */}
        <section className="relative border-b border-gray-100">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0F766E]/5 rounded-full blur-[120px]" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 relative">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#0F766E] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to articles
            </Link>

            {/* Category + tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F766E]/10 text-[#0F766E] text-xs font-semibold uppercase tracking-wide">
                <Sparkles className="w-3 h-3" />
                {blog.category || "SEO"}
              </span>

              {blog.tags?.slice(0, 3).map((tag: string) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/*
              ✅ SINGLE H1 — sourced from your markdown content's first `# Heading`.
                 This is the only <h1> on the entire page.
                 The <title> tag / og:title / twitter:title are in generateMetadata()
                 and are completely separate from this visible heading.
            */}
            <h1 className="max-w-4xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-[-0.03em] leading-[1.15] text-[#0F172A]">
              {pageH1}
            </h1>

            <p className="max-w-3xl mt-6 text-lg md:text-xl leading-relaxed text-gray-600">
              {blog.description}
            </p>

            {/* Author meta row */}
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0F766E] to-[#134E4A] flex items-center justify-center shadow-lg text-white">
                  <User className="w-5 h-5" />
                </div>

                <div>
                  <div className="font-semibold text-[#0F172A]">
                    {blog.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    SEO Expert & Strategist
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#0F766E]" />
                  {formattedDate}
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#0F766E]" />
                  {blog.readingTime}
                </div>

                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#0F766E]" />
                  {blog.views?.toLocaleString() || "1.2k"} views
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED IMAGE */}
        {blog.image && (
          <section className="relative mt-6 md:-mt-10 z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="
                relative overflow-hidden
                rounded-2xl md:rounded-[32px]
                border border-gray-200
                shadow-[0_20px_70px_rgba(0,0,0,0.10)]
                bg-white
              ">
                <div className="
                  relative w-full
                  aspect-[16/10] sm:aspect-[16/9] lg:aspect-[18/8]
                ">
                  <Image
                    src={blog.image}
                    alt={blog.imageAlt || blog.title}
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 90vw,
                      1200px
                    "
                  />
                </div>
                {/* Soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
              </div>
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════
            CONTENT
            • ReactMarkdown receives `bodyContent` — the markdown
              with the H1 line already removed.
            • No duplicate <h1> can ever appear here.
            • TOC is built from ## and ### headings only.
        ══════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] gap-14">

            {/* TOC (## / ### only) */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <div className="border-l border-gray-200 pl-5">
                  <div className="flex items-center gap-2 mb-6">
                    <List className="w-4 h-4 text-[#0F766E]" />
                    <h3 className="text-sm font-semibold text-[#0F172A]">
                      On this page
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {tocItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={`#${item.id}`}
                        className={`block hover:text-[#0F766E] transition-colors ${
                          item.level === 2
                            ? "text-sm font-medium text-gray-700"
                            : "text-xs text-gray-500 pl-4"
                        }`}
                      >
                        {item.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* ARTICLE BODY */}
            <article className="min-w-0 w-full max-w-[850px]">
              <div
                style={{ fontFeatureSettings: '"rlig" 1, "calt" 1' }}
                className="
                  max-w-none

                  [&_h2]:text-3xl
                  md:[&_h2]:text-4xl
                  [&_h2]:font-bold
                  [&_h2]:tracking-tight
                  [&_h2]:text-[#0F172A]
                  [&_h2]:mt-16
                  [&_h2]:mb-6
                  [&_h2]:pb-4
                  [&_h2]:border-b
                  [&_h2]:border-gray-200

                  [&_h3]:text-2xl
                  md:[&_h3]:text-3xl
                  [&_h3]:font-semibold
                  [&_h3]:text-[#111827]
                  [&_h3]:mt-12
                  [&_h3]:mb-4

                  [&_h4]:text-xl
                  md:[&_h4]:text-2xl
                  [&_h4]:font-semibold
                  [&_h4]:mt-10
                  [&_h4]:mb-4

                  [&_p]:text-[15px]
                  md:[&_p]:text-[17px]
                  [&_p]:leading-8
                  [&_p]:text-gray-700
                  [&_p]:mb-7
                  [&_p]:text-justify

                  [&_strong]:font-bold
                  [&_strong]:text-black

                  [&_a]:text-[#0F766E]
                  [&_a]:font-semibold
                  [&_a]:underline
                  [&_a]:underline-offset-4
                  [&_a]:decoration-2
                  [&_a]:break-words

                  [&_ul]:my-8
                  [&_ul]:pl-6

                  [&_li]:text-[15px]
                  md:[&_li]:text-[17px]
                  [&_li]:leading-8
                  [&_li]:mb-3
                  [&_li]:text-gray-700
                  [&_li]:text-justify

                  [&_blockquote]:border-l-4
                  [&_blockquote]:border-[#0F766E]
                  [&_blockquote]:pl-5
                  [&_blockquote]:italic
                  [&_blockquote]:text-xl
                  md:[&_blockquote]:text-2xl
                  [&_blockquote]:text-gray-700
                  [&_blockquote]:my-10

                  [&_img]:rounded-3xl
                  [&_img]:shadow-2xl
                  [&_img]:my-12

                  [&_code]:bg-gray-100
                  [&_code]:px-2
                  [&_code]:py-1
                  [&_code]:rounded
                  [&_code]:text-[#0F766E]

                  [&_pre]:bg-[#0F172A]
                  [&_pre]:rounded-3xl
                  [&_pre]:p-6
                  [&_pre]:overflow-x-auto

                  [&_table]:w-full
                  [&_table]:min-w-[700px]
                  [&_table]:border-collapse
                  [&_table]:my-10
                  [&_table]:rounded-2xl
                  [&_table]:overflow-hidden
                  [&_table]:border
                  [&_table]:border-gray-200

                  [&_thead]:bg-[#0F172A]

                  [&_th]:px-5
                  [&_th]:py-4
                  [&_th]:text-left
                  [&_th]:text-white
                  [&_th]:font-semibold
                  [&_th]:text-sm

                  [&_td]:px-5
                  [&_td]:py-4
                  [&_td]:border-t
                  [&_td]:border-gray-200
                  [&_td]:text-gray-700
                  [&_td]:text-sm

                  [&_.table-wrapper]:overflow-x-auto
                  [&_.table-wrapper]:rounded-2xl
                  [&_.table-wrapper]:border
                  [&_.table-wrapper]:border-gray-200
                "
              >
                {/*
                  bodyContent = blog.content with its `# H1` line stripped out.
                  The H1 is already displayed in the hero above — no duplicate.
                */}
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[
                    rehypeSlug,
                    [rehypeAutolinkHeadings, { behavior: "append" }],
                  ]}
                  components={{
                    blockquote: ({ children }: any) => (
                      <blockquote className="relative">
                        <Quote className="absolute -left-2 -top-3 w-8 h-8 text-[#0F766E]/20" />
                        <div>{children}</div>
                      </blockquote>
                    ),

                    table: ({ children }: any) => (
                      <div className="table-wrapper">
                        <table>{children}</table>
                      </div>
                    ),

                    a: ({ href, children }: any) => {
                      const isExternal = href?.startsWith("http");
                      return (
                        <a
                          href={href}
                          target={isExternal ? "_blank" : "_self"}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          className="
                            text-[#0F766E]
                            underline
                            underline-offset-4
                            decoration-2
                            font-semibold
                            hover:text-[#134E4A]
                            transition-colors
                          "
                        >
                          {children}
                          {isExternal && (
                            <span className="inline-block ml-1">
                              <LinkIcon className="w-4 h-4 inline" />
                            </span>
                          )}
                        </a>
                      );
                    },
                  }}
                >
                  {bodyContent}
                </ReactMarkdown>
              </div>

              {/* TAGS */}
              {blog.tags && (
                <div className="mt-16 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap gap-3">
                    {blog.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm hover:bg-[#0F766E] hover:text-white transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* SHARE */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="text-sm text-gray-500 font-medium">
                    Share this article
                  </span>
                  <ShareButtons title={blog.title} url={blogUrl} />
                </div>
              </div>

              {/* FOOTER */}
              <div className="mt-12 border border-gray-200 rounded-3xl p-5 md:p-6 bg-gray-50">
                <div className="flex flex-wrap items-center justify-between gap-5">
                  <div className="flex flex-wrap items-center gap-6">
                    <button className="flex items-center gap-2 text-gray-500 hover:text-[#0F766E] transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      Helpful
                    </button>

                    <button className="flex items-center gap-2 text-gray-500 hover:text-[#0F766E] transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      Comment
                    </button>

                    <button className="flex items-center gap-2 text-gray-500 hover:text-[#0F766E] transition-colors">
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                  </div>

                  <div className="text-xs text-gray-400">Thanks for reading</div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}