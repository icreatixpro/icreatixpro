"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function FinalCTA() {
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
      className="relative py-24 px-6 bg-[#1A394E] overflow-hidden text-center"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#2C727B] rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400 rounded-full blur-3xl opacity-10 pointer-events-none" />

      <div
        className="relative z-10 max-w-3xl mx-auto"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: `translateY(${isVisible ? 0 : "24px"})`,
          transition: "all 0.7s ease-out",
        }}
      >
        <span className="text-sm font-semibold text-[#2C727B] uppercase tracking-widest">
          Ready to Grow?
        </span>

        <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white leading-tight">
          Grow Your London Business with SEO That Actually Works
        </h2>

        <p className="mt-5 text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Join 50+ London companies that trust iCreatixPRO to drive qualified
          organic traffic and real revenue. Start with a completely free SEO
          audit — no commitment, no hard sell.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="https://icreatixpro.com/contact"
            className="px-8 py-4 bg-[#2C727B] text-white font-semibold rounded-lg shadow-lg hover:bg-teal-500 hover:shadow-xl transition-all duration-300 text-lg"
          >
            🚀 Book Free Strategy Call
          </Link>

          <Link
            href="https://icreatixpro.com/contact"
            className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 text-lg"
          >
            📋 Get Free SEO Audit
          </Link>
        </div>

        {/* 🔥 NEW TRUST / INTERNAL LINKS */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
          <Link
            href="https://icreatixpro.com/services"
            className="text-gray-300 hover:text-white underline underline-offset-4 transition"
          >
            View All Services
          </Link>

          <Link
            href="https://icreatixpro.com/about"
            className="text-gray-300 hover:text-white underline underline-offset-4 transition"
          >
            About Our Agency
          </Link>
        </div>

        <p className="mt-6 text-gray-500 text-sm">
          Typical response within 24 hours · No contracts required · London-based team
        </p>
      </div>
    </section>
  );
}