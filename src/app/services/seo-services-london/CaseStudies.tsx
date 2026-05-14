// app/seo-services-london/CaseStudies.tsx
"use client";
import { useEffect, useRef, useState } from "react";

const cases = [
  {
    tag: "Tech Startup · London",
    challenge: "Zero organic traffic. Completely invisible to their target buyers despite having a great product.",
    solution: "Full technical SEO overhaul + B2B content strategy targeting mid-funnel decision-maker keywords.",
    results: [
      { metric: "250%", label: "Traffic Growth" },
      { metric: "£180K", label: "New Revenue" },
      { metric: "6mo", label: "Time to Result" },
    ],
  },
  {
    tag: "B2B SaaS · London",
    challenge: "High traffic but low qualified leads. Wrong audience landing on the site.",
    solution: "Keyword intent restructure + local London SEO targeting + conversion-optimised landing pages.",
    results: [
      { metric: "45", label: "Leads/Month" },
      { metric: "£75K", label: "New Contracts" },
      { metric: "3mo", label: "Time to Result" },
    ],
  },
];

export default function CaseStudies() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-white"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? 0 : "20px"})`,
        transition: "all 0.6s ease-out",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-[#2C727B] uppercase tracking-widest">
            London Client Results
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#1A394E]">
            Real Growth. Real London Businesses.
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            We don&apos;t promise rankings we deliver revenue. Here&apos;s
            what that looks like in practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? 0 : "16px"})`,
                transition: `all 0.5s ease-out ${i * 0.15}s`,
              }}
            >
              {/* Card header */}
              <div className="bg-[#1A394E] px-6 py-4">
                <span className="text-xs font-semibold text-[#2C727B] uppercase tracking-wider">
                  {c.tag}
                </span>
              </div>

              <div className="p-6 bg-gradient-to-br from-[#EFF6FF]/40 to-white">
                <div className="mb-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Challenge
                  </p>
                  <p className="text-sm text-gray-700">{c.challenge}</p>
                </div>
                <div className="mb-6">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Solution
                  </p>
                  <p className="text-sm text-gray-700">{c.solution}</p>
                </div>

                {/* Results row */}
                <div className="flex gap-4 border-t border-gray-100 pt-5">
                  {c.results.map((r, j) => (
                    <div key={j} className="flex-1 text-center">
                      <div className="text-xl font-extrabold text-[#2C727B]">
                        {r.metric}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}