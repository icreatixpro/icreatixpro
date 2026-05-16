// app/cookies/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | iCreatixPRO – Global Privacy & Data Transparency",
  description:
    "iCreatixPRO’s Cookie Policy explains our use of essential, analytics, and marketing cookies for enhanced performance and user experience. Learn more about your rights under GDPR, CCPA, and UAE PDPL.",

  alternates: {
    canonical: "https://icreatixpro.com/cookies",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Cookie Policy | iCreatixPRO – Global Privacy & Data Transparency",
    description:
      "iCreatixPRO uses cookies to enhance security, analyze performance, and personalize content on our website. Full transparency on how we manage user data globally.",
    url: "https://icreatixpro.com/cookies",
    siteName: "iCreatixPRO",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | iCreatixPRO",
    description:
      "Understanding how iCreatixPRO uses cookies to improve your browsing experience while ensuring full compliance with global data regulations.",
  },
};

export const revalidate = 86400; // 24-hour ISR

export default function Page() {
  const lastUpdated = "May 2026";

  // ==================== COOKIE TABLE DATA ====================
  const cookieTableData = [
    {
      name: "Essential / Strictly Necessary",
      purpose:
        "These cookies are critical for the basic functioning of our website. They enable core features like secure login, session management, and load balancing. You cannot disable them without breaking the site.",
      typicalDuration: "Session / Persistent (1 year max)",
      legalBasis: "Legitimate Interest (GDPR Art. 6(1)(f)) / Necessary for Service (CCPA)",
    },
    {
      name: "Performance & Analytics",
      purpose:
        "We use these cookies to understand how visitors interact with our website. This helps us improve site structure, load times, and content relevance. Data is aggregated and anonymized whenever possible.",
      typicalDuration: "Up to 13 months",
      legalBasis: "Consent (GDPR, ePrivacy) / Legitimate Interest (UK Data Act 2025) / Opt-Out (CCPA)",
    },
    {
      name: "Functionality / Personalization",
      purpose:
        "These cookies remember your preferences — such as language, region, and font size — to give you a more personalized experience. They may also be used to provide services you have explicitly requested.",
      typicalDuration: "Up to 12 months",
      legalBasis: "Consent (GDPR, ePrivacy) / Opt-Out (CCPA)",
    },
    {
      name: "Marketing / Targeting",
      purpose:
        "Marketing cookies help us deliver relevant advertising, measure campaign performance, and limit the number of times you see the same ad. They are placed only with your explicit consent.",
      typicalDuration: "Up to 13 months",
      legalBasis: "Consent (GDPR, ePrivacy, CCPA)",
    },
  ];

  // ==================== STRUCTURED DATA ====================
  const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Cookie Policy",
  url: "https://icreatixpro.com/cookies",
  description:
    "Cookies policy explaining how iCreatixPRO uses cookies for analytics, personalization, and performance improvement.",
  publisher: {
    "@type": "Organization",
    name: "iCreatixPRO",
    url: "https://icreatixpro.com",
  },
  breadcrumb: {
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
        name: "Cookie Policy",
        item: "https://icreatixpro.com/cookies",
      },
    ],
  },
};

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section with Clear Privacy Messaging */}
      <section className="relative overflow-hidden pt-20 pb-20 px-6 md:pt-28 md:pb-24 bg-gradient-to-br from-[#1A394E] via-[#2C727B] to-[#1A394E]">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Cookie <span className="text-[#2C727B]">Policy</span>
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
            iCreatixPRO is committed to transparency. This policy explains how we use cookies, your control over them, and our approach under GDPR, CCPA, and UAE PDPL.
          </p>
          <p className="mt-4 text-sm text-gray-300">
            Last updated: {lastUpdated}
          </p>
        </div>
        {/* Background Effect: Simple blurred circle */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Main Content Card */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-8 relative z-20 pb-20">

        {/* Introduction Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 border-l-4 border-[#2C727B]">
          <p className="text-gray-700 leading-relaxed">
            A cookie is a small text file stored on your device when you visit a website. Cookies help us understand how you interact with our content, remember your preferences, and improve your overall experience. This Cookie Policy is designed to comply with <strong className="text-[#1A394E]">GDPR (EU/UK), CCPA/CPRA (California), and UAE PDPL (Dubai)</strong>.
          </p>
        </div>

        {/* Detailed Table of Cookies */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 mb-8">
          <div className="bg-[#1A394E] px-6 py-4">
            <h2 className="text-xl md:text-2xl font-bold text-white">How We Use Cookies</h2>
            <p className="text-gray-300 text-sm mt-1">We categorize cookies as follows. Your consent applies to our domain unless you manage your preferences.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left p-4 font-semibold text-[#1A394E] w-1/4">Type of Cookie</th>
                  <th className="text-left p-4 font-semibold text-[#1A394E] w-2/4">Purpose & Usage</th>
                  <th className="text-left p-4 font-semibold text-[#1A394E] w-1/4">Legal Basis & Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {cookieTableData.map((cookie, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-medium text-gray-900 align-top">{cookie.name}</td>
                    <td className="p-4 text-gray-600 leading-relaxed align-top">{cookie.purpose}</td>
                    <td className="p-4 text-gray-500 text-sm align-top">
                      <span className="block font-medium text-[#2C727B] mb-1">{cookie.legalBasis}</span>
                      {cookie.typicalDuration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Third-Party & Social Media Cookies */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-8 border border-gray-100">
          <h2 className="text-xl font-bold text-[#1A394E] mb-3">Third‑Party & Social Media Cookies</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our website may contain embedded content from third‑party services (e.g., YouTube, LinkedIn, Twitter). These services may place their own cookies on your device. We do not control the setting of these cookies and encourage you to check the privacy policies of these third‑party providers.
          </p>
          <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-600">
            <span className="font-semibold text-[#1A394E]">Example Providers:</span> YouTube, Vimeo, LinkedIn, Twitter, Facebook (Meta). These platforms may use cookies for video playback, social sharing buttons, and embedded feeds.
          </div>
        </div>

        {/* User Rights & Control */}
        <div className="bg-gradient-to-br from-[#2C727B]/5 to-[#1A394E]/5 rounded-2xl p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-[#1A394E] mb-3">Your Control & Rights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 font-medium mb-2">🛠 How to manage or delete cookies:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                <li>Browser settings (e.g., Chrome, Safari, Firefox, Edge)</li>
                <li>Our cookie preference center (available on first visit)</li>
                <li>Device privacy controls (iOS, Android)</li>
              </ul>
              <p className="text-gray-600 text-sm mt-3">
                <strong>Opt‑out tools:</strong> You can also opt out of interest‑based advertising via the <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-[#2C727B] hover:underline">Digital Advertising Alliance</a> or the <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="text-[#2C727B] hover:underline">European Interactive Digital Advertising Alliance</a>.
              </p>
            </div>
            <div>
              <p className="text-gray-700 font-medium mb-2">🌍 Your legal rights under applicable law:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                <li><span className="font-semibold">GDPR / UK GDPR:</span> Right to withdraw consent anytime without affecting the lawfulness of processing based on consent before its withdrawal.</li>
                <li><span className="font-semibold">CCPA / CPRA:</span> Right to opt‑out of the “sale” or “sharing” of your personal information (including for cross‑context behavioral advertising).</li>
                <li><span className="font-semibold">UAE PDPL:</span> Right to be informed about how your data is processed.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Changes & Contact */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border border-gray-100 mb-8">
          <h2 className="text-xl font-bold text-[#1A394E] mb-3">Policy Updates & Contact Information</h2>
          <p className="text-gray-600 mb-4">
            We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our operational practices. We will notify you of any material changes by updating the “Last Updated” date at the top of this page.
          </p>
          <p className="text-gray-600">
            If you have any questions about our use of cookies or this policy, please reach out via our <Link href="/contact" className="text-[#2C727B] font-semibold hover:underline">contact page</Link>.
          </p>
        </div>

        {/* Related Documents (Internal Linking) */}
        <div className="flex flex-wrap justify-center gap-4 pt-4 text-sm text-gray-500 border-t border-gray-200">
          <Link href="/privacy-policy" className="hover:text-[#2C727B] transition-colors">Privacy Policy</Link>
          <span className="text-gray-300">|</span>
          <Link href="/legal" className="hover:text-[#2C727B] transition-colors">Legal Notice</Link>
          <span className="text-gray-300">|</span>
          <Link href="/contact" className="hover:text-[#2C727B] transition-colors">Contact Us</Link>
        </div>
      </div>
    </main>
  );
}