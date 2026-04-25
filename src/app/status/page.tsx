import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "System Status | iCreatixPRO Platform Updates",
  description:
    "Check real-time system status of iCreatixPRO services, uptime updates, performance monitoring, and platform health information.",
  alternates: {
    canonical: "https://icreatixpro.com/status/",
  },
  openGraph: {
    title: "System Status | iCreatixPRO Platform Updates",
    description:
      "View live system status, uptime reports, and service health updates for iCreatixPRO platform and tools.",
    url: "https://icreatixpro.com/status/",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "System Status | iCreatixPRO",
    description:
      "Monitor iCreatixPRO system status, uptime, and platform performance updates in real time.",
  },
};

// Cache for stability (status page can be cached briefly)
export const revalidate = 3600; // 1 hour

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
            name: "System Status",
            url: "https://icreatixpro.com/status/",
            description:
              "Live system status page showing uptime and performance of iCreatixPRO services.",
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
                name: "Status",
                item: "https://icreatixpro.com/status/",
              },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/60">

          <h1 className="text-4xl md:text-5xl font-bold text-[#1A394E] mb-6 capitalize">
            System Status
          </h1>

          <div className="space-y-5 text-[#1A394E]/80">

            <p>
              The <strong>iCreatixPRO</strong> system status page provides real-time
              updates on platform performance, uptime, and service availability.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Current Status
            </h2>
            <p>
              All systems are currently operating normally with no known issues.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Monitoring
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>24/7 server monitoring</li>
              <li>Automated uptime tracking</li>
              <li>Performance alerts system</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Updates
            </h2>
            <p>
              Any downtime or maintenance updates will be posted here in real time.
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