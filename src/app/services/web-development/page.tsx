import type { Metadata, Viewport } from "next";
import WebDevelopmentClient from "./WebDevelopmentClient";

// ===============================
// ✅ CONSTANTS
// ===============================
const baseUrl = "https://icreatixpro.com";
const pageUrl = `${baseUrl}/services/web-development/`;

// ✅ Optimized Meta Title (52 chars - Stronger CTR)
const seoTitle = "Web Development Services Custom Websites Built to Rank";

// ✅ Optimized Meta Description (155 chars)
const seoDescription = "Professional web development services for custom websites built to rank. E-commerce solutions, SEO-friendly, & Core Web Vitals optimization.";

// ===============================
// ✅ REVIEWS DATA FOR SCHEMA
// ===============================
const reviewsData = [
  { name: "John Anderson", rating: 5, reviewBody: "The team built a stunning website that perfectly represents our brand. The SEO optimization has already improved our rankings!" },
  { name: "Sarah Miller", rating: 5, reviewBody: "Our e-commerce store looks incredible and sales have doubled since launch. Highly recommended!" },
  { name: "David Thompson", rating: 5, reviewBody: "Professional, responsive, and delivered ahead of schedule. The ongoing support has been exceptional." },
];

// ===============================
// ✅ ENHANCED SCHEMA - ELITE LEVEL
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
  knowsAbout: ["Web Development", "SEO", "E-commerce", "Digital Marketing"],
  hasCredential: [{ "@type": "EducationalOccupationalCredential", credentialCategory: "Google Partner" }],
};

const webSiteSchema = {
  "@type": "WebSite",
  "@id": `${baseUrl}#website`,
  name: "iCreatixPRO",
  url: baseUrl,
  publisher: { "@id": `${baseUrl}#org` },
  inLanguage: "en",
};

// ✅ Fixed WebPage Schema with speakable inside
const webPageSchema = {
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  name: seoTitle,
  url: pageUrl,
  description: seoDescription,
  isPartOf: { "@id": `${baseUrl}#website` },
  breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
  mainEntity: { "@id": `${pageUrl}#service` },
  primaryImageOfPage: { "@type": "ImageObject", url: `${baseUrl}/web-development-services.webp` },
  inLanguage: "en",
  datePublished: "2024-01-15",
  dateModified: "2026-04-01",
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".what-is-web-development"] },
};

const localBusinessSchema = {
  "@type": "ProfessionalService",
  "@id": `${baseUrl}#localbusiness`,
  parentOrganization: { "@id": `${baseUrl}#org` },
  name: "iCreatixPRO Web Development",
  url: pageUrl,
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Pakistan" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "Australia" },
  ],
};

// ✅ Fixed Service Schema with correct category
const serviceSchema = {
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Web Development Services",
  provider: { "@id": `${baseUrl}#org` },
  url: pageUrl,
  description: seoDescription,
  serviceType: "Web Development",
  category: "Web Development",
  providerMobility: "dynamic",
  inLanguage: "en",
  hasCredential: [{ "@type": "EducationalOccupationalCredential", credentialCategory: "Google Partner" }],
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Pakistan" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "Australia" },
  ],
  audience: { "@type": "Audience", audienceType: "Businesses" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
      { "@type": "Offer", name: "Custom Website Development", priceSpecification: { "@type": "PriceSpecification", priceCurrency: "USD", price: "2500", priceValidUntil: "2027-12-31" } },
      { "@type": "Offer", name: "E-commerce Development", priceSpecification: { "@type": "PriceSpecification", priceCurrency: "USD", price: "3500", priceValidUntil: "2027-12-31" } },
      { "@type": "Offer", name: "SEO-Friendly Development", priceSpecification: { "@type": "PriceSpecification", priceCurrency: "USD", price: "3000", priceValidUntil: "2027-12-31" } },
    ],
  },
  // ✅ ItemList for Services - Entity SEO Boost
  hasPart: {
    "@type": "ItemList",
    name: "Web Development Services",
    numberOfItems: 6,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Custom Website Design", url: `${pageUrl}#custom-design` },
      { "@type": "ListItem", position: 2, name: "E-commerce Development", url: `${pageUrl}#ecommerce` },
      { "@type": "ListItem", position: 3, name: "SEO-Friendly Development", url: `${pageUrl}#seo-friendly` },
      { "@type": "ListItem", position: 4, name: "Responsive Web Design", url: `${pageUrl}#responsive` },
      { "@type": "ListItem", position: 5, name: "CMS Development", url: `${pageUrl}#cms` },
      { "@type": "ListItem", position: 6, name: "Website Maintenance", url: `${pageUrl}#maintenance` },
    ],
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5", ratingCount: 67 },
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
    { "@type": "ListItem", position: 3, name: "Web Development", item: pageUrl },
  ],
};

