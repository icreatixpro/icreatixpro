// app/tools/ai-title-generator/layout.tsx
// ─────────────────────────────────────────────────────────────
// ALL JSON-LD schemas:
//  ✅ SoftwareApplication   ✅ WebApplication
//  ✅ FAQPage               ✅ HowTo
//  ✅ BreadcrumbList        ✅ WebSite + SearchAction
//  ✅ AggregateRating       ✅ Speakable
//  ✅ ItemList (examples)
// ─────────────────────────────────────────────────────────────
import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://icreatixpro.com";
const PAGE_URL = `${SITE_URL}/tools/ai-title-generator`;

// ── Metadata ──────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Free AI Title Generator for SEO Headlines | iCreatixPRO",
  description:
    "Generate click-worthy, SEO-optimized blog titles instantly with AI. Get CTR scores, SEO analysis, and real keyword insights. Free No signup needed.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Free AI Title Generator for SEO Headlines | iCreatixPRO",
    description:
      "AI-powered blog title generator with CTR prediction, SEO scoring, and keyword analysis. Generate up to 15 unique titles instantly free.",
    url: PAGE_URL,
    siteName: "iCreatixPRO",
    type: "website",
    images: [{ url: `${SITE_URL}/og/ai-title-generator.png`, width: 1200, height: 630, alt: "Free AI Title Generator iCreatixPRO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Title Generator for SEO Headlines",
    description: "Generate AI-powered, SEO-scored blog titles in seconds. Free tool by iCreatixPRO.",
    images: [`${SITE_URL}/og/ai-title-generator.png`],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  keywords: [
    "AI title generator", "free AI blog title generator", "SEO headline generator",
    "blog title generator", "AI headline tool", "YouTube title generator",
    "headline analyzer free", "blog post title ideas", "AI title generator for SEO",
    "best free AI title generator 2026",
  ],
};

// ═════════════════════════════════════════════════════════════
// SCHEMA DEFINITIONS
// ═════════════════════════════════════════════════════════════

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${PAGE_URL}#software`,
  name: "AI Title Generator",
  url: PAGE_URL,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "SEO Tool",
  operatingSystem: "Web Browser",
  browserRequirements: "Requires JavaScript. Works on Chrome, Firefox, Safari, Edge.",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  featureList: [
    "AI-powered headline generation via Claude",
    "SEO score analysis per title",
    "CTR prediction scoring",
    "Writing tone selection (Professional, Casual, Urgent)",
    "Title type categorization (How-To, List, Question, Data-Driven, etc.)",
    "Keyword search intent summary",
    "Save and export generated titles",
    "Character count SERP optimization",
  ],
  description:
    "Generate click-worthy, SEO-optimized blog titles with Claude AI. Includes CTR scoring, SEO analysis, tone selection, and keyword insights.",
  provider: { "@type": "Organization", name: "iCreatixPRO", url: SITE_URL },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "134",
    bestRating: "5",
    worstRating: "1",
  },
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${PAGE_URL}#webapp`,
  name: "AI Title Generator",
  url: PAGE_URL,
  applicationCategory: "SEO Tool",
  applicationSuite: "iCreatixPRO SEO Tools",
  browserRequirements: "Requires JavaScript",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  featureList: [
    "Real-time AI title generation",
    "In-browser SEO scoring",
    "No installation required",
    "Free to use without login",
  ],
  potentialAction: [{ "@type": "UseAction", target: PAGE_URL, name: "Generate AI Titles" }],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is an AI title generator?", acceptedAnswer: { "@type": "Answer", text: "An AI title generator uses artificial intelligence to create SEO-optimized, click-worthy headlines for blog posts, articles, and web pages. It analyzes your keyword and generates contextually relevant titles designed to rank on search engines and attract clicks." } },
    { "@type": "Question", name: "How does this AI title generator work?", acceptedAnswer: { "@type": "Answer", text: "Enter your target keyword and select a writing tone (Professional, Casual, or Urgent). The tool sends your input to Claude AI, which generates unique, contextual titles with SEO scoring, type classification, and optimization tips all in seconds." } },
    { "@type": "Question", name: "Is this AI title generator free?", acceptedAnswer: { "@type": "Answer", text: "Yes, the AI Title Generator on iCreatixPRO is completely free to use. No signup, no credit card, and no usage limits." } },
    { "@type": "Question", name: "What is the ideal SEO title length?", acceptedAnswer: { "@type": "Answer", text: "For optimal SERP display, titles should be between 55 and 72 characters. Titles shorter than 55 characters may miss keyword opportunities; titles over 72 characters may be truncated by Google." } },
    { "@type": "Question", name: "Can I use this tool for YouTube titles?", acceptedAnswer: { "@type": "Answer", text: "Yes. The AI Title Generator works for blog posts, YouTube videos, podcast episodes, newsletter subjects, and any content format where headlines drive clicks." } },
    { "@type": "Question", name: "How is the SEO score calculated?", acceptedAnswer: { "@type": "Answer", text: "Each title is scored based on keyword placement, character length, use of numbers, power words, emotional triggers, and question-based phrasing. Scores above 70 are considered excellent for SEO performance." } },
    { "@type": "Question", name: "How is this different from ChatGPT for title generation?", acceptedAnswer: { "@type": "Answer", text: "Unlike generic ChatGPT prompts, this tool is purpose-built for SEO titles. It provides a scored analysis per title, classifies each by type (How-To, List, Contrarian, etc.), gives a specific SEO tip per title, and applies SEO best practices optimized for 2026 SERPs." } },
    { "@type": "Question", name: "Does this work as a YouTube title generator?", acceptedAnswer: { "@type": "Answer", text: "Yes. Select the Casual or Urgent tone for YouTube-optimized titles. YouTube titles between 60–70 characters perform best for search visibility." } },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Use the AI Title Generator",
  description: "Generate SEO-optimized, click-worthy blog titles using Claude AI in three simple steps.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "AI Title Generator by iCreatixPRO" }],
  step: [
    { "@type": "HowToStep", position: 1, name: "Enter Your Target Keyword", text: "Type your main target keyword a topic, niche, or specific phrase you want to rank for. Up to 120 characters accepted.", url: `${PAGE_URL}#how-to-use` },
    { "@type": "HowToStep", position: 2, name: "Choose Your Writing Tone", text: "Select Professional for B2B content, Casual for lifestyle blogs, or Urgent to drive immediate clicks and FOMO.", url: `${PAGE_URL}#how-to-use` },
    { "@type": "HowToStep", position: 3, name: "Generate and Save Your Titles", text: "Click Generate. Claude AI creates unique, SEO-scored titles in seconds. Review scores and tips, save favorites, and copy to your CMS.", url: `${PAGE_URL}#how-to-use` },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE_URL}/tools` },
    { "@type": "ListItem", position: 3, name: "AI Title Generator", item: PAGE_URL },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_URL,
  name: "iCreatixPRO",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/search?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

// AggregateRating as standalone Product (additional signal)
const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "AI Title Generator",
  description: "Free AI-powered SEO headline generator by iCreatixPRO.",
  url: PAGE_URL,
  brand: { "@type": "Brand", name: "iCreatixPRO" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "134",
    bestRating: "5",
    worstRating: "1",
  },
};

// Speakable — for voice/AI search featured snippets
const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: PAGE_URL,
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", ".speakable-summary", ".speakable-howto"],
  },
};

// ItemList — crawlable programmatic examples
const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "AI-Generated SEO Title Examples",
  description: "Example blog titles generated by the iCreatixPRO AI Title Generator.",
  numberOfItems: 9,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "7 Digital Marketing Mistakes That Cost Businesses Millions in 2026" },
    { "@type": "ListItem", position: 2, name: "How to Build a Digital Marketing Strategy From Scratch (No Budget Needed)" },
    { "@type": "ListItem", position: 3, name: "Digital Marketing vs Traditional Marketing: Which Actually Drives ROI?" },
    { "@type": "ListItem", position: 4, name: "SEO in 2026: What Still Works (And What Google Penalizes Now)" },
    { "@type": "ListItem", position: 5, name: "How I Grew Organic Traffic 340% with These 5 SEO Fixes" },
    { "@type": "ListItem", position: 6, name: "Technical SEO Audit: The 12-Point Checklist Every Site Needs" },
    { "@type": "ListItem", position: 7, name: "Content Marketing ROI: How to Measure What Actually Matters" },
    { "@type": "ListItem", position: 8, name: "Why 90% of Content Marketing Fails (And the 10% That Doesn't)" },
    { "@type": "ListItem", position: 9, name: "Content Marketing Funnel: From Awareness to Sale in 6 Steps" },
  ],
};

// ── Layout Component ──────────────────────────────────────────
export default function AITitleGeneratorLayout({ children }: { children: ReactNode }) {
  const schemas = [
    softwareApplicationSchema,
    webApplicationSchema,
    faqSchema,
    howToSchema,
    breadcrumbSchema,
    websiteSchema,
    aggregateRatingSchema,
    speakableSchema,
    itemListSchema,
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {children}
    </>
  );
}