import SitemapClient from "./SitemapClient";
import type { Metadata } from "next";

// ===============================
// ✅ CONSTANTS
// ===============================
const baseUrl = "https://icreatixpro.com";
const pagePath = "/sitemap"; // 🔥 choose ONE standard (recommended: no trailing slash)
const pageUrl = `${baseUrl}${pagePath}`;

// ===============================
// ✅ METADATA
// ===============================
export const metadata: Metadata = {
  title: "Sitemap | iCreatixPRO - Complete Website Navigation",
  description:
    "Explore all pages of iCreatixPRO including services, blogs, tools, and resources in one structured sitemap for easy navigation.",

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: "Sitemap | iCreatixPRO",
    description:
      "Complete navigation guide of iCreatixPRO website including all pages and resources.",
    url: pageUrl,
    siteName: "iCreatixPRO",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sitemap | iCreatixPRO",
    description:
      "Explore all pages of iCreatixPRO in a structured sitemap view.",
  },
};

// ===============================
// ✅ SCHEMA - WebPage
// ===============================
const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  name: "Sitemap - iCreatixPRO",
  url: pageUrl,
  description:
    "Complete sitemap of iCreatixPRO website showing all pages and sections.",
  publisher: {
    "@type": "Organization",
    name: "iCreatixPRO",
    url: baseUrl,
  },
};

// ===============================
// ✅ SCHEMA - Breadcrumb
// ===============================
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${pageUrl}#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${baseUrl}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Sitemap",
      item: pageUrl,
    },
  ],
};

// ===============================
// ✅ PAGE
// ===============================
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SitemapClient />
    </>
  );
}