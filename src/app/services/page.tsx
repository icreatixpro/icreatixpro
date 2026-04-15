"use client";

import Link from "next/link"
import { useState, useEffect } from "react"
import { 
  Search, MapPin, BarChart3, Globe, 
  TrendingUp, Users, Clock, Award, 
  Shield, Zap, ArrowRight, CheckCircle2,
  Sparkles, Rocket, Star, Phone, Mail,
  Calendar, Play, ChevronRight, Heart,
  Target, LineChart, Smartphone, Palette,
  Code, FileText, MessageCircle, Linkedin,
  Twitter, Facebook, Instagram, Youtube
} from "lucide-react"

// Service data structure
const services = [
  {
    slug: "search-engine-optimization",
    title: "SEO Services",
    shortTitle: "SEO",
    description: "Improve search rankings and grow organic traffic with data-driven SEO strategies.",
    longDescription: "Comprehensive SEO solutions including keyword research, on-page optimization, technical SEO, and link building to boost your visibility in search results.",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building", "SEO Audits", "Competitor Analysis"],
    price: "Starting at $499/mo",
    results: "200% Avg Traffic Increase",
    popular: true,
    gradient: "blue"
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    shortTitle: "Local SEO",
    description: "Rank your business in Google Maps and local searches to attract nearby customers.",
    longDescription: "Dominate local search results with Google Business Profile optimization, local citations, and review management strategies.",
    icon: MapPin,
    color: "from-emerald-500 to-teal-500",
    features: ["Google Maps Optimization", "Local Citations", "Review Management", "Local Content", "GMB Setup", "Local Schema"],
    price: "Starting at $299/mo",
    results: "150% More Local Leads",
    popular: false,
    gradient: "green"
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    shortTitle: "PPC",
    description: "Drive targeted traffic with high-converting PPC campaigns that deliver ROI.",
    longDescription: "Expert Google Ads management including search, display, shopping, and retargeting campaigns optimized for maximum conversion rates.",
    icon: BarChart3,
    color: "from-orange-500 to-red-500",
    features: ["Search Ads", "Display Ads", "Shopping Campaigns", "Retargeting", "A/B Testing", "Conversion Tracking"],
    price: "Starting at $599/mo + Ad Spend",
    results: "300% Average ROAS",
    popular: true,
    gradient: "orange"
  },
  {
    slug: "meta-ads",
    title: "Meta Ads",
    shortTitle: "Social Ads",
    description: "Scale sales with Facebook and Instagram advertising that reaches your ideal audience.",
    longDescription: "Strategic Meta advertising campaigns with advanced targeting, creative optimization, and performance tracking to maximize ROAS.",
    icon: Target,
    color: "from-purple-500 to-pink-500",
    features: ["Facebook Ads", "Instagram Ads", "Audience Targeting", "Creative Strategy", "Retargeting", "Lookalike Audiences"],
    price: "Starting at $499/mo + Ad Spend",
    results: "250% Engagement Increase",
    popular: false,
    gradient: "purple"
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Full Stack",
    description: "Full-service digital marketing solutions for comprehensive business growth.",
    longDescription: "Integrated digital marketing strategies combining SEO, PPC, social media, email marketing, and content marketing for maximum impact.",
    icon: Globe,
    color: "from-indigo-500 to-purple-500",
    features: ["Multi-Channel Strategy", "Content Marketing", "Email Marketing", "Social Media", "Analytics & Reporting", "Conversion Optimization"],
    price: "Custom Pricing",
    results: "Complete Growth Solution",
    popular: false,
    gradient: "indigo"
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    shortTitle: "Content",
    description: "Create engaging content that attracts, educates, and converts your target audience.",
    longDescription: "Strategic content creation including blog posts, articles, whitepapers, case studies, and video content that builds authority and drives traffic.",
    icon: FileText,
    color: "from-rose-500 to-orange-500",
    features: ["Blog Posts", "Case Studies", "Whitepapers", "Infographics", "Video Content", "Content Strategy"],
    price: "Starting at $399/mo",
    results: "400% Organic Growth",
    popular: false,
    gradient: "rose"
  }
]

