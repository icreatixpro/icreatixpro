"use client";

import Link from "next/link";
import { Check, Sparkles, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$999",
    period: "/month",
    description: "Perfect for small businesses starting with SEO",
    features: [
      "Keyword Research (50 keywords)",
      "On-Page SEO Optimization",
      "Monthly Performance Report",
      "Basic Technical Audit",
      "Email Support",
    ],
    featured: false,
    buttonText: "Get Started",
  },
  {
    name: "Professional",
    price: "$2,499",
    period: "/month",
    description: "Most popular for growing businesses",
    features: [
      "Keyword Research (200 keywords)",
      "Advanced On-Page SEO",
      "Weekly Performance Reports",
      "Comprehensive Technical Audit",
      "Backlink Building",
      "Content Strategy",
      "Priority Support",
    ],
    featured: true,
    buttonText: "Start Growing",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large businesses with complex needs",
    features: [
      "Unlimited Keywords",
      "Full SEO Suite",
      "Real-time Analytics Dashboard",
      "Custom Development",
      "Dedicated Account Manager",
      "API Access",
      "24/7 Phone Support",
    ],
    featured: false,
    buttonText: "Contact Sales",
  },
];

export default function Pricing() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1A394E]/10 rounded-full px-4 py-1.5 mb-4">
            <Sparkles className="w-4 h-4 text-[#1A394E]" />
            <span className="text-sm font-medium text-[#1A394E]">Simple Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E] mb-3">
            Choose Your Growth Plan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Start growing today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.featured
                  ? "bg-gradient-to-br from-[#1A394E] to-[#2C727B] text-white shadow-xl ring-2 ring-[#2C727B]"
                  : "bg-white shadow-md hover:shadow-xl"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-[#1A394E] text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`text-sm ${plan.featured ? "text-white/70" : "text-gray-500"}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm mt-2 ${plan.featured ? "text-white/70" : "text-gray-500"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Check className={`w-4 h-4 ${plan.featured ? "text-green-300" : "text-green-500"}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact">
                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.featured
                      ? "bg-white text-[#1A394E] hover:bg-gray-100"
                      : "bg-[#1A394E] text-white hover:bg-[#2C727B]"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          All plans include a 14-day money-back guarantee. No questions asked.
        </p>
      </div>
    </section>
  );
}