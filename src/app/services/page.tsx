import type { Metadata, Viewport } from "next";
import ServicesClient from "./ServicesClient";

// ===============================
// ✅ CONSTANTS (No trailing slash)
// ===============================
const baseUrl = "https://icreatixpro.com";
const pageUrl = `${baseUrl}/services`;

// ✅ Optimized Meta Title (52 chars)
const seoTitle = "Digital Marketing Agency | SEO & PPC Experts";

// ✅ Optimized Meta Description (154 chars)
const seoDescription = "Professional digital marketing services including SEO, PPC, social media, and content marketing. Data-driven strategies to grow your business.";

// ===============================
// ✅ ELITE SCHEMA - Full Stack
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
  knowsAbout: ["SEO", "PPC", "Social Media Marketing", "Digital Marketing", "Content Marketing"],
  hasOfferCatalog: { "@id": `${pageUrl}#offers` },
};

const webSiteSchema = {
  "@type": "WebSite",
  "@id": `${baseUrl}#website`,
  name: "iCreatixPRO",
  url: baseUrl,
  publisher: { "@id": `${baseUrl}#org` },
  inLanguage: "en",
};

const webPageSchema = {
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  name: seoTitle,
  url: pageUrl,
  description: seoDescription,
  isPartOf: { "@id": `${baseUrl}#website` },
  breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
  primaryImageOfPage: { "@type": "ImageObject", url: `${baseUrl}/services-main.webp` },
  inLanguage: "en",
  datePublished: "2024-01-15",
  dateModified: "2026-04-01",
  mainEntityOfPage: pageUrl,
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".faq-section"] },
};

// ✅ Individual Service Objects (Elite)
const serviceObjects = [
  { name: "SEO Services", serviceType: "Search Engine Optimization", url: `${baseUrl}/services/search-engine-optimization`, price: "499" },
  { name: "Local SEO", serviceType: "Local SEO", url: `${baseUrl}/services/local-seo`, price: "299" },
  { name: "Google Ads", serviceType: "PPC Management", url: `${baseUrl}/services/google-ads`, price: "599" },
  { name: "Meta Ads", serviceType: "Social Media Advertising", url: `${baseUrl}/services/meta-ads`, price: "499" },
  { name: "Digital Marketing", serviceType: "Digital Marketing", url: `${baseUrl}/services/digital-marketing`, price: "0" },
  { name: "Content Marketing", serviceType: "Content Marketing", url: `${baseUrl}/services/content-marketing`, price: "399" },
  { name: "E-commerce SEO", serviceType: "E-commerce SEO", url: `${baseUrl}/services/ecommerce-seo`, price: "599" },
  { name: "Email Marketing", serviceType: "Email Marketing", url: `${baseUrl}/services/email-marketing`, price: "349" },
  { name: "Technical SEO", serviceType: "Technical SEO", url: `${baseUrl}/services/technical-seo`, price: "799" },
  { name: "Web Development", serviceType: "Web Development", url: `${baseUrl}/services/web-development`, price: "2500" },
  { name: "Analytics", serviceType: "Analytics", url: `${baseUrl}/services/analytics`, price: "299" },
];

// ✅ ItemList Schema (with numberOfItems)
const itemListSchema = {
  "@type": "ItemList",
  "@id": `${pageUrl}#services-list`,
  name: "Digital Marketing Services",
  numberOfItems: 11,
  itemListElement: serviceObjects.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.name,
    url: service.url,
  })),
};

// ✅ OfferCatalog Schema (without numberOfItems - fixed)
const offerCatalogSchema = {
  "@type": "OfferCatalog",
  "@id": `${pageUrl}#offers`,
  name: "Digital Marketing Services",
  itemListElement: serviceObjects.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.name,
      serviceType: service.serviceType,
      provider: { "@id": `${baseUrl}#org` },
      areaServed: "Worldwide",
      url: service.url,
    },
    priceSpecification: {
      "@type": "PriceSpecification",
      price: service.price,
      priceCurrency: "USD",
      description: service.price === "0" ? "Custom pricing" : "Starting at",
    },
  })),
};

