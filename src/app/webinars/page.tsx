import type { Metadata } from "next";
import Link from "next/link";
import { 
  Calendar, Clock, Users, Video, 
  Sparkles, ArrowRight, Mail, TrendingUp,
  Zap, Star
} from "lucide-react";

export const metadata: Metadata = {
  title: "Webinars & Training Sessions | iCreatixPRO",
  description:
    "iCreatixPRO webinars covering AI SEO, GEO optimization, technical SEO, and digital growth strategies. Sign up for early access.",
  keywords: [
    "SEO webinars",
    "AI SEO training",
    "GEO optimization webinar",
    "digital marketing webinars",
    "free SEO training",
    "iCreatixPRO webinars",
  ],
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
  alternates: {
    canonical: "https://icreatixpro.com/webinars",
  },
  openGraph: {
    title: "Webinars & Training Sessions | iCreatixPRO",
    description:
      "Discover SEO and AI marketing webinars from iCreatixPRO. Get notified when new sessions are announced.",
    url: "https://icreatixpro.com/webinars",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webinars | iCreatixPRO",
    description:
      "Join our expert-led webinars on AI SEO, GEO, and digital growth. Sign up for updates.",
  },
};

export const revalidate = 86400;

export default function WebinarsPage() {
  const lastUpdated = "May 2026";

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Webinars & Training Sessions",
    url: "https://icreatixpro.com/webinars",
    description:
      "webinars and training sessions by iCreatixPRO on SEO, AI marketing, and digital growth.",
    publisher: {
      "@type": "Organization",
      name: "iCreatixPRO",
      url: "https://icreatixpro.com",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://icreatixpro.com" },
        { "@type": "ListItem", position: 2, name: "Webinars", item: "https://icreatixpro.com/webinars" },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 px-6 md:pt-28 md:pb-20 bg-gradient-to-br from-[#1A394E] via-[#2C727B] to-[#1A394E]">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Video className="w-4 h-4 text-[#2C727B]" />
            <span className="text-sm text-white/90 font-semibold">Join Our Experts</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Webinars &{" "}
            <span className="bg-gradient-to-r from-[#2C727B] via-white to-[#2C727B] bg-clip-text text-transparent">
              Training Sessions
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            We're preparing a series of live expert sessions on AI SEO, GEO, technical SEO, and digital growth.
          </p>
          <div className="mt-8">
            <Link href="#newsletter">
              <button className="px-6 py-2.5 bg-white text-[#1A394E] font-semibold rounded-full shadow-md hover:shadow-lg transition-all">
                Get Notified When We Launch
                <ArrowRight className="inline ml-2 w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Webinars teaser – no individual links */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C727B]/10 mb-4">
              <Sparkles className="w-4 h-4 text-[#2C727B]" />
              <span className="text-sm text-[#2C727B] font-semibold">What to Expect</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E]">
              Topics We'll Cover{" "}
              <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
                (Join Our Experts)
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Each session is designed to give you actionable strategies and expert insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A394E]">AI SEO Masterclass</h3>
              <p className="text-gray-500 text-sm mt-2">Optimize for Google SGE, ChatGPT & Perplexity using GEO and entity SEO.</p>
              <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                <Calendar className="w-3 h-3" />
                <span>Join 2026</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A394E]">GEO Playbook</h3>
              <p className="text-gray-500 text-sm mt-2">Get your brand cited inside AI answers – practical GEO strategies.</p>
              <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                <Calendar className="w-3 h-3" />
                <span>Join 2026</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A394E]">SaaS Technical SEO</h3>
              <p className="text-gray-500 text-sm mt-2">Fix JavaScript SEO, Core Web Vitals, and crawl budget for product-led growth.</p>
              <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                <Calendar className="w-3 h-3" />
                <span>Join 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Attend */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#2C727B]/5 via-white to-[#1A394E]/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1A394E] mb-8">Why Join Our Webinars?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <TrendingUp className="w-8 h-8 text-[#2C727B] mx-auto mb-3" />
              <h3 className="font-bold">Actionable Strategies</h3>
              <p className="text-gray-500 text-sm">Leave with tactics you can implement immediately.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <Users className="w-8 h-8 text-[#2C727B] mx-auto mb-3" />
              <h3 className="font-bold">Expert Instructors</h3>
              <p className="text-gray-500 text-sm">Learn from Google alumni and AI researchers.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <Sparkles className="w-8 h-8 text-[#2C727B] mx-auto mb-3" />
              <h3 className="font-bold">Live Q&A</h3>
              <p className="text-gray-500 text-sm">Get your specific questions answered in real time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm mb-4">
            <Mail className="w-4 h-4 text-[#2C727B]" />
            <span className="text-sm text-[#2C727B] font-semibold">Get Early Access</span>
          </div>
          <h2 className="text-3xl font-bold text-[#1A394E]">Be First to Know</h2>
          <p className="mt-3 text-gray-600 max-w-md mx-auto">
            Subscribe to receive webinar dates, topics, and exclusive resources.
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

      {/* Footer (approved URLs only) */}
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