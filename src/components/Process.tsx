"use client"

import { 
  ClipboardCheck, 
  Settings2, 
  Rocket as RocketIcon, 
  TrendingUp,
  ChevronRight
} from "lucide-react"

const steps = [
  {
    icon: ClipboardCheck,
    title: "Discovery & Audit",
    description: "We analyze your website, competitors, and growth opportunities to create a customized strategy.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Settings2,
    title: "Strategic Optimization",
    description: "Technical SEO, content optimization, and performance improvements implemented systematically.",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: RocketIcon,
    title: "Campaign Launch",
    description: "Google Ads and Meta Ads campaigns targeting the right audience with precision.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: TrendingUp,
    title: "Scale & Growth",
    description: "Continuous optimization and scaling to maximize ROI and business growth.",
    color: "from-purple-500 to-pink-500"
  }
]

export default function Process() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-wider text-[#2C727B] font-semibold">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E] mt-2">
            A Proven Framework for{" "}
            <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
              Digital Success
            </span>
          </h2>
          <p className="mt-4 text-gray-600">
            A structured methodology designed to deliver measurable results for your business
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2C727B] via-[#1A394E] to-[#2C727B] hidden md:block" />
          
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-6 md:gap-12`}>
                
                {/* Step Number */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-2 md:translate-y-0 z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 ml-20 md:ml-0 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-[#2C727B] bg-[#2C727B]/10 px-2 py-0.5 rounded-full">
                        Step {idx + 1}
                      </span>
                      <ChevronRight className="w-3 h-3 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1A394E] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}