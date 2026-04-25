"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Star,
  BarChart3,
  Globe2,
  Brain,
  Rocket,
  BadgeCheck,
  Trophy,
  ThumbsUp,
  Briefcase,
  Users2,
  Mic2,
  Sparkle,
  Bot,
  Heart,
  Shield,
  CheckCircle2,
  Quote,
  ChevronDown,
} from "lucide-react";

// ============================================
// DATA (All in one place)
// ============================================

const stats = [
  { value: "1500+", label: "Projects Completed", icon: Briefcase },
  { value: "99%", label: "Client Retention", icon: ThumbsUp },
  { value: "50M+", label: "Organic Traffic", icon: BarChart3 },
  { value: "75+", label: "Expert Team", icon: Users2 },
  { value: "4.98", label: "Client Rating", icon: Star },
  { value: "$250M+", label: "Revenue Generated", icon: TrendingUp },
];

const milestones = [
  { year: "2020", title: "Founded", description: "Started with a mission to fix broken SEO", icon: Rocket },
  { year: "2021", title: "AI Integration", description: "Built proprietary AI ranking system", icon: Brain },
  { year: "2022", title: "Global Expansion", description: "Helped 500+ businesses scale globally", icon: Globe2 },
  { year: "2023", title: "Market Leadership", description: "Awarded Top AI SEO Agency", icon: Trophy },
  { year: "2024", title: "Voice & Visual", description: "Expanded into multimodal search", icon: Mic2 },
  { year: "2025", title: "GenAI Revolution", description: "Pioneered generative AI optimization", icon: Sparkle },
  { year: "2026", title: "Autonomous SEO", description: "Self-optimizing AI agents", icon: Bot, isCurrent: true },
];

const values = [
  { icon: Heart, title: "Client First", description: "Your success is our success", metric: "98% Retention" },
  { icon: Brain, title: "AI Innovation", description: "Staying 2+ years ahead", metric: "15 Patents" },
  { icon: Shield, title: "Transparency", description: "Clear reporting, no surprises", metric: "100% Audit" },
  { icon: TrendingUp, title: "Data-Driven", description: "Every decision backed by data", metric: "1B+ Points" },
];

const trustBadges = [
  "Google Premier Partner",
  "Microsoft AI Partner",
  "SEMrush Certified",
  "HubSpot Platinum",
  "Forbes Agency Council",
];

const teamMembers = [
  {
    name: "Alexandra Chen",
    role: "CEO & Founder",
    bio: "Former Google Search Quality engineer with 18+ years in SEO and AI integration",
    expertise: ["AI Strategy", "Search Algorithms", "Business Growth"],
  },
  {
    name: "Marcus Rodriguez",
    role: "Chief AI Officer",
    bio: "AI researcher turned SEO architect, built proprietary ML models for Fortune 500",
    expertise: ["Machine Learning", "NLP", "Predictive Analytics"],
  },
  {
    name: "Sophia Williams",
    role: "Director of Content Strategy",
    bio: "Former NY Times editor, leading AI-powered content ecosystems",
    expertise: ["Content AI", "Topic Clusters", "EEAT Optimization"],
  },
  {
    name: "David Kim",
    role: "Technical SEO Lead",
    bio: "Full-stack developer & Core Web Vitals specialist",
    expertise: ["Core Web Vitals", "Site Architecture", "JavaScript SEO"],
  },
  {
    name: "Priya Patel",
    role: "Head of Voice & Visual Search",
    bio: "Pioneer in multimodal search optimization",
    expertise: ["Voice Search", "Visual Recognition", "Multimodal AI"],
  },
  {
    name: "James Wilson",
    role: "Data Science Director",
    bio: "PhD in Computational Linguistics, 10+ patents in search tech",
    expertise: ["Data Mining", "Pattern Recognition", "Search Analytics"],
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "iCreatixPRO didn't just improve our rankings—they transformed our entire digital presence. Their AI-driven approach generated $5M in organic revenue within 12 months.",
    rating: 5,
    metric: "$5M Revenue Generated",
  },
  {
    name: "Michael Brown",
    role: "CMO, GrowthLabs",
    content: "The team at iCreatixPRO understands modern search behavior better than anyone. They helped us dominate AI overviews and voice search results in under 6 months.",
    rating: 5,
    metric: "300% Traffic Increase",
  },
  {
    name: "Emily Davis",
    role: "Founder, EcoBrands",
    content: "Finally, an agency that delivers what they promise. Our organic visibility increased 400% and we're now ranking for 5,000+ keywords.",
    rating: 5,
    metric: "400% Visibility Growth",
  },
  {
    name: "Dr. Robert Chen",
    role: "CTO, HealthTech AI",
    content: "Their technical SEO expertise is world-class. They optimized our Core Web Vitals from 45 to 95+ and helped us achieve featured snippets for 200+ medical terms.",
    rating: 5,
    metric: "95+ Core Web Vitals",
  },
];

const faqs = [
  {
    question: "What makes iCreatixPRO different from other SEO agencies?",
    answer: "We build autonomous AI systems that predict algorithm changes, optimize for multimodal search (voice, visual, GenAI), and focus on revenue growt not just rankings. Our team includes ex-Google engineers and AI researchers."
  },
  {
    question: "Do you offer AI-powered SEO services?",
    answer: "Yes, we use proprietary machine learning models for predictive keyword intelligence, automated optimization, and real-time rank tracking across search engines including Google, ChatGPT, and Gemini."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We work with SaaS, ecommerce, healthcare, finance, and enterprise clients. Our AI systems adapt to any industry vertical."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most clients see initial improvements in 30-60 days, with significant revenue growth within 6 months. Our average client ROI is 300%+ in the first year."
  },
  {
    question: "Do you provide international SEO services?",
    answer: "Yes, we've helped businesses scale across 15+ countries with multilingual SEO, hreflang optimization, and local search strategies."
  }
];

