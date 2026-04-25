import type { Metadata, Viewport } from "next";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  FileText,
  TrendingUp,
  Target,
  ArrowRight,
  CheckCircle,
  Clock,
  Sparkles,
  Award,
  Zap,
  PenTool,
  Share2,
  Search,
  Video,
  Mail,
  BarChart3,
  Home,
} from "lucide-react";

// ===============================
// ✅ METADATA BASE (Absolute URLs for SEO)
// ===============================
const baseUrl = "https://icreatixpro.com";
const pageUrl = `${baseUrl}/services/content-marketing/`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Content Marketing Services | iCreatixPRO",
  description:
    "Strategic content marketing that drives traffic, generates leads, and builds brand authority. Get data-driven content that converts.",
  alternates: {
    canonical: "/services/content-marketing/",
  },
  openGraph: {
    title: "Content Marketing Services | iCreatixPRO",
    description:
      "Strategic content marketing that drives traffic and conversions.",
    url: pageUrl,
    siteName: "iCreatixPRO",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og/content-marketing-og.webp`,
        width: 1200,
        height: 630,
        alt: "Content marketing services including SEO blog writing, video content, and social media strategy by iCreatixPRO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Marketing Services | iCreatixPRO",
    description:
      "Strategic content marketing that drives traffic and conversions.",
    images: [`${baseUrl}/og/content-marketing-og.webp`],
  },
};

// ===============================
// ✅ VIEWPORT (SEO + Performance)
// ===============================
export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

// ===============================
// ✅ STATIC YEAR (No CLS risk)
// ===============================
const CURRENT_YEAR = 2026;

// ===============================
// ✅ SCHEMAS - COMPLETE @graph with @id linking
// ===============================
const organizationSchema = {
  "@type": "Organization",
  "@id": `${baseUrl}#org`,
  name: "iCreatixPRO",
  url: baseUrl,
  logo: `${baseUrl}/logo.webp`,
  sameAs: [
    "https://twitter.com/icreatixpro",
    "https://linkedin.com/company/icreatixpro",
  ],
};

const webSiteSchema = {
  "@type": "WebSite",
  "@id": `${baseUrl}#website`,
  name: "iCreatixPRO",
  url: baseUrl,
  inLanguage: "en",
  publisher: { "@id": `${baseUrl}#org` },
};

const webPageSchema = {
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  name: "Content Marketing Services | iCreatixPRO",
  url: pageUrl,
  description:
    "Strategic content marketing that drives traffic, generates leads, and builds brand authority.",
  inLanguage: "en",
  isPartOf: { "@id": `${baseUrl}#website` },
  publisher: { "@id": `${baseUrl}#org` },
};

const serviceSchema = {
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Content Marketing Services",
  provider: { "@id": `${baseUrl}#org` },
  url: pageUrl,
  description:
    "Strategic content marketing that drives traffic, generates leads, and builds brand authority.",
  serviceType: "Content Marketing",
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Businesses",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Content Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Content Strategy",
        description: "Data-driven content planning and strategy development",
      },
      {
        "@type": "Offer",
        name: "Blog Writing",
        description: "SEO-optimized blog posts that rank and engage",
      },
      {
        "@type": "Offer",
        name: "Video Content",
        description: "Professional video production and optimization",
      },
      {
        "@type": "Offer",
        name: "Social Media Content",
        description: "Platform-specific content that drives engagement",
      },
    ],
  },
};

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": `${pageUrl}#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: baseUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${baseUrl}/services/`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Content Marketing",
      item: pageUrl,
    },
  ],
};

