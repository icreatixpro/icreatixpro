// app/guides/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { 
  BookOpen, Sparkles, ArrowRight, 
  Bot, Globe, BarChart3, MapPin, FileText, 
  Clock, Users, Mail, Award, Download
} from "lucide-react";

export const metadata: Metadata = {
  title: "SEO & Digital Marketing Guides | Expert Tutorials | iCreatixPRO",
  description:
    "Explore step-by-step SEO, AI marketing, and digital growth guides from iCreatixPRO to improve rankings and online success.",
  alternates: {
    canonical: "https://icreatixpro.com/guides/",
  },
  openGraph: {
    title: "SEO & Digital Marketing Guides | iCreatixPRO",
    description:
      "Learn practical SEO, AI marketing, and website growth strategies through expert guides from iCreatixPRO.",
    url: "https://icreatixpro.com/guides/",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO & Marketing Guides | iCreatixPRO",
    description:
      "Step-by-step SEO and digital marketing guides from iCreatixPRO experts.",
  },
};

export const revalidate = 86400;

// All guides are ready for immediate PDF download
const guides = [
  {
    title: "The Complete Guide to AI SEO",
    category: "AI SEO",
    description: "Master AI-powered search optimization for Google SGE, ChatGPT, and Perplexity. Learn entity SEO, prompt engineering, and GEO strategies.",
    readTime: "25 min read",
    fileSize: "2.4 MB",
    icon: Bot,
    gradient: "from-violet-500 to-purple-500",
    downloadUrl: "/downloads/ai-seo-guide.pdf",
  },
  {
    title: "Generative Engine Optimization (GEO) Playbook",
    category: "GEO",
    description: "Get your brand cited inside AI answers. Covers entity SEO, knowledge graphs, and LLM ranking factors with actionable checklists.",
    readTime: "18 min read",
    fileSize: "1.8 MB",
    icon: Globe,
    gradient: "from-cyan-500 to-blue-500",
    downloadUrl: "/downloads/geo-playbook.pdf",
  },
  {
    title: "SaaS Technical SEO Checklist",
    category: "SaaS SEO",
    description: "Optimize crawl budget, JavaScript frameworks, and Core Web Vitals for product-led companies. Includes international SEO tips.",
    readTime: "20 min read",
    fileSize: "1.2 MB",
    icon: BarChart3,
    gradient: "from-emerald-500 to-teal-500",
    downloadUrl: "/downloads/saas-technical-seo-checklist.pdf",
  },
  {
    title: "Local SEO Domination Guide",
    category: "Local SEO",
    description: "Rank #1 in Google Maps, optimize Google Business Profile, and win local pack results with proven local citation tactics.",
    readTime: "15 min read",
    fileSize: "1.5 MB",
    icon: MapPin,
    gradient: "from-orange-500 to-red-500",
    downloadUrl: "/downloads/local-seo-guide.pdf",
  },
  {
    title: "Content Marketing for SEO Success",
    category: "Content",
    description: "Create topic clusters, optimize for featured snippets, and build topical authority that drives organic traffic.",
    readTime: "22 min read",
    fileSize: "2.1 MB",
    icon: FileText,
    gradient: "from-rose-500 to-pink-500",
    downloadUrl: "/downloads/content-marketing-seo.pdf",
  },
  {
    title: "Core Web Vitals & Page Speed Optimization",
    category: "Technical SEO",
    description: "Improve LCP, FID, CLS scores and boost rankings with practical performance fixes for any website.",
    readTime: "17 min read",
    fileSize: "1.9 MB",
    icon: Award,
    gradient: "from-blue-500 to-indigo-500",
    downloadUrl: "/downloads/core-web-vitals-guide.pdf",
  },
];

