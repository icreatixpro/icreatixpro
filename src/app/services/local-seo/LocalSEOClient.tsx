"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  Sparkles,
  Search,
  Star,
  Home,
  BarChart3,
  Globe,
  ThumbsUp,
  Users,
  Shield,
  Heart,
  Eye,
  MapPin,
  Building,
  Navigation,
  Link2,
  Trophy,
  BadgeCheck,
  Store,
  Coffee,
  Utensils,
  Briefcase,
  Church,
  ChevronRight,
  Calendar,
  UserCheck,
  ArrowRight,
  Award,
  TrendingUp,
  Target,
  DollarSign,
  FileText,
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
  { value: "98%", label: "Map Pack Visibility", icon: MapPin },
  { value: "150%", label: "Local Traffic Increase", icon: Users },
  { value: "35%", label: "Walk-in Conversions", icon: Store },
  { value: "250+", label: "Local Citations", icon: Building },
];

// ✅ Business Types - TEXT ONLY (NO LINKS)
const businessTypes = [
  { name: "Cafes & Restaurants", icon: Coffee },
  { name: "Real Estate", icon: Home },
  { name: "Law Firms", icon: Briefcase },
  { name: "Healthcare", icon: Heart },
  { name: "Retail Stores", icon: Store },
  { name: "Professional Services", icon: Building },
  { name: "Hotels & Hospitality", icon: Utensils },
  { name: "Contractors", icon: Briefcase },
  { name: "Salons & Spas", icon: Heart },
  { name: "Auto Services", icon: Store },
  { name: "Dental Practices", icon: Building },
  { name: "Plumbers", icon: Briefcase },
];

// ✅ Services List - ALL LINKS TO EXISTING PAGES
const servicesList = [
  {
    icon: MapPin,
    title: "Google Business Profile",
    description: "Optimize your GBP for maximum visibility in local search results.",
    features: ["Profile Optimization", "Category Selection", "Photo Management", "Post Scheduling", "Insights Tracking"],
    link: "/services/search-engine-optimization",
    ctaText: "Optimize GBP",
  },
  {
    icon: Building,
    title: "Local Citations",
    description: "Build consistent NAP citations across authoritative local directories.",
    features: ["Directory Submission", "NAP Consistency", "Citation Audit", "Duplicate Removal", "Ongoing Monitoring"],
    link: "/services/search-engine-optimization",
    ctaText: "Build citations",
  },
  {
    icon: Star,
    title: "Review Management",
    description: "Generate positive reviews and manage your online reputation.",
    features: ["Review Generation", "Response Management", "Rating Monitoring", "Sentiment Analysis", "Review Widgets"],
    link: "/services/digital-marketing",
    ctaText: "Manage reviews",
  },
  {
    icon: Search,
    title: "Local Keyword Research",
    description: "Target high-intent local search queries that drive conversions.",
    features: ["Geo-targeted Keywords", "Local Intent Analysis", "Competitor Research", "Search Volume Data", "Keyword Tracking"],
    link: "/services/search-engine-optimization",
    ctaText: "Research keywords",
  },
  {
    icon: Navigation,
    title: "Local Content Strategy",
    description: "Create location-specific content that ranks and converts.",
    features: ["Location Pages", "City-specific Content", "Local Blog Posts", "Landing Page Optimization", "Local Schema"],
    link: "/services/content-marketing",
    ctaText: "Create content",
  },
  {
    icon: Link2,
    title: "Local Link Building",
    description: "Build high-quality local backlinks from relevant sources.",
    features: ["Local Directories", "Sponsorships", "Community Events", "Local Partnerships", "Chamber of Commerce"],
    link: "/services/search-engine-optimization",
    ctaText: "Build local links",
  },
];

const plans = [
  {
    title: "Starter Local",
    price: "$799",
    features: ["GBP Optimization", "50 Local Citations", "Monthly Review Management", "Basic Local Keyword Tracking", "Monthly Reports"],
    isPopular: false,
  },
  {
    title: "Professional Local",
    price: "$1,499",
    features: ["Full GBP Optimization", "150 Local Citations", "Advanced Review Management", "Local Content (2 posts)", "Local Link Building", "Weekly Reports", "Priority Support"],
    isPopular: true,
  },
  {
    title: "Enterprise Local",
    price: "$2,499",
    features: ["Multi-location GBP", "Unlimited Citations", "Full Reputation Management", "Custom Local Content", "Advanced Local Link Building", "Real-time Dashboard", "Dedicated Account Manager"],
    isPopular: false,
  },
];

