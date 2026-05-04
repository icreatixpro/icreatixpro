"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowRight, Sparkles, TrendingUp, Mic, Globe, Zap, Award } from "lucide-react"

export default function Hero() {
  const [activeFeature, setActiveFeature] = useState(0)

  // Rotate features – keep simple, no heavy mouse tracking
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3)
    }, 4000) // slower interval reduces CPU usage
    
    return () => clearInterval(interval)
  }, [])

  const rotatingTexts = [
    "AI-Powered SEO",
    "Answer Engine Optimization",
    "Generative Experience Optimization"
  ]

  const features = [
    { 
      icon: TrendingUp, 
      title: "AI SEO", 
      desc: "Rank #1 with advanced AI algorithms",
      stat: "+320% Traffic",
      color: "from-emerald-500 to-teal-500"
    },
    { 
      icon: Mic, 
      title: "AEO", 
      desc: "Dominate voice & featured snippets",
      stat: "90% Snippet Share",
      color: "from-blue-500 to-indigo-500"
    },
    { 
      icon: Globe, 
      title: "GEO", 
      desc: "Lead in generative search results",
      stat: "50K+ Impressions",
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-8 md:pt-12 pb-24 overflow-hidden">
      
      {/* Simplified Background Effects – no mouse-reactive glow, fewer particles */}
      <div className="absolute inset-0 -z-10">
        {/* Only two gradient orbs (reduced from three) */}
        <div className="absolute top-20 left-[10%] w-96 h-96 bg-[#2C727B]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-[#1A394E]/20 rounded-full blur-[120px] animate-pulse" />
        
        {/* Static grid (no animation) – keeps visual depth without CPU cost */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(44,114,123,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(44,114,123,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Reduced floating particles – from 20 to 6 (enough for effect) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#2C727B]/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 5}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        
        {/* Badge – removed framer-motion, use CSS transition instead */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-sm border border-white/50 shadow-sm mb-6 animate-fadeIn">
          <Sparkles className="w-4 h-4 text-[#2C727B] animate-pulse" />
          <span className="text-sm font-medium text-[#1A394E]">#1 AI-Powered Digital Growth Agency</span>
          <Award className="w-4 h-4 text-yellow-500" />
        </div>

        {/* Rotating Text Effect – keep as is (minimal CPU) */}
        <div className="h-20 mb-4">
          <div className="relative">
            {rotatingTexts.map((text, idx) => (
              <div
                key={idx}
                className={`absolute inset-x-0 transition-all duration-700 ${
                  idx === activeFeature
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform -translate-y-8"
                }`}
              >
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#2C727B] via-[#1A394E] to-[#2C727B] bg-clip-text text-transparent">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Heading – already optimized */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mt-0">
          <span className="block text-[#1A394E]">
            iCreatixPRO – AI SEO Agency
          </span>
          <span className="block mt-4">
            Strategies to Rank Your Business in{" "}
            <span className="bg-gradient-to-r from-[#2C727B] via-[#1A394E] to-[#2C727B] bg-clip-text text-transparent relative">
              Google, AI & Generative Search
            </span>
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          We combine AI-powered SEO, high-converting websites, and data-driven ad campaigns 
          to generate real traffic, qualified leads, and sustainable sales growth.
        </p>

        {/* CTA Buttons – unchanged */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link href="/contact">
            <button className="group relative px-8 py-3 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Get Free SEO Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A394E] to-[#2C727B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </Link>
          <Link href="/services">
            <button className="px-8 py-3 rounded-xl bg-white/50 backdrop-blur-sm border-2 border-[#2C727B]/30 text-[#1A394E] font-semibold hover:bg-white/70 hover:border-[#2C727B]/50 transition-all duration-300 hover:-translate-y-0.5">
              Explore All Services
            </button>
          </Link>
        </div>

        {/* Stats Banner – contrast improved (text-gray-700 instead of 500) */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-[#2C727B]">500+</div>
            <div className="text-xs text-gray-600">Projects Completed</div>
          </div>
          <div className="w-px h-8 bg-gray-300" />
          <div>
            <div className="text-2xl font-bold text-[#2C727B]">98%</div>
            <div className="text-xs text-gray-600">Client Retention</div>
          </div>
          <div className="w-px h-8 bg-gray-300" />
          <div>
            <div className="text-2xl font-bold text-[#2C727B]">10M+</div>
            <div className="text-xs text-gray-600">Traffic Generated</div>
          </div>
        </div>

        {/* Feature Cards – unchanged */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 text-left">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1A394E] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{feature.desc}</p>
                <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#2C727B] bg-[#2C727B]/10 px-2 py-1 rounded-full">
                  <Zap className="w-3 h-3" />
                  {feature.stat}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-float {
          animation: float 5s infinite ease-in-out;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}