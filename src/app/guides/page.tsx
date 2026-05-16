// app/guides/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen, Sparkles, ArrowRight,
  Bot, Globe, BarChart3, MapPin, FileText,
  Clock, Download, Award
} from "lucide-react";

// ===============================
// BASE URL (SEO SAFE)
// ===============================
const baseUrl = "https://icreatixpro.com";
const pagePath = "/guides/";
const pageUrl = `${baseUrl}${pagePath}`;

export const metadata: Metadata = {
  title: "SEO & Digital Marketing Guides | Expert Tutorials | iCreatixPRO",
  description:
    "Explore step-by-step SEO, AI marketing, and digital growth guides from iCreatixPRO to improve rankings and online success.",

  // ===============================
  // CANONICAL (FIXED)
  // ===============================
  alternates: {
    canonical: pageUrl,
  },

  // ===============================
  // ROBOTS (SEO STRONG)
  // ===============================
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "SEO & Digital Marketing Guides | iCreatixPRO",
    description:
      "Learn practical SEO, AI marketing, and website growth strategies through expert guides.",
    url: pageUrl,
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

// ===============================
// GUIDES DATA
// ===============================
const guides = [
  {
    title: "The Complete Guide to AI SEO",
    category: "AI SEO",
    description:
      "Master AI-powered search optimization for Google SGE, ChatGPT, and Perplexity.",
    readTime: "25 min read",
    fileSize: "2.4 MB",
    icon: Bot,
    gradient: "from-violet-500 to-purple-500",
    downloadUrl: "/downloads/ai-seo-guide.pdf",
  },
  {
    title: "Generative Engine Optimization (GEO) Playbook",
    category: "GEO",
    description:
      "Get your brand cited inside AI answers using entity SEO and knowledge graphs.",
    readTime: "18 min read",
    fileSize: "1.8 MB",
    icon: Globe,
    gradient: "from-cyan-500 to-blue-500",
    downloadUrl: "/downloads/geo-playbook.pdf",
  },
  {
    title: "SaaS Technical SEO Checklist",
    category: "SaaS SEO",
    description:
      "Optimize crawl budget, JavaScript frameworks, and Core Web Vitals.",
    readTime: "20 min read",
    fileSize: "1.2 MB",
    icon: BarChart3,
    gradient: "from-emerald-500 to-teal-500",
    downloadUrl: "/downloads/saas-technical-seo-checklist.pdf",
  },
  {
    title: "Local SEO Domination Guide",
    category: "Local SEO",
    description:
      "Rank #1 in Google Maps and dominate local search results.",
    readTime: "15 min read",
    fileSize: "1.5 MB",
    icon: MapPin,
    gradient: "from-orange-500 to-red-500",
    downloadUrl: "/downloads/local-seo-guide.pdf",
  },
  {
    title: "Content Marketing for SEO Success",
    category: "Content",
    description:
      "Build topic clusters and increase organic traffic with content strategy.",
    readTime: "22 min read",
    fileSize: "2.1 MB",
    icon: FileText,
    gradient: "from-rose-500 to-pink-500",
    downloadUrl: "/downloads/content-marketing-seo.pdf",
  },
  {
    title: "Core Web Vitals Optimization",
    category: "Technical SEO",
    description:
      "Improve LCP, FID, and CLS scores for better rankings.",
    readTime: "17 min read",
    fileSize: "1.9 MB",
    icon: Award,
    gradient: "from-blue-500 to-indigo-500",
    downloadUrl: "/downloads/core-web-vitals-guide.pdf",
  },
];

export default function GuidesPage() {
  const lastUpdated = "May 2026";

  // ===============================
  // SCHEMA (CLEAN + SEO SAFE)
  // ===============================
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "SEO & Digital Marketing Guides",
    url: pageUrl,
    description:
      "Step-by-step SEO, AI marketing, and digital growth guides from iCreatixPRO.",
    publisher: {
      "@type": "Organization",
      name: "iCreatixPRO",
      url: baseUrl,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${baseUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Guides",
          item: pageUrl,
        },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden pt-20 pb-16 px-6 bg-gradient-to-br from-[#1A394E] via-[#2C727B] to-[#1A394E]">
        <div className="max-w-4xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6">
            <BookOpen className="w-4 h-4 text-[#2C727B]" />
            <span className="text-white text-sm">Expert Tutorials</span>
          </div>

          <h1 className="text-5xl font-bold text-white">
            SEO & AI Guides
          </h1>

          <p className="mt-4 text-gray-200">
            Step-by-step SEO and digital marketing learning resources.
          </p>

          <div className="mt-8">
            <Link href="/contact">
              <button className="px-6 py-3 bg-white text-[#1A394E] font-semibold rounded-full shadow-md hover:shadow-lg transition-all">
                Talk to an Expert →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* GUIDES GRID */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {guides.map((guide, idx) => {
            const Icon = guide.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all">

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${guide.gradient} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold mt-4">{guide.title}</h3>

                <p className="text-sm text-gray-600 mt-2">
                  {guide.description}
                </p>

                <div className="mt-3 text-xs text-gray-400 flex gap-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {guide.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Download className="w-3 h-3" />
                    {guide.fileSize}
                  </span>
                </div>

                <a
                  href={guide.downloadUrl}
                  className="inline-block mt-4 text-[#2C727B] text-sm font-medium"
                >
                  Download PDF →
                </a>
              </div>
            );
          })}

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 text-center">
        <h3 className="text-2xl font-bold">Need a custom learning plan?</h3>
        <p className="text-gray-600 mt-2">
          Our experts can create a personalised SEO roadmap for your business.
        </p>
      </section>

      {/* FOOTER NAVIGATION */}
      <footer className="text-center pb-10 text-sm text-gray-400">
        <nav>
          <Link href="/" className="hover:text-[#2C727B]">Home</Link>
          <span className="mx-2">|</span>
          <Link href="/about" className="hover:text-[#2C727B]">About</Link>
          <span className="mx-2">|</span>
          <Link href="/services" className="hover:text-[#2C727B]">Services</Link>
          <span className="mx-2">|</span>
          <Link href="/contact" className="hover:text-[#2C727B]">Contact</Link>
          <span className="mx-2">|</span>
          <Link href="/blogs" className="hover:text-[#2C727B]">Blogs</Link>
        </nav>

        <p className="mt-4 text-xs">Last updated: {lastUpdated}</p>
      </footer>

    </main>
  );
}