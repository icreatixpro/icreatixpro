"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Home, Info, Mail, TrendingUp, MapPin,
  Search, BarChart3, Bot, Globe, Server,
  ShoppingBag, FileText, Code, LineChart,
  BookOpen, HelpCircle, Shield, Lock,
  File, AlertTriangle, Award, Sparkles,
  ArrowRight, FolderTree, ChevronRight
} from "lucide-react";

// ✅ ONLY APPROVED URLS (based on the list provided)
const approvedLinks = [
  // Main Pages
  { href: "/", title: "Home", category: "Main", icon: Home },
  { href: "/about", title: "About", category: "Main", icon: Info },
  { href: "/contact", title: "Contact", category: "Main", icon: Mail },
  // Services
  { href: "/services", title: "All Services", category: "Services", icon: TrendingUp },
  { href: "/services/search-engine-optimization", title: "SEO Services", category: "Services", icon: Search },
  { href: "/services/local-seo", title: "Local SEO", category: "Services", icon: MapPin },
  { href: "/services/ecommerce-seo", title: "E‑commerce SEO", category: "Services", icon: ShoppingBag },
  { href: "/services/ai-seo-services", title: "AI SEO Services", category: "Services", icon: Bot },
  { href: "/services/geo-optimization-services", title: "GEO Optimization", category: "Services", icon: Globe },
  { href: "/services/saas-technical-seo", title: "SaaS Technical SEO", category: "Services", icon: Server },
  { href: "/services/google-ads", title: "Google Ads (PPC)", category: "Services", icon: BarChart3 },
  { href: "/services/meta-ads", title: "Meta Ads", category: "Services", icon: BarChart3 },
  { href: "/services/content-marketing", title: "Content Marketing", category: "Services", icon: FileText },
  { href: "/services/email-marketing", title: "Email Marketing", category: "Services", icon: Mail },
  { href: "/services/technical-seo", title: "Technical SEO", category: "Services", icon: Code },
  { href: "/services/web-development", title: "Web Development", category: "Services", icon: Code },
  { href: "/services/analytics", title: "Analytics", category: "Services", icon: LineChart },
  // Blog Pillar Posts
  { href: "/blogs/future-of-seo", title: "Blog: Future of SEO", category: "Blog", icon: BookOpen },
  { href: "/blogs/what-is-generative-engine-optimization", title: "Blog: What is GEO", category: "Blog", icon: BookOpen },
  { href: "/blogs/how-to-rank-in-google-ai-overviews", title: "Blog: Rank in AI Overviews", category: "Blog", icon: BookOpen },
  { href: "/blogs/what-is-ai-seo", title: "Blog: What is AI SEO", category: "Blog", icon: BookOpen },
  // Resources
  { href: "/tools", title: "Free SEO Tools", category: "Resources", icon: Sparkles },
  { href: "/ebooks", title: "Ebooks & Guides", category: "Resources", icon: FileText },
  { href: "/faqs", title: "FAQs", category: "Resources", icon: HelpCircle },
  { href: "/glossary", title: "Glossary", category: "Resources", icon: BookOpen },
  { href: "/case-studies", title: "Case Studies", category: "Resources", icon: Award },
  { href: "/guides", title: "Expert Guides", category: "Resources", icon: FileText },
  // Legal & Policies
  { href: "/privacy-policy", title: "Privacy Policy", category: "Legal", icon: Shield },
  { href: "/cookies", title: "Cookie Policy", category: "Legal", icon: File },
  { href: "/gdpr", title: "GDPR Compliance", category: "Legal", icon: Lock },
  { href: "/security", title: "Security Policy", category: "Legal", icon: Shield },
  { href: "/terms", title: "Terms & Conditions", category: "Legal", icon: File },
  { href: "/disclaimer", title: "Disclaimer", category: "Legal", icon: AlertTriangle },
  { href: "/legal", title: "Legal Notice", category: "Legal", icon: File },
  { href: "/dmca", title: "DMCA Policy", category: "Legal", icon: Shield },
];

