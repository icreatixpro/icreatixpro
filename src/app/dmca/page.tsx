import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA Policy | Copyright Protection iCreatixPRO",
  description:
    "Learn how iCreatixPRO handles DMCA copyright protection, content removal requests, and intellectual property rights compliance policies.",
  alternates: {
    canonical: "https://icreatixpro.com/dmca/",
  },
  openGraph: {
    title: "DMCA Policy | Copyright Protection iCreatixPRO",
    description:
      "Understand how iCreatixPRO protects intellectual property and handles DMCA takedown requests and copyright claims.",
    url: "https://icreatixpro.com/dmca/",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DMCA Policy | iCreatixPRO",
    description:
      "DMCA policy explaining copyright protection and content removal process at iCreatixPRO.",
  },
};

// Performance caching (stable legal page)
export const revalidate = 86400;

export default function Page() {
  const lastUpdated = "2026-04-23";

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "DMCA Policy",
    url: "https://icreatixpro.com/dmca/",
    description:
      "DMCA copyright policy of iCreatixPRO explaining content protection and removal procedures.",
    publisher: {
      "@type": "Organization",
      name: "iCreatixPRO",
      url: "https://icreatixpro.com",
    },
  };

  const breadcrumb = {
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
        name: "DMCA",
        item: "https://icreatixpro.com/dmca/",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[#f0f7f6] to-white py-24 px-6">

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/60">

          <h1 className="text-4xl md:text-5xl font-bold text-[#1A394E] mb-6 capitalize">
            DMCA Policy
          </h1>

          <div className="space-y-4 text-[#1A394E]/80">

            <p>
              At <strong>iCreatixPRO</strong>, we respect intellectual property rights and comply with DMCA regulations.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Copyright Protection
            </h2>

            <p>
              We do not tolerate copyright infringement and respond to valid DMCA takedown requests promptly.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Reporting Copyright Issues
            </h2>

            <p>
              If you believe your copyrighted content has been used improperly, please contact us with proper proof of ownership.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Action Process
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>Review of DMCA complaint</li>
              <li>Verification of ownership claim</li>
              <li>Content removal if valid</li>
              <li>Notification to involved parties</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Contact
            </h2>

            <p>
              For DMCA requests, contact us at <strong>legal@icreatixpro.com</strong>
            </p>

            <p className="text-sm text-[#1A394E]/60 mt-6">
              Last updated: {lastUpdated}
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}