"use client"

import {
  Shield,
  Rocket,
  Clock,
  Award,
  Headphones,
  BarChart4,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  Globe,
  Database,
  Lock,
  Target,
} from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Data-Driven Strategies",
    description:
      "Every decision backed by real data and analytics from industry-leading tools",
    stat: "98% Accuracy",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Rocket,
    title: "Fast Implementation",
    description:
      "Quick turnaround times without compromising quality or results",
    stat: "48h Response",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description:
      "Round-the-clock performance tracking and proactive issue alerts",
    stat: "Real-time",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Award,
    title: "Certified Experts",
    description:
      "Google and industry-certified SEO specialists with proven track record",
    stat: "50+ Certs",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Personal account manager for every client with priority access",
    stat: "24/7 Support",
    color: "from-rose-500 to-orange-500",
  },
  {
    icon: BarChart4,
    title: "Transparent Reporting",
    description:
      "Regular detailed reports with actionable insights and ROI tracking",
    stat: "Live Dashboard",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Target,
    title: "ROI Focused",
    description:
      "Every strategy aligned with your business goals and revenue targets",
    stat: "300% ROI",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "International SEO expertise across 50+ countries and languages",
    stat: "50+ Markets",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Database,
    title: "AI-Powered Tools",
    description:
      "Cutting-edge AI technology for predictive analytics and automation",
    stat: "AI Driven",
    color: "from-violet-500 to-purple-500",
  },
]

const particles = [
  { left: "10%", top: "20%" },
  { left: "25%", top: "70%" },
  { left: "40%", top: "30%" },
  { left: "55%", top: "80%" },
  { left: "70%", top: "40%" },
  { left: "85%", top: "60%" },
  { left: "50%", top: "50%" },
  { left: "15%", top: "85%" },
]

export default function Features() {
  return (
    <section className="relative overflow-hidden py-24 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A394E] via-[#2C727B]/20 to-[#1A394E]" />

      {/* Optimized Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2C727B]/20 rounded-full blur-[100px]" />

      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#1A394E]/20 rounded-full blur-[100px]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Optimized Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg mb-4">
            <Sparkles className="w-4 h-4 text-white" />

            <span className="text-sm uppercase tracking-wider text-white font-semibold">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 leading-tight">
            We Deliver{" "}
            <span className="bg-gradient-to-r from-white to-[#2C727B] bg-clip-text text-transparent">
              Excellence Through
            </span>
          </h2>

          <p className="mt-4 text-white/70 text-lg">
            Our commitment to quality and results sets us apart from the
            competition
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>

              <div className="text-xs text-white/60">
                Projects Completed
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-white/20" />

            <div className="text-center">
              <div className="text-3xl font-bold text-white">98%</div>

              <div className="text-xs text-white/60">
                Client Satisfaction
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-white/20" />

            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>

              <div className="text-xs text-white/60">
                Expert Team
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon

            return (
              <div
                key={idx}
                className="group relative transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 overflow-hidden">
                  {/* Hover Shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-md transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Badge */}
                  <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/10 border border-white/10">
                    <Zap className="w-3 h-3 text-[#2C727B]" />

                    <span className="text-xs text-white/80">
                      {feature.stat}
                    </span>
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute bottom-6 right-6 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>

              <div className="text-left">
                <p className="text-white font-semibold text-sm">
                  100% Satisfaction
                </p>

                <p className="text-white/50 text-xs">
                  Guaranteed results
                </p>
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-white/20" />

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>

              <div className="text-left">
                <p className="text-white font-semibold text-sm">
                  Trusted Globally
                </p>

                <p className="text-white/50 text-xs">
                  500+ active clients
                </p>
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-white/20" />

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>

              <div className="text-left">
                <p className="text-white font-semibold text-sm">
                  Secure & Confidential
                </p>

                <p className="text-white/50 text-xs">
                  Data protection
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            aria-label="Join Our Success Stories"
            className="group px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            <CheckCircle2 className="inline w-4 h-4 mr-2" />

            Join Our Success Stories

            <Zap className="inline w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}