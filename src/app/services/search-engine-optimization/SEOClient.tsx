"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  Sparkles,
  Star,
  Home,
  BarChart3,
  Globe,
  ThumbsUp,
  Users,
  Shield,
  Heart,
  Target,
  ArrowRight,
  Award,
  TrendingUp,
  DollarSign,
  Search,
  Code,
  Server,
  Link2,
  MapPin,
  ShoppingBag,
  Eye,
  Activity,
  Calendar,
  UserCheck,
  BadgeCheck,
  ChevronRight,
} from "lucide-react";

// ===============================
// ✅ CONSTANTS
// ===============================
const CURRENT_YEAR = 2026;
const LAST_UPDATED = "April 2026";

// ===============================
// ✅ STATIC DATA
// ===============================
const stats = [
  { value: "15K+", label: "Keywords Ranked", icon: Target },
  { value: "300%", label: "Traffic Increase", icon: TrendingUp },
  { value: "45%", label: "Conversion Rate", icon: Activity },
  { value: "500%", label: "Avg. ROI", icon: DollarSign },
];

const servicesList = [
  { icon: Search, title: "Keyword Research", description: "Identify high-value keywords that drive qualified traffic and conversions.", features: ["Competitor Analysis", "Long-tail Keywords", "Search Intent Mapping", "Keyword Clustering", "Difficulty Scoring"], link: "/services/search-engine-optimization", ctaText: "Research keywords" },
  { icon: Code, title: "On-Page SEO", description: "Optimize your website structure and content for maximum visibility.", features: ["Meta Tags Optimization", "Header Structure", "Content Optimization", "Internal Linking", "Image Optimization"], link: "/services/search-engine-optimization", ctaText: "Optimize pages" },
  { icon: Server, title: "Technical SEO", description: "Ensure search engines can crawl, index, and understand your website.", features: ["Site Speed Optimization", "Mobile Optimization", "Schema Markup", "XML Sitemaps", "Robots.txt"], link: "/services/technical-seo", ctaText: "Fix technical issues" },
  { icon: Link2, title: "Link Building", description: "Build high-quality backlinks from authoritative websites in your niche.", features: ["Guest Posting", "Digital PR", "Broken Link Building", "Resource Page Links", "Competitor Backlinks"], link: "/services/search-engine-optimization", ctaText: "Build links" },
  { icon: MapPin, title: "Local SEO", description: "Dominate local search results and attract nearby customers.", features: ["Google Business Profile", "Local Citations", "Review Management", "Local Content", "Map Pack Optimization"], link: "/services/local-seo", ctaText: "Boost local SEO" },
  { icon: ShoppingBag, title: "E-commerce SEO", description: "Optimize your online store for product searches and conversions.", features: ["Product Page SEO", "Category Optimization", "Faceted Navigation", "Rich Snippets", "User Reviews"], link: "/services/ecommerce-seo", ctaText: "Boost ecommerce" },
];

const plans = [
  { title: "Starter SEO", price: "$999", features: ["10 Keywords Tracked", "On-Page Optimization", "Monthly Content (2 posts)", "Basic Link Building", "Monthly Reports"], isPopular: false },
  { title: "Professional SEO", price: "$1,999", features: ["30 Keywords Tracked", "Full On-Page SEO", "Monthly Content (5 posts)", "Advanced Link Building", "Technical SEO Audit", "Weekly Reports", "Priority Support"], isPopular: true },
  { title: "Enterprise SEO", price: "$3,999", features: ["Unlimited Keywords", "Comprehensive Optimization", "Custom Content Strategy", "Enterprise Link Building", "Full Technical SEO", "Real-time Dashboard", "Dedicated Account Manager"], isPopular: false },
];

const reasons = [
  { icon: Award, title: "Proven Track Record", desc: "100+ businesses ranked on page 1" },
  { icon: Users, title: "Expert SEO Team", desc: "Certified professionals with 10+ years experience" },
  { icon: Shield, title: "White Hat Techniques", desc: "100% Google-compliant strategies" },
  { icon: Heart, title: "Transparent Reporting", desc: "Real-time dashboards and monthly reports" },
];

