"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blogs";
import { Search as SearchIcon, ArrowLeft, Clock } from "lucide-react";

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const [results, setResults] = useState<BlogPost[]>([]);
  const [isSearching, setIsSearching] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      setIsSearching(true);

      try {
        if (query.length >= 2) {
          const res = await fetch(`/api/search?q=${query}`);
          const data = await res.json();
          setResults(data || []);
        } else {
          setResults([]);
        }
      } catch (error) {
        console.error("Search error:", error);
        setResults([]);
      }

      setIsSearching(false);
    };

    fetchResults();
  }, [query]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">

      {/* Search Header */}
      <section className="bg-gradient-to-r from-[#1A394E]/5 to-[#2C727B]/5 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-[#2C727B] hover:text-[#1A394E] transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <SearchIcon className="w-8 h-8 text-[#2C727B]" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Search Results
            </h1>
          </div>

          {query && (
            <p className="text-gray-600">
              Found {results.length} result{results.length !== 1 ? "s" : ""} for "{query}"
            </p>
          )}

        </div>
      </section>

      {/* Results */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {isSearching ? (
          <div className="text-center py-20">
            <div className="inline-block w-8 h-8 border-4 border-[#2C727B] border-t-transparent rounded-full animate-spin" />
            <p className="mt-4 text-gray-500">Searching...</p>
          </div>
        ) : query.length < 2 ? (
          <div className="text-center py-20">
            <SearchIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Enter a search term
            </h3>
            <p className="text-gray-500">
              Type at least 2 characters to start searching
            </p>
          </div>
        ) : results.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-4">
              No results found for "{query}"
            </p>
            <Link href="/blogs" className="text-[#2C727B] hover:underline">
              Browse all articles →
            </Link>
          </div>
        ) : (
          <div className="space-y-8">

            {results.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-5">

                  <div className="relative md:w-56 h-48 md:h-auto overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex-1 p-5">

                    <div className="flex items-center gap-2 text-sm text-[#2C727B] mb-2">
                      <span className="font-semibold">{post.category}</span>
                      <span>•</span>
                      <span>
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#2C727B] transition-colors">
                      {post.title}
                    </h3>

                    <p className="mt-2 text-gray-600 line-clamp-2">
                      {post.description}
                    </p>

                    <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readingTime}</span>
                      </div>
                    </div>

                  </div>
                </div>
              </Link>
            ))}

          </div>
        )}

      </section>

    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="inline-block w-8 h-8 border-4 border-[#2C727B] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <SearchResultsContent />
    </Suspense>
  );
}