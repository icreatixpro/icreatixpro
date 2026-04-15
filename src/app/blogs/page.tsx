import { getAllBlogs, getFeaturedPosts, categories } from "@/lib/blog-helpers";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, 
  User, 
  Clock, 
  ChevronRight, 
  Sparkles, 
  Eye, 
  Heart, 
  Zap, 
  Flame, 
  Search,
  Mail,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Star,
  Award,
  Shield,
  Globe,
  Cpu,
  BarChart3,
  Megaphone,
  Layers,
  Grid3X3,
  Newspaper,
  Podcast,
  Users
} from "lucide-react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "iCreatixPRO Blog | AI-Powered SEO Insights & Digital Growth Hub",
  description: "Enterprise-grade SEO insights, AI marketing strategies, and data-driven growth tactics. Trusted by 500+ businesses worldwide.",
  keywords: "AI SEO, enterprise SEO, digital marketing, content strategy, technical SEO, voice search, visual search",
  openGraph: {
    title: "iCreatixPRO Blog | AI-Powered SEO Insights",
    description: "Enterprise-grade SEO insights and digital growth strategies",
    url: "https://icreatixpro.com/blogs",
    siteName: "iCreatixPRO",
    images: [{ url: "https://icreatixpro.com/og-blog.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iCreatixPRO Blog",
    description: "Enterprise SEO insights",
    creator: "@icreatixpro",
  },
};

export default function BlogsPage() {
  const allPosts = getAllBlogs();
  const featuredPosts = getFeaturedPosts(4);
  const recentPosts = allPosts.slice(0, 6);
  const hasBlogs = allPosts.length > 0;
  
  // JSON-LD Schema for Blog
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "iCreatixPRO Blog",
    "description": "Enterprise-grade AI SEO insights and digital growth strategies",
    "url": "https://icreatixpro.com/blogs",
    "publisher": {
      "@type": "Organization",
      "name": "iCreatixPRO",
      "logo": {
        "@type": "ImageObject",
        "url": "https://icreatixpro.com/logo.png"
      }
    }
  };
  
  return (
    <>
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      
      <main className="min-h-screen bg-white">
        
        {/* ============================================ */}
        {/* PREMIUM HERO SECTION - PRODUCT GRADE */}
        {/* ============================================ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#2C727B]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1A394E]/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#2C727B]/[0.02] to-[#1A394E]/[0.02] rounded-full blur-3xl" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2C727B]/10 text-[#2C727B] text-sm font-medium mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  Knowledge Base
                </div>
                
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                  <span className="text-gray-900">AI SEO &</span>
                  <br />
                  <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
                    Digital Growth
                  </span>
                  <br />
                  <span className="text-gray-900">Insights</span>
                </h1>
                
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  Actionable strategies, case studies, and expert insights to help 
                  you dominate search rankings and scale your business in 2026.
                </p>
                
                {/* Stats Bar */}
                <div className="flex flex-wrap gap-6 mt-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#2C727B]/10 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-[#2C727B]" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{hasBlogs ? allPosts.length : 0}+</div>
                      <div className="text-xs text-gray-500">Articles</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#2C727B]/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-[#2C727B]" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">50K+</div>
                      <div className="text-xs text-gray-500">Readers</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#2C727B]/10 flex items-center justify-center">
                      <Star className="w-5 h-5 text-[#2C727B]" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">4.9</div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                  </div>
                </div>
                
                {/* Search Bar */}
                <div className="mt-8">
                  <form action="/blogs/search" method="GET" className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#2C727B] transition-colors" />
                    <input
                      type="text"
                      name="q"
                      placeholder="Search 500+ articles, guides, and tutorials..."
                      className="w-full pl-12 pr-4 py-3.5 text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2C727B] focus:border-transparent shadow-sm"
                    />
                  </form>
                </div>
              </div>
              
              {/* Right - Feature Cards Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <Cpu className="w-8 h-8 text-[#2C727B] mb-2" />
                    <h3 className="font-semibold text-gray-900">AI-Powered</h3>
                    <p className="text-xs text-gray-500 mt-1">Machine learning insights</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <BarChart3 className="w-8 h-8 text-[#2C727B] mb-2" />
                    <h3 className="font-semibold text-gray-900">Data-Driven</h3>
                    <p className="text-xs text-gray-500 mt-1">Real analytics</p>
                  </div>
                </div>
                <div className="space-y-4 mt-6">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <Globe className="w-8 h-8 text-[#2C727B] mb-2" />
                    <h3 className="font-semibold text-gray-900">Global Reach</h3>
                    <p className="text-xs text-gray-500 mt-1">International SEO</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <Shield className="w-8 h-8 text-[#2C727B] mb-2" />
                    <h3 className="font-semibold text-gray-900">Enterprise-Grade</h3>
                    <p className="text-xs text-gray-500 mt-1">Trusted by 500+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* ============================================ */}
        {/* CATEGORY NAVIGATION - PREMIUM */}
        {/* ============================================ */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto py-3 gap-1 scrollbar-hide">
              <Link
                href="/blogs"
                className="flex-shrink-0 px-4 py-2 rounded-lg bg-[#2C727B] text-white text-sm font-medium"
              >
                All Posts
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/blogs/category/${category.slug}`}
                  className="flex-shrink-0 px-4 py-2 rounded-lg text-gray-600 text-sm font-medium hover:bg-gray-100 transition-colors"
                >
                  {category.icon} {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* ============================================ */}
        {/* FEATURED POSTS - MAGAZINE LAYOUT */}
        {/* ============================================ */}
        {hasBlogs && featuredPosts.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Featured Insights</h2>
                <p className="text-gray-500 text-sm mt-1">Curated by our editorial team</p>
              </div>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
                  <ChevronRight className="w-4 h-4 rotate-180" />
                </button>
                <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-12 gap-6">
              {/* Main Featured Article */}
              <div className="lg:col-span-7">
                <Link href={`/blogs/${featuredPosts[0].slug}`} className="group block">
                  <div className="relative h-96 rounded-xl overflow-hidden">
                    <Image
                      src={featuredPosts[0].image}
                      alt={featuredPosts[0].imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 bg-[#2C727B] text-white text-xs rounded">
                          {featuredPosts[0].category}
                        </span>
                        <span className="text-white/70 text-xs">{featuredPosts[0].readingTime}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#2C727B] transition-colors">
                        {featuredPosts[0].title}
                      </h3>
                      <p className="text-white/80 text-sm mt-1 line-clamp-2">
                        {featuredPosts[0].description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              
              {/* Side Featured Articles */}
              <div className="lg:col-span-5 space-y-4">
                {featuredPosts.slice(1, 4).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blogs/${post.slug}`}
                    className="group flex gap-4 bg-gray-50 rounded-xl p-3 hover:bg-gray-100 transition-colors"
                  >
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs text-[#2C727B] font-medium">{post.category}</span>
                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#2C727B] transition-colors line-clamp-2 mt-1">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* ============================================ */}
        {/* LATEST ARTICLES - MODERN GRID */}
        {/* ============================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
              <p className="text-gray-500 text-sm mt-1">Fresh insights delivered weekly</p>
            </div>
            <Link href="/blogs/archive" className="text-sm text-[#2C727B] font-medium hover:underline flex items-center gap-1">
              View archive <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          
          {!hasBlogs ? (
            <div className="text-center py-20 bg-gray-50 rounded-2xl">
              <Sparkles className="w-12 h-12 text-[#2C727B] mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900">Coming Soon</h3>
              <p className="text-gray-500 text-sm">First article is being prepared</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post, idx) => (
                <article
                  key={post.slug}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <Link href={`/blogs/${post.slug}`}>
                    <div className="relative h-52 overflow-hidden bg-gray-100">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {idx === 0 && (
                        <div className="absolute top-3 right-3">
                          <span className="px-2 py-0.5 bg-red-500 text-white text-xs rounded-full animate-pulse">
                            New
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <span className="px-2 py-0.5 bg-gray-100 rounded text-[#2C727B] font-medium">
                          {post.category}
                        </span>
                        <span>•</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#2C727B] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-gray-600 text-sm line-clamp-2">
                        {post.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <Eye className="w-3 h-3" />
                          <span>{post.views?.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </section>
        
        {/* ============================================ */}
        {/* NEWSLETTER SECTION - PREMIUM */}
        {/* ============================================ */}
        <section className="bg-gradient-to-r from-[#1A394E] to-[#2C727B] py-16 mt-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm mb-6">
              <Mail className="w-3.5 h-3.5" />
              <span>Weekly Newsletter</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Stay Ahead of the Curve
            </h2>
            <p className="text-white/80 mb-6 max-w-md mx-auto">
              Get the latest SEO strategies and AI insights delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-[#1A394E] rounded-lg font-semibold hover:shadow-lg transition-all">
                Subscribe
              </button>
            </form>
            <p className="text-xs text-white/50 mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </section>
        
      </main>
    </>
  );
}