import type { Metadata, Viewport } from "next";
import SEOClient from "./SEOClient";

// ===============================
// ✅ CONSTANTS
// ===============================
const baseUrl = "https://icreatixpro.com";
const pageUrl = `${baseUrl}/services/search-engine-optimization/`;

// ✅ Optimized Meta Title (55 chars)
const seoTitle = "SEO Services | Expert SEO Agency for Google Rankings";

// ✅ Optimized Meta Description
const seoDescription = "Boost Google rankings with expert SEO services. Keyword research, on-page SEO, technical SEO & link building. Get your free SEO audit today now!";

// ===============================
// ✅ REVIEWS DATA
// ===============================
const reviewsData = [
  {
    name: "David Miller",
    rating: 5,
    reviewBody: "Our organic traffic increased by 250% in just 6 months. The team's SEO expertise is unmatched!",
  },
  {
    name: "Lisa Thompson",
    rating: 5,
    reviewBody: "Finally found an SEO agency that delivers results. We're now ranking #1 for our primary keywords.",
  },
  {
    name: "James Wilson",
    rating: 5,
    reviewBody: "The ROI from their SEO services has been incredible. Best investment we've made for our business.",
  },
];

// ===============================
// ✅ FAQ DATA
// ===============================
const faqs = [
  { q: "How long does SEO take to show results?", a: "While some improvements can be seen within 3-6 weeks, significant ranking improvements typically take 3-6 months. SEO is a long-term investment that compounds over time." },
  { q: "Do you guarantee #1 rankings?", a: "No ethical SEO agency can guarantee #1 rankings. However, we guarantee to use white-hat techniques and provide transparent reporting on our progress." },
  { q: "What industries do you specialize in?", a: "We work with businesses across e-commerce, healthcare, real estate, technology, legal, hospitality, and professional services." },
  { q: "Will you optimize my existing content?", a: "Yes! We'll audit and optimize your existing content as part of our on-page SEO services." },
  { q: "Do you provide monthly reports?", a: "Yes, you'll receive detailed monthly reports showing keyword rankings, traffic growth, conversions, and ROI metrics." },
  { q: "What's the difference between on-page and off-page SEO?", a: "On-page SEO optimizes your website content and structure. Off-page SEO builds authority through backlinks and external signals. Both are essential for ranking." },
  { q: "How much do SEO services cost?", a: "Our SEO packages start at $999/month for small businesses. Mid-size businesses typically invest $1,999-3,999/month for comprehensive SEO programs." },
  { q: "Do you offer local SEO services?", a: "Yes! We specialize in local SEO including Google Business Profile optimization, local citations, review management, and map pack rankings." },
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
  datePublished: "2024-01-15",
  dateModified: "2026-04-01",
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
  datePublished: "2024-01-15",
  dateModified: "2026-04-01",
  primaryImageOfPage: { "@type": "ImageObject", url: `${baseUrl}/seo-services.webp` },
};

const serviceSchema = {
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "SEO Services",
  provider: { "@id": `${baseUrl}#org` },
  url: pageUrl,
  description: seoDescription,
  serviceType: "Search Engine Optimization",
  category: "Digital Marketing",
  inLanguage: "en",
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Pakistan" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "Australia" },
  ],
  audience: { "@type": "Audience", audienceType: "Businesses" },
  offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "USD", price: "999" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SEO Pricing Plans",
    itemListElement: [
      { "@type": "Offer", name: "Starter SEO", price: "999", priceCurrency: "USD" },
      { "@type": "Offer", name: "Professional SEO", price: "1999", priceCurrency: "USD" },
    ],
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5", ratingCount: 127 },
  review: reviewsData.map(r => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: "5" },
    reviewBody: r.reviewBody,
  })),
};

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": `${pageUrl}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Services", item: `${baseUrl}/services/` },
    { "@type": "ListItem", position: 3, name: "SEO", item: pageUrl },
  ],
};

const authorSchema = {
  "@type": "Person",
  "@id": `${baseUrl}#author`,
  name: "Michael Stewart",
  jobTitle: "Head of SEO",
  worksFor: { "@type": "Organization", "@id": `${baseUrl}#org` },
  knowsAbout: ["SEO", "Search Engine Optimization", "Keyword Research", "Link Building", "Technical SEO"],
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
  keywords: [
    "SEO services",
    "search engine optimization",
    "keyword research",
    "link building",
    "technical SEO",
    "local SEO",
    "ecommerce SEO",
    "organic traffic",
    "Google rankings",
  ],
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
    images: [{ url: `${baseUrl}/seo-services.webp`, width: 1200, height: 630, alt: "SEO services including keyword research, on-page optimization, technical SEO and link building by iCreatixPRO", type: "image/webp" }],
  },
  twitter: { card: "summary_large_image", title: "SEO Services | Professional SEO Experts", description: "Rank #1 on Google with professional SEO services. Get free audit today!", images: [`${baseUrl}/seo-services.webp`], site: "@icreatixpro" },
};

export const viewport: Viewport = { themeColor: "#1A394E", width: "device-width", initialScale: 1 };

// ===============================
// ✅ MAIN PAGE
// ===============================
export default function SEOPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }} />
      <SEOClient />
    </>
  );
}