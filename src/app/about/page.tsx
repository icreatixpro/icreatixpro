// app/about/page.tsx
import type { Metadata } from 'next';
import AboutClient from './about-client';
import RatingSchema from './RatingSchema'; // ✅ Import RatingSchema
import { buildCanonical, isSEOValid, generatePageSchema, getLinkingSuggestions } from '@/lib/seo/seo-engine';

const canonicalPath = '/about';
const canonicalUrl = buildCanonical(canonicalPath);

// Validate URL
isSEOValid(canonicalUrl);

// ============================================
// METADATA - Perfectly Optimized
// ============================================

export const metadata: Metadata = {
  title: "About iCreatixPRO | AI-Powered SEO & Digital Growth Agency 2026",
  description: "iCreatixPRO is an AI-powered SEO agency helping 1500+ businesses achieve 300%+ ROI through predictive analytics and generative AI optimization.",
  
  keywords: "AI SEO agency, digital growth agency, AI-powered marketing, predictive SEO, voice search optimization, visual search SEO, generative AI optimization, technical SEO services, enterprise SEO agency, ecommerce SEO, SaaS SEO agency, international SEO, Core Web Vitals optimization, entity SEO, multimodal search",
  
  alternates: {
    canonical: canonicalUrl,
    languages: {
      en: canonicalUrl,
      "x-default": canonicalUrl,
    },
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  openGraph: {
    title: "About iCreatixPRO | #1 AI SEO Agency 2026",
    description: "Ex-Google engineers and AI researchers building autonomous SEO systems. 99% client retention, $250M+ client revenue generated.",
    url: canonicalUrl,
    siteName: "iCreatixPRO",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://icreatixpro.com/og/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "iCreatixPRO AI SEO Agency Team - 2026",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    site: "@icreatixpro",
    creator: "@icreatixpro",
    title: "About iCreatixPRO | Leading AI SEO Agency 2026",
    description: "Ex-Google engineers building autonomous SEO systems. 1500+ projects, 99% retention, $250M+ revenue generated.",
    images: ["https://icreatixpro.com/og/about-twitter.jpg"],
  },
};

// ============================================
// SCHEMA GENERATION
// ============================================

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'iCreatixPRO',
  url: 'https://icreatixpro.com',
  logo: 'https://icreatixpro.com/logo.png',
  sameAs: [
    'https://twitter.com/icreatixpro',
    'https://linkedin.com/company/icreatixpro'
  ],
  foundingDate: '2020',
  founders: [{ '@type': 'Person', name: 'Alexandra Chen' }],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    addressCountry: 'US'
  }
};

const schemaGraph = generatePageSchema({
  pageType: 'about',
  title: 'About iCreatixPRO | AI-Powered SEO Agency',
  description: 'Learn about iCreatixPRO - the leading AI SEO agency with ex-Google engineers building autonomous growth systems. 75+ experts, 1500+ projects, 99% retention.',
  path: '/about',
  publishedDate: '2020-01-01',
  modifiedDate: '2026-04-25',
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' }
  ],
  faqs: [ // ✅ FAQ Schema - Only here, not in separate component
    {
      question: 'What makes iCreatixPRO different from other SEO agencies?',
      answer: 'We build autonomous AI systems that predict algorithm changes, optimize for multimodal search (voice, visual, GenAI), and focus on revenue growth—not just rankings. Our team includes ex-Google engineers and AI researchers.'
    },
    {
      question: 'Do you offer AI-powered SEO services?',
      answer: 'Yes, we use proprietary machine learning models for predictive keyword intelligence, automated optimization, and real-time rank tracking across search engines including Google, ChatGPT, and Gemini.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We work with SaaS, ecommerce, healthcare, finance, and enterprise clients. Our AI systems adapt to any industry vertical.'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Most clients see initial improvements in 30-60 days, with significant revenue growth within 6 months. Our average client ROI is 300%+ in the first year.'
    },
    {
      question: 'Do you provide international SEO services?',
      answer: 'Yes, we\'ve helped businesses scale across 15+ countries with multilingual SEO, hreflang optimization, and local search strategies.'
    }
  ]
});

const linkingSuggestions = getLinkingSuggestions('/about');

// ============================================
// PAGE COMPONENT
// ============================================

export default function Page() {
  return (
    <>
      {/* Organization Schema - Critical for brand SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      {/* Main Page Schema (includes WebPage, BreadcrumbList, FAQ) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      
      {/* Rating Schema - Server-side rendered */}
      <RatingSchema />
      
      {/* Client Component with linking suggestions */}
      <AboutClient linkingSuggestions={linkingSuggestions} />
    </>
  );
}