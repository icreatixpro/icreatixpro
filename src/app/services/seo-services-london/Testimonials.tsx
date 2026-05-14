"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "iCreatixPRO completely transformed our organic growth strategy. Within 6 months, our qualified inbound leads increased by 280%, and we now dominate highly competitive AI SEO keywords across multiple markets.",
    name: "Daniel Carter",
    title: "Founder & CEO, SaaS Growth Platform",
    stars: 5,
  },
  {
    quote:
      "What impressed us most was their ability to combine technical SEO, AI-driven content, and conversion optimization into one unified strategy. The traffic growth translated directly into revenue.",
    name: "Olivia Bennett",
    title: "Marketing Director, Enterprise Software Company",
    stars: 5,
  },
  {
    quote:
      "We've worked with several agencies before, but none delivered the level of transparency, reporting, and measurable ROI that iCreatixPRO provides. Our search visibility and demo requests both skyrocketed.",
    name: "Michael Reynolds",
    title: "Head of Growth, B2B Technology Brand",
    stars: 5,
  },
];

export default function Testimonials() {
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
      className="py-20 px-6 bg-gradient-to-br from-[#EFF6FF] via-white to-[#F0FDF4]"
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
            What London Clients Say
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#1A394E]">
            Trusted by London’s Best Tech Businesses
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? 0 : "16px"})`,
                transition: `all 0.5s ease-out ${i * 0.12}s`,
              }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4 text-yellow-400 text-sm">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <span key={s}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-700 leading-relaxed flex-1 italic">
                “{t.quote}”
              </p>

              {/* Author */}
              <div className="mt-5 pt-4 border-t border-gray-100">
                <p className="font-bold text-[#1A394E] text-sm">
                  {t.name}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {t.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}