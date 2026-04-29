"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { 
  Search, MapPin, BarChart3, Globe, 
  TrendingUp, Users, Clock, Award, 
  Shield, Zap, ArrowRight, 
  Sparkles, Rocket, Star, 
  Calendar, ChevronRight, Heart,
  Target, LineChart, Code, FileText, 
  ShoppingBag, Mail
} from "lucide-react";

// Service data structure - ALL LINKS TO EXISTING PAGES
const services = [
  {
    slug: "search-engine-optimization",
    title: "SEO Services",
    shortTitle: "SEO",
    description: "Improve search rankings and grow organic traffic with data-driven SEO strategies.",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building", "SEO Audits", "Competitor Analysis"],
    price: "Starting at $499/mo",
    results: "200% Avg Traffic Increase",
    popular: true,
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    shortTitle: "Local SEO",
    description: "Rank your business in Google Maps and local searches to attract nearby customers.",
    icon: MapPin,
    color: "from-emerald-500 to-teal-500",
    features: ["Google Maps Optimization", "Local Citations", "Review Management", "Local Content", "GMB Setup", "Local Schema"],
    price: "Starting at $299/mo",
    results: "150% More Local Leads",
    popular: false,
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    shortTitle: "PPC",
    description: "Drive targeted traffic with high-converting PPC campaigns that deliver ROI.",
    icon: BarChart3,
    color: "from-orange-500 to-red-500",
    features: ["Search Ads", "Display Ads", "Shopping Campaigns", "Retargeting", "A/B Testing", "Conversion Tracking"],
    price: "Starting at $599/mo + Ad Spend",
    results: "300% Average ROAS",
    popular: true,
  },
  {
    slug: "meta-ads",
    title: "Meta Ads",
    shortTitle: "Social Ads",
    description: "Scale sales with Facebook and Instagram advertising that reaches your ideal audience.",
    icon: Target,
    color: "from-purple-500 to-pink-500",
    features: ["Facebook Ads", "Instagram Ads", "Audience Targeting", "Creative Strategy", "Retargeting", "Lookalike Audiences"],
    price: "Starting at $499/mo + Ad Spend",
    results: "250% Engagement Increase",
    popular: false,
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Full Stack",
    description: "Full-service digital marketing solutions for comprehensive business growth.",
    icon: Globe,
    color: "from-indigo-500 to-purple-500",
    features: ["Multi-Channel Strategy", "Content Marketing", "Email Marketing", "Social Media", "Analytics & Reporting", "Conversion Optimization"],
    price: "Custom Pricing",
    results: "Complete Growth Solution",
    popular: false,
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    shortTitle: "Content",
    description: "Create engaging content that attracts, educates, and converts your target audience.",
    icon: FileText,
    color: "from-rose-500 to-orange-500",
    features: ["Blog Posts", "Case Studies", "Whitepapers", "Infographics", "Video Content", "Content Strategy"],
    price: "Starting at $399/mo",
    results: "400% Organic Growth",
    popular: false,
  },
  {
    slug: "ecommerce-seo",
    title: "E-commerce SEO",
    shortTitle: "Ecom SEO",
    description: "Optimize your online store to rank higher and sell more products.",
    icon: ShoppingBag,
    color: "from-green-500 to-emerald-500",
    features: ["Product Page SEO", "Category Optimization", "Faceted Navigation", "Rich Snippets", "Product Schema", "User Reviews"],
    price: "Starting at $599/mo",
    results: "200% Sales Increase",
    popular: false,
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    shortTitle: "Email",
    description: "Build relationships and drive sales with targeted email campaigns.",
    icon: Mail,
    color: "from-blue-500 to-indigo-500",
    features: ["Email Automation", "Segmentation", "A/B Testing", "Newsletter Design", "Campaign Management", "Analytics"],
    price: "Starting at $349/mo",
    results: "300% Email ROI",
    popular: false,
  },
  {
    slug: "technical-seo",
    title: "Technical SEO",
    shortTitle: "Technical",
    description: "Fix technical issues that prevent your website from ranking.",
    icon: Code,
    color: "from-slate-500 to-gray-500",
    features: ["Site Speed Optimization", "Crawl Budget", "Indexation", "Core Web Vitals", "Schema Markup", "JavaScript SEO"],
    price: "Starting at $799/mo",
    results: "40% Speed Improvement",
    popular: false,
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Development",
    description: "Custom websites built to rank and convert visitors into customers.",
    icon: Code,
    color: "from-purple-500 to-indigo-500",
    features: ["Custom Design", "Responsive Development", "SEO Optimization", "CMS Integration", "E-commerce", "Performance Optimization"],
    price: "Starting at $2,500",
    results: "Custom Solutions",
    popular: false,
  },
  {
    slug: "analytics",
    title: "Analytics",
    shortTitle: "Analytics",
    description: "Make data-driven decisions with comprehensive analytics and reporting.",
    icon: LineChart,
    color: "from-teal-500 to-cyan-500",
    features: ["GA4 Setup", "Conversion Tracking", "Custom Dashboards", "Data Visualization", "Attribution Modeling", "Monthly Reports"],
    price: "Starting at $299/mo",
    results: "Data-Driven Decisions",
    popular: false,
  }
];