const authorSchema = {
  "@type": "Person",
  "@id": `${baseUrl}#author`,
  name: "Michael Stewart",
  jobTitle: "Head of Web Development",
  worksFor: { "@type": "Organization", "@id": `${baseUrl}#org` },
  url: `${baseUrl}/about/michael-stewart`,
  sameAs: ["https://linkedin.com/in/michael-stewart", "https://github.com/michaelstewart"],
  knowsAbout: ["Web Development", "Custom Website Design", "E-commerce Development", "SEO-Friendly Development", "React", "Next.js"],
  alumniOf: "University of Texas",
};

// ✅ EXPANDED FAQ (12 questions)
const faqMainEntity = [
  { "@type": "Question", name: "What web development services do you offer?", acceptedAnswer: { "@type": "Answer", text: "We offer custom website development, e-commerce development, SEO-friendly development, responsive design, CMS integration, and website maintenance." } },
  { "@type": "Question", name: "How long does web development take?", acceptedAnswer: { "@type": "Answer", text: "Typical website development takes 4-8 weeks depending on complexity, features, and content requirements. Enterprise projects may take 12-16 weeks." } },
  { "@type": "Question", name: "How much does web development cost?", acceptedAnswer: { "@type": "Answer", text: "Custom website development starts at $2,500. E-commerce websites start at $3,500. Enterprise solutions are custom-priced based on requirements." } },
  { "@type": "Question", name: "Do you build SEO-friendly websites?", acceptedAnswer: { "@type": "Answer", text: "Yes! All websites we build are optimized for SEO including proper HTML structure, meta tags, schema markup, site speed optimization, and mobile responsiveness." } },
  { "@type": "Question", name: "What platforms do you develop on?", acceptedAnswer: { "@type": "Answer", text: "We develop on multiple platforms including React, Next.js, WordPress, Shopify, WooCommerce, and custom solutions tailored to your needs." } },
  { "@type": "Question", name: "Do you provide ongoing maintenance?", acceptedAnswer: { "@type": "Answer", text: "Yes! We offer ongoing maintenance packages including security updates, performance monitoring, content updates, and technical support." } },
  { "@type": "Question", name: "What is Next.js development?", acceptedAnswer: { "@type": "Answer", text: "Next.js is a React framework for building fast, SEO-friendly websites with server-side rendering and static site generation. We specialize in Next.js development." } },
  { "@type": "Question", name: "What are Core Web Vitals?", acceptedAnswer: { "@type": "Answer", text: "Core Web Vitals are Google's page experience metrics measuring LCP, INP, and CLS. We optimize all websites to meet Google's Core Web Vitals thresholds." } },
  { "@type": "Question", name: "Do you offer WordPress development?", acceptedAnswer: { "@type": "Answer", text: "Yes! We specialize in custom WordPress development, theme customization, plugin development, and WooCommerce integration for powerful content management." } },
  { "@type": "Question", name: "What makes your web development SEO-friendly?", acceptedAnswer: { "@type": "Answer", text: "Our SEO-friendly development includes clean code structure, schema markup implementation, meta tag optimization, mobile-first design, fast loading speeds, and Core Web Vitals optimization." } },
  { "@type": "Question", name: "Do you develop custom web applications?", acceptedAnswer: { "@type": "Answer", text: "Yes! We build custom web applications using React, Next.js, Node.js, and other modern technologies tailored to your specific business requirements." } },
  { "@type": "Question", name: "What is your web development process?", acceptedAnswer: { "@type": "Answer", text: "Our process includes discovery, design, development, testing, launch, and ongoing support. We work closely with you at every stage to ensure your vision is realized." } },
];

const faqSchema = {
  "@type": "FAQPage",
  "@id": `${pageUrl}#faq`,
  mainEntity: faqMainEntity,
};

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, webSiteSchema, webPageSchema, localBusinessSchema, serviceSchema, breadcrumbSchema, authorSchema, faqSchema],
};

// ===============================
// ✅ METADATA (Expanded keywords)
// ===============================
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: seoTitle,
  description: seoDescription,
  keywords: [
    "web development services",
    "custom website design",
    "e-commerce development",
    "SEO-friendly development",
    "responsive web design",
    "CMS development",
    "website development agency",
    "Next.js development services",
    "WordPress development agency",
    "business website development",
    "custom web applications",
  ],
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
  authors: [{ name: "Michael Stewart", url: `${baseUrl}/about/michael-stewart` }],
  creator: "Michael Stewart",
  publisher: "iCreatixPRO",
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: pageUrl,
    siteName: "iCreatixPRO",
    type: "website",
    locale: "en_US",
    images: [{ url: `${baseUrl}/web-development-services.webp`, width: 1200, height: 630, alt: "Web development services including custom website design, e-commerce development and SEO-friendly development by iCreatixPRO", type: "image/webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: [`${baseUrl}/web-development-services.webp`],
    site: "@icreatixpro",
  },
};

export const viewport: Viewport = { themeColor: "#1A394E", width: "device-width", initialScale: 1 };

// ===============================
// ✅ MAIN PAGE
// ===============================
export default function WebDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }} />
      <WebDevelopmentClient />
    </>
  );
}