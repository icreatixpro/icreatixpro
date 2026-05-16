// app/terms/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { 
  FileText, Scale, Gavel, Shield, 
  AlertTriangle, Mail, Sparkles, CheckCircle 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | iCreatixPRO Legal Guide",
  description:
    "Read iCreatixPRO terms and conditions covering website usage, legal rights, user responsibilities, and platform policies for safe usage.",
alternates: {
  canonical: "/terms",
},
  openGraph: {
    title: "Terms & Conditions | iCreatixPRO Legal Guide",
    description:
      "Understand iCreatixPRO terms of use, legal policies, and user responsibilities when accessing our website and services.",
    url: "https://icreatixpro.com/terms/",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | iCreatixPRO",
    description:
      "Read iCreatixPRO terms, legal guidelines, and usage policies for safe platform access.",
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

export default function TermsPage() {
  const lastUpdated = "May 2026";

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms & Conditions",
    url: "https://icreatixpro.com/terms/",
    description:
      "Terms and conditions for using iCreatixPRO services and website.",
    publisher: {
      "@type": "Organization",
      name: "iCreatixPRO",
      url: "https://icreatixpro.com",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://icreatixpro.com/" },
        { "@type": "ListItem", position: 2, name: "Terms & Conditions", item: "https://icreatixpro.com/terms/" },
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
            <FileText className="w-4 h-4 text-[#2C727B]" />
            <span className="text-sm text-white/90 font-semibold">Legal Agreement</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Terms & <span className="text-[#2C727B]">Conditions</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Please read these Terms carefully. By accessing our website or using our services, you agree to be bound by them.
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
              <strong>iCreatixPRO</strong> ("Company", "we", "our", "us") provides digital marketing, SEO, and AI‑driven growth services. 
              These Terms & Conditions ("Terms") govern your use of our website, tools, and services. By accessing or using our platform, 
              you acknowledge that you have read, understood, and agree to be bound by these Terms, our <Link href="/privacy-policy" className="text-[#2C727B] hover:underline">Privacy Policy</Link>, 
              and any other policies referenced herein.
            </p>
          </div>

          <Section title="1. Acceptance of Terms" icon={CheckCircle}>
            <p>
              By using our website or services, you affirm that you are at least 18 years of age (or have obtained parental consent) 
              and have the legal capacity to enter into this agreement. If you do not agree with any part of these Terms, you must not use 
              our website or services.
            </p>
          </Section>

          <Section title="2. Use of Website & Services" icon={FileText}>
            <p>You agree to use our website and services only for lawful purposes and in accordance with these Terms. Specifically, you agree not to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Violate any applicable laws or regulations.</li>
              <li>Infringe upon the intellectual property rights of iCreatixPRO or any third party.</li>
              <li>Transmit malicious code, viruses, or harmful content.</li>
              <li>Attempt to gain unauthorised access to any part of our systems.</li>
              <li>Engage in any activity that disrupts or degrades the performance of our website or services.</li>
            </ul>
          </Section>

          <Section title="3. Intellectual Property" icon={Scale}>
            <p>
              All content, text, graphics, logos, icons, images, software, and other materials on this website are the exclusive property 
              of iCreatixPRO or its licensors and are protected by UAE and international copyright, trademark, and other intellectual property laws. 
              You may not reproduce, distribute, modify, create derivative works of, publicly display, or republish any content without our prior 
              written consent.
            </p>
          </Section>

          <Section title="4. User Accounts" icon={Shield}>
            <p>
              Certain features may require you to create an account. You are responsible for maintaining the confidentiality of your account 
              credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorised use. 
              We reserve the right to suspend or terminate accounts that violate these Terms.
            </p>
          </Section>

          <Section title="5. Payment & Fees" icon={Gavel}>
            <p>
              For paid services (e.g., SEO consulting, advertising management), fees are as described in your service agreement or proposal. 
              All payments are due according to the agreed schedule (typically monthly retainers). Late payments may result in suspension of services. 
              Fees are non‑refundable unless otherwise stated in a separate agreement.
            </p>
          </Section>

          <Section title="6. Third‑Party Links & Tools" icon={AlertTriangle}>
            <p>
              Our website may contain links to third‑party websites or integrate third‑party tools. We do not endorse or assume any responsibility 
              for the content, privacy policies, or practices of these third parties. Your interactions with them are solely at your own risk.
            </p>
          </Section>

          <Section title="7. Disclaimer of Warranties" icon={Shield}>
            <p>
              Our website and services are provided "as is" and "as available", without any warranties of any kind, either express or implied. 
              We do not warrant that the website will be uninterrupted, error‑free, or free from harmful components. We disclaim all warranties, 
              including implied warranties of merchantability, fitness for a particular purpose, and non‑infringement.
            </p>
          </Section>

          <Section title="8. Limitation of Liability" icon={Gavel}>
            <p>
              To the maximum extent permitted by law, iCreatixPRO shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages arising from your use of or inability to use our website or services, even if we have been advised of the 
              possibility of such damages. Our total aggregate liability shall not exceed the amount you paid us, if any, for the services 
              giving rise to the claim.
            </p>
          </Section>

          <Section title="9. Indemnification">
            <p>
              You agree to indemnify, defend, and hold harmless iCreatixPRO, its affiliates, officers, employees, and agents from any claims, 
              damages, losses, or expenses (including reasonable legal fees) arising out of your violation of these Terms or your use of our 
              website or services.
            </p>
          </Section>

          <Section title="10. Termination" icon={AlertTriangle}>
            <p>
              We may suspend or terminate your access to our website or services at any time, without notice, for any reason, including if 
              you breach these Terms. Upon termination, all rights granted to you under these Terms will cease, and you must immediately 
              stop using our website.
            </p>
          </Section>

          <Section title="11. Governing Law & Dispute Resolution">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the <strong>UK International Financial Centre (UKIFC)</strong> 
              and the United Kingdom. Any dispute arising from or relating to these Terms shall be subject to the exclusive jurisdiction of the 
              courts of UK, USA.
            </p>
          </Section>

          <Section title="12. Changes to These Terms" icon={FileText}>
            <p>
              We reserve the right to update or modify these Terms at any time without prior notice. Any changes will be effective immediately 
              upon posting on this page, with a new "Last updated" date. Your continued use of our website after any changes constitutes 
              acceptance of the revised Terms.
            </p>
          </Section>

          <Section title="13. Contact Us" icon={Mail}>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-2">
              <p><strong>Email:</strong> icreatixpro@gmail.com</p>
              <p className="mt-1"><strong>Address:</strong> iCreatixPRO, UK, United Kingdom</p>
            </div>
          </Section>

          {/* Reference to other legal documents */}
          <div className="mt-8 p-5 bg-gray-50 rounded-xl text-center">
            <p className="text-gray-700">
              Please also review our{" "}
              <Link href="/privacy-policy" className="text-[#2C727B] font-semibold hover:underline">Privacy Policy</Link>,{" "}
              <Link href="/cookies" className="text-[#2C727B] font-semibold hover:underline">Cookie Policy</Link>, and{" "}
              <Link href="/legal" className="text-[#2C727B] font-semibold hover:underline">Legal Notice</Link>.
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