"use client";

import Link from "next/link"
import { 
  Search, Settings, DollarSign, Sparkles, Zap, MapPin, Wrench, ArrowRight, 
  Brain, TrendingUp, Shield, Star, Users, Clock, CheckCircle, Award,
  Rocket, Flame, Crown, Diamond, Target, BarChart3, Eye, ThumbsUp,
  ChevronRight, Play, Code, FileText, Globe, Lock, Gift, Heart
} from "lucide-react"
import { useState, useEffect } from "react"

const tools = [
  {
    title: "LLM.txt Generator",
    description: "Generate AI-optimized text files for Large Language Models to understand your content better.",
    icon: Brain,
    href: "/tools/llm-generator",
    color: "from-purple-600 to-pink-500",
    gradient: "purple-pink",
    popularity: 98,
    users: "2.5k+",
    isNew: true,
    isPro: false,
    category: "AI Tools"
  },
  {
    title: "Keyword Density Checker",
    description: "Analyze keyword frequency and density in your content for better SEO optimization.",
    icon: Search,
    href: "/tools/keyword-density-checker",
    color: "from-blue-500 to-cyan-500",
    gradient: "blue-cyan",
    popularity: 95,
    users: "5k+",
    isNew: false,
    isPro: false,
    category: "SEO Tools"
  },
  {
    title: "Meta Tag Generator",
    description: "Generate optimized meta titles and descriptions for better click-through rates.",
    icon: Settings,
    href: "/tools/meta-tag-generator",
    color: "from-indigo-500 to-purple-500",
    gradient: "indigo-purple",
    popularity: 92,
    users: "4.2k+",
    isNew: false,
    isPro: false,
    category: "SEO Tools"
  },
  {
    title: "ROI Calculator",
    description: "Calculate your marketing ROI and campaign performance metrics instantly.",
    icon: DollarSign,
    href: "/tools/roi-calculator",
    color: "from-emerald-500 to-teal-500",
    gradient: "emerald-teal",
    popularity: 88,
    users: "3.1k+",
    isNew: false,
    isPro: true,
    category: "Analytics"
  },
  {
    title: "AI Blog Title Generator",
    description: "Generate engaging blog titles using AI-powered suggestions and trends.",
    icon: Sparkles,
    href: "/tools/ai-title-generator",
    color: "from-orange-500 to-red-500",
    gradient: "orange-red",
    popularity: 96,
    users: "6.8k+",
    isNew: false,
    isPro: false,
    category: "AI Tools"
  },
  {
    title: "Image Compressor",
    description: "Compress images without losing quality for faster loading times.",
    icon: Zap,
    href: "/tools/image-compressor",
    color: "from-yellow-500 to-orange-500",
    gradient: "yellow-orange",
    popularity: 94,
    users: "7.2k+",
    isNew: false,
    isPro: false,
    category: "Performance"
  },
  {
    title: "Local SEO Audit Tool",
    description: "Audit your local SEO performance and Google Maps presence.",
    icon: MapPin,
    href: "/tools/local-seo-audit",
    color: "from-teal-500 to-green-500",
    gradient: "teal-green",
    popularity: 89,
    users: "2.8k+",
    isNew: false,
    isPro: false,
    category: "SEO Tools"
  },
]

