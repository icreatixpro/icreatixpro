import type { Metadata, Viewport } from "next";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import {
  CheckCircle,
  Sparkles,
  Star,
  Home,
  BarChart3,
  Globe,
  ThumbsUp,
  Users,
  Shield,
  Heart,
  Eye,
  Target,
  ArrowRight,
  Award,
  TrendingUp,
  DollarSign,
  Facebook,
  Instagram,
  Video,
  Image as ImageIcon,
  Layout,
  ShoppingBag,
  Film,
  Tv,
  Calendar,
  UserCheck,
  BadgeCheck,
  Download,
  ChevronRight,
} from "lucide-react";

// Import client components
import ROICalculator from "./ROICalculator";
import FAQItem from "./FAQItem";

// ===============================
// ✅ CONSTANTS
// ===============================
const baseUrl = "https://icreatixpro.com";
const pageUrl = `${baseUrl}/services/meta-ads/`;
const CURRENT_YEAR = 2026;
const LAST_UPDATED = "April 2026";
const DATE_PUBLISHED = "2024-01-15";
const DATE_MODIFIED = "2026-04-01";

// ✅ Optimized Meta Title (55 chars)
const seoTitle = "Meta Ads Management | Facebook & Instagram Experts";

// ✅ Optimized Meta Description
const seoDescription = "Boost ROI with Meta advertising experts offering Facebook and Instagram ads, conversion-focused campaigns, audience targeting, testing, and optimization.";

// ===============================
// ✅ TESTIMONIALS DATA
// ===============================
const testimonialsData = [
  {
    name: "Amanda Lee",
    role: "E-commerce Owner",
    content: "Our Facebook ROAS went from 2x to 5x in just 2 months. The creative testing strategy was game-changing!",
    rating: 5,
    result: "5x ROAS achieved",
    verified: true,
  },
  {
    name: "Brian Foster",
    role: "Marketing Director",
    content: "They helped us scale from $20k to $100k monthly ad spend profitably. Best Meta Ads agency out there.",
    rating: 5,
    result: "400% revenue growth",
    verified: true,
  },
  {
    name: "Jessica Park",
    role: "Small Business Owner",
    content: "Instagram has become our #1 revenue channel. Their creative strategy and audience targeting are exceptional.",
    rating: 5,
    result: "3x Instagram revenue",
    verified: true,
  },
];

// ===============================
// ✅ ORIGINAL BENCHMARK DATA
// ===============================
const benchmarkData = [
  { metric: "Average CPC", value: "$1.42", industry: "$0.80-2.50" },
  { metric: "Average CTR", value: "4.8%", industry: "2-3%" },
  { metric: "Average ROAS", value: "3.5x", industry: "2-3x" },
  { metric: "CVR (Ecommerce)", value: "3.2%", industry: "1.5-2.5%" },
];

// ===============================
// ✅ EXPANDED FAQ DATA (16 questions)
// ===============================
const faqs = [
  { q: "What's the minimum budget for Meta Ads?", a: "We recommend starting with at least $1,500-2,500/month for effective testing and optimization." },
  { q: "How much do Meta Ads cost?", a: "Small businesses typically spend $1,500-3,000/month, mid-size $5,000-15,000/month, and enterprise $25,000+/month. Management fees start at $1,299/month." },
  { q: "Is Meta Ads good for ecommerce?", a: "Yes, Meta Ads are excellent for ecommerce. Dynamic product ads and Advantage+ Shopping campaigns deliver strong ROAS." },
  { q: "How long do Meta Ads take to work?", a: "Initial results appear within 3-5 days. Meaningful optimization typically takes 14-30 days." },
  { q: "What ROAS is considered good?", a: "Ecommerce typically targets 3-5x (300-500%). Our clients average 350%+ ROAS." },
  { q: "What is the Meta Pixel?", a: "The Meta Pixel is a tracking code that tracks conversions, builds audiences, and provides analytics." },
  { q: "How do Lookalike Audiences work?", a: "Lookalike audiences find new people similar to your best customers based on source audience analysis." },
  { q: "What are Advantage+ Shopping Campaigns?", a: "AI-powered ecommerce solution that automates targeting, creative optimization, and bidding." },
  { q: "How does retargeting work?", a: "Retargeting shows ads to people who previously visited your website or engaged with your content." },
  { q: "What is a good CTR for Facebook Ads?", a: "Average CTR across all industries is 0.9-1.5%. Top-performing accounts achieve 3-5% CTR." },
  { q: "How often should I refresh Meta ad creatives?", a: "We recommend testing new creatives every 2-4 weeks to prevent ad fatigue and maintain performance." },
  { q: "Are Meta Ads worth it in 2026?", a: "Yes. With 3.8B+ monthly active users, businesses see average ROAS of 3-5x when properly optimized." },
  { q: "What's the difference between Meta Pixel and Conversion API?", a: "Pixel tracks browser-side events, while Conversion API sends server-side data. Using both provides the most accurate tracking." },
  { q: "How do I set up retargeting campaigns?", a: "Retargeting requires Meta Pixel installation, event tracking, audience building, and customized creative. Our team handles the entire setup." },
  { q: "What industries benefit most from Meta Ads?", a: "Ecommerce, retail, consumer goods, travel, hospitality, real estate, education, lead generation, and B2C services see exceptional results." },
  { q: "Can I run Meta Ads without a website?", a: "Yes! You can run lead ads, event response ads, and page like ads without a website. However, having a website improves tracking and conversion optimization." },
];

