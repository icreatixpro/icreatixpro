import type { Metadata, Viewport } from "next";
import LocalSEOClient from "./LocalSEOClient";

// ===============================
// ✅ CONSTANTS
// ===============================
const baseUrl = "https://icreatixpro.com";
const pageUrl = `${baseUrl}/services/local-seo/`;

// ✅ Optimized Meta Title (53 chars)
const seoTitle = "Local SEO Services | Google Maps Ranking Experts";

// ✅ Optimized Meta Description
const seoDescription = "Boost local rankings with Local SEO services, Google Business Profile optimization, citation management, map pack SEO, reviews, and lead generation.";

// ===============================
// ✅ REVIEWS DATA
// ===============================
const reviewsData = [
  {
    name: "Sarah Martinez",
    rating: 5,
    reviewBody: "Our store visits increased by 200% after working with their local SEO team. We're now #1 in the map pack!",
  },
  {
    name: "Dr. James Wilson",
    rating: 5,
    reviewBody: "New patient appointments have doubled since they optimized our Google Business Profile. Amazing results!",
  },
  {
    name: "Michael Chang",
    rating: 5,
    reviewBody: "We went from page 3 to the top 3 in map pack. Our phone hasn't stopped ringing since!",
  },
];

// ===============================
// ✅ SERVICE AREAS (For LocalBusiness schema)
// ===============================
const serviceAreas = [
  "United States", "United Kingdom", "Canada", "Australia", "Pakistan"
];

// ===============================
// ✅ CITIES FOR TOPICAL CLUSTER
// ===============================
const majorCities = [
  "New York", "Los Angeles", "Chicago", "Houston", "Phoenix",
  "Philadelphia", "San Antonio", "San Diego", "Dallas", "Austin",
  "London", "Manchester", "Birmingham", "Toronto", "Vancouver",
  "Sydney", "Melbourne", "Brisbane", "Karachi", "Lahore",
];

// ===============================
// ✅ SCHEMAS - ELITE STACK
// ===============================

// Organization Schema
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
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: ["English"],
    areaServed: "Worldwide",
  },
  inLanguage: "en",
};

// LocalBusiness Schema (For agency itself)
const localBusinessSchema = {
  "@type": "LocalBusiness",
  "@id": `${baseUrl}#localbusiness`,
  name: "iCreatixPRO",
  url: baseUrl,
  logo: `${baseUrl}/logo.webp`,
  priceRange: "$$",
  servesCuisine: "Local SEO Services",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
  },
  areaServed: serviceAreas.map(area => ({ "@type": "City", name: area })),
  hasMap: "https://maps.google.com",
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
  name: seoTitle,
  url: pageUrl,
  description: seoDescription,
  inLanguage: "en",
  isPartOf: { "@id": `${baseUrl}#website` },
  publisher: { "@id": `${baseUrl}#org` },
  breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
  mainEntity: { "@id": `${pageUrl}#service` },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${baseUrl}/local-seo-services.webp`,
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", ".what-is-local-seo-summary"],
  },
};

// ✅ Enhanced Service Schema with hasPart
const serviceSchema = {
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Local SEO Services",
  provider: { "@id": `${baseUrl}#org` },
  url: pageUrl,
  description: seoDescription,
  serviceType: "Local SEO",
  category: "Digital Marketing",
  inLanguage: "en",
  areaServed: serviceAreas.map(area => ({ "@type": "Country", name: area })),
  audience: { "@type": "Audience", audienceType: "Local Businesses" },
  hasPart: [
    { "@type": "Service", name: "Google Business Profile Optimization" },
    { "@type": "Service", name: "Local Citation Building" },
    { "@type": "Service", name: "Review Management" },
    { "@type": "Service", name: "Local Link Building" },
  ],
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "799",
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: 89,
  },
  review: reviewsData.map(r => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: "5" },
    reviewBody: r.reviewBody,
  })),
};

// ✅ Author/Person Schema
const authorSchema = {
  "@type": "Person",
  "@id": `${baseUrl}#author`,
  name: "Michael Stewart",
  jobTitle: "Head of Local SEO",
  worksFor: { "@type": "Organization", "@id": `${baseUrl}#org` },
  url: `${baseUrl}/about/michael-stewart`,
  alumniOf: "University of Texas",
  knowsAbout: ["Local SEO", "Google Business Profile", "Map Pack Optimization", "Citation Building"],
};

