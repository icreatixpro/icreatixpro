// app/services/seo-services-london/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import HeroSection from "./HeroSection";
import TrustBar from "./TrustBar";
import ServicesSection from "./ServicesSection";
import HowItWorks from "./HowItWorks";
import CaseStudies from "./CaseStudies";
import Testimonials from "./Testimonials";
import FAQSection from "./FAQSection";
import FinalCTA from "./FinalCTA";

// ─── 1. NEXT.JS METADATA (title, description, canonical, OG, Twitter) ───────
export const metadata: Metadata = {
  title: "SEO Agency London | B2B SEO Services iCreatixPRO",
  description:
    "Top-rated SEO agency in London. Specialist in B2B & technology companies. 320% avg organic growth. Free SEO audit. Book your consultation today",
  keywords: [
    "seo agency london",
    "all seo agency in london",
    "b2b seo agency london",
    "seo services london",
    "technology seo london",
    "london seo specialist",
    "best seo agency london",
    "seo consultant london",
    "local seo london",
    "technical seo london",
  ],
  authors: [{ name: "iCreatixPRO", url: "https://icreatixpro.com" }],
  alternates: {
    canonical: "https://icreatixpro.com/services/seo-services-london",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title: "SEO Agency London | B2B Technology SEO Services | iCreatixPRO",
    description:
      "Top-rated SEO agency in London for B2B & tech companies. 320% avg organic growth. Free SEO audit.",
    url: "https://icreatixpro.com/services/seo-services-london",
    siteName: "iCreatixPRO",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://icreatixpro.com/og/seo-services-london.jpg",
        width: 1200,
        height: 630,
        alt: "iCreatixPRO – SEO Agency London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Agency London | iCreatixPRO",
    description:
      "B2B & technology SEO specialists in London. 320% avg organic growth. Free audit.",
    images: ["https://icreatixpro.com/og/seo-services-london.jpg"],
  },
};

// ─── 2. SCHEMA DEFINITIONS ────────────────────────────────────────────────────

/** BreadcrumbList – helps Google show sitelinks in SERP */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://icreatixpro.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://icreatixpro.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "SEO Services London",
      item: "https://icreatixpro.com/services/seo-services-london",
    },
  ],
};

/** LocalBusiness – critical for London local pack ranking */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://icreatixpro.com/#organization",
  name: "iCreatixPRO",
  url: "https://icreatixpro.com",
  logo: "https://icreatixpro.com/logo.png",
  image: "https://icreatixpro.com/og/seo-services-london.jpg",
  description:
    "iCreatixPRO is a top-rated SEO agency in London specialising in B2B and technology companies. We deliver measurable organic growth through technical SEO, content strategy, and local search.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 Canada Square",
    addressLocality: "London",
    addressRegion: "England",
    postalCode: "E14 5AB",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5049,
    longitude: -0.0195,
  },
  telephone: "+44-20-0000-0000",
  priceRange: "££££",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "London" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.linkedin.com/company/icreatixpro",
    "https://twitter.com/icreatixpro",
  ],
};

/** Service schema – topical authority signal */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://icreatixpro.com/services/seo-services-london#service",
  name: "SEO Services London",
  serviceType: "Search Engine Optimisation",
  provider: {
    "@type": "Organization",
    name: "iCreatixPRO",
    url: "https://icreatixpro.com",
  },
  areaServed: {
    "@type": "City",
    name: "London",
    sameAs: "https://en.wikipedia.org/wiki/London",
  },
  description:
    "Comprehensive SEO services for London B2B and technology businesses including technical SEO, local SEO, B2B keyword research, UK link building, and conversion-focused content strategy.",
  offers: {
    "@type": "Offer",
    priceCurrency: "GBP",
    price: "2500",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "2500",
      priceCurrency: "GBP",
      unitText: "MONTH",
    },
    availability: "https://schema.org/InStock",
    url: "https://icreatixpro.com/services/seo-services-london",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "London SEO Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Technical SEO London" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "London Local SEO" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "B2B Keyword Research" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "UK Link Building" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Content Strategy" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Competitor Analysis" } },
    ],
  },
};

/** WebPage schema – page-level entity */
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://icreatixpro.com/services/seo-services-london#webpage",
  url: "https://icreatixpro.com/services/seo-services-london",
  name: "SEO Agency London | B2B Technology SEO Services | iCreatixPRO",
  description:
    "Top-rated SEO agency in London specialising in B2B & technology companies. 320% avg organic growth.",
  isPartOf: { "@id": "https://icreatixpro.com/#website" },
  about: { "@id": "https://icreatixpro.com/services/seo-services-london#service" },
  breadcrumb: { "@id": "https://icreatixpro.com/services/seo-services-london#breadcrumb" },
  inLanguage: "en-GB",
  datePublished: "2026-01-01",
  dateModified: new Date().toISOString().split("T")[0],
};

/** FAQPage schema – rich result snippets */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://icreatixpro.com/services/seo-services-london#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does SEO take to show results in London?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most London clients see measurable improvements in 3–4 months, with significant growth by month 6. Technical fixes can show results within weeks, while content and link building compounds over time.",
      },
    },
    {
      "@type": "Question",
      name: "What makes a good SEO agency for London B2B companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "B2B SEO requires targeting longer buying cycles, decision-maker keywords, and industry-specific content. iCreatixPRO specialises in exactly this — understanding your buyer persona, not just chasing traffic volume.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with London tech startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Tech startups are our sweet spot. We understand product-led growth, SaaS metrics, and how to build SEO strategies that scale alongside your funding stage.",
      },
    },
    {
      "@type": "Question",
      name: "What does a free SEO audit include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our free London SEO audit covers technical health, site speed, Core Web Vitals, keyword opportunities, competitor benchmarking, backlink profile analysis, and a prioritised action plan — delivered within 5 business days.",
      },
    },
    {
      "@type": "Question",
      name: "How much do your London SEO services cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Engagements typically start at £2,500/month depending on scope, competition, and goals. We offer flexible monthly contracts with no long-term lock-ins.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide local SEO for London businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We optimise your Google Business Profile, build local citations, manage reviews, and target London-specific search terms to help you dominate local pack results.",
      },
    },
  ],
};

// ─── 3. PAGE COMPONENT ───────────────────────────────────────────────────────
export default function SEOServicesLondon() {
  return (
    <>
      {/* Inject all schemas as separate <script> tags */}
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="schema-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="schema-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main id="main-content">
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <HowItWorks />
        <CaseStudies />
        <Testimonials />
        <FAQSection />
        <FinalCTA />
      </main>
    </>
  );
}