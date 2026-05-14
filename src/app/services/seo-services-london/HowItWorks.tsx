// app/seo-services-london/HowItWorks.tsx
"use client";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "Free SEO Audit",
    timeframe: "Week 1",
    desc: "We analyse your site's current performance, identify critical issues, and benchmark you against your top London competitors.",
  },
  {
    num: "02",
    title: "Strategy & Roadmap",
    timeframe: "Weeks 1–2",
    desc: "You receive a prioritised 90-day SEO plan with clear targets, keyword opportunities, and expected traffic projections.",
  },
  {
    num: "03",
    title: "Implementation",
    timeframe: "Ongoing",
    desc: "Our team executes on technical fixes, content production, and link acquisition hands-free for your team.",
  },
  {
    num: "04",
    title: "Results & Growth",
    timeframe: "Month 3–6",
    desc: "Monthly reporting with plain-English insights. You'll see organic traffic, keyword rankings, and lead conversions climb.",
  },
];

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-gradient-to-br from-[#EFF6FF] via-white to-[#F0FDF4] overflow-hidden"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? 0 : "20px"})`,
        transition: "all 0.6s ease-out",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-[#2C727B] uppercase tracking-widest">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#1A394E]">
            Your Path to Page 1 in London
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            A proven 4-step process that has helped 50+ London businesses
            achieve consistent organic growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? 0 : "16px"})`,
                transition: `all 0.5s ease-out ${i * 0.1}s`,
              }}
            >
              <div className="text-4xl font-extrabold text-[#2C727B]/20 mb-3 leading-none">
                {step.num}
              </div>
              <div className="text-xs font-semibold text-[#2C727B] uppercase tracking-wider mb-2">
                {step.timeframe}
              </div>
              <h3 className="text-lg font-bold text-[#1A394E] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>

              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#2C727B]/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}