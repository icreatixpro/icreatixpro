// app/services/local-seo/page.tsx
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
  MapPin,
  Store,
  Phone,
  Mail,
  Clock,
  DollarSign,
  Eye,
  Navigation,
  Building,
  Calendar,
  MessageCircle,
  Star as StarIcon,
  Award as AwardIcon,
  Trophy,
  BadgeCheck,
  LocateFixed,
  Radio,
  Map,
  Pin,
  Navigation2,
  Church,
  Home,
  Coffee,
  Utensils,
  Briefcase,
  Link2
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

const TestimonialCard = ({ name, role, content, rating, location }: any) => (
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
        <div className="text-xs text-[#1A394E]/50">{role} • {location}</div>
      </div>
    </div>
  </motion.div>
);

const BusinessTypeCard = ({ icon: Icon, name, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.3 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50 hover:shadow-md transition-all"
  >
    <Icon className="w-8 h-8 text-[#2C727B] mb-2" />
    <span className="text-sm font-medium text-[#1A394E]">{name}</span>
  </motion.div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export default function LocalSEOServicesPage() {
  const [stats, setStats] = useState({
    rankings: 0,
    traffic: 0,
    conversions: 0,
    citations: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        rankings: 98,
        traffic: 150,
        conversions: 35,
        citations: 250
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Local SEO Services | Dominate Local Search Results | iCreatixPRO</title>
        <meta
          name="description"
          content="Rank #1 in local search results with our professional Local SEO services. Google Business Profile optimization, local citations, review management, and more. Get a free local SEO audit today!"
        />
        <meta name="keywords" content="local SEO, Google Business Profile, local citations, review management, map pack optimization, local search" />
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-2000" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium mb-6">
                <MapPin className="w-3 h-3" />
                #1 Local SEO Agency 2026
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1A394E] mb-6">
                Dominate Local Search
                <span className="block bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
                  Attract Nearby Customers
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-[#1A394E]/60 max-w-2xl mx-auto mb-8">
                Get found by customers in your area with our proven local SEO strategies. 
                Rank in Google's Map Pack and drive foot traffic to your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Get Free Local SEO Audit
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/50 text-[#1A394E] font-semibold hover:bg-white/90 transition-all flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  Watch Success Story
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
              <StatCard value={`${stats.rankings}%`} label="Map Pack Visibility" icon={MapPin} delay={0.1} />
              <StatCard value={`${stats.traffic}%`} label="Local Traffic Increase" icon={Users} delay={0.2} />
              <StatCard value={`${stats.conversions}%`} label="Walk-in Conversions" icon={Store} delay={0.3} />
              <StatCard value={`${stats.citations}+`} label="Local Citations" icon={Building} delay={0.4} />
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* BUSINESS TYPES SECTION */}
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
                We Help All Local Businesses
              </h2>
              <p className="text-[#1A394E]/60 max-w-2xl mx-auto">
                From restaurants to law firms, we've helped hundreds of local businesses dominate search
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <BusinessTypeCard icon={Coffee} name="Cafes & Restaurants" delay={0.1} />
              <BusinessTypeCard icon={Home} name="Real Estate" delay={0.15} />
              <BusinessTypeCard icon={Briefcase} name="Law Firms" delay={0.2} />
              <BusinessTypeCard icon={Heart} name="Healthcare" delay={0.25} />
              <BusinessTypeCard icon={Store} name="Retail Stores" delay={0.3} />
              <BusinessTypeCard icon={Building} name="Professional Services" delay={0.35} />
              <BusinessTypeCard icon={Utensils} name="Hotels & Hospitality" delay={0.4} />
              <BusinessTypeCard icon={Church} name="Religious Orgs" delay={0.45} />
              <BusinessTypeCard icon={Briefcase} name="Contractors" delay={0.5} />
              <BusinessTypeCard icon={Heart} name="Salons & Spas" delay={0.55} />
              <BusinessTypeCard icon={Store} name="Auto Services" delay={0.6} />
              <BusinessTypeCard icon={Building} name="Dental Practices" delay={0.65} />
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* LOCAL SEO SERVICES SECTION */}
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
                Comprehensive Local SEO Services
              </h2>
              <p className="text-[#1A394E]/60 max-w-2xl mx-auto">
                Everything you need to dominate local search results and attract nearby customers
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                icon={MapPin}
                title="Google Business Profile"
                description="Optimize your GBP for maximum visibility in local search results."
                features={["Profile Optimization", "Category Selection", "Photo Management", "Post Scheduling", "Insights Tracking"]}
                delay={0.1}
              />
              <ServiceCard
                icon={Building}
                title="Local Citations"
                description="Build consistent NAP citations across authoritative local directories."
                features={["Directory Submission", "NAP Consistency", "Citation Audit", "Duplicate Removal", "Ongoing Monitoring"]}
                delay={0.2}
              />
              <ServiceCard
                icon={StarIcon}
                title="Review Management"
                description="Generate positive reviews and manage your online reputation."
                features={["Review Generation", "Response Management", "Rating Monitoring", "Sentiment Analysis", "Review Widgets"]}
                delay={0.3}
              />
              <ServiceCard
                icon={Search}
                title="Local Keyword Research"
                description="Target high-intent local search queries that drive conversions."
                features={["Geo-targeted Keywords", "Local Intent Analysis", "Competitor Research", "Search Volume Data", "Keyword Tracking"]}
                delay={0.4}
              />
              <ServiceCard
                icon={Navigation}
                title="Local Content Strategy"
                description="Create location-specific content that ranks and converts."
                features={["Location Pages", "City-specific Content", "Local Blog Posts", "Landing Page Optimization", "Local Schema"]}
                delay={0.5}
              />
              <ServiceCard
                icon={Link2}
                title="Local Link Building"
                description="Build high-quality local backlinks from relevant sources."
                features={["Local Directories", "Sponsorships", "Community Events", "Local Partnerships", "Chamber of Commerce"]}
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
                Our Local SEO Process
              </h2>
              <p className="text-[#1A394E]/60 max-w-2xl mx-auto">
                A proven methodology that delivers top local rankings and increased foot traffic
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <ProcessStep number={1} title="Local SEO Audit" description="Comprehensive analysis of your current local search presence and competitor landscape." icon={Search} delay={0.1} />
              <ProcessStep number={2} title="GBP Optimization" description="Full optimization of your Google Business Profile for maximum visibility." icon={MapPin} delay={0.2} />
              <ProcessStep number={3} title="Citation Building" description="Build and clean up citations across authoritative local directories." icon={Building} delay={0.3} />
              <ProcessStep number={4} title="Review Management" description="Implement strategies to generate positive reviews and manage reputation." icon={StarIcon} delay={0.4} />
              <ProcessStep number={5} title="Local Content" description="Create location-specific content optimized for local search queries." icon={FileText} delay={0.5} />
              <ProcessStep number={6} title="Monitoring & Reporting" description="Track rankings, traffic, and conversions with detailed monthly reports." icon={BarChart3} delay={0.6} />
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
                  Why Choose Our Local SEO Services?
                </h2>
                <div className="space-y-4">
                  {[
                    { icon: Trophy, title: "Proven Local Results", desc: "100+ businesses ranked in Map Pack" },
                    { icon: Users, title: "Local SEO Experts", desc: "Specialized in local search optimization" },
                    { icon: Shield, title: "White Hat Techniques", desc: "Google-compliant strategies only" },
                    { icon: Heart, title: "Transparent Reporting", desc: "Real-time local ranking dashboards" }
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
                      Local Business Success Stories
                    </div>
                  </div>
                  <div className="space-y-4">
                    <TestimonialCard
                      name="Sarah Martinez"
                      role="Owner"
                      location="Austin, TX"
                      content="Our store visits increased by 200% after working with their local SEO team. We're now #1 in the map pack!"
                      rating={5}
                    />
                    <TestimonialCard
                      name="Dr. James Wilson"
                      role="Dental Practice"
                      location="Portland, OR"
                      content="New patient appointments have doubled since they optimized our Google Business Profile. Amazing results!"
                      rating={5}
                    />
                    <TestimonialCard
                      name="Michael Chang"
                      role="Restaurant Owner"
                      location="Chicago, IL"
                      content="We went from page 3 to the top 3 in map pack. Our phone hasn't stopped ringing since!"
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
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E] mb-4">
                Local SEO Pricing Plans
              </h2>
              <p className="text-[#1A394E]/60 max-w-2xl mx-auto">
                Flexible packages tailored to your local business needs and budget
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <PricingCard
                title="Starter Local"
                price="$799"
                features={[
                  "GBP Optimization",
                  "50 Local Citations",
                  "Monthly Review Management",
                  "Basic Local Keyword Tracking",
                  "Monthly Reports"
                ]}
                delay={0.1}
              />
              <PricingCard
                title="Professional Local"
                price="$1,499"
                features={[
                  "Full GBP Optimization",
                  "150 Local Citations",
                  "Advanced Review Management",
                  "Local Content (2 posts)",
                  "Local Link Building",
                  "Weekly Reports",
                  "Priority Support"
                ]}
                isPopular={true}
                delay={0.2}
              />
              <PricingCard
                title="Enterprise Local"
                price="$2,499"
                features={[
                  "Multi-location GBP",
                  "Unlimited Citations",
                  "Full Reputation Management",
                  "Custom Local Content",
                  "Advanced Local Link Building",
                  "Real-time Dashboard",
                  "Dedicated Account Manager"
                ]}
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* LOCAL RANKINGS MAP PREVIEW */}
        {/* ============================================ */}
        <section className="py-20 bg-white/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E] mb-4">
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 p-6 shadow-lg">
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
                Local SEO FAQs
              </h2>
              <p className="text-[#1A394E]/60">
                Everything you need to know about local SEO services
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  q: "What is Local SEO and why do I need it?",
                  a: "Local SEO helps your business appear in local search results when customers search for products or services 'near me'. 46% of all Google searches are local, making it essential for businesses with physical locations."
                },
                {
                  q: "How long does Local SEO take to show results?",
                  a: "Local SEO typically shows initial improvements within 1-2 months, with significant results in 3-6 months. Google Business Profile optimizations can show faster results."
                },
                {
                  q: "Do I need a Google Business Profile?",
                  a: "Yes! A Google Business Profile is essential for local SEO. It's free and helps you appear in Google Maps and local search results."
                },
                {
                  q: "What are local citations and why are they important?",
                  a: "Local citations are mentions of your business NAP (Name, Address, Phone) on other websites. Consistent citations help Google verify your business information and improve local rankings."
                },
                {
                  q: "How do reviews affect local SEO?",
                  a: "Reviews are a top local ranking factor. Businesses with positive reviews and high ratings consistently outrank competitors in local search results."
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
              <MapPin className="w-16 h-16 mx-auto mb-6 opacity-50" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Dominate Local Search?
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Get a free local SEO audit and discover exactly how to attract more nearby customers to your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-xl bg-white text-[#1A394E] font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Get Free Local SEO Audit
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/50 text-white font-semibold hover:bg-white/30 transition-all"
                >
                  View Local Success Stories
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}