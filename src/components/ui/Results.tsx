"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";

export default function Results() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("results-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="results-section" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-2">
            Proven Results
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Numbers that speak for themselves
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-[#1A394E]">
              {isVisible && <CountUp end={120} duration={2} />}+
            </div>
            <p className="text-xs text-gray-500 mt-1">Projects</p>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-[#1A394E]">
              {isVisible && <CountUp end={90} duration={2} />}%
            </div>
            <p className="text-xs text-gray-500 mt-1">Retention</p>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-[#1A394E]">
              {isVisible && <CountUp end={10} duration={2} />}M+
            </div>
            <p className="text-xs text-gray-500 mt-1">Traffic</p>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-[#1A394E]">
              {isVisible && <CountUp end={250} duration={2} />}+
            </div>
            <p className="text-xs text-gray-500 mt-1">Campaigns</p>
          </div>
        </div>
      </div>
    </section>
  );
}