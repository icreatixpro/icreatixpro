"use client";

import { useState } from "react";
import MetaGeneratorLayout from "./layout";
import { ToolLoader, ToolCTA, ResultCard } from "@/components/tools";
import AdsenseAd from "@/components/AdsenseAd";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaRedditAlien } from "react-icons/fa";

export default function MetaTagGenerator() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ title: string; description: string; serpPreview: string } | null>(null);

  const handleGenerate = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/tools/meta-tag-generator/route", {
        method: "POST",
        body: JSON.stringify({ urlOrContent: input }),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MetaGeneratorLayout title="Meta Tag Generator & SERP Preview">
      
      {/* INPUT */}
      <textarea
        className="w-full p-4 rounded-2xl bg-black/10 border border-white/20 text-gray-900 dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
        rows={6}
        placeholder="Enter your content or URL here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* GENERATE BUTTON */}
      <button
        onClick={handleGenerate}
        className="mt-4 w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-2xl hover:scale-105 transition-transform duration-200"
      >
        Generate Meta Tags
      </button>

      {/* LOADER */}
      {loading && <ToolLoader />}

      {/* ADS */}
      <div className="my-6">
        <AdsenseAd />
      </div>

      {/* RESULT */}
      {!loading && result && (
        <div className="mt-6 grid gap-6">
          <ResultCard label="Meta Title" value={result.title} />
          <ResultCard label="Meta Description" value={result.description} />
          <ResultCard label="SERP Preview" value={result.serpPreview} />
        </div>
      )}

      {/* SOCIAL ICONS */}
      {!loading && result && (
        <div className="mt-6 flex gap-4 text-gray-600 dark:text-gray-300">
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(input)}`} target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="w-6 h-6 hover:text-blue-600 transition" />
          </a>
          <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(input)}`} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-6 h-6 hover:text-blue-400 transition" />
          </a>
          <a href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(input)}`} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="w-6 h-6 hover:text-blue-700 transition" />
          </a>
          <a href={`https://reddit.com/submit?url=${encodeURIComponent(input)}`} target="_blank" rel="noopener noreferrer">
            <FaRedditAlien className="w-6 h-6 hover:text-orange-500 transition" />
          </a>
        </div>
      )}

      {/* MINI BLOG / INSTRUCTIONS */}
      <div className="mt-8 p-4 bg-white/20 backdrop-blur-lg rounded-xl shadow-sm border border-white/10">
        <h2 className="text-xl font-semibold mb-2">How to Use This Tool</h2>
        <p className="text-gray-700 dark:text-gray-200 mb-2">
          Enter your content or URL above to generate a fully SEO-optimized Meta Title and Description. 
          You can preview how it will appear in Google search with the SERP snippet.
        </p>
        <p className="text-gray-700 dark:text-gray-200">
          Use this tool to improve your page rankings, CTR, and engagement. Share your results with social media buttons below.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ToolCTA text="Boost My SEO Now" onClick={handleGenerate} />
      </div>

    </MetaGeneratorLayout>
  );
}