// ===============================
// ✅ SCHEMAS
// ===============================

const organizationSchema = {
  "@type": "Organization",
  "@id": `${baseUrl}#org`,
  name: "iCreatixPRO",
  url: baseUrl,
  logo: { "@type": "ImageObject", url: `${baseUrl}/logo.webp` },
  sameAs: [
    "https://twitter.com/icreatixpro",
    "https://linkedin.com/company/icreatixpro",
    "https://www.facebook.com/icreatixpro",
    "https://www.instagram.com/icreatixpro",
  ],
  contactPoint: { "@type": "ContactPoint", contactType: "sales", availableLanguage: ["English"], areaServed: "Worldwide" },
  inLanguage: "en",
};

const webSiteSchema = {
  "@type": "WebSite",
  "@id": `${baseUrl}#website`,
  name: "iCreatixPRO",
  url: baseUrl,
  inLanguage: "en",
  publisher: { "@id": `${baseUrl}#org` },
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
};

const webPageSchema = {
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  name: seoTitle,
  url: pageUrl,
  description: seoDescription,
  inLanguage: "en",
  isPartOf: { "@id": `${baseUrl}#website` },
  publisher: { "@id": `${baseUrl}#org` },
  breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
  mainEntity: { "@id": `${pageUrl}#service` },
  mainEntityOfPage: pageUrl,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  primaryImageOfPage: { "@type": "ImageObject", url: `${baseUrl}/meta-ads-management-facebook-instagram-services.webp` },
};

const serviceSchema = {
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Meta Ads Management Services",
  provider: { "@id": `${baseUrl}#org` },
  url: pageUrl,
  description: seoDescription,
  serviceType: "Social Media Advertising",
  category: "Digital Marketing",
  brand: "Meta",
  providerMobility: "remote",
  serviceOutput: "Leads, Sales Growth, ROAS Improvement",
  inLanguage: "en",
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Pakistan" },
  ],
  audience: { "@type": "Audience", audienceType: "Businesses" },
  offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "USD", price: "1299" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Meta Ads Management Plans",
    itemListElement: [
      { "@type": "Offer", name: "Starter Meta", price: "1299", priceCurrency: "USD" },
      { "@type": "Offer", name: "Professional Meta", price: "2499", priceCurrency: "USD" },
    ],
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5", ratingCount: 67 },
  review: testimonialsData.slice(0, 2).map(r => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: "5" },
    reviewBody: r.content,
  })),
};

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": `${pageUrl}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Services", item: `${baseUrl}/services/` },
    { "@type": "ListItem", position: 3, name: "Meta Ads", item: pageUrl },
  ],
};

const authorSchema = {
  "@type": "Person",
  "@id": `${baseUrl}#author`,
  name: "Michael Stewart",
  jobTitle: "Head of Social Advertising",
  worksFor: { "@type": "Organization", "@id": `${baseUrl}#org` },
  knowsAbout: ["Meta Ads", "Facebook Advertising", "Instagram Advertising", "Paid Social"],
};

const faqSchema = {
  "@type": "FAQPage",
  "@id": `${pageUrl}#faq`,
  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
};

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, webSiteSchema, webPageSchema, serviceSchema, breadcrumbSchema, authorSchema, faqSchema],
};

// ===============================
// ✅ METADATA
// ===============================
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: seoTitle,
  description: seoDescription,
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
  authors: [{ name: "Michael Stewart" }],
  creator: "Michael Stewart",
  publisher: "iCreatixPRO",
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: pageUrl,
    siteName: "iCreatixPRO",
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_PK"],
    images: [{ url: `${baseUrl}/meta-ads-management-facebook-instagram-services.webp`, width: 1200, height: 630, alt: "Meta Ads management services including Facebook and Instagram advertising by iCreatixPRO", type: "image/webp" }],
  },
  twitter: { card: "summary_large_image", title: "Meta Ads Management | Facebook & Instagram Advertising", description: "Drive results with professional Meta Ads management. Get free audit today!", images: [`${baseUrl}/meta-ads-management-facebook-instagram-services.webp`], site: "@icreatixpro" },
};

export const viewport: Viewport = { themeColor: "#1A394E", width: "device-width", initialScale: 1 };

// ===============================
// ✅ STATIC DATA
// ===============================
const stats = [
  { value: "350%", label: "Avg. ROAS" },
  { value: "4.8%", label: "Engagement Rate" },
  { value: "250M+", label: "Monthly Reach" },
  { value: "180+", label: "Active Accounts" },
];

