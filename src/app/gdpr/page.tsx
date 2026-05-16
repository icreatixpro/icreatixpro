// app/gdpr/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, Eye, FileText, Mail, Sparkles, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "GDPR Compliance Policy | Data Protection | iCreatixPRO",
  description:
    "Learn how iCreatixPRO ensures GDPR compliance, user data protection, privacy rights, and secure handling of personal information.",
  alternates: {
    canonical: "https://icreatixpro.com/gdpr",
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
    title: "GDPR Compliance Policy | iCreatixPRO",
    description:
      "Understand how iCreatixPRO protects user data with GDPR compliance, privacy standards, and secure data practices.",
    url: "https://icreatixpro.com/gdpr",
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

export const revalidate = 86400;

// Helper component for consistent sections
const Section = ({ title, icon: Icon, children }: { title: string; icon?: React.ElementType; children: React.ReactNode }) => (
  <div className="mb-8">
    <div className="flex items-center gap-2 mb-3">
      {Icon && <Icon className="w-5 h-5 text-[#2C727B]" />}
      <h2 className="text-xl md:text-2xl font-semibold text-[#1A394E]">{title}</h2>
    </div>
    <div className="text-gray-600 leading-relaxed pl-0 md:pl-7">{children}</div>
  </div>
);

export default function GDPRPage() {
  const lastUpdated = "May 2026";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "GDPR Compliance Policy",
    url: "https://icreatixpro.com/gdpr",
    description:
      "GDPR compliance policy explaining how iCreatixPRO protects user data and privacy rights.",
    publisher: {
      "@type": "Organization",
      name: "iCreatixPRO",
      url: "https://icreatixpro.com",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://icreatixpro.com/" },
        { "@type": "ListItem", position: 2, name: "GDPR", item: "https://icreatixpro.com/gdpr" },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 px-6 md:pt-28 md:pb-20 bg-gradient-to-br from-[#1A394E] via-[#2C727B] to-[#1A394E]">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Shield className="w-4 h-4 text-[#2C727B]" />
            <span className="text-sm text-white/90 font-semibold">Data Protection</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            GDPR <span className="text-[#2C727B]">Compliance</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            iCreatixPRO is fully committed to protecting your personal data and respecting your privacy rights under GDPR (EU) and UK GDPR.
          </p>
          <p className="mt-2 text-sm text-gray-300">Last updated: {lastUpdated}</p>
        </div>
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Main Content Card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8 relative z-20 pb-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
          
          {/* Introduction */}
          <div className="bg-gray-50 rounded-xl p-5 mb-8 border-l-4 border-[#2C727B]">
            <p className="text-gray-700">
              At <strong>iCreatixPRO</strong>, we take data privacy seriously. This GDPR Compliance page explains how we collect, use, and protect your personal information in accordance with the General Data Protection Regulation (EU) 2016/679 and the UK GDPR.
            </p>
          </div>

          <Section title="1. Data Controller Information" icon={FileText}>
            <p>
              <strong>iCreatixPRO</strong> is the data controller for any personal data you provide to us through our website, contact forms, or email communications. Our registered office is in Dubai, UAE. For GDPR-related inquiries, please contact our Data Protection Officer at <strong className="text-[#2C727B]">icreatixpro@gmail.com</strong>.
            </p>
          </Section>

          <Section title="2. What Data We Collect" icon={Eye}>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name, email address, and phone number (when you fill out contact forms)</li>
              <li>IP address, browser type, and usage data via cookies (see our <Link href="/cookies" className="text-[#2C727B] hover:underline">Cookie Policy</Link>)</li>
              <li>Any information you voluntarily provide in messages or support requests</li>
            </ul>
          </Section>

          <Section title="3. Legal Basis for Processing" icon={CheckCircle}>
            <p>
              We process your personal data only when we have a lawful basis under GDPR, including:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Consent:</strong> You have given clear consent for us to process your data (e.g., newsletter signup).</li>
              <li><strong>Contract:</strong> Processing is necessary for a contract we are about to enter or have entered with you.</li>
              <li><strong>Legitimate interest:</strong> Processing is necessary for our legitimate business interests, provided your rights do not override them.</li>
            </ul>
          </Section>

          <Section title="4. Your Rights Under GDPR" icon={Lock}>
            <p>As an EU/UK resident, you have the following rights:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Right to access</strong> – request a copy of your personal data.</li>
              <li><strong>Right to rectification</strong> – correct inaccurate or incomplete data.</li>
              <li><strong>Right to erasure</strong> (“right to be forgotten”) – request deletion of your data.</li>
              <li><strong>Right to restrict processing</strong> – limit how we use your data.</li>
              <li><strong>Right to data portability</strong> – receive your data in a machine-readable format.</li>
              <li><strong>Right to object</strong> – object to processing based on legitimate interests.</li>
              <li><strong>Right to withdraw consent</strong> – at any time, without affecting the lawfulness of processing before withdrawal.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at <strong>icreatixpro@gmail.com</strong>.
            </p>
          </Section>

          <Section title="5. Data Security & Retention" icon={Shield}>
            <p>
              We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. Data is retained only for as long as necessary to fulfil the purposes for which it was collected, or as required by law (e.g., tax records). After that, it is securely deleted or anonymised.
            </p>
          </Section>

          <Section title="6. Third-Party Data Sharing" icon={Shield}>
            <p>
              We do not sell or rent your personal data to third parties. We may share data with trusted service providers who assist us in operating our website (e.g., analytics, hosting), but only under strict data processing agreements that comply with GDPR. These providers are located within the EEA or in countries with adequacy decisions.
            </p>
          </Section>

          <Section title="7. International Data Transfers">
            <p>
              Since our operations are based in the UAE, your data may be transferred to and processed in the UAE. The UAE has not received an adequacy decision from the European Commission, but we ensure that appropriate safeguards (such as Standard Contractual Clauses) are in place to protect your data.
            </p>
          </Section>

          <Section title="8. Cookies & Tracking Technologies" icon={Sparkles}>
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience and analyse website traffic. For detailed information, please review our <Link href="/cookies" className="text-[#2C727B] hover:underline">Cookie Policy</Link>, which includes instructions on how to manage your cookie preferences.
            </p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>
              We may update this GDPR Compliance page from time to time to reflect changes in legal requirements or our data processing practices. Any changes will be posted on this page with an updated “Last updated” date. We encourage you to review this page periodically.
            </p>
          </Section>

          <Section title="10. Contact & Complaints" icon={Mail}>
            <p>
              If you have any questions or concerns about our GDPR compliance, or if you wish to exercise your data rights, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-2">
              <p><strong>Email:</strong> icreatixpro@gmail.com</p>
              <p className="mt-1"><strong>Address:</strong> iCreatixPRO, UK, United Kingdom</p>
            </div>
            <p className="mt-3">
              You also have the right to lodge a complaint with your local supervisory authority (e.g., the ICO in the UK or your national Data Protection Authority).
            </p>
          </Section>

          {/* Reference to other legal documents */}
          <div className="mt-8 p-5 bg-gray-50 rounded-xl text-center">
            <p className="text-gray-700">
              For more information, please also review our{" "}
              <Link href="/legal" className="text-[#2C727B] font-semibold hover:underline">Legal Notice</Link>,{" "}
              <Link href="/cookies" className="text-[#2C727B] font-semibold hover:underline">Cookie Policy</Link>, and{" "}
              <Link href="/disclaimer" className="text-[#2C727B] font-semibold hover:underline">Disclaimer</Link>.
            </p>
          </div>
        </div>

        {/* Footer internal links (only approved URLs) */}
        <div className="flex flex-wrap justify-center gap-4 pt-8 text-sm text-gray-400 border-t border-gray-200 mt-8">
          <Link href="/" className="hover:text-[#2C727B] transition-colors">Home</Link>
          <span className="text-gray-300">|</span>
          <Link href="/about" className="hover:text-[#2C727B] transition-colors">About</Link>
          <span className="text-gray-300">|</span>
          <Link href="/services" className="hover:text-[#2C727B] transition-colors">Services</Link>
          <span className="text-gray-300">|</span>
          <Link href="/contact" className="hover:text-[#2C727B] transition-colors">Contact</Link>
        </div>
      </div>
    </main>
  );
}