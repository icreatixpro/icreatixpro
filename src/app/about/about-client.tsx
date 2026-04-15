"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Target,
  Zap,
  Shield,
  Heart,
  Star,
  Award,
  Clock,
  BarChart3,
  Globe2,
  Brain,
  Rocket,
  ChevronRight,
  Play,
  Quote,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ExternalLink,
  Building2,
  Lightbulb,
  LineChart,
  Settings2,
  Code2,
  Palette,
  Megaphone,
  Search,
  Database,
  Cpu,
  // Infinity - REMOVED: This conflicts with JavaScript's Infinity
  Crown,
  Gem,
  BadgeCheck,
  Trophy,
  ThumbsUp,
  MessageCircle,
  Calendar,
  Download,
  Video,
  BookOpen,
  Users2,
  Briefcase,
  Layers,
  Compass,
  Flag,
  Globe,
  HeartHandshake,
  PenTool,
  Layout,
  Smartphone,
  Monitor,
  Tablet,
  Laptop,
  Apple,
  Chrome,
  Figma,
  Github,
  Twitter as TwitterLogo,
  Linkedin as LinkedinLogo,
  Youtube,
  Instagram as InstagramLogo,
  Mic2,
  Eye,
  Bot,
  Network,
  Cloud,
  Lock,
  RefreshCw,
  Gem as GemIcon,
  GraduationCap,
  ChartLine,
  Telescope,
  Microscope,
  Radio,
  Waves,
  Binary,
  CircuitBoard,
  Workflow,
  Sparkle
} from "lucide-react";

// ============================================
// BRAND COLORS
// ============================================
const colors = {
  primary: "#2C727B",
  primaryDark: "#1A394E",
  primaryLight: "#4A9BA6",
  secondary: "#F5F7FA",
  accent: "#E8F4F2",
  text: "#1F2937",
  textLight: "#6B7280",
};

// ============================================
// TEAM MEMBERS DATA (Expanded)
// ============================================

const teamMembers = [
  {
    name: "Alexandra Chen",
    role: "CEO & Founder",
    bio: "Former Google Search Quality engineer with 18+ years in SEO and AI integration",
    expertise: ["AI Strategy", "Search Algorithms", "Business Growth"],
    image: "/team/alexandra-chen.jpg",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Marcus Rodriguez",
    role: "Chief AI Officer",
    bio: "AI researcher turned SEO architect, built proprietary ML models for Fortune 500",
    expertise: ["Machine Learning", "NLP", "Predictive Analytics"],
    image: "/team/marcus-rodriguez.jpg",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Sophia Williams",
    role: "Director of Content Strategy",
    bio: "Former NY Times editor, leading AI-powered content ecosystems",
    expertise: ["Content AI", "Topic Clusters", "EEAT Optimization"],
    image: "/team/sophia-williams.jpg",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "David Kim",
    role: "Technical SEO Lead",
    bio: "Full-stack developer & Core Web Vitals specialist",
    expertise: ["Core Web Vitals", "Site Architecture", "JavaScript SEO"],
    image: "/team/david-kim.jpg",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Priya Patel",
    role: "Head of Voice & Visual Search",
    bio: "Pioneer in multimodal search optimization",
    expertise: ["Voice Search", "Visual Recognition", "Multimodal AI"],
    image: "/team/priya-patel.jpg",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "James Wilson",
    role: "Data Science Director",
    bio: "PhD in Computational Linguistics, 10+ patents in search tech",
    expertise: ["Data Mining", "Pattern Recognition", "Search Analytics"],
    image: "/team/james-wilson.jpg",
    social: { linkedin: "#", github: "#" },
  },
];

// ============================================
// MILESTONE DATA (Updated to 2026)
// ============================================

