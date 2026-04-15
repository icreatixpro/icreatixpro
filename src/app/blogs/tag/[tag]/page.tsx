import { getAllBlogs } from "@/lib/blog-helpers";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, Hash } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag } = await params;
  return {
    title: `Articles tagged with #${tag} | iCreatixPRO Blog`,
    description: `Browse all articles tagged with "${tag}" - expert insights on SEO, AI, and digital marketing.`,
  };
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const allPosts = getAllBlogs();
  
  const taggedPosts = allPosts.filter(post => 
    post.tags?.some(t => t.toLowerCase() === tag.toLowerCase())
  );
  
  if (taggedPosts.length === 0 && allPosts.length > 0) {
    notFound();
  }
  
  return (
    <main className="min-h-screen bg-white">
      
      {/* Tag Header */}
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
            <Hash className="w-8 h-8 text-[#2C727B]" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{tag}</h1>
          </div>
          <p className="text-gray-600">
            {taggedPosts.length} article{taggedPosts.length !== 1 ? 's' : ''} tagged with #{tag}
          </p>
        </div>
      </section>
      
      {/* Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {taggedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <Calendar className="w-3 h-3" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <Clock className="w-3 h-3" />
                  <span>{post.readingTime}</span>
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
      </section>
      
    </main>
  );
}