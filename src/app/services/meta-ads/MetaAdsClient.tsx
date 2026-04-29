"use client";

import React, { useState, lazy, Suspense } from "react";
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
  Target,
  ArrowRight,
  Award,
  TrendingUp,
  DollarSign,
  FileText,
  Sliders,
  PieChart,
  MessageCircle,
  Facebook,
  Instagram,
  Video,
  Image as ImageIcon,
  Layout,
  ShoppingBag,
  Film,
  Tv,
  Settings,
  ChevronRight,
  Calendar,
  UserCheck,
  BadgeCheck,
  Trophy,
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
  { value: "350%", label: "Avg. ROAS", icon: TrendingUp },
  { value: "4.8%", label: "Engagement Rate", icon: Heart },
  { value: "250M+", label: "Monthly Reach", icon: Users },
  { value: "180+", label: "Active Accounts", icon: Target },
];

const platforms = [
  { name: "Facebook Ads", icon: Facebook, description: "2.9B+ monthly active users", color: "#1877F2" },
  { name: "Instagram Ads", icon: Instagram, description: "2B+ monthly active users", color: "#E4405F" },
];

const adTypes = [
  { name: "Image Ads", icon: ImageIcon, description: "Single image with compelling copy" },
  { name: "Video Ads", icon: Video, description: "Engaging video content" },
  { name: "Carousel Ads", icon: Layout, description: "Swipeable multi-image ads" },
  { name: "Collection Ads", icon: ShoppingBag, description: "Product showcase for e-commerce" },
  { name: "Stories Ads", icon: Film, description: "Full-screen vertical format" },
  { name: "Reels Ads", icon: Tv, description: "Short-form video ads" },
  { name: "Lead Ads", icon: MessageCircle, description: "Instant lead generation" },
];

const servicesList = [
  {
    icon: Target,
    title: "Audience Targeting",
    description: "Reach the right people with precision audience targeting strategies.",
    features: ["Custom Audiences", "Lookalike Audiences", "Interest Targeting", "Behavioral Targeting", "Retargeting Campaigns"],
    link: "/services/digital-marketing",
    ctaText: "Target audiences",
  },
  {
    icon: FileText,
    title: "Creative Strategy",
    description: "Compelling ad creatives that stop the scroll and drive engagement.",
    features: ["Ad Copywriting", "Visual Design", "Video Production", "Creative Testing", "Performance Analysis"],
    link: "/services/digital-marketing",
    ctaText: "Create content",
  },
  {
    icon: Sliders,
    title: "Campaign Management",
    description: "Expert management of your Meta ad campaigns for optimal performance.",
    features: ["Bid Optimization", "Budget Allocation", "Ad Scheduling", "Placement Optimization", "A/B Testing"],
    link: "/services/digital-marketing",
    ctaText: "Manage campaigns",
  },
  {
    icon: BarChart3,
    title: "Conversion Tracking",
    description: "Accurate tracking and attribution for all conversions.",
    features: ["Meta Pixel Setup", "Conversion API", "Event Tracking", "Attribution Modeling", "ROI Analysis"],
    link: "/services/analytics",
    ctaText: "Track conversions",
  },
  {
    icon: MessageCircle,
    title: "Messenger & WhatsApp",
    description: "Engage customers directly through messaging platforms.",
    features: ["Click-to-Messenger Ads", "WhatsApp Business", "Chatbot Integration", "Automated Responses", "Lead Qualification"],
    link: "/services/digital-marketing",
    ctaText: "Start conversations",
  },
  {
    icon: PieChart,
    title: "Analytics & Reporting",
    description: "Data-driven insights and transparent performance reporting.",
    features: ["Custom Dashboards", "Real-time Analytics", "Competitor Insights", "Monthly Reports", "Strategic Recommendations"],
    link: "/services/analytics",
    ctaText: "See insights",
  },
];

const plans = [
  {
    title: "Starter Meta",
    price: "$1,299",
    features: ["Up to $15K Ad Spend", "Facebook & Instagram Ads", "Campaign Setup", "Creative Design (2 variants)", "Monthly Optimization", "Monthly Reports"],
    isPopular: false,
  },
  {
    title: "Professional Meta",
    price: "$2,499",
    features: ["Up to $50K Ad Spend", "Full Platform Coverage", "Advanced Creative Strategy", "Weekly Optimization", "A/B Creative Testing", "Conversion Tracking", "Priority Support"],
    isPopular: true,
  },
  {
    title: "Enterprise Meta",
    price: "Custom",
    features: ["Unlimited Ad Spend", "Multi-Account Management", "Dedicated Creative Team", "Daily Optimization", "Advanced Analytics", "Real-time Dashboard", "24/7 Priority Support"],
    isPopular: false,
  },
];

