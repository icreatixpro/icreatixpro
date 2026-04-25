import React from "react";
import type { Metadata, Viewport } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  TrendingUp,
  Target,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Award,
  Search,
  ShoppingCart,
  Star,
  Home,
  BarChart3,
  Globe,
  DollarSign,
  ThumbsUp,
  Rocket,
  Users,
  Shield,
  Heart,
  Zap,
  Package,
  Truck,
  RefreshCw,
  AlertCircle,
  Lightbulb,
  ListChecks,
  Phone,
  Mail,
  Link as LinkIcon,
  Smartphone,
  FileText,
} from "lucide-react";

// ===============================
// ✅ METADATA BASE (Absolute URLs - NO TRAILING SLASH)
// ===============================
const baseUrl = "https://icreatixpro.com";
const pageUrl = `${baseUrl}/services/ecommerce-seo`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "E-Commerce SEO Services | Boost Sales & Traffic",
  description:
    "Boost your online store sales with expert e-commerce SEO services. Increase product rankings, traffic, and conversions. Get a free audit today!",
  alternates: {
    canonical: pageUrl,
    languages: {
      en: pageUrl,
      "en-US": pageUrl,
      "en-GB": pageUrl,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  authors: [{ name: "iCreatixPRO" }],
  creator: "iCreatixPRO",
  publisher: "iCreatixPRO",
  openGraph: {
    title: "E-Commerce SEO Services for Online Stores | Increase Sales & Traffic",
    description:
      "Boost your online store sales with expert e-commerce SEO services. Increase product rankings, traffic, and conversions.",
    url: pageUrl,
    siteName: "iCreatixPRO",
    type: "website",
    images: [
      {
        url: `${baseUrl}/ecommerce-seo-services.webp`,
        width: 1200,
        height: 630,
        alt: "E-commerce SEO services including product optimization, category pages, and technical SEO by iCreatixPRO",
      },
      {
        url: `${baseUrl}/ecommerce-seo-growth-chart.webp`,
        width: 1200,
        height: 630,
        alt: "E-commerce SEO growth chart showing traffic and sales increase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce SEO Services for Online Stores",
    description: "Increase product rankings, traffic, and sales with expert SEO.",
    images: [`${baseUrl}/ecommerce-seo-services.webp`],
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
// ✅ FAQ DATA - HIGH INTENT QUESTIONS + People Also Ask
// ===============================
const faqs = [
  {
    q: "What is e-commerce SEO?",
    a: "E-commerce SEO optimizes your online store to rank higher in Google for product searches. 70% of shoppers start on Google, making it essential for online sales.",
  },
  {
    q: "How long does e-commerce SEO take?",
    a: "Initial improvements appear in 2-3 months. Significant ranking gains typically take 4-6 months, depending on competition and product catalog size.",
  },
  {
    q: "Is e-commerce SEO better than Google Ads?",
    a: "SEO provides sustainable, long-term growth with compounding returns, while Google Ads delivers immediate traffic. Both work best together for maximum ROI.",
  },
  {
    q: "How do you optimize product pages for SEO?",
    a: "We optimize product titles, descriptions, images, URLs, internal links, and schema markup to help your products rank for high-intent purchase keywords.",
  },
  {
    q: "What is the best SEO strategy for e-commerce?",
    a: "The best strategy includes keyword research, product page optimization, category SEO, internal linking, technical SEO, and quality backlinks from relevant sources.",
  },
  {
    q: "How does Shopify SEO differ from WooCommerce?",
    a: "Shopify SEO focuses on app optimization and collection pages, while WooCommerce requires more technical configuration. We optimize both platforms for maximum visibility.",
  },
  {
    q: "How much does e-commerce SEO cost?",
    a: "Packages start at $2,000 USD per month for small stores. Enterprise pricing is custom based on product count and competition level.",
  },
  {
    q: "Do you guarantee rankings?",
    a: "No ethical SEO provider guarantees rankings. We guarantee white-hat techniques, transparent reporting, and continuous optimization for measurable growth.",
  },
];

// ===============================
// ✅ PROCESS STEPS
// ===============================
const processSteps = [
  { step: "01", title: "Audit", desc: "Technical & competition analysis", key: "step-1" },
  { step: "02", title: "Strategy", desc: "Keyword & content plan", key: "step-2" },
  { step: "03", title: "Optimize", desc: "Product & category pages", key: "step-3" },
  { step: "04", title: "Scale", desc: "Link building & expansion", key: "step-4" },
  { step: "05", title: "Monitor", desc: "Track & optimize", key: "step-5" },
];

// ===============================
// ✅ SEO COMPARISON TABLE DATA
// ===============================
const seoComparison = [
  { element: "Product Titles", impact: "High", priority: "Critical" },
  { element: "Meta Descriptions", impact: "Medium", priority: "Important" },
  { element: "Product Images", impact: "High", priority: "Critical" },
  { element: "Internal Linking", impact: "High", priority: "Important" },
  { element: "Product Reviews", impact: "Medium", priority: "Nice to Have" },
  { element: "Schema Markup", impact: "High", priority: "Critical" },
];

// ===============================
// ✅ E-COMMERCE SEO CHECKLIST
// ===============================
const seoChecklist = [
  { title: "Keyword Research", desc: "Find high-intent product keywords like 'buy organic coffee beans'", icon: Search },
  { title: "Product Page SEO", desc: "Optimize titles, descriptions, images with target keywords", icon: Package },
  { title: "Category Page SEO", desc: "Structure categories for broad commercial intent searches", icon: FileText },
  { title: "Product Schema", desc: "Enable rich snippets, star ratings, and price displays", icon: Star },
  { title: "Internal Linking", desc: "Connect related products & category pages strategically", icon: LinkIcon },
  { title: "Site Speed", desc: "Optimize Core Web Vitals for better user experience", icon: Zap },
  { title: "Mobile UX", desc: "Ensure mobile-friendly experience for shoppers", icon: Smartphone },
  { title: "Technical SEO", desc: "Fix crawl errors, broken links, and indexation issues", icon: Shield },
];

// ===============================
// ✅ SCHEMAS - COMPLETE ELITE SETUP
// ===============================
const organizationSchema = {
  "@type": "Organization",
  "@id": `${baseUrl}#org`,
  name: "iCreatixPRO",
  url: baseUrl,
  logo: {
    "@type": "ImageObject",
    url: `${baseUrl}/logo.webp`,
  },
  sameAs: [
    "https://twitter.com/icreatixpro",
    "https://linkedin.com/company/icreatixpro",
    "https://www.facebook.com/icreatixpro",
    "https://www.instagram.com/icreatixpro",
    "https://www.youtube.com/@iCreatixPRO",
    "https://github.com/icreatixpro",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: ["English"],
    contactOption: "TollFree",
    areaServed: "Worldwide",
  },
  inLanguage: "en",
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
  name: "E-Commerce SEO Services for Online Stores",
  url: pageUrl,
  description:
    "Boost your online store sales with expert e-commerce SEO services. Increase product rankings, traffic, and conversions.",
  inLanguage: "en",
  isPartOf: { "@id": `${baseUrl}#website` },
  publisher: { "@id": `${baseUrl}#org` },
  breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
  mainEntity: { "@id": `${pageUrl}#service` },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${baseUrl}/ecommerce-seo-services.webp`,
  },
};

const testimonialsForSchema = [
  {
    name: "Jessica Martinez",
    role: "Founder, ModernHome",
    content: "Our organic traffic increased 280% in 4 months. Highly recommend!",
    rating: 5,
    key: "jessica-martinez",
  },
  {
    name: "David Kim",
    role: "CEO, TechGadgets",
    content: "Conversion rate increased 45% after product page SEO improvements.",
    rating: 5,
    key: "david-kim",
  },
  {
    name: "Rachel Green",
    role: "Marketing Director",
    content: "Category pages now rank #1 for competitive terms. Best e-commerce SEO agency!",
    rating: 5,
    key: "rachel-green",
  },
];

const serviceSchema = {
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "E-Commerce SEO Services",
  provider: { "@id": `${baseUrl}#org` },
  url: pageUrl,
  description:
    "Boost your online store sales with expert e-commerce SEO services. Increase product rankings, traffic, and conversions.",
  serviceType: "E-Commerce SEO",
  inLanguage: "en",
  areaServed: [
    { "@type": "Place", name: "Worldwide" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Pakistan" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "Australia" },
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Online Stores",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "2000",
    highPrice: "10000",
    availability: "https://schema.org/InStock",
    offerCount: 3,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: 127,
    reviewCount: 127,
  },
  review: testimonialsForSchema.map(t => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: t.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating,
      bestRating: "5",
    },
    reviewBody: t.content,
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "E-Commerce SEO Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Product Page SEO",
        description: "Optimize product titles, descriptions, and images",
      },
      {
        "@type": "Offer",
        name: "Category Page SEO",
        description: "Structure category pages for high-intent keywords",
      },
      {
        "@type": "Offer",
        name: "Technical SEO for E-commerce",
        description: "Fix crawling, indexing, and site speed issues",
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
      item: `${baseUrl}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "E-Commerce SEO",
      item: pageUrl,
    },
  ],
};

const faqSchema = {
  "@type": "FAQPage",
  "@id": `${pageUrl}#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

// ✅ CLEAN COMBINED SCHEMA
const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    webSiteSchema,
    webPageSchema,
    breadcrumbSchema,
    serviceSchema,
    faqSchema,
  ],
};

// ===============================
// ✅ STATIC DATA (Outside component)
// ===============================
const stats = [
  { value: "500+", label: "Online Stores", icon: ShoppingCart },
  { value: "2M+", label: "Products Indexed", icon: Package },
  { value: "300%", label: "Avg. Growth", icon: TrendingUp },
  { value: "4.9", label: "Client Rating", icon: Star },
];

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Comprehensive SEO strategies to boost rankings and traffic.",
    features: ["Product keyword research", "On-page product SEO", "Category page optimization", "E-commerce link building"],
    link: "/services/search-engine-optimization",
    ctaText: "E-commerce SEO strategies & services",
  },
  {
    icon: Zap,
    title: "Technical SEO",
    description: "Fix site speed, indexing, and crawling issues that hurt rankings.",
    features: ["Site speed optimization", "Crawl budget management", "Mobile-first indexing", "Core Web Vitals"],
    link: "/services/technical-seo",
    ctaText: "Technical SEO fixes for stores",
  },
  {
    icon: Target,
    title: "Local SEO",
    description: "Optimize for local searches and attract nearby customers.",
    features: ["Google Business Profile", "Local citations", "Review management", "Map pack optimization"],
    link: "/services/local-seo",
    ctaText: "Local SEO for e-commerce",
  },
  {
    icon: TrendingUp,
    title: "Google Ads",
    description: "Drive immediate traffic with targeted PPC campaigns.",
    features: ["Shopping campaigns", "Search ads", "Display retargeting", "ROI tracking"],
    link: "/services/google-ads",
    ctaText: "PPC & Shopping campaigns",
  },
];

const ecommercePlatforms = [
  "Shopify", "WooCommerce", "Magento", "BigCommerce", "Salesforce",
  "Shopware", "PrestaShop", "OpenCart", "Custom Built",
];

const reasons = [
  { icon: Award, title: "E-Commerce Experts", desc: "500+ stores optimized", key: "experts" },
  { icon: Users, title: "Experienced Team", desc: "Certified SEO professionals", key: "team" },
  { icon: Shield, title: "Data-Driven", desc: "Analytics-backed decisions", key: "data-driven" },
  { icon: Heart, title: "24/7 Support", desc: "Always here to help", key: "support" },
];

const testimonials = [
  {
    name: "Jessica Martinez",
    role: "Founder, ModernHome",
    content: "Our organic traffic increased 280% in 4 months. Highly recommend!",
    rating: 5,
    key: "jessica-martinez",
  },
  {
    name: "David Kim",
    role: "CEO, TechGadgets",
    content: "Conversion rate increased 45% after product page SEO improvements.",
    rating: 5,
    key: "david-kim",
  },
  {
    name: "Rachel Green",
    role: "Marketing Director",
    content: "Category pages now rank #1 for competitive terms. Best e-commerce SEO agency!",
    rating: 5,
    key: "rachel-green",
  },
];

const tools = [
  "Google Search Console", "SEMrush", "Ahrefs", "Shopify Analytics",
  "Screaming Frog", "Yoast SEO", "Moz Pro", "Google Analytics 4",
];

// ===============================
// ✅ COMPONENTS
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

function StatCard({ stat }: { stat: typeof stats[0] }) {
  const Icon = stat.icon;
  return (
    <div className="bg-white rounded-xl p-4 md:p-6 text-center border border-gray-100 shadow-sm min-h-[120px] md:min-h-[140px]">
      <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 rounded-full bg-[#2C727B]/10 flex items-center justify-center">
        <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#2C727B]" />
      </div>
      <div className="text-2xl md:text-3xl font-bold text-[#1A394E]">{stat.value}</div>
      <div className="text-[10px] md:text-sm text-[#1A394E]/60 mt-1">{stat.label}</div>
    </div>
  );
}

const ServiceCard = React.memo(function ServiceCard({ service }: { service: typeof services[0] }) {
  const Icon = service.icon;
  return (
    <article className="bg-white rounded-2xl border border-gray-100 p-5 md:p-6 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
      </div>
      <h3 className="text-lg md:text-xl font-bold text-[#1A394E] mb-2">{service.title}</h3>
      <p className="text-[#1A394E]/60 text-sm leading-relaxed mb-4">{service.description}</p>
      <div className="space-y-2">
        {service.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-[#1A394E]/70">
            <CheckCircle className="w-4 h-4 text-[#2C727B] flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <Link href={service.link} className="text-[#2C727B] text-sm font-medium hover:underline inline-flex items-center gap-1">
          {service.ctaText} <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </article>
  );
});
ServiceCard.displayName = "ServiceCard";

const TestimonialCard = React.memo(function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-100 shadow-sm">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
        ))}
      </div>
      <p className="text-[#1A394E]/70 text-sm leading-relaxed mb-4">"{testimonial.content}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center text-white font-bold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-[#1A394E] text-sm">{testimonial.name}</div>
          <div className="text-xs text-[#1A394E]/50">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
});
TestimonialCard.displayName = "TestimonialCard";

function ReasonCard({ reason }: { reason: typeof reasons[0] }) {
  const Icon = reason.icon;
  return (
    <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100">
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#2C727B]/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 md:w-5 md:h-5 text-[#2C727B]" />
      </div>
      <div>
        <h3 className="font-semibold text-[#1A394E] text-sm md:text-base">{reason.title}</h3>
        <p className="text-xs md:text-sm text-[#1A394E]/60">{reason.desc}</p>
      </div>
    </div>
  );
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 md:mb-8">
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
        <span className="text-[#2C727B] font-medium" aria-current="page">E-Commerce SEO</span>
      </div>
    </nav>
  );
}

function ChecklistItem({ item }: { item: typeof seoChecklist[0] }) {
  const Icon = item.icon;
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-white/50 border border-gray-100">
      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
        <CheckCircle className="w-3.5 h-3.5 text-green-600" />
      </div>
      <div>
        <h4 className="font-medium text-[#1A394E] text-sm">{item.title}</h4>
        <p className="text-xs text-[#1A394E]/50">{item.desc}</p>
      </div>
    </div>
  );
}

export default function EcommerceSEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />

      <SkipLink />

      <main id="main-content" role="main" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30 py-12 md:py-16 lg:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb />

          {/* Hero Section */}
          <section aria-labelledby="main-heading" className="text-center mb-12 md:mb-16">
            <div className="mb-6 md:mb-8 flex justify-center">
              <Image
                src="/ecommerce-seo-services.webp"
                width={800}
                height={420}
                priority
                fetchPriority="high"
                quality={80}
                alt="E-commerce SEO services - optimize your online store for product rankings and sales growth"
                className="rounded-xl shadow-lg w-full max-w-4xl h-auto"
                sizes="(max-width: 768px) 100vw, 800px"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2C727B]/10 to-[#1A394E]/10 rounded-full px-3 py-1 md:px-4 md:py-2 mb-4 md:mb-6">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#2C727B]" />
              <span className="text-xs md:text-sm font-medium text-[#1A394E]">Trusted by 500+ Online Stores</span>
            </div>

            <h1 id="main-heading" className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#1A394E] to-[#2C727B] bg-clip-text text-transparent mb-4 md:mb-6">
              E-Commerce SEO That Drives Sales
            </h1>

            <p className="text-[#1A394E]/70 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Professional e-commerce SEO strategies designed to increase product visibility, drive qualified traffic, and boost online sales.
            </p>

            <div className="mt-4 md:mt-6">
              <p className="text-[#1A394E]/70 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                At <strong className="text-[#2C727B]">iCreatixPRO</strong>, we help online stores rank higher and sell more with proven SEO strategies. 
                Our <Link href="/services/technical-seo" className="text-[#2C727B] hover:underline">technical SEO services</Link> and <Link href="/services/search-engine-optimization" className="text-[#2C727B] hover:underline">product page optimization</Link> deliver measurable results.
              </p>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-3 md:mt-4">
                <Link href="/services/search-engine-optimization" className="text-[#2C727B] hover:underline font-medium text-sm md:text-base">
                  E-commerce SEO strategies →
                </Link>
                <Link href="/blogs" className="text-[#2C727B] hover:underline font-medium text-sm md:text-base">
                  Product SEO insights →
                </Link>
                <Link href="/services/digital-marketing" className="text-[#2C727B] hover:underline font-medium text-sm md:text-base">
                  Digital marketing services →
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-6 md:mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm md:text-base"
              >
                Get Free SEO Audit (Limited Slots)
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/50 text-[#1A394E] font-semibold hover:bg-white/90 transition-all hover:scale-105 text-sm md:text-base"
              >
                View Success Stories
              </Link>
            </div>
          </section>

          {/* What is E-Commerce SEO Section with LSI Keywords */}
          <section aria-labelledby="what-is-heading" className="mb-12 md:mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 id="what-is-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-3 md:mb-4">
                What Is E-Commerce SEO?
              </h2>
              <p className="text-[#1A394E]/70 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                E-commerce SEO is the practice of optimizing your online store to rank higher in search engines for product-related searches. 
                Whether you need <strong className="text-[#2C727B]">Shopify SEO</strong>, <strong className="text-[#2C727B]">WooCommerce SEO</strong>, or custom <strong className="text-[#2C727B]">product page SEO</strong>, our strategies deliver results. 
                With <strong className="text-[#2C727B]">70% of shoppers starting product searches on Google</strong>, e-commerce SEO is essential for online retail success.
              </p>
              <p className="text-[#1A394E]/70 text-sm md:text-base leading-relaxed">
                Unlike traditional SEO, e-commerce SEO focuses on product visibility, <strong className="text-[#2C727B]">category page optimization</strong>, 
                and converting search traffic into sales through strategic <strong className="text-[#2C727B]">product keyword research</strong> and <strong className="text-[#2C727B]">online store optimization</strong>.
              </p>
            </div>
          </section>

          {/* SEO Comparison Table - Google LOVES structured content */}
          <section aria-labelledby="table-heading" className="mb-12 md:mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 id="table-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
                E-Commerce SEO Element Impact Guide
              </h2>
              <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
                Critical SEO elements and their impact on your online store rankings
              </p>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl border border-gray-100 shadow-sm">
                  <thead className="bg-[#1A394E]/5">
                    <tr>
                      <th className="text-left p-4 font-semibold text-[#1A394E]">SEO Element</th>
                      <th className="text-left p-4 font-semibold text-[#1A394E]">Impact Level</th>
                      <th className="text-left p-4 font-semibold text-[#1A394E]">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    {seoComparison.map((item, idx) => (
                      <tr key={idx} className="border-t border-gray-100">
                        <td className="p-4 text-[#1A394E]/80">{item.element}</td>
                        <td className="p-4">
                          <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                            item.impact === "High" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                          }`}>
                            {item.impact}
                          </span>
                        </td>
                        <td className="p-4 text-[#1A394E]/80">{item.priority}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* E-Commerce SEO Strategies Section */}
          <section aria-labelledby="strategies-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
            <div className="text-center mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium mb-3">
                <Lightbulb className="w-3 h-3" />
                Proven Strategies
              </div>
              <h2 id="strategies-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-3">
                E-Commerce SEO Strategies That Work
              </h2>
              <p className="text-[#1A394E]/60 text-sm md:text-base max-w-2xl mx-auto">
                Data-driven approaches for product page SEO and online store optimization
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2C727B] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#1A394E]">Product Page SEO</h3>
                    <p className="text-sm text-[#1A394E]/60">Optimize product titles, descriptions, images, and reviews for target keywords. Use tools like SEMrush and Ahrefs for keyword research.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2C727B] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#1A394E]">Category Page Optimization</h3>
                    <p className="text-sm text-[#1A394E]/60">Build hierarchical category structures with strategic internal linking to distribute authority effectively.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2C727B] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#1A394E]">Technical SEO for E-commerce</h3>
                    <p className="text-sm text-[#1A394E]/60">Fix crawl errors, improve site speed (especially on Shopify and WooCommerce), and optimize Core Web Vitals.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2C727B] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#1A394E]">E-Commerce Link Building</h3>
                    <p className="text-sm text-[#1A394E]/60">Build quality backlinks from product reviews, blogs, and industry resources to boost domain authority.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2C727B] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#1A394E]">Schema Markup for Products</h3>
                    <p className="text-sm text-[#1A394E]/60">Implement product schema (Product, Offer, Review, AggregateRating) to enable rich snippets and star ratings.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2C727B] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#1A394E]">Platform-Specific SEO</h3>
                    <p className="text-sm text-[#1A394E]/60">Shopify SEO (apps, collections), WooCommerce SEO (plugins, permalinks), Magento SEO (extensions, indexing).</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* E-Commerce SEO Checklist Section - Expanded */}
          <section aria-labelledby="checklist-heading" className="mb-12 md:mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-6 md:mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-3">
                  <ListChecks className="w-3 h-3" />
                  SEO Checklist
                </div>
                <h2 id="checklist-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-3">
                  Complete Product Page SEO Checklist
                </h2>
                <p className="text-[#1A394E]/60 text-sm md:text-base max-w-2xl mx-auto">
                  Essential optimizations for product visibility and category page rankings
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {seoChecklist.map((item, idx) => (
                  <ChecklistItem key={idx} item={item} />
                ))}
              </div>
            </div>
          </section>

          {/* Category vs Product SEO Section */}
          <section aria-labelledby="comparison-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
            <div className="text-center mb-6 md:mb-8">
              <h2 id="comparison-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-3">
                Category SEO vs Product SEO
              </h2>
              <p className="text-[#1A394E]/60 text-sm md:text-base max-w-2xl mx-auto">
                Understanding the difference for maximum e-commerce visibility
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-[#1A394E] mb-3 flex items-center gap-2">
                  <Package className="w-5 h-5 text-[#2C727B]" />
                  Category Page SEO
                </h3>
                <p className="text-sm text-[#1A394E]/60 mb-4">Targets broad commercial intent keywords (e.g., "running shoes"). Focuses on structure, filters, and internal linking.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-[#1A394E]/70"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" />Broad keyword targeting</li>
                  <li className="flex items-center gap-2 text-sm text-[#1A394E]/70"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" />Category descriptions (500+ words)</li>
                  <li className="flex items-center gap-2 text-sm text-[#1A394E]/70"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" />Faceted navigation optimization</li>
                </ul>
              </div>
              <div className="bg-white/50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-[#1A394E] mb-3 flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-[#2C727B]" />
                  Product Page SEO
                </h3>
                <p className="text-sm text-[#1A394E]/60 mb-4">Targets specific purchase intent (e.g., "Nike Air Max 270"). Focuses on conversions and rich snippets.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-[#1A394E]/70"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" />Long-tail keyword targeting</li>
                  <li className="flex items-center gap-2 text-sm text-[#1A394E]/70"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" />Unique product descriptions</li>
                  <li className="flex items-center gap-2 text-sm text-[#1A394E]/70"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" />Product schema + reviews</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section aria-label="Key metrics" className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </section>

          {/* Benefits Section */}
          <section aria-labelledby="benefits-heading" className="mb-12 md:mb-16">
            <div className="text-center mb-6 md:mb-8">
              <h2 id="benefits-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-3 md:mb-4">
                Why E-Commerce SEO Matters
              </h2>
              <p className="text-[#1A394E]/60 text-sm md:text-base max-w-2xl mx-auto">
                SEO for online stores drives sustainable, cost-effective growth
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="text-center p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-[#2C727B]" />
                </div>
                <h3 className="font-semibold text-[#1A394E] text-sm md:text-base mb-1">Higher ROI</h3>
                <p className="text-xs md:text-sm text-[#1A394E]/50">Better returns than paid ads</p>
              </div>
              <div className="text-center p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <Target className="w-5 h-5 md:w-6 md:h-6 text-[#2C727B]" />
                </div>
                <h3 className="font-semibold text-[#1A394E] text-sm md:text-base mb-1">Purchase Intent</h3>
                <p className="text-xs md:text-sm text-[#1A394E]/50">Reach ready-to-buy customers</p>
              </div>
              <div className="text-center p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <RefreshCw className="w-5 h-5 md:w-6 md:h-6 text-[#2C727B]" />
                </div>
                <h3 className="font-semibold text-[#1A394E] text-sm md:text-base mb-1">Sustainable Growth</h3>
                <p className="text-xs md:text-sm text-[#1A394E]/50">Long-term organic traffic</p>
              </div>
              <div className="text-center p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <Globe className="w-5 h-5 md:w-6 md:h-6 text-[#2C727B]" />
                </div>
                <h3 className="font-semibold text-[#1A394E] text-sm md:text-base mb-1">Global Reach</h3>
                <p className="text-xs md:text-sm text-[#1A394E]/50">Expand to new markets</p>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section aria-labelledby="services-heading" className="mb-12 md:mb-16">
            <h2 id="services-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
              Related SEO Services
            </h2>
            <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
              Comprehensive SEO solutions for product page SEO and category optimization
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </section>

          {/* Platforms Section */}
          <section aria-labelledby="platforms-heading" className="mb-12 md:mb-16">
            <h2 id="platforms-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
              Platforms We Support
            </h2>
            <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
              Specialized SEO for Shopify, WooCommerce, Magento, and more
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {ecommercePlatforms.map((platform) => (
                <span
                  key={platform}
                  className="px-3 py-1 md:px-4 md:py-2 rounded-lg bg-white border border-gray-100 text-[#1A394E] text-xs md:text-sm font-medium shadow-sm"
                >
                  {platform}
                </span>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section aria-labelledby="process-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
            <h2 id="process-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
              Our E-Commerce SEO Process
            </h2>
            <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
              A proven 5-step methodology for product page SEO success
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
              {processSteps.map((item) => (
                <div key={item.key} className="text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] text-white font-bold flex items-center justify-center mx-auto mb-2 text-sm md:text-base">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-[#1A394E] text-xs md:text-sm">{item.title}</h3>
                  <p className="text-[10px] md:text-xs text-[#1A394E]/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section aria-labelledby="why-heading" className="mb-12 md:mb-16">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
              <div>
                <h2 id="why-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-4 md:mb-6">
                  Why Choose iCreatixPRO?
                </h2>
                <div className="space-y-3 md:space-y-4">
                  {reasons.map((reason) => (
                    <ReasonCard key={reason.key} reason={reason} />
                  ))}
                </div>
                <div className="mt-4 md:mt-6 p-3 md:p-4 bg-teal-50 rounded-xl">
                  <div className="flex items-center gap-2 md:gap-3">
                    <ThumbsUp className="w-6 h-6 md:w-8 md:h-8 text-[#2C727B]" />
                    <div>
                      <p className="font-semibold text-[#1A394E] text-sm md:text-base">Free E-Commerce SEO Audit (Limited Slots)</p>
                      <p className="text-xs md:text-sm text-[#1A394E]/60">No commitment. 24-hour response.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#2C727B]/5 to-[#1A394E]/5 rounded-2xl p-6 md:p-8 border border-gray-100">
                <div className="text-center mb-4 md:mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">
                    <Star className="w-3 h-3 fill-teal-700" />
                    Client Testimonials
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4">
                  {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.key} testimonial={testimonial} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Technologies Section */}
          <section aria-labelledby="tools-heading" className="mb-12 md:mb-16 text-center">
            <h2 id="tools-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-3 md:mb-4">
              Tools We Use
            </h2>
            <p className="text-[#1A394E]/60 text-sm md:text-base mb-6 md:mb-8">Industry-leading tools for e-commerce keyword research and SEO success</p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 md:px-4 md:py-2 rounded-lg bg-white border border-gray-100 text-[#1A394E]/70 text-xs md:text-sm font-medium shadow-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section aria-labelledby="pricing-heading" className="mb-12 md:mb-16 text-center">
            <h2 id="pricing-heading" className="text-xl md:text-2xl font-bold text-[#1A394E] mb-2 md:mb-3">
              Flexible E-Commerce SEO Packages
            </h2>
            <p className="text-[#1A394E]/60 text-sm md:text-base max-w-2xl mx-auto">
              E-commerce SEO starts at <strong className="text-[#2C727B]">$2,000 USD/month</strong> for small stores. 
              <Link href="/contact" className="text-[#2C727B] hover:underline ml-1">Contact our team</Link> for a custom quote.
            </p>
          </section>

          {/* FAQ Section */}
          <section aria-labelledby="faq-heading" className="mb-12 md:mb-16">
            <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
              Everything about product SEO and online store optimization
            </p>
            <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white rounded-xl p-4 md:p-6 border border-gray-100">
                  <h3 className="text-base md:text-lg font-semibold text-[#1A394E] mb-2">{faq.q}</h3>
                  <p className="text-[#1A394E]/70 text-sm md:text-base">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section aria-label="Call to action" className="text-center bg-gradient-to-r from-[#2C727B] to-[#1A394E] rounded-2xl p-6 md:p-12 text-white">
            <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3">
              Ready to Grow Your Online Store?
            </h2>
            <p className="text-white/80 text-sm md:text-base mb-4 md:mb-6 max-w-2xl mx-auto">
              Get a free e-commerce SEO audit. <strong>Limited slots available. No obligation.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#1A394E] px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-white/90 transition-all hover:scale-105 text-sm md:text-base"
              >
                Get Free SEO Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/50 text-white font-semibold hover:bg-white/30 transition-all hover:scale-105 text-sm md:text-base"
              >
                View Success Stories
              </Link>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/50 text-center">
            <p className="text-[10px] md:text-xs text-[#1A394E]/40">
              © {CURRENT_YEAR} iCreatixPRO. E-commerce SEO specialists.
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}