const reasons = [
  { icon: Trophy, title: "Proven Local Results", desc: "100+ businesses ranked in Map Pack" },
  { icon: Users, title: "Local SEO Experts", desc: "Specialized in local search optimization" },
  { icon: Shield, title: "White Hat Techniques", desc: "Google-compliant strategies only" },
  { icon: Heart, title: "Transparent Reporting", desc: "Real-time local ranking dashboards" },
];

const testimonialsData = [
  {
    name: "Sarah Martinez",
    role: "Owner",
    location: "Austin, TX",
    content: "Our store visits increased by 200% after working with their local SEO team. We're now #1 in the map pack!",
    rating: 5,
  },
  {
    name: "Dr. James Wilson",
    role: "Dental Practice",
    location: "Portland, OR",
    content: "New patient appointments have doubled since they optimized our Google Business Profile. Amazing results!",
    rating: 5,
  },
  {
    name: "Michael Chang",
    role: "Restaurant Owner",
    location: "Chicago, IL",
    content: "We went from page 3 to the top 3 in map pack. Our phone hasn't stopped ringing since!",
    rating: 5,
  },
];

const faqs = [
  {
    q: "What is Local SEO and why do I need it?",
    a: "Local SEO helps your business appear in local search results when customers search for products or services 'near me'. 46% of all Google searches are local, making it essential for businesses with physical locations.",
  },
  {
    q: "How long does Local SEO take to show results?",
    a: "Local SEO typically shows initial improvements within 1-2 months, with significant results in 3-6 months. Google Business Profile optimizations can show faster results.",
  },
  {
    q: "Is local SEO worth it in 2026?",
    a: "Yes. With 46% of all Google searches being local, local SEO delivers one of the highest ROIs for businesses with physical locations or service areas.",
  },
  {
    q: "How does Google Map Pack ranking work?",
    a: "The Map Pack displays top 3 local businesses based on relevance, distance, and prominence. Factors include GBP optimization, reviews, citations, and local backlinks.",
  },
  {
    q: "How much does local SEO cost?",
    a: "Local SEO packages start at $799/month for starter plans. Professional plans with advanced features are $1,499/month. Enterprise multi-location plans start at $2,499/month.",
  },
  {
    q: "Can you help multi-location businesses?",
    a: "Yes. We specialize in multi-location local SEO, including location pages, GBP optimization for each location, and consistent citation management across all locations.",
  },
];

const caseStudies = [
  {
    business: "Downtown Bakery",
    before: "Page 4",
    after: "#1 in Map Pack",
    trafficIncrease: "+320%",
    callsIncrease: "+180%",
    industry: "Restaurant",
    proof: "GBP impressions grew from 450 to 1,890/month",
  },
  {
    business: "Elite Dental Care",
    before: "Not in Map Pack",
    after: "#2 in Map Pack",
    trafficIncrease: "+280%",
    callsIncrease: "+210%",
    industry: "Healthcare",
    proof: "From 0 to 45+ map pack appearances weekly",
  },
  {
    business: "Prime Realty",
    before: "Page 2",
    after: "#3 in Map Pack",
    trafficIncrease: "+195%",
    callsIncrease: "+150%",
    industry: "Real Estate",
    proof: "23% CTR from map pack in month 6",
  },
];

const rankingFactors = [
  { factor: "Google Business Profile Signals", weight: "35%", description: "Categories, attributes, photos, posts, offers" },
  { factor: "Proximity to Searcher", weight: "25%", description: "Physical distance from search location" },
  { factor: "Review Signals", weight: "15%", description: "Quantity, velocity, diversity, responses" },
  { factor: "Citation Signals", weight: "10%", description: "NAP consistency across authoritative directories" },
  { factor: "Local Backlinks", weight: "8%", description: "Links from local news, chambers, associations" },
  { factor: "Behavioral Signals", weight: "7%", description: "CTR, dwell time, direction requests" },
];

// ===============================
// ✅ COMPONENTS
// ===============================

