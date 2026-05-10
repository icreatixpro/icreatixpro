// app/privacy-policy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, Eye, FileText, Mail, Sparkles, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | iCreatixPRO Data & Security Guide",
  description:
    "Learn how iCreatixPRO collects, uses, and protects your personal data with strong security, privacy practices, and transparent user policies.",
  alternates: {
    canonical: "https://icreatixpro.com/privacy-policy/",
  },
  openGraph: {
    title: "Privacy Policy | iCreatixPRO Data & Security Guide",
    description:
      "Understand how iCreatixPRO handles user data, privacy protection, cookies usage, and security practices for a safe digital experience.",
    url: "https://icreatixpro.com/privacy-policy/",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | iCreatixPRO",
    description:
      "Learn how iCreatixPRO protects your data with secure, transparent, and user-focused privacy policies.",
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

export default function PrivacyPolicyPage() {
  const lastUpdated = "May 2026";

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: "https://icreatixpro.com/privacy-policy/",
    description:
      "Privacy policy explaining how iCreatixPRO collects, uses, and protects user data securely and transparently.",
    publisher: {
      "@type": "Organization",
      name: "iCreatixPRO",
      url: "https://icreatixpro.com",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://icreatixpro.com/" },
        { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://icreatixpro.com/privacy-policy/" },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 px-6 md:pt-28 md:pb-20 bg-gradient-to-br from-[#1A394E] via-[#2C727B] to-[#1A394E]">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Shield className="w-4 h-4 text-[#2C727B]" />
            <span className="text-sm text-white/90 font-semibold">Your Privacy Matters</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Privacy <span className="text-[#2C727B]">Policy</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            iCreatixPRO is committed to protecting your personal data and respecting your privacy rights under GDPR, CCPA, and other applicable laws.
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
              At <strong>iCreatixPRO</strong>, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. We comply with the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other relevant privacy frameworks.
            </p>
          </div>

          <Section title="1. Information We Collect" icon={Eye}>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Personal Identifiers:</strong> Name, email address, phone number, company name (when you fill out our contact forms).</li>
              <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on pages, referring URLs.</li>
              <li><strong>Cookies & Tracking Technologies:</strong> See our <Link href="/cookies" className="text-[#2C727B] hover:underline">Cookie Policy</Link> for details.</li>
              <li><strong>Communication Data:</strong> Any information you provide when you contact us via email or chat.</li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Information" icon={Sparkles}>
            <p>We use your personal data for the following purposes:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>To respond to your inquiries and provide customer support.</li>
              <li>To improve our website, services, and user experience.</li>
              <li>To analyse website traffic and performance using tools like Google Analytics (anonymised where possible).</li>
              <li>To send you marketing communications (only with your explicit consent).</li>
              <li>To comply with legal obligations and protect our legal rights.</li>
            </ul>
          </Section>

          <Section title="3. Legal Basis for Processing (GDPR)" icon={Lock}>
            <p>If you are located in the European Economic Area (EEA) or the UK, we process your personal data based on the following legal grounds:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Consent:</strong> You have given clear consent for us to process your data (e.g., newsletter signup).</li>
              <li><strong>Contract:</strong> Processing is necessary for a contract we are about to enter or have entered with you.</li>
              <li><strong>Legitimate Interest:</strong> Processing is necessary for our legitimate business interests (provided your rights do not override them).</li>
              <li><strong>Compliance with Law:</strong> Processing is necessary to comply with a legal obligation.</li>
            </ul>
          </Section>

          <Section title="4. Sharing Your Information">
            <p>We do not sell or rent your personal data to third parties. We may share your information with:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Service Providers:</strong> Trusted third parties who assist us in operating our website (e.g., hosting, analytics, email delivery) – under strict data processing agreements.</li>
              <li><strong>Legal Requirements:</strong> If required by law, court order, or government regulation.</li>
            </ul>
          </Section>

          <Section title="5. Your Privacy Rights" icon={CheckCircle}>
            <p>Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data.</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your data ("right to be forgotten").</li>
              <li><strong>Right to Restrict Processing:</strong> Limit how we use your data.</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a machine-readable format.</li>
              <li><strong>Right to Object:</strong> Object to processing based on legitimate interests.</li>
              <li><strong>Right to Withdraw Consent:</strong> At any time, without affecting the lawfulness of processing before withdrawal.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at <strong className="text-[#2C727B]">icreatixpro@gmail.com</strong>.
            </p>
          </Section>

          <Section title="6. Data Security" icon={Lock}>
            <p>
              We implement industry‑standard technical and organisational measures to protect your personal data against unauthorised access, loss, or misuse. These include SSL encryption, firewalls, access controls, and regular security audits. However, no method of transmission over the internet is 100% secure – you use our website at your own risk.
            </p>
          </Section>

          <Section title="7. Data Retention">
            <p>
              We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law (e.g., tax, legal, or accounting records). After that, your data is securely deleted or anonymised.
            </p>
          </Section>

          <Section title="8. Children's Privacy">
            <p>
              Our website is not intended for children under 16. We do not knowingly collect personal data from minors. If you believe we have inadvertently collected such data, please contact us so we can delete it.
            </p>
          </Section>

          <Section title="9. International Data Transfers">
            <p>
              Since our operations are based in the UAE, your data may be transferred to and processed in the UAE. The UAE has not received an adequacy decision from the European Commission. We ensure appropriate safeguards (such as Standard Contractual Clauses) are in place to protect your data when transferred from the EEA or UK.
            </p>
          </Section>

          <Section title="10. Cookies & Tracking">
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience and analyse traffic. For detailed information, please see our <Link href="/cookies" className="text-[#2C727B] hover:underline">Cookie Policy</Link>, which includes instructions on how to manage your preferences.
            </p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this page periodically.
            </p>
          </Section>

          <Section title="12. Contact Us" icon={Mail}>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-3">
              <p><strong>Email:</strong> icreatixpro@gmail.com</p>
              <p className="mt-1"><strong>Address:</strong> iCreatixPRO, UK, United Kingdom</p>
              <p className="mt-1"><strong>Response Time:</strong> We aim to respond to all privacy inquiries within 5 business days.</p>
            </div>
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

        {/* Footer Internal Links (Approved URLs Only) */}
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