"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  TrendingUp,
  Target,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Award,
  Search,
  Star,
  Home,
  BarChart3,
  Globe,
  DollarSign,
  ThumbsUp,
  Rocket,
  Users,
  Shield,
  Heart,
  Eye,
  ShoppingBag,
  Smartphone,
  MapPin,
  Phone,
  Sliders,
  Activity,
  FileText,
  Play,
  ChevronRight,
  Calendar,
  UserCheck,
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
  { value: "400%", label: "Avg. ROI", icon: TrendingUp },
  { value: "250+", label: "Active Accounts", icon: Users },
  { value: "8.5%", label: "Avg. CTR", icon: Eye },
  { value: "4.9", label: "Client Rating", icon: Star },
];

const adPlatforms = [
  { name: "Search Ads", icon: Search, description: "Intent-driven traffic" },
  { name: "Display Ads", icon: Eye, description: "Visual banner ads" },
  { name: "Shopping Ads", icon: ShoppingBag, description: "Product listings" },
  { name: "YouTube Ads", icon: Play, description: "Video advertising" },
  { name: "Performance Max", icon: Rocket, description: "AI-powered" },
  { name: "Local Ads", icon: MapPin, description: "Store visits" },
  { name: "App Ads", icon: Smartphone, description: "App promotion" },
  { name: "Call Ads", icon: Phone, description: "Phone campaigns" },
];

const industriesList = [
  "E-commerce", "Healthcare", "Real Estate", "Technology",
  "Professional Services", "Education", "Travel & Hospitality",
  "Automotive", "Legal Services", "Home Services",
];

const servicesList = [
  {
    icon: Search,
    title: "Keyword Research",
    description: "Find high-intent keywords that drive qualified traffic and conversions.",
    features: ["Competitor Analysis", "Negative Keywords", "Long-tail Research", "Search Intent Mapping"],
    link: "/services/search-engine-optimization",
    ctaText: "Research keywords",
  },
  {
    icon: FileText,
    title: "Ad Copy Creation",
    description: "Compelling ad copy that stands out and drives clicks.",
    features: ["Headline Testing", "Description Optimization", "CTA Optimization", "Ad Extensions"],
    link: "/services/digital-marketing",
    ctaText: "Create ad copy",
  },
  {
    icon: Target,
    title: "Audience Targeting",
    description: "Reach the right people with precision targeting.",
    features: ["Demographic Targeting", "Custom Audiences", "Remarketing Lists", "In-Market Segments"],
    link: "/services/digital-marketing",
    ctaText: "Target audiences",
  },
  {
    icon: Sliders,
    title: "Bid Management",
    description: "Optimize bids to maximize ROI and achieve goals.",
    features: ["Smart Bidding", "CPA Targeting", "ROAS Optimization", "Budget Allocation"],
    link: "/services/analytics",
    ctaText: "Optimize bids",
  },
  {
    icon: Activity,
    title: "A/B Testing",
    description: "Continuous testing to improve campaign performance.",
    features: ["Ad Copy Tests", "Landing Page Tests", "Bid Strategy Tests", "Audience Tests"],
    link: "/services/analytics",
    ctaText: "Test campaigns",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Data-driven insights and transparent reporting.",
    features: ["Custom Dashboards", "Conversion Tracking", "ROI Analysis", "Monthly Reports"],
    link: "/services/analytics",
    ctaText: "Track performance",
  },
];

const plans = [
  {
    title: "Starter PPC",
    price: "$999",
    features: ["Up to $10K Ad Spend", "Campaign Setup", "Keyword Research", "Monthly Optimization", "Monthly Reports"],
    isPopular: false,
  },
  {
    title: "Professional PPC",
    price: "$1,999",
    features: ["Up to $50K Ad Spend", "Full Campaign Management", "Advanced Keyword Research", "Weekly Optimization", "A/B Testing", "Conversion Tracking"],
    isPopular: true,
  },
  {
    title: "Enterprise PPC",
    price: "Custom",
    features: ["Unlimited Ad Spend", "Dedicated Account Manager", "Custom Strategy", "Daily Optimization", "Advanced Analytics", "24/7 Support"],
    isPopular: false,
  },
];

