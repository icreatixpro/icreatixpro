"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Search, MapPin, BarChart3, Globe,
  TrendingUp, Users, Clock, Award,
  Shield, Zap, ArrowRight,
  Sparkles, Rocket, Star,
  Calendar, ChevronRight, Heart,
  Target, LineChart, Code, FileText,
  ShoppingBag, Mail, Bot, Server,
  CheckCircle, ZapIcon
} from "lucide-react";

// ========== SERVICE CLUSTERS ==========
const serviceClusters = [
  {
    name: "Growth SEO",
    subtitle: "Proven organic growth",
    gradient: "from-blue-500 to-cyan-500",
    services: [
      {
        slug: "search-engine-optimization",
        title: "SEO Services",
        description: "Search engine optimization that ranks your business #1 on Google.",
        icon: Search,
        price: "$499/mo",
        results: "200% avg traffic increase",
        popular: false,
        features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"]
      },
      {
        slug: "local-seo",
        title: "Local SEO",
        description: "Dominate Google Maps and local pack results for nearby customers.",
        icon: MapPin,
        price: "$299/mo",
        results: "150% more local leads",
        popular: false,
        features: ["GMB Optimization", "Local Citations", "Review Management"]
      },
      {
        slug: "ecommerce-seo",
        title: "E‑commerce SEO",
        description: "Increase product page rankings and drive more sales.",
        icon: ShoppingBag,
        price: "$599/mo",
        results: "200% sales increase",
        popular: false,
        features: ["Product Schema", "Category Optimization", "Faceted Navigation"]
      }
    ]
  },
  {
    name: "AI Search (High‑Growth)",
    subtitle: "Future‑proof your visibility",
    gradient: "from-violet-500 to-purple-500",
    services: [
      {
        slug: "ai-seo-services",
        title: "AI SEO Services",
        description: "Rank on Google, ChatGPT & Perplexity with generative engine optimization.",
        icon: Bot,
        price: "$799/mo",
        results: "200% AI citations",
        popular: true,
        features: ["GEO Optimization", "ChatGPT SEO", "LLM Content", "Entity SEO"]
      },
      {
        slug: "geo-optimization-services",
        title: "GEO Optimization",
        description: "Get cited inside ChatGPT, Gemini & Perplexity answers.",
        icon: Globe,
        price: "$799/mo",
        results: "Cited in AI answers",
        popular: true,
        features: ["Prompt-Based SEO", "Knowledge Graph", "Multi-AI Platforms"]
      },
      {
        slug: "saas-technical-seo",
        title: "SaaS Technical SEO",
        description: "High‑ticket SEO for B2B platforms, SaaS startups & product-led growth.",
        icon: Server,
        price: "$999/mo",
        results: "120% organic signups",
        popular: true,
        features: ["Crawl Budget", "JavaScript SEO", "International SaaS", "Core Web Vitals"]
      }
    ]
  },
  {
    name: "Paid Growth",
    subtitle: "Instant traffic & conversions",
    gradient: "from-orange-500 to-red-500",
    services: [
      {
        slug: "google-ads",
        title: "Google Ads (PPC)",
        description: "Drive high‑intent traffic with strategic pay‑per‑click campaigns.",
        icon: BarChart3,
        price: "$599/mo + spend",
        results: "300% avg ROAS",
        popular: false,
        features: ["Search Ads", "Display Ads", "Shopping", "Retargeting"]
      },
      {
        slug: "meta-ads",
        title: "Meta Ads",
        description: "Scale sales with Facebook & Instagram advertising.",
        icon: Target,
        price: "$499/mo + spend",
        results: "250% engagement",
        popular: false,
        features: ["Audience Targeting", "Creative Strategy", "Lookalike Audiences"]
      }
    ]
  }
];

// Other services (secondary)
const otherServices = [
  { slug: "digital-marketing", title: "Digital Marketing", icon: Globe, price: "Custom", results: "Complete solution" },
  { slug: "content-marketing", title: "Content Marketing", icon: FileText, price: "$399/mo", results: "400% organic growth" },
  { slug: "email-marketing", title: "Email Marketing", icon: Mail, price: "$349/mo", results: "300% email ROI" },
  { slug: "technical-seo", title: "Technical SEO", icon: Code, price: "$799/mo", results: "40% speed improvement" },
  { slug: "web-development", title: "Web Development", icon: Code, price: "$2,500+", results: "Custom solutions" },
  { slug: "analytics", title: "Analytics", icon: LineChart, price: "$299/mo", results: "Clear ROI tracking" }
];

