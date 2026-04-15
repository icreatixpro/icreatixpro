// app/services/google-ads/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import {
  TrendingUp,
  Zap,
  Target,
  Users,
  BarChart3,
  Globe,
  Search,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Shield,
  Rocket,
  Lightbulb,
  PieChart,
  LineChart,
  FileText,
  Play,
  ChevronRight,
  Sparkles,
  Heart,
  ThumbsUp,
  DollarSign,
  Clock,
  Eye,
  ShoppingBag,
  Smartphone,
  Monitor,
  MapPin,
  Calendar,
  MessageCircle,
  Phone,
  Mail,
  Settings,
  Sliders,
  Activity,
  CreditCard,
  TrendingUp as TrendingUpIcon,
  Users as UsersIcon,
  Target as TargetIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon
} from "lucide-react";

// ============================================
// ANIMATION VARIANTS
// ============================================

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
};

// ============================================
// COMPONENTS
// ============================================

const ServiceCard = ({ icon: Icon, title, description, features, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 p-6 shadow-sm hover:shadow-xl transition-all duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#2C727B]/0 to-[#2C727B]/0 group-hover:from-[#2C727B]/5 group-hover:to-[#1A394E]/5 rounded-2xl transition-all duration-300" />
    
    <div className="relative">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-white" />
      </div>
      
      <h3 className="text-xl font-bold text-[#1A394E] mb-2">{title}</h3>
      <p className="text-[#1A394E]/60 text-sm leading-relaxed mb-4">{description}</p>
      
      <ul className="space-y-2">
        {features.map((feature: string, i: number) => (
          <li key={i} className="flex items-center gap-2 text-sm text-[#1A394E]/70">
            <CheckCircle className="w-4 h-4 text-[#2C727B] flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const StatCard = ({ value, label, icon: Icon, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.4 }}
    viewport={{ once: true }}
    className="text-center p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50"
  >
    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#2C727B]/10 flex items-center justify-center">
      <Icon className="w-6 h-6 text-[#2C727B]" />
    </div>
    <div className="text-3xl font-bold text-[#1A394E]">{value}</div>
    <div className="text-sm text-[#1A394E]/60 mt-1">{label}</div>
  </motion.div>
);

const PricingCard = ({ title, price, features, isPopular = false, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className={`relative bg-white/80 backdrop-blur-sm rounded-2xl border p-6 shadow-sm hover:shadow-xl transition-all duration-300 ${
      isPopular ? 'border-[#2C727B] shadow-lg' : 'border-white/50'
    }`}
  >
    {isPopular && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white text-xs font-medium">
        Most Popular
      </div>
    )}
    <div className="text-center mb-6">
      <h3 className="text-xl font-bold text-[#1A394E] mb-2">{title}</h3>
      <div className="text-3xl font-bold text-[#1A394E]">{price}</div>
      <p className="text-xs text-[#1A394E]/50 mt-1">+ ad spend</p>
    </div>
    <ul className="space-y-3 mb-6">
      {features.map((feature: string, i: number) => (
        <li key={i} className="flex items-center gap-2 text-sm text-[#1A394E]/70">
          <CheckCircle className="w-4 h-4 text-[#2C727B] flex-shrink-0" />
          {feature}
        </li>
      ))}
    </ul>
    <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white font-semibold hover:shadow-lg transition-all">
      Get Started
    </button>
  </motion.div>
);

const ProcessStep = ({ number, title, description, icon: Icon, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="relative"
  >
    <div className="flex items-start gap-4">
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center text-white font-bold text-xl">
          {number}
        </div>
        {number < 6 && (
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-[#2C727B]/30 hidden md:block" />
        )}
      </div>
      <div className="flex-1 pb-8">
        <div className="flex items-center gap-3 mb-2">
          <Icon className="w-5 h-5 text-[#2C727B]" />
          <h3 className="text-lg font-semibold text-[#1A394E]">{title}</h3>
        </div>
        <p className="text-[#1A394E]/60 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

const TestimonialCard = ({ name, role, content, rating, result }: any) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 p-6 shadow-sm"
  >
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
      ))}
    </div>
    <p className="text-[#1A394E]/70 text-sm leading-relaxed mb-4">"{content}"</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center text-white font-bold">
        {name.charAt(0)}
      </div>
      <div>
        <div className="font-semibold text-[#1A394E] text-sm">{name}</div>
        <div className="text-xs text-[#1A394E]/50">{role}</div>
        {result && <div className="text-xs text-[#2C727B] font-medium mt-1">{result}</div>}
      </div>
    </div>
  </motion.div>
);

const AdPlatformCard = ({ name, icon: Icon, description, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.3 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50 hover:shadow-md transition-all"
  >
    <Icon className="w-10 h-10 text-[#2C727B] mb-3" />
    <span className="text-sm font-medium text-[#1A394E] text-center">{name}</span>
    <p className="text-xs text-[#1A394E]/50 text-center mt-1">{description}</p>
  </motion.div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export default function GoogleAdsServicesPage() {
  const [stats, setStats] = useState({
    roi: 0,
    conversions: 0,
    ctr: 0,
    accounts: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        roi: 400,
        conversions: 215,
        ctr: 8.5,
        accounts: 250
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Google Ads Management | PPC Services | iCreatixPRO</title>
        <meta
          name="description"
          content="Drive targeted traffic and maximize ROI with our professional Google Ads management services. Keyword research, ad creation, bid management, and conversion optimization. Get a free PPC audit today!"
        />
        <meta name="keywords" content="Google Ads, PPC management, pay-per-click, search ads, display ads, shopping ads, YouTube ads" />
      </Head>

      <main className="min-h-screen bg-[#F8FAFA]">
        
        {/* ============================================ */}
        {/* HERO SECTION */}
        {/* ============================================ */}
        <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#2C727B]/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#1A394E]/20 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-2000" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium mb-6">
                <Target className="w-3 h-3" />
                Google Premier Partner 2026
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1A394E] mb-6">
                Maximize ROI with
                <span className="block bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
                  Google Ads Management
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-[#1A394E]/60 max-w-2xl mx-auto mb-8">
                Drive qualified traffic, increase conversions, and maximize your ad spend with our 
                data-driven Google Ads management services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Get Free PPC Audit
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/50 text-[#1A394E] font-semibold hover:bg-white/90 transition-all flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  Watch Case Study
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* STATS SECTION - FIXED SYNTAX */}
        {/* ============================================ */}
        <section className="py-16 bg-white/40 backdrop-blur-sm border-y border-white/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatCard value={`${stats.roi}%`} label="Average ROI" icon={TrendingUpIcon} delay={0.1} />
              <StatCard value={`${stats.conversions}%`} label="Conversion Increase" icon={TargetIcon} delay={0.2} />
              <StatCard value={`${stats.ctr}%`} label="Click-Through Rate" icon={Eye} delay={0.3} />
              <StatCard value={stats.accounts} label="Active Accounts" icon={UsersIcon} delay={0.4} />
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* AD PLATFORMS SECTION */}
        {/* ============================================ */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E] mb-4">
                Google Ads Services We Offer
              </h2>
              <p className="text-[#1A394E]/60 max-w-2xl mx-auto">
                Comprehensive PPC solutions across all Google platforms
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              <AdPlatformCard name="Search Ads" icon={Search} description="Capture intent-driven traffic" delay={0.1} />
              <AdPlatformCard name="Display Ads" icon={Eye} description="Visual banner advertising" delay={0.15} />
              <AdPlatformCard name="Shopping Ads" icon={ShoppingBag} description="E-commerce product ads" delay={0.2} />
              <AdPlatformCard name="YouTube Ads" icon={Play} description="Video advertising" delay={0.25} />
              <AdPlatformCard name="Performance Max" icon={Rocket} description="AI-powered campaigns" delay={0.3} />
              <AdPlatformCard name="Remarketing" icon={RefreshIcon} description="Re-engage visitors" delay={0.35} />
              <AdPlatformCard name="Local Ads" icon={MapPin} description="Store visit campaigns" delay={0.4} />
              <AdPlatformCard name="App Ads" icon={Smartphone} description="Mobile app promotion" delay={0.45} />
              <AdPlatformCard name="Call Ads" icon={Phone} description="Phone call campaigns" delay={0.5} />
              <AdPlatformCard name="Discovery Ads" icon={Globe} description="Feed-based ads" delay={0.55} />
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* PPC SERVICES SECTION */}
        {/* ============================================ */}
        <section className="py-20 bg-white/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E] mb-4">
                Comprehensive PPC Management
              </h2>
              <p className="text-[#1A394E]/60 max-w-2xl mx-auto">
                End-to-end Google Ads management to maximize your advertising ROI
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                icon={Search}
                title="Keyword Research"
                description="Find high-intent keywords that drive qualified traffic and conversions."
                features={["Competitor Analysis", "Negative Keywords", "Long-tail Research", "Search Intent Mapping", "Bid Strategy"]}
                delay={0.1}
              />
              <ServiceCard
                icon={FileText}
                title="Ad Copy Creation"
                description="Compelling ad copy that stands out and drives clicks."
                features={["Headline Testing", "Description Optimization", "CTA Optimization", "Ad Extensions", "Responsive Search Ads"]}
                delay={0.2}
              />
              <ServiceCard
                icon={Target}
                title="Audience Targeting"
                description="Reach the right people with precision targeting."
                features={["Demographic Targeting", "Custom Audiences", "Remarketing Lists", "Similar Audiences", "In-Market Segments"]}
                delay={0.3}
              />
              <ServiceCard
                icon={Sliders}
                title="Bid Management"
                description="Optimize bids to maximize ROI and achieve goals."
                features={["Smart Bidding", "CPA Targeting", "ROAS Optimization", "Position Tracking", "Budget Allocation"]}
                delay={0.4}
              />
              <ServiceCard
                icon={Activity}
                title="A/B Testing"
                description="Continuous testing to improve campaign performance."
                features={["Ad Copy Tests", "Landing Page Tests", "Bid Strategy Tests", "Audience Tests", "Extension Tests"]}
                delay={0.5}
              />
              <ServiceCard
                icon={BarChartIcon}
                title="Analytics & Reporting"
                description="Data-driven insights and transparent reporting."
                features={["Custom Dashboards", "Conversion Tracking", "ROI Analysis", "Monthly Reports", "Competitor Insights"]}
                delay={0.6}
              />
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* HOW IT WORKS SECTION */}
        {/* ============================================ */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E] mb-4">
                Our PPC Management Process
              </h2>
              <p className="text-[#1A394E]/60 max-w-2xl mx-auto">
                A systematic approach to maximize your Google Ads performance
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <ProcessStep number={1} title="Discovery & Strategy" description="Understand your business goals, target audience, and competitive landscape to develop a winning PPC strategy." icon={Target} delay={0.1} />
              <ProcessStep number={2} title="Account Setup" description="Configure your Google Ads account, conversion tracking, and campaign structure for optimal performance." icon={Settings} delay={0.2} />
              <ProcessStep number={3} title="Keyword & Ad Creation" description="Research high-intent keywords and create compelling ad copy that drives clicks and conversions." icon={Search} delay={0.3} />
              <ProcessStep number={4} title="Launch & Monitor" description="Launch campaigns and continuously monitor performance metrics to identify opportunities." icon={Eye} delay={0.4} />
              <ProcessStep number={5} title="Optimization" description="Ongoing A/B testing, bid adjustments, and campaign refinements to improve ROI." icon={Sliders} delay={0.5} />
              <ProcessStep number={6} title="Reporting & Growth" description="Detailed performance reports and strategic recommendations for scaling success." icon={BarChartIcon} delay={0.6} />
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* WHY CHOOSE US SECTION */}
        {/* ============================================ */}
        <section className="py-20 bg-white/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E]">
                  Why Choose Our Google Ads Services?
                </h2>
                <div className="space-y-4">
                  {[
                    { icon: Award, title: "Google Premier Partner", desc: "Certified Google Partner with exclusive access" },
                    { icon: Users, title: "Certified Experts", desc: "Google Ads certified professionals" },
                    { icon: Shield, title: "Transparent Reporting", desc: "Real-time access to campaign data" },
                    { icon: Heart, title: "No Long-term Contracts", desc: "Flexible month-to-month agreements" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#2C727B]/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-[#2C727B]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1A394E]">{item.title}</h3>
                        <p className="text-sm text-[#1A394E]/60">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-[#2C727B]/10 to-[#1A394E]/10 rounded-3xl p-8 border border-white/50">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">
                      <Star className="w-3 h-3 fill-teal-700" />
                      Client Success Stories
                    </div>
                  </div>
                  <div className="space-y-4">
                    <TestimonialCard
                      name="Robert Chen"
                      role="E-commerce Director"
                      content="Our ROAS increased by 300% in just 3 months. The team's expertise in Google Shopping ads is unmatched!"
                      rating={5}
                      result="300% ROAS increase"
                    />
                    <TestimonialCard
                      name="Jennifer Williams"
                      role="Marketing Manager"
                      content="They reduced our cost per lead by 65% while doubling conversion volume. Best PPC agency we've worked with."
                      rating={5}
                      result="65% lower CPA"
                    />
                    <TestimonialCard
                      name="David Kim"
                      role="Small Business Owner"
                      content="Finally a PPC agency that actually cares about ROI. Our revenue from Google Ads has tripled."
                      rating={5}
                      result="200% revenue growth"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* PRICING PLANS */}
        {/* ============================================ */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E] mb-4">
                Flexible PPC Management Plans
              </h2>
              <p className="text-[#1A394E]/60 max-w-2xl mx-auto">
                Choose the plan that fits your business goals and budget
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <PricingCard
                title="Starter PPC"
                price="$999"
                features={[
                  "Up to $10K Ad Spend",
                  "Campaign Setup",
                  "Keyword Research",
                  "Monthly Optimization",
                  "Monthly Reports",
                  "Email Support"
                ]}
                delay={0.1}
              />
              <PricingCard
                title="Professional PPC"
                price="$1,999"
                features={[
                  "Up to $50K Ad Spend",
                  "Full Campaign Management",
                  "Advanced Keyword Research",
                  "Weekly Optimization",
                  "A/B Testing",
                  "Conversion Tracking",
                  "Priority Support"
                ]}
                isPopular={true}
                delay={0.2}
              />
              <PricingCard
                title="Enterprise PPC"
                price="Custom"
                features={[
                  "Unlimited Ad Spend",
                  "Dedicated Account Manager",
                  "Custom Strategy Development",
                  "Daily Optimization",
                  "Advanced Analytics",
                  "Real-time Dashboard",
                  "24/7 Priority Support"
                ]}
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* GOOGLE PARTNER BADGES */}
        {/* ============================================ */}
        <section className="py-20 bg-white/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#1A394E]">Google Premier Partner</h2>
                    <p className="text-sm text-[#1A394E]/60">Certified excellence in Google Ads management</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-[#1A394E]/70">
                    As a Google Premier Partner, we have access to exclusive beta features, 
                    dedicated support, and advanced training. Our team maintains the highest 
                    level of Google Ads certification.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">Search Certified</span>
                    <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">Display Certified</span>
                    <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">Video Certified</span>
                    <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">Shopping Certified</span>
                    <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">Measurement Certified</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50">
                  <div className="text-2xl font-bold text-[#2C727B]">$50M+</div>
                  <div className="text-xs text-[#1A394E]/60">Ad Spend Managed</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50">
                  <div className="text-2xl font-bold text-[#2C727B]">2.5M+</div>
                  <div className="text-xs text-[#1A394E]/60">Conversions Generated</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50">
                  <div className="text-2xl font-bold text-[#2C727B]">35%</div>
                  <div className="text-xs text-[#1A394E]/60">Average CTR</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50">
                  <div className="text-2xl font-bold text-[#2C727B]">24/7</div>
                  <div className="text-xs text-[#1A394E]/60">Campaign Monitoring</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* FAQ SECTION */}
        {/* ============================================ */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E] mb-4">
                Google Ads FAQs
              </h2>
              <p className="text-[#1A394E]/60">
                Everything you need to know about our PPC management services
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  q: "How much budget do I need for Google Ads?",
                  a: "Budget requirements vary by industry and competition. We typically recommend starting with $1,500-3,000/month for effective testing and optimization. We'll work within your budget to maximize results."
                },
                {
                  q: "How long does it take to see results?",
                  a: "Initial results can be seen within the first week, but meaningful optimization typically takes 30-60 days. We continuously test and refine campaigns to improve performance."
                },
                {
                  q: "Do you guarantee ROI?",
                  a: "While we can't guarantee specific ROI due to market variables, we guarantee transparent reporting, continuous optimization, and proven strategies that have delivered 400%+ average ROI for our clients."
                },
                {
                  q: "What's included in your management fee?",
                  a: "Our management includes campaign setup, ongoing optimization, A/B testing, bid management, conversion tracking, monthly reporting, and strategic consultation."
                },
                {
                  q: "Can you manage my existing campaigns?",
                  a: "Absolutely! We'll audit your existing campaigns and implement improvements to enhance performance and reduce wasted spend."
                }
              ].map((item, i) => (
                <motion.details
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white/50 backdrop-blur-sm rounded-xl border border-white/50 overflow-hidden"
                >
                  <summary className="cursor-pointer p-5 font-semibold text-[#1A394E] flex items-center justify-between list-none">
                    {item.q}
                    <ChevronRight className="w-5 h-5 text-[#2C727B] transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="px-5 pb-5 pt-0 text-[#1A394E]/60 text-sm leading-relaxed">
                    {item.a}
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* CTA SECTION */}
        {/* ============================================ */}
        <section className="py-20 bg-gradient-to-r from-[#2C727B] to-[#1A394E]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <Target className="w-16 h-16 mx-auto mb-6 opacity-50" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Maximize Your Ad ROI?
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Get a free PPC audit and discover how our Google Ads management can drive more conversions at a lower cost.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-xl bg-white text-[#1A394E] font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Get Free PPC Audit
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/50 text-white font-semibold hover:bg-white/30 transition-all"
                >
                  View Case Studies
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

// Refresh Icon Component
const RefreshIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);