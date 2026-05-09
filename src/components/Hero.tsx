"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, TrendingUp, Mic, Globe, Award } from "lucide-react";

export default function Hero() {
  const [activeFeature, setActiveFeature] = useState(0);

  // lightweight rotation (INP safe)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((p) => (p + 1) % 3);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const rotatingTexts = [
    "AI-Powered SEO",
    "Answer Engine Optimization",
    "Generative Search Optimization",
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "AI SEO",
      desc: "Rank with predictive AI systems",
      stat: "+320% Traffic",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Mic,
      title: "AEO",
      desc: "Optimize for AI-generated answers",
      stat: "90% Snippets",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Globe,
      title: "GEO",
      desc: "Grow visibility across AI search engines",
      stat: "50K+ AI Search Impressions",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* BACKGROUND (PURE CSS ONLY → ZERO JS COST) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[10%] w-[500px] h-[500px] bg-[#2C727B]/20 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-120px] right-[10%] w-[500px] h-[500px] bg-[#1A394E]/20 blur-[140px] rounded-full animate-pulse" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(44,114,123,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(44,114,123,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* STATIC FLOATING DOTS (NO JS = BEST PERFORMANCE) */}
        <div className="absolute inset-0 pointer-events-none">
          <span className="absolute w-1 h-1 bg-[#2C727B]/30 rounded-full top-[20%] left-[10%] animate-float" />
          <span className="absolute w-1 h-1 bg-[#2C727B]/30 rounded-full top-[55%] left-[25%] animate-float-slow" />
          <span className="absolute w-1 h-1 bg-[#2C727B]/30 rounded-full top-[35%] left-[40%] animate-float" />
          <span className="absolute w-1 h-1 bg-[#2C727B]/30 rounded-full top-[70%] left-[60%] animate-float-slow" />
          <span className="absolute w-1 h-1 bg-[#2C727B]/30 rounded-full top-[45%] left-[75%] animate-float" />
          <span className="absolute w-1 h-1 bg-[#2C727B]/30 rounded-full top-[60%] left-[85%] animate-float-slow" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">

        {/* badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/40 mb-6">
          <Sparkles className="w-4 h-4 text-[#2C727B]" />
          <span className="text-sm text-[#1A394E] font-medium">
            Built for Google & AI Search
          </span>
          <Award className="w-4 h-4 text-yellow-500" />
        </div>

        {/* rotating text (NO framer-motion = faster INP) */}
        <div className="h-24 relative">
          {rotatingTexts.map((text, i) => (
            <div
              key={i}
              className={`absolute inset-x-0 transition-all duration-700 ${
                i === activeFeature
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
            >
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#2C727B] via-[#1A394E] to-[#2C727B] bg-clip-text text-transparent">
                {text}
              </h2>
            </div>
          ))}
        </div>

        {/* main title */}
        <h1 className="text-4xl md:text-6xl font-bold mt-6 text-[#1A394E]">
          AI SEO Agency for Google{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2C727B] to-[#1A394E]">
            AI & Generative Search
          </span>
        </h1>

        {/* description */}
        <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
         We build AI-powered SEO systems that increase visibility,
          traffic, and revenue across Google and AI search engines.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link href="/contact">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white font-semibold hover:-translate-y-0.5 transition">
              Get Free Audit <ArrowRight className="inline w-4 h-4 ml-2" />
            </button>
          </Link>

          <Link href="/services">
            <button className="px-8 py-3 rounded-xl border border-[#2C727B]/30 bg-white/40 backdrop-blur-sm">
              Explore Services
            </button>
          </Link>
        </div>

        {/* feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-white/40 hover:-translate-y-2 transition will-change-transform"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4`}>
                  <Icon className="text-white w-6 h-6" />
                </div>
                <h3 className="font-semibold text-[#1A394E] text-lg">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
                <span className="text-xs text-[#2C727B] mt-2 block">
                  {f.stat}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}