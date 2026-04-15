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
  Twitter, 
  Linkedin, 
  Facebook,
  Sparkles,
  TrendingUp,
  BookOpen,
  List,
  Hash,
  Quote,
  Link as LinkIcon,
  Send,
  FacebookIcon,
  Instagram,
  Youtube,
  CheckCircle,
  ArrowRight as ArrowRightIcon,
  Trophy,
  Rocket,
  Target,
  Layers,
  MessageCircle,
  Share2,
  ThumbsUp
} from "lucide-react";
import Script from "next/script";

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  
  if (!blog) {
    return { title: "Blog Not Found" };
  }
  
  const previousImages = (await parent).openGraph?.images || [];
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://icreatixpro.com';
  
  let metaTitle = `${blog.title} | iCreatixPRO`;
  if (metaTitle.length > 60) {
    const maxTitleLength = 55;
    const truncatedTitle = blog.title.substring(0, maxTitleLength - 15);
    metaTitle = `${truncatedTitle}... | iCreatixPRO`;
  }
  
  let metaDescription = blog.description;
  if (metaDescription.length > 160) {
    metaDescription = metaDescription.substring(0, 157) + '...';
  } else if (metaDescription.length < 120) {
    metaDescription = `${metaDescription} Learn expert SEO strategies, AI tools, and proven techniques to boost your rankings.`;
    if (metaDescription.length > 160) {
      metaDescription = metaDescription.substring(0, 157) + '...';
    }
  }
  
  return {
    title: metaTitle,
    description: metaDescription,
    keywords: blog.keywords,
    authors: [{ name: blog.author, url: `${baseUrl}/about` }],
    publisher: 'iCreatixPRO',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
    alternates: {
      canonical: `${baseUrl}/blogs/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: metaDescription,
      url: `${baseUrl}/blogs/${blog.slug}`,
      type: "article",
      publishedTime: blog.date,
      modifiedTime: blog.date,
      authors: [blog.author],
      images: [blog.image, ...previousImages],
      siteName: 'iCreatixPRO',
      locale: 'en_US',
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: metaDescription,
      images: [blog.image],
      creator: "@icreatixpro",
      site: "@icreatixpro",
    },
    category: blog.category,
    classification: 'SEO, Digital Marketing, AI Tools',
    verification: {
      google: 'your-google-verification-code',
    },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  
  if (!blog) {
    notFound();
  }
  
  const blogUrl = `https://icreatixpro.com/blogs/${blog.slug}`;
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": blog.title,
    "description": blog.description,
    "image": blog.image,
    "datePublished": blog.date,
    "dateModified": blog.date,
    "author": {
      "@type": "Person",
      "name": blog.author,
    },
    "publisher": {
      "@type": "Organization",
      "name": "iCreatixPRO",
      "logo": {
        "@type": "ImageObject",
        "url": "https://icreatixpro.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": blogUrl
    },
    "keywords": blog.keywords?.join(", ") || "",
    "wordCount": blog.wordCount,
    "timeRequired": blog.readingTime
  };
  
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://icreatixpro.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://icreatixpro.com/blogs"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": blog.title,
        "item": blogUrl
      }
    ]
  };
  
  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  
  const extractTOC = (content: string) => {
    const headingRegex = /^##+\s+(.+)$/gm;
    const matches = [];
    let match;
    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[0].startsWith("###") ? 3 : 2;
      matches.push({
        text: match[1],
        level: level,
        id: match[1].toLowerCase().replace(/[^\w]+/g, '-')
      });
    }
    return matches;
  };
  
  const tocItems = extractTOC(blog.content);
  
  return (
    <>
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
      
      <main className="bg-white">
        
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 border-b border-gray-100">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2C727B]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1A394E]/5 rounded-full blur-[120px]" />
          
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            
            <Link 
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#2C727B] transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to all articles
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#2C727B]/10 text-[#2C727B] text-xs font-semibold rounded-full">
                <Sparkles className="w-3 h-3" />
                {blog.category?.toUpperCase() || "ARTICLE"}
              </span>
              {blog.tags?.slice(0, 3).map((tag: string) => (
                <span key={tag} className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A394E] leading-tight tracking-tight max-w-4xl">
              {blog.title}
            </h1>
            
            {blog.description && (
              <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-3xl leading-relaxed">
                {blog.description}
              </p>
            )}
            
            <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center shadow-md">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{blog.author}</div>
                  <div className="text-xs text-gray-500">SEO Expert & Digital Strategist</div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#2C727B]" />
                  <span>{formattedDate}</span>
                </div>
                <div className="w-px h-4 bg-gray-300" />
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#2C727B]" />
                  <span>{blog.readingTime}</span>
                </div>
                <div className="w-px h-4 bg-gray-300" />
                <div className="flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-[#2C727B]" />
                  <span>{blog.views?.toLocaleString() || "1.2k"} views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Image */}
        {blog.image && (
          <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={blog.image}
                  alt={blog.imageAlt || blog.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
            </div>
          </div>
        )}
        
        {/* Article Content with Sidebar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* LEFT SIDEBAR - Table of Contents */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200">
                    <List className="w-4 h-4 text-[#2C727B]" />
                    <h3 className="font-semibold text-[#1A394E] text-sm">On this page</h3>
                  </div>
                  <div className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto">
                    {tocItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={`#${item.id}`}
                        className={`block text-sm hover:text-[#2C727B] transition-colors py-1 ${
                          item.level === 2 
                            ? "pl-0 font-medium text-gray-700" 
                            : "pl-3 text-gray-500 text-xs"
                        }`}
                      >
                        {item.text}
                      </a>
                    ))}
                    {tocItems.length === 0 && (
                      <p className="text-xs text-gray-400">No headings found</p>
                    )}
                  </div>
                </div>
              </div>
            </aside>
            
            {/* MAIN CONTENT */}
            <article className="flex-1 max-w-3xl">
              <div className="
                prose prose-lg max-w-none
                prose-headings:scroll-mt-20
                prose-headings:text-[#1A394E] prose-headings:font-bold prose-headings:tracking-tight
                prose-h1:text-3xl prose-h1:md:text-4xl prose-h1:mt-12 prose-h1:mb-4 prose-h1:pb-2 prose-h1:border-b-2 prose-h1:border-[#2C727B]/20
                prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-200 prose-h2:flex prose-h2:items-center prose-h2:gap-2
                prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-[#2C727B]
                prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-2 prose-h4:text-gray-700
                prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-5 prose-p:text-base prose-p:md:text-lg
                prose-a:text-[#2C727B] prose-a:font-medium hover:prose-a:underline prose-a:decoration-2 prose-a:underline-offset-2
                prose-ul:list-none prose-ul:pl-0 prose-ul:my-5 prose-ul:space-y-3
                prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-5 prose-ol:space-y-2
                prose-li:text-gray-600 prose-li:leading-relaxed prose-li:marker:text-[#2C727B]
                prose-blockquote:relative prose-blockquote:my-8 prose-blockquote:py-5 prose-blockquote:px-6 prose-blockquote:bg-gradient-to-r prose-blockquote:from-[#2C727B]/5 prose-blockquote:to-transparent prose-blockquote:rounded-r-xl prose-blockquote:border-l-4 prose-blockquote:border-[#2C727B] prose-blockquote:text-gray-600 prose-blockquote:italic
                prose-code:bg-gray-100 prose-code:text-[#2C727B] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm prose-code:font-mono
                prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-5 prose-pre:rounded-xl prose-pre:overflow-x-auto prose-pre:text-sm prose-pre:font-mono prose-pre:my-6
                prose-pre:code:bg-transparent prose-pre:code:text-gray-100 prose-pre:code:p-0
                prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
                prose-table:w-full prose-table:border-collapse prose-table:my-8 prose-table:shadow-lg prose-table:rounded-xl prose-table:overflow-hidden prose-table:border prose-table:border-gray-200
                prose-th:bg-gradient-to-r prose-th:from-[#2C727B] prose-th:to-[#1A394E] prose-th:text-white prose-th:px-5 prose-th:py-3.5 prose-th:text-left prose-th:text-sm prose-th:font-semibold
                prose-td:px-5 prose-td:py-3.5 prose-td:text-sm prose-td:text-gray-600 prose-td:border-b prose-td:border-gray-100
                prose-hr:my-12 prose-hr:border-0 prose-hr:flex prose-hr:justify-center
                prose-strong:text-gray-800 prose-strong:font-semibold
              ">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeSlug, [rehypeAutolinkHeadings, { behavior: "append" }]]}
                  components={{
                    ul: ({ children }) => <ul className="space-y-3">{children}</ul>,
                    li: ({ children }: any) => (
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2C727B] flex-shrink-0 mt-2" />
                        <span className="text-gray-600">{children}</span>
                      </li>
                    ),
                    h2: ({ children, id }: any) => (
                      <h2 id={id} className="group flex items-center gap-2">
                        <Hash className="w-5 h-5 text-[#2C727B] opacity-0 group-hover:opacity-100 transition-opacity" />
                        {children}
                      </h2>
                    ),
                    h3: ({ children, id }: any) => (
                      <h3 id={id} className="group flex items-center gap-2">
                        <ArrowRightIcon className="w-4 h-4 text-[#2C727B] opacity-0 group-hover:opacity-100 transition-opacity" />
                        {children}
                      </h3>
                    ),
                    blockquote: ({ children }: any) => (
                      <blockquote className="relative">
                        <Quote className="w-8 h-8 text-[#2C727B]/20 absolute -top-3 -left-2" />
                        <div className="relative z-10">{children}</div>
                      </blockquote>
                    ),
                    table: ({ children }: any) => (
                      <div className="overflow-x-auto my-8 rounded-xl border border-gray-200 shadow-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          {children}
                        </table>
                      </div>
                    ),
                    thead: ({ children }: any) => (
                      <thead className="bg-gradient-to-r from-[#2C727B] to-[#1A394E]">
                        {children}
                      </thead>
                    ),
                    th: ({ children }: any) => (
                      <th className="px-5 py-3.5 text-left text-sm font-semibold text-white">
                        {children}
                      </th>
                    ),
                    td: ({ children }: any) => (
                      <td className="px-5 py-3.5 text-sm text-gray-600 border-b border-gray-100">
                        {children}
                      </td>
                    ),
                    hr: () => (
                      <div className="my-12 flex justify-center">
                        <div className="flex gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#2C727B]/30" />
                          <div className="w-2 h-2 rounded-full bg-[#2C727B]/50" />
                          <div className="w-2 h-2 rounded-full bg-[#2C727B]" />
                          <div className="w-2 h-2 rounded-full bg-[#2C727B]/50" />
                          <div className="w-2 h-2 rounded-full bg-[#2C727B]/30" />
                        </div>
                      </div>
                    ),
                    a: ({ href, children }: any) => (
                      <a href={href} className="inline-flex items-center gap-1 group">
                        {children}
                        <LinkIcon className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ),
                    strong: ({ children }: any) => (
                      <strong className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent font-bold">
                        {children}
                      </strong>
                    ),
                  }}
                >
                  {blog.content}
                </ReactMarkdown>
              </div>
              
              {/* Tags Section */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="mt-12 pt-6 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-[#2C727B] hover:text-white transition-all cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Share Section */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="text-sm text-gray-500 font-medium">Share this article:</span>
                  <ShareButtons 
                    title={blog.title} 
                    url={blogUrl} 
                  />
                </div>
              </div>
              
              {/* Engagement Footer */}
              <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-sm">Helpful</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-500 hover:text-[#2C727B] transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">Leave comment</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-500 hover:text-[#2C727B] transition-colors">
                      <Share2 className="w-4 h-4" />
                      <span className="text-sm">Share</span>
                    </button>
                  </div>
                  <div className="text-xs text-gray-400">
                    Was this article helpful? Give us feedback →
                  </div>
                </div>
              </div>
            </article>
            
            {/* RIGHT SIDEBAR */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                
                {/* Author Bio Card */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 text-center shadow-sm">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2C727B] to-[#1A394E] rounded-full blur-md opacity-50" />
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center shadow-lg">
                      <User className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl text-[#1A394E] mt-3">{blog.author}</h3>
                  <p className="text-sm text-[#2C727B] font-medium mt-1">SEO Expert & Strategist</p>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    Helping businesses dominate search with AI-powered strategies and data-driven insights.
                  </p>
                  <div className="flex justify-center gap-3 mt-4">
                    <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-colors">
                      <Twitter className="w-3.5 h-3.5" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors">
                      <FacebookIcon className="w-3.5 h-3.5" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-colors">
                      <Instagram className="w-3.5 h-3.5" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-colors">
                      <Youtube className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                
                {/* Newsletter Card */}
                <div className="relative overflow-hidden bg-gradient-to-br from-[#2C727B] to-[#1A394E] rounded-xl p-5 sm:p-6 text-white shadow-lg">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl" />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3">
                      <Rocket className="w-5 h-5 text-white/80" />
                      <span className="text-xs font-semibold uppercase tracking-wider">Stay Ahead</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2">Weekly Digital Insights</h4>
                    <p className="text-sm text-white/80 mb-4">
                      Join 5,000+ marketers getting weekly SEO strategies, AI trends, and growth tactics.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="email"
                        placeholder="Work email"
                        className="flex-1 px-3 py-2.5 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 w-full"
                      />
                      <button className="px-4 py-2.5 bg-white text-[#1A394E] rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-1 whitespace-nowrap">
                        <Send className="w-3.5 h-3.5" />
                        Subscribe
                      </button>
                    </div>
                    <p className="text-xs text-white/50 mt-3 text-center sm:text-left">
                      No spam • Unsubscribe anytime • Free forever
                    </p>
                  </div>
                </div>
                
                {/* Popular Reads */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200">
                    <Trophy className="w-4 h-4 text-[#2C727B]" />
                    <h3 className="font-semibold text-[#1A394E] text-sm">Most Popular</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { title: "Best AI Tools for SEO 2026", views: "2.5k reads", trend: "+45%", icon: TrendingUp },
                      { title: "The Future of SEO: AI, AEO & GEO", views: "1.8k reads", trend: "+32%", icon: Target },
                      { title: "Voice Search Optimization Guide", views: "1.2k reads", trend: "+28%", icon: Layers }
                    ].map((item, idx) => (
                      <div key={idx} className="group cursor-pointer">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#2C727B]/10 flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-4 h-4 text-[#2C727B]" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-gray-800 group-hover:text-[#2C727B] transition-colors line-clamp-2">
                              {item.title}
                            </h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-gray-400">{item.views}</span>
                              <span className="text-xs text-green-600">{item.trend}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Categories */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200">
                    <BookOpen className="w-4 h-4 text-[#2C727B]" />
                    <h3 className="font-semibold text-[#1A394E] text-sm">Explore Topics</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["SEO Strategy", "AI Marketing", "Content Growth", "Analytics", "PPC Mastery", "Social Media"].map((cat) => (
                      <span
                        key={cat}
                        className="px-3 py-1.5 bg-white text-gray-600 text-xs rounded-full hover:bg-[#2C727B] hover:text-white transition-all cursor-pointer shadow-sm"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Stats Card */}
                <div className="bg-gradient-to-r from-[#2C727B]/5 to-[#1A394E]/5 rounded-xl p-5 border border-[#2C727B]/10">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#2C727B]">50+</div>
                      <div className="text-xs text-gray-500">Articles</div>
                    </div>
                    <div className="border-l border-[#2C727B]/20" />
                    <div>
                      <div className="text-2xl font-bold text-[#2C727B]">5k+</div>
                      <div className="text-xs text-gray-500">Readers</div>
                    </div>
                    <div className="border-l border-[#2C727B]/20" />
                    <div>
                      <div className="text-2xl font-bold text-[#2C727B]">4.9</div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
        
        {/* Related Articles Section */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-16 mt-8 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2C727B]/10 mb-3">
                <Sparkles className="w-3 h-3 text-[#2C727B]" />
                <span className="text-xs text-[#2C727B] font-medium">Keep Learning</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A394E]">You Might Also Like</h2>
              <p className="text-gray-500 mt-2 text-sm sm:text-base">Continue your journey with these hand-picked articles</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "The Future of SEO: AI, AEO & GEO Explained", desc: "Discover how AI is reshaping search engine optimization", time: "8 min read", trending: true, icon: TrendingUp },
                { title: "Mastering Google Ads: A Complete Guide for 2025", desc: "Advanced PPC strategies to maximize ROI", time: "10 min read", trending: false, icon: Target },
                { title: "Voice Search Optimization: The AEO Revolution", desc: "Capture the growing voice search market", time: "6 min read", trending: true, icon: Layers }
              ].map((item, idx) => (
                <div key={idx} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="h-40 bg-gradient-to-br from-[#2C727B]/10 to-[#1A394E]/10 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2C727B]/20 to-[#1A394E]/20 group-hover:scale-110 transition-transform duration-500" />
                    <item.icon className="w-12 h-12 text-[#2C727B]/40 relative z-10" />
                    {item.trending && (
                      <span className="absolute top-3 right-3 bg-[#2C727B] text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Trending
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-base sm:text-lg text-[#1A394E] mb-1 group-hover:text-[#2C727B] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm line-clamp-2">{item.desc}</p>
                    <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
                      <Clock className="w-3 h-3" />
                      <span>{item.time}</span>
                      <div className="w-px h-3 bg-gray-200" />
                      <span className="text-[#2C727B] group-hover:underline">Read more →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </main>
    </>
  );
}