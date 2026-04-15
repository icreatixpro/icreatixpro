import type { Metadata } from 'next';
import AboutClient from './about-client';

export const metadata: Metadata = {
  title: "About iCreatixPRO | AI-Powered SEO & Digital Growth Agency 2026",
  description: "We build AI-driven SEO systems that increase rankings, boost visibility, and drive measurable business growth. Discover our story, values, and proven methodology for 2026 and beyond.",
  
  keywords: "AI SEO agency, digital growth agency, SEO services 2026, AI-powered marketing, revenue-focused SEO, voice search optimization, visual search SEO, generative AI optimization",
  
  authors: [{ name: "iCreatixPRO Team", url: "https://icreatixpro.com" }],
  
  creator: "iCreatixPRO",
  
  publisher: "iCreatixPRO",
  
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  
  alternates: {
    canonical: "https://icreatixpro.com/about",
    languages: {
      'en-US': 'https://icreatixpro.com/about',
      'es-ES': 'https://icreatixpro.com/es/about',
    },
  },
  
  openGraph: {
    title: "iCreatixPRO | AI-Powered SEO & Digital Growth Agency 2026",
    description: "We build AI-driven SEO systems that increase rankings, boost visibility, and drive measurable business growth.",
    url: "https://icreatixpro.com/about",
    siteName: "iCreatixPRO",
    images: [
      {
        url: "https://icreatixpro.com/og/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "iCreatixPRO - AI SEO Agency About Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "iCreatixPRO | AI-Powered SEO & Digital Growth Agency 2026",
    description: "We build AI-driven SEO systems that increase rankings, boost visibility, and drive measurable business growth.",
    images: ["https://icreatixpro.com/og/about-twitter.jpg"],
    creator: "@icreatixpro",
    site: "@icreatixpro",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    // bing: "bing-verification-code", // REMOVED - 'bing' is not a valid property in Next.js verification
  },
  
  category: "technology",
};

export default function Page() {
  return <AboutClient />;
}