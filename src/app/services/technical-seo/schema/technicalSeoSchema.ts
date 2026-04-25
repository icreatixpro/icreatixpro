// ===============================
// ✅ TECHNICAL SEO SCHEMA - CLEAN & MODULAR
// ===============================

const baseUrl = "https://icreatixpro.com";
const pageUrl = `${baseUrl}/services/technical-seo/`;

export const organizationSchema = {
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
};

export const webSiteSchema = {
  "@type": "WebSite",
  "@id": `${baseUrl}#website`,
  name: "iCreatixPRO",
  url: baseUrl,
  publisher: { "@id": `${baseUrl}#org` },
  inLanguage: "en",
};

export const webPageSchema = {
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  name: "Technical SEO Services | Core Web Vitals & Speed",
  url: pageUrl,
  description: "Fix technical SEO issues that hurt rankings. Site speed optimization, Core Web Vitals, schema markup, and crawl fixes. Get free technical SEO audit today!",
  isPartOf: { "@id": `${baseUrl}#website` },
  breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
  mainEntity: { "@id": `${pageUrl}#service` },
  primaryImageOfPage: { "@type": "ImageObject", url: `${baseUrl}/technical-seo-services.webp` },
  inLanguage: "en",
  datePublished: "2024-01-15",
  dateModified: "2026-04-01",
};

// ✅ Enhanced Service Schema with OfferCatalog
export const serviceSchema = {
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Technical SEO Services",
  provider: { "@id": `${baseUrl}#org` },
  url: pageUrl,
  description: "Fix technical SEO issues that hurt your rankings. Site speed optimization, Core Web Vitals, schema markup, and crawl fixes.",
  serviceType: "Technical SEO",
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
  offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "USD", price: "1500" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Technical SEO Services",
    itemListElement: [
      { "@type": "Offer", name: "Technical SEO Audit", price: "2500", priceCurrency: "USD" },
      { "@type": "Offer", name: "Core Web Vitals Optimization", price: "1500", priceCurrency: "USD" },
      { "@type": "Offer", name: "Schema Markup Implementation", price: "1500", priceCurrency: "USD" },
    ],
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5", ratingCount: 89 },
};

export const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": `${pageUrl}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Services", item: `${baseUrl}/services/` },
    { "@type": "ListItem", position: 3, name: "Technical SEO", item: pageUrl },
  ],
};

// ✅ Speakable Schema for Voice/AI Search
export const speakableSchema = {
  "@type": "SpeakableSpecification",
  "@id": `${pageUrl}#speakable`,
  cssSelector: ["h1", ".what-is-technical-seo"],
};

export const authorSchema = {
  "@type": "Person",
  "@id": `${baseUrl}#author`,
  name: "Michael Stewart",
  jobTitle: "Head of Technical SEO",
  worksFor: { "@type": "Organization", "@id": `${baseUrl}#org` },
  url: `${baseUrl}/about/michael-stewart`,
  knowsAbout: ["Technical SEO", "Core Web Vitals", "Schema Markup", "Site Speed Optimization", "Crawl Budget", "JavaScript SEO"],
};

export const faqSchema = {
  "@type": "FAQPage",
  "@id": `${pageUrl}#faq`,
  mainEntity: [
    { 
      "@type": "Question", 
      name: "What is technical SEO?", 
      acceptedAnswer: { 
        "@type": "Answer", 
        text: "Technical SEO optimizes your website's infrastructure so search engines can crawl, index, and render your pages efficiently. Without solid technical SEO, even great content won't rank." 
      } 
    },
    { 
      "@type": "Question", 
      name: "What are Core Web Vitals?", 
      acceptedAnswer: { 
        "@type": "Answer", 
        text: "Core Web Vitals are Google's page experience metrics measuring LCP (Largest Contentful Paint), INP (Interaction to Next Paint), and CLS (Cumulative Layout Shift). They are official ranking factors." 
      } 
    },
    { 
      "@type": "Question", 
      name: "How long does technical SEO take to show results?", 
      acceptedAnswer: { 
        "@type": "Answer", 
        text: "Technical SEO improvements can show results within 2-4 weeks. Fixing crawl errors, indexation issues, and site speed can lead to immediate ranking improvements." 
      } 
    },
    { 
      "@type": "Question", 
      name: "How much do technical SEO services cost?", 
      acceptedAnswer: { 
        "@type": "Answer", 
        text: "Technical SEO audits start at $2,500. Ongoing technical SEO management starts at $1,500/month for comprehensive monitoring and optimization." 
      } 
    },
    { 
      "@type": "Question", 
      name: "Do you implement schema markup?", 
      acceptedAnswer: { 
        "@type": "Answer", 
        text: "Yes! We implement schema markup including Organization, LocalBusiness, Product, FAQ, Article, and custom schemas to enable rich snippets and enhance search visibility." 
      } 
    },
  ],
};

export const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    webSiteSchema,
    webPageSchema,
    serviceSchema,
    breadcrumbSchema,
    speakableSchema,
    authorSchema,
    faqSchema,
  ],
};