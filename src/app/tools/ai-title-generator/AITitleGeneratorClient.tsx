"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

// ─── Types ─────────────────────────────────────────────────────
interface TitleResult {
  title: string;
  type: string;
  seoTip: string;
  id: string;
}

interface ToneOption {
  id: string;
  label: string;
  icon: string;
}

type Filter = "all" | "saved" | "top" | "best";

// ─── Tone Options ─────────────────────────────────────────────
const TONE_OPTIONS: ToneOption[] = [
  { id: "formal", label: "Formal", icon: "🎩" },
  { id: "friendly", label: "Friendly", icon: "🤝" },
  { id: "casual", label: "Casual", icon: "😊" },
  { id: "professional", label: "Professional", icon: "💼" },
  { id: "diplomatic", label: "Diplomatic", icon: "🤲" },
  { id: "confident", label: "Confident", icon: "⚡" },
  { id: "middleSchool", label: "Middle School", icon: "📚" },
  { id: "highSchool", label: "High School", icon: "🎓" },
  { id: "academic", label: "Academic", icon: "🏛️" },
  { id: "simplified", label: "Simplified", icon: "✨" },
  { id: "vivid", label: "Vivid", icon: "🎨" },
];

// ─── Helper ───────────────────────────────────────────────────
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

function makeId(title: string): string {
  try {
    return btoa(encodeURIComponent(title)).slice(0, 16);
  } catch {
    return title.slice(0, 16).replace(/\s/g, "_");
  }
}

// ─── Main Component ───────────────────────────────────────────
export default function AITitleGeneratorClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [keyword, setKeyword] = useState(searchParams.get("q") ?? "");
  const [selectedTone, setSelectedTone] = useState("professional");
  const [count, setCount] = useState(10);
  const [loading, setLoading] = useState(false);
  const [titles, setTitles] = useState<TitleResult[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const generate = useCallback(() => {
    if (!keyword.trim()) return;

    setLoading(true);

    setTimeout(() => {
      const mock: TitleResult[] = Array.from({ length: count }).map((_, i) => ({
        id: makeId(keyword + i),
        title: `Best ${keyword} Strategy ${i + 1}`,
        type: "How-To",
        seoTip: "Optimized for CTR & SEO",
      }));

      setTitles(mock);
      setLoading(false);

      resultsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  }, [keyword, count]);

  return (
    <LazyMotion features={domAnimation}>
      <div className="max-w-5xl mx-auto p-6">

        {/* INPUT */}
        <div className="mb-4">
          <input
            ref={inputRef}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Enter keyword..."
            className="w-full p-3 border rounded-lg"
          />
        </div>

        {/* BUTTON */}
        <button
          onClick={generate}
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          {loading ? "Generating..." : "Generate Titles"}
        </button>

        {/* RESULTS */}
        <div ref={resultsRef} className="mt-6 space-y-2">
          {titles.map((t) => (
            <div key={t.id} className="p-3 border rounded-lg">
              <h3 className="font-semibold">{t.title}</h3>
              <p className="text-sm text-gray-500">{t.seoTip}</p>
            </div>
          ))}
        </div>

      </div>
    </LazyMotion>
  );
}