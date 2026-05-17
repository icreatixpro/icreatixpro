"use client";

import { useEffect, useState } from "react";
import {
  FileText,
  Hash,
  Percent,
  Target,
  Search,
  ArrowRight,
  LayoutGrid,
  Globe,
} from "lucide-react";

import StatCard from "./components/StatCard";
import ProgressRing from "./components/ProgressRing";
import KeywordTable from "./components/KeywordTable";
import Charts from "./components/Charts";
import Suggestions from "./components/Suggestions";

import {
  analyzeKeywordDensity,
  AnalysisResult,
} from "./utils/analyzer";

/* =========================
   SEO ENGINE CORE PAGE
========================= */

export default function SEOEngine() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);

  /* =========================
     CORE ANALYSIS ENGINE
  ========================= */
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!text.trim()) {
        setResult(null);
        return;
      }

      setLoading(true);

      try {
        const analysis = analyzeKeywordDensity(text);

        // 🔥 SEO SCORE BOOST LOGIC (SaaS STYLE LAYER)
        const enhancedScore = Math.min(
          100,
          analysis.seoScore +
            (analysis.totalWords > 300 ? 5 : 0) -
            (analysis.topDensity > 4 ? 10 : 0)
        );

        setResult({
          ...analysis,
          seoScore: enhancedScore,
        });
      } catch (err) {
        console.error(err);
        setResult(null);
      }

      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [text]);

  /* =========================
     RESET ENGINE
  ========================= */
  const handleReset = () => {
    setText("");
    setResult(null);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFA] py-10 px-4">

      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#1A394E] mb-3">
            Keyword Density Checker Free SEO Content Analyzer
          </h1>

          <p className="text-[#1A394E]/60 max-w-2xl mx-auto">
            SEO Engine Pro is a free keyword density checker and SEO content optimization tool by iCreatixPRO. 