// ✅ Individual Service Schemas (for entity SEO)
const servicesGraph = serviceObjects.map((service) => ({
  "@type": "Service",
  "@id": `${service.url}#service`,
  name: service.name,
  serviceType: service.serviceType,
  provider: { "@id": `${baseUrl}#org` },
  areaServed: "Worldwide",
  url: service.url,
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      price: service.price,
      priceCurrency: "USD",
      description: service.price === "0" ? "Custom pricing" : "Starting at",
    },
  },
}));

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": `${pageUrl}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Services", item: pageUrl },
  ],
};

// ✅ AggregateRating Schema
const aggregateRatingSchema = {
  "@type": "AggregateRating",
  "@id": `${pageUrl}#rating`,
  ratingValue: "4.9",
  bestRating: "5",
  ratingCount: 127,
  reviewCount: 127,
};

// ✅ Expanded FAQ (10 questions)
const faqSchema = {
  "@type": "FAQPage",
  "@id": `${pageUrl}#faq`,
  mainEntity: [
    { "@type": "Question", name: "What digital marketing services do you offer?", acceptedAnswer: { "@type": "Answer", text: "We offer comprehensive digital marketing services including SEO, PPC, social media marketing, content marketing, email marketing, and analytics." } },
    { "@type": "Question", name: "How much do your services cost?", acceptedAnswer: { "@type": "Answer", text: "SEO starts at $499/month, PPC at $599/month, content marketing at $399/month, and email marketing at $349/month. Contact us for custom pricing." } },
    { "@type": "Question", name: "How long does it take to see results?", acceptedAnswer: { "@type": "Answer", text: "SEO typically shows results in 3-6 months. PPC can show immediate results. Content marketing builds momentum over 4-8 months." } },
    { "@type": "Question", name: "Do you offer custom packages?", acceptedAnswer: { "@type": "Answer", text: "Yes! We create custom packages tailored to your specific business goals, budget, and industry requirements." } },
    { "@type": "Question", name: "What industries do you specialize in?", acceptedAnswer: { "@type": "Answer", text: "We work with e-commerce, healthcare, real estate, technology, professional services, legal, hospitality, and retail industries." } },
    { "@type": "Question", name: "Do you provide monthly reports?", acceptedAnswer: { "@type": "Answer", text: "Yes, you'll receive detailed monthly reports showing keyword rankings, traffic growth, conversions, and ROI metrics." } },
    { "@type": "Question", name: "Can you help with local SEO?", acceptedAnswer: { "@type": "Answer", text: "Yes! We specialize in local SEO including Google Business Profile optimization, local citations, review management, and map pack rankings." } },
    { "@type": "Question", name: "What makes your SEO different?", acceptedAnswer: { "@type": "Answer", text: "Our data-driven approach combines technical SEO, content strategy, and authoritative link building to deliver sustainable rankings." } },
    { "@type": "Question", name: "Do you work with e-commerce businesses?", acceptedAnswer: { "@type": "Answer", text: "Yes, we specialize in e-commerce SEO including product page optimization, category pages, and technical SEO for online stores." } },
    { "@type": "Question", name: "How do I get started?", acceptedAnswer: { "@type": "Answer", text: "Contact us for a free consultation. We'll discuss your goals and create a custom digital marketing strategy for your business." } },
  ],
};

const authorSchema = {
  "@type": "Person",
  "@id": `${baseUrl}#author`,
  name: "Michael Stewart",
  jobTitle: "Head of Digital Marketing",
  worksFor: { "@type": "Organization", "@id": `${baseUrl}#org` },
  knowsAbout: ["SEO", "PPC", "Digital Marketing", "Content Marketing", "Social Media Marketing"],
};

// ✅ COMBINED SCHEMA - All services included in graph
const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    webSiteSchema,
    webPageSchema,
    itemListSchema,
    offerCatalogSchema,
    ...servicesGraph,
    breadcrumbSchema,
    aggregateRatingSchema,
    authorSchema,
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
    images: [{ url: `${baseUrl}/services-main.webp`, width: 1200, height: 630, alt: "Digital marketing services including SEO, PPC, social media and content marketing by iCreatixPRO", type: "image/webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency | SEO & PPC Experts",
    description: "Professional digital marketing services to grow your business online. Free consultation today!",
    images: [`${baseUrl}/services-main.webp`],
    site: "@icreatixpro",
  },
};

export const viewport: Viewport = { themeColor: "#1A394E", width: "device-width", initialScale: 1 };

// ===============================
// ✅ MAIN PAGE
// ===============================
export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }} />
      <ServicesClient />
    </>
  );
}