"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Info,
  Mail,
  FileText,
  Wrench,
  TrendingUp,
  MapPin,
  Globe,
  Zap,
  Briefcase,
  Users,
  Heart,
  Shield,
  BookOpen,
  Video,
  HelpCircle,
  Sparkles,
  Coffee,
  Settings,
} from "lucide-react";

export default function SitemapClient() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "🏠 Main Pages",
      icon: Home,
      links: [
        { name: "Home", href: "/", description: "Welcome to iCreatixPRO - SEO Agency" },
        { name: "About Us", href: "/about", description: "Learn about our story and mission" },
        { name: "Contact", href: "/contact", description: "Get in touch with our team" },
        { name: "Blog", href: "/blogs", description: "Latest SEO insights and tips" },
        { name: "SEO Tools", href: "/tools", description: "Free professional SEO tools" },
      ]
    },
    {
      title: "🚀 Services",
      icon: TrendingUp,
      links: [
        { name: "SEO Optimization", href: "/services/search-engine-optimization", description: "Boost your search rankings" },
        { name: "Local SEO", href: "/services/local-seo", description: "Dominate local search results" },
        { name: "Google Ads", href: "/services/google-ads", description: "PPC advertising management" },
        { name: "Meta Ads", href: "/services/meta-ads", description: "Social media advertising" },
        { name: "Digital Marketing", href: "/services/digital-marketing", description: "Complete digital strategy" },
        { name: "Content Marketing", href: "/services/content-marketing", description: "Content that converts" },
        { name: "Email Marketing", href: "/services/email-marketing", description: "Email campaign management" },
        { name: "Analytics", href: "/services/analytics", description: "Data-driven insights" },
      ]
    },
    {
      title: "🏢 Company",
      icon: Users,
      links: [
        { name: "Case Studies", href: "/case-studies", description: "Our success stories" },
        { name: "Careers", href: "/careers", description: "Join our growing team" },
        { name: "Testimonials", href: "/testimonials", description: "What our clients say" },
        { name: "Partners", href: "/partners", description: "Our trusted partners" },
        { name: "FAQs", href: "/faqs", description: "Frequently asked questions" },
      ]
    },
    {
      title: "📚 Resources",
      icon: BookOpen,
      links: [
        { name: "SEO Tools", href: "/tools", description: "Free SEO tools collection" },
        { name: "Guides", href: "/guides", description: "In-depth SEO guides" },
        { name: "Webinars", href: "/webinars", description: "Live and recorded webinars" },
        { name: "E-books", href: "/ebooks", description: "Downloadable resources" },
        { name: "Glossary", href: "/glossary", description: "SEO terms explained" },
        { name: "Site Map", href: "/sitemap", description: "Complete website navigation" },
      ]
    },
    {
      title: "⚖️ Legal",
      icon: Shield,
      links: [
        { name: "Privacy Policy", href: "/privacy-policy", description: "How we protect your data" },
        { name: "Terms of Service", href: "/terms", description: "Terms and conditions" },
        { name: "Cookie Policy", href: "/cookies", description: "How we use cookies" },
        { name: "Disclaimer", href: "/disclaimer", description: "Legal disclaimer" },
        { name: "DMCA", href: "/dmca", description: "Copyright information" },
        { name: "GDPR", href: "/gdpr", description: "GDPR compliance" },
        { name: "Accessibility", href: "/accessibility", description: "Accessibility statement" },
        { name: "Security", href: "/security", description: "Security practices" },
      ]
    },
    {
      title: "🛠️ Quick Links",
      icon: Zap,
      links: [
        { name: "XML Sitemap", href: "/sitemap.xml", description: "For search engines" },
        { name: "Robots.txt", href: "/robots.txt", description: "Crawler instructions" },
        { name: "RSS Feed", href: "/rss", description: "Subscribe to updates" },
        { name: "Status", href: "/status", description: "System status" },
      ]
    },
  ];

  const totalLinks = sections.reduce((acc, section) => acc + section.links.length, 0);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30 py-16 px-4 md:py-24 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Visual Breadcrumb for Users (matches schema) */}
{/* Stats Bar - Improved for mobile */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12"
>
  {[
    { label: "Total Pages", value: totalLinks, icon: FileText },
    { label: "Services", value: 8, icon: TrendingUp },
    { label: "Resources", value: 6, icon: BookOpen },
    { label: "Legal Pages", value: 8, icon: Shield },
  ].map((stat, idx) => (
    <div key={stat.label} className="bg-white/50 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center border border-white/60">
      <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-[#2C727B] mx-auto mb-1 md:mb-2" />
      <div className="text-xl md:text-2xl font-bold text-[#1A394E]">{stat.value}</div>
      <div className="text-[10px] md:text-xs text-[#1A394E]/50">{stat.label}</div>
    </div>
  ))}
</motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2C727B]/10 to-[#1A394E]/10 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-[#2C727B]" />
            <span className="text-sm font-medium text-[#1A394E]">iCreatixPRO Navigation Guide</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#1A394E] to-[#2C727B] bg-clip-text text-transparent mb-4">
            Complete Website Sitemap of iCreatixPRO
          </h1>
          <p className="text-[#1A394E]/60 text-lg max-w-2xl mx-auto">
            Explore the complete sitemap of iCreatixPRO, your full website navigation guide. Quickly access all services, blogs, tools, resources, and company pages in one organized place.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: "Total Pages", value: totalLinks, icon: FileText },
            { label: "Services", value: 8, icon: TrendingUp },
            { label: "Resources", value: 6, icon: BookOpen },
            { label: "Legal Pages", value: 8, icon: Shield },
          ].map((stat, idx) => (
            <div key={stat.label} className="bg-white/50 backdrop-blur-sm rounded-xl p-4 text-center border border-white/60">
              <stat.icon className="w-6 h-6 text-[#2C727B] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[#1A394E]">{stat.value}</div>
              <div className="text-xs text-[#1A394E]/50">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Sitemap Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white/40 backdrop-blur-sm rounded-2xl border border-white/60 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-5 border-b border-white/50 bg-white/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-[#1A394E]">
                    {section.title}
                  </h2>
                </div>
              </div>
              <div className="p-4 space-y-2 max-h-[400px] overflow-y-auto">
                {section.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block group"
                  >
                    <div className="p-3 rounded-xl hover:bg-white/50 transition-all duration-200">
                      <div className="flex items-center justify-between">
                        <span className="text-[#1A394E]/80 group-hover:text-[#2C727B] transition-colors font-medium">
                          {link.name}
                        </span>
                        <span className="text-xs text-[#1A394E]/40 group-hover:text-[#2C727B] group-hover:translate-x-1 transition-all">
                          →
                        </span>
                      </div>
                      <p className="text-xs text-[#1A394E]/50 mt-1 group-hover:text-[#1A394E]/70 transition-colors">
                        {link.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-white/50 text-center"
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm">
            <Link href="/" className="text-[#1A394E]/50 hover:text-[#2C727B] transition-colors">
              ← Back to Home
            </Link>
            <span className="text-[#1A394E]/30">•</span>
            <Link href="/sitemap.xml" className="text-[#1A394E]/50 hover:text-[#2C727B] transition-colors">
              XML Sitemap for Search Engines
            </Link>
            <span className="text-[#1A394E]/30">•</span>
            <Link href="/robots.txt" className="text-[#1A394E]/50 hover:text-[#2C727B] transition-colors">
              Robots.txt
            </Link>
          </div>
          <div className="flex items-center justify-center gap-1 mt-6 text-xs text-[#1A394E]/40">
            <Coffee className="w-3 h-3" />
            <span>© {currentYear} iCreatixPRO. All rights reserved.</span>
          </div>
        </motion.div>
      </div>
    </main>
  );
}