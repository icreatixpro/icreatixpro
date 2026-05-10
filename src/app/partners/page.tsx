// app/partners/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles, ArrowRight, Bot, BarChart3, Database,
  Globe, Code, Cloud, Users, Zap, Handshake,
  CheckCircle, Award, TrendingUp, Cpu
} from "lucide-react";

export const metadata: Metadata = {
  title: "Partners & Collaborations | Growth Network | iCreatixPRO",
  description:
    "Discover iCreatixPRO partners and collaborations driving SEO innovation, AI marketing solutions, and digital growth strategies.",
  alternates: {
    canonical: "https://icreatixpro.com/partners/",
  },
  openGraph: {
    title: "Partners & Collaborations | iCreatixPRO",
    description:
      "Explore our trusted partners helping deliver AI SEO, marketing automation, and digital growth solutions at iCreatixPRO.",
    url: "https://icreatixpro.com/partners/",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partners | iCreatixPRO",
    description:
      "Meet the partners powering AI SEO and digital growth solutions at iCreatixPRO.",
  },
};

export const revalidate = 86400;

// Partner data grouped by category
const partnersByCategory = [
  {
    name: "AI & GEO Tools",
    icon: Bot,
    gradient: "from-violet-500 to-purple-500",
    partners: [
      {
        name: "Semji",
        description: "AI-powered SEO content platform that enables teams to produce highly effective content with intelligent recommendations.",
      },
      {
        name: "Brightspot CMS",
        description: "Headless CMS with integrated GEO capabilities, helping AI engines understand content structure and cite your brand.",
      },
      {
        name: "xPromo AI",
        description: "AI platform that unites projects with similar target audiences for win-win marketing campaigns across SEO, GEO and PPC.",
      },
    ],
  },
  {
    name: "SEO & Analytics Platforms",
    icon: BarChart3,
    gradient: "from-blue-500 to-cyan-500",
    partners: [
      {
        name: "STAT Search Analytics",
        description: "Enterprise‑grade SERP tracking that provides daily ranking insights, SERP feature change monitoring, and competitive intelligence.",
      },
      {
        name: "Funnel.io",
        description: "Centralised marketing analytics platform that powers cross‑channel reporting, first‑party data integration, and attribution modelling.",
      },
      {
        name: "Stape.io",
        description: "Tag management and server‑side tracking infrastructure enabling precise conversion measurement and GDPR‑compliant data collection.",
      },
    ],
  },
  {
    name: "Data & Cloud Infrastructure",
    icon: Cloud,
    gradient: "from-emerald-500 to-teal-500",
    partners: [
      {
        name: "Google Cloud Platform",
        description: "BigQuery for large‑scale analytics, Looker for custom dashboards, and Cloud Run for scalable web applications.",
      },
      {
        name: "Kinsta",
        description: "Premium managed WordPress hosting built on Google Cloud Platform, delivering exceptional speed, uptime, and security.",
      },
      {
        name: "Cloudflare",
        description: "Global CDN, DDoS protection, DNS management, and Zero Trust security to keep client websites fast and protected.",
      },
    ],
  },
  {
    name: "Webflow & Design Ecosystem",
    icon: Globe,
    gradient: "from-orange-500 to-red-500",
    partners: [
      {
        name: "Webflow Expert Partner",
        description: "We build enterprise‑grade websites with Webflow, integrating advanced CMS capabilities, animations, and scalable hosting.",
      },
      {
        name: "Relume Library",
        description: "Component‑based design system that accelerates wireframing and prototyping, ensuring pixel‑perfect responsive layouts.",
      },
      {
        name: "Finsweet",
        description: "Advanced Webflow attributes for complex interactions, filtering systems, and CMS optimisation at enterprise scale.",
      },
    ],
  },
];

// Trusted partners for logo ticker
const trustedPartners = [
  "Adobe", "Google", "Kinsta", "Webflow", "Semji", "Cloudflare", "STAT"
];

