// app/services/ai-seo-services/HeroSection.tsx
"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Google AI Overview", "ChatGPT", "Perplexity", "Gemini"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setWordIndex((i) => (i+1)%words.length), 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-[#EFF6FF] via-white to-[#F0FDF4] py-20 md:py-28 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center" style={{ opacity: isVisible ? 1 : 0, transform: `translateY(${isVisible ? 0 : '20px'})`, transition: 'all 0.6s ease-out' }}>
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#1A394E] leading-tight">
          AI SEO Services That Dominate <span className="text-[#2C727B]">Google & AI Search</span>
        </h1>
        <div className="mt-4 text-lg md:text-xl text-gray-700">
          Rank on <span className="font-semibold text-[#2C727B] transition-all duration-300">{words[wordIndex]}</span>
        </div>
        <p className="mt-6 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Trusted <strong className="text-[#1A394E]">AI SEO agency</strong> for brands in <strong>USA, UK, UAE, Canada, Australia & Europe</strong>. Get GEO optimization, ChatGPT SEO, and technical AI ranking.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link href="https://icreatixpro.com/contact" className="px-6 py-3 bg-[#2C727B] text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-[#1A394E] transition-all">🚀 Free AI SEO Audit</Link>
          <Link href="https://icreatixpro.com/contact" className="px-6 py-3 border border-[#2C727B] text-[#2C727B] font-semibold rounded-lg hover:bg-[#2C727B] hover:text-white transition-all">📅 Strategy Call</Link>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <span>⭐ 4.9/5 (200+ reviews)</span>
          <span>🌍 15+ countries</span>
          <span>🏆 97% retention</span>
        </div>
      </div>
    </section>
  );
}