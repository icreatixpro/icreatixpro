"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: "🔧",
    title: "Technical SEO",
    desc: "Site audits, Core Web Vitals, schema markup, and crawlability fixes. We build the technical foundation Google rewards.",
    link: "/services/saas-technical-seo",
  },
  {
    icon: "📍",
    title: "London Local SEO",
    desc: "Dominate Google Maps and local pack results. We optimise your Google Business Profile for London-specific searches.",
    link: "/services",
  },
  {
    icon: "🎯",
    title: "B2B Keyword Research",
    desc: "We identify high-intent keywords your decision-makers actually search, not just high-volume vanity terms.",
    link: "/services/ai-seo-services",
  },
  {
    icon: "🔗",
    title: "UK-Focused Link Building",
    desc: "Earn authoritative backlinks from trusted UK publications, industry blogs, and niche directories.",
    link: "/services",
  },
  {
    icon: "🕵️",
    title: "Competitor Analysis",
    desc: "We analyse your London competitors and build a strategy to systematically outrank them.",
    link: "/services/geo-optimization-services",
  },
  {
    icon: "📝",
    title: "SEO Content Strategy",
    desc: "Topic clusters, pillar pages, and conversion-focused content written for B2B growth — not generic blogs.",
    link: "/about",
  },
];

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
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
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-[#2C727B] uppercase tracking-widest">
            Our London SEO Services
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#1A394E]">
            Everything You Need to Rank & Convert
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            We don’t sell packages — we build bespoke SEO strategies for London’s most ambitious B2B and technology businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link
              key={i}
              href={s.link}
              className="p-6 rounded-xl border border-gray-100 bg-gradient-to-br from-[#EFF6FF]/60 to-white hover:shadow-lg hover:border-[#2C727B]/30 transition-all duration-300 group block"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? 0 : "16px"})`,
                transition: `all 0.5s ease-out ${i * 0.08}s`,
              }}
            >
              <div className="text-3xl mb-4">{s.icon}</div>

              <h3 className="text-lg font-bold text-[#1A394E] group-hover:text-[#2C727B] transition-colors">
                {s.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {s.desc}
              </p>

              <span className="text-xs text-[#2C727B] mt-3 inline-block font-semibold">
                Learn more →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}