const reasons = [
  { icon: Award, title: "Meta Business Partner", desc: "Certified Meta Partner with exclusive benefits" },
  { icon: Users, title: "Certified Experts", desc: "Meta Certified Digital Marketing Associates" },
  { icon: Shield, title: "Transparent Reporting", desc: "Real-time access to campaign data" },
  { icon: Heart, title: "Creative Excellence", desc: "In-house creative team for stunning visuals" },
];

const partnerStats = [
  { value: "$25M+", label: "Ad Spend Managed" },
  { value: "3M+", label: "Conversions Generated" },
  { value: "4.8%", label: "Avg. CTR" },
  { value: "24/7", label: "Campaign Monitoring" },
];

const testimonialsData = [
  {
    name: "Amanda Lee",
    role: "E-commerce Owner",
    content: "Our Facebook ROAS went from 2x to 5x in just 2 months. The creative testing strategy was game-changing!",
    rating: 5,
    result: "5x ROAS achieved",
  },
  {
    name: "Brian Foster",
    role: "Marketing Director",
    content: "They helped us scale from $20k to $100k monthly ad spend profitably. Best Meta Ads agency out there.",
    rating: 5,
    result: "400% revenue growth",
  },
  {
    name: "Jessica Park",
    role: "Small Business Owner",
    content: "Instagram has become our #1 revenue channel. Their creative strategy and audience targeting are exceptional.",
    rating: 5,
    result: "3x Instagram revenue",
  },
];

const faqs = [
  {
    q: "What's the minimum budget for Meta Ads?",
    a: "We recommend starting with at least $1,500-2,500/month for effective testing and optimization. This allows us to gather sufficient data and scale winning campaigns.",
  },
  {
    q: "Which platforms do you advertise on?",
    a: "We advertise across Facebook, Instagram, Messenger, and WhatsApp, with unified campaign management and cross-platform optimization.",
  },
  {
    q: "How do you measure success?",
    a: "We track key metrics including ROAS, CPA, CTR, conversion rate, and overall revenue. You'll receive detailed monthly reports with actionable insights.",
  },
  {
    q: "Can you create ad creatives?",
    a: "Yes! Our in-house creative team designs high-performing ad creatives including images, videos, carousels, and stories.",
  },
  {
    q: "How long until I see results?",
    a: "Initial results can be seen within the first week, with meaningful optimization typically taking 30-45 days. We continuously test and refine for better performance.",
  },
  {
    q: "Is Meta Ads better than Google Ads?",
    a: "Both have unique advantages. Meta Ads excel at brand awareness and visual storytelling with social intent, while Google Ads capture active search intent. We recommend using both for maximum results.",
  },
];

// ===============================
// ✅ COMPONENTS (No Framer Motion for speed)
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
        <span className="text-[#2C727B] font-medium" aria-current="page">Meta Ads</span>
      </div>
    </nav>
  );
}

function PlatformCard({ platform }: { platform: typeof platforms[0] }) {
  const Icon = platform.icon;
  return (
    <div className="flex flex-col items-center p-6 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-all">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3" style={{ background: `${platform.color}20` }}>
        <Icon className="w-8 h-8" style={{ color: platform.color }} />
      </div>
      <span className="text-base font-bold text-[#1A394E] text-center">{platform.name}</span>
      <p className="text-xs text-[#1A394E]/50 text-center mt-2">{platform.description}</p>
    </div>
  );
}

