"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ArrowRight, Sparkles, TrendingUp, Mic, Globe, Zap, Shield, Award } from "lucide-react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    
    // Rotate features
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3)
    }, 3000)
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
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
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-24 overflow-hidden">
      
      {/* Animated Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-[10%] w-96 h-96 bg-[#2C727B]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-[#1A394E]/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] animate-pulse delay-2000" />
        
        {/* Mouse-reactive glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(44,114,123,0.15), transparent 70%)`
          }}
        />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(44,114,123,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(44,114,123,0.05)_1px,transparent_1px)] bg-[size:50px_50px] animate-[gridMove_20s_linear_infinite]" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#2C727B]/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-sm border border-white/50 shadow-sm mb-6"
        >
          <Sparkles className="w-4 h-4 text-[#2C727B] animate-pulse" />
          <span className="text-sm font-medium text-[#1A394E]">#1 AI-Powered Digital Growth Agency</span>
          <Award className="w-4 h-4 text-yellow-500" />
        </motion.div>

        {/* Rotating Text Effect */}
        <div className="h-20 mb-4">
          <div className="relative">
            {rotatingTexts.map((text, idx) => (
              <div
                key={idx}
                className={`absolute inset-x-0 transition-all duration-500 ${
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

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mt-12">
          Strategies to Rank Your
          <br />
          Business in{" "}
          <span className="bg-gradient-to-r from-[#2C727B] via-[#1A394E] to-[#2C727B] bg-clip-text text-transparent relative">
            Google, AI & Generative Search
            <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 2 L200 2" stroke="url(#gradient)" strokeWidth="4" strokeDasharray="8 8" />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2C727B" />
                  <stop offset="50%" stopColor="#1A394E" />
                  <stop offset="100%" stopColor="#2C727B" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          We combine AI-powered SEO, high-converting websites, and data-driven ad campaigns 
          to generate real traffic, qualified leads, and sustainable sales growth.
        </p>

        {/* CTA Buttons with Hover Effects */}
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

        {/* Stats Banner */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-[#2C727B]">500+</div>
            <div className="text-xs text-gray-500">Projects Completed</div>
          </div>
          <div className="w-px h-8 bg-gray-300" />
          <div>
            <div className="text-2xl font-bold text-[#2C727B]">98%</div>
            <div className="text-xs text-gray-500">Client Retention</div>
          </div>
          <div className="w-px h-8 bg-gray-300" />
          <div>
            <div className="text-2xl font-bold text-[#2C727B]">10M+</div>
            <div className="text-xs text-gray-500">Traffic Generated</div>
          </div>
        </div>

        {/* Feature Cards with 3D Effect */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 text-left">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden"
            >
              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A394E] mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{feature.desc}</p>
              <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#2C727B] bg-[#2C727B]/10 px-2 py-1 rounded-full">
                <Zap className="w-3 h-3" />
                {feature.stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}