// ============================================
// MAIN COMPONENT
// ============================================

export default function AboutClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <main className="relative overflow-x-hidden bg-gradient-to-b from-white via-[#F5F7FA] to-white">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full border border-[#2C727B]/20 bg-white/80 backdrop-blur-xl shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2C727B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2C727B]"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#2C727B]">
              🏆 #1 AI SEO Agency 2026 | Trusted by 1500+ Businesses
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="block text-gray-900">We Don't Just Rank</span>
            <span className="block mt-3 bg-gradient-to-r from-[#2C727B] via-[#1A394E] to-[#2C727B] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              We Engineer Growth Engines
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Most agencies optimize for traffic. We build autonomous AI systems that 
            <br />
            <span className="text-[#2C727B] font-semibold">
              turn clicks into customers and customers into brand advocates.
            </span>
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="group relative px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#2C727B] to-[#1A394E] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <span className="relative z-10 flex items-center gap-2">
                Get Free AI Strategy Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/case-studies" className="px-8 py-4 rounded-xl font-semibold border-2 border-[#2C727B]/30 bg-white/60 backdrop-blur-sm text-[#1A394E] shadow-lg hover:shadow-xl transition-all">
              View Success Stories
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-600 bg-white/50 px-3 py-1.5 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-[#2C727B]" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-[#2C727B]/5 to-[#1A394E]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">By the Numbers</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2C727B] to-[#1A394E] mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-gray-600">The impact we've delivered for our clients</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="group text-center p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#2C727B]/10 shadow-lg hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2C727B]/10 to-[#1A394E]/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-[#2C727B]" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#2C727B] font-semibold text-sm uppercase tracking-wider">Our Evolution</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2">From Startup to Industry Leader</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2C727B] to-[#1A394E] mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone) => (
              <div key={milestone.year} className={`bg-white rounded-2xl p-6 shadow-xl border-l-4 border-[#2C727B] hover:shadow-2xl transition-all ${milestone.isCurrent ? "ring-2 ring-[#2C727B]/20" : ""}`}>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2C727B]/10 to-[#1A394E]/10 flex items-center justify-center mb-4">
                  <milestone.icon className="w-7 h-7 text-[#2C727B]" />
                </div>
                <div className="text-sm font-bold text-[#2C727B]">{milestone.year}</div>
                <h3 className="text-xl font-bold text-gray-900 mt-1">{milestone.title}</h3>
                <p className="text-gray-600 mt-2">{milestone.description}</p>
                {milestone.isCurrent && (
                  <span className="inline-block mt-3 px-2 py-1 bg-[#2C727B] text-white text-xs rounded-full">Current</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-b from-[#F5F7FA] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#2C727B] font-semibold text-sm uppercase tracking-wider">Our Foundation</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2">What Drives Us</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2C727B] to-[#1A394E] mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="group p-6 rounded-2xl bg-gradient-to-br from-white to-[#F5F7FA] border border-[#2C727B]/10 shadow-lg hover:shadow-2xl transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2C727B]/10 to-[#1A394E]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-[#2C727B]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{value.description}</p>
                <div className="inline-block px-2 py-1 bg-[#2C727B]/10 rounded-md">
                  <span className="text-xs font-semibold text-[#2C727B]">{value.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#2C727B] font-semibold text-sm uppercase tracking-wider">The Dream Team</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2">Meet the Minds Behind the Magic</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2C727B] to-[#1A394E] mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all">
                <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center mb-4 shadow-lg">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-[#2C727B] font-semibold text-sm mt-1">{member.role}</p>
                <p className="text-gray-500 text-sm mt-3">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  {member.expertise.map((exp, i) => (
                    <span key={i} className="text-xs bg-[#2C727B]/10 text-[#2C727B] px-2 py-1 rounded-full">{exp}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/careers" className="inline-flex items-center gap-2 text-[#2C727B] font-semibold hover:gap-3 transition-all">
              Join our growing team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-b from-[#F5F7FA] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#2C727B] font-semibold text-sm uppercase tracking-wider">Social Proof</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2C727B] to-[#1A394E] mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-gray-600">Real results from real businesses we've helped scale</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="p-6 rounded-2xl bg-white border border-[#2C727B]/10 shadow-xl hover:shadow-2xl transition-all">
                <Quote className="w-8 h-8 text-[#2C727B]/40 mb-4" />
                <p className="text-gray-600 leading-relaxed mb-4">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="flex text-yellow-400 text-sm">{"★".repeat(testimonial.rating)}</div>
                    <p className="text-xs font-semibold text-[#2C727B] mt-1">{testimonial.metric}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#2C727B] font-semibold text-sm uppercase tracking-wider">Common Questions</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2C727B] to-[#1A394E] mx-auto mt-4 rounded-full" />
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-[#2C727B]/10 rounded-xl overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#F5F7FA] transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#2C727B] transition-transform duration-200 ${openFaqIndex === index ? "rotate-180" : ""}`} />
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2C727B] via-[#1A394E] to-[#2C727B] p-8 sm:p-12 text-center shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Ready to Engineer Your Growth?</h2>
              <p className="text-white/80 text-lg mb-8">Join 1500+ businesses that have transformed their online presence.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-white text-[#1A394E] shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]">
                Start Your Journey <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% auto;
        }
      `}</style>
    </main>
  );
}