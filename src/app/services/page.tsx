import type { Metadata, Viewport } from "next";
import ServicesClient from "./ServicesClient";

// ===============================
// ✅ CONSTANTS
// ===============================
const baseUrl = "https://icreatixpro.com";
const pageUrl  = `${baseUrl}/services`;

// ✅ Tighter, keyword-rich title & description
const seoTitle = "AI SEO & GEO Agency B2B SaaS Growth Marketing Experts";
const seoDescription =
  "AI SEO, GEO & SaaS SEO agency helping B2B brands grow organic traffic, rankings, leads & AI visibility across global markets.";

// ===============================
// ✅ SERVICE OBJECTS
// ===============================
const serviceObjects = [
  { name: "SEO Services",        serviceType: "Search Engine Optimization",    url: `${baseUrl}/services/search-engine-optimization`, price: "499"  },
  { name: "Local SEO",           serviceType: "Local SEO",                      url: `${baseUrl}/services/local-seo`,                  price: "299"  },
  { name: "Google Ads",          serviceType: "PPC Management",                 url: `${baseUrl}/services/google-ads`,                 price: "599"  },
  { name: "Meta Ads",            serviceType: "Social Media Advertising",       url: `${baseUrl}/services/meta-ads`,                   price: "499"  },
  { name: "Digital Marketing",   serviceType: "Digital Marketing",              url: `${baseUrl}/services/digital-marketing`,          price: "0"    },
  { name: "Content Marketing",   serviceType: "Content Marketing",              url: `${baseUrl}/services/content-marketing`,          price: "399"  },
  { name: "E-commerce SEO",      serviceType: "E-commerce SEO",                 url: `${baseUrl}/services/ecommerce-seo`,              price: "599"  },
  { name: "Email Marketing",     serviceType: "Email Marketing",                url: `${baseUrl}/services/email-marketing`,            price: "349"  },
  { name: "Technical SEO",       serviceType: "Technical SEO",                  url: `${baseUrl}/services/technical-seo`,              price: "799"  },
  { name: "Web Development",     serviceType: "Web Development",                url: `${baseUrl}/services/web-development`,            price: "2500" },
  { name: "Analytics",           serviceType: "Analytics",                      url: `${baseUrl}/services/analytics`,                  price: "299"  },
  { name: "AI SEO Services",     serviceType: "AI SEO & GEO",                   url: `${baseUrl}/services/ai-seo-services`,            price: "799"  },
  { name: "GEO Optimization",    serviceType: "Generative Engine Optimization", url: `${baseUrl}/services/geo-optimization-services`,  price: "799"  },
  { name: "SaaS Technical SEO",  serviceType: "SaaS Technical SEO",             url: `${baseUrl}/services/saas-technical-seo`,         price: "999"  },
  { name: "SEO Services London", serviceType: "London SEO Agency",              url: `${baseUrl}/services/seo-services-london`,        price: "599"  },
];

// ===============================
// ✅ SCHEMA NODES
// ===============================

/**
 * Organization
 * ✅ Improvement 5: foundingDate added for entity consistency
 *    (matches "since 2015" claim in metadata description)
 * ✅ No aggregateRating — self-serving org ratings suppressed by Google
 */
const organizationSchema = {
  "@type": "Organization",
  "@id": `${baseUrl}#org`,
  name: "iCreatixPRO",
  url: baseUrl,
  foundingDate: "2015", // ✅ Improvement 5 — entity consistency with "since 2015"
  logo: { "@type": "ImageObject", url: `${baseUrl}/logo.webp` },
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
  knowsAbout: [
    "AI SEO",
    "GEO",
    "SaaS Technical SEO",
    "B2B SEO",
    "Search Engine Optimization",
    "PPC",
    "Digital Marketing",
    "Content Marketing",
    "Local SEO",
  ],
  hasOfferCatalog: { "@id": `${pageUrl}#offers` },
};

/**
 * WebSite
 * ⚠️  potentialAction / SearchAction REMOVED.
 *     Reason: Only add if a real /search?q= endpoint exists on the site.
 *     A fake SearchAction is ignored by Google and wastes graph weight.
 */
const webSiteSchema = {
  "@type": "WebSite",
  "@id": `${baseUrl}#website`,
  name: "iCreatixPRO",
  url: baseUrl,
  publisher: { "@id": `${baseUrl}#org` },
  inLanguage: "en",
};

/**
 * WebPage
 * ✅ mainEntity → @id reference to ItemList (semantic entity link)
 */
const webPageSchema = {
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  name: seoTitle,
  url: pageUrl,
  description: seoDescription,
  isPartOf: { "@id": `${baseUrl}#website` },
  breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${baseUrl}/og-services.webp`,
  },
  inLanguage: "en",
  datePublished: "2024-01-15",
  dateModified: "2026-05-14",
  mainEntity: { "@id": `${pageUrl}#services-list` }, // ✅ semantic @id link
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", ".faq-section"],
  },
};

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

/**
 * Service entities — all 5 improvements applied here:
 *
 * ✅ Improvement 1: itemReviewed inside AggregateRating
 *    → explicit graph clarity, stronger entity association
 *
 * ✅ Improvement 4: brand field added
 *    → entity association for AI Overviews, GEO systems, LLM extraction
 *
 * ⚠️  COMPLIANCE REMINDER:
 *    ratingValue: 4.9 and reviewCount: 127 MUST be visible in the UI.
 *    Example text to show on page: "Rated 4.9/5 based on 127 client reviews"
 *    Schema-only ratings with no frontend display are suppressed by Google.
 */
