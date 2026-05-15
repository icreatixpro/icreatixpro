"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    q: "How long does SEO take to show results in London?",
    a: "Most of our London clients see measurable improvements within 3–4 months, with significant growth by month 6. Technical fixes can show impact within weeks, while content and link building compounds over time.",
  },
  {
    q: "What makes a good SEO agency for London B2B companies?",
    a: "B2B SEO differs from B2C — it requires targeting longer buying cycles, decision-maker keywords, and industry-specific content. We specialise in understanding your buyer, not just ranking for traffic.",
  },
  {
    q: "Do you work with London tech startups?",
    a: "Absolutely. Tech startups are our sweet spot. We understand product-led growth, SaaS metrics, and how to build SEO strategies that scale alongside your funding stage.",
  },
  {
    q: "What does an SEO audit include?",
    a: "Our free London SEO audit covers technical health, site speed, Core Web Vitals, keyword opportunities, competitor benchmarking, backlink profile analysis, and a prioritised action plan delivered within 5 business days.",
  },
  {
    q: "How much do your London SEO services cost?",
    a: "Engagements typically start at £2,500/month depending on scope, competition, and goals. We offer flexible monthly contracts with no long-term lock-ins. Book a strategy call for a bespoke quote.",
  },
  {
    q: "Do you provide local SEO for London businesses?",
    a: "Yes. We optimise your Google Business Profile, build local citations, manage reviews, and target London-specific search terms to help you dominate local pack results.",
  },
];

export default function FAQSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
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
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-[#2C727B] uppercase tracking-widest">
            FAQ
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#1A394E]">
            London SEO Questions, Answered
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-[#2C727B]/40 transition-colors"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: `opacity 0.4s ease-out ${i * 0.07}s`,
              }}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-[#EFF6FF]/50 transition-colors"
              >
                <span className="font-semibold text-[#1A394E] text-sm md:text-base pr-4">
                  {faq.q}
                </span>

                <span
                  className="text-[#2C727B] text-xl font-bold flex-shrink-0 transition-transform duration-300"
                  style={{
                    transform:
                      openIndex === i
                        ? "rotate(45deg)"
                        : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-5 bg-[#EFF6FF]/20">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}