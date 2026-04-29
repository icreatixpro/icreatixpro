import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Policy | iCreatixPRO Data Protection Guide",
  description:
    "Learn how iCreatixPRO protects your data with advanced security systems, encryption standards, monitoring, and safe infrastructure practices.",
  alternates: {
    canonical: "https://icreatixpro.com/security/",
  },
  openGraph: {
    title: "Security Policy | iCreatixPRO Data Protection Guide",
    description:
      "Explore how iCreatixPRO ensures platform security using encryption, monitoring systems, and modern web protection standards.",
    url: "https://icreatixpro.com/security/",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Policy | iCreatixPRO",
    description:
      "Understand how iCreatixPRO protects data with strong security and encryption practices.",
  },
};

// Performance caching (stable policy page)
export const revalidate = 86400; // 24 hours

const LAST_UPDATED = "April 2026";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[#f0f7f6] to-white py-24 px-6">

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Security Policy",
            url: "https://icreatixpro.com/security/",
            description:
              "Security policy explaining how iCreatixPRO protects user data with encryption and secure infrastructure.",
            publisher: {
              "@type": "Organization",
              name: "iCreatixPRO",
              url: "https://icreatixpro.com",
            },
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                name: "Security",
                item: "https://icreatixpro.com/security/",
              },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/60">

          <h1 className="text-4xl md:text-5xl font-bold text-[#1A394E] mb-6 capitalize">
            Security
          </h1>

          <div className="space-y-5 text-[#1A394E]/80">

            <p>
              At <strong>iCreatixPRO</strong>, security is a top priority. We implement modern
              protection systems to ensure your data and interactions remain safe at all times.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Data Protection
            </h2>
            <p>
              We use industry-standard encryption and secure protocols to protect sensitive
              information from unauthorized access.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Infrastructure Security
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Secure hosting environment</li>
              <li>DDoS protection systems</li>
              <li>Regular security monitoring</li>
              <li>Automated threat detection</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              User Safety
            </h2>
            <p>
              We continuously monitor our platform to prevent malicious activity,
              ensuring a safe experience for all users.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Updates
            </h2>
            <p>
              Our security systems are regularly updated to meet evolving industry standards.
            </p>

            <p className="text-sm text-[#1A394E]/60 mt-6">
              Last updated: {LAST_UPDATED}
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}