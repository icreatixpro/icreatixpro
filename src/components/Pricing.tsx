"use client"

import { Check, Sparkles, TrendingUp, Crown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const plans = [
  {
    name: "Starter",
    icon: Sparkles,
    price: { monthly: 499, yearly: 399 },
    description: "Perfect for small businesses starting their digital journey",
    features: [
      "SEO Audit & Strategy",
      "10 Keywords Tracking",
      "Monthly Content (2 Articles)",
      "Basic Technical SEO",
      "Monthly Report",
      "Email Support"
    ],
    color: "from-blue-500 to-cyan-500",
    popular: false
  },
  {
    name: "Professional",
    icon: TrendingUp,
    price: { monthly: 999, yearly: 799 },
    description: "Ideal for growing businesses ready to scale",
    features: [
      "Advanced SEO Strategy",
      "30 Keywords Tracking",
      "Monthly Content (5 Articles)",
      "Technical SEO + AEO",
      "Weekly Reports",
      "Priority Support",
      "Local SEO Optimization",
      "Google Ads Setup"
    ],
    color: "from-emerald-500 to-teal-500",
    popular: true
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: { monthly: 2499, yearly: 1999 },
    description: "For established businesses demanding maximum results",
    features: [
      "Full-Service SEO + GEO + AEO",
      "Unlimited Keywords",
      "Unlimited Content",
      "Advanced Technical SEO",
      "Daily Reports + Dashboard",
      "24/7 Dedicated Support",
      "Meta Ads Management",
      "Google Ads Management",
      "Conversion Optimization",
      "Custom Strategy"
    ],
    color: "from-purple-500 to-pink-500",
    popular: false
  }
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true)

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm uppercase tracking-wider text-[#2C727B] font-semibold bg-[#2C727B]/10 px-4 py-1 rounded-full">
            Transparent Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E] mt-4">
            Choose the Perfect Plan for
            <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent"> Your Growth</span>
          </h2>
          <p className="mt-4 text-gray-600">
            No hidden fees. All plans include dedicated support and regular reporting.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/50 backdrop-blur-sm p-1 rounded-full border border-gray-200 shadow-sm">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !isYearly 
                  ? "bg-[#2C727B] text-white shadow-md" 
                  : "text-gray-600 hover:text-[#1A394E]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isYearly 
                  ? "bg-[#2C727B] text-white shadow-md" 
                  : "text-gray-600 hover:text-[#1A394E]"
              }`}
            >
              Yearly <span className="text-xs">(Save 20%)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative group rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular 
                  ? "bg-gradient-to-b from-white to-gray-50 border-2 border-[#2C727B]/30 shadow-xl scale-105" 
                  : "bg-white border border-gray-200 shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white text-xs font-semibold rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4 shadow-md`}>
                  <plan.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-[#1A394E]">{plan.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
                
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-bold text-[#1A394E]">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-gray-500">/{isYearly ? "month (billed yearly)" : "month"}</span>
                </div>
                
                <Link href="/contact">
                  <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white shadow-md hover:shadow-xl hover:-translate-y-0.5"
                      : "bg-gray-100 text-[#1A394E] hover:bg-[#2C727B]/10 border border-transparent hover:border-[#2C727B]/30"
                  }`}>
                    Get Started
                  </button>
                </Link>
              </div>
              
              <div className="border-t border-gray-100 p-6">
                <p className="text-sm font-semibold text-[#1A394E] mb-3">What's included:</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-[#2C727B] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Plan Note */}
        <div className="text-center mt-12">
          <p className="text-gray-500">
            Need a custom plan?{" "}
            <Link href="/contact" className="text-[#2C727B] font-semibold hover:underline">
              Contact our sales team
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}