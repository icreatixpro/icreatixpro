// app/services/search-engine-optimization/page.tsx
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
  Code,
  Smartphone,
  Clock,
  DollarSign,
  Eye,
  MapPin,
  Link2,
  Share2,
  AlertCircle,
  Activity,
  Database,
  Layout,
  RefreshCw,
  Server,
  ShoppingBag,
  Video,
  Image,
  MessageCircle,
  Mail
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
      <p className="text-xs text-[#1A394E]/50 mt-1">per month</p>
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

const TestimonialCard = ({ name, role, content, rating, image }: any) => (
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
      </div>
    </div>
  </motion.div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export default function SEOServicesPage() {
  const [stats, setStats] = useState({
    keywords: 0,
    traffic: 0,
    conversions: 0,
    roi: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        keywords: 15000,
        traffic: 300,
        conversions: 45,
        roi: 500
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>SEO Services | Professional Search Engine Optimization | iCreatixPRO</title>
        <meta
          name="description"
          content="Rank #1 on Google with our professional SEO services. Keyword research, on-page optimization, link building, and technical SEO. Get a free SEO audit today!"
        />
        <meta name="keywords" content="SEO services, search engine optimization, keyword research, link building, technical SEO, local SEO" />
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-2000" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium mb-6">
                <Sparkles className="w-3 h-3" />
                #1 SEO Agency 2026
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1A394E] mb-6">
                Dominate Search Rankings
                <span className="block bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
                  With Our SEO Services
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-[#1A394E]/60 max-w-2xl mx-auto mb-8">
                Drive organic traffic, increase visibility, and grow your business with our data-driven 
                SEO strategies that deliver measurable results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Get Free SEO Audit
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
              <StatCard value={`${stats.keywords}+`} label="Keywords Ranked" icon={Target} delay={0.1} />
              <StatCard value={`${stats.traffic}%`} label="Traffic Increase" icon={TrendingUp} delay={0.2} />
              <StatCard value={`${stats.conversions}%`} label="Conversion Rate" icon={Activity} delay={0.3} />
              <StatCard value={`${stats.roi}%`} label="Avg. ROI" icon={DollarSign} delay={0.4} />
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SEO SERVICES SECTION */}
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
                Comprehensive SEO Services
              </h2>
              <p className="text-[#1A394E]/60 max-w-2xl mx-auto">
                We offer end-to-end SEO solutions tailored to your business goals and industry
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                icon={Search}
                title="Keyword Research"
                description="Identify high-value keywords that drive qualified traffic and conversions."
                features={["Competitor Analysis", "Long-tail Keywords", "Search Intent Mapping", "Keyword Clustering", "Difficulty Scoring"]}
                delay={0.1}
              />
              <ServiceCard
                icon={Code}
                title="On-Page SEO"
                description="Optimize your website structure and content for maximum visibility."
                features={["Meta Tags Optimization", "Header Structure", "Content Optimization", "Internal Linking", "Image Optimization"]}
                delay={0.2}
              />
              <ServiceCard
                icon={Server}
                title="Technical SEO"
                description="Ensure search engines can crawl, index, and understand your website."
                features={["Site Speed Optimization", "Mobile Optimization", "Schema Markup", "XML Sitemaps", "Robots.txt"]}
                delay={0.3}
              />
              <ServiceCard
                icon={Link2}
                title="Link Building"
                description="Build high-quality backlinks from authoritative websites in your niche."
                features={["Guest Posting", "Digital PR", "Broken Link Building", "Resource Page Links", "Competitor Backlinks"]}
                delay={0.4}
              />
              <ServiceCard
                icon={MapPin}
                title="Local SEO"
                description="Dominate local search results and attract nearby customers."
                features={["Google Business Profile", "Local Citations", "Review Management", "Local Content", "Map Pack Optimization"]}
                delay={0.5}
              />
              <ServiceCard
                icon={ShoppingBag}
                title="E-commerce SEO"
                description="Optimize your online store for product searches and conversions."
                features={["Product Page SEO", "Category Optimization", "Faceted Navigation", "Rich Snippets", "User Reviews"]}
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
                Our SEO Process
              </h2>
              <p className="text-[#1A394E]/60 max-w-2xl mx-auto">
                A proven 6-step methodology that consistently delivers top rankings
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <ProcessStep number={1} title="SEO Audit & Analysis" description="Comprehensive website analysis to identify opportunities and issues affecting your rankings." icon={Search} delay={0.1} />
              <ProcessStep number={2} title="Keyword Strategy" description="Data-driven keyword research targeting high-intent search queries." icon={Target} delay={0.2} />
              <ProcessStep number={3} title="On-Page Optimization" description="Optimizing content, meta tags, and site structure for target keywords." icon={Code} delay={0.3} />
              <ProcessStep number={4} title="Technical SEO" description="Fixing crawl errors, improving speed, and implementing schema markup." icon={Server} delay={0.4} />
              <ProcessStep number={5} title="Link Building" description="Building authoritative backlinks to increase domain authority." icon={Link2} delay={0.5} />
              <ProcessStep number={6} title="Monitoring & Reporting" description="Continuous tracking, optimization, and detailed monthly reports." icon={BarChart3} delay={0.6} />
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
                  Why Choose Our SEO Services?
                </h2>
                <div className="space-y-4">
                  {[
                    { icon: Award, title: "Proven Track Record", desc: "100+ businesses ranked on page 1" },
                    { icon: Users, title: "Expert SEO Team", desc: "Certified professionals with 10+ years experience" },
                    { icon: Shield, title: "White Hat Techniques", desc: "100% Google-compliant strategies" },
                    { icon: Heart, title: "Transparent Reporting", desc: "Real-time dashboards and monthly reports" }
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
                      name="David Miller"
                      role="CEO, TechFlow"
                      content="Our organic traffic increased by 250% in just 6 months. The team's SEO expertise is unmatched!"
                      rating={5}
                    />
                    <TestimonialCard
                      name="Lisa Thompson"
                      role="Marketing Director"
                      content="Finally found an SEO agency that delivers results. We're now ranking #1 for our primary keywords."
                      rating={5}
                    />
                    <TestimonialCard
                      name="James Wilson"
                      role="Small Business Owner"
                      content="The ROI from their SEO services has been incredible. Best investment we've made for our business."
                      rating={5}
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
                Flexible Pricing Plans
              </h2>
              <p className="text-[#1A394E]/60 max-w-2xl mx-auto">
                Choose the perfect SEO package for your business needs and budget
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <PricingCard
                title="Starter SEO"
                price="$999"
                features={[
                  "10 Keywords Tracked",
                  "On-Page Optimization",
                  "Monthly Content (2 posts)",
                  "Basic Link Building",
                  "Monthly Reports"
                ]}
                delay={0.1}
              />
              <PricingCard
                title="Professional SEO"
                price="$1,999"
                features={[
                  "30 Keywords Tracked",
                  "Full On-Page SEO",
                  "Monthly Content (5 posts)",
                  "Advanced Link Building",
                  "Technical SEO Audit",
                  "Weekly Reports",
                  "Priority Support"
                ]}
                isPopular={true}
                delay={0.2}
              />
              <PricingCard
                title="Enterprise SEO"
                price="$3,999"
                features={[
                  "Unlimited Keywords",
                  "Comprehensive Optimization",
                  "Custom Content Strategy",
                  "Enterprise Link Building",
                  "Full Technical SEO",
                  "Real-time Dashboard",
                  "Dedicated Account Manager"
                ]}
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* TOOLS & TECHNOLOGIES */}
        {/* ============================================ */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-2">
                Enterprise SEO Tools We Use
              </h2>
              <p className="text-[#1A394E]/60">Industry-leading platforms for maximum results</p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-6">
              {[
                "SEMrush", "Ahrefs", "Moz Pro", "Screaming Frog", "Google Search Console",
                "Google Analytics", "Majestic", "BuzzSumo", "Surfer SEO", "Clearscope"
              ].map((tool, i) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="px-6 py-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/50 text-[#1A394E]/70 text-sm font-medium hover:shadow-md transition-all"
                >
                  {tool}
                </motion.div>
              ))}
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
                Frequently Asked Questions
              </h2>
              <p className="text-[#1A394E]/60">
                Everything you need to know about our SEO services
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  q: "How long does SEO take to show results?",
                  a: "While some improvements can be seen within 3-6 weeks, significant ranking improvements typically take 3-6 months. SEO is a long-term investment that compounds over time."
                },
                {
                  q: "Do you guarantee #1 rankings?",
                  a: "No ethical SEO agency can guarantee #1 rankings. However, we guarantee to use white-hat techniques and provide transparent reporting on our progress."
                },
                {
                  q: "What industries do you specialize in?",
                  a: "We work with businesses across e-commerce, healthcare, real estate, technology, legal, hospitality, and professional services."
                },
                {
                  q: "Will you optimize my existing content?",
                  a: "Yes! We'll audit and optimize your existing content as part of our on-page SEO services."
                },
                {
                  q: "Do you provide monthly reports?",
                  a: "Yes, you'll receive detailed monthly reports showing keyword rankings, traffic growth, conversions, and ROI metrics."
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Rank #1 on Google?
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Get a free SEO audit and discover exactly what it takes to dominate your market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-xl bg-white text-[#1A394E] font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Get Free SEO Audit
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/50 text-white font-semibold hover:bg-white/30 transition-all"
                >
                  View Success Stories
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}