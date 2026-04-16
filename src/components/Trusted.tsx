"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const logos = [
  { name: "Google", src: "/google.svg" },
  { name: "Amazon", src: "/amazon.svg" },
  { name: "Meta", src: "/meta.svg" },
  { name: "Shopify", src: "/shopify.svg" },
  { name: "WordPress", src: "/wordpress.svg" },
  { name: "HubSpot", src: "/hubspot.svg" },
];

export default function Trusted() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <p className="text-sm uppercase tracking-wider text-[#2C727B] font-semibold">
          Trusted By Industry Leaders
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A394E] mt-2">
          Growing Businesses Worldwide
        </h2>
      </div>

      <div className="relative">
        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
        
        {/* Marquee Animation */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-8 py-4">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="inline-flex items-center justify-center min-w-[120px] px-6 py-3 bg-white/50 rounded-xl backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={100}
                  height={40}
                  className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                  priority={i < 6}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add this CSS for marquee animation if not already present */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
          width: fit-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}