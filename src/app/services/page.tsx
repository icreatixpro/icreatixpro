import type { Metadata, Viewport } from "next";
import ServicesClient from "./ServicesClient";

// ===============================
// ✅ CONSTANTS (No trailing slash)
// ===============================
const baseUrl = "https://icreatixpro.com";
const pageUrl = `${baseUrl}/services`;

// ✅ ELITE SEO Title & Description (World-Class Keywords)
const seoTitle = "AI SEO & GEO Agency | B2B SaaS Growth Marketing Experts"; // 56 chars
const seoDescription = "Leading AI SEO, GEO & SaaS Technical SEO agency driving 300%+ organic growth for B2B tech companies in USA, UK, UAE, Europe & Australia. Expert search engine optimization since 2015."; // 191 chars

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
  knowsAbout: ["AI SEO", "GEO", "SaaS Technical SEO", "B2B SEO", "Search Engine Optimization", "PPC", "Digital Marketing", "Content Marketing", "Local SEO"],
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
  primaryImageOfPage: { "@type": "ImageObject", url: `${baseUrl}/og-services.webp` },
  inLanguage: "en",
  datePublished: "2024-01-15",
  dateModified: "2026-05-14",
  mainEntityOfPage: pageUrl,
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".faq-section"] },
};

// ✅ Individual Service Objects (including new SEO Services London)
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
  // HIGH-VALUE SERVICES
  { name: "AI SEO Services", serviceType: "AI SEO & GEO", url: `${baseUrl}/services/ai-seo-services`, price: "799" },
  { name: "GEO Optimization", serviceType: "Generative Engine Optimization", url: `${baseUrl}/services/geo-optimization-services`, price: "799" },
  { name: "SaaS Technical SEO", serviceType: "SaaS Technical SEO", url: `${baseUrl}/services/saas-technical-seo`, price: "999" },
  { name: "SEO Services London", serviceType: "London SEO Agency", url: `${baseUrl}/services/seo-services-london`, price: "599" },
];

// ✅ ItemList Schema (with numberOfItems)
const itemListSchema = {
  "@type": "ItemList",
  "@id": `${pageUrl}#services-list`,
  name: "AI SEO, GEO & B2B Digital Marketing Services",
  numberOfItems: serviceObjects.length,
  itemListElement: serviceObjects.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.name,
    url: service.url,
  })),
};

// ✅ OfferCatalog Schema
const offerCatalogSchema = {
  "@type": "OfferCatalog",
  "@id": `${pageUrl}#offers`,
  name: "AI SEO, GEO & B2B Digital Marketing Services",
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

const aggregateRatingSchema = {
  "@type": "AggregateRating",
  "@id": `${pageUrl}#rating`,
  ratingValue: "4.9",
  bestRating: "5",
  ratingCount: 127,
  reviewCount: 127,
  itemReviewed: { "@id": `${baseUrl}#org` },
};

// ✅ Expanded FAQ (10 questions)
const faqSchema = {
  "@type": "FAQPage",
  "@id": `${pageUrl}#faq`,
  mainEntity: [
    { "@type": "Question", name: "What digital marketing services do you offer?", acceptedAnswer: { "@type": "Answer", text: "We offer comprehensive digital marketing services including AI SEO, GEO optimization, SaaS technical SEO, B2B SEO, PPC management, social media marketing, content marketing, email marketing, and local SEO for businesses worldwide." } },
    { "@type": "Question", name: "How much do your SEO services cost?", acceptedAnswer: { "@type": "Answer", text: "SEO starts at $499/month, PPC at $599/month, content marketing at $399/month, AI SEO at $799/month, SaaS SEO at $999/month. Contact us for custom enterprise pricing and bundle packages." } },
    { "@type": "Question", name: "How long does it take to see SEO results?", acceptedAnswer: { "@type": "Answer", text: "Traditional SEO typically shows results in 3-6 months. AI SEO and GEO optimization show initial citations in 2-4 months. PPC campaigns deliver immediate traffic. Our average client sees 300%+ organic growth within 12 months." } },
    { "@type": "Question", name: "Do you offer custom SEO packages?", acceptedAnswer: { "@type": "Answer", text: "Yes! We create custom SEO and digital marketing packages tailored to your specific business goals, budget, industry requirements, and growth targets. Contact us for a personalized strategy consultation." } },
    { "@type": "Question", name: "What industries do you specialize in?", acceptedAnswer: { "@type": "Answer", text: "We specialize in B2B tech, SaaS startups, e-commerce, healthcare, real estate, professional services, legal, hospitality, retail, and enterprise technology companies across USA, UK, UAE, Europe, and Australia." } },
    { "@type": "Question", name: "Do you provide monthly SEO reports?", acceptedAnswer: { "@type": "Answer", text: "Yes, you'll receive detailed monthly SEO reports showing keyword rankings, organic traffic growth, AI citations, conversions, ROI metrics, and competitive analysis with transparent performance tracking." } },
    { "@type": "Question", name: "Can you help with local SEO and Google Business Profile?", acceptedAnswer: { "@type": "Answer", text: "Yes! We specialize in local SEO including Google Business Profile optimization, local citations, review management, map pack rankings, and multi-location SEO strategies for franchises and local businesses." } },
    { "@type": "Question", name: "What makes your AI SEO different from traditional SEO?", acceptedAnswer: { "@type": "Answer", text: "Our AI SEO combines traditional search engine optimization with Generative Engine Optimization (GEO) to rank your brand on Google AND AI platforms like ChatGPT, Perplexity, and Gemini using entity SEO, structured data, and prompt-based optimization." } },
    { "@type": "Question", name: "Do you work with e-commerce and SaaS businesses?", acceptedAnswer: { "@type": "Answer", text: "Yes, we specialize in e-commerce SEO including product page optimization, category architecture, faceted navigation, and SaaS technical SEO including crawl budget optimization, JavaScript SEO, international expansion, and product-led growth strategies." } },
    { "@type": "Question", name: "How do I get started with iCreatixPRO?", acceptedAnswer: { "@type": "Answer", text: "Contact us for a free SEO consultation and audit. We'll analyze your current performance, discuss your growth goals, and create a custom AI-powered digital marketing strategy tailored to your business objectives." } },
  ],
};

const authorSchema = {
  "@type": "Person",
  "@id": `${baseUrl}#author`,
  name: "Michael Stewart",
  jobTitle: "Head of Digital Marketing",
  worksFor: { "@type": "Organization", "@id": `${baseUrl}#org` },
  knowsAbout: ["AI SEO", "GEO", "SaaS Technical SEO", "B2B SEO", "PPC", "Digital Marketing", "Content Marketing", "Social Media Marketing"],
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
    images: [{ url: `${baseUrl}/og-services.webp`, width: 1200, height: 630, alt: "AI SEO, GEO & B2B SaaS digital marketing services by iCreatixPRO", type: "image/webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: [`${baseUrl}/og-services.webp`],
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