import Link from "next/link";
import Image from "next/image";
import { getAllBlogs } from "@/lib/blog-helpers";
import { Calendar, Clock, ArrowRight, Sparkles, Eye, TrendingUp, Zap, BookOpen } from "lucide-react";

export default async function BlogSectionNew() {
  let posts: any[] = [];
  try {
    const allPosts = getAllBlogs();
    posts = allPosts.slice(0, 6);
  } catch (err) {
    console.error(err);
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="py-20 px-6 text-center bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-[#1A394E]">No articles yet</h3>
          <p className="text-gray-500 mt-2">Check back soon for insights!</p>
        </div>
      </div>
    );
  }

  function formatDate(dateString: string) {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    } catch {
      return dateString;
    }
  }

  // Get featured post (first one)
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2C727B]/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#1A394E]/5 rounded-full blur-[120px] animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2C727B]/10 to-[#1A394E]/10 backdrop-blur-sm border border-[#2C727B]/20 shadow-sm mb-4">
            <Sparkles className="w-4 h-4 text-[#2C727B]" />
            <span className="text-sm uppercase tracking-wider text-[#2C727B] font-semibold">
              Latest Articles
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A394E] mt-4">
            Insights from{" "}
            <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
              Our Experts
            </span>
          </h2>
          
          <p className="mt-4 text-gray-600 text-lg">
            Cutting-edge strategies and actionable insights for digital success
          </p>
        </div>

        {/* Featured Article - Hero Card with Image */}
        {featuredPost && (
          <div className="mb-16 group">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2C727B] to-[#1A394E] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  {/* Left Side - Content */}
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white text-xs font-semibold w-fit">
                      <BookOpen className="w-3 h-3" />
                      Featured Article
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A394E] leading-tight hover:text-[#2C727B] transition-colors">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {featuredPost.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredPost.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readingTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {featuredPost.views || "1.2k"} views
                      </div>
                    </div>
                    
                    <Link href={`/blogs/${featuredPost.slug}`}>
                      <button className="group px-6 py-3 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                        Read Featured Article
                        <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                  
                  {/* Right Side - Image */}
                  <div className="relative h-64 md:h-auto rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    {featuredPost.image ? (
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#2C727B]/20 to-[#1A394E]/20 flex flex-col items-center justify-center">
                        <TrendingUp className="w-16 h-16 text-[#2C727B]/40 mb-4" />
                        <p className="text-[#1A394E]/60 font-semibold text-center px-4">
                          Expert Insights
                        </p>
                      </div>
                    )}
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid with Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <Link key={index} href={`/blogs/${post.slug}`} className="group">
              <div className="relative h-full rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#2C727B]/10 to-[#1A394E]/10">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <TrendingUp className="w-12 h-12 text-[#2C727B]/30" />
                    </div>
                  )}
                  {/* Gradient Overlay on Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2C727B]/10 text-[#2C727B] text-xs font-semibold mb-3 transition-all duration-300 group-hover:bg-[#2C727B] group-hover:text-white">
                    {post.category || "Article"}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1A394E] mb-2 line-clamp-2 group-hover:text-[#2C727B] transition-colors">
                    {post.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {post.description}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readingTime}
                      </div>
                    </div>
                  </div>
                  
                  {/* Read More Link */}
                  <div className="mt-4 inline-flex items-center gap-2 text-[#2C727B] text-sm font-medium group/link">
                    Read article
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link href="/blogs">
            <button className="group px-8 py-3 rounded-xl bg-white border-2 border-[#2C727B]/30 text-[#1A394E] font-semibold hover:bg-gradient-to-r hover:from-[#2C727B] hover:to-[#1A394E] hover:text-white hover:border-transparent transition-all duration-300">
              <Zap className="inline w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              View All {posts.length} Articles
              <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