function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-[#1A394E] focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
    >
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
          <div className="text-xs text-[#1A394E]/50">{testimonial.role} • {testimonial.location}</div>
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
        <Link href="/services" className="text-[#1A394E]/50 hover:text-[#2C727B] transition-colors">
          Services
        </Link>
        <span className="text-[#1A394E]/30" aria-hidden="true">/</span>
        <span className="text-[#2C727B] font-medium" aria-current="page">Local SEO</span>
      </div>
    </nav>
  );
}

// ✅ Business Type Card - TEXT ONLY (NO LINK)
function BusinessTypeCard({ business }: { business: typeof businessTypes[0] }) {
  const Icon = business.icon;
  return (
    <div className="flex flex-col items-center p-4 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-all">
      <Icon className="w-8 h-8 md:w-10 md:h-10 text-[#2C727B] mb-2" />
      <span className="text-xs md:text-sm font-medium text-[#1A394E] text-center">{business.name}</span>
    </div>
  );
}

function PricingCard({ plan }: { plan: typeof plans[0] }) {
  return (
    <div className={`relative bg-white rounded-2xl border p-6 shadow-sm hover:shadow-md transition-all ${
      plan.isPopular ? "border-[#2C727B] shadow-lg" : "border-gray-100"
    }`}>
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
      <Link
        href="/contact"
        className="block w-full py-3 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white text-center font-semibold hover:shadow-lg transition-all"
      >
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
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`${isOpen ? "block" : "hidden"}`}
      >
        <div className="px-5 pb-5 pt-0 text-[#1A394E]/60 text-sm leading-relaxed">
          {faq.a}
        </div>
      </div>
    </div>
  );
}

function PricingPlans() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="mb-12 md:mb-16">
      <h2 id="pricing-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Local SEO Pricing Plans
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        Flexible packages tailored to your local business needs and budget
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, idx) => (
          <PricingCard key={idx} plan={plan} />
        ))}
      </div>
    </section>
  );
}

// ✅ Business Types Section - TEXT ONLY (NO LINKS)
function BusinessTypesSection() {
  return (
    <section aria-labelledby="business-types-heading" className="mb-12 md:mb-16">
      <h2 id="business-types-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        We Help All Local Businesses
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        From restaurants to law firms, we've helped hundreds of local businesses dominate search
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
        {businessTypes.map((business, idx) => (
          <BusinessTypeCard key={idx} business={business} />
        ))}
      </div>
    </section>
  );
}

// ✅ Table of Contents Component
function TableOfContents() {
  const sections = [
    { id: "what-is-local-seo", title: "What Is Local SEO?" },
    { id: "ranking-factors", title: "Ranking Factors Study" },
    { id: "comparison", title: "Local SEO vs Google Ads" },
    { id: "services", title: "Services" },
    { id: "process", title: "Our Process" },
    { id: "case-studies", title: "Case Studies" },
    { id: "pricing", title: "Pricing" },
    { id: "faq", title: "FAQs" },
  ];

  return (
    <div className="mb-8 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100">
      <p className="text-sm font-semibold text-[#1A394E] mb-2 text-center">Table of Contents</p>
      <div className="flex flex-wrap justify-center gap-2">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="text-xs text-[#1A394E]/70 hover:text-[#2C727B] transition-colors px-2 py-1"
          >
            {section.title}
          </a>
        ))}
      </div>
    </div>
  );
}

function WhatIsLocalSEOSection() {
  return (
    <section id="what-is-local-seo" aria-labelledby="what-is-local-seo-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 id="what-is-local-seo-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-4">
          What Is Local SEO?
        </h2>
        <p className="what-is-local-seo-summary text-[#1A394E]/70 text-base md:text-lg leading-relaxed">
          Local SEO is the practice of optimizing your online presence to attract more customers from relevant local searches. 
          These searches take place on Google and other search engines, often with "near me" or city-specific keywords. 
          With 46% of all Google searches seeking local information, local SEO helps businesses appear in the coveted "Map Pack" 
        the top 3 local results displayed above organic listings.
        </p>
      </div>
    </section>
  );
}

