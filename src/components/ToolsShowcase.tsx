"use client";

import { Zap, Award, Sparkles } from "lucide-react";

const tools = [
  { name: "Ahrefs", logo: "/ahrefs.svg", gradient: "from-red-500 to-orange-500" },
  { name: "Semrush", logo: "/semrush.svg", gradient: "from-blue-500 to-cyan-500" },
  { name: "Surfer SEO", logo: "/surfer.svg", gradient: "from-green-500 to-emerald-500" },
  { name: "Screaming Frog", logo: "/screamingfrog.svg", gradient: "from-purple-500 to-pink-500" },
  { name: "ChatGPT", logo: "/chatgpt.svg", gradient: "from-teal-500 to-green-500" },
  { name: "Claude AI", logo: "/claude.svg", gradient: "from-orange-500 to-red-500" },
];

export default function ToolsShowcase() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white -z-10" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1A394E]/10 to-[#2C727B]/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-[#2C727B]" />
            <span className="text-sm font-medium text-[#1A394E]">Enterprise Technology Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A394E] mb-4">
            Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A394E] to-[#2C727B]">World-Class Tools</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We combine 50+ premium SEO tools to deliver unmatched results for our clients
          </p>
        </div>

        <div className="relative">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {tools.slice(0, 3).map((tool, idx) => (
              <div key={idx} className="group relative w-40 h-40 flex flex-col items-center justify-center">
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto mb-3 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img src={tool.logo} alt={tool.name} className="w-12 h-12 object-contain" />
                  </div>
                  <h3 className="font-bold text-[#1A394E]">{tool.name}</h3>
                  <p className="text-xs text-gray-400 mt-1">Premium Tool</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {tools.slice(3, 6).map((tool, idx) => (
              <div key={idx} className="group relative w-40 h-40 flex flex-col items-center justify-center">
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto mb-3 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img src={tool.logo} alt={tool.name} className="w-12 h-12 object-contain" />
                  </div>
                  <h3 className="font-bold text-[#1A394E]">{tool.name}</h3>
                  <p className="text-xs text-gray-400 mt-1">Premium Tool</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white shadow-lg rounded-full px-6 py-3">
            <Zap className="w-5 h-5 text-yellow-500" />
            <span className="text-gray-700">+ 50+ other premium tools</span>
            <Award className="w-5 h-5 text-[#2C727B]" />
          </div>
        </div>
      </div>
    </section>
  );
}