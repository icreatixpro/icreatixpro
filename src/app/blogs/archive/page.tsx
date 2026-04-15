import { getAllBlogs, getArchive, categories } from "@/lib/blog-helpers";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ChevronRight, Archive as ArchiveIcon, FolderOpen, CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog Archive | iCreatixPRO",
  description: "Browse all our SEO insights, AI marketing strategies, and digital growth articles - organized by date and category.",
};

export default function ArchivePage() {
  const allPosts = getAllBlogs();
  const archive = getArchive();
  const hasBlogs = allPosts.length > 0;
  
  // Get unique years from posts
  const years = [...new Set(allPosts.map(post => new Date(post.date).getFullYear()))].sort((a, b) => b - a);
  
  return (
    <main className="min-h-screen bg-white">
      
      {/* Archive Header */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-[#2C727B] hover:text-[#1A394E] transition-colors mb-6 group"
          >
            <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-3 mb-2">
            <ArchiveIcon className="w-8 h-8 text-[#2C727B]" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Blog Archive</h1>
          </div>
          <p className="text-gray-600 max-w-2xl">
            Browse all {hasBlogs ? allPosts.length : 0} articles, guides, and insights from our team of SEO experts.
          </p>
        </div>
      </section>
      
      {!hasBlogs ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <ArchiveIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">No articles yet</h2>
          <p className="text-gray-500">Check back soon for new content!</p>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Archive Navigation */}
          <div className="grid lg:grid-cols-4 gap-8">
            
            {/* Sidebar - Years & Categories */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                
                {/* Years Filter */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-[#2C727B]" />
                    Browse by Year
                  </h3>
                  <ul className="space-y-2">
                    {years.map((year) => (
                      <li key={year}>
                        <a
                          href={`#year-${year}`}
                          className="text-sm text-gray-600 hover:text-[#2C727B] transition-colors flex items-center justify-between group"
                        >
                          <span>{year}</span>
                          <span className="text-xs text-gray-400 group-hover:text-[#2C727B]">
                            {allPosts.filter(p => new Date(p.date).getFullYear() === year).length}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Categories */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <FolderOpen className="w-4 h-4 text-[#2C727B]" />
                    Categories
                  </h3>
                  <ul className="space-y-2">
                    {categories.slice(0, 6).map((cat) => (
                      <li key={cat.slug}>
                        <Link
                          href={`/blogs/category/${cat.slug}`}
                          className="text-sm text-gray-600 hover:text-[#2C727B] transition-colors flex items-center justify-between group"
                        >
                          <span>{cat.icon} {cat.name}</span>
                          <span className="text-xs text-gray-400">{cat.count}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
              </div>
            </aside>
            
            {/* Main Content - All Posts Grouped by Year */}
            <div className="lg:col-span-3">
              
              {years.map((year) => {
                const yearPosts = allPosts.filter(p => new Date(p.date).getFullYear() === year);
                return (
                  <div key={year} id={`year-${year}`} className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                      {year}
                      <span className="ml-2 text-sm font-normal text-gray-400">
                        ({yearPosts.length} articles)
                      </span>
                    </h2>
                    
                    <div className="space-y-6">
                      {yearPosts.map((post) => (
                        <Link
                          key={post.slug}
                          href={`/blogs/${post.slug}`}
                          className="group flex flex-col md:flex-row gap-5 p-4 -mx-4 rounded-xl hover:bg-gray-50 transition-colors"
                        >
                          {/* Image */}
                          <div className="relative w-full md:w-48 h-32 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                            <Image
                              src={post.image}
                              alt={post.imageAlt}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                              <span className="px-2 py-0.5 bg-[#2C727B]/10 text-[#2C727B] rounded">
                                {post.category}
                              </span>
                              <span>•</span>
                              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</span>
                              <span>•</span>
                              <span>{post.readingTime}</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#2C727B] transition-colors">
                              {post.title}
                            </h3>
                            <p className="mt-1 text-gray-600 text-sm line-clamp-2">
                              {post.description}
                            </p>
                            <div className="mt-3 flex items-center gap-3 text-xs text-gray-400">
                              <span>By {post.author}</span>
                              <span>{post.wordCount.toLocaleString()} words</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
              
            </div>
          </div>
        </div>
      )}
      
    </main>
  );
}