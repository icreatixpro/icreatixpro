import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GDPR Compliance Policy | Data Protection | iCreatixPRO",
  description:
    "Learn how iCreatixPRO ensures GDPR compliance, user data protection, privacy rights, and secure handling of personal information.",
  alternates: {
    canonical: "https://icreatixpro.com/gdpr/",
  },
  openGraph: {
    title: "GDPR Compliance Policy | iCreatixPRO",
    description:
      "Understand how iCreatixPRO protects user data with GDPR compliance, privacy standards, and secure data practices.",
    url: "https://icreatixpro.com/gdpr/",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GDPR Compliance | iCreatixPRO",
    description:
      "Learn how iCreatixPRO protects user privacy and ensures GDPR-compliant data handling practices.",
  },
};

// ⚡ Static caching (policy rarely changes)
export const revalidate = 86400;

export default function Page() {
  const lastUpdated = "April 2026";

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "GDPR Compliance Policy",
    url: "https://icreatixpro.com/gdpr/",
    description:
      "GDPR compliance policy explaining how iCreatixPRO protects user data and privacy rights.",
    publisher: {
      "@type": "Organization",
      name: "iCreatixPRO",
      url: "https://icreatixpro.com",
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[#f0f7f6] to-white py-24 px-6">

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/60">

          <h1 className="text-4xl md:text-5xl font-bold text-[#1A394E] mb-6 capitalize">
            GDPR Compliance
          </h1>

          <div className="space-y-5 text-[#1A394E]/80">

            <p>
              At <strong>iCreatixPRO</strong>, we are committed to protecting user privacy
              and ensuring full compliance with the General Data Protection Regulation (GDPR).
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Data Protection Principles
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>Lawful, fair, and transparent data processing</li>
              <li>Data minimization and purpose limitation</li>
              <li>Secure storage and encryption of user data</li>
              <li>User consent before data collection</li>
              <li>Right to access, update, or delete personal data</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Your Rights Under GDPR
            </h2>

            <p>
              Users have the right to request access to their data, correct inaccuracies,
              request deletion, and withdraw consent at any time.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Data Usage
            </h2>

            <p>
              We only collect necessary data to improve website performance, analytics,
              and user experience. We never sell or misuse personal information.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Contact Us
            </h2>

            <p>
              For any GDPR-related concerns, contact us at privacy@icreatixpro.com.
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