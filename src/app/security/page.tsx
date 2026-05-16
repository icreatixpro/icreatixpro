// app/security/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield, Lock, Eye, Server, AlertTriangle, Mail,
  Sparkles, CheckCircle, Database,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Security Policy | iCreatixPRO Data Protection Guide",
  description:
    "Learn how iCreatixPRO protects your data with advanced security systems, encryption standards, monitoring, and safe infrastructure practices.",
  alternates: {
    canonical: "https://icreatixpro.com/security",
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
    title: "Security Policy | iCreatixPRO Data Protection Guide",
    description:
      "Explore how iCreatixPRO ensures platform security using encryption, monitoring systems, and modern web protection standards.",
    url: "https://icreatixpro.com/security",
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

export default function SecurityPage() {
  const lastUpdated = "May 2026";

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Security Policy",
    url: "https://icreatixpro.com/security",
    description:
      "Security policy explaining how iCreatixPRO protects user data with encryption and secure infrastructure.",
    publisher: {
      "@type": "Organization",
      name: "iCreatixPRO",
      url: "https://icreatixpro.com",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://icreatixpro.com/" },
        { "@type": "ListItem", position: 2, name: "Security", item: "https://icreatixpro.com/security" },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 px-6 md:pt-28 md:pb-20 bg-gradient-to-br from-[#1A394E] via-[#2C727B] to-[#1A394E]">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Shield className="w-4 h-4 text-[#2C727B]" />
            <span className="text-sm text-white/90 font-semibold">Your Security, Our Priority</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Security <span className="text-[#2C727B]">Policy</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            iCreatixPRO employs enterprise‑grade security measures to protect your data, maintain platform integrity, and ensure a safe user experience.
          </p>
          <p className="mt-2 text-sm text-gray-300">Last updated: {lastUpdated}</p>
        </div>
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Main Content Card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8 relative z-20 pb-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
          <div className="bg-gray-50 rounded-xl p-5 mb-8 border-l-4 border-[#2C727B]">
            <p className="text-gray-700">
              At <strong>iCreatixPRO</strong>, we take security seriously. This Security Policy outlines the technical and organisational measures we implement to safeguard your personal data, prevent unauthorised access, and ensure the confidentiality, integrity, and availability of our systems.
            </p>
          </div>

          <Section title="1. Data Encryption" icon={Lock}>
            <p>
              All data transmitted between your browser and our servers is encrypted using <strong>TLS 1.3</strong> (Transport Layer Security). Sensitive information stored in our databases is encrypted at rest using <strong>AES-256</strong> (Advanced Encryption Standard). We also encrypt backups and any data shared with trusted third‑party service providers.
            </p>
          </Section>

          <Section title="2. Infrastructure Security" icon={Server}>
            <p>Our infrastructure is hosted on secure, ISO 27001‑certified cloud platforms (Google Cloud Platform, AWS, Kinsta). We implement:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>DDoS Protection:</strong> Multi‑layer distributed denial‑of‑service mitigation.</li>
              <li><strong>Firewalls & IDS/IPS:</strong> Next‑gen firewalls and intrusion detection/prevention systems.</li>
              <li><strong>Regular Vulnerability Scans:</strong> Automated and manual penetration testing.</li>
              <li><strong>Web Application Firewall (WAF):</strong> Blocks malicious requests and SQL injection attempts.</li>
            </ul>
          </Section>

          <Section title="3. Access Control & Authentication" icon={Eye}>
            <p>We enforce the principle of least privilege and implement:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Multi‑Factor Authentication (MFA):</strong> Required for all staff and admins.</li>
              <li><strong>Role‑Based Access Control (RBAC):</strong> Permissions are granted only as needed.</li>
              <li><strong>Regular Access Reviews:</strong> Quarterly audits of user privileges.</li>
              <li><strong>Strong Password Policies:</strong> Minimum complexity, rotation, and secure storage (bcrypt/Argon2).</li>
            </ul>
          </Section>

          <Section title="4. Monitoring & Incident Response" icon={AlertTriangle}>
            <p>Our security operations centre (SOC) monitors systems 24/7 for anomalous activity. We maintain an incident response plan that includes immediate containment, forensic analysis, and notification of affected users and regulators as required by law (e.g., GDPR 72‑hour breach notification).</p>
          </Section>

          <Section title="5. Data Backup & Disaster Recovery" icon={Database}>
            <p>We perform automated daily backups of all critical systems and databases. Backups are encrypted and stored in geographically redundant locations. Our disaster recovery plan ensures minimal downtime (RTO &lt; 4 hours) and near‑zero data loss (RPO &lt; 24 hours).</p>
          </Section>

          <Section title="6. Third‑Party Security" icon={Shield}>
            <p>All third‑party service providers undergo thorough security assessments and must sign data processing agreements (DPAs) that require compliance with GDPR, CCPA, and other applicable regulations.</p>
          </Section>

          <Section title="7. User Responsibilities">
            <p>Users play a role in keeping their data safe:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Use strong, unique passwords.</li>
              <li>Enable MFA where available.</li>
              <li>Report suspicious activity to <strong className="text-[#2C727B]">icreatixpro@gmail.com</strong>.</li>
            </ul>
          </Section>

          <Section title="8. Compliance & Certifications" icon={CheckCircle}>
            <p>iCreatixPRO maintains compliance with:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>GDPR (EU/UK)</strong> – Data protection and breach notification.</li>
              <li><strong>CCPA/CPRA (California)</strong> – Consumer privacy rights.</li>
              <li><strong>UAE PDPL</strong> – Local data protection law.</li>
              <li><strong>PCI DSS (Level 1)</strong> – For any payment transactions (via secure payment gateways).</li>
            </ul>
          </Section>

          <Section title="9. Reporting a Vulnerability" icon={Mail}>
            <p>If you discover a security vulnerability in our systems, please report it to <strong className="text-[#2C727B]">icreatixpro@gmail.com</strong>. We operate a responsible disclosure policy.</p>
          </Section>

          <Section title="10. Policy Updates">
            <p>This Security Policy may be updated from time to time. The “Last updated” date indicates when the policy was last revised. Please review this page periodically.</p>
          </Section>
          <div className="mt-8 p-5 bg-gray-50 rounded-xl text-center">
            <p className="text-gray-700">
              For more information, please also review our{" "}
              <Link href="/privacy-policy" className="text-[#2C727B] font-semibold hover:underline">
                Privacy Policy
              </Link>,{" "}
              <Link href="/cookies" className="text-[#2C727B] font-semibold hover:underline">
                Cookie Policy
              </Link>,{" "}
              <Link href="/gdpr" className="text-[#2C727B] font-semibold hover:underline">
                GDPR Policy
              </Link>, and{" "}
              <Link href="/legal" className="text-[#2C727B] font-semibold hover:underline">
                Legal Notice
              </Link>.
            </p>
          </div>
        </div>

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