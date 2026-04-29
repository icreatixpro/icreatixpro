'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getAllBlogs } from '@/lib/blog-helpers';
import { BlogPost } from '@/lib/blog-data';

export default function BlogSectionServer() {
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const blogs = getAllBlogs();
    setAllPosts(blogs);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <section className="py-24 text-center">
        <div className="inline-block w-12 h-12 border-4 border-[#2C727B] border-t-transparent rounded-full animate-spin" />
        <p className="mt-4 text-gray-500">Loading articles...</p>
      </section>
    );
  }

  if (allPosts.length === 0) {
    return (
      <section className="py-24 text-center">
        <p className="text-gray-500">No articles yet. Check back soon!</p>
      </section>
    );
  }

  const featuredPost = allPosts[0];
  const recentPosts = allPosts.slice(0, 6);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E]">
            Latest Articles
          </h2>
          <p className="mt-2 text-gray-600">
            Insights from our experts
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-10 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <span className="text-xs text-[#2C727B] font-semibold uppercase">Featured</span>
              <h3 className="text-xl font-bold text-[#1A394E] mt-1">{featuredPost.title}</h3>
              <p className="mt-2 text-gray-600">{featuredPost.description}</p>
              <Link href={`/blogs/${featuredPost.slug}`}>
                <button className="mt-4 px-4 py-2 bg-[#2C727B] text-white rounded-lg text-sm hover:bg-[#1A394E] transition">
                  Read More →
                </button>
              </Link>
            </div>
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <Link key={post.slug} href={`/blogs/${post.slug}`}>
              <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition cursor-pointer">
                <h3 className="font-bold text-[#1A394E] line-clamp-2">{post.title}</h3>
                <p className="mt-2 text-gray-500 text-sm line-clamp-2">{post.description}</p>
                <div className="mt-3 text-[#2C727B] text-sm font-medium">
                  Read article →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link href="/blogs">
            <button className="px-6 py-2 border-2 border-[#2C727B] text-[#2C727B] rounded-lg hover:bg-[#2C727B] hover:text-white transition">
              View All {allPosts.length} Articles
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}