import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | SEO & Digital Marketing Answers | iCreatixPRO",
  description:
    "Find answers to common questions about SEO, AI marketing, web development, and digital growth strategies from iCreatixPRO experts.",
  alternates: {
    canonical: "https://icreatixpro.com/faqs/",
  },
  openGraph: {
    title: "FAQs | SEO & Digital Marketing Answers | iCreatixPRO",
    description:
      "Get expert answers to frequently asked questions about SEO, AI marketing, and website growth strategies at iCreatixPRO.",
    url: "https://icreatixpro.com/faqs/",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs | iCreatixPRO",
    description:
      "Answers to common SEO, AI marketing, and digital growth questions from iCreatixPRO.",
  },
};

// ✅ Cache (static page)
export const revalidate = 86400;

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is iCreatixPRO?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "iCreatixPRO is a digital agency focused on SEO, AI marketing, and website development.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer SEO services?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, we provide AI-powered SEO strategies to improve rankings, traffic, and conversions.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[#f0f7f6] to-white py-24 px-6">

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/60">

          <h1 className="text-4xl md:text-5xl font-bold text-[#1A394E] mb-6 capitalize">
            FAQs
          </h1>

          <div className="space-y-6 text-[#1A394E]/80">

            <div>
              <h2 className="font-semibold text-[#1A394E]">
                What services does iCreatixPRO offer?
              </h2>
              <p>
                We specialize in SEO, AI-driven marketing strategies, and modern web development.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-[#1A394E]">
                How can SEO help my business?
              </h2>
              <p>
                SEO increases visibility on Google, brings organic traffic, and improves conversions.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-[#1A394E]">
                Do you use AI in SEO strategies?
              </h2>
              <p>
                Yes, we use AI tools and data-driven systems to optimize content and rankings.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-[#1A394E]">
                How long does SEO take to show results?
              </h2>
              <p>
                Typically, SEO results appear within 3–6 months depending on competition and strategy.
              </p>
            </div>

            <p className="text-sm text-[#1A394E]/60 mt-8">
              Last updated: April 2026
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}