function AdTypeCard({ adType }: { adType: typeof adTypes[0] }) {
  const Icon = adType.icon;
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-all">
      <div className="w-10 h-10 rounded-lg bg-[#2C727B]/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-[#2C727B]" />
      </div>
      <div>
        <h4 className="font-semibold text-[#1A394E] text-sm">{adType.name}</h4>
        <p className="text-xs text-[#1A394E]/50">{adType.description}</p>
      </div>
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
    <section id="pricing" aria-labelledby="pricing-heading" className="mb-12 md:mb-16">
      <h2 id="pricing-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Flexible Meta Ads Management Plans
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

function PlatformsSection() {
  return (
    <section aria-labelledby="platforms-heading" className="mb-12 md:mb-16">
      <h2 id="platforms-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Multi-Platform Advertising
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        Reach your audience across Facebook & Instagram with unified campaign management
      </p>
      <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {platforms.map((platform, idx) => (
          <PlatformCard key={idx} platform={platform} />
        ))}
      </div>
    </section>
  );
}

function AdTypesSection() {
  return (
    <section aria-labelledby="ad-types-heading" className="mb-12 md:mb-16">
      <h2 id="ad-types-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Ad Formats We Master
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        Creative ad solutions that capture attention and drive action
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {adTypes.map((adType, idx) => (
          <AdTypeCard key={idx} adType={adType} />
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="mb-12 md:mb-16">
      <h2 id="services-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Comprehensive Meta Ads Services
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        End-to-end Facebook & Instagram advertising management to maximize your ROI
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
    { step: "01", title: "Discovery & Strategy", desc: "Understand your business goals, target audience, and competitive landscape.", icon: Target },
    { step: "02", title: "Creative Development", desc: "Design compelling ad creatives and copy that resonate with your audience.", icon: ImageIcon },
    { step: "03", title: "Campaign Setup", desc: "Configure your Meta Ads account, pixel, and campaign structure.", icon: Settings },
    { step: "04", title: "Launch & Monitor", desc: "Launch campaigns and continuously monitor performance metrics.", icon: Eye },
    { step: "05", title: "Optimization", desc: "Ongoing A/B testing, audience refinement, and creative optimization.", icon: Sliders },
    { step: "06", title: "Reporting & Growth", desc: "Detailed performance reports and strategic recommendations.", icon: PieChart },
  ];

  return (
    <section id="process" aria-labelledby="process-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
      <h2 id="process-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Our Meta Ads Process
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        A systematic approach to maximize your social media advertising ROI
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {steps.map((step, idx) => (
          <div key={idx} className="text-center p-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] text-white font-bold flex items-center justify-center mx-auto mb-2">
              {step.step}
            </div>
            <div className="flex items-center justify-center gap-1 mb-1">
              <step.icon className="w-4 h-4 text-[#2C727B]" />
              <h3 className="font-semibold text-[#1A394E] text-sm">{step.title}</h3>
            </div>
            <p className="text-[10px] text-[#1A394E]/50">{step.desc}</p>
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
            Why Choose Our Meta Ads Services?
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
                <p className="font-semibold text-[#1A394E] text-sm md:text-base">Free Meta Ads Audit</p>
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

function PartnerSection() {
  return (
    <section aria-labelledby="partner-heading" className="mb-12 md:mb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center">
              <Facebook className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 id="partner-heading" className="text-2xl font-bold text-[#1A394E]">Meta Business Partner</h2>
              <p className="text-sm text-[#1A394E]/60">Certified excellence in Meta advertising</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-[#1A394E]/70">
              As a Meta Business Partner, we have direct access to Meta's support team, 
              beta features, and advanced training. Our team maintains the highest level 
              of Meta certifications.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">Facebook Certified</span>
              <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">Instagram Certified</span>
              <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">Creative Strategy</span>
              <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">Media Buying</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {partnerStats.map((stat, idx) => (
            <div key={idx} className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100">
              <div className="text-2xl font-bold text-[#2C727B]">{stat.value}</div>
              <div className="text-xs text-[#1A394E]/60">{stat.label}</div>
            </div>
          ))}
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
            <p className="text-sm text-[#2C727B] font-medium mb-2">Head of Social Advertising | 8+ Years Experience</p>
            <p className="text-sm text-[#1A394E]/60 mb-3">
              Michael has managed over $25M in Meta ad spend across 180+ accounts. He holds Meta Certified Digital Marketing Associate certification and specializes in scaling profitable campaigns.
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="inline-flex items-center gap-1 text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
                <BadgeCheck className="w-3 h-3" /> Meta Certified
              </span>
              <span className="inline-flex items-center gap-1 text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
                <Trophy className="w-3 h-3" /> Meta Business Partner
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
            <p className="font-semibold text-[#1A394E]">Michael Stewart, Head of Social Advertising</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center">
            <BadgeCheck className="w-6 h-6 text-[#2C727B]" />
          </div>
          <div>
            <p className="text-xs text-[#1A394E]/50">Certification</p>
            <p className="font-semibold text-[#1A394E]">Meta Business Partner</p>
          </div>
        </div>
      </div>
      <div className="text-center pt-4 border-t border-gray-100">
        <p className="text-sm text-[#1A394E]/60">
          Our team specializes in Meta advertising with proven results across e-commerce, lead generation, and brand awareness campaigns.
          We use only Meta-compliant, white-hat advertising techniques.
        </p>
      </div>
    </section>
  );
}

// ===============================
// ✅ TABLE OF CONTENTS
// ===============================
function TableOfContents() {
  const sections = [
    { id: "services", title: "Services" },
    { id: "process", title: "Our Process" },
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

// ===============================
// ✅ MAIN CLIENT COMPONENT
// ===============================
export default function MetaAdsClient() {
  return (
    <main id="main-content" role="main" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30 py-12 md:py-16 lg:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb />

        <TableOfContents />

        {/* Hero Section */}
        <section aria-labelledby="main-heading" className="text-center mb-12 md:mb-16">
          <div className="mb-6 md:mb-8 flex justify-center">
            <Image
              src="/meta-ads-services.webp"
              width={800}
              height={420}
              priority
              fetchPriority="high"
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACwAQCdASoQAAwABkC4JZQCdAE2uBMAAOAAwCp8LAXmDAAA"
              alt="Meta Ads management services including Facebook and Instagram advertising by iCreatixPRO"
              className="rounded-xl shadow-lg w-full max-w-4xl h-auto"
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-[#1A394E]/60">
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> Meta Business Partner</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> 180+ Active Accounts</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> $25M+ Ad Spend Managed</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> 4.9 Rating</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2C727B]/10 to-[#1A394E]/10 rounded-full px-3 py-1 md:px-4 md:py-2 mb-4 md:mb-6">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#2C727B]" />
            <span className="text-xs md:text-sm font-medium text-[#1A394E]">Meta Business Partner 2026</span>
          </div>

          <h1 id="main-heading" className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#1A394E] to-[#2C727B] bg-clip-text text-transparent mb-4 md:mb-6">
            Dominate Social Media with Meta Ads Management
          </h1>

          <p className="text-[#1A394E]/70 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Reach your ideal customers on Facebook & Instagram with data-driven ad campaigns that maximize ROI and grow your business.
          </p>

          <div className="mt-4 md:mt-6">
            <p className="text-[#1A394E]/70 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              At <strong className="text-[#2C727B]">iCreatixPRO</strong>, our Meta-certified experts help businesses scale with profitable social advertising.
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-3 md:mt-4">
              <Link href="/services/digital-marketing" className="text-[#2C727B] hover:underline font-medium text-sm md:text-base">
                Digital marketing →
              </Link>
              <Link href="/services/google-ads" className="text-[#2C727B] hover:underline font-medium text-sm md:text-base">
                Google Ads →
              </Link>
              <Link href="/blogs" className="text-[#2C727B] hover:underline font-medium text-sm md:text-base">
                Social media insights →
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-6 md:mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm md:text-base"
            >
              Get Free Meta Ads Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/50 text-[#1A394E] font-semibold hover:bg-white/90 transition-all hover:scale-105 text-sm md:text-base"
            >
              Watch Case Study
            </Link>
          </div>
        </section>

        {/* Stats Section */}
        <section aria-label="Key metrics" className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </section>

        {/* Platforms Section */}
        <PlatformsSection />

        {/* Ad Types Section */}
        <AdTypesSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Process Section */}
        <ProcessSection />

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* Partner Section */}
        <PartnerSection />

        {/* Pricing Plans */}
        <PricingPlans />

        {/* Author Entity Section */}
        <AuthorEntitySection />

        {/* EEAT Section */}
        <EEATSection />

        {/* FAQ Section */}
        <section id="faq" aria-labelledby="faq-heading" className="mb-12 md:mb-16">
          <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
            Meta Ads FAQs
          </h2>
          <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
            Everything you need to know about our Meta advertising services
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
            Ready to Scale with Meta Ads?
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-4 md:mb-6 max-w-2xl mx-auto">
            Get a free Meta Ads audit and discover how our Facebook & Instagram advertising can grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#1A394E] px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-white/90 transition-all hover:scale-105 text-sm md:text-base"
            >
              Get Free Meta Ads Audit
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
            © {CURRENT_YEAR} iCreatixPRO. Meta Ads management specialists.
          </p>
        </footer>
      </div>
    </main>
  );
}