const faqSchema = {
  "@type": "FAQPage",
  "@id": `${pageUrl}#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What is content marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Content marketing is a strategic approach focused on creating and distributing valuable, relevant content to attract and retain a clearly defined audience.",
      },
    },
    {
      "@type": "Question",
      name: "How does content marketing help SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Content marketing helps SEO by creating keyword-rich, valuable content that search engines love, building backlinks naturally, and improving user engagement signals.",
      },
    },
    {
      "@type": "Question",
      name: "What types of content do you create?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We create blog posts, videos, social media content, email newsletters, whitepapers, case studies, and infographics tailored to your brand and audience.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Content marketing results typically show within 3-6 months of consistent strategy implementation, with traffic and engagement growing over time.",
      },
    },
  ],
};

// ✅ COMBINED SCHEMA
const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    webSiteSchema,
    webPageSchema,
    serviceSchema,
    breadcrumbSchema,
    faqSchema,
  ],
};

// ===============================
// ✅ STATIC DATA (Outside component)
// ===============================
const stats = [
  { value: "300%", label: "Avg. Traffic Increase", icon: TrendingUp },
  { value: "24/7", label: "Content Support", icon: Clock },
  { value: "500+", label: "Content Pieces Created", icon: FileText },
  { value: "50M+", label: "Content Views Generated", icon: BarChart3 },
];

const mainServices = [
  {
    icon: PenTool,
    title: "Content Strategy",
    description: "Data-driven content planning that aligns with your business goals and audience needs.",
    benefits: ["Audience research & personas", "Content gap analysis", "Editorial calendar planning", "Performance tracking & optimization"],
  },
  {
    icon: FileText,
    title: "Blog Writing",
    description: "SEO-optimized blog posts that rank on search engines and engage your readers.",
    benefits: ["Keyword-optimized content", "Engaging storytelling", "Regular publishing schedule", "Featured snippet optimization"],
  },
  {
    icon: Video,
    title: "Video Content",
    description: "Professional video production that captures attention and drives engagement.",
    benefits: ["YouTube SEO optimization", "Social video content", "Product demonstrations", "Brand storytelling videos"],
  },
  {
    icon: Share2,
    title: "Social Media Content",
    description: "Platform-specific content that builds community and drives engagement.",
    benefits: ["Platform-specific strategies", "Visual content creation", "Engagement optimization", "Community management"],
  },
];

const additionalServices = [
  { icon: Mail, title: "Email Marketing", description: "Newsletters and email sequences that nurture leads and drive conversions." },
  { icon: Search, title: "SEO Content", description: "Content optimized for search engines without compromising quality." },
  { icon: Share2, title: "Content Distribution", description: "Multi-channel distribution to maximize reach and engagement." },
];

const benefits = [
  { icon: TrendingUp, title: "Data-Driven Strategy", description: "Content decisions backed by real data" },
  { icon: Target, title: "Audience-First Approach", description: "Content that resonates with your audience" },
  { icon: Award, title: "SEO-Optimized", description: "Built to rank and drive organic traffic" },
  { icon: Zap, title: "Consistent Quality", description: "Regular, high-quality content delivery" },
];

// ===============================
// ✅ MEMOIZED COMPONENTS
// ===============================

function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-[#1A394E] focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
    >
      Skip to content
    </a>
  );
}

const StatCard = React.memo(function StatCard({ stat }: { stat: typeof stats[0] }) {
  const Icon = stat.icon;
  return (
    <article className="bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm min-h-[120px]">
      <Icon className="w-6 h-6 text-[#2C727B] mx-auto mb-2" />
      <div className="text-xl md:text-2xl font-bold text-[#1A394E]">{stat.value}</div>
      <div className="text-[10px] md:text-xs text-[#1A394E]/50">{stat.label}</div>
    </article>
  );
});
StatCard.displayName = "StatCard";

const MainServiceCard = React.memo(function MainServiceCard({ service }: { service: typeof mainServices[0] }) {
  const Icon = service.icon;
  return (
    <article className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow min-h-[380px]">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h2 className="text-xl font-bold text-[#1A394E] mb-2">{service.title}</h2>
      <p className="text-[#1A394E]/60 text-sm mb-4">{service.description}</p>
      <div className="space-y-2">
        {service.benefits.map((benefit, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-[#1A394E]/70">
            <CheckCircle className="w-4 h-4 text-[#2C727B]" />
            <span>{benefit}</span>
          </div>
        ))}
      </div>
    </article>
  );
});
MainServiceCard.displayName = "MainServiceCard";

const Breadcrumb = React.memo(function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <div className="flex items-center gap-2 text-sm flex-wrap">
        <Link href="/" className="text-[#1A394E]/50 hover:text-[#2C727B] transition-colors flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <span className="text-[#1A394E]/30" aria-hidden="true">/</span>
        <Link href="/services" className="text-[#1A394E]/50 hover:text-[#2C727B] transition-colors">
          Services
        </Link>
        <span className="text-[#1A394E]/30" aria-hidden="true">/</span>
        <span className="text-[#2C727B] font-medium" aria-current="page">Content Marketing</span>
      </div>
    </nav>
  );
});
Breadcrumb.displayName = "Breadcrumb";

export default function ContentMarketingPage() {
  return (
    <>
      {/* ✅ COMBINED SCHEMA - JSON-LD only */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />

      <SkipLink />

      <main id="main-content" role="main" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30 py-16 px-4 md:py-24 md:px-6">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb />

          {/* Hero Section with OPTIMIZED LCP Image */}
          <section aria-labelledby="main-heading" className="text-center mb-12 md:mb-16">
            {/* ✅ LCP Image - priority only (fetchPriority is redundant) */}
            <div className="mb-8 flex justify-center">
<Image
  src="/content-marketing.webp"
  width={800}
  height={420}
  priority
  quality={85}
  alt="Content marketing services including SEO blog writing, video content, and social media strategy"
  className="rounded-xl shadow-lg w-full max-w-4xl h-auto"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
/>
            </div>

            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2C727B]/10 to-[#1A394E]/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-[#2C727B]" />
              <span className="text-sm font-medium text-[#1A394E]">Story-Driven Growth</span>
            </div>

            <h1 id="main-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#1A394E] to-[#2C727B] bg-clip-text text-transparent mb-6">
              Content Marketing Services That Drive Real Results
            </h1>

            <p className="text-[#1A394E]/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Content marketing services designed for SEO growth, lead generation, and brand authority.
            </p>

            <p className="text-[#1A394E]/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-4">
              At <strong className="text-[#2C727B]">iCreatixPRO</strong>, we create strategic content that attracts, engages, and converts.
              From <Link href="/services/" className="text-[#2C727B] hover:underline font-medium">
              our services
            </Link> to compelling blog posts and video content,
              we help brands tell their story and grow their audience. 
              Check out our <Link href="/blogs" className="text-[#2C727B] hover:underline font-medium">latest blog posts</Link> for content marketing insights.
            </p>
          </section>

          {/* Stats Section */}
          <section aria-label="Key metrics" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, idx) => (
              <StatCard key={idx} stat={stat} />
            ))}
          </section>

          {/* Main Services Section */}
          <section aria-labelledby="services-heading" className="mb-16">
            <h2 id="services-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-8">
              Our Content Marketing Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {mainServices.map((service, idx) => (
                <MainServiceCard key={idx} service={service} />
              ))}
            </div>
          </section>

          {/* Additional Services Section */}
          <section aria-labelledby="additional-heading" className="mb-16">
            <h2 id="additional-heading" className="text-xl md:text-2xl font-bold text-[#1A394E] text-center mb-6">
              Additional Content Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {additionalServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <article key={idx} className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-md transition-shadow min-h-[220px]">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1A394E] mb-2">{service.title}</h3>
                    <p className="text-[#1A394E]/60 text-sm">{service.description}</p>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section aria-labelledby="why-heading" className="bg-gradient-to-r from-[#1A394E]/5 to-[#2C727B]/5 rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center mb-8">
              <h2 id="why-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-3">
                Why Choose iCreatixPRO Content Marketing?
              </h2>
              <p className="text-[#1A394E]/60 max-w-2xl mx-auto">
                We create content that doesn't just inform—it converts.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-3 shadow-sm">
                      <Icon className="w-6 h-6 text-[#2C727B]" />
                    </div>
                    <h3 className="font-semibold text-[#1A394E] mb-1">{benefit.title}</h3>
                    <p className="text-xs text-[#1A394E]/50">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* FAQ Section - Clean UI only (JSON-LD handles schema) */}
          <section aria-labelledby="faq-heading" className="mb-16">
            <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-[#1A394E] mb-2">What is content marketing?</h3>
                <p className="text-[#1A394E]/70">Content marketing is a strategic approach focused on creating and distributing valuable, relevant content to attract and retain a clearly defined audience.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-[#1A394E] mb-2">How does content marketing help SEO?</h3>
                <p className="text-[#1A394E]/70">Content marketing helps SEO by creating keyword-rich, valuable content that search engines love, building backlinks naturally, and improving user engagement signals.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-[#1A394E] mb-2">What types of content do you create?</h3>
                <p className="text-[#1A394E]/70">We create blog posts, videos, social media content, email newsletters, whitepapers, case studies, and infographics tailored to your brand and audience.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-[#1A394E] mb-2">How long does it take to see results?</h3>
                <p className="text-[#1A394E]/70">Content marketing results typically show within 3-6 months of consistent strategy implementation, with traffic and engagement growing over time.</p>
              </div>
            </div>
          </section>

          {/* CTA Section - Link to Contact Page */}
          <section aria-label="Call to action" className="text-center bg-gradient-to-r from-[#2C727B] to-[#1A394E] rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Ready to Transform Your Content Marketing?
            </h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Start creating content that drives real business results with iCreatixPRO.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#1A394E] px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-all duration-300"
            >
              Get Free Content Strategy
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-white/50 text-center">
            <p className="text-xs text-[#1A394E]/40">
              © {CURRENT_YEAR} iCreatixPRO. All rights reserved.
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}