const testimonialsData = [
  { name: "David Miller", role: "CEO, TechFlow", content: "Our organic traffic increased by 250% in just 6 months. The team's SEO expertise is unmatched!", rating: 5, result: "250% traffic increase" },
  { name: "Lisa Thompson", role: "Marketing Director", content: "Finally found an SEO agency that delivers results. We're now ranking #1 for our primary keywords.", rating: 5, result: "#1 rankings" },
  { name: "James Wilson", role: "Small Business Owner", content: "The ROI from their SEO services has been incredible. Best investment we've made for our business.", rating: 5, result: "500% ROI" },
];

const tools = [
  "SEMrush", "Ahrefs", "Moz Pro", "Screaming Frog", "Google Search Console",
  "Google Analytics", "Majestic", "BuzzSumo", "Surfer SEO", "Clearscope",
];

const faqs = [
  { q: "How long does SEO take to show results?", a: "While some improvements can be seen within 3-6 weeks, significant ranking improvements typically take 3-6 months. SEO is a long-term investment that compounds over time." },
  { q: "Do you guarantee #1 rankings?", a: "No ethical SEO agency can guarantee #1 rankings. However, we guarantee to use white-hat techniques and provide transparent reporting on our progress." },
  { q: "What industries do you specialize in?", a: "We work with businesses across e-commerce, healthcare, real estate, technology, legal, hospitality, and professional services." },
  { q: "Will you optimize my existing content?", a: "Yes! We'll audit and optimize your existing content as part of our on-page SEO services." },
  { q: "Do you provide monthly reports?", a: "Yes, you'll receive detailed monthly reports showing keyword rankings, traffic growth, conversions, and ROI metrics." },
  { q: "What's the difference between on-page and off-page SEO?", a: "On-page SEO optimizes your website content and structure. Off-page SEO builds authority through backlinks and external signals. Both are essential for ranking." },
  { q: "How much do SEO services cost?", a: "Our SEO packages start at $999/month for small businesses. Mid-size businesses typically invest $1,999-3,999/month for comprehensive SEO programs." },
  { q: "Do you offer local SEO services?", a: "Yes! We specialize in local SEO including Google Business Profile optimization, local citations, review management, and map pack rankings." },
];

// ===============================
// ✅ COMPONENTS
// ===============================