const milestones = [
  { 
    year: "2020", 
    title: "Founded", 
    description: "Started with a mission to fix broken SEO and deliver real ROI",
    icon: Rocket,
    achievements: ["First 10 clients", "100% growth rate", "Seed funding secured"]
  },
  { 
    year: "2021", 
    title: "AI Integration", 
    description: "Built proprietary AI ranking system and ML prediction models",
    icon: Brain,
    achievements: ["AI patent filed", "50+ enterprise clients", "Team expanded to 25"]
  },
  { 
    year: "2022", 
    title: "Global Expansion", 
    description: "Helped 500+ businesses scale across 15 countries",
    icon: Globe,
    achievements: ["International offices opened", "$5M+ client revenue generated", "Industry awards won"]
  },
  { 
    year: "2023", 
    title: "Market Leadership", 
    description: "Awarded Top AI SEO Agency by Search Engine Journal",
    icon: Trophy,
    achievements: ["1000+ projects completed", "98% client retention", "Featured in Forbes"]
  },
  { 
    year: "2024", 
    title: "Future Ready", 
    description: "Expanding into voice & visual search ecosystems",
    icon: Mic2,
    achievements: ["Voice search optimization launched", "Visual recognition AI deployed", "SGE optimization mastered"]
  },
  { 
    year: "2025", 
    title: "Generative AI Revolution", 
    description: "Pioneered GenAI optimization & multimodal search strategies",
    icon: Sparkle,
    achievements: ["GenAI content systems", "Multimodal ranking success", "SearchGPT optimization"]
  },
  { 
    year: "2026", 
    title: "Autonomous SEO", 
    description: "Self-optimizing AI agents & predictive growth engines",
    icon: Bot,
    achievements: ["Autonomous optimization", "Real-time adaptation", "Cross-platform dominance"],
    isCurrent: true
  },
];

// ============================================
// VALUES DATA (Enhanced)
// ============================================

const values = [
  { icon: Heart, title: "Client First", description: "Your success is our success. We measure our performance by your ROI and business growth.", metric: "98% Client Retention" },
  { icon: Brain, title: "AI Innovation", description: "Leveraging cutting-edge AI to stay 2+ years ahead of algorithm changes.", metric: "15 AI Patents Pending" },
  { icon: Shield, title: "Transparency", description: "Clear reporting, honest communication, no hidden fees or surprises.", metric: "100% Audit Trail" },
  { icon: TrendingUp, title: "Data-Driven", description: "Every decision backed by real data, predictive analytics, and market insights.", metric: "1B+ Data Points" },
  { icon: Zap, title: "Agility", description: "Fast adaptation to market changes, algorithm updates, and new opportunities.", metric: "24hr Response Time" },
  { icon: Target, title: "Results Focused", description: "We chase revenue, market share, and sustainable growth—not just rankings.", metric: "300% Avg ROI" },
  { icon: Lock, title: "Security First", description: "Enterprise-grade security for all client data and proprietary systems.", metric: "ISO 27001 Certified" },
  { icon: RefreshCw, title: "Continuous Learning", description: "Always evolving, always improving, never satisfied with status quo.", metric: "200+ Research Hours/Month" },
];

// ============================================
// STATS DATA (Updated)
// ============================================

const stats = [
  { value: "1500+", label: "Projects Completed", icon: Briefcase, trend: "+45% YoY" },
  { value: "99%", label: "Client Retention", icon: ThumbsUp, trend: "Industry Best" },
  { value: "50M+", label: "Organic Traffic Generated", icon: BarChart3, trend: "+200% YoY" },
  { value: "75+", label: "Expert Team Members", icon: Users2, trend: "5 Countries" },
  { value: "4.98", label: "Client Rating", icon: Star, trend: "Out of 5" },
  { value: "24/7", label: "AI-Powered Support", icon: Clock, trend: "Instant Response" },
  { value: "15+", label: "Countries Served", icon: Globe2, trend: "Global Reach" },
  { value: "$250M+", label: "Client Revenue Generated", icon: TrendingUp, trend: "And Growing" },
];

// ============================================
// SERVICES EXPERTISE
// ============================================