export default function PartnersPage() {
  const lastUpdated = "May 2026";

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Partners & Collaborations",
    url: "https://icreatixpro.com/partners/",
    description:
      "Official partners and collaborations of iCreatixPRO in SEO, AI marketing, and digital growth.",
    publisher: {
      "@type": "Organization",
      name: "iCreatixPRO",
      url: "https://icreatixpro.com",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://icreatixpro.com/" },
        { "@type": "ListItem", position: 2, name: "Partners", item: "https://icreatixpro.com/partners/" },
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
            <Handshake className="w-4 h-4 text-[#2C727B]" />
            <span className="text-sm text-white/90 font-semibold">Growth Network</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Strategic{" "}
            <span className="bg-gradient-to-r from-[#2C727B] via-white to-[#2C727B] bg-clip-text text-transparent">
              Partnerships
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            We collaborate with industry-leading technology platforms and service providers
            to deliver superior SEO, AI marketing, and digital growth outcomes globally.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="#partners-list">
              <button className="group px-6 py-2.5 bg-white text-[#1A394E] font-semibold rounded-full shadow-md hover:shadow-lg transition-all">
                Browse Partners
                <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="#become-partner">
              <button className="px-6 py-2.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all">
                Become a Partner
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Trusted Partners Logo Ticker */}
      <section className="py-12 px-6 bg-white/80 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-wider">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            {trustedPartners.map((partner, idx) => (
              <span key={idx} className="text-gray-400 font-semibold text-lg tracking-wide">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories Grid */}
      <section id="partners-list" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C727B]/10 mb-4">
              <Zap className="w-4 h-4 text-[#2C727B]" />
              <span className="text-sm text-[#2C727B] font-semibold">Our Ecosystem</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E]">
              Technology & Service{" "}
              <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
                Partners
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We carefully select partners who share our commitment to quality, innovation,
              and measurable client outcomes.
            </p>
          </div>

          <div className="space-y-16">
            {partnersByCategory.map((category, catIdx) => {
              const CategoryIcon = category.icon;
              return (
                <div key={catIdx}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${category.gradient}`}>
                      <CategoryIcon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A394E]">{category.name}</h3>
                    <div className="h-px flex-1 bg-gray-200"></div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.partners.map((partner, idx) => (
                      <div
                        key={idx}
                        className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                      >
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4`}>
                          <CategoryIcon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="font-bold text-[#1A394E] text-lg">{partner.name}</h4>
                        <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                          {partner.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Collaboration Areas (How Partnerships Benefit Clients) */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#2C727B]/5 via-white to-[#1A394E]/5">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm mb-4">
            <TrendingUp className="w-4 h-4 text-[#2C727B]" />
            <span className="text-sm text-[#2C727B] font-semibold">Client Outcomes</span>
          </div>
          <h2 className="text-3xl font-bold text-[#1A394E]">
            How Our Partnerships{" "}
            <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
              Drive Real Results
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <Bot className="w-8 h-8 text-[#2C727B] mx-auto mb-3" />
              <h3 className="font-bold">AI‑Powered SEO Solutions</h3>
              <p className="text-gray-600 text-sm mt-1">GEO, content intelligence, and predictive analytics from industry‑leading AI platforms.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <Database className="w-8 h-8 text-[#2C727B] mx-auto mb-3" />
              <h3 className="font-bold">Advanced Data & Analytics</h3>
              <p className="text-gray-600 text-sm mt-1">Granular SERP tracking, first‑party data, and attribution modelling at enterprise scale.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <Globe className="w-8 h-8 text-[#2C727B] mx-auto mb-3" />
              <h3 className="font-bold">High‑Performance Hosting</h3>
              <p className="text-gray-600 text-sm mt-1">Speed, security, and reliability through premium cloud infrastructure partners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-10 bg-gradient-to-br from-[#1A394E] to-[#2C727B] text-white">
                <h3 className="text-2xl font-bold mb-3">Why Partner With iCreatixPRO?</h3>
                <p className="text-white/80 mb-6">
                  Join a growing network of technology and service providers serving global B2B clients.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#2C727B]" />
                    Access to enterprise client base
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#2C727B]" />
                    Joint marketing & co‑branded content
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#2C727B]" />
                    Product integration & technical collaboration
                  </li>
                </ul>
              </div>
              <div className="p-8 md:p-10 bg-white">
                <h3 className="text-2xl font-bold text-[#1A394E] mb-3">Our Partnership Tracks</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#2C727B]">🔧 Technology Partners</h4>
                    <p className="text-gray-600 text-sm">Platforms and tools that integrate with our SEO and AI delivery stack.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C727B]">🎯 Service Partners</h4>
                    <p className="text-gray-600 text-sm">Specialised consultancies expanding our service capabilities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner CTA (Internal Form) */}
      <section id="become-partner" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#2C727B] to-[#1A394E] rounded-3xl p-10 text-center">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Join Our Partner Network?
              </h2>
              <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
                Let's explore how we can collaborate to deliver exceptional client outcomes.
              </p>
              <Link href="/contact">
                <button className="px-8 py-3.5 bg-white text-[#1A394E] font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                  Apply to Become a Partner →
                </button>
              </Link>
              <p className="text-white/50 text-sm mt-4">*All partnership applications reviewed within 3 business days.</p>
            </div>
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
        <p className="mt-4 text-gray-400 text-xs">Last updated: {lastUpdated}</p>
      </div>
    </main>
  );
}