const reasons = [
  { icon: Award, title: "Google Premier Partner", desc: "Certified Google Partner with exclusive access" },
  { icon: Users, title: "Certified Experts", desc: "Google Ads certified professionals" },
  { icon: Shield, title: "Transparent Reporting", desc: "Real-time access to campaign data" },
  { icon: Heart, title: "No Long-term Contracts", desc: "Flexible month-to-month agreements" },
];

const partnerStats = [
  { value: "$50M+", label: "Ad Spend Managed" },
  { value: "2.5M+", label: "Conversions Generated" },
  { value: "35%", label: "Average CTR" },
  { value: "24/7", label: "Campaign Monitoring" },
];

const testimonialsData = [
  {
    name: "Robert Chen",
    role: "E-commerce Director",
    content: "Our ROAS increased by 300% in just 3 months. The team's expertise in Google Shopping ads is unmatched!",
    rating: 5,
    result: "300% ROAS increase",
  },
  {
    name: "Jennifer Williams",
    role: "Marketing Director",
    content: "They reduced our cost per lead by 65% while doubling conversion volume. Best PPC agency we've worked with.",
    rating: 5,
    result: "65% lower CPA",
  },
  {
    name: "David Kim",
    role: "Small Business Owner",
    content: "Finally a PPC agency that actually cares about ROI. Our revenue from Google Ads has tripled.",
    rating: 5,
    result: "200% revenue growth",
  },
];

const faqs = [
  {
    q: "How much should I spend on Google Ads?",
    a: "Budget requirements vary by industry and competition. We typically recommend starting with $1,500-3,000/month for effective testing and optimization. Our team will help you determine the optimal budget for your goals.",
  },
  {
    q: "Is Google Ads worth it in 2026?",
    a: "Yes, Google Ads remains one of the most effective digital advertising platforms. With 85% of consumers using Google to research products, Google Ads provides immediate access to high-intent buyers.",
  },
  {
    q: "What does a PPC agency do?",
    a: "A PPC agency manages your Google Ads campaigns including keyword research, ad creation, bid management, A/B testing, conversion tracking, and ongoing optimization to maximize your ROI.",
  },
  {
    q: "How long until Google Ads are profitable?",
    a: "Initial results appear within the first week, but meaningful optimization typically takes 30-60 days. Our clients average 400%+ ROI after 90 days of strategic management.",
  },
  {
    q: "What industries benefit most from PPC?",
    a: "E-commerce, healthcare, real estate, legal services, home services, technology, and professional services see the strongest returns from Google Ads when properly optimized.",
  },
  {
    q: "How much does Google Ads management cost?",
    a: "Our Google Ads management fees start at $999/month for starter packages. Professional management with advanced optimization is $1,999/month. Enterprise solutions are custom-priced.",
  },
];

const googleAdsMistakes = [
  "Not using negative keywords",
  "Sending traffic to homepage instead of dedicated landing pages",
  "Ignoring keyword match types (broad vs phrase vs exact)",
  "No A/B testing on ad copy and extensions",
  "Poor conversion tracking setup leading to inaccurate data",
];

const caseStudies = [
  {
    industry: "E-commerce",
    result: "ROAS increased by 350% in 6 months",
    metric: "Shopping campaign optimization",
  },
  {
    industry: "Healthcare",
    result: "Cost per lead reduced by 65%",
    metric: "Search & display retargeting",
  },
  {
    industry: "Real Estate",
    result: "Leads increased by 280%",
    metric: "Local service ads + search",
  },
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
          <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
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
          {testimonial.result && (
            <div className="text-xs text-[#2C727B] font-medium mt-1">{testimonial.result}</div>
          )}
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
        <span className="text-[#2C727B] font-medium" aria-current="page">Google Ads</span>
      </div>
    </nav>
  );
}

function AdPlatformCard({ platform }: { platform: typeof adPlatforms[0] }) {
  const Icon = platform.icon;
  return (
    <div className="flex flex-col items-center p-4 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-all">
      <Icon className="w-8 h-8 md:w-10 md:h-10 text-[#2C727B] mb-2" />
      <span className="text-sm font-medium text-[#1A394E] text-center">{platform.name}</span>
      <p className="text-xs text-[#1A394E]/50 text-center mt-1">{platform.description}</p>
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
        {plan.price !== "Custom" && <p className="text-xs text-[#1A394E]/50 mt-1">+ ad spend</p>}
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
    <section aria-labelledby="pricing-heading" className="mb-12 md:mb-16">
      <h2 id="pricing-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Flexible PPC Management Plans
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        Choose the plan that fits your business goals and budget
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, idx) => (
          <PricingCard key={idx} plan={plan} />
        ))}
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section aria-labelledby="industries-heading" className="mb-12 md:mb-16">
      <h2 id="industries-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Industries We Serve
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        Google Ads management tailored to your specific industry
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {industriesList.map((industry) => (
          <span
            key={industry}
            className="px-4 py-2 rounded-lg bg-white border border-gray-100 text-[#1A394E] text-sm font-medium shadow-sm"
          >
            {industry}
          </span>
        ))}
      </div>
    </section>
  );
}