const expertiseAreas = [
  { icon: Search, title: "AI-Powered SEO", description: "Predictive keyword intelligence and automated optimization" },
  { icon: Mic2, title: "Voice Search Optimization", description: "Dominate voice assistants and conversational AI" },
  { icon: Eye, title: "Visual Search", description: "Optimize for Google Lens and multimodal queries" },
  { icon: Bot, title: "Generative AI Optimization", description: "Rank on ChatGPT, Gemini, and AI overviews" },
  { icon: Network, title: "Entity SEO", description: "Build topical authority and knowledge graphs" },
  { icon: Cloud, title: "Cloud Infrastructure", description: "Scalable hosting and Core Web Vitals optimization" },
];

// ============================================
// TESTIMONIALS DATA (Updated)
// ============================================

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "iCreatixPRO didn't just improve our rankings—they transformed our entire digital presence. Their AI-driven approach generated $5M in organic revenue within 12 months.",
    rating: 5,
    metric: "$5M Revenue Generated",
    image: "/testimonials/sarah.jpg",
  },
  {
    name: "Michael Brown",
    role: "CMO, GrowthLabs",
    content: "The team at iCreatixPRO understands modern search behavior better than anyone. They helped us dominate AI overviews and voice search results in under 6 months.",
    rating: 5,
    metric: "300% Traffic Increase",
    image: "/testimonials/michael.jpg",
  },
  {
    name: "Emily Davis",
    role: "Founder, EcoBrands",
    content: "Finally, an agency that delivers what they promise. Our organic visibility increased 400% and we're now ranking for 5,000+ keywords. The transparency is unmatched.",
    rating: 5,
    metric: "400% Visibility Growth",
    image: "/testimonials/emily.jpg",
  },
  {
    name: "Dr. Robert Chen",
    role: "CTO, HealthTech AI",
    content: "Their technical SEO expertise is world-class. They optimized our Core Web Vitals from 45 to 95+ and helped us achieve featured snippets for 200+ medical terms.",
    rating: 5,
    metric: "95+ Core Web Vitals",
    image: "/testimonials/robert.jpg",
  },
];

// ============================================
// TRUST BADGES
// ============================================

const trustBadges = [
  "Google Premier Partner",
  "Microsoft AI Partner", 
  "SEMrush Certified",
  "HubSpot Platinum",
  "Forbes Agency Council",
  "Inc. 5000 Honoree",
];

// ============================================
// MAIN CLIENT COMPONENT
// ============================================