export default function GuidesPage() {
  const lastUpdated = "May 2026";

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "SEO & Digital Marketing Guides",
    url: "https://icreatixpro.com/guides/",
    description:
      "Step-by-step SEO, AI marketing, and digital growth guides from iCreatixPRO.",
    publisher: {
      "@type": "Organization",
      name: "iCreatixPRO",
      url: "https://icreatixpro.com",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://icreatixpro.com/" },
        { "@type": "ListItem", position: 2, name: "Guides", item: "https://icreatixpro.com/guides/" },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 px-6 md:pt-28 md:pb-20 bg-gradient-to-br from-[#1A394E] via-[#2C727B] to-[#1A394E]">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <BookOpen className="w-4 h-4 text-[#2C727B]" />
            <span className="text-sm text-white/90 font-semibold">Expert Tutorials</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Step‑by‑Step{" "}
            <span className="bg-gradient-to-r from-[#2C727B] via-white to-[#2C727B] bg-clip-text text-transparent">
              SEO & AI Guides
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Practical, actionable tutorials to help you master SEO, AI marketing, and digital growth – from beginner to advanced.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="#guides-list">
              <button className="group px-6 py-2.5 bg-white text-[#1A394E] font-semibold rounded-full shadow-md hover:shadow-lg transition-all">
                Browse Guides
                <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="#newsletter">
              <button className="px-6 py-2.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all">
                Get Updates
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Guides Grid */}
      <section id="guides-list" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C727B]/10 mb-4">
              <Sparkles className="w-4 h-4 text-[#2C727B]" />
              <span className="text-sm text-[#2C727B] font-semibold">Free Resources</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E]">
              Learn from{" "}
              <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
                Industry Experts
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Detailed guides written by practicing SEO consultants – no fluff, just actionable advice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, idx) => {
              const Icon = guide.icon;
              return (
                <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                  <div className={`h-1.5 bg-gradient-to-r ${guide.gradient} transition-all duration-300`} />
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${guide.gradient} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Free PDF</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1A394E] mt-4">{guide.title}</h3>
                    <span className="inline-block text-xs text-[#2C727B] font-semibold uppercase tracking-wide mt-1">{guide.category}</span>
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">{guide.description}</p>
                    <div className="mt-4 flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {guide.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Download className="w-3 h-3" />
                        {guide.fileSize}
                      </span>
                    </div>
                    <div className="mt-5">
                      <a
                        href={guide.downloadUrl}
                        download
                        className="inline-flex items-center gap-1 text-[#2C727B] text-sm font-medium group-hover:gap-2 transition-all"
                      >
                        Download PDF <Download className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter" className="py-20 px-6 bg-gradient-to-br from-[#2C727B]/5 via-white to-[#1A394E]/5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm mb-4">
            <Mail className="w-4 h-4 text-[#2C727B]" />
            <span className="text-sm text-[#2C727B] font-semibold">Stay Updated</span>
          </div>
          <h2 className="text-3xl font-bold text-[#1A394E]">
            New Guides, Every Month
          </h2>
          <p className="mt-3 text-gray-600 max-w-md mx-auto">
            Subscribe to get notified when we release fresh SEO and AI marketing guides.
          </p>
          <div className="mt-6 max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2C727B] focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#2C727B] text-white font-semibold rounded-full shadow-md hover:bg-[#1A394E] transition-all"
              >
                Subscribe →
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-3">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1A394E] mb-6">
            Trusted by <span className="text-[#2C727B]">2,000+</span> SEO Professionals
          </h2>
          <div className="flex flex-wrap justify-center gap-8 text-gray-500 text-sm">
            <span className="flex items-center gap-2">✓ Practical, no-fluff content</span>
            <span className="flex items-center gap-2">✓ Updated for 2025 algorithms</span>
            <span className="flex items-center gap-2">✓ Downloadable PDFs</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Need a custom learning plan?</h3>
            <p className="text-white/80 mb-4">Our experts can create a personalised SEO roadmap for your business.</p>
            <Link href="/contact">
              <button className="px-6 py-2.5 bg-white text-[#1A394E] font-semibold rounded-full shadow-md hover:shadow-lg transition-all">
                Talk to an Expert →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Internal Links (Approved URLs Only) */}
      <div className="text-center pb-12 text-sm text-gray-400">
        <Link href="/" className="hover:text-[#2C727B] transition-colors">Home</Link>
        <span className="mx-2">|</span>
        <Link href="/about" className="hover:text-[#2C727B] transition-colors">About</Link>
        <span className="mx-2">|</span>
        <Link href="/services" className="hover:text-[#2C727B] transition-colors">Services</Link>
        <span className="mx-2">|</span>
        <Link href="/contact" className="hover:text-[#2C727B] transition-colors">Contact</Link>
        <span className="mx-2">|</span>
        <Link href="/blogs" className="hover:text-[#2C727B] transition-colors">Blog</Link>
        <p className="mt-4 text-gray-400 text-xs">Last updated: {lastUpdated}</p>
      </div>
    </main>
  );
}