const partnerStats = [
  { value: "$25M+", label: "Ad Spend Managed" },
  { value: "3M+", label: "Conversions Generated" },
  { value: "4.8%", label: "Avg. CTR" },
  { value: "24/7", label: "Campaign Monitoring" },
];

const platforms = [
  { name: "Facebook Ads", description: "2.9B+ monthly active users", color: "#1877F2" },
  { name: "Instagram Ads", description: "2B+ monthly active users", color: "#E4405F" },
];

const adTypes = [
  { name: "Image Ads", description: "Single image with compelling copy" },
  { name: "Video Ads", description: "Engaging video content" },
  { name: "Carousel Ads", description: "Swipeable multi-image ads" },
  { name: "Collection Ads", description: "Product showcase for e-commerce" },
  { name: "Stories Ads", description: "Full-screen vertical format" },
  { name: "Reels Ads", description: "Short-form video ads" },
  { name: "Lead Ads", description: "Instant lead generation" },
  { name: "Dynamic Product Ads", description: "Personalized product retargeting" },
];

const servicesList = [
  { title: "Audience Targeting", description: "Reach the right people with precision audience targeting strategies.", features: ["Custom Audiences", "Lookalike Audiences", "Interest Targeting", "Behavioral Targeting", "Retargeting Campaigns"], link: "/services/digital-marketing" },
  { title: "Creative Strategy", description: "Compelling ad creatives that stop the scroll and drive engagement.", features: ["Ad Copywriting", "Visual Design", "Video Production", "Creative Testing", "Performance Analysis"], link: "/services/digital-marketing" },
  { title: "Campaign Management", description: "Expert management of your Meta ad campaigns for optimal performance.", features: ["Bid Optimization", "Budget Allocation", "Ad Scheduling", "Placement Optimization", "A/B Testing"], link: "/services/digital-marketing" },
  { title: "Conversion Tracking", description: "Accurate tracking and attribution for all conversions.", features: ["Meta Pixel Setup", "Conversion API", "Event Tracking", "Attribution Modeling", "ROI Analysis"], link: "/services/analytics" },
  { title: "Messenger & WhatsApp", description: "Engage customers directly through messaging platforms.", features: ["Click-to-Messenger Ads", "WhatsApp Business", "Chatbot Integration", "Automated Responses", "Lead Qualification"], link: "/services/digital-marketing" },
  { title: "Analytics & Reporting", description: "Data-driven insights and transparent performance reporting.", features: ["Custom Dashboards", "Real-time Analytics", "Competitor Insights", "Monthly Reports", "Strategic Recommendations"], link: "/services/analytics" },
];

const plans = [
  { title: "Starter Meta", price: "$1,299", features: ["Up to $15K Ad Spend", "Facebook & Instagram Ads", "Campaign Setup", "Creative Design (2 variants)", "Monthly Optimization", "Monthly Reports"], isPopular: false },
  { title: "Professional Meta", price: "$2,499", features: ["Up to $50K Ad Spend", "Full Platform Coverage", "Advanced Creative Strategy", "Weekly Optimization", "A/B Creative Testing", "Conversion Tracking", "Priority Support"], isPopular: true },
  { title: "Enterprise Meta", price: "Custom", features: ["Unlimited Ad Spend", "Multi-Account Management", "Dedicated Creative Team", "Daily Optimization", "Advanced Analytics", "Real-time Dashboard", "24/7 Priority Support"], isPopular: false },
];

const reasons = [
  { title: "Meta Business Partner", desc: "Certified Meta Partner with exclusive benefits" },
  { title: "Certified Experts", desc: "Meta Certified Digital Marketing Associates" },
  { title: "Transparent Reporting", desc: "Real-time access to campaign data" },
  { title: "Creative Excellence", desc: "In-house creative team for stunning visuals" },
];

const relatedServices = [
  { name: "Google Ads Management", href: "/services/google-ads" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "Analytics & Reporting", href: "/services/analytics" },
  { name: "Content Marketing", href: "/services/content-marketing" },
  { name: "SEO Services", href: "/services/search-engine-optimization" },
  { name: "E-commerce SEO", href: "/services/ecommerce-seo" },
];

// ===============================
// ✅ COMPONENTS
// ===============================

