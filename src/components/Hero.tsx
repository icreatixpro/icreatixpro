// src/components/Hero.tsx
import Link from "next/link";
import { ArrowRight, Sparkles, Award, CheckCircle } from "lucide-react";
import FeatureCards from "./FeatureCards";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* Background (light + premium, no heavy GPU cost) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-140px] left-[10%] w-[520px] h-[520px] bg-[#2C727B]/20 rounded-full blur-3xl md:blur-[120px]" />
        <div className="absolute bottom-[-140px] right-[10%] w-[520px] h-[520px] bg-[#1A394E]/20 rounded-full blur-3xl md:blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.4] bg-[linear-gradient(to_right,rgba(44,114,123,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(44,114,123,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">

        {/* Premium badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/30 border border-white/30 backdrop-blur-md shadow-sm mb-6">
          <Sparkles className="w-4 h-4 text-[#2C727B]" />
          <span className="text-sm text-[#1A394E] font-medium">
            AI-First SEO Growth Agency
          </span>
          <Award className="w-4 h-4 text-yellow-500" />
        </div>

        {/* H1 (Primary message) */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#1A394E] leading-tight">
          AI SEO Agency for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2C727B] via-[#1A394E] to-[#2C727B]">
            Google AI & Generative Search
          </span>
        </h1>

        {/* H2 (supporting positioning) */}
        <h2 className="text-xl md:text-2xl font-medium mt-5 text-[#1A394E]/80">
          AI-Powered SEO, AEO & GEO for next-generation search visibility
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We help brands rank across Google, AI Overviews, ChatGPT, Perplexity,
          and generative search engines using advanced AI SEO systems that drive
          traffic, leads, and revenue.
        </p>

        {/* Trust row (SaaS style credibility) */}
        <div className="mt-5 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-green-500" /> Google SEO
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-green-500" /> AI Overviews
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-green-500" /> ChatGPT Visibility
          </span>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link href="/contact">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition">
              Get Free Audit <ArrowRight className="inline w-4 h-4 ml-2" />
            </button>
          </Link>

          <Link href="/services">
            <button className="px-8 py-3 rounded-xl border border-[#2C727B]/30 bg-white/40 backdrop-blur-sm hover:bg-white/60 transition">
              Explore Services
            </button>
          </Link>
        </div>

        {/* Feature cards (kept below fold impact) */}
        <div className="mt-16">
          <FeatureCards />
        </div>

      </div>
    </section>
  );
}