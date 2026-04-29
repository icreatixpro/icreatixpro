"use client"

import { 
  Search, 
  Globe, 
  BarChart3, 
  Megaphone, 
  Code2, 
  ShoppingCart,
  TrendingUp,
  Zap
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Search,
    title: "AI SEO Optimization",
    description: "Rank higher in Google and AI-powered search results with advanced SEO strategies.",
    href: "/services/search-engine-optimization",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: Globe,
    title: "International & Local SEO",
    description: "Scale globally or dominate local search with geo-targeted optimization.",
    href: "/services/local-seo",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: Megaphone,
    title: "Google & Meta Ads",
    description: "High-performing ad campaigns designed to generate quality leads and sales.",
    href: "/services/google-ads",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Modern, fast, and conversion-focused websites built for growth.",
    href: "/services/web-development",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce SEO",
    description: "Optimize product pages and schema using AI automation for more sales.",
    href: "/services/ecommerce-seo",
    color: "from-rose-500 to-orange-500"
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Predict growth with real-time SEO data insights and custom dashboards.",
    href: "/services/analytics",
    color: "from-cyan-500 to-blue-500"
  }
]

export default function Services() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-wider text-[#2C727B] font-semibold">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E] mt-2">
            Digital Growth Services That Drive{" "}
            <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          <p className="mt-4 text-gray-600">
            We provide advanced digital marketing solutions designed to increase visibility, 
            attract qualified traffic, and convert visitors into loyal customers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Link href={service.href} key={idx}>
              <div className="group h-full p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1A394E] mb-2 group-hover:text-[#2C727B] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-[#2C727B] text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Learn More
                  <Zap className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}