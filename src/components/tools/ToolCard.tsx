"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ToolCardProps {
  title: string
  description: string
  icon: any
  href: string
  color: string
  popular?: boolean
}

export default function ToolCard({ title, description, icon: Icon, href, color, popular }: ToolCardProps) {
  return (
    <Link href={href}>
      <div className="group h-full p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
        {popular && (
          <span className="inline-block px-2 py-1 text-xs font-semibold text-[#2C727B] bg-[#2C727B]/10 rounded-full mb-3">
            Popular
          </span>
        )}
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-[#1A394E] mb-2 group-hover:text-[#2C727B] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex items-center gap-1 text-[#2C727B] text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
          Try Now
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}