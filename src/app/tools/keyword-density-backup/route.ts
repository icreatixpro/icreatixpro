"use client";

import { useState } from "react";
import { ToolLayout, ResultCard, ToolLoader, ToolCTA } from "@/components/tools";

// Define a type for keyword result
type KeywordResult = {
  word: string;
  density: number;
};

export default function KeywordDensityChecker() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<KeywordResult[]>([]);
  const [totalWords, setTotalWords] = useState(0);

  const analyzeText = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setResults([]);

    try {
      const res = await fetch("/api/keyword-density", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();

      setResults(data.keywords);
      setTotalWords(data.totalWords);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ToolLayout title="Keyword Density Checker">

      {/* TEXTAREA */}
      <textarea
        className="w-full p-4 border border-gray-300 rounded-2xl bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-900 resize-none"
        rows={6}
        placeholder="Paste your content here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* BUTTON */}
      <button
        onClick={analyzeText}
        className="mt-4 w-full py-3 font-semibold rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:scale-105 transition-transform duration-200"
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Analyze Keyword Density"}
      </button>

      {/* LOADER */}
      {loading && <ToolLoader />}

      {/* RESULT */}
      {!loading && results.length > 0 && (
        <>
          <div className="mt-4 flex justify-between items-center space-x-4">
            <p className="text-sm text-gray-500">
              Total Words: <span className="font-medium">{totalWords}</span>
            </p>
            <p className="text-sm text-yellow-600 font-semibold">
              Top Keyword: {results[0].word} ({results[0].density}%)
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {results.map((item, i) => (
              <ResultCard
                key={i}
                label={item.word}
                value={`${item.density}%`}
                highlight={i === 0} // top keyword special highlight
              />
            ))}
          </div>
        </>
      )}

      {/* EMPTY STATE */}
      {!loading && results.length === 0 && (
        <p className="mt-6 text-gray-400 text-center">
          Enter your content above and click analyze to see keyword density.
        </p>
      )}

      {/* CTA */}
      <ToolCTA text="Optimize Content Now" />
    </ToolLayout>
  );
}