const stats = [
  { value: "500+", label: "Projects Completed", icon: Award },
  { value: "98%", label: "Client Satisfaction", icon: Heart },
  { value: "50+", label: "Expert Team", icon: Users },
  { value: "24/7", label: "Support Available", icon: Clock },
];

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
    content: "The team's data-driven approach is revolutionary. Best investment we've made for our digital presence.",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, FashionHub",
    content: "Our e-commerce sales doubled after they optimized our product pages. Exceptional service and results!",
    rating: 5,
    avatar: "ER"
  }
];

export default function ServicesClient() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        {/* Simplified Background - Removed heavy animations for better performance */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A394E] via-[#2C727B] to-[#1A394E] opacity-95" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#2C727B]" />
            <span className="text-sm text-white/90 font-semibold">Premium Services</span>
          </div>

          {/* Hero Image */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/services-main.webp"
              width={800}
              height={420}
              priority
              fetchPriority="high"
              loading="eager"
              decoding="async"
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACwAQCdASoQAAwABkC4JZQCdAE2uBMAAOAAwCp8LAXmDAAA"
              alt="Digital marketing services including SEO, PPC, social media and content marketing by iCreatixPRO"
              className="rounded-xl shadow-lg w-full max-w-4xl h-auto"
              sizes="(max-width: 768px) 100vw, 1200px"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Visual Breadcrumb */}
          <div className="mb-4 text-white/60 text-sm">
            <span className="hover:text-white transition-colors">Home</span>
            <span className="mx-2">›</span>
            <span className="text-white">Services</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white">Digital Marketing</span>
            <span className="block bg-gradient-to-r from-[#2C727B] via-white to-[#2C727B] bg-clip-text text-transparent mt-2">
              Services
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Data-driven strategies that deliver measurable results. From SEO to paid ads,
            we help businesses grow their online presence and revenue.
          </p>

          {/* Jump Links */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <a href="#seo" className="px-3 py-1.5 bg-white/10 rounded-full text-white/80 text-sm hover:bg-white/20 transition-colors">
              SEO
            </a>
            <a href="#ppc" className="px-3 py-1.5 bg-white/10 rounded-full text-white/80 text-sm hover:bg-white/20 transition-colors">
              PPC
            </a>
            <a href="#social" className="px-3 py-1.5 bg-white/10 rounded-full text-white/80 text-sm hover:bg-white/20 transition-colors">
              Social Media
            </a>
            <a href="#content" className="px-3 py-1.5 bg-white/10 rounded-full text-white/80 text-sm hover:bg-white/20 transition-colors">
              Content
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16">
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
              const Icon = service.icon;
              return (
                <div
                  key={service.slug}
                  id={service.slug === "search-engine-optimization" ? "seo" : 
                      service.slug === "google-ads" ? "ppc" :
                      service.slug === "meta-ads" ? "social" :
                      service.slug === "content-marketing" ? "content" : ""}
                  className={`group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 ${
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
              );
            })}
          </div>
        </div>
      </section>

      {/* ✅ PROCESS SECTION - CORRECTLY PLACED HERE (After Services Grid, Before Why Choose Us) */}
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
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              A proven 5-step methodology that delivers measurable growth
            </p>
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
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
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

          <div className="grid md:grid-cols-3 gap-6">
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

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#2C727B]/5 via-white to-[#1A394E]/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E] mb-4">
            Frequently Asked <span className="text-[#2C727B]">Questions</span>
          </h2>
          <p className="text-gray-600 mb-12">Everything you need to know about our digital marketing services</p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-[#1A394E] mb-2">What digital marketing services do you offer?</h3>
                <p className="text-sm text-gray-600">We offer SEO, PPC, social media marketing, content marketing, email marketing, and analytics services.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-[#1A394E] mb-2">How much do your services cost?</h3>
                <p className="text-sm text-gray-600">SEO starts at $499/month, PPC at $599/month, content marketing at $399/month. Custom packages available.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-[#1A394E] mb-2">How long until I see results?</h3>
                <p className="text-sm text-gray-600">SEO: 3-6 months. PPC: Immediate. Content marketing: 4-8 months for momentum.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-[#1A394E] mb-2">Do you offer custom packages?</h3>
                <p className="text-sm text-gray-600">Yes! We create custom packages tailored to your specific business goals and budget.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-[#1A394E] mb-2">What industries do you specialize in?</h3>
                <p className="text-sm text-gray-600">E-commerce, healthcare, real estate, technology, professional services, legal, and retail.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-[#1A394E] mb-2">Do you provide monthly reports?</h3>
                <p className="text-sm text-gray-600">Yes, you'll receive detailed monthly reports with rankings, traffic, conversions, and ROI metrics.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-[#1A394E] mb-2">Can you help with local SEO?</h3>
                <p className="text-sm text-gray-600">Yes! We specialize in local SEO including Google Business Profile and local citations.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-[#1A394E] mb-2">What makes your SEO different?</h3>
                <p className="text-sm text-gray-600">Our data-driven approach combines technical SEO, content strategy, and authoritative link building.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#2C727B] to-[#1A394E] rounded-3xl p-10 text-center">
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
    </main>
  );
}