// app/services/ai-seo-services/FAQSection.tsx
"use client";
import { useState } from "react";

const faqs = [
  { q: "Can AI SEO replace traditional SEO?",
    a: "No AI SEO complements traditional SEO. You need both: technical SEO remains crucial, but GEO adds AI citation optimization." },
  { q: "How does ChatGPT decide which sources to cite?",
    a: "ChatGPT prioritizes authoritative, well-structured, entity-rich content with clear schema and trusted domains." },
  { q: "What makes content rank in Perplexity?",
    a: "Perplexity favors concise, fact-based answers with high topical depth and external citations." },
  { q: "What is the AI search ranking factor model?",
    a: "AI ranking considers entity salience, contextual relevance, structured data, and domain authority in LLM training data." },
  { q: "How long before I see AI citations?",
    a: "Typically 2-4 months with proper GEO implementation. Some clients see results in 6 weeks." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 px-6 bg-[#F9FAFB]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1A394E]">
          Advanced AI SEO & GEO FAQs
        </h2>
        <div className="mt-8 space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm">
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
      {/* FAQ Schema */}
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