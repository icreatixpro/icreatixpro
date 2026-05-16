import type { Metadata, Viewport } from "next";
import TechnicalSEOClient from "./TechnicalSEOClient";
import { combinedSchema } from "./schema/technicalSeoSchema";

// ===============================
// ✅ CONSTANTS
// ===============================
const baseUrl = "https://icreatixpro.com";

// 👉 IMPORTANT: choose ONE standard (recommended: trailing slash ON)
const pagePath = "/services/technical-seo/";
const pageUrl = `${baseUrl}${pagePath}`;

// ===============================
// ✅ META
// ===============================
const seoTitle = "Technical SEO Services | Core Web Vitals & Speed";

const seoDescription =
  "Fix technical SEO issues that hurt rankings. Site speed optimization, Core Web Vitals, schema markup, and crawl fixes. Get free technical SEO audit today!";

// ===============================
// ✅ METADATA
// ===============================
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: seoTitle,
  description: seoDescription,

  keywords: [
    "technical SEO",
    "site speed optimization",
    "Core Web Vitals",
    "crawl budget",
    "schema markup",
    "JavaScript SEO",
  ],

  alternates: {
    canonical: pageUrl,
  },

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

  authors: [{ name: "iCreatixPRO" }],
  creator: "iCreatixPRO",
  publisher: "iCreatixPRO",

  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: pageUrl, // ✅ must match canonical exactly
    siteName: "iCreatixPRO",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${baseUrl}/technical-seo-services.webp`,
        width: 1200,
        height: 630,
        alt: "Technical SEO services by iCreatixPRO",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: [`${baseUrl}/technical-seo-services.webp`],
    site: "@icreatixpro",
  },
};

export const viewport: Viewport = {
  themeColor: "#1A394E",
  width: "device-width",
  initialScale: 1,
};

// ===============================
// ✅ PAGE
// ===============================
export default function TechnicalSEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(combinedSchema),
        }}
      />
      <TechnicalSEOClient />
    </>
  );
}