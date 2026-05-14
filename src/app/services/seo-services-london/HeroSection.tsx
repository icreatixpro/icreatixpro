// app/services/seo-services-london/HeroSection.tsx
"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const rotatingWords = [
    "B2B Tech Companies",
    "SaaS Startups",
    "London Enterprises",
    "Scale-ups",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => setWordIndex((i) => (i + 1) % rotatingWords.length),
      2500
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-[#EFF6FF] via-white to-[#F0FDF4] pt-12 md:pt-16 pb-20 px-6 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div
        className="relative z-10 max-w-5xl mx-auto text-center"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: `translateY(${isVisible ? 0 : "24px"})`,
          transition: "all 0.7s ease-out",
        }}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-[#2C727B]/20 text-[#2C727B] text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-[#2C727B] animate-pulse" />
          #1 Rated SEO Agency in London
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-[#1A394E] leading-tight tracking-tight">
          SEO Agency in London {" "}
          <span className="text-[#2C727B]">Expert B2B Technology</span> SEO
          Services
        </h1>

        <div className="mt-4 text-lg md:text-xl text-gray-600">
          Trusted by{" "}
          <span
            className="font-semibold text-[#2C727B] transition-all duration-300"
            key={wordIndex}
          >
            {rotatingWords[wordIndex]}
          </span>{" "}
          across London & the UK
        </div>

        <p className="mt-6 text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Stop being invisible in search. iCreatixPRO is London&apos;s leading{" "}
          <strong className="text-[#1A394E]">B2B SEO agency</strong> we
          deliver measurable organic growth through technical SEO, content
          strategy, and local search domination.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="https://icreatixpro.com/contact"
            className="px-7 py-3.5 bg-[#2C727B] text-white font-semibold rounded-lg shadow-md hover:shadow-xl hover:bg-[#1A394E] transition-all duration-300"
          >
            🚀 Get Free London SEO Audit
          </Link>
          <Link
            href="https://icreatixpro.com/contact"
            className="px-7 py-3.5 border border-[#2C727B] text-[#2C727B] font-semibold rounded-lg hover:bg-[#2C727B] hover:text-white transition-all duration-300"
          >
            📅 Book Strategy Call
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <span>⭐ 4.9/5 (200+ reviews)</span>
          <span>🏙️ 50+ London clients</span>
          <span>📈 320% avg organic growth</span>
          <span>🏆 97% client retention</span>
        </div>
      </div>
    </section>
  );
}