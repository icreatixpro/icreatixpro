import type { Metadata, Viewport } from "next";
import GoogleAdsClient from "./GoogleAdsClient";

// ===============================
// ✅ CONSTANTS
// ===============================
const baseUrl = "https://icreatixpro.com";
const pageUrl = `${baseUrl}/services/google-ads/`;

// ✅ Optimized Meta Title (55 chars)
const seoTitle = "Google Ads Management Services & PPC Experts Online";

// ✅ Optimized Meta Description
const seoDescription = "Drive qualified traffic and boost ROI with expert Google Ads management, PPC optimization, keyword targeting, and conversion-focused campaigns. Free audit.";

// ===============================
// ✅ SCHEMAS
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
    url: `${baseUrl}/google-ads-services.webp`,
  },
};

const serviceSchema = {
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Google Ads Management Services",
  provider: { "@id": `${baseUrl}#org` },
  url: pageUrl,
  description: seoDescription,
  serviceType: "PPC Management",
  category: "Digital Marketing",
  inLanguage: "en",
  areaServed: [
    { "@type": "Place", name: "Worldwide" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Pakistan" },
  ],
  audience: { "@type": "Audience", audienceType: "Businesses" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Google Ads Management Plans",
    itemListElement: [
      { "@type": "Offer", name: "Starter PPC", price: "999", priceCurrency: "USD" },
      { "@type": "Offer", name: "Professional PPC", price: "1999", priceCurrency: "USD" },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: 127,
  },
};

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": `${pageUrl}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Services", item: `${baseUrl}/services/` },
    { "@type": "ListItem", position: 3, name: "Google Ads", item: pageUrl },
  ],
};

const faqs = [
  {
    q: "Is Google Ads worth it for small businesses?",
    a: "Yes, Google Ads is highly effective for small businesses. With proper targeting and budget management, you can reach high-intent customers actively searching for your products or services.",
  },
  {
    q: "How much does Google Ads management cost?",
    a: "Our Google Ads management fees start at $999/month for starter packages. Professional management with advanced optimization is $1,999/month.",
  },
  {
    q: "What is a good ROAS for Google Ads?",
    a: "A good ROAS (Return on Ad Spend) varies by industry, but typically 3:1 to 5:1 (300-500%) is considered healthy. Our clients average 400%+ ROAS.",
  },
  {
    q: "Should I choose SEO or Google Ads for my business?",
    a: "Both SEO and Google Ads have unique advantages. SEO provides sustainable long-term growth, while Google Ads delivers immediate traffic. We recommend using both.",
  },
  {
    q: "How long do Google Ads take to work?",
    a: "Google Ads campaigns can start driving traffic within hours of launch. However, meaningful optimization typically takes 30-60 days.",
  },
  {
    q: "What's included in your PPC management fee?",
    a: "Our management includes campaign setup, ongoing optimization, A/B testing, bid management, conversion tracking, monthly reporting, and strategic consultation.",
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
// ✅ METADATA (Server Component)
// ===============================
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: seoTitle,
  description: seoDescription,
  keywords: [
    "Google Ads Management", "PPC Services", "Google Ads Agency", "ROI Advertising",
    "Paid Ads Optimization", "Search Ads Management", "YouTube Ads Marketing",
    "Google Shopping Ads", "Display Advertising", "PPC Management",
    "SEO vs Google Ads", "Google Ads for Small Business",
  ],
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
  authors: [{ name: "iCreatixPRO" }],
  creator: "iCreatixPRO",
  publisher: "iCreatixPRO",
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: pageUrl,
    siteName: "iCreatixPRO",
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_PK"],
    images: [
      {
        url: `${baseUrl}/google-ads-services.webp`,
        width: 1200,
        height: 630,
        alt: "Professional Google Ads management services by iCreatixPRO including Search, Display, Shopping and YouTube campaigns",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Services & PPC Management Experts",
    description: "Drive targeted traffic and maximize ROI with professional PPC management. Get free audit today!",
    images: [`${baseUrl}/google-ads-services.webp`],
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
export default function GoogleAdsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <GoogleAdsClient />
    </>
  );
}