const categories = ["Main", "Services", "Blog", "Resources", "Legal"];
const groupedLinks = categories.map(cat => ({
  name: cat,
  links: approvedLinks.filter(link => link.category === cat),
}));

export default function SitemapClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const currentYear = new Date().getFullYear();

  // Filter for search
  const filteredLinks = searchTerm
    ? approvedLinks.filter(link =>
        link.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 px-6 md:pt-28 md:pb-20 bg-gradient-to-br from-[#1A394E] via-[#2C727B] to-[#1A394E]">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <FolderTree className="w-4 h-4 text-[#2C727B]" />
            <span className="text-sm text-white/90 font-semibold">Site Index</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Website{" "}
            <span className="bg-gradient-to-r from-[#2C727B] via-white to-[#2C727B] bg-clip-text text-transparent">
              Sitemap
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Explore all pages of iCreatixPRO services, blog posts, tools, and legal resources in one organised index.
          </p>
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for a page..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2C727B] focus:border-transparent"
            />
          </div>
        </div>
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {searchTerm ? (
            // Search Results
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-[#1A394E] mb-4">
                Search Results for "{searchTerm}"
              </h2>
              {filteredLinks && filteredLinks.length > 0 ? (
                <ul className="space-y-3">
                  {filteredLinks.map((link, idx) => {
                    const Icon = link.icon;
                    return (
                      <li key={idx}>
                        <Link
                          href={link.href}
                          className="inline-flex items-center gap-2 text-[#2C727B] hover:underline"
                        >
                          <Icon className="w-4 h-4" />
                          <span>{link.title}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="text-gray-500">No pages found. Try a different search term.</p>
              )}
            </div>
          ) : (
            // Grouped Grid
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupedLinks.map((group, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="bg-gradient-to-r from-[#1A394E] to-[#2C727B] px-6 py-4">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                      {group.name === "Main" && <Home className="w-5 h-5" />}
                      {group.name === "Services" && <TrendingUp className="w-5 h-5" />}
                      {group.name === "Blog" && <BookOpen className="w-5 h-5" />}
                      {group.name === "Resources" && <Sparkles className="w-5 h-5" />}
                      {group.name === "Legal" && <Shield className="w-5 h-5" />}
                      {group.name}
                    </h2>
                  </div>
                  <div className="p-4 divide-y divide-gray-100">
                    {group.links.map((link, linkIdx) => {
                      const Icon = link.icon;
                      return (
                        <Link
                          key={linkIdx}
                          href={link.href}
                          className="flex items-center gap-3 py-2 group hover:bg-gray-50 px-2 rounded-lg transition-colors"
                        >
                          <Icon className="w-4 h-4 text-gray-400 group-hover:text-[#2C727B]" />
                          <span className="text-gray-700 group-hover:text-[#2C727B] transition-colors">
                            {link.title}
                          </span>
                          <ChevronRight className="w-4 h-4 ml-auto text-gray-300 group-hover:text-[#2C727B] group-hover:translate-x-1 transition-all" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer – Only approved internal links */}
      <div className="text-center pb-12 text-sm text-gray-400 border-t border-gray-200 pt-8">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <Link href="/" className="hover:text-[#2C727B]">Home</Link>
          <span className="text-gray-300">|</span>
          <Link href="/about" className="hover:text-[#2C727B]">About</Link>
          <span className="text-gray-300">|</span>
          <Link href="/services" className="hover:text-[#2C727B]">Services</Link>
          <span className="text-gray-300">|</span>
          <Link href="/contact" className="hover:text-[#2C727B]">Contact</Link>
          <span className="text-gray-300">|</span>
          <Link href="/blogs" className="hover:text-[#2C727B]">Blog</Link>
        </div>
        <p className="mt-4 text-xs">
          © {currentYear} iCreatixPRO. All rights reserved.
        </p>
      </div>
    </main>
  );
}