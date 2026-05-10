// app/sitemap/page.tsx
import type { Metadata } from "next";
import SitemapClient from "./SitemapClient";

const baseUrl = "https://icreatixpro.com";
const pageUrl = `${baseUrl}/sitemap/`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Sitemap | Complete Website Navigation & Page Index | iCreatixPRO",
  description:
    "Explore the complete sitemap of iCreatixPRO find all services pages (SEO, AI SEO, GEO, PPC), blog posts, tools, resources, and legal pages in one structured index for easy navigation.",
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
  openGraph: {
    title: "Sitemap | Complete Website Navigation | iCreatixPRO",
    description:
      "Your complete guide to all pages on iCreatixPRO services, blogs, tools, and legal resources. Find what you need quickly.",
    url: pageUrl,
    siteName: "iCreatixPRO",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitemap | iCreatixPRO",
    description:
      "Full website navigation index services, blogs, tools, and more.",
  },
};

// Schemas
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  name: "Sitemap - iCreatixPRO",
  url: pageUrl,
  description: "Complete sitemap of iCreatixPRO website showing all pages and sections.",
  isPartOf: {
    "@type": "WebSite",
    "@id": `${baseUrl}#website`,
  },
  breadcrumb: {
    "@id": `${pageUrl}#breadcrumb`,
  },
  publisher: {
    "@type": "Organization",
    name: "iCreatixPRO",
    url: baseUrl,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${pageUrl}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Sitemap", item: pageUrl },
  ],
};

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${pageUrl}#collection`,
  name: "Website Sitemap Index",
  url: pageUrl,
  description: "Index of all public pages on iCreatixPRO.",
  isPartOf: { "@id": `${pageUrl}#webpage` },
};

export default function SitemapPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [webPageSchema, breadcrumbSchema, collectionPageSchema],
          }),
        }}
      />
      <SitemapClient />
    </>
  );
}