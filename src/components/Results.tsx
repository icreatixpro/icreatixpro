"use client"

import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import { TrendingUp, Users, BarChart3, Target } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: 320,
    suffix: "%",
    label: "Average Traffic Increase",
    description: "Organic growth for our clients"
  },
  {
    icon: Users,
    value: 150,
    suffix: "+",
    label: "Happy Clients",
    description: "Across various industries"
  },
  {
    icon: BarChart3,
    value: 10,
    suffix: "M+",
    label: "Organic Traffic Generated",
    description: "Monthly visitors driven"
  },
  {
    icon: Target,
    value: 250,
    suffix: "+",
    label: "Ad Campaigns Managed",
    description: "With positive ROI"
  }
]

export default function Results() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-wider text-[#2C727B] font-semibold">
            Proven Results
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E] mt-2">
            Digital Growth Strategies That{" "}
            <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
              Deliver Real Results
            </span>
          </h2>
          <p className="mt-4 text-gray-600">
            We combine advanced SEO strategies, high-converting websites, and data-driven 
            advertising campaigns to help businesses generate consistent traffic and growth.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#2C727B]">
                {inView ? <CountUp end={stat.value} duration={2.5} /> : 0}
                {stat.suffix}
              </div>
              <p className="font-semibold text-[#1A394E] mt-2">{stat.label}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}