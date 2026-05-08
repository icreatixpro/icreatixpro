// app/services/saas-technical-seo/FAQSection.tsx
"use client";
import { useState } from "react";

const faqs = [
  { q: "What is SaaS technical SEO?", a: "It focuses on product-led architectures, JavaScript frameworks, scaling issues, and conversion optimization for B2B platforms." },
  { q: "How is it different from general technical SEO?", a: "General SEO covers basics; SaaS SEO handles dynamic product pages, faceted navigation, international setups, and API-driven content." },
  { q: "How quickly can we see results?", a: "Crawl/indexation improvements within 4 weeks, Core Web Vitals within 2-3 months, traffic growth from 3-6 months." },
  { q: "Do you work with early-stage startups?", a: "Yes – we scale with you. Minimum engagement for funded startups or established B2B companies." },
  { q: "What's your monthly retainer range?", a: "Custom based on site size and complexity. Contact for a free audit and proposal." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1A394E]">SaaS Technical SEO – FAQs</h2>
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