// ✅ HowTo Schema for Process Section
const howToSchema = {
  "@type": "HowTo",
  "@id": `${pageUrl}#howto`,
  name: "How to Dominate Local Search Results",
  description: "A step-by-step guide to ranking in Google's Map Pack",
  totalTime: "P90D",
  estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "799" },
  step: [
    { "@type": "HowToStep", name: "Local SEO Audit", text: "Comprehensive analysis of current local search presence" },
    { "@type": "HowToStep", name: "Google Business Profile Optimization", text: "Full optimization of GBP for maximum visibility" },
    { "@type": "HowToStep", name: "Citation Building", text: "Build consistent NAP citations across directories" },
    { "@type": "HowToStep", name: "Review Management", text: "Generate positive reviews and manage reputation" },
    { "@type": "HowToStep", name: "Local Content Strategy", text: "Create location-specific content" },
    { "@type": "HowToStep", name: "Monitoring & Reporting", text: "Track rankings and conversions" },
  ],
};

// ✅ Dataset Schema for Ranking Study
const datasetSchema = {
  "@type": "Dataset",
  "@id": `${pageUrl}#dataset`,
  name: "2026 Local SEO Ranking Factors Study",
  description: "Analysis of 100+ local businesses across 15 industries revealing key ranking factors for Google Map Pack",
  creator: { "@type": "Organization", "@id": `${baseUrl}#org` },
  datePublished: "2026-01-15",
  keywords: "local SEO ranking factors, Google Map Pack signals, local search study",
  measurementTechnique: "Correlation analysis of ranking positions vs on-page/local factors",
  variableMeasured: [
    "GBP Signals", "Proximity", "Review Signals", "Citation Signals", "Local Backlinks", "Behavioral Signals"
  ],
};

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": `${pageUrl}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Services", item: `${baseUrl}/services/` },
    { "@type": "ListItem", position: 3, name: "Local SEO", item: pageUrl },
  ],
};

const faqs = [
  {
    q: "What is Local SEO and why do I need it?",
    a: "Local SEO helps your business appear in local search results when customers search for products or services 'near me'. 46% of all Google searches are local, making it essential for businesses with physical locations.",
  },
  {
    q: "How long does Local SEO take to show results?",
    a: "Local SEO typically shows initial improvements within 1-2 months, with significant results in 3-6 months. Google Business Profile optimizations can show faster results.",
  },
  {
    q: "Is local SEO worth it in 2026?",
    a: "Yes. With 46% of all Google searches being local, local SEO delivers one of the highest ROIs for businesses with physical locations or service areas.",
  },
  {
    q: "How does Google Map Pack ranking work?",
    a: "The Map Pack displays top 3 local businesses based on relevance, distance, and prominence. Factors include GBP optimization, reviews, citations, and local backlinks.",
  },
  {
    q: "How much does local SEO cost?",
    a: "Local SEO packages start at $799/month for starter plans. Professional plans with advanced features are $1,499/month. Enterprise multi-location plans start at $2,499/month.",
  },
  {
    q: "Can you help multi-location businesses?",
    a: "Yes. We specialize in multi-location local SEO, including location pages, GBP optimization for each location, and consistent citation management across all locations.",
  },
];

const faqSchema = {
  "@type": "FAQPage",
  "@id": `${pageUrl}#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

// ✅ ELITE COMBINED SCHEMA STACK
const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    localBusinessSchema,
    webSiteSchema,
    webPageSchema,
    serviceSchema,
    authorSchema,
    howToSchema,
    datasetSchema,
    breadcrumbSchema,
    faqSchema,
  ],
};

// ===============================
// ✅ METADATA
// ===============================
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: seoTitle,
  description: seoDescription,
  alternates: {
    canonical: pageUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  authors: [{ name: "Michael Stewart", url: `${baseUrl}/about/michael-stewart` }],
  creator: "Michael Stewart",
  publisher: "iCreatixPRO",
  openGraph: {
    title: "Local SEO Services to Rank Higher in Google Maps",
    description: "Rank #1 in local search with professional Local SEO. Google Business Profile, citations, review management & map pack optimization. Get free audit today!",
    url: pageUrl,
    siteName: "iCreatixPRO",
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_PK"],
    images: [
      {
        url: `${baseUrl}/local-seo-services.webp`,
        width: 1200,
        height: 630,
        alt: "Local SEO services including Google Business Profile optimization, local citations, review management and map pack optimization by iCreatixPRO",
        type: "image/webp",
      },
      {
        url: `${baseUrl}/local-seo-ranking-study-2026.webp`,
        width: 1200,
        height: 630,
        alt: "2026 Local SEO Ranking Factors Study showing GBP signals weight",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Services to Rank Higher in Google Maps",
    description: "Rank #1 in local search with professional Local SEO. Get free audit today!",
    images: [`${baseUrl}/local-seo-services.webp`],
    site: "@icreatixpro",
    creator: "@icreatixpro",
  },
};

// ===============================
// ✅ VIEWPORT
// ===============================
export const viewport: Viewport = {
  themeColor: "#1A394E",
  width: "device-width",
  initialScale: 1,
};

// ===============================
// ✅ MAIN PAGE (Server Component)
// ===============================
export default function LocalSEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <LocalSEOClient />
    </>
  );
}