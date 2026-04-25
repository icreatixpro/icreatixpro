import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Standards & Inclusive Web Design | iCreatixPRO",
  description:
    "Learn how iCreatixPRO builds accessible websites using WCAG standards, inclusive design practices, and user-friendly experiences for all users.",
  alternates: {
    canonical: "https://icreatixpro.com/accessibility/",
  },
  openGraph: {
    title: "Accessibility Standards & Inclusive Web Design | iCreatixPRO",
    description:
      "Discover how iCreatixPRO creates accessible websites with WCAG compliance, inclusive design, and improved user experience for everyone.",
    url: "https://icreatixpro.com/accessibility/",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility Standards | iCreatixPRO",
    description:
      "Learn about accessibility, WCAG compliance, and inclusive web design at iCreatixPRO.",
  },
};

// Performance caching (stable informational page)
export const revalidate = 86400;

export default function Page() {
  const lastUpdated = "2026-04-23";

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Accessibility Standards & Inclusive Web Design",
    url: "https://icreatixpro.com/accessibility/",
    description:
      "iCreatixPRO accessibility guide explaining WCAG standards and inclusive web design practices.",
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
        name: "Accessibility",
        item: "https://icreatixpro.com/accessibility/",
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
            Accessibility
          </h1>

          <div className="space-y-4 text-[#1A394E]/80">

            <p>
              At <strong>iCreatixPRO</strong>, we are committed to building accessible and inclusive digital experiences for all users.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Our Accessibility Approach
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>WCAG (Web Content Accessibility Guidelines) compliance</li>
              <li>Keyboard-friendly navigation</li>
              <li>High contrast and readable typography</li>
              <li>Responsive design for all devices</li>
              <li>Screen reader optimization</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Why Accessibility Matters
            </h2>

            <p>
              Accessibility improves usability, expands audience reach, enhances SEO performance, and ensures a better experience for all users.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Need Help?
            </h2>

            <p>
              If you face any accessibility issues, contact us and we will improve your experience.
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