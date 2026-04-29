"use client"

import Image from "next/image"

const tools = [
  { name: "Ahrefs", src: "/ahrefs.svg" },
  { name: "Semrush", src: "/semrush.svg" },
  { name: "Surfer SEO", src: "/surfer.svg" },
  { name: "Screaming Frog", src: "/screamingfrog.svg" },
  { name: "ChatGPT", src: "/chatgpt.svg" },
  { name: "Claude AI", src: "/claude.svg" },
  { name: "Google Analytics", src: "/google-analytics.svg" },
  { name: "Search Console", src: "/search-console.svg" }
]

export default function ToolsRibbon() {
  return (
    <section className="py-14 bg-gradient-to-r from-[#1A394E]/5 via-[#2C727B]/5 to-[#1A394E]/5">
      <div className="max-w-7xl mx-auto overflow-hidden relative">

        {/* ✅ Theme-based Gradient Heading */}
        <p className="text-center text-sm uppercase tracking-[0.3em] mb-10 font-semibold
          bg-gradient-to-r from-[oklch(0.145_0_0)] via-[oklch(0.556_0_0)] to-[oklch(0.205_0_0)]
          bg-clip-text text-transparent animate-gradient">
          Powered By Industry-Leading Tools
        </p>

        {/* 🎯 Marquee */}
        <div className="flex animate-scroll gap-6 w-max">
          {[...tools, ...tools].map((tool, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[140px] h-[80px] bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl shadow-sm flex items-center justify-center hover:shadow-md transition"
            >
              <Image
                src={tool.src}
                alt={tool.name}
                width={80}
                height={40}
                className="object-contain w-full h-full p-3 opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>

        {/* Gradient fade edges */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent" />

      </div>
    </section>
  )
}