const stats = [
  { value: "500+", label: "Projects Completed", icon: Award },
  { value: "98%", label: "Client Satisfaction", icon: Heart },
  { value: "50+", label: "Expert Team", icon: Users },
  { value: "24/7", label: "Support Available", icon: Clock },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "iCreatixPRO transformed our SEO strategy completely. Within 6 months, we saw a 300% increase in organic traffic.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    content: "The team's AI-powered approach is revolutionary. Best investment we've made for our digital presence.",
    rating: 5,
    avatar: "MC"
  }
]

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A394E] via-[#2C727B] to-[#1A394E] opacity-95" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] animate-pulse delay-1000" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-in fade-in slide-in-from-top-6 duration-700">
            <Sparkles className="w-4 h-4 text-[#2C727B]" />
            <span className="text-sm text-white/90 font-semibold">Premium Services</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            <span className="block text-white">Digital Marketing</span>
            <span className="block bg-gradient-to-r from-[#2C727B] via-white to-[#2C727B] bg-clip-text text-transparent mt-2">
              Services
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 animate-in fade-in duration-700 delay-200">
            Data-driven strategies that deliver measurable results. From SEO to paid ads,
            we help businesses grow their online presence and revenue.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <Link href="/contact">
              <button className="group px-8 py-3.5 bg-white text-[#1A394E] font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                Get Free Consultation
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

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-400">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20">
                  <Icon className="w-6 h-6 text-[#2C727B] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/70">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C727B]/10 mb-4">
              <Rocket className="w-4 h-4 text-[#2C727B]" />
              <span className="text-sm text-[#2C727B] font-semibold">What We Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E]">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of digital marketing services designed to
              drive traffic, generate leads, and grow your business.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={service.slug}
                  className={`group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 cursor-pointer ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                  onMouseEnter={() => setHoveredService(service.title)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Gradient Top Border */}
                  <div className={`h-1.5 bg-gradient-to-r ${service.color} transition-all duration-300 ${hoveredService === service.title ? "h-2" : "h-1.5"}`} />
                  
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Popular
                      </span>
                    </div>
                  )}

                  <div className="p-6">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#1A394E] group-hover:text-[#2C727B] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-gray-600 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Features */}
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

                    {/* Result Badge */}
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-[#2C727B]">
                          {service.price}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          {service.results}
                        </span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="mt-4 flex items-center justify-between">
                      <Link href={`/services/${service.slug}`}>
                        <span className="text-[#2C727B] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </Link>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  {hoveredService === service.title && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2C727B]/5 to-[#1A394E]/5 pointer-events-none" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#2C727B]/5 via-white to-[#1A394E]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm mb-4">
              <Shield className="w-4 h-4 text-[#2C727B]" />
              <span className="text-sm text-[#2C727B] font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E]">
              We Deliver{" "}
              <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
                Excellence Through
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality and results sets us apart from the competition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Data-Driven Strategies", desc: "Every decision backed by real data and analytics", icon: LineChart },
              { title: "Fast Implementation", desc: "Quick turnaround times without compromising quality", icon: Zap },
              { title: "24/7 Monitoring", desc: "Round-the-clock performance tracking and alerts", icon: Clock },
              { title: "Certified Experts", desc: "Google and industry-certified SEO specialists", icon: Award },
              { title: "Dedicated Support", desc: "Personal account manager for every client", icon: Users },
              { title: "Transparent Reporting", desc: "Regular detailed reports with actionable insights", icon: FileText },
              { title: "ROI Focused", desc: "Every strategy aligned with your business goals", icon: Target },
              { title: "AI-Powered Tools", desc: "Cutting-edge AI technology for predictive analytics", icon: Sparkles },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-[#2C727B]/10 flex items-center justify-center mb-3 group-hover:bg-[#2C727B] transition-colors">
                    <Icon className="w-5 h-5 text-[#2C727B] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-[#1A394E] mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C727B]/10 mb-4">
              <Heart className="w-4 h-4 text-[#2C727B]" />
              <span className="text-sm text-[#2C727B] font-semibold">Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E]">
              What Our{" "}
              <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
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

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#2C727B] to-[#1A394E] rounded-3xl p-10 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Grow Your Business?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss your goals and create a custom digital marketing strategy that delivers results.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <button className="px-8 py-3.5 bg-white text-[#1A394E] font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                    Schedule a Call
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

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
          50% { transform: translateY(-30px) translateX(15px); opacity: 0.5; }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </main>
  )
}