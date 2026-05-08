// app/services/geo-optimization-services/HeroSection.tsx
"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Google AI Overview", "Gemini", "Claude ai", "Chatgpt"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setWordIndex((i) => (i + 1) % words.length), 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      // minimal top padding, badges moved near top
      className="relative bg-gradient-to-br from-[#EFF6FF] via-white to-[#F0FDF4] pt-12 pb-20 md:pt-16 md:pb-28 px-4 sm:px-6 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

      <div
        className="relative z-10 max-w-5xl mx-auto text-center"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: `translateY(${isVisible ? 0 : "20px"})`,
          transition: "all 0.6s ease-out",
        }}
      >
        {/* Trust badges now at the very top (above H1) */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-6">
          <span className="inline-flex items-center gap-1">⭐ 4.9/5 (200+ reviews)</span>
          <span className="inline-flex items-center gap-1">🌍 15+ countries</span>
          <span className="inline-flex items-center gap-1">🏆 97% retention</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A394E] leading-tight">
          Generative Engine Optimization (GEO) That Gets Your Brand Featured in{" "}
          <span className="text-[#2C727B] whitespace-nowrap">AI Answers</span>
        </h1>

        <div className="mt-4 text-base sm:text-lg md:text-xl text-gray-700">
          Optimize for{" "}
          <span className="font-semibold text-[#2C727B] transition-all duration-300">
            {words[wordIndex]}
          </span>
        </div>

        <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
          We optimize your brand for AI search engines so you don’t just rank — you get{" "}
          <strong>cited as a source</strong> in generative AI responses across <strong>USA, UK, UAE, Europe & Australia</strong>.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="https://icreatixpro.com/contact"
            className="px-5 py-2.5 sm:px-6 sm:py-3 bg-[#2C727B] text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-[#1A394E] transition-all text-sm sm:text-base"
          >
            🚀 Free GEO Audit
          </Link>
          <Link
            href="https://icreatixpro.com/contact"
            className="px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-[#2C727B] text-[#2C727B] font-semibold rounded-lg hover:bg-[#2C727B] hover:text-white transition-all text-sm sm:text-base"
          >
            📅 Strategy Call
          </Link>
        </div>
      </div>
    </section>
  );
}