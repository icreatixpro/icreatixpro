"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2C727B] to-[#1A394E]" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-sm font-medium text-white">Limited Time Offer</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Ready to Scale Your Business?
        </h2>
        
        <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
          Get a free SEO audit and discover how we can increase your traffic, leads, and revenue.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link href="/contact">
            <button className="group px-8 py-3 rounded-xl bg-white text-[#1A394E] font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
              Get Free SEO Audit
              <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
            </button>
          </Link>
          <Link href="/services">
            <button className="px-8 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 transition-all duration-300">
              View All Services
            </button>
          </Link>
        </div>

        <p className="mt-6 text-white/50 text-sm">
          No obligation. Free consultation included.
        </p>
      </div>
    </section>
  )
}