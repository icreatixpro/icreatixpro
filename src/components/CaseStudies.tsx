"use client"

import { ArrowRight, TrendingUp, Users, DollarSign, Clock, Sparkles, Zap, BarChart3, Target } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const caseStudies = [
  {
    id: 1,
    title: "E-Commerce SEO Success",
    client: "Fashion Retailer",
    industry: "E-Commerce",
    results: {
      traffic: "+320%",
      revenue: "+215%",
      keywords: "150+",
      time: "6 months"
    },
    description: "Implemented AI-powered SEO strategy that transformed organic visibility and sales.",
    tags: ["SEO", "E-Commerce", "Content Strategy"],
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: 2,
    title: "Local SEO Domination",
    client: "Medical Clinic Chain",
    industry: "Healthcare",
    results: {
      traffic: "+180%",
      revenue: "+95%",
      keywords: "75+",
      time: "4 months"
    },
    description: "Ranked #1 for 50+ local keywords, driving significant patient acquisition.",
    tags: ["Local SEO", "Google Maps", "AEO"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "Google Ads ROI Breakthrough",
    client: "SaaS Platform",
    industry: "Technology",
    results: {
      traffic: "+450%",
      revenue: "+380%",
      keywords: "200+",
      time: "3 months"
    },
    description: "Optimized ad campaigns reduced CPA by 65% while scaling qualified leads.",
    tags: ["Google Ads", "PPC", "Conversion"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    title: "Meta Ads Success Story",
    client: "Beauty Brand",
    industry: "E-Commerce",
    results: {
      traffic: "+280%",
      revenue: "+175%",
      keywords: "50+",
      time: "5 months"
    },
    description: "Facebook & Instagram ads generated 500% ROAS with targeted audience strategy.",
    tags: ["Meta Ads", "Social Media", "ROI"],
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "International SEO Expansion",
    client: "Software Company",
    industry: "SaaS",
    results: {
      traffic: "+400%",
      revenue: "+300%",
      keywords: "500+",
      time: "8 months"
    },
    description: "Expanded into 5 new countries with multilingual SEO strategy.",
    tags: ["International SEO", "Global", "Scale"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    title: "Content Marketing Transformation",
    client: "Publishing House",
    industry: "Media",
    results: {
      traffic: "+250%",
      revenue: "+120%",
      keywords: "300+",
      time: "6 months"
    },
    description: "AI-powered content strategy increased organic reach by 250%.",
    tags: ["Content Marketing", "AI", "Growth"],
    color: "from-rose-500 to-orange-500"
  }
]

export default function CaseStudies() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Glass Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#2C727B]/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1A394E]/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C727B]/10 backdrop-blur-sm border border-[#2C727B]/20 shadow-sm mb-4">
            <Sparkles className="w-4 h-4 text-[#2C727B]" />
            <span className="text-sm uppercase tracking-wider text-[#2C727B] font-semibold">
              Success Stories
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A394E] mt-4">
            Real{" "}
            <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
              Results
            </span>{" "}
            for Real Businesses
          </h2>
          
          <p className="mt-4 text-gray-600 text-lg">
            See how our data-driven strategies helped businesses achieve remarkable growth
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group relative transition-all duration-500"
              onMouseEnter={() => setHoveredId(study.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Glass Card */}
              <div className={`relative rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-500 ${
                hoveredId === study.id
                  ? "shadow-2xl -translate-y-2"
                  : "hover:shadow-xl hover:-translate-y-1"
              }`}>
                
                {/* Gradient Top Bar */}
                <div className={`h-2 rounded-t-2xl bg-gradient-to-r ${study.color}`} />
                
                <div className="p-6">
                  {/* Industry Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2C727B]/10 text-[#2C727B] text-xs font-semibold mb-3">
                    <Zap className="w-3 h-3" />
                    {study.industry}
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#1A394E] mb-1">
                    {study.title}
                  </h3>
                  
                  <p className="text-sm text-[#2C727B] font-medium mb-3">
                    {study.client}
                  </p>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {study.description}
                  </p>
                  
                  {/* Results Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-gray-50 rounded-xl">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-[#2C727B] mb-1">
                        <TrendingUp className="w-3 h-3" />
                        <span className="text-xs font-medium">Traffic</span>
                      </div>
                      <div className="text-lg font-bold text-[#1A394E]">{study.results.traffic}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-[#2C727B] mb-1">
                        <DollarSign className="w-3 h-3" />
                        <span className="text-xs font-medium">Revenue</span>
                      </div>
                      <div className="text-lg font-bold text-[#1A394E]">{study.results.revenue}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-[#2C727B] mb-1">
                        <Target className="w-3 h-3" />
                        <span className="text-xs font-medium">Keywords</span>
                      </div>
                      <div className="text-lg font-bold text-[#1A394E]">{study.results.keywords}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-[#2C727B] mb-1">
                        <Clock className="w-3 h-3" />
                        <span className="text-xs font-medium">Timeline</span>
                      </div>
                      <div className="text-lg font-bold text-[#1A394E]">{study.results.time}</div>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* CTA Button - FIXED: No more 404 links */}
                  <Link href="/contact">
                    <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                      Get Similar Results
                      <ArrowRight className="inline ml-2 w-3 h-3" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA - FIXED: Directs to contact page instead of non-existent case-studies page */}
        <div className="text-center mt-12">
          <Link href="/contact">
            <button className="group px-8 py-3 rounded-xl bg-white border-2 border-[#2C727B]/30 text-[#1A394E] font-semibold hover:bg-[#2C727B] hover:text-white hover:border-transparent transition-all duration-300">
              <BarChart3 className="inline w-4 h-4 mr-2" />
              Start Your Success Story
              <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* Trust Indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-[#2C727B]/5 border border-[#2C727B]/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1A394E]">Trusted by 500+</p>
                <p className="text-xs text-gray-500">businesses worldwide</p>
              </div>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1A394E]">10M+ Traffic</p>
                <p className="text-xs text-gray-500">generated for clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}