const servicesGraph = serviceObjects.map((service) => ({
  "@type": "Service",
  "@id": `${service.url}#service`,
  name: service.name,
  serviceType: service.serviceType,
  provider: { "@id": `${baseUrl}#org` },
  areaServed: "Worldwide",
  url: service.url,

  // ✅ Improvement 4: brand for entity association & GEO/AI signals
  brand: {
    "@type": "Brand",
    name: "iCreatixPRO",
  },

  // ✅ Improvement 1: itemReviewed added for explicit graph clarity
  aggregateRating: {
    "@type": "AggregateRating",
    itemReviewed: {
      "@id": `${service.url}#service`,
    },
    ratingValue: 4.9,
    bestRating: 5,
    worstRating: 1,
    ratingCount: 127,
    reviewCount: 127,
  },

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
    { "@type": "ListItem", position: 1, name: "Home",     item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Services", item: pageUrl },
  ],
};

const authorSchema = {
  "@type": "Person",
  "@id": `${baseUrl}#author`,
  name: "Michael Stewart",
  jobTitle: "Head of Digital Marketing",
  worksFor: { "@type": "Organization", "@id": `${baseUrl}#org` },
  knowsAbout: [
    "AI SEO",
    "GEO",
    "SaaS Technical SEO",
    "B2B SEO",
    "PPC",
    "Digital Marketing",
    "Content Marketing",
    "Social Media Marketing",
  ],
};

const faqSchema = {
  "@type": "FAQPage",
  "@id": `${pageUrl}#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What digital marketing services do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer comprehensive digital marketing services including AI SEO, GEO optimization, SaaS technical SEO, B2B SEO, PPC management, social media marketing, content marketing, email marketing, and local SEO for businesses worldwide.",
      },
    },
    {
      "@type": "Question",
      name: "How much do your SEO services cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO starts at $499/month, PPC at $599/month, content marketing at $399/month, AI SEO at $799/month, SaaS SEO at $999/month. Contact us for custom enterprise pricing and bundle packages.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see SEO results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional SEO typically shows results in 3-6 months. AI SEO and GEO optimization show initial citations in 2-4 months. PPC campaigns deliver immediate traffic. Our average client sees 300%+ organic growth within 12 months.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer custom SEO packages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We create custom SEO and digital marketing packages tailored to your specific business goals, budget, industry requirements, and growth targets. Contact us for a personalised strategy consultation.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you specialise in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialise in B2B tech, SaaS startups, e-commerce, healthcare, real estate, professional services, legal, hospitality, retail, and enterprise technology companies across USA, UK, UAE, Europe, and Australia.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide monthly SEO reports?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you'll receive detailed monthly SEO reports showing keyword rankings, organic traffic growth, AI citations, conversions, ROI metrics, and competitive analysis with transparent performance tracking.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with local SEO and Google Business Profile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We specialise in local SEO including Google Business Profile optimisation, local citations, review management, map pack rankings, and multi-location SEO strategies for franchises and local businesses.",
      },
    },
    {
      "@type": "Question",
      name: "What makes your AI SEO different from traditional SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our AI SEO combines traditional search engine optimisation with Generative Engine Optimisation (GEO) to rank your brand on Google AND AI platforms like ChatGPT, Perplexity, and Gemini using entity SEO, structured data, and prompt-based optimisation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with e-commerce and SaaS businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we specialise in e-commerce SEO including product page optimisation, category architecture, faceted navigation, and SaaS technical SEO including crawl budget optimisation, JavaScript SEO, international expansion, and product-led growth strategies.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with iCreatixPRO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact us for a free SEO consultation and audit. We'll analyse your current performance, discuss your growth goals, and create a custom AI-powered digital marketing strategy tailored to your business objectives.",
      },
    },
  ],
};

// ===============================
// ✅ COMBINED SCHEMA GRAPH
// ===============================
const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,   // foundingDate added, no self-review
    webSiteSchema,        // clean — no fake SearchAction
    webPageSchema,        // mainEntity → @id semantic link
    itemListSchema,
    offerCatalogSchema,
    ...servicesGraph,     // brand + itemReviewed + aggregateRating per service
    breadcrumbSchema,
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
  keywords:
    "AI SEO agency,AI SEO services,AEO optimization services,Answer Engine Optimization agency,Generative Engine Optimization services,GEO SEO services,digital marketing agency,SEO agency for Google ranking,AI search optimization,local SEO and AI SEO services,organic traffic growth services,lead generation SEO agency,SaaS SEO,B2B SEO agency",
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
  authors:   [{ name: "Michael Stewart" }],
  creator:   "Michael Stewart",
  publisher: "iCreatixPRO",
  openGraph: {
    title:       seoTitle,
    description: seoDescription,
    url:         pageUrl,
    siteName:    "iCreatixPRO",
    type:        "website",
    locale:      "en_US",
    images: [
      {
        url:    `${baseUrl}/og-services.webp`,
        width:  1200,
        height: 630,
        alt:    "AI SEO, GEO & B2B SaaS digital marketing services by iCreatixPRO",
        type:   "image/webp",
      },
    ],
  },
  twitter: {
    card:        "summary_large_image",
    title:       seoTitle,
    description: seoDescription,
    images:      [`${baseUrl}/og-services.webp`],
    site:        "@icreatixpro",
  },
};

export const viewport: Viewport = {
  themeColor:   "#1A394E",
  width:        "device-width",
  initialScale: 1,
};

// ===============================
// ✅ PAGE COMPONENT
// ===============================
export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <ServicesClient />
    </>
  );
}