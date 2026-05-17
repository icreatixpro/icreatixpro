// app/tools/ai-title-generator/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://icreatixpro.com";
const CANONICAL_URL = `${SITE_URL}/tools/ai-title-generator`;

/* ─────────────────────────────
   SEO METADATA (CLEAN + STRONG)
───────────────────────────── */
export const metadata: Metadata = {
  title: "Free AI Title Generator for SEO Headlines & Blog Titles",
  description:
    "Generate SEO-optimized blog titles, YouTube titles, and meta titles using AI. Improve CTR, rankings, and organic traffic with high-performing headlines.",
  keywords: [
    "ai title generator",
    "seo title generator",
    "blog title generator",
    "youtube title generator",
    "meta title generator",
  ],
  alternates: {
    canonical: CANONICAL_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Free AI Title Generator for SEO Headlines",
    description:
      "Generate SEO titles with AI to increase CTR, traffic, and Google rankings instantly.",
    url: CANONICAL_URL,
    siteName: "iCreatixPRO",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og/ai-title-generator.png`,
        width: 1200,
        height: 630,
        alt: "AI Title Generator Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Title Generator for SEO Headlines",
    description:
      "AI-powered SEO title generator for higher CTR and rankings.",
    images: [`${SITE_URL}/og/ai-title-generator.png`],
  },
};

/* ─────────────────────────────
   SCHEMA BASE CONTEXT
───────────────────────────── */
const graphSchemas = {
  "@context": "https://schema.org",
  "@graph": [
    /* ───────── WEBSITE ENTITY ───────── */
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: "iCreatixPRO",
      publisher: {
        "@type": "Organization",
        name: "iCreatixPRO",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.png`,
        },
        sameAs: [
          "https://twitter.com/icreatixpro",
          "https://linkedin.com/company/icreatixpro",
        ],
      },
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },

    /* ───────── WEBPAGE ENTITY ───────── */
    {
      "@type": "WebPage",
      "@id": `${CANONICAL_URL}#webpage`,
      url: CANONICAL_URL,
      name: "AI Title Generator",
      description:
        "Free AI-powered SEO title generator for blogs, YouTube, and marketing content.",
      isPartOf: { "@id": `${SITE_URL}#website` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og/ai-title-generator.png`,
      },
      mainEntity: {
        "@id": `${CANONICAL_URL}#tool`,
      },
    },

    /* ───────── SOFTWARE APPLICATION ───────── */
    {
      "@type": "SoftwareApplication",
      "@id": `${CANONICAL_URL}#tool`,
      name: "AI Title Generator",
      url: CANONICAL_URL,
      image: `${SITE_URL}/og/ai-title-generator.png`,
      applicationCategory: "SEOApplication",
      operatingSystem: "Web Browser",
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      provider: {
        "@type": "Organization",
        name: "iCreatixPRO",
        url: SITE_URL,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "134",
        bestRating: "5",
        worstRating: "1",
      },
      featureList: [
        "AI-powered SEO title generation",
        "CTR optimization scoring",
        "Keyword intent analysis",
        "Title type classification",
        "SEO performance suggestions",
        "YouTube & blog title optimization",
      ],
    },

    /* ───────── FAQ (AI OVERVIEW OPTIMIZED) ───────── */
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is an AI title generator?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "An AI title generator creates SEO-optimized headlines using artificial intelligence. It analyzes your keyword and generates high-click titles designed to improve rankings and CTR.",
          },
        },
        {
          "@type": "Question",
          name: "How does the AI title generator work?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Enter a keyword, choose a tone, and the AI generates optimized titles with SEO scoring and recommendations in seconds.",
          },
        },
        {
          "@type": "Question",
          name: "Is this tool free?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, the AI Title Generator is completely free with no signup or usage limits.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best SEO title length?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The ideal SEO title length is between 55 and 70 characters for best Google SERP visibility.",
          },
        },
      ],
    },

    /* ───────── HOW TO (RICH RESULT READY) ───────── */
    {
      "@type": "HowTo",
      name: "How to Use AI Title Generator",
      totalTime: "PT1M",
      tool: {
        "@type": "HowToTool",
        name: "AI Title Generator",
      },
      step: [
        {
          "@type": "HowToStep",
          name: "Enter Keyword",
          text: "Type your main keyword or topic.",
        },
        {
          "@type": "HowToStep",
          name: "Choose Tone",
          text: "Select professional, casual, or urgent tone.",
        },
        {
          "@type": "HowToStep",
          name: "Generate Titles",
          text: "Click generate to get SEO-optimized titles instantly.",
        },
      ],
    },

    /* ───────── ITEM LIST (SEO SUPPORT) ───────── */
    {
      "@type": "ItemList",
      name: "SEO Title Examples",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "AI SEO Title Generator for High CTR",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "How to Generate SEO Titles with AI",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best AI Title Generator for Blogs",
        },
      ],
    },
  ],
};

/* ─────────────────────────────
   LAYOUT COMPONENT
───────────────────────────── */
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(graphSchemas),
        }}
      />
      {children}
    </>
  );
}