const categories = ["All", "AI Tools", "SEO Tools", "Analytics", "Performance"]

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredTool, setHoveredTool] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const filteredTools = tools.filter(tool => {
    const matchesCategory = activeCategory === "All" || tool.category === activeCategory
    const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const stats = [
    { label: "Total Tools", value: "7+", icon: Wrench, color: "text-[#2C727B]" },
    { label: "Monthly Users", value: "25k+", icon: Users, color: "text-[#1A394E]" },
    { label: "Free Tools", value: "100%", icon: Gift, color: "text-[#2C727B]" },
    { label: "Satisfaction", value: "98%", icon: ThumbsUp, color: "text-[#1A394E]" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1A394E] via-[#2C727B] to-[#1A394E]">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] animate-pulse delay-2000" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 7}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-in fade-in slide-in-from-top-6 duration-700">
            <Rocket className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white/90 font-semibold">100% Free Tools</span>
            <Sparkles className="w-3 h-3 text-yellow-400" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            <span className="block text-white">
              Free SEO & Marketing
            </span>
            <span className="block bg-gradient-to-r from-white via-[#2C727B] to-white bg-clip-text text-transparent mt-2">
              Power Tools
            </span>
          </h1>
          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 animate-in fade-in duration-700 delay-200">
            Professional-grade tools to optimize, analyze, and grow your online presence  All Completely Free
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2C727B] shadow-lg"
              />
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-400">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/10">
                  <Icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/60">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Curved Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L1440 0V120H0Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </div>

      {/* Tools Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-500 text-sm">
            Showing <span className="font-semibold text-[#2C727B]">{filteredTools.length}</span> tools
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, idx) => {
            const Icon = tool.icon
            return (
              <Link href={tool.href} key={idx}>
                <div 
                  className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                  onMouseEnter={() => setHoveredTool(tool.title)}
                  onMouseLeave={() => setHoveredTool(null)}
                >
                  {/* Gradient Top Border */}
                  <div className={`h-1.5 bg-gradient-to-r ${tool.color} transition-all duration-300 ${hoveredTool === tool.title ? "h-2" : "h-1.5"}`} />
                  
                  {/* Popularity Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm">
                    <Flame className="w-3 h-3 text-orange-500" />
                    <span className="text-xs font-semibold text-gray-700">{tool.popularity}%</span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title with NEW Badge */}
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-[#1A394E] group-hover:text-[#2C727B] transition-colors">
                        {tool.title}
                      </h3>
                      {tool.isNew && (
                        <span className="px-2 py-0.5 bg-green-100 text-green-600 text-xs font-bold rounded-full animate-pulse">
                          NEW
                        </span>
                      )}
                      {tool.isPro && (
                        <span className="px-2 py-0.5 bg-amber-100 text-amber-600 text-xs font-bold rounded-full">
                          PRO
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                      {tool.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>{tool.users} users</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Target className="w-3 h-3" />
                        <span>{tool.category}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-[#2C727B] text-sm font-medium">Try Now</span>
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#2C727B] group-hover:translate-x-1 transition-all duration-300">
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay Effect */}
                  {hoveredTool === tool.title && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2C727B]/5 to-[#1A394E]/5 pointer-events-none" />
                  )}
                </div>
              </Link>
            )
          })}
        </div>

        {/* Empty State */}
        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-[#1A394E] mb-2">No tools found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchQuery("")
                setActiveCategory("All")
              }}
              className="mt-4 px-6 py-2 rounded-full bg-[#2C727B] text-white hover:bg-[#1A394E] transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Trust Badges Section */}
        <div className="mt-20 bg-gradient-to-r from-[#2C727B]/5 to-[#1A394E]/5 rounded-3xl p-8 border border-[#2C727B]/10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm mb-4">
              <Shield className="w-4 h-4 text-[#2C727B]" />
              <span className="text-sm font-semibold text-[#2C727B]">Trusted Worldwide</span>
            </div>
            <h3 className="text-2xl font-bold text-[#1A394E]">Why Choose Our Tools?</h3>
            <p className="text-gray-500 mt-2">Used by thousands of marketers and businesses globally</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-3 shadow-sm">
                <Lock className="w-5 h-5 text-[#2C727B]" />
              </div>
              <h4 className="font-semibold text-[#1A394E] mb-1">100% Free Forever</h4>
              <p className="text-sm text-gray-500">No credit card required, no hidden fees</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-3 shadow-sm">
                <Zap className="w-5 h-5 text-[#2C727B]" />
              </div>
              <h4 className="font-semibold text-[#1A394E] mb-1">Fast & Reliable</h4>
              <p className="text-sm text-gray-500">Real-time results with instant processing</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-3 shadow-sm">
                <Globe className="w-5 h-5 text-[#2C727B]" />
              </div>
              <h4 className="font-semibold text-[#1A394E] mb-1">Regular Updates</h4>
              <p className="text-sm text-gray-500">New tools and features added weekly</p>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#2C727B] to-[#1A394E] rounded-3xl blur-2xl opacity-20" />
          <div className="relative bg-gradient-to-br from-[#2C727B] to-[#1A394E] rounded-3xl p-10 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                <Heart className="w-4 h-4 text-white" />
                <span className="text-sm text-white font-semibold">Never Miss an Update</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Get New Tools First
              </h3>
              <p className="text-white/80 mb-6">
                Subscribe to get notified when we launch new free tools
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="px-6 py-3 bg-white text-[#1A394E] rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-white/50 mt-3">No spam • Unsubscribe anytime</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
          50% { transform: translateY(-30px) translateX(15px); opacity: 0.5; }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </main>
  )
}