function SkipLink() {
  return (
    <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-[#1A394E] focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg">
      Skip to content
    </a>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white rounded-xl p-4 md:p-6 text-center border border-gray-100 shadow-sm">
      <div className="text-2xl md:text-3xl font-bold text-[#1A394E]">{value}</div>
      <div className="text-[10px] md:text-sm text-[#1A394E]/60 mt-1">{label}</div>
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
        <Link href="/services" className="text-[#1A394E]/50 hover:text-[#2C727B] transition-colors">Services</Link>
        <span className="text-[#1A394E]/30" aria-hidden="true">/</span>
        <span className="text-[#2C727B] font-medium" aria-current="page">Meta Ads</span>
      </div>
    </nav>
  );
}

function PlatformCard({ name, description, color }: { name: string; description: string; color: string }) {
  return (
    <div className="flex flex-col items-center p-6 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-all">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3`} style={{ background: `${color}20` }}>
        <div className={`w-8 h-8 rounded-full`} style={{ background: color }} />
      </div>
      <span className="text-base font-bold text-[#1A394E] text-center">{name}</span>
      <p className="text-xs text-[#1A394E]/50 text-center mt-2">{description}</p>
    </div>
  );
}

function AdTypeCard({ name, description }: { name: string; description: string }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-all">
      <div className="w-10 h-10 rounded-lg bg-[#2C727B]/10 flex items-center justify-center flex-shrink-0">
        <CheckCircle className="w-5 h-5 text-[#2C727B]" />
      </div>
      <div>
        <h4 className="font-semibold text-[#1A394E] text-sm">{name}</h4>
        <p className="text-xs text-[#1A394E]/50">{description}</p>
      </div>
    </div>
  );
}

function ServiceCard({ service }: { service: typeof servicesList[0] }) {
  return (
    <article className="bg-white rounded-2xl border border-gray-100 p-5 md:p-6 hover:shadow-md transition-shadow">
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
          Learn more <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </article>
  );
}

function PricingCard({ plan }: { plan: typeof plans[0] }) {
  return (
    <div className={`relative bg-white rounded-2xl border p-6 shadow-sm hover:shadow-md transition-all ${plan.isPopular ? "border-[#2C727B] shadow-lg" : "border-gray-100"}`}>
      {plan.isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white text-xs font-medium">
          Most Popular
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-[#1A394E] mb-2">{plan.title}</h3>
        <div className="text-3xl font-bold text-[#1A394E]">{plan.price}</div>
        {plan.price !== "Custom" && <p className="text-xs text-[#1A394E]/50 mt-1">+ ad spend</p>}
      </div>
      <ul className="space-y-3 mb-6">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-[#1A394E]/70">
            <CheckCircle className="w-4 h-4 text-[#2C727B] flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <Link href="/contact" className="block w-full py-3 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white text-center font-semibold hover:shadow-lg transition-all">
        Get Started
      </Link>
    </div>
  );
}

function ReasonCard({ reason }: { reason: typeof reasons[0] }) {
  return (
    <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100">
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#2C727B]/10 flex items-center justify-center flex-shrink-0">
        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#2C727B]" />
      </div>
      <div>
        <h3 className="font-semibold text-[#1A394E] text-sm md:text-base">{reason.title}</h3>
        <p className="text-xs md:text-sm text-[#1A394E]/60">{reason.desc}</p>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonialsData[0] }) {
  return (
    <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-100 shadow-sm">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
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
          {testimonial.result && <div className="text-xs text-[#2C727B] font-medium mt-1">{testimonial.result}</div>}
          {testimonial.verified && (
            <div className="text-xs text-green-600 flex items-center gap-1 mt-1">
              <CheckCircle className="w-3 h-3" /> Verified result
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function WhatIsMetaAdsSection() {
  return (
    <section id="what-is" aria-labelledby="what-is-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
      <h2 id="what-is-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        What Is Meta Ads?
      </h2>
      <p className="text-[#1A394E]/70 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto">
        <strong>Meta Ads</strong> (formerly Facebook Ads) is Meta's advertising platform that allows businesses to display ads across Facebook, Instagram, Messenger, and WhatsApp. With <strong>3.8 billion monthly active users</strong>, it's the world's largest social advertising network.
      </p>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
        <div className="bg-white/50 rounded-lg p-3"><div className="font-bold text-2xl text-[#2C727B]">3.8B+</div><div className="text-xs text-[#1A394E]/50">Monthly Active Users</div></div>
        <div className="bg-white/50 rounded-lg p-3"><div className="font-bold text-2xl text-[#2C727B]">$132B+</div><div className="text-xs text-[#1A394E]/50">2025 Ad Revenue</div></div>
        <div className="bg-white/50 rounded-lg p-3"><div className="font-bold text-2xl text-[#2C727B]">200M+</div><div className="text-xs text-[#1A394E]/50">Businesses Using</div></div>
        <div className="bg-white/50 rounded-lg p-3"><div className="font-bold text-2xl text-[#2C727B]">93%</div><div className="text-xs text-[#1A394E]/50">Social Marketers Use Meta</div></div>
      </div>
    </section>
  );
}

function CostSection() {
  return (
    <section id="cost" aria-labelledby="cost-heading" className="mb-12 md:mb-16">
      <h2 id="cost-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        How Much Do Meta Ads Cost?
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        Understanding Meta advertising pricing and budget requirements
      </p>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-white/50 rounded-xl"><div className="font-bold text-2xl text-[#2C727B]">$1,500-3k</div><div className="text-xs text-[#1A394E]/50 mt-1">Small Business</div><div className="text-xs text-[#1A394E]/40 mt-1">per month</div></div>
            <div className="text-center p-4 bg-teal-50 rounded-xl border border-[#2C727B]/20"><div className="font-bold text-2xl text-[#2C727B]">$5k-15k</div><div className="text-xs text-[#1A394E]/50 mt-1">Mid-Size Business</div><div className="text-xs text-[#1A394E]/40 mt-1">per month</div></div>
            <div className="text-center p-4 bg-white/50 rounded-xl"><div className="font-bold text-2xl text-[#2C727B]">$25k+</div><div className="text-xs text-[#1A394E]/50 mt-1">Enterprise</div><div className="text-xs text-[#1A394E]/40 mt-1">per month</div></div>
          </div>
          <p className="text-sm text-[#1A394E]/60 text-center">
            Management fees start at <strong className="text-[#2C727B]">$1,299/month</strong> + 5-10% of ad spend for enterprise accounts.
            <Link href="/contact" className="text-[#2C727B] hover:underline ml-1">Get custom pricing →</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

function BenchmarkSection() {
  return (
    <section id="benchmark" aria-labelledby="benchmark-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
      <h2 id="benchmark-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Meta Ads Benchmarks (From 180+ Accounts Managed)
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        Real performance data from our managed accounts - Updated {LAST_UPDATED}
      </p>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl border border-gray-100 shadow-sm">
          <thead className="bg-[#1A394E]/5">
            <tr><th className="text-left p-4 font-semibold text-[#1A394E]">Metric</th><th className="text-left p-4 font-semibold text-[#1A394E]">Our Average</th><th className="text-left p-4 font-semibold text-[#1A394E]">Industry Benchmark</th></tr>
          </thead>
          <tbody>
            {benchmarkData.map((item, idx) => (
              <tr key={idx} className="border-t border-gray-100">
                <td className="p-4 text-[#1A394E]/80 font-medium">{item.metric}</td>
                <td className="p-4 font-bold text-[#2C727B]">{item.value}</td>
                <td className="p-4 text-[#1A394E]/60">{item.industry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-center text-xs text-[#1A394E]/50 mt-4">
        *Based on aggregate data from 180+ active Meta Ads accounts across ecommerce, lead generation, and B2B industries.
      </p>
      <div className="mt-6 bg-gradient-to-r from-[#1A394E] to-[#2C727B] rounded-xl p-6 text-center text-white">
        <h3 className="text-lg font-bold mb-2">Download Our Complete Meta Ads Benchmark Report</h3>
        <p className="text-white/80 text-sm mb-4">50+ pages of industry benchmarks, creative examples, and optimization strategies.</p>
        <Link href="/resources/meta-ads-benchmark-report-2026.pdf" className="inline-flex items-center gap-2 bg-white text-[#1A394E] px-5 py-2 rounded-lg font-semibold hover:bg-white/90 transition-all text-sm">
          <Download className="w-4 h-4" />
          Download Free PDF Report
        </Link>
      </div>
    </section>
  );
}

function EntitySections() {
  return (
    <>
      <section aria-labelledby="pixel-heading" className="mb-12 md:mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
            <h2 id="pixel-heading" className="text-xl font-bold text-[#1A394E] mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-[#2C727B]" />
              Meta Pixel & Conversion API
            </h2>
            <p className="text-[#1A394E]/60 text-sm mb-4">Accurate tracking is the foundation of profitable Meta advertising. We implement both Meta Pixel and Conversion API for complete data accuracy.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-[#1A394E]/70"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> Server-side tracking for ad blockers</li>
              <li className="flex items-center gap-2 text-sm text-[#1A394E]/70"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> Enhanced conversion matching</li>
              <li className="flex items-center gap-2 text-sm text-[#1A394E]/70"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> First-party data integration</li>
            </ul>
            <Link href="/services/analytics" className="text-[#2C727B] text-xs hover:underline mt-3 inline-block">Learn about Meta Pixel setup →</Link>
          </div>
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-[#1A394E] mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#2C727B]" />
              Advantage+ Shopping Campaigns
            </h2>
            <p className="text-[#1A394E]/60 text-sm mb-4">Meta's AI-powered solution for ecommerce that automates creative optimization, targeting, and bidding for maximum ROAS.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-[#1A394E]/70"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> Automated creative optimization</li>
              <li className="flex items-center gap-2 text-sm text-[#1A394E]/70"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> Dynamic audience expansion</li>
              <li className="flex items-center gap-2 text-sm text-[#1A394E]/70"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> Real-time budget allocation</li>
            </ul>
            <Link href="/services/ecommerce-seo" className="text-[#2C727B] text-xs hover:underline mt-3 inline-block">See ecommerce success stories →</Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="audiences-heading" className="mb-12 md:mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
            <h2 id="audiences-heading" className="text-xl font-bold text-[#1A394E] mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-[#2C727B]" />
              Lookalike Audiences
            </h2>
            <p className="text-[#1A394E]/60 text-sm mb-4">Scale your best-performing customer segments by finding new audiences similar to your highest-value customers.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-[#1A394E]/70"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> 1% to 10% lookalike expansion</li>
              <li className="flex items-center gap-2 text-sm text-[#1A394E]/70"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> Value-based optimization</li>
              <li className="flex items-center gap-2 text-sm text-[#1A394E]/70"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> Sequential audience layering</li>
            </ul>
            <Link href="/services/digital-marketing" className="text-[#2C727B] text-xs hover:underline mt-3 inline-block">Explore audience targeting →</Link>
          </div>
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-[#1A394E] mb-3 flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#2C727B]" />
              Retargeting Strategy
            </h2>
            <p className="text-[#1A394E]/60 text-sm mb-4">Re-engage visitors who didn't convert with personalized ads based on their behavior and interests.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-[#1A394E]/70"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> Cart abandonment recovery</li>
              <li className="flex items-center gap-2 text-sm text-[#1A394E]/70"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> Product view retargeting</li>
              <li className="flex items-center gap-2 text-sm text-[#1A394E]/70"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> Cross-sell & upsell campaigns</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

function ComparisonTable() {
  return (
    <section id="comparison" aria-labelledby="comparison-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
      <h2 id="comparison-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Meta Ads vs Google Ads: Which Is Right for Your Business?
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl border border-gray-100 shadow-sm">
          <thead className="bg-[#1A394E]/5">
            <tr><th className="text-left p-4 font-semibold text-[#1A394E]">Feature</th><th className="text-left p-4 font-semibold text-[#1A394E]">Meta Ads</th><th className="text-left p-4 font-semibold text-[#1A394E]">Google Ads</th></tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-100"><td className="p-4 font-medium">Primary Intent</td><td className="p-4">Social / Discovery</td><td className="p-4">Search / Active</td></tr>
            <tr className="border-t border-gray-100"><td className="p-4 font-medium">Best For</td><td className="p-4">Brand awareness, ecommerce, visual products, B2C</td><td className="p-4">High-intent purchase, B2B, professional services</td></tr>
            <tr className="border-t border-gray-100"><td className="p-4 font-medium">Avg. CPC</td><td className="p-4">$0.50-1.50</td><td className="p-4">$1-4 (Search), $0.50-2 (Display)</td></tr>
            <tr className="border-t border-gray-100"><td className="p-4 font-medium">Targeting Options</td><td className="p-4">Demographic, interest, behavior, lookalike, retargeting</td><td className="p-4">Keyword, topic, placement, audience, retargeting</td></tr>
            <tr className="border-t border-gray-100"><td className="p-4 font-medium">Learning Curve</td><td className="p-4">Moderate</td><td className="p-4">High</td></tr>
          </tbody>
        </table>
      </div>
      <div className="text-center mt-6">
        <p className="text-[#1A394E]/60 text-sm">
          <strong className="text-[#2C727B]">Our recommendation:</strong> Use both! Meta Ads for brand awareness and discovery, Google Ads for capturing active search intent.
          <Link href="/services/google-ads" className="text-[#2C727B] hover:underline ml-1">Explore Google Ads services →</Link>
        </p>
      </div>
    </section>
  );
}

function RelatedServicesSection() {
  return (
    <section aria-labelledby="related-heading" className="mb-12 md:mb-16">
      <h2 id="related-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Related Services
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        Explore our complete suite of digital marketing solutions
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {relatedServices.map((service, idx) => (
          <Link key={idx} href={service.href} className="px-4 py-2 rounded-lg bg-white border border-gray-100 text-[#1A394E] text-sm font-medium shadow-sm hover:bg-[#2C727B]/5 hover:border-[#2C727B]/30 transition-all">
            {service.name} →
          </Link>
        ))}
      </div>
    </section>
  );
}

function EEATSection() {
  return (
    <section aria-labelledby="eeat-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center"><Calendar className="w-6 h-6 text-[#2C727B]" /></div>
          <div><p className="text-xs text-[#1A394E]/50">Last Updated</p><p className="font-semibold text-[#1A394E]">{LAST_UPDATED}</p></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center"><UserCheck className="w-6 h-6 text-[#2C727B]" /></div>
          <div><p className="text-xs text-[#1A394E]/50">Reviewed By</p><p className="font-semibold text-[#1A394E]">Michael Stewart, Head of Social Advertising</p></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center"><BadgeCheck className="w-6 h-6 text-[#2C727B]" /></div>
          <div><p className="text-xs text-[#1A394E]/50">Certification</p><p className="font-semibold text-[#1A394E]">Meta Business Partner</p></div>
        </div>
      </div>
      <div className="text-center pt-4 border-t border-gray-100">
        <p className="text-sm text-[#1A394E]/60">Our team specializes in Meta advertising with proven results across e-commerce, lead generation, and brand awareness campaigns. We use only Meta-compliant, white-hat advertising techniques.</p>
      </div>
    </section>
  );
}

function TableOfContents() {
  const sections = [
    { id: "what-is", title: "What Is Meta Ads?" },
    { id: "cost", title: "Pricing & Budget" },
    { id: "services", title: "Services" },
    { id: "process", title: "Process" },
    { id: "benchmark", title: "Benchmarks" },
    { id: "comparison", title: "Meta vs Google" },
    { id: "pricing", title: "Plans" },
    { id: "faq", title: "FAQs" },
  ];

  return (
    <div className="mb-8 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100">
      <p className="text-sm font-semibold text-[#1A394E] mb-2 text-center">Table of Contents</p>
      <div className="flex flex-wrap justify-center gap-2">
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`} className="text-xs text-[#1A394E]/70 hover:text-[#2C727B] transition-colors px-2 py-1">
            {section.title}
          </a>
        ))}
      </div>
    </div>
  );
}

