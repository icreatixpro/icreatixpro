import { getPostsByCategory, categories, getAllBlogs } from "@/lib/blog-helpers";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, FolderOpen } from "lucide-react";

// Generate static params for all categories
export async function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

// Generate metadata dynamically
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const categoryData = categories.find(c => c.slug === category);
  
  if (!categoryData) {
    return { title: "Category Not Found" };
  }
  
  return {
    title: `${categoryData.name} Articles | iCreatixPRO Blog`,
    description: categoryData.description,
    openGraph: {
      title: `${categoryData.name} | iCreatixPRO Blog`,
      description: categoryData.description,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  // ✅ FIX: Await the params Promise
  const { category } = await params;
  
  // Find category data
  const categoryData = categories.find(c => c.slug === category);
  
  if (!categoryData) {
    notFound();
  }
  
  // Get posts for this category
  const categoryBlogs = getAllBlogs().filter(blog => blog.category === category);
  
  return (
    <main className="min-h-screen bg-white">
      
      {/* Category Header */}
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
            <span className="text-4xl">{categoryData.icon}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{categoryData.name}</h1>
          </div>
          <p className="text-gray-600 max-w-2xl">{categoryData.description}</p>
          <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
            <FolderOpen className="w-4 h-4" />
            <span>{categoryBlogs.length} articles</span>
          </div>
        </div>
      </section>
      
      {/* Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {categoryBlogs.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-xl">
            <p className="text-gray-500">No articles found in this category yet.</p>
            <Link href="/blogs" className="text-[#2C727B] hover:underline text-sm mt-2 inline-block">
              Browse all articles →
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryBlogs.map((post) => (
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
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 bg-[#2C727B]/90 text-white text-xs rounded">
                      {post.category}
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
                      <span>{post.readingTime}</span>
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
      
    </main>
  );
}