const stats = [
  { value: "600+", label: "Projects Completed", icon: Award },
  { value: "98%", label: "Client Retention", icon: Heart },
  { value: "60+", label: "Expert Team", icon: Users },
  { value: "24/7", label: "Support", icon: Clock }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "iCreatixPRO transformed our SEO. In 6 months, we saw a 300% increase in organic traffic and were cited in ChatGPT for 12+ keywords.",
    result: "+300% organic traffic",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    content: "Their AI SEO and GEO strategies got our SaaS platform featured in Perplexity & Gemini answers. Revenue from organic grew 189%.",
    result: "+189% organic revenue",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, FashionHub",
    content: "E‑commerce sales doubled after they optimised our product pages and implemented structured data. Best investment we've made.",
    result: "2x sales",
    rating: 5,
    avatar: "ER"
  }
];

const differentiators = [
  { title: "AI‑First Approach", desc: "We optimise for Google and AI engines simultaneously.", icon: Bot },
  { title: "GEO Specialists", desc: "Proprietary methods to get your brand cited inside ChatGPT answers.", icon: Globe },
  { title: "SaaS Growth Systems", desc: "Technical SEO built for product‑led companies.", icon: Server },
  { title: "Transparent Reporting", desc: "Real‑time dashboards with revenue attribution.", icon: LineChart }
];