export default function AboutClient() {
  const [scrollY, setScrollY] = React.useState(0);
  const [hoveredMilestone, setHoveredMilestone] = React.useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative overflow-x-hidden bg-gradient-to-b from-white via-[#F5F7FA] to-white">
      
      {/* ============================================ */}
      {/* HERO SECTION - Premium Design */}
      {/* ============================================ */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Animated Background with Brand Colors */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(44,114,123,0.08),transparent_50%),radial-gradient(ellipse_at_80%_70%,rgba(26,57,78,0.06),transparent_50%)]" />
          
          <motion.div 
            animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[600px] h-[600px] bg-[#2C727B]/10 blur-[120px] rounded-full top-[-200px] left-[-200px]"
          />
          <motion.div 
            animate={{ x: [0, -80, 0], y: [0, -40, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[500px] h-[500px] bg-[#1A394E]/10 blur-[120px] rounded-full bottom-[-150px] right-[-150px]"
          />
          
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb15_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb15_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Trust Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full border border-[#2C727B]/20 bg-white/80 backdrop-blur-xl shadow-lg"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2C727B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2C727B]"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#2C727B]">
              🏆 #1 AI SEO Agency 2026 | Trusted by 1500+ Businesses
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            <span className="block text-gray-900">
              We Don't Just Rank
            </span>
            <span className="block mt-3 bg-gradient-to-r from-[#2C727B] via-[#1A394E] to-[#2C727B] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              We Engineer Growth Engines
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Most agencies optimize for traffic. We build autonomous AI systems that 
            <br />
            <span className="text-[#2C727B] font-semibold">
              turn clicks into customers and customers into brand advocates.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group relative px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#2C727B] to-[#1A394E] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Free AI Strategy Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A394E] to-[#2C727B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <Link
              href="/case-studies"
              className="px-8 py-4 rounded-xl font-semibold border-2 border-[#2C727B]/30 bg-white/60 backdrop-blur-sm text-[#1A394E] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:bg-white/80"
            >
              View Success Stories
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 flex flex-wrap justify-center gap-6"
          >
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-600 bg-white/50 px-3 py-1.5 rounded-full">
                <BadgeCheck className="w-4 h-4 text-[#2C727B]" />
                <span>{badge}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <div className="w-6 h-10 rounded-full border-2 border-[#2C727B]/40 flex justify-center">
            <div className="w-1.5 h-2.5 bg-[#2C727B] rounded-full mt-2 animate-scroll" />
          </div>
        </motion.div>
      </section>

      {/* ============================================ */}
      {/* STATS SECTION */}
      {/* ============================================ */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-[#2C727B]/5 to-[#1A394E]/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">By the Numbers</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2C727B] to-[#1A394E] mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-gray-600">The impact we've delivered for our clients</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group text-center p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#2C727B]/10 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2C727B]/10 to-[#1A394E]/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-[#2C727B]" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
                <div className="text-xs text-[#2C727B] font-medium mt-2">{stat.trend}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* OUR STORY - Enhanced Timeline Section */}
      {/* ============================================ */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#2C727B] font-semibold text-sm uppercase tracking-wider">Our Evolution</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2">
              From Startup to Industry Leader
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2C727B] to-[#1A394E] mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Six years of innovation, adaptation, and relentless pursuit of excellence
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-[#2C727B] via-[#1A394E] to-[#2C727B] hidden lg:block -translate-x-1/2" />
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative lg:grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 0 ? "" : "lg:text-right"
                  }`}
                  onMouseEnter={() => setHoveredMilestone(index)}
                  onMouseLeave={() => setHoveredMilestone(null)}
                >
                  <div className={`${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12 lg:col-start-2"}`}>
                    <div className={`bg-white rounded-2xl p-6 shadow-xl border-l-4 border-[#2C727B] hover:shadow-2xl transition-all duration-300 ${
                      milestone.isCurrent ? "ring-2 ring-[#2C727B]/20" : ""
                    }`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2C727B]/10 to-[#1A394E]/10 flex items-center justify-center">
                          <milestone.icon className="w-7 h-7 text-[#2C727B]" />
                        </div>
                        <div>
                          <span className="text-sm font-bold text-[#2C727B]">{milestone.year}</span>
                          <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                        </div>
                        {milestone.isCurrent && (
                          <span className="ml-auto px-2 py-1 bg-[#2C727B] text-white text-xs rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3">{milestone.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {milestone.achievements.map((achievement, i) => (
                          <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            ✓ {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className={`hidden lg:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${
                    milestone.isCurrent ? "bg-[#2C727B] ring-4 ring-[#2C727B]/20" : "bg-[#1A394E]"
                  } shadow-lg`} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* EXPERTISE SECTION */}
      {/* ============================================ */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-b from-[#F5F7FA] to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#2C727B] font-semibold text-sm uppercase tracking-wider">Core Competencies</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2">
              Future-Ready Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2C727B] to-[#1A394E] mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Mastering the technologies shaping search in 2026 and beyond
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-white border border-[#2C727B]/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2C727B]/10 to-[#1A394E]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <area.icon className="w-7 h-7 text-[#2C727B]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* OUR VALUES SECTION */}
      {/* ============================================ */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#2C727B] font-semibold text-sm uppercase tracking-wider">Our Foundation</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2">
              What Drives Us
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2C727B] to-[#1A394E] mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Core values that shape every decision, strategy, and client interaction
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-white to-[#F5F7FA] border border-[#2C727B]/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2C727B]/10 to-[#1A394E]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-[#2C727B]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{value.description}</p>
                <div className="inline-block px-2 py-1 bg-[#2C727B]/10 rounded-md">
                  <span className="text-xs font-semibold text-[#2C727B]">{value.metric}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TEAM SECTION */}
      {/* ============================================ */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-b from-[#F5F7FA] to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#2C727B] font-semibold text-sm uppercase tracking-wider">The Dream Team</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2">
              Meet the Minds Behind the Magic
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2C727B] to-[#1A394E] mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              75+ experts across 5 countries, united by a passion for search innovation
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white p-6 text-center shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                  <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center mb-4 shadow-lg">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-[#2C727B] font-semibold text-sm mt-1">{member.role}</p>
                  <p className="text-gray-500 text-sm mt-3">{member.bio}</p>
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mt-3">
                    {member.expertise.map((exp, i) => (
                      <span key={i} className="text-xs bg-[#2C727B]/10 text-[#2C727B] px-2 py-1 rounded-full">
                        {exp}
                      </span>
                    ))}
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex justify-center gap-3 mt-4">
                    {member.social.linkedin && (
                      <Link href={member.social.linkedin} className="p-2 rounded-full bg-gray-100 shadow hover:shadow-lg transition-all hover:scale-110">
                        <Linkedin className="w-4 h-4 text-[#0077B5]" />
                      </Link>
                    )}
                    {member.social.twitter && (
                      <Link href={member.social.twitter} className="p-2 rounded-full bg-gray-100 shadow hover:shadow-lg transition-all hover:scale-110">
                        <Twitter className="w-4 h-4 text-[#1DA1F2]" />
                      </Link>
                    )}
                    {member.social.github && (
                      <Link href={member.social.github} className="p-2 rounded-full bg-gray-100 shadow hover:shadow-lg transition-all hover:scale-110">
                        <Github className="w-4 h-4 text-gray-800" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/careers" className="inline-flex items-center gap-2 text-[#2C727B] font-semibold hover:gap-3 transition-all">
              Join our growing team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TESTIMONIALS SECTION */}
      {/* ============================================ */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#2C727B] font-semibold text-sm uppercase tracking-wider">Social Proof</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2">
              What Our Clients Say
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2C727B] to-[#1A394E] mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Real results from real businesses we've helped scale
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-white to-[#F5F7FA] border border-[#2C727B]/10 shadow-xl hover:shadow-2xl transition-all"
              >
                <Quote className="w-8 h-8 text-[#2C727B]/40 mb-4" />
                <p className="text-gray-600 leading-relaxed mb-4">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="flex text-yellow-400 text-sm">
                      {"★".repeat(testimonial.rating)}
                    </div>
                    <p className="text-xs font-semibold text-[#2C727B] mt-1">{testimonial.metric}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA SECTION */}
      {/* ============================================ */}
      <section className="px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2C727B] via-[#1A394E] to-[#2C727B] p-8 sm:p-12 text-center shadow-2xl"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-2000" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Ready to Engineer Your Growth?
              </h2>
              <p className="text-[#2C727B]/20 text-lg mb-8 max-w-2xl mx-auto">
                Join 1500+ businesses that have transformed their online presence with our AI-powered SEO solutions.
              </p>
              
              {/* Stats Highlights */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">1500+</div>
                  <div className="text-xs text-white/70">Projects</div>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">99%</div>
                  <div className="text-xs text-white/70">Retention</div>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4.98</div>
                  <div className="text-xs text-white/70">Rating</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="group px-8 py-4 rounded-xl font-semibold bg-white text-[#1A394E] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-xl font-semibold border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
                >
                  Schedule a Free Consultation
                </Link>
              </div>
              
              <p className="text-xs text-white/50 mt-6">
                No obligation. 30-minute strategy session included.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% auto;
        }
        @keyframes scroll {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.5; }
        }
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}