import SitemapClient from "./SitemapClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap | iCreatixPRO - Complete Website Navigation",
  description:
    "Explore all pages of iCreatixPRO including services, blogs, tools, and resources in one structured sitemap for easy and quick website navigation. ",
  alternates: {
    canonical: "https://icreatixpro.com/sitemap/",
  },
  openGraph: {
    title: "Sitemap | iCreatixPRO",
    description:
      "Complete navigation guide of iCreatixPRO website including all pages and resources.",
    url: "https://icreatixpro.com/sitemap/",
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

// ============================================
// ✅ SCHEMA - WebPage
// ============================================
const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://icreatixpro.com/sitemap/#webpage",
  name: "Sitemap - iCreatixPRO",
  url: "https://icreatixpro.com/sitemap/",
  description:
    "Complete sitemap of iCreatixPRO website showing all pages and sections.",
  publisher: {
    "@type": "Organization",
    name: "iCreatixPRO",
    url: "https://icreatixpro.com",
  },
};

// ============================================
// ✅ SCHEMA - BreadcrumbList (VERY IMPORTANT)
// ============================================
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://icreatixpro.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Sitemap",
      item: "https://icreatixpro.com/sitemap/",
    },
  ],
};

export default function Page() {
  return (
    <>
      {/* ✅ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <SitemapClient />
    </>
  );
}