// ✅ FIXED TABLE JSX - Proper closing tags
function RankingFactorsStudy() {
  return (
    <section id="ranking-factors" aria-labelledby="ranking-factors-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
      <h2 id="ranking-factors-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        2026 Local SEO Ranking Factors Study
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        Based on analysis of 100+ local businesses across 15 industries
      </p>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl border border-gray-100 shadow-sm">
          <thead className="bg-[#1A394E]/5">
            <tr>
              <th className="text-left p-4 font-semibold text-[#1A394E]">Ranking Factor</th>
              <th className="text-left p-4 font-semibold text-[#1A394E]">Weight</th>
              <th className="text-left p-4 font-semibold text-[#1A394E]">Key Elements</th>
            </tr>
          </thead>
          <tbody>
            {rankingFactors.map((factor, idx) => (
              <tr key={idx} className="border-t border-gray-100">
                <td className="p-4 text-[#1A394E]/80 font-medium">{factor.factor}</td>
                <td className="p-4">
                  <span className="inline-flex px-2 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">
                    {factor.weight}
                  </span>
                </td>
                <td className="p-4 text-[#1A394E]/60 text-sm">{factor.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
<div className="mt-6 bg-gradient-to-r from-[#1A394E] to-[#2C727B] rounded-xl p-6 text-center text-white">
  <h3 className="text-lg font-bold mb-2">Want the Complete Dataset?</h3>
  <p className="text-white/80 text-sm mb-4">
    Get our complete "2026 Local SEO Ranking Factors Study" including methodology, raw data, and industry-specific breakdowns.
  </p>
  <Link
    href="/contact"
    className="inline-flex items-center gap-2 bg-white text-[#1A394E] px-5 py-2 rounded-lg font-semibold hover:bg-white/90 transition-all text-sm"
  >
    <FileText className="w-4 h-4" />
    Request Free PDF Report
  </Link>
</div>
    </section>
  );
}

function LocalSEOvsGoogleAds() {
  return (
    <section id="comparison" aria-labelledby="comparison-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
      <h2 id="comparison-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Local SEO vs Google Ads: Which Is Right for You?
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/50 rounded-xl p-5">
          <h3 className="text-lg font-semibold text-[#1A394E] mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#2C727B]" />
            Local SEO (Organic)
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-sm"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> Sustainable, long-term visibility</li>
            <li className="flex items-center gap-2 text-sm"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> No ongoing ad spend costs</li>
            <li className="flex items-center gap-2 text-sm"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> Builds trust and authority</li>
            <li className="flex items-center gap-2 text-sm"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> 3-6 month timeline</li>
          </ul>
        </div>
        <div className="bg-white/50 rounded-xl p-5">
          <h3 className="text-lg font-semibold text-[#1A394E] mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#2C727B]" />
            Google Ads (PPC)
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-sm"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> Immediate visibility within hours</li>
            <li className="flex items-center gap-2 text-sm"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> Pay only for clicks</li>
            <li className="flex items-center gap-2 text-sm"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> Precise targeting options</li>
            <li className="flex items-center gap-2 text-sm"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> Stops when budget stops</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6">
        <p className="text-[#1A394E]/60 text-sm">
          <strong className="text-[#2C727B]">Our recommendation:</strong> Use both! Local SEO for sustainable growth, Google Ads for immediate leads.{' '}
          <Link href="/services/google-ads" className="text-[#2C727B] hover:underline">Explore Google Ads services →</Link>
        </p>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="mb-12 md:mb-16">
      <h2 id="services-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Comprehensive Local SEO Services
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        Everything you need to dominate local search results and attract nearby customers
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {servicesList.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { step: "01", title: "Local SEO Audit", desc: "Comprehensive analysis of your current local search presence and competitor landscape.", icon: Search },
    { step: "02", title: "Google Business Profile Optimization", desc: "Full optimization of your Google Business Profile for maximum visibility.", icon: MapPin },
    { step: "03", title: "Citation Building", desc: "Build and clean up citations across authoritative local directories.", icon: Building },
    { step: "04", title: "Review Management", desc: "Implement strategies to generate positive reviews and manage reputation.", icon: Star },
    { step: "05", title: "Local Content", desc: "Create location-specific content optimized for local search queries.", icon: Navigation },
    { step: "06", title: "Monitoring & Reporting", desc: "Track rankings, traffic, and conversions with detailed monthly reports.", icon: BarChart3 },
  ];

  return (
    <section id="process" aria-labelledby="process-heading" className="mb-12 md:mb-16">
      <h2 id="process-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Our Local SEO Process
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        A proven methodology that delivers top local rankings and increased foot traffic
      </p>
      <div className="max-w-3xl mx-auto">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center text-white font-bold text-lg">
                {step.step}
              </div>
              {idx < 5 && (
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-[#2C727B]/30 hidden md:block" />
              )}
            </div>
            <div className="flex-1 pb-8">
              <div className="flex items-center gap-3 mb-2">
                <step.icon className="w-5 h-5 text-[#2C727B]" />
                <h3 className="text-lg font-semibold text-[#1A394E]">{step.title}</h3>
              </div>
              <p className="text-[#1A394E]/60 text-sm leading-relaxed">{step.desc}</p>
            </div>
          </div>
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
            Why Choose Our Local SEO Services?
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
                <p className="font-semibold text-[#1A394E] text-sm md:text-base">Free Local SEO Audit</p>
                <p className="text-xs md:text-sm text-[#1A394E]/60">No commitment. 24-hour response.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#2C727B]/5 to-[#1A394E]/5 rounded-2xl p-6 md:p-8 border border-gray-100">
          <div className="text-center mb-4 md:mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">
              <Star className="w-3 h-3 fill-teal-700" />
              Local Business Success Stories
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

function WhySwitchSection() {
  return (
    <section aria-labelledby="switch-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
      <h2 id="switch-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Why Businesses Switch to iCreatixPRO
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        What our clients say about switching from other agencies
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white/50 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-[#2C727B] mb-1">"Ranked in 45 days"</div>
          <p className="text-sm text-[#1A394E]/60">"Previous agency promised results in 6 months. iCreatixPRO got us in Map Pack within 6 weeks."</p>
          <p className="text-xs text-[#1A394E]/40 mt-2">— Dr. Sarah Chen, Dental Practice</p>
        </div>
        <div className="bg-white/50 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-[#2C727B] mb-1">"Saved $2k/month"</div>
          <p className="text-sm text-[#1A394E]/60">"Our old agency charged $3k/month with no transparency. iCreatixPRO delivers better results for less."</p>
          <p className="text-xs text-[#1A394E]/40 mt-2">— Mark Thompson, Real Estate</p>
        </div>
        <div className="bg-white/50 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-[#2C727B] mb-1">"Tripled calls in 90 days"</div>
          <p className="text-sm text-[#1A394E]/60">"Switched after 8 months of no results. Our phone hasn't stopped ringing since."</p>
          <p className="text-xs text-[#1A394E]/40 mt-2">— Lisa Rodriguez, Law Firm</p>
        </div>
      </div>
    </section>
  );
}

function ROICalculator() {
  const [monthlyVisitors, setMonthlyVisitors] = useState(500);
  const [conversionRate, setConversionRate] = useState(2);
  const [avgOrderValue, setAvgOrderValue] = useState(100);

  const estimatedLeads = Math.round(monthlyVisitors * (conversionRate / 100));
  const estimatedRevenue = estimatedLeads * avgOrderValue;
  const yearlyRevenue = estimatedRevenue * 12;

  return (
    <section aria-labelledby="roi-calculator-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
      <h2 id="roi-calculator-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Local SEO ROI Calculator
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        Estimate your potential return on investment from local SEO
      </p>

      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#1A394E] mb-2">
            Monthly Local Search Visitors: {monthlyVisitors.toLocaleString()}
          </label>
          <input
            type="range"
            min="0"
            max="5000"
            step="100"
            value={monthlyVisitors}
            onChange={(e) => setMonthlyVisitors(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2C727B]"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-[#1A394E] mb-2">
            Conversion Rate: {conversionRate}%
          </label>
          <input
            type="range"
            min="0"
            max="10"
            step="0.5"
            value={conversionRate}
            onChange={(e) => setConversionRate(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2C727B]"
          />
          <p className="text-xs text-[#1A394E]/50 mt-1">Industry average: 2-4% for local SEO</p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-[#1A394E] mb-2">
            Average Order Value: ${avgOrderValue}
          </label>
          <input
            type="range"
            min="0"
            max="500"
            step="25"
            value={avgOrderValue}
            onChange={(e) => setAvgOrderValue(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2C727B]"
          />
        </div>

        <div className="bg-teal-50 rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-[#1A394E] mb-2">Your Estimated Local SEO ROI</h3>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <p className="text-xs text-[#1A394E]/50">Monthly Leads</p>
              <p className="text-2xl font-bold text-[#2C727B]">{estimatedLeads}</p>
            </div>
            <div>
              <p className="text-xs text-[#1A394E]/50">Monthly Revenue</p>
              <p className="text-2xl font-bold text-[#2C727B]">${estimatedRevenue.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs text-[#1A394E]/50">Yearly Revenue</p>
              <p className="text-2xl font-bold text-[#2C727B]">${yearlyRevenue.toLocaleString()}</p>
            </div>
          </div>
          <p className="text-xs text-[#1A394E]/60">
            *Based on estimated local SEO results. Actual results may vary by industry and competition.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-4 px-6 py-2 rounded-lg bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white text-sm font-semibold hover:shadow-md transition-all"
          >
            Get Custom ROI Analysis
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CaseStudiesSection() {
  return (
    <section id="case-studies" aria-labelledby="case-studies-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
      <h2 id="case-studies-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Real Local SEO Results
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        See how we've helped businesses rank in Google's Map Pack and drive more customers
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        {caseStudies.map((study, idx) => (
          <div key={idx} className="bg-white/50 rounded-xl p-5 text-center">
            <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-[#2C727B]" />
            </div>
            <h3 className="font-semibold text-[#1A394E]">{study.business}</h3>
            <p className="text-xs text-[#1A394E]/50 mb-3">{study.industry}</p>
            <div className="flex justify-center gap-4 mb-3 text-sm">
              <div>
                <span className="text-[#1A394E]/40 text-xs">Before</span>
                <p className="font-bold text-red-500">{study.before}</p>
              </div>
              <div>
                <span className="text-[#1A394E]/40 text-xs">After</span>
                <p className="font-bold text-green-600">{study.after}</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2 text-xs mb-2">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">{study.trafficIncrease} Traffic</span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">{study.callsIncrease} Calls</span>
            </div>
            <p className="text-xs text-[#1A394E]/60 mt-2 italic">"{study.proof}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CostBreakdownSection() {
  return (
    <section aria-labelledby="cost-heading" className="mb-12 md:mb-16">
      <h2 id="cost-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        How Much Does Local SEO Cost?
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        Understanding local SEO pricing factors and investment options
      </p>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
          <h3 className="text-xl font-semibold text-[#1A394E] mb-4">What Affects Local SEO Cost?</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start gap-3">
              <Target className="w-5 h-5 text-[#2C727B] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-[#1A394E]">Competition Level</h4>
                <p className="text-sm text-[#1A394E]/60">High-competition cities cost more than small towns</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Building className="w-5 h-5 text-[#2C727B] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-[#1A394E]">Number of Locations</h4>
                <p className="text-sm text-[#1A394E]/60">Multi-location businesses require more work</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Star className="w-5 h-5 text-[#2C727B] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-[#1A394E]">Service Area Size</h4>
                <p className="text-sm text-[#1A394E]/60">City-wide vs nationwide coverage needs</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <BarChart3 className="w-5 h-5 text-[#2C727B] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-[#1A394E]">Current SEO State</h4>
                <p className="text-sm text-[#1A394E]/60">Existing issues require more initial work</p>
              </div>
            </div>
          </div>
          <div className="bg-teal-50 rounded-xl p-4">
            <p className="text-sm text-[#1A394E]/70">
              <strong className="text-[#2C727B]">ROI Example:</strong> A local business spending <strong>$1,499/month</strong> on local SEO typically sees:
              150-300% increase in map pack impressions → 2-3x more calls → 5-10x ROI within 12 months.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AuthorEntitySection() {
  return (
    <section aria-labelledby="author-heading" className="mb-12 md:mb-16">
      <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
            MS
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 id="author-heading" className="text-xl font-bold text-[#1A394E] mb-1">Michael Stewart</h3>
            <p className="text-sm text-[#2C727B] font-medium mb-2">Head of Local SEO | 12+ Years Experience</p>
            <p className="text-sm text-[#1A394E]/60 mb-3">
              Michael has been optimizing local search performance since 2014. He's helped 100+ businesses achieve top 3 Map Pack rankings,
              holds Google certifications in Local SEO, and speaks at industry conferences about local search trends.
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="inline-flex items-center gap-1 text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
                <BadgeCheck className="w-3 h-3" /> Google Certified
              </span>
              <span className="inline-flex items-center gap-1 text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
                <Award className="w-3 h-3" /> Local SEO Specialist
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100 text-center">
          <p className="text-xs text-[#1A394E]/40">
            Fact-checked and reviewed for accuracy by our editorial team. Last updated {LAST_UPDATED}.
          </p>
        </div>
      </div>
    </section>
  );
}

function EEATSection() {
  return (
    <section aria-labelledby="eeat-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center">
            <Calendar className="w-6 h-6 text-[#2C727B]" />
          </div>
          <div>
            <p className="text-xs text-[#1A394E]/50">Last Updated</p>
            <p className="font-semibold text-[#1A394E]">{LAST_UPDATED}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center">
            <UserCheck className="w-6 h-6 text-[#2C727B]" />
          </div>
          <div>
            <p className="text-xs text-[#1A394E]/50">Reviewed By</p>
            <p className="font-semibold text-[#1A394E]">Michael Stewart, Head of Local SEO</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center">
            <BadgeCheck className="w-6 h-6 text-[#2C727B]" />
          </div>
          <div>
            <p className="text-xs text-[#1A394E]/50">Certification</p>
            <p className="font-semibold text-[#1A394E]">Google Partner</p>
          </div>
        </div>
      </div>
      <div className="text-center pt-4 border-t border-gray-100">
        <p className="text-sm text-[#1A394E]/60">
          Our team specializes in local search optimization with proven results for 100+ local businesses.
          We use only Google-compliant, white-hat local SEO techniques.
        </p>
      </div>
    </section>
  );
}

function LocalPackPreview() {
  return (
    <section aria-labelledby="local-pack-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 id="local-pack-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-4">
            Rank in Google's Local Pack
          </h2>
          <p className="text-[#1A394E]/60 mb-6">
            The Local Pack (map pack) appears at the top of Google search results and captures 
            44% of all local search clicks. Our strategies help you secure these prime positions.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-sm text-[#1A394E]/70">
              <BadgeCheck className="w-5 h-5 text-[#2C727B]" />
              Appear in top 3 local results
            </li>
            <li className="flex items-center gap-3 text-sm text-[#1A394E]/70">
              <BadgeCheck className="w-5 h-5 text-[#2C727B]" />
              Drive more phone calls and directions
            </li>
            <li className="flex items-center gap-3 text-sm text-[#1A394E]/70">
              <BadgeCheck className="w-5 h-5 text-[#2C727B]" />
              Increase foot traffic to your location
            </li>
            <li className="flex items-center gap-3 text-sm text-[#1A394E]/70">
              <BadgeCheck className="w-5 h-5 text-[#2C727B]" />
              Dominate local search results
            </li>
          </ul>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-6 shadow-lg">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
            <Globe className="w-5 h-5 text-[#2C727B]" />
            <span className="text-sm font-medium text-[#1A394E]">Google Local Pack Preview</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-teal-50/50 border border-teal-100">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center">
                <span className="text-white font-bold text-xs">#1</span>
              </div>
              <div>
                <div className="font-semibold text-[#1A394E] text-sm">Your Business Name</div>
                <div className="flex items-center gap-2 text-xs text-[#1A394E]/60">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span>4.9 (128 reviews)</span>
                  <span>•</span>
                  <span>Open until 9PM</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 font-bold text-xs">#2</span>
              </div>
              <div>
                <div className="font-semibold text-[#1A394E]/70 text-sm">Competitor A</div>
                <div className="flex items-center gap-2 text-xs text-[#1A394E]/40">
                  <Star className="w-3 h-3 fill-gray-300 text-gray-300" />
                  <span>4.2 (45 reviews)</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 font-bold text-xs">#3</span>
              </div>
              <div>
                <div className="font-semibold text-[#1A394E]/70 text-sm">Competitor B</div>
                <div className="flex items-center gap-2 text-xs text-[#1A394E]/40">
                  <Star className="w-3 h-3 fill-gray-300 text-gray-300" />
                  <span>4.0 (32 reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===============================
// ✅ MAIN CLIENT COMPONENT
// ===============================
export default function LocalSEOClient() {
  return (
    <main id="main-content" role="main" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30 py-12 md:py-16 lg:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb />

        <TableOfContents />

        {/* Hero Section */}
        <section aria-labelledby="main-heading" className="text-center mb-12 md:mb-16">
          <div className="mb-6 md:mb-8 flex justify-center">
            <Image
              src="/local-seo-services.webp"
              width={800}
              height={420}
              priority
              fetchPriority="high"
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACwAQCdASoQAAwABkC4JZQCdAE2uBMAAOAAwCp8LAXmDAAA"
              alt="Local SEO services including Google Business Profile optimization, local citations, review management and map pack optimization by iCreatixPRO"
              className="rounded-xl shadow-lg w-full max-w-4xl h-auto"
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-[#1A394E]/60">
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> Google Partner</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> 100+ Businesses Ranked</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> 250+ Local Citations</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> 4.9 Rating</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2C727B]/10 to-[#1A394E]/10 rounded-full px-3 py-1 md:px-4 md:py-2 mb-4 md:mb-6">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#2C727B]" />
            <span className="text-xs md:text-sm font-medium text-[#1A394E]">Local Search Experts</span>
          </div>

          <h1 id="main-heading" className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#1A394E] to-[#2C727B] bg-clip-text text-transparent mb-4 md:mb-6">
            Local SEO Services to Rank Higher in Google Maps
          </h1>

          <p className="text-[#1A394E]/70 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Get found by customers in your area with our proven local SEO strategies. 
            Rank in Google's Map Pack and drive foot traffic to your business.
          </p>

          <div className="mt-4 md:mt-6">
            <p className="text-[#1A394E]/70 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              At <strong className="text-[#2C727B]">iCreatixPRO</strong>, our local SEO experts help businesses dominate nearby search results.
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-3 md:mt-4">
              <Link href="/services/search-engine-optimization" className="text-[#2C727B] hover:underline font-medium text-sm md:text-base">
                SEO services →
              </Link>
              <Link href="/blogs" className="text-[#2C727B] hover:underline font-medium text-sm md:text-base">
                Local SEO insights →
              </Link>
              <Link href="/services/digital-marketing" className="text-[#2C727B] hover:underline font-medium text-sm md:text-base">
                Digital marketing →
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-6 md:mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm md:text-base"
            >
              Get Free Local SEO Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/50 text-[#1A394E] font-semibold hover:bg-white/90 transition-all hover:scale-105 text-sm md:text-base"
            >
              View Success Stories
            </Link>
          </div>
        </section>

        <WhatIsLocalSEOSection />

        <section aria-label="Key metrics" className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </section>

        <RankingFactorsStudy />

        <LocalSEOvsGoogleAds />

        <BusinessTypesSection />

        <ServicesSection />

        <ProcessSection />

        <WhyChooseUsSection />

        <WhySwitchSection />

        <ROICalculator />

        <CaseStudiesSection />

        <CostBreakdownSection />

        <PricingPlans />

        <AuthorEntitySection />

        <LocalPackPreview />

        <EEATSection />

        <section id="faq" aria-labelledby="faq-heading" className="mb-12 md:mb-16">
          <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
            Local SEO FAQs
          </h2>
          <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
            Everything you need to know about local SEO services
          </p>
          <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} faq={faq} idx={idx} />
            ))}
          </div>
        </section>

        <section aria-label="Call to action" className="text-center bg-gradient-to-r from-[#2C727B] to-[#1A394E] rounded-2xl p-6 md:p-12 text-white">
          <MapPin className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 opacity-50" />
          <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3">
            Ready to Dominate Local Search?
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-4 md:mb-6 max-w-2xl mx-auto">
            Get a free local SEO audit and discover exactly how to attract more nearby customers to your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#1A394E] px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-white/90 transition-all hover:scale-105 text-sm md:text-base"
            >
              Get Free Local SEO Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/50 text-white font-semibold hover:bg-white/30 transition-all hover:scale-105 text-sm md:text-base"
            >
              View Local Success Stories
            </Link>
          </div>
        </section>

        <footer className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/50 text-center">
          <p className="text-[10px] md:text-xs text-[#1A394E]/40">
            © {CURRENT_YEAR} iCreatixPRO. Local SEO specialists.
          </p>
        </footer>
      </div>
    </main>
  );
}