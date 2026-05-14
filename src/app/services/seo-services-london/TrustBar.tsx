"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "320%", label: "Avg Organic Growth" },
  { value: "50+", label: "London Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "97%", label: "Client Retention" },
  { value: "£2M+", label: "Revenue Generated" },
];

export default function TrustBar() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
    <div
      ref={ref}
      className="bg-[#1A394E] py-8 px-6"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.6s ease-out",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 md:gap-12">

        {stats.map((stat, i) => (
          <div
            key={i}
            className="text-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: `translateY(${isVisible ? 0 : "12px"})`,
              transition: `all 0.5s ease-out ${i * 0.1}s`,
            }}
          >
            <div className="text-2xl md:text-3xl font-extrabold text-[#2C727B]">
              {stat.value}
            </div>

            <div className="text-xs md:text-sm text-gray-300 mt-1 font-medium">
              {stat.label}
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}