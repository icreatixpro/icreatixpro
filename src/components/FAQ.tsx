"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "What is the difference between SEO, AEO, and GEO?",
    answer: "SEO (Search Engine Optimization) focuses on ranking in traditional search results. AEO (Answer Engine Optimization) optimizes for voice search and featured snippets. GEO (Generative Experience Optimization) prepares your content for AI-powered search results like Google SGE and ChatGPT."
  },
  {
    question: "How long does it take to see results?",
    answer: "SEO is a long-term strategy. Typically, you'll start seeing initial improvements within 3-4 months, with significant results in 6-12 months. However, PPC campaigns can generate immediate traffic within days."
  },
  {
    question: "Do you offer custom pricing for startups?",
    answer: "Yes! We offer flexible pricing plans tailored to startups and small businesses. Contact our sales team for a custom quote based on your specific needs and budget."
  },
  {
    question: "Which industries do you specialize in?",
    answer: "We work across various industries including E-commerce, Healthcare, Real Estate, Technology, Education, Local Services, and Professional Services. Our strategies are customized for each industry's unique requirements."
  },
  {
    question: "Do you provide monthly reports?",
    answer: "Absolutely! We provide comprehensive monthly reports with detailed analytics, keyword rankings, traffic data, conversion metrics, and actionable insights. Enterprise clients get access to real-time dashboards."
  },
  {
    question: "Can you help with both organic and paid search?",
    answer: "Yes! We offer integrated digital marketing solutions including SEO (organic), Google Ads (PPC), Meta Ads, and combined strategies for maximum visibility and ROI."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm uppercase tracking-wider text-[#2C727B] font-semibold bg-[#2C727B]/10 px-4 py-1 rounded-full">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E] mt-4">
            Frequently Asked
            <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent"> Questions</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Everything you need to know about our digital marketing services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex justify-between items-center text-left"
              >
                <span className="font-semibold text-[#1A394E] pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#2C727B] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-6 bg-[#2C727B]/5 rounded-2xl border border-[#2C727B]/10">
          <HelpCircle className="w-8 h-8 text-[#2C727B] mx-auto mb-3" />
          <p className="text-gray-600">
            Still have questions?{" "}
            <a href="/contact" className="text-[#2C727B] font-semibold hover:underline">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}