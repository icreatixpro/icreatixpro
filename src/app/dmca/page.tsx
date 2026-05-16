// app/dmca/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = "https://icreatixpro.com";
const pageUrl = `${baseUrl}/dmca`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: "DMCA Policy | Copyright Protection iCreatixPRO",
  description:
    "Learn how iCreatixPRO handles DMCA copyright protection, content removal requests, and intellectual property rights compliance policies.",

  alternates: {
    canonical: "/dmca",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "DMCA Policy | Copyright Protection iCreatixPRO",
    description:
      "Understand how iCreatixPRO protects intellectual property and handles DMCA takedown requests and copyright claims.",
    url: pageUrl,
    siteName: "iCreatixPRO",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "DMCA Policy | iCreatixPRO",
    description:
      "DMCA policy explaining copyright protection and content removal process at iCreatixPRO.",
  },
};

export const revalidate = 86400;

// ===============================
// SECTION COMPONENT
// ===============================
const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-6">
    <h2 className="text-xl md:text-2xl font-semibold text-[#1A394E] mb-3">
      {title}
    </h2>
    <div className="text-gray-600 leading-relaxed">{children}</div>
  </div>
);

// ===============================
// PAGE
// ===============================
export default function DMCAPage() {
  const lastUpdated = "May 2026";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "DMCA Policy",
    url: pageUrl,
    description:
      "DMCA copyright policy of iCreatixPRO explaining content protection and removal procedures.",
    publisher: {
      "@type": "Organization",
      name: "iCreatixPRO",
      url: baseUrl,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "DMCA",
          item: pageUrl,
        },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* HERO */}
      <section className="pt-20 pb-16 px-6 bg-gradient-to-br from-[#1A394E] to-[#2C727B] text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          DMCA <span className="text-white/80">Policy</span>
        </h1>
        <p className="mt-4 text-gray-200">
          Copyright protection and takedown procedures
        </p>
        <p className="mt-2 text-sm text-gray-300">
          Last updated: {lastUpdated}
        </p>
      </section>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-10 pb-20">
        <div className="bg-white rounded-2xl shadow-xl p-8">

          <Section title="1. Copyright Protection">
            All content on iCreatixPRO is protected by copyright laws.
            Unauthorized use, copying, or redistribution is prohibited.
          </Section>

          <Section title="2. DMCA Takedown Process">
            If you believe your content is used without permission, contact:
            <br />
            <strong>icreatixpro@gmail.com</strong>
          </Section>

          <Section title="3. Counter Notice">
            If you believe content was removed by mistake, you may submit a
            counter-notice including your identification and consent to legal
            jurisdiction.
          </Section>

          <Section title="4. Repeat Infringer Policy">
            Accounts violating copyright rules may be terminated.
          </Section>

          <Section title="5. Contact">
            Email: icreatixpro@gmail.com
            <br />
            Address: iCreatixPRO, United Kingdom
          </Section>

          {/* Footer Links */}
          <div className="mt-10 text-center text-sm text-gray-500">
            <Link href="/legal" className="hover:text-[#1A394E]">
              Legal Notice
            </Link>{" "}
            |{" "}
            <Link href="/disclaimer" className="hover:text-[#1A394E]">
              Disclaimer
            </Link>{" "}
            |{" "}
            <Link href="/cookies" className="hover:text-[#1A394E]">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}