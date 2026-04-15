// app/services/meta-ads/page.tsx
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
  Facebook,
  Instagram,
  TrendingUp as TrendingUpIcon,
  Users as UsersIcon,
  Target as TargetIcon,
  BarChart as BarChartIcon,
  Video,
  Image,
  Share2,
  MessageSquare,
  Layout,
  Film,
  Tv,
  Radio,
  Gift,
  Trophy,
  BadgeCheck
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

const TestimonialCard = ({ name, role, content, rating, result, platform }: any) => (
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
        {platform && <div className="text-xs text-[#1A394E]/40 mt-1">Platform: {platform}</div>}
      </div>
    </div>
  </motion.div>
);

const PlatformCard = ({ name, icon: Icon, description, color, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.3 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50 hover:shadow-md transition-all"
  >
    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3`} style={{ background: `${color}20` }}>
      <Icon className="w-8 h-8" style={{ color }} />
    </div>
    <span className="text-base font-bold text-[#1A394E] text-center">{name}</span>
    <p className="text-xs text-[#1A394E]/50 text-center mt-2">{description}</p>
  </motion.div>
);

const AdTypeCard = ({ name, icon: Icon, description, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.3 }}
    viewport={{ once: true }}
    whileHover={{ y: -3 }}
    className="flex items-start gap-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50 hover:shadow-md transition-all"
  >
    <div className="w-10 h-10 rounded-lg bg-[#2C727B]/10 flex items-center justify-center flex-shrink-0">
      <Icon className="w-5 h-5 text-[#2C727B]" />
    </div>
    <div>
      <h4 className="font-semibold text-[#1A394E] text-sm">{name}</h4>
      <p className="text-xs text-[#1A394E]/50">{description}</p>
    </div>
  </motion.div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export default function MetaAdsServicesPage() {
  const [stats, setStats] = useState({
    roas: 0,
    engagement: 0,
    reach: 0,
    accounts: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        roas: 350,
        engagement: 4.8,
        reach: 250,
        accounts: 180
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Meta Ads Management | Facebook & Instagram Advertising | iCreatixPRO</title>
        <meta
          name="description"
          content="Drive results with our professional Meta Ads management services. Facebook & Instagram advertising, audience targeting, creative strategy, and conversion optimization. Get a free Meta Ads audit today!"
        />
        <meta name="keywords" content="Meta Ads, Facebook Ads, Instagram Ads, social media advertising, PPC management, social media marketing" />
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
                Meta Business Partner 2026
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1A394E] mb-6">
                Dominate Social Media with
                <span className="block bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
                  Meta Ads Management
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-[#1A394E]/60 max-w-2xl mx-auto mb-8">
                Reach your ideal customers on Facebook & Instagram with data-driven ad campaigns 
                that maximize ROI and grow your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Get Free Meta Ads Audit
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
        {/* STATS SECTION */}
        {/* ============================================ */}
        <section className="py-16 bg-white/40 backdrop-blur-sm border-y border-white/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatCard value={`${stats.roas}%`} label="Average ROAS" icon={TrendingUpIcon} delay={0.1} />
              <StatCard value={`${stats.engagement}%`} label="Engagement Rate" icon={Heart} delay={0.2} />
              <StatCard value={`${stats.reach}M+`} label="Monthly Reach" icon={UsersIcon} delay={0.3} />
              <StatCard value={stats.accounts} label="Active Accounts" icon={TargetIcon} delay={0.4} />
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* PLATFORMS SECTION */}
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
                Multi-Platform Advertising
              </h2>
              <p className="text-[#1A394E]/60 max-w-2xl mx-auto">
                Reach your audience across Facebook & Instagram with unified campaign management
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <PlatformCard 
                name="Facebook Ads" 
                icon={Facebook} 
                description="2.9B+ monthly active users"
                color="#1877F2"
                delay={0.1}
              />
              <PlatformCard 
                name="Instagram Ads" 
                icon={Instagram} 
                description="2B+ monthly active users"
                color="#E4405F"
                delay={0.2}
              />
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* AD TYPES SECTION */}
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
                Ad Formats We Master
              </h2>
              <p className="text-[#1A394E]/60 max-w-2xl mx-auto">
                Creative ad solutions that capture attention and drive action
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <AdTypeCard name="Image Ads" icon={Image} description="Single image with compelling copy" delay={0.1} />
              <AdTypeCard name="Video Ads" icon={Video} description="Engaging video content" delay={0.15} />
              <AdTypeCard name="Carousel Ads" icon={Layout} description="Swipeable multi-image ads" delay={0.2} />
              <AdTypeCard name="Collection Ads" icon={ShoppingBag} description="Product showcase for e-commerce" delay={0.25} />
              <AdTypeCard name="Stories Ads" icon={Film} description="Full-screen vertical format" delay={0.3} />
              <AdTypeCard name="Reels Ads" icon={Tv} description="Short-form video ads" delay={0.35} />
              <AdTypeCard name="Lead Ads" icon={MessageSquare} description="Instant lead generation" delay={0.4} />
              <AdTypeCard name="Dynamic Ads" icon={RefreshIcon} description="Personalized product retargeting" delay={0.45} />
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* META ADS SERVICES SECTION */}
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
                Comprehensive Meta Ads Services
              </h2>
              <p className="text-[#1A394E]/60 max-w-2xl mx-auto">
                End-to-end Facebook & Instagram advertising management to maximize your ROI
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                icon={Target}
                title="Audience Targeting"
                description="Reach the right people with precision audience targeting strategies."
                features={["Custom Audiences", "Lookalike Audiences", "Interest Targeting", "Behavioral Targeting", "Retargeting Campaigns"]}
                delay={0.1}
              />
              <ServiceCard
                icon={FileText}
                title="Creative Strategy"
                description="Compelling ad creatives that stop the scroll and drive engagement."
                features={["Ad Copywriting", "Visual Design", "Video Production", "Creative Testing", "Performance Analysis"]}
                delay={0.2}
              />
              <ServiceCard
                icon={Sliders}
                title="Campaign Management"
                description="Expert management of your Meta ad campaigns for optimal performance."
                features={["Bid Optimization", "Budget Allocation", "Ad Scheduling", "Placement Optimization", "A/B Testing"]}
                delay={0.3}
              />
              <ServiceCard
                icon={BarChartIcon}
                title="Conversion Tracking"
                description="Accurate tracking and attribution for all conversions."
                features={["Meta Pixel Setup", "Conversion API", "Event Tracking", "Attribution Modeling", "ROI Analysis"]}
                delay={0.4}
              />
              <ServiceCard
                icon={MessageCircle}
                title="Messenger & WhatsApp"
                description="Engage customers directly through messaging platforms."
                features={["Click-to-Messenger Ads", "WhatsApp Business", "Chatbot Integration", "Automated Responses", "Lead Qualification"]}
                delay={0.5}
              />
              <ServiceCard
                icon={PieChart}
                title="Analytics & Reporting"
                description="Data-driven insights and transparent performance reporting."
                features={["Custom Dashboards", "Real-time Analytics", "Competitor Insights", "Monthly Reports", "Strategic Recommendations"]}
                delay={0.6}
              />
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* HOW IT WORKS SECTION */}
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
                Our Meta Ads Process
              </h2>
              <p className="text-[#1A394E]/60 max-w-2xl mx-auto">
                A systematic approach to maximize your social media advertising ROI
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <ProcessStep number={1} title="Discovery & Strategy" description="Understand your business goals, target audience, and competitive landscape to develop a winning Meta Ads strategy." icon={Target} delay={0.1} />
              <ProcessStep number={2} title="Creative Development" description="Design compelling ad creatives and copy that resonate with your target audience." icon={Image} delay={0.2} />
              <ProcessStep number={3} title="Campaign Setup" description="Configure your Meta Ads account, pixel, and campaign structure for optimal performance." icon={Settings} delay={0.3} />
              <ProcessStep number={4} title="Launch & Monitor" description="Launch campaigns and continuously monitor performance metrics to identify opportunities." icon={Eye} delay={0.4} />
              <ProcessStep number={5} title="Optimization" description="Ongoing A/B testing, audience refinement, and creative optimization to improve ROI." icon={Sliders} delay={0.5} />
              <ProcessStep number={6} title="Reporting & Growth" description="Detailed performance reports and strategic recommendations for scaling success." icon={PieChart} delay={0.6} />
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* WHY CHOOSE US SECTION */}
        {/* ============================================ */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E]">
                  Why Choose Our Meta Ads Services?
                </h2>
                <div className="space-y-4">
                  {[
                    { icon: Award, title: "Meta Business Partner", desc: "Certified Meta Partner with exclusive benefits" },
                    { icon: Users, title: "Certified Experts", desc: "Meta Certified Digital Marketing Associates" },
                    { icon: Shield, title: "Transparent Reporting", desc: "Real-time access to campaign data and insights" },
                    { icon: Heart, title: "Creative Excellence", desc: "In-house creative team for stunning visuals" }
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
                      name="Amanda Lee"
                      role="E-commerce Owner"
                      content="Our Facebook ROAS went from 2x to 5x in just 2 months. The creative testing strategy was game-changing!"
                      rating={5}
                      result="5x ROAS achieved"
                      platform="Facebook & Instagram"
                    />
                    <TestimonialCard
                      name="Brian Foster"
                      role="Marketing Director"
                      content="They helped us scale from $20k to $100k monthly ad spend profitably. Best Meta Ads agency out there."
                      rating={5}
                      result="400% revenue growth"
                      platform="Facebook Ads"
                    />
                    <TestimonialCard
                      name="Jessica Park"
                      role="Small Business Owner"
                      content="Instagram has become our #1 revenue channel. Their creative strategy and audience targeting are exceptional."
                      rating={5}
                      result="3x Instagram revenue"
                      platform="Instagram Ads"
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
        <section className="py-20 bg-white/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E] mb-4">
                Flexible Meta Ads Management Plans
              </h2>
              <p className="text-[#1A394E]/60 max-w-2xl mx-auto">
                Choose the plan that fits your business goals and budget
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <PricingCard
                title="Starter Meta"
                price="$1,299"
                features={[
                  "Up to $15K Ad Spend",
                  "Facebook & Instagram Ads",
                  "Campaign Setup",
                  "Creative Design (2 variants)",
                  "Monthly Optimization",
                  "Monthly Reports"
                ]}
                delay={0.1}
              />
              <PricingCard
                title="Professional Meta"
                price="$2,499"
                features={[
                  "Up to $50K Ad Spend",
                  "Full Platform Coverage",
                  "Advanced Creative Strategy",
                  "Weekly Optimization",
                  "A/B Creative Testing",
                  "Conversion Tracking",
                  "Priority Support"
                ]}
                isPopular={true}
                delay={0.2}
              />
              <PricingCard
                title="Enterprise Meta"
                price="Custom"
                features={[
                  "Unlimited Ad Spend",
                  "Multi-Account Management",
                  "Dedicated Creative Team",
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
        {/* META PARTNER BADGES */}
        {/* ============================================ */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center">
                    <Facebook className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#1A394E]">Meta Business Partner</h2>
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50">
                  <div className="text-2xl font-bold text-[#2C727B]">$25M+</div>
                  <div className="text-xs text-[#1A394E]/60">Ad Spend Managed</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50">
                  <div className="text-2xl font-bold text-[#2C727B]">3M+</div>
                  <div className="text-xs text-[#1A394E]/60">Conversions Generated</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50">
                  <div className="text-2xl font-bold text-[#2C727B]">4.8%</div>
                  <div className="text-xs text-[#1A394E]/60">Avg. CTR</div>
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
        <section className="py-20 bg-white/40 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E] mb-4">
                Meta Ads FAQs
              </h2>
              <p className="text-[#1A394E]/60">
                Everything you need to know about our Meta advertising services
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  q: "What's the minimum budget for Meta Ads?",
                  a: "We recommend starting with at least $1,500-2,500/month for effective testing and optimization. This allows us to gather sufficient data and scale winning campaigns."
                },
                {
                  q: "Which platforms do you advertise on?",
                  a: "We advertise across Facebook, Instagram, Messenger, and WhatsApp, with unified campaign management and cross-platform optimization."
                },
                {
                  q: "How do you measure success?",
                  a: "We track key metrics including ROAS, CPA, CTR, conversion rate, and overall revenue. You'll receive detailed monthly reports with actionable insights."
                },
                {
                  q: "Can you create ad creatives?",
                  a: "Yes! Our in-house creative team designs high-performing ad creatives including images, videos, carousels, and stories."
                },
                {
                  q: "How long until I see results?",
                  a: "Initial results can be seen within the first week, with meaningful optimization typically taking 30-45 days. We continuously test and refine for better performance."
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
                Ready to Scale with Meta Ads?
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Get a free Meta Ads audit and discover how our Facebook & Instagram advertising can grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-xl bg-white text-[#1A394E] font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Get Free Meta Ads Audit
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