Analyze keyword frequency, improve on-page SEO, detect keyword stuffing, and boost your Google rankings with real-time SEO insights.
          </p>

          {/* INTERNAL LINKS */}
          <div className="flex flex-wrap justify-center gap-3 mt-5 text-sm">
            <a href="/tools" className="px-4 py-2 bg-white border rounded-full flex items-center gap-2">
              <LayoutGrid className="w-4 h-4" /> Tools
            </a>

            <a href="/about" className="px-4 py-2 bg-white border rounded-full flex items-center gap-2">
              <Globe className="w-4 h-4" /> About
            </a>

            <a href="/tools/seo-audit" className="px-4 py-2 bg-white border rounded-full flex items-center gap-2">
              <Search className="w-4 h-4" /> SEO Audit
            </a>
          </div>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* INPUT PANEL */}
          <div className="bg-white rounded-2xl border p-6 shadow-sm">

            <div className="flex items-center gap-2 mb-4">
              <Search className="w-5 h-5 text-[#2C727B]" />
              <h2 className="font-semibold text-[#1A394E]">
                Content Analyzer
              </h2>
            </div>

            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={12}
              placeholder="Paste your blog, landing page or article content..."
              className="w-full rounded-xl border bg-gray-50 p-4 outline-none focus:ring-2 focus:ring-[#2C727B]/20"
            />

            <button
              onClick={handleReset}
              className="mt-3 text-sm text-red-500 hover:underline"
            >
              Reset Engine
            </button>
          </div>

          {/* OUTPUT PANEL */}
          <div>

            {!result && !loading && (
              <div className="bg-white rounded-2xl border p-10 text-center">
                Start analysis to see SEO engine results
              </div>
            )}

            {loading && (
              <div className="bg-white rounded-2xl border p-10 text-center">
                Running SEO engine...
              </div>
            )}

            {result && !loading && (
              <div className="space-y-5">

                {/* SEO SCORE */}
                <div className="bg-white rounded-2xl border p-6 flex justify-between items-center">
                  <div>
                    <h2 className="font-semibold text-[#1A394E]">
                      SEO Score
                    </h2>
                    <p className="text-sm text-gray-500">
                      AI-powered optimization score
                    </p>
                  </div>

                  <ProgressRing value={result.seoScore} />
                </div>

                {/* STATS */}
                <div className="grid grid-cols-2 gap-4">
                  <StatCard icon={FileText} label="Words" value={result.totalWords} color="#2C727B" />
                  <StatCard icon={Hash} label="Keywords" value={result.uniqueWords} color="#689A9A" />
                  <StatCard icon={Target} label="Top Keyword" value={result.topKeyword} color="#E6A157" />
                  <StatCard icon={Percent} label="Density" value={`${result.topDensity}%`} color="#2E7D64" />
                </div>

                {/* CHARTS */}
                <Charts data={result.keywords} />

                {/* TABLE */}
                <KeywordTable keywords={result.keywords} />

                {/* SUGGESTIONS */}
                <Suggestions suggestions={result.suggestions} />

                {/* RESET ACTION */}
                <button
                  onClick={handleReset}
                  className="w-full py-3 rounded-xl border bg-white hover:bg-gray-50 transition"
                >
                  Start New Analysis
                </button>

              </div>
            )}

          </div>
        </div>

        {/* ================= ABOUT ================= */}
        <section className="max-w-7xl mx-auto mt-20 bg-white p-8 rounded-3xl border">
          <h2 className="text-2xl font-bold text-[#1A394E] mb-4">
            Advanced Keyword Density Checker (SEO Engine)
          </h2>

          <p className="text-gray-600 leading-7 mb-4">
            This Keyword Density Checker is a real-time SEO optimization tool that helps you analyze
            keyword frequency, content structure, and on-page SEO performance. It is designed for
            bloggers, SEO experts, agencies, and content writers who want to improve Google rankings.
          </p>

          <p className="text-gray-600 leading-7 mb-4">
            The tool calculates keyword density, detects over-optimization (keyword stuffing),
            and provides SEO scoring based on content quality signals. It also helps improve
            readability and semantic keyword balance for better search performance.
          </p>

          <p className="text-gray-600 leading-7">
            Unlike basic keyword tools, this SEO engine simulates real-world content optimization
            principles used in modern search algorithms.
          </p>
        </section>
          {/* ================= FAQS ================= */}
        <section className="max-w-7xl mx-auto mt-10 bg-white p-8 rounded-3xl border">
            <h2 className="text-2xl font-bold text-[#1A394E] mb-6">
              Frequently Asked Questions (SEO Keyword Tool)
            </h2>

            <div className="space-y-6 text-gray-600 leading-7">

              <div>
                <h3 className="font-semibold text-[#1A394E]">
                  What is a keyword density checker tool?
                </h3>
                <p>
                  A keyword density checker analyzes how often a keyword appears in your content
                  compared to the total word count, helping improve SEO optimization.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1A394E]">
                  Is keyword density still important for SEO in 2026?
                </h3>
                <p>
                  Yes, but modern SEO focuses more on natural keyword usage, semantic relevance,
                  and content quality instead of strict density percentages.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1A394E]">
                  What is the best keyword density for SEO?
                </h3>
                <p>
                  The ideal keyword density is usually between 1% to 2.5%, but it should always
                  feel natural and not forced.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1A394E]">
                  Can this tool detect keyword stuffing?
                </h3>
                <p>
                  Yes, it highlights overused keywords and warns when content may be over-optimized,
                  helping avoid SEO penalties.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1A394E]">
                  Who should use this SEO tool?
                </h3>
                <p>
                  Bloggers, content writers, SEO agencies, marketers, and website owners who want
                  to improve Google rankings and content quality.
                </p>
              </div>

            </div>
          </section>

        {/* ================= CTA ================= */}
        <div className="max-w-7xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-[#1A394E] to-[#2C727B] text-white p-10 rounded-3xl text-center">

            <h2 className="text-2xl font-bold mb-3">
              Upgrade Your SEO Strategy
            </h2>

            <p className="text-white/80 mb-6">
              Get expert SEO services, audits, and growth strategies.
            </p>

            <a
              href="https://icreatixpro.com/contact"
              className="inline-flex items-center gap-2 bg-white text-[#1A394E] px-6 py-3 rounded-xl font-semibold"
            >
              Contact Experts <ArrowRight className="w-4 h-4" />
            </a>

          </div>
        </div>

      </div>
    </main>
  );
}