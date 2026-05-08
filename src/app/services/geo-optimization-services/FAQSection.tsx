// app/services/geo-optimization-services/FAQSection.tsx
"use client";
import { useState } from "react";

const faqs = [
  { q: "What is Generative Engine Optimization (GEO)?", a: "GEO optimizes your content to be cited as a source by AI answer engines like ChatGPT, Perplexity, and Gemini." },
  { q: "How does GEO improve AI visibility?", a: "It increases entity relevance, semantic depth, and structured data, making your brand more likely to appear inside AI-generated answers." },
  { q: "Can GEO replace traditional SEO?", a: "No – GEO complements SEO. Traditional SEO still matters for Google rankings, but GEO adds AI citation strategy." },
  { q: "How long does GEO take?", a: "Typically 2-4 months to see initial AI citations, depending on domain authority and competition." },
  { q: "Which AI platforms does GEO work for?", a: "ChatGPT, Perplexity, Gemini (Google), Bing AI, and Google SGE." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1A394E]">GEO & AI Search – FAQs</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#F9FAFB] rounded-lg">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full text-left p-4 font-semibold flex justify-between items-center"
              >
                {faq.q}
                <span className="text-[#2C727B]">{open === idx ? "−" : "+"}</span>
              </button>
              {open === idx && <div className="p-4 pt-0 text-gray-600">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(f => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
}