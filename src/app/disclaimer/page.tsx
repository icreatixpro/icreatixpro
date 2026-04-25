import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | iCreatixPRO Legal & Usage Information",
  description:
    "Read the disclaimer of iCreatixPRO outlining website content usage, accuracy limits, and liability terms for users and visitors.",
  alternates: {
    canonical: "https://icreatixpro.com/disclaimer/",
  },
  openGraph: {
    title: "Disclaimer | iCreatixPRO Legal & Usage Information",
    description:
      "Understand the disclaimer of iCreatixPRO including content accuracy, liability limits, and website usage terms for visitors.",
    url: "https://icreatixpro.com/disclaimer/",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | iCreatixPRO",
    description:
      "Important disclaimer explaining usage terms, content accuracy, and liability limitations of iCreatixPRO.",
  },
};

// Cache (rarely changes legal page)
export const revalidate = 86400;

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
            name: "Disclaimer",
            url: "https://icreatixpro.com/disclaimer/",
            description:
              "Disclaimer page of iCreatixPRO explaining content usage, accuracy, and liability terms.",
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
                name: "Disclaimer",
                item: "https://icreatixpro.com/disclaimer/",
              },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/60">

          <h1 className="text-4xl md:text-5xl font-bold text-[#1A394E] mb-6 capitalize">
            Disclaimer
          </h1>

          <div className="space-y-4 text-[#1A394E]/70">

            <p>
              The information provided by <strong>iCreatixPRO</strong> on this website is
              for general informational purposes only. While we strive for accuracy,
              we make no guarantees about completeness or reliability.
            </p>

            <h2 className="text-lg font-semibold text-[#1A394E]">
              No Professional Advice
            </h2>
            <p>
              Content on this website should not be considered professional legal,
              financial, or technical advice. Always consult a qualified expert.
            </p>

            <h2 className="text-lg font-semibold text-[#1A394E]">
              External Links
            </h2>
            <p>
              iCreatixPRO may contain links to external websites. We are not responsible
              for the content or practices of third-party sites.
            </p>

            <h2 className="text-lg font-semibold text-[#1A394E]">
              Limitation of Liability
            </h2>
            <p>
              iCreatixPRO is not liable for any losses or damages resulting from the use
              of this website or reliance on its content.
            </p>

            <p className="text-sm mt-6">
              Last updated: April 2026
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}