function PerformanceMaxSection() {
  return (
    <section aria-labelledby="pmax-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
      <h2 id="pmax-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Google Performance Max Campaigns
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        AI-powered campaigns that optimize across all Google inventory for maximum conversions
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white/50 rounded-xl p-4 text-center">
          <Rocket className="w-8 h-8 text-[#2C727B] mx-auto mb-2" />
          <h3 className="font-semibold text-[#1A394E]">Multi-Channel Reach</h3>
          <p className="text-xs text-[#1A394E]/50">Search, Display, YouTube, Discover, Gmail, Maps</p>
        </div>
        <div className="bg-white/50 rounded-xl p-4 text-center">
          <Target className="w-8 h-8 text-[#2C727B] mx-auto mb-2" />
          <h3 className="font-semibold text-[#1A394E]">AI-Powered Optimization</h3>
          <p className="text-xs text-[#1A394E]/50">Real-time bidding and creative optimization</p>
        </div>
        <div className="bg-white/50 rounded-xl p-4 text-center">
          <BarChart3 className="w-8 h-8 text-[#2C727B] mx-auto mb-2" />
          <h3 className="font-semibold text-[#1A394E]">Goal-Based Bidding</h3>
          <p className="text-xs text-[#1A394E]/50">Maximize conversions or conversion value</p>
        </div>
      </div>
    </section>
  );
}