function ProcessSection() {
  const steps = [
    { step: "01", title: "Discovery", desc: "Strategy & goals" },
    { step: "02", title: "Creative", desc: "Ad development" },
    { step: "03", title: "Setup", desc: "Campaign launch" },
    { step: "04", title: "Monitor", desc: "Performance tracking" },
    { step: "05", title: "Optimize", desc: "A/B testing" },
    { step: "06", title: "Scale", desc: "Growth & expansion" },
  ];

  return (
    <section id="process" aria-labelledby="process-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
      <h2 id="process-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Our Meta Ads Process
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        A systematic approach to maximize your social media advertising ROI
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {steps.map((step, idx) => (
          <div key={idx} className="text-center p-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] text-white font-bold flex items-center justify-center mx-auto mb-2">
              {step.step}
            </div>
            <h3 className="font-semibold text-[#1A394E] text-sm">{step.title}</h3>
            <p className="text-[10px] text-[#1A394E]/50">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  return (
    <section aria-labelledby="why-heading" className="mb-12 md:mb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 id="why-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-4 md:mb-6">
            Why Choose Our Meta Ads Services?
          </h2>
          <div className="space-y-3 md:space-y-4">
            {reasons.map((reason, idx) => (
              <ReasonCard key={idx} reason={reason} />
            ))}
          </div>
          <div className="mt-6 p-4 bg-teal-50 rounded-xl">
            <div className="flex items-center gap-3">
              <ThumbsUp className="w-6 h-6 md:w-8 md:h-8 text-[#2C727B]" />
              <div>
                <p className="font-semibold text-[#1A394E] text-sm md:text-base">Free Meta Ads Audit</p>
                <p className="text-xs md:text-sm text-[#1A394E]/60">No commitment. 24-hour response.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#2C727B]/5 to-[#1A394E]/5 rounded-2xl p-6 md:p-8 border border-gray-100">
          <div className="text-center mb-4 md:mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">
              <Star className="w-3 h-3 fill-teal-700" />
              Client Success Stories
            </div>
          </div>
          <div className="space-y-3 md:space-y-4">
            {testimonialsData.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerSection() {
  return (
    <section aria-labelledby="partner-heading" className="mb-12 md:mb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center">
              <Facebook className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 id="partner-heading" className="text-2xl font-bold text-[#1A394E]">Meta Business Partner</h2>
              <p className="text-sm text-[#1A394E]/60">Certified excellence in Meta advertising</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-[#1A394E]/70">As a Meta Business Partner, we have direct access to Meta's support team, beta features, and advanced training. Our team maintains the highest level of Meta certifications.</p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">Facebook Certified</span>
              <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">Instagram Certified</span>
              <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">Creative Strategy</span>
              <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">Media Buying</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {partnerStats.map((stat, idx) => (
            <div key={idx} className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100">
              <div className="text-2xl font-bold text-[#2C727B]">{stat.value}</div>
              <div className="text-xs text-[#1A394E]/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingPlansSection() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="mb-12 md:mb-16">
      <h2 id="pricing-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Flexible Meta Ads Management Plans
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        Choose the plan that fits your business goals and budget
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, idx) => (
          <PricingCard key={idx} plan={plan} />
        ))}
      </div>
    </section>
  );
}

// ===============================
// ✅ FAQ Section Component (Using imported FAQItem)
// ===============================
function FAQSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="mb-12 md:mb-16">
      <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Meta Ads FAQs
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        Everything you need to know about our Meta advertising services
      </p>
      <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
        {faqs.map((faq, idx) => (
          <Suspense key={idx} fallback={<div className="h-20 bg-gray-100 rounded-xl animate-pulse" />}>
            <FAQItem faq={faq} idx={idx} />
          </Suspense>
        ))}
      </div>
    </section>
  );
}

// ===============================
// ✅ MAIN COMPONENT
// ===============================
export default function MetaAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }} />

      <SkipLink />

      <main id="main-content" role="main" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30 py-12 md:py-16 lg:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb />
          <TableOfContents />

          {/* Hero Section */}
          <section aria-labelledby="main-heading" className="text-center mb-12 md:mb-16">
            <div className="mb-6 md:mb-8 flex justify-center">
              <Image
                src="/meta-ads-management-facebook-instagram-services.webp"
                width={800}
                height={420}
                priority
                fetchPriority="high"
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACwAQCdASoQAAwABkC4JZQCdAE2uBMAAOAAwCp8LAXmDAAA"
                alt="Meta Ads management services including Facebook and Instagram advertising by iCreatixPRO"
                className="rounded-xl shadow-lg w-full max-w-4xl h-auto"
                sizes="(max-width: 768px) 100vw, 1200px"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-[#1A394E]/60">
              <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> Meta Business Partner</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> 180+ Active Accounts</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> $25M+ Ad Spend Managed</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> 4.9 Rating</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2C727B]/10 to-[#1A394E]/10 rounded-full px-3 py-1 md:px-4 md:py-2 mb-4 md:mb-6">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#2C727B]" />
              <span className="text-xs md:text-sm font-medium text-[#1A394E]">Meta Business Partner 2026</span>
            </div>

            <h1 id="main-heading" className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#1A394E] to-[#2C727B] bg-clip-text text-transparent mb-4 md:mb-6">
              Dominate Social Media with Meta Ads Management
            </h1>

            <p className="text-[#1A394E]/70 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Reach your ideal customers on Facebook & Instagram with data-driven ad campaigns that maximize ROI and grow your business.
            </p>

            <div className="mt-4 md:mt-6">
              <p className="text-[#1A394E]/70 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                At <strong className="text-[#2C727B]">iCreatixPRO</strong>, our Meta-certified experts help businesses scale with profitable social advertising.
              </p>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-3 md:mt-4">
                <Link href="/services/digital-marketing" className="text-[#2C727B] hover:underline font-medium text-sm md:text-base">Digital marketing →</Link>
                <Link href="/services/google-ads" className="text-[#2C727B] hover:underline font-medium text-sm md:text-base">Google Ads →</Link>
                <Link href="/blogs" className="text-[#2C727B] hover:underline font-medium text-sm md:text-base">Social insights →</Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-6 md:mt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm md:text-base">
                Get Free Meta Ads Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/case-studies" className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/50 text-[#1A394E] font-semibold hover:bg-white/90 transition-all hover:scale-105 text-sm md:text-base">
                View Case Studies
              </Link>
            </div>
          </section>

          {/* Stats Section */}
          <section aria-label="Key metrics" className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16">
            {stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </section>

          {/* What Is Meta Ads Section */}
          <WhatIsMetaAdsSection />

          {/* Cost Section */}
          <CostSection />

          {/* Platforms Section */}
          <section aria-labelledby="platforms-heading" className="mb-12 md:mb-16">
            <h2 id="platforms-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
              Multi-Platform Advertising
            </h2>
            <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
              Reach your audience across Facebook & Instagram with unified campaign management
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {platforms.map((platform, idx) => (
                <PlatformCard key={idx} name={platform.name} description={platform.description} color={platform.color} />
              ))}
            </div>
          </section>

          {/* Ad Types Section */}
          <section aria-labelledby="ad-types-heading" className="mb-12 md:mb-16">
            <h2 id="ad-types-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
              Ad Formats We Master
            </h2>
            <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
              Creative ad solutions that capture attention and drive action
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {adTypes.map((adType, idx) => (
                <AdTypeCard key={idx} name={adType.name} description={adType.description} />
              ))}
            </div>
          </section>

          {/* Entity Sections */}
          <EntitySections />

          {/* Services Section */}
          <section id="services" aria-labelledby="services-heading" className="mb-12 md:mb-16">
            <h2 id="services-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
              Comprehensive Meta Ads Services
            </h2>
            <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
              End-to-end Facebook & Instagram advertising management to maximize your ROI
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {servicesList.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </section>

          {/* Process Section */}
          <ProcessSection />

          {/* Why Choose Us Section */}
          <WhyChooseUsSection />

          {/* ROI Calculator */}
          <ROICalculator />

          {/* Benchmark Section */}
          <BenchmarkSection />

          {/* Comparison Table */}
          <ComparisonTable />

          {/* Partner Section */}
          <PartnerSection />

          {/* Pricing Plans */}
          <PricingPlansSection />

          {/* Related Services Section */}
          <RelatedServicesSection />

          {/* EEAT Section */}
          <EEATSection />

          {/* FAQ Section */}
          <FAQSection />

          {/* CTA Section */}
          <section aria-label="Call to action" className="text-center bg-gradient-to-r from-[#2C727B] to-[#1A394E] rounded-2xl p-6 md:p-12 text-white">
            <Target className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 opacity-50" />
            <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3">
              Ready to Scale with Meta Ads?
            </h2>
            <p className="text-white/80 text-sm md:text-base mb-4 md:mb-6 max-w-2xl mx-auto">
              Get a free Meta Ads audit and discover how our Facebook & Instagram advertising can grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#1A394E] px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-white/90 transition-all hover:scale-105 text-sm md:text-base">
                Get Free Meta Ads Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/case-studies" className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/50 text-white font-semibold hover:bg-white/30 transition-all hover:scale-105 text-sm md:text-base">
                View Case Studies
              </Link>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/50 text-center">
            <p className="text-[10px] md:text-xs text-[#1A394E]/40">
              © {CURRENT_YEAR} iCreatixPRO. Meta Ads management specialists. Last updated {LAST_UPDATED}.
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}