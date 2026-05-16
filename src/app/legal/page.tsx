import type { Metadata } from "next";
import Link from "next/link";

// ===============================
// ✅ CONSTANTS
// ===============================
const baseUrl = "https://icreatixpro.com";
const pagePath = "/legal"; // 🔥 recommended standard (NO trailing slash)
const pageUrl = `${baseUrl}${pagePath}`;

// ===============================
// ✅ METADATA
// ===============================
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: "Legal Notice | iCreatixPRO – Imprint & Legal Information",
  description:
    "Legal notice, company information, disclaimer, and intellectual property rights for iCreatixPRO, a Dubai-based AI SEO and digital marketing agency.",

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: "Legal Notice | iCreatixPRO",
    description:
      "Official legal notice for iCreatixPRO – company details, liability disclaimer, and governing law information.",
    url: pageUrl,
    siteName: "iCreatixPRO",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Legal Notice | iCreatixPRO",
    description: "Legal information and imprint for iCreatixPRO.",
  },
};

// ===============================
// ✅ SCHEMA - WebPage
// ===============================
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  name: "Legal Notice",
  url: pageUrl,
  description:
    "Legal notice, imprint, and disclaimer for iCreatixPRO.",
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
      name: "Legal Notice",
      item: pageUrl,
    },
  ],
};

// ===============================
// ✅ PAGE
// ===============================
export default function LegalPage() {
  const lastUpdated = "May 2026";

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 px-6 md:pt-28 md:pb-20 bg-gradient-to-br from-[#1A394E] via-[#2C727B] to-[#1A394E]">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Legal <span className="text-[#2C727B]">Notice</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Imprint, company information, and legal disclosures for iCreatixPRO.
          </p>
          <p className="mt-2 text-sm text-gray-300">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content (unchanged UI - only SEO improved) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8 relative z-20 pb-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">

          <div className="bg-gray-50 rounded-xl p-5 mb-8 border-l-4 border-[#2C727B]">
            <h2 className="text-xl font-bold text-[#1A394E] mb-2">
              iCreatixPRO – Company Information
            </h2>
            <div className="text-gray-700 space-y-1">
              <p><strong>Registered Office:</strong> UK, United Kingdom</p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:icreatixpro@gmail.com"
                  className="text-[#2C727B] hover:underline"
                >
                  icreatixpro@gmail.com
                </a>
              </p>
              <p><strong>Legal Representative:</strong> Imdad Malik</p>
              <p><strong>Commercial Registration:</strong> Issued in UK</p>
            </div>
          </div>

          {/* keep your Sections unchanged */}
        </div>
      </div>
    </main>
  );
}