// ✅ Professional mistakes section (NO emojis)
function GoogleAdsMistakesSection() {
  return (
    <section aria-labelledby="mistakes-heading" className="mb-12 md:mb-16">
      <h2 id="mistakes-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Common Google Ads Mistakes to Avoid
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        Avoid these costly mistakes that waste ad budget and reduce ROAS
      </p>
      <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {googleAdsMistakes.map((mistake, idx) => (
          <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-white/50 border border-gray-100">
            <div className="w-5 h-5 rounded-full bg-[#1A394E]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2 h-2 rounded-full bg-[#1A394E]" />
            </div>
            <span className="text-sm text-[#1A394E]/70">{mistake}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function MiniCaseStudiesSection() {
  return (
    <section aria-labelledby="case-studies-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
      <h2 id="case-studies-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Real Client Results
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        See how we've helped businesses like yours succeed with Google Ads
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        {caseStudies.map((study, idx) => (
          <div key={idx} className="bg-white/50 rounded-xl p-4 text-center">
            <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-[#2C727B]" />
            </div>
            <h3 className="font-semibold text-[#1A394E]">{study.industry}</h3>
            <p className="text-sm font-bold text-[#2C727B] mt-1">{study.result}</p>
            <p className="text-xs text-[#1A394E]/50 mt-1">{study.metric}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function GoogleAdsVsSEOSection() {
  return (
    <section aria-labelledby="comparison-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
      <h2 id="comparison-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Google Ads vs SEO: Strategic Comparison
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        Both strategies have unique advantages. Here's when to use each:
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/50 rounded-xl p-5">
          <h3 className="text-lg font-semibold text-[#1A394E] mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#2C727B]" />
            Google Ads (PPC)
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-sm text-[#1A394E]/70"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> Immediate traffic (hours, not months)</li>
            <li className="flex items-center gap-2 text-sm text-[#1A394E]/70"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> Pay only for clicks (cost-effective)</li>
            <li className="flex items-center gap-2 text-sm text-[#1A394E]/70"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> Perfect for product launches and promotions</li>
          </ul>
        </div>
        <div className="bg-white/50 rounded-xl p-5">
          <h3 className="text-lg font-semibold text-[#1A394E] mb-3 flex items-center gap-2">
            <Search className="w-5 h-5 text-[#2C727B]" />
            SEO (Organic)
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-sm text-[#1A394E]/70"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> Sustainable, long-term growth</li>
            <li className="flex items-center gap-2 text-sm text-[#1A394E]/70"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> Higher trust and credibility</li>
            <li className="flex items-center gap-2 text-sm text-[#1A394E]/70"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> No ongoing ad spend costs</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6">
        <p className="text-[#1A394E]/60 text-sm">
          <strong className="text-[#2C727B]">Recommended Strategy:</strong> Use both channels together. PPC for immediate lead generation, SEO for long-term organic presence.{' '}
          <Link href="/services/search-engine-optimization" className="text-[#2C727B] hover:underline">
            Learn about our SEO services →
          </Link>
        </p>
      </div>
    </section>
  );
}

function WhyGoogleAdsSection() {
  return (
    <section aria-labelledby="why-invest-heading" className="mb-12 md:mb-16">
      <div className="text-center mb-6 md:mb-8">
        <h2 id="why-invest-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-3 md:mb-4">
          Why Invest in Google Ads?
        </h2>
        <p className="text-[#1A394E]/60 text-sm md:text-base max-w-2xl mx-auto">
          Google Ads delivers immediate, measurable results for businesses of all sizes
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div className="text-center p-4 md:p-6">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center mx-auto mb-2 md:mb-3">
            <Rocket className="w-5 h-5 md:w-6 md:h-6 text-[#2C727B]" />
          </div>
          <h3 className="font-semibold text-[#1A394E] text-sm md:text-base mb-1">Immediate Traffic</h3>
          <p className="text-xs md:text-sm text-[#1A394E]/50">Start getting clicks within hours</p>
        </div>
        <div className="text-center p-4 md:p-6">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center mx-auto mb-2 md:mb-3">
            <Target className="w-5 h-5 md:w-6 md:h-6 text-[#2C727B]" />
          </div>
          <h3 className="font-semibold text-[#1A394E] text-sm md:text-base mb-1">High-Intent Leads</h3>
          <p className="text-xs md:text-sm text-[#1A394E]/50">Reach customers ready to buy</p>
        </div>
        <div className="text-center p-4 md:p-6">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center mx-auto mb-2 md:mb-3">
            <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-[#2C727B]" />
          </div>
          <h3 className="font-semibold text-[#1A394E] text-sm md:text-base mb-1">Measurable ROI</h3>
          <p className="text-xs md:text-sm text-[#1A394E]/50">Track every dollar spent</p>
        </div>
        <div className="text-center p-4 md:p-6">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center mx-auto mb-2 md:mb-3">
            <Globe className="w-5 h-5 md:w-6 md:h-6 text-[#2C727B]" />
          </div>
          <h3 className="font-semibold text-[#1A394E] text-sm md:text-base mb-1">Scalable Growth</h3>
          <p className="text-xs md:text-sm text-[#1A394E]/50">Increase budget as you see results</p>
        </div>
      </div>
    </section>
  );
}

function SmallBusinessSection() {
  return (
    <section aria-labelledby="small-business-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
      <h2 id="small-business-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Google Ads Management for Small Business
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        Affordable PPC solutions tailored to small business budgets and goals
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white/50 rounded-xl p-4 text-center">
          <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-2">
            <DollarSign className="w-5 h-5 text-[#2C727B]" />
          </div>
          <h3 className="font-semibold text-[#1A394E]">Low Minimum Spend</h3>
          <p className="text-xs text-[#1A394E]/50">Start with as little as $1,500/month total budget</p>
        </div>
        <div className="bg-white/50 rounded-xl p-4 text-center">
          <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-2">
            <Target className="w-5 h-5 text-[#2C727B]" />
          </div>
          <h3 className="font-semibold text-[#1A394E]">Local Targeting</h3>
          <p className="text-xs text-[#1A394E]/50">Reach customers in your geographic area</p>
        </div>
        <div className="bg-white/50 rounded-xl p-4 text-center">
          <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-2">
            <ThumbsUp className="w-5 h-5 text-[#2C727B]" />
          </div>
          <h3 className="font-semibold text-[#1A394E]">Month-to-Month</h3>
          <p className="text-xs text-[#1A394E]/50">No long-term contracts, cancel anytime</p>
        </div>
      </div>
    </section>
  );
}

function ROICalculatorLink() {
  return (
    <section aria-labelledby="roi-calculator-heading" className="mb-12 md:mb-16 text-center">
      <div className="bg-gradient-to-r from-[#2C727B]/10 to-[#1A394E]/10 rounded-2xl p-8 md:p-12 border border-gray-100">
        <h2 id="roi-calculator-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-3">
          Calculate Your Google Ads ROI
        </h2>
        <p className="text-[#1A394E]/60 text-sm md:text-base max-w-2xl mx-auto mb-6">
          Use our free ROI calculator to estimate potential returns from Google Ads campaigns
        </p>
        <Link
          href="/roi-calculator"
          className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm md:text-base"
        >
          Calculate Your ROI
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

// ✅ New EEAT Section - Expert Signals
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
            <p className="font-semibold text-[#1A394E]">Google Certified Strategists</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center">
            <Award className="w-6 h-6 text-[#2C727B]" />
          </div>
          <div>
            <p className="text-xs text-[#1A394E]/50">Certification</p>
            <p className="font-semibold text-[#1A394E]">Google Premier Partner</p>
          </div>
        </div>
      </div>
      <div className="text-center pt-4 border-t border-gray-100">
        <p className="text-sm text-[#1A394E]/60">
          Our team maintains active Google Ads certifications across Search, Display, Video, Shopping, and Measurement.
          Combined 10+ years of enterprise PPC management experience.
        </p>
      </div>
    </section>
  );
}

// ===============================
// ✅ MAIN CLIENT COMPONENT
// ===============================
export default function GoogleAdsClient() {
  return (
    <main id="main-content" role="main" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30 py-12 md:py-16 lg:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb />

        {/* Hero Section */}
        <section aria-labelledby="main-heading" className="text-center mb-12 md:mb-16">
          <div className="mb-6 md:mb-8 flex justify-center">
            <Image
              src="/google-ads-management-services-agency.webp"
              width={800}
              height={420}
              priority
              fetchPriority="high"
              quality={85}
              alt="Professional Google Ads management services by iCreatixPRO including Search, Display, Shopping and YouTube campaigns"
              className="rounded-xl shadow-lg w-full max-w-4xl h-auto"
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Trust Strip */}
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-[#1A394E]/60">
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> Google Partner</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> 250+ Clients</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> $50M+ Ad Spend Managed</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> 4.9 Rating (127 reviews)</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2C727B]/10 to-[#1A394E]/10 rounded-full px-3 py-1 md:px-4 md:py-2 mb-4 md:mb-6">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#2C727B]" />
            <span className="text-xs md:text-sm font-medium text-[#1A394E]">Google Premier Partner 2026</span>
          </div>

          <h1 id="main-heading" className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#1A394E] to-[#2C727B] bg-clip-text text-transparent mb-4 md:mb-6">
            Professional Google Ads Management Services
          </h1>

          <p className="text-[#1A394E]/70 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Professional Google Ads management services that deliver exceptional ROI through strategic PPC campaigns.
          </p>

          <div className="mt-4 md:mt-6">
            <p className="text-[#1A394E]/70 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              At <strong className="text-[#2C727B]">iCreatixPRO</strong>, our certified Google Ads experts help businesses maximize their advertising ROI.
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-3 md:mt-4">
              <Link href="/services/search-engine-optimization" className="text-[#2C727B] hover:underline font-medium text-sm md:text-base">
                SEO services →
              </Link>
              <Link href="/blogs" className="text-[#2C727B] hover:underline font-medium text-sm md:text-base">
                PPC insights →
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
              Get Free PPC Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/50 text-[#1A394E] font-semibold hover:bg-white/90 transition-all hover:scale-105 text-sm md:text-base"
            >
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

        {/* Why Invest Section */}
        <WhyGoogleAdsSection />

        {/* Ad Platforms Section */}
        <section aria-labelledby="platforms-heading" className="mb-12 md:mb-16">
          <h2 id="platforms-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
            Google Ads Services We Offer
          </h2>
          <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
            Comprehensive PPC solutions across all Google platforms
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4">
            {adPlatforms.map((platform, idx) => (
              <AdPlatformCard key={idx} platform={platform} />
            ))}
          </div>
        </section>

        {/* PPC Services Section */}
        <section aria-labelledby="services-heading" className="mb-12 md:mb-16">
          <h2 id="services-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
            Comprehensive PPC Management
          </h2>
          <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
            End-to-end Google Ads management to maximize your advertising ROI
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {servicesList.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </section>

        {/* Performance Max Section */}
        <PerformanceMaxSection />

        {/* Industries Section */}
        <IndustriesSection />

        {/* Small Business Section */}
        <SmallBusinessSection />

        {/* Google Ads vs SEO Section */}
        <GoogleAdsVsSEOSection />

        {/* ROI Calculator Link */}
        <ROICalculatorLink />

        {/* Process Section */}
        <section aria-labelledby="process-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
          <h2 id="process-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
            Our PPC Management Process
          </h2>
          <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
            A proven 5-step methodology for Google Ads success
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {[
              { step: "01", title: "Discovery", desc: "Strategy & goals", key: "step-1" },
              { step: "02", title: "Setup", desc: "Account & tracking", key: "step-2" },
              { step: "03", title: "Create", desc: "Keywords & ads", key: "step-3" },
              { step: "04", title: "Launch", desc: "Campaign deploy", key: "step-4" },
              { step: "05", title: "Optimize", desc: "Test & scale", key: "step-5" },
            ].map((item) => (
              <div key={item.key} className="text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] text-white font-bold flex items-center justify-center mx-auto mb-2 text-sm md:text-base">
                  {item.step}
                </div>
                <h3 className="font-semibold text-[#1A394E] text-xs md:text-sm">{item.title}</h3>
                <p className="text-[10px] md:text-xs text-[#1A394E]/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Plans */}
        <PricingPlans />

        {/* Why Choose Us Section */}
        <section aria-labelledby="why-heading" className="mb-12 md:mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="why-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-4 md:mb-6">
                Why Choose Our Google Ads Services?
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
                    <p className="font-semibold text-[#1A394E] text-sm md:text-base">Free PPC Audit</p>
                    <p className="text-xs md:text-sm text-[#1A394E]/60">No commitment. 24-hour response.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2C727B]/5 to-[#1A394E]/5 rounded-2xl p-6 md:p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A394E]">Google Premier Partner</h3>
                  <p className="text-sm text-[#1A394E]/60">Certified excellence in Google Ads management</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {partnerStats.map((stat, idx) => (
                  <div key={idx} className="text-center p-3 rounded-xl bg-white/50 border border-gray-100">
                    <div className="text-xl font-bold text-[#2C727B]">{stat.value}</div>
                    <div className="text-xs text-[#1A394E]/60">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">Search Certified</span>
                <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">Display Certified</span>
                <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">Video Certified</span>
                <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">Shopping Certified</span>
              </div>
            </div>
          </div>
        </section>

        {/* EEAT Section - Expert Signals */}
        <EEATSection />

        {/* Google Ads Mistakes Section */}
        <GoogleAdsMistakesSection />

        {/* Mini Case Studies Section */}
        <MiniCaseStudiesSection />

        {/* Testimonials Section */}
        <section aria-labelledby="testimonials-heading" className="mb-12 md:mb-16">
          <h2 id="testimonials-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
            Client Success Stories
          </h2>
          <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
            Real results from businesses like yours
          </p>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {testimonialsData.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section aria-labelledby="faq-heading" className="mb-12 md:mb-16">
          <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
            Google Ads Frequently Asked Questions
          </h2>
          <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
            Everything you need to know about our PPC management services
          </p>
          <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} faq={faq} idx={idx} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section aria-label="Call to action" className="text-center bg-gradient-to-r from-[#2C727B] to-[#1A394E] rounded-2xl p-6 md:p-12 text-white">
          <Target className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 opacity-50" />
          <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3">
            Ready to Maximize Your Ad ROI?
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-4 md:mb-6 max-w-2xl mx-auto">
            Get a free PPC audit and discover how our Google Ads management can drive more conversions at a lower cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#1A394E] px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-white/90 transition-all hover:scale-105 text-sm md:text-base"
            >
              Get Free PPC Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/50 text-white font-semibold hover:bg-white/30 transition-all hover:scale-105 text-sm md:text-base"
            >
              View Case Studies
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/50 text-center">
          <p className="text-[10px] md:text-xs text-[#1A394E]/40">
            © {CURRENT_YEAR} iCreatixPRO. Google Ads management specialists.
          </p>
        </footer>
      </div>
    </main>
  );
}