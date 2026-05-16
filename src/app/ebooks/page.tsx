// app/ebooks/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { 
  BookOpen, Download, Mail, ArrowRight, 
  Sparkles, TrendingUp, Search, Bot, Globe,
  Clock, Users, Award, FileText
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Ebooks & SEO Guides | AI Marketing Resources iCreatixPRO",
  description:
    "Download free ebooks and expert SEO guides from iCreatixPRO covering AI SEO, GEO optimization, digital marketing, and SaaS growth strategies.",
  alternates: {
    canonical: "https://icreatixpro.com/ebooks",
  },
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
    title: "Free Ebooks & SEO Guides | iCreatixPRO",
    description:
      "Explore free ebooks from iCreatixPRO on AI SEO, digital marketing, and growth strategies for better rankings and traffic.",
    url: "https://icreatixpro.com/ebooks",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Ebooks & SEO Guides | iCreatixPRO",
    description:
      "Download free SEO ebooks and digital marketing guides from iCreatixPRO.",
  },
};

export const revalidate = 86400;

// Ebook data with direct download links to /downloads/ folder
const ebooks = [
  {
    title: "The Complete Guide to AI SEO",
    category: "AI SEO",
    description: "Learn how to optimize for Google SGE, ChatGPT, and Perplexity. Includes GEO strategies and prompt-based optimization.",
    pages: 85,
    fileSize: "2.4 MB",
    fileType: "PDF",
    downloads: 1240,
    icon: Bot,
    gradient: "from-violet-500 to-purple-500",
    downloadUrl: "/downloads/ai-seo-guide.pdf",
    comingSoon: false,
  },
  {
    title: "GEO Optimization Playbook",
    category: "GEO",
    description: "Get your brand cited inside AI answers. Covers entity SEO, knowledge graphs, and LLM ranking factors.",
    pages: 62,
    fileSize: "1.8 MB",
    fileType: "PDF",
    downloads: 892,
    icon: Globe,
    gradient: "from-cyan-500 to-blue-500",
    downloadUrl: "/downloads/geo-playbook.pdf",
    comingSoon: false,
  },
  {
    title: "SaaS Technical SEO Checklist",
    category: "SaaS SEO",
    description: "A practical checklist for SaaS platforms: crawl budget, JavaScript SEO, international targeting, and Core Web Vitals.",
    pages: 48,
    fileSize: "1.2 MB",
    fileType: "PDF",
    downloads: 567,
    icon: TrendingUp,
    gradient: "from-emerald-500 to-teal-500",
    downloadUrl: "/downloads/saas-technical-seo-checklist.pdf",
    comingSoon: false,
  },
  {
    title: "Local SEO Domination Guide",
    category: "Local SEO",
    description: "Rank #1 in Google Maps, optimize your GBP, and win local pack results with proven tactics.",
    pages: 55,
    fileSize: "1.5 MB",
    fileType: "PDF",
    downloads: 2100,
    icon: Search,
    gradient: "from-orange-500 to-red-500",
    downloadUrl: "/downloads/local-seo-guide.pdf",
    comingSoon: false,
  },
];

export default function EbooksPage() {
  const lastUpdated = "May 2026";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Ebooks & SEO Guides",
    url: "https://icreatixpro.com/ebooks",
    description:
      "Free ebooks and SEO guides from iCreatixPRO covering AI SEO, digital marketing, and growth strategies.",
    publisher: {
      "@type": "Organization",
      name: "iCreatixPRO",
      url: "https://icreatixpro.com",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://icreatixpro.com/" },
        { "@type": "ListItem", position: 2, name: "Ebooks", item: "https://icreatixpro.com/ebooks" },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 px-6 md:pt-28 md:pb-20 bg-gradient-to-br from-[#1A394E] via-[#2C727B] to-[#1A394E]">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <BookOpen className="w-4 h-4 text-[#2C727B]" />
            <span className="text-sm text-white/90 font-semibold">Free Resources</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Free Ebooks &{" "}
            <span className="bg-gradient-to-r from-[#2C727B] via-white to-[#2C727B] bg-clip-text text-transparent">
              SEO Guides
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Download expert‑written guides on AI SEO, GEO optimization, SaaS growth, and digital marketing – all free.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="#ebooks">
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

      {/* Ebooks Grid */}
      <section id="ebooks" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C727B]/10 mb-4">
              <Download className="w-4 h-4 text-[#2C727B]" />
              <span className="text-sm text-[#2C727B] font-semibold">Available Now</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E]">
              Free{" "}
              <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
                SEO & Marketing Resources
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Practical, actionable guides written by our team of SEO experts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ebooks.map((ebook) => {
              const Icon = ebook.icon;
              return (
                <div key={ebook.title} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                  <div className={`h-1.5 bg-gradient-to-r ${ebook.gradient} transition-all duration-300`} />
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ebook.gradient} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {ebook.comingSoon ? (
                        <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-full">Coming Soon</span>
                      ) : (
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Free Download</span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-[#1A394E] mt-4">{ebook.title}</h3>
                    <span className="inline-block text-xs text-[#2C727B] font-semibold uppercase tracking-wide mt-1">{ebook.category}</span>
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">{ebook.description}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <FileText className="w-3 h-3" />
                        {ebook.fileType}, {ebook.fileSize}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        {ebook.pages} pages
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {ebook.downloads.toLocaleString()} downloads
                      </span>
                    </div>
                    <div className="mt-5">
                      {ebook.comingSoon ? (
                        <button disabled className="px-4 py-2 bg-gray-100 text-gray-400 rounded-lg text-sm font-medium cursor-not-allowed">
                          Coming Soon
                        </button>
                      ) : (
                        <a
                          href={ebook.downloadUrl}
                          download
                          className="inline-flex items-center gap-1 text-[#2C727B] text-sm font-medium group-hover:gap-2 transition-all"
                        >
                          Download Free PDF <Download className="w-4 h-4" />
                        </a>
                      )}
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm mb-4">
            <Mail className="w-4 h-4 text-[#2C727B]" />
            <span className="text-sm text-[#2C727B] font-semibold">Stay Updated</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E]">
            Get Notified When New{" "}
            <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
              Ebooks Are Released
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Subscribe to our newsletter and be the first to receive free SEO guides, case studies, and growth strategies.
          </p>
          <div className="mt-8 max-w-md mx-auto">
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

      {/* Why Our Guides Are Trusted */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-8">
            Trusted by <span className="text-[#2C727B]">2,000+</span> SEO Professionals
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <Award className="w-8 h-8 text-[#2C727B] mx-auto mb-2" />
              <h3 className="font-bold">Expert Authors</h3>
              <p className="text-gray-500 text-sm">Written by practicing SEO consultants.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <Clock className="w-8 h-8 text-[#2C727B] mx-auto mb-2" />
              <h3 className="font-bold">Regularly Updated</h3>
              <p className="text-gray-500 text-sm">Content reflects latest algorithm changes.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <Download className="w-8 h-8 text-[#2C727B] mx-auto mb-2" />
              <h3 className="font-bold">Instant Access</h3>
              <p className="text-gray-500 text-sm">No credit card required – just download.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#2C727B] to-[#1A394E] rounded-3xl p-10 text-center">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need More Than a Guide?
              </h2>
              <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
                Get a custom AI SEO & Growth plan tailored to your business – free consultation.
              </p>
              <Link href="/contact">
                <button className="px-8 py-3.5 bg-white text-[#1A394E] font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                  Talk to an Expert →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer internal links (only approved URLs) */}
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