export default function ServicesClient() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      
      {/* ========== HERO (NEW STRONGER COPY) ========== */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A394E] via-[#2C727B] to-[#1A394E] opacity-95" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#2C727B]" />
            <span className="text-sm text-white/90 font-semibold">AI SEO, GEO & SaaS Growth Agency</span>
          </div>
          {/* 🚀 NEW EMOTIONAL HERO COPY */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white">We Turn SEO, AI Search & GEO</span>
            <span className="block bg-gradient-to-r from-[#2C727B] via-white to-[#2C727B] bg-clip-text text-transparent mt-2">
              into Predictable Revenue Growth
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Data‑driven SEO, Generative Engine Optimization, and technical SaaS SEO tailored for <strong>global brands in USA, UK, UAE, Europe & Australia</strong>.
          </p>
          {/* 🚀 NEW URGENCY CTA */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <button className="group px-8 py-3.5 bg-white text-[#1A394E] font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                Get Your Custom AI Growth Blueprint
                <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="#services">
              <button className="group px-8 py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300">
                Explore Services
                <ChevronRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
          {/* Limited slots note (urgency) */}
          <p className="text-white/60 text-sm mt-4">⚠️ Limited strategy slots available – first come, first served.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-12">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20">
                  <Icon className="w-6 h-6 text-[#2C727B] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/70">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== SERVICES (3 PILLARS) ========== */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C727B]/10 mb-4">
              <Rocket className="w-4 h-4 text-[#2C727B]" />
              <span className="text-sm text-[#2C727B] font-semibold">Our Growth Systems</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E]">
              Three Pillars of{" "}
              <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
                Digital Dominance
              </span>
            </h2>
            {/* 🚀 NEW EXPLANATORY LINE */}
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Choose a system based on your growth stage or combine all three for market dominance.
            </p>
          </div>

          {serviceClusters.map((cluster, clusterIdx) => (
            <div key={cluster.name} className="mb-20 last:mb-0">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                <div>
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${cluster.gradient} bg-clip-text text-transparent`}>
                    {cluster.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{cluster.subtitle}</p>
                </div>
                <div className="h-px flex-1 bg-gray-200 mx-4 hidden md:block" />
                {/* 🚀 BADGE FOR SAAS CLUSTER (Most Valuable) */}
                {cluster.name === "AI Search (High‑Growth)" && (
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-500" />
                    Most Valuable
                  </span>
                )}
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cluster.services.map((service, idx) => {
                  const Icon = service.icon;
                  const isHighValue = service.popular;
                  return (
                    <div
                      key={service.slug}
                      className={`group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border ${
                        isHighValue ? 'border-2 border-[#2C727B] shadow-md' : 'border-gray-100'
                      } ${
                        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                      }`}
                      style={{ transitionDelay: `${(clusterIdx * 3 + idx) * 100}ms` }}
                      onMouseEnter={() => setHoveredService(service.title)}
                      onMouseLeave={() => setHoveredService(null)}
                    >
                      <div className={`h-1.5 bg-gradient-to-r ${cluster.gradient} transition-all duration-300 ${hoveredService === service.title ? "h-2" : "h-1.5"}`} />
                      {isHighValue && (
                        <div className="absolute top-4 right-4 z-10">
                          <span className="px-2 py-1 bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white text-xs font-bold rounded-full flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            High Growth
                          </span>
                        </div>
                      )}
                      <div className="p-6">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cluster.gradient} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1A394E] group-hover:text-[#2C727B] transition-colors">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-gray-600 leading-relaxed text-sm">
                          {service.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {service.features.slice(0, 3).map((feature, i) => (
                            <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                              {feature}
                            </span>
                          ))}
                          {service.features.length > 3 && (
                            <span className="text-xs text-[#2C727B]">+{service.features.length - 3} more</span>
                          )}
                        </div>
                        <div className="mt-4 pt-3 border-t border-gray-100">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-[#2C727B]">{service.price}</span>
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <TrendingUp className="w-3 h-3" />
                              {service.results}
                            </span>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Link href={`/services/${service.slug}`}>
                            <span className="text-[#2C727B] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                              Learn More
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          </Link>
                        </div>
                      </div>
                      {hoveredService === service.title && (
                        <div className="absolute inset-0 bg-gradient-to-r from-[#2C727B]/5 to-[#1A394E]/5 pointer-events-none" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Other services (secondary) */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-500 text-sm">
              Also offering: Digital Marketing, Content Marketing, Email Marketing, Technical SEO, Web Development, Analytics. 
              <Link href="/contact" className="text-[#2C727B] font-medium ml-1">Contact us for custom bundles →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* ========== DIFFERENTIATION (NEW PUNCHLINE) ========== */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#2C727B]/5 via-white to-[#1A394E]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm mb-4">
              <Shield className="w-4 h-4 text-[#2C727B]" />
              <span className="text-sm text-[#2C727B] font-semibold">Our Philosophy</span>
            </div>
            {/* 🚀 STRONGER DIFFERENTIATION PUNCH */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E]">
              We Don’t Sell Services —<br />
              <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
                We Build Search Dominance Systems
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-[#2C727B]/10 flex items-center justify-center mb-3 group-hover:bg-[#2C727B] transition-colors">
                    <Icon className="w-5 h-5 text-[#2C727B] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-[#1A394E] mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== PROCESS (unchanged) ========== */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C727B]/10 mb-4">
              <Rocket className="w-4 h-4 text-[#2C727B]" />
              <span className="text-sm text-[#2C727B] font-semibold">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E]">
              How We{" "}
              <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
                Drive Results
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Discovery", desc: "Research & goals", icon: Target },
              { step: "02", title: "Strategy", desc: "Custom plan", icon: LineChart },
              { step: "03", title: "Implementation", desc: "Execute tactics", icon: Zap },
              { step: "04", title: "Optimization", desc: "Continuous testing", icon: TrendingUp },
              { step: "05", title: "Reporting", desc: "Transparent results", icon: BarChart3 },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="text-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] text-white font-bold flex items-center justify-center mx-auto mb-3">
                    {item.step}
                  </div>
                  <Icon className="w-5 h-5 text-[#2C727B] mx-auto mb-2" />
                  <h3 className="font-semibold text-[#1A394E]">{item.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS (unchanged) ========== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C727B]/10 mb-4">
              <Heart className="w-4 h-4 text-[#2C727B]" />
              <span className="text-sm text-[#2C727B] font-semibold">Real Results</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E]">
              What Our{" "}
              <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
                Clients Achieved
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.content}"</p>
                <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full mb-3">
                  {testimonial.result}
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A394E]">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ (unchanged) ========== */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#2C727B]/5 via-white to-[#1A394E]/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E] mb-4">
            Frequently Asked <span className="text-[#2C727B]">Questions</span>
          </h2>
          <p className="text-gray-600 mb-12">Everything you need to know about our growth systems</p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-[#1A394E] mb-2">What makes your AI SEO different?</h3>
                <p className="text-sm text-gray-600">We optimise for Google AND AI engines (ChatGPT, Perplexity, Gemini) using GEO, entity SEO, and structured data – not just keywords.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-[#1A394E] mb-2">Do you work with SaaS startups?</h3>
                <p className="text-sm text-gray-600">Yes. Our SaaS Technical SEO is built for product-led companies, subscription platforms, and B2B software startups.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-[#1A394E] mb-2">How long until I see AI citations?</h3>
                <p className="text-sm text-gray-600">Most clients see initial AI citations within 2-4 months, with full GEO impact at 6 months.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-[#1A394E] mb-2">Can you handle international SEO?</h3>
                <p className="text-sm text-gray-600">Absolutely. We specialise in multi-region SEO for USA, UK, UAE, Europe, Australia – including hreflang, localised content and technical setups.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-[#1A394E] mb-2">What is your pricing model?</h3>
                <p className="text-sm text-gray-600">Monthly retainers starting at $499 for core SEO, $799 for AI SEO/GEO, and $999 for SaaS Technical SEO. Custom bundles available.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-[#1A394E] mb-2">What is your success rate?</h3>
                <p className="text-sm text-gray-600">98% client retention and 600+ projects delivered – our clients see measurable growth within 6 months.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA (improved urgency) ========== */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#2C727B] to-[#1A394E] rounded-3xl p-10 text-center">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Limited Strategy Slots Available
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Get your custom AI Growth Blueprint – a tailored roadmap for your business. Only 5 slots open this month.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <button className="px-8 py-3.5 bg-white text-[#1A394E] font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                    Claim Your Blueprint →
                    <Calendar className="inline ml-2 w-4 h-4" />
                  </button>
                </Link>
                <Link href="#services">
                  <button className="px-8 py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300">
                    Explore Services
                    <ChevronRight className="inline ml-2 w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}