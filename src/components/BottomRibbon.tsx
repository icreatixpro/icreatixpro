"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BottomRibbon() {
  return (
    <section className="py-16 bg-[#1A394E]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-4">
          <span className="text-white/80 text-xs">READY TO GROW?</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Start Your SEO Journey Today
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-6">
          Get a free consultation and custom SEO strategy for your business.
        </p>
        <Link href="/contact">
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#1A394E] font-semibold rounded-full hover:shadow-lg transition">
            Get Free Consultation
            <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </section>
  );
}