function SkipLink() {
  return (
    <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-[#1A394E] focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg">
      Skip to content
    </a>
  );
}

function StatCard({ stat }: { stat: typeof stats[0] }) {
  const Icon = stat.icon;
  return (
    <div className="bg-white rounded-xl p-4 md:p-6 text-center border border-gray-100 shadow-sm">
      <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 rounded-full bg-[#2C727B]/10 flex items-center justify-center">
        <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#2C727B]" />
      </div>
      <div className="text-2xl md:text-3xl font-bold text-[#1A394E]">{stat.value}</div>
      <div className="text-[10px] md:text-sm text-[#1A394E]/60 mt-1">{stat.label}</div>
    </div>
  );
}

function ServiceCard({ service }: { service: typeof servicesList[0] }) {
  const Icon = service.icon;
  return (
    <article className="bg-white rounded-2xl border border-gray-100 p-5 md:p-6 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
      </div>
      <h3 className="text-lg md:text-xl font-bold text-[#1A394E] mb-2">{service.title}</h3>
      <p className="text-[#1A394E]/60 text-sm leading-relaxed mb-4">{service.description}</p>
      <div className="space-y-2">
        {service.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-[#1A394E]/70">
            <CheckCircle className="w-4 h-4 text-[#2C727B] flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <Link href={service.link} className="text-[#2C727B] text-sm font-medium hover:underline inline-flex items-center gap-1">
          {service.ctaText} <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </article>
  );
}

function ReasonCard({ reason }: { reason: typeof reasons[0] }) {
  const Icon = reason.icon;
  return (
    <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100">
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#2C727B]/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 md:w-5 md:h-5 text-[#2C727B]" />
      </div>
      <div>
        <h3 className="font-semibold text-[#1A394E] text-sm md:text-base">{reason.title}</h3>
        <p className="text-xs md:text-sm text-[#1A394E]/60">{reason.desc}</p>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonialsData[0] }) {
  return (
    <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-100 shadow-sm">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-[#1A394E]/70 text-sm leading-relaxed mb-4">"{testimonial.content}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center text-white font-bold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-[#1A394E] text-sm">{testimonial.name}</div>
          <div className="text-xs text-[#1A394E]/50">{testimonial.role}</div>
          {testimonial.result && <div className="text-xs text-[#2C727B] font-medium mt-1">{testimonial.result}</div>}
        </div>
      </div>
    </div>
  );
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 md:mb-8">
      <div className="flex items-center gap-2 text-sm flex-wrap">
        <Link href="/" className="text-[#1A394E]/50 hover:text-[#2C727B] transition-colors flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <span className="text-[#1A394E]/30" aria-hidden="true">/</span>
        <Link href="/services" className="text-[#1A394E]/50 hover:text-[#2C727B] transition-colors">Services</Link>
        <span className="text-[#1A394E]/30" aria-hidden="true">/</span>
        <span className="text-[#2C727B] font-medium" aria-current="page">SEO</span>
      </div>
    </nav>
  );
}

function PricingCard({ plan }: { plan: typeof plans[0] }) {
  return (
    <div className={`relative bg-white rounded-2xl border p-6 shadow-sm hover:shadow-md transition-all ${plan.isPopular ? "border-[#2C727B] shadow-lg" : "border-gray-100"}`}>
      {plan.isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white text-xs font-medium">
          Most Popular
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-[#1A394E] mb-2">{plan.title}</h3>
        <div className="text-3xl font-bold text-[#1A394E]">{plan.price}</div>
        <p className="text-xs text-[#1A394E]/50 mt-1">per month</p>
      </div>
      <ul className="space-y-3 mb-6">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-[#1A394E]/70">
            <CheckCircle className="w-4 h-4 text-[#2C727B] flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <Link href="/contact" className="block w-full py-3 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white text-center font-semibold hover:shadow-lg transition-all">
        Get Started
      </Link>
    </div>
  );
}

function FAQItem({ faq, idx }: { faq: typeof faqs[0]; idx: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonId = `faq-button-${idx}`;
  const panelId = `faq-panel-${idx}`;

  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
      <button
        id={buttonId}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-5 font-semibold text-[#1A394E] flex items-center justify-between hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span>{faq.q}</span>
        <ChevronRight className={`w-5 h-5 text-[#2C727B] transition-transform ${isOpen ? "rotate-90" : ""}`} />
      </button>
      <div id={panelId} role="region" aria-labelledby={buttonId} className={`${isOpen ? "block" : "hidden"}`}>
        <div className="px-5 pb-5 pt-0 text-[#1A394E]/60 text-sm leading-relaxed">{faq.a}</div>
      </div>
    </div>
  );
}

function PricingPlansSection() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
      <h2 id="pricing-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Flexible SEO Pricing Plans
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        Choose the perfect SEO package for your business needs and budget
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, idx) => (
          <PricingCard key={idx} plan={plan} />
        ))}
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  return (
    <section aria-labelledby="why-heading" className="mb-12 md:mb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 id="why-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-4 md:mb-6">
            Why Choose Our SEO Services?
          </h2>
          <div className="space-y-3 md:space-y-4">
            {reasons.map((reason, idx) => (
              <ReasonCard key={idx} reason={reason} />
            ))}
          </div>
          <div className="mt-6 p-4 bg-teal-50 rounded-xl">
            <div className="flex items-center gap-3">
              <ThumbsUp className="w-6 h-6 md:w-8 md:h-8 text-[#2C727B]" />
              <div>
                <p className="font-semibold text-[#1A394E] text-sm md:text-base">Free SEO Audit</p>
                <p className="text-xs md:text-sm text-[#1A394E]/60">No commitment. 24-hour response.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#2C727B]/5 to-[#1A394E]/5 rounded-2xl p-6 md:p-8 border border-gray-100">
          <div className="text-center mb-4 md:mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">
              <Star className="w-3 h-3 fill-teal-700" />
              Client Success Stories
            </div>
          </div>
          <div className="space-y-3 md:space-y-4">
            {testimonialsData.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ToolsSection() {
  return (
    <section aria-labelledby="tools-heading" className="mb-12 md:mb-16 text-center">
      <h2 id="tools-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-3 md:mb-4">
        Enterprise SEO Tools We Use
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base mb-6 md:mb-8">Industry-leading platforms for maximum results</p>
      <div className="flex flex-wrap justify-center gap-3">
        {tools.map((tool, idx) => (
          <span key={idx} className="px-4 py-2 rounded-lg bg-white border border-gray-100 text-[#1A394E]/70 text-sm font-medium shadow-sm">
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="mb-12 md:mb-16">
      <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">Everything you need to know about our SEO services</p>
      <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} faq={faq} idx={idx} />
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { step: "01", title: "SEO Audit", desc: "Analysis & discovery", icon: Search },
    { step: "02", title: "Strategy", desc: "Keyword & content plan", icon: Target },
    { step: "03", title: "On-Page", desc: "Content & meta optimization", icon: Code },
    { step: "04", title: "Technical", desc: "Site speed & crawl fixes", icon: Server },
    { step: "05", title: "Link Building", desc: "Authority & backlinks", icon: Link2 },
    { step: "06", title: "Monitor", desc: "Track & optimize", icon: BarChart3 },
  ];

  return (
    <section id="process" aria-labelledby="process-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
      <h2 id="process-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Our SEO Process
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">A proven 6-step methodology that consistently delivers top rankings</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {steps.map((step, idx) => (
          <div key={idx} className="text-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] text-white font-bold flex items-center justify-center mx-auto mb-2">
              {step.step}
            </div>
            <h3 className="font-semibold text-[#1A394E] text-sm">{step.title}</h3>
            <p className="text-[10px] text-[#1A394E]/50">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TableOfContents() {
  const sections = [
    { id: "services", title: "Services" },
    { id: "process", title: "Process" },
    { id: "pricing", title: "Pricing" },
    { id: "faq", title: "FAQs" },
  ];

  return (
    <div className="mb-8 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100">
      <p className="text-sm font-semibold text-[#1A394E] mb-2 text-center">Table of Contents</p>
      <div className="flex flex-wrap justify-center gap-2">
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`} className="text-xs text-[#1A394E]/70 hover:text-[#2C727B] transition-colors px-2 py-1">
            {section.title}
          </a>
        ))}
      </div>
    </div>
  );
}

function EEATSection() {
  return (
    <section aria-labelledby="eeat-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center"><Calendar className="w-6 h-6 text-[#2C727B]" /></div>
          <div><p className="text-xs text-[#1A394E]/50">Last Updated</p><p className="font-semibold text-[#1A394E]">{LAST_UPDATED}</p></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center"><UserCheck className="w-6 h-6 text-[#2C727B]" /></div>
          <div><p className="text-xs text-[#1A394E]/50">Reviewed By</p><p className="font-semibold text-[#1A394E]">Michael Stewart, Head of SEO</p></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center"><BadgeCheck className="w-6 h-6 text-[#2C727B]" /></div>
          <div><p className="text-xs text-[#1A394E]/50">Certification</p><p className="font-semibold text-[#1A394E]">Google Partner</p></div>
        </div>
      </div>
      <div className="text-center pt-4 border-t border-gray-100">
        <p className="text-sm text-[#1A394E]/60">Our team specializes in SEO with proven results for 100+ businesses. We use only white-hat, Google-compliant techniques.</p>
      </div>
    </section>
  );
}

// ===============================
// ✅ MAIN CLIENT COMPONENT
// ===============================
export default function SEOClient() {
  return (
    <main id="main-content" role="main" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30 py-12 md:py-16 lg:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb />
        <TableOfContents />

        {/* Hero Section */}
        <section aria-labelledby="main-heading" className="text-center mb-12 md:mb-16">
          <div className="mb-6 md:mb-8 flex justify-center">
            <Image
              src="/seo-services.webp"
              width={800}
              height={420}
              priority
              fetchPriority="high"
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACwAQCdASoQAAwABkC4JZQCdAE2uBMAAOAAwCp8LAXmDAAA"
              alt="SEO services including keyword research, on-page optimization, technical SEO and link building by iCreatixPRO"
              className="rounded-xl shadow-lg w-full max-w-4xl h-auto"
              sizes="(max-width: 768px) 100vw, 1200px"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-[#1A394E]/60">
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> #1 SEO Agency 2026</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> 100+ Businesses Ranked</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> 15K+ Keywords Ranked</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> 500% Avg. ROI</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2C727B]/10 to-[#1A394E]/10 rounded-full px-3 py-1 md:px-4 md:py-2 mb-4 md:mb-6">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#2C727B]" />
            <span className="text-xs md:text-sm font-medium text-[#1A394E]">SEO Experts</span>
          </div>

          <h1 id="main-heading" className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#1A394E] to-[#2C727B] bg-clip-text text-transparent mb-4 md:mb-6">
            Dominate Search Rankings With Our SEO Services
          </h1>

          <p className="text-[#1A394E]/70 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Drive organic traffic, increase visibility, and grow your business with our data-driven SEO strategies that deliver measurable results.
          </p>

          <div className="mt-4 md:mt-6">
            <p className="text-[#1A394E]/70 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              At <strong className="text-[#2C727B]">iCreatixPRO</strong>, our SEO experts help businesses rank #1 on Google with white-hat strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-3 md:mt-4">
              <Link href="/services/local-seo" className="text-[#2C727B] hover:underline font-medium text-sm md:text-base">Local SEO →</Link>
              <Link href="/services/technical-seo" className="text-[#2C727B] hover:underline font-medium text-sm md:text-base">Technical SEO →</Link>
              <Link href="/services/ecommerce-seo" className="text-[#2C727B] hover:underline font-medium text-sm md:text-base">E-commerce SEO →</Link>
              <Link href="/blogs" className="text-[#2C727B] hover:underline font-medium text-sm md:text-base">SEO insights →</Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-6 md:mt-8">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm md:text-base">
              Get Free SEO Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/case-studies" className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/50 text-[#1A394E] font-semibold hover:bg-white/90 transition-all hover:scale-105 text-sm md:text-base">
              View Case Studies
            </Link>
          </div>
        </section>

        {/* Stats Section */}
        <section aria-label="Key metrics" className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </section>

        {/* Services Section */}
        <section id="services" aria-labelledby="services-heading" className="mb-12 md:mb-16">
          <h2 id="services-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
            Comprehensive SEO Services
          </h2>
          <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
            We offer end-to-end SEO solutions tailored to your business goals and industry
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {servicesList.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </section>

        {/* Process Section */}
        <ProcessSection />

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* Tools Section */}
        <ToolsSection />

        {/* Pricing Plans */}
        <PricingPlansSection />

        {/* EEAT Section */}
        <EEATSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Section */}
        <section aria-label="Call to action" className="text-center bg-gradient-to-r from-[#2C727B] to-[#1A394E] rounded-2xl p-6 md:p-12 text-white">
          <Target className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 opacity-50" />
          <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3">
            Ready to Rank #1 on Google?
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-4 md:mb-6 max-w-2xl mx-auto">
            Get a free SEO audit and discover exactly what it takes to dominate your market.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#1A394E] px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-white/90 transition-all hover:scale-105 text-sm md:text-base">
              Get Free SEO Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/case-studies" className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/50 text-white font-semibold hover:bg-white/30 transition-all hover:scale-105 text-sm md:text-base">
              View Case Studies
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/50 text-center">
          <p className="text-[10px] md:text-xs text-[#1A394E]/40">© {CURRENT_YEAR} iCreatixPRO. SEO specialists. Last updated {LAST_UPDATED}.</p>
        </footer>
      </div>
    </main>
  );
}