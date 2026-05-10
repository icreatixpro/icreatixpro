// app/accessibility/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { 
  Eye, Keyboard, Shield, CheckCircle, 
  Sparkles, Users, BookOpen, Globe, 
  Monitor, Smartphone, Heart, Star, 
  ArrowRight, Menu, X, ChevronDown, Home
} from "lucide-react";

export const metadata: Metadata = {
  title: "Accessibility Standards & Inclusive Web Design | iCreatixPRO",
  description:
    "iCreatixPRO is committed to WCAG 2.2 compliance, inclusive design, and accessible user experiences for all. Learn about our accessibility standards and practices.",
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
  keywords: [
    "WCAG 2.2",
    "accessibility standards",
    "inclusive design",
    "web accessibility",
    "WCAG compliance",
    "accessible web design",
    "ADA compliance",
    "section 508",
  ],
  alternates: {
    canonical: "https://icreatixpro.com/accessibility/",
  },
  openGraph: {
    title: "Accessibility Standards & Inclusive Web Design | iCreatixPRO",
    description:
      "iCreatixPRO is committed to WCAG 2.2 compliance, inclusive design, and accessible user experiences for all. Learn about our accessibility standards and practices.",
    url: "https://icreatixpro.com/accessibility/",
    siteName: "iCreatixPRO",
    type: "website",
    images: [
      {
        url: "https://icreatixpro.com/og/accessibility-og.jpg",
        width: 1200,
        height: 630,
        alt: "iCreatixPRO Accessibility Standards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility Standards | iCreatixPRO",
    description:
      "iCreatixPRO is committed to WCAG 2.2 compliance, inclusive design, and accessible user experiences for all.",
    images: ["https://icreatixpro.com/og/accessibility-og.jpg"],
  },
};

export const revalidate = 86400;

// ===============================
// ✅ SCHEMA - WebPage + Breadcrumb
// ===============================
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
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://icreatixpro.com/accessibility/",
  },
};

const breadcrumbSchema = {
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

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  name: "iCreatixPRO Accessibility Ratings",
  ratingValue: "4.9",
  bestRating: "5",
  ratingCount: 127,
  reviewCount: 127,
  itemReviewed: {
    "@type": "Organization",
    name: "iCreatixPRO",
    url: "https://icreatixpro.com",
  },
};

export default function AccessibilityPage() {
  const lastUpdated = "June 2026";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 px-6 md:pt-28 md:pb-20 bg-gradient-to-br from-[#1A394E] via-[#2C727B] to-[#1A394E]">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Eye className="w-4 h-4 text-[#2C727B]" />
              <span className="text-sm text-white/90 font-semibold">Inclusive by Design</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Accessibility Standards &{" "}
              <span className="bg-gradient-to-r from-[#2C727B] via-white to-[#2C727B] bg-clip-text text-transparent">
                Inclusive Web Design
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
              iCreatixPRO is committed to creating accessible digital experiences that empower everyone, regardless of ability. Our websites are designed, developed, and tested to meet WCAG 2.2 Level AA standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                href="#wcag"
                className="group px-6 py-2.5 bg-white text-[#1A394E] font-semibold rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Learn About WCAG
                <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Content Wrapper */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8 relative z-20 pb-20">
          {/* Main Content Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">

            {/* Section 1: Our Commitment */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-[#2C727B]" />
                <h2 className="text-2xl font-bold text-[#1A394E]">Our Commitment</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                At iCreatixPRO, we believe that the web should be accessible to all. We are dedicated to designing, developing, and testing our websites and applications to comply with the <strong className="text-[#2C727B]">Web Content Accessibility Guidelines (WCAG) 2.2 Level AA</strong>. Our goal is to create inclusive digital experiences that work for everyone, including people with visual, auditory, motor, or cognitive disabilities.
              </p>
            </div>

            {/* Section 2: WCAG 2.2 Standards */}
            <div id="wcag" className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-[#2C727B]" />
                <h2 className="text-2xl font-bold text-[#1A394E]">WCAG 2.2 Standards</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Principle Cards */}
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-[#1A394E] mb-3">1. Perceivable</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">✓ Text alternatives for non-text content</li>
                    <li className="flex items-start gap-2">✓ Captions and other alternatives for multimedia</li>
                    <li className="flex items-start gap-2">✓ Content adaptable for assistive technologies</li>
                    <li className="flex items-start gap-2">✓ Distinguishable foreground/background contrast</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-[#1A394E] mb-3">2. Operable</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">✓ Keyboard-accessible navigation and functionality</li>
                    <li className="flex items-start gap-2">✓ Users have enough time to read and use content</li>
                    <li className="flex items-start gap-2">✓ No content that causes seizures or physical reactions</li>
                    <li className="flex items-start gap-2">✓ Clear navigation and orientation aids</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-[#1A394E] mb-3">3. Understandable</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">✓ Readable and understandable text content</li>
                    <li className="flex items-start gap-2">✓ Content appears and operates in predictable ways</li>
                    <li className="flex items-start gap-2">✓ Input assistance to help users avoid mistakes</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-[#1A394E] mb-3">4. Robust</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">✓ Compatible with current and future user tools</li>
                    <li className="flex items-start gap-2">✓ Maximizes compatibility with assistive technologies</li>
                    <li className="flex items-start gap-2">✓ Semantic HTML and valid code</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-xl text-sm text-gray-700">
                <p><strong className="text-[#2C727B]">WCAG 2.2 Update:</strong> In addition to all WCAG 2.1 success criteria, WCAG 2.2 introduces nine new requirements including Focus Appearance, Dragging Movements, Target Size, Consistent Help, Redundant Entry, and Accessible Authentication. We actively implement these enhanced criteria to ensure the best possible experience for all users.</p>
              </div>
            </div>

            {/* Section 3: Accessibility Features */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-[#2C727B]" />
                <h2 className="text-2xl font-bold text-[#1A394E]">Accessibility Features We Implement</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3 bg-white border border-gray-100 rounded-xl">
                  <Keyboard className="w-5 h-5 text-[#2C727B] mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Full Keyboard Navigation</h3>
                    <p className="text-sm text-gray-600">All interactive elements are accessible via keyboard alone.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white border border-gray-100 rounded-xl">
                  <Eye className="w-5 h-5 text-[#2C727B] mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">High Contrast & Focus Indicators</h3>
                    <p className="text-sm text-gray-600">Clear visual focus states and sufficient color contrast ratios.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white border border-gray-100 rounded-xl">
                  <Monitor className="w-5 h-5 text-[#2C727B] mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Screen Reader Optimization</h3>
                    <p className="text-sm text-gray-600">ARIA labels, semantic HTML, and proper heading hierarchy.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white border border-gray-100 rounded-xl">
                  <Smartphone className="w-5 h-5 text-[#2C727B] mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Responsive & Scalable Content</h3>
                    <p className="text-sm text-gray-600">Content adapts to screen size and can be zoomed without loss.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: User Personas */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-[#2C727B]" />
                <h2 className="text-2xl font-bold text-[#1A394E]">Designed with All Users in Mind</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                  <h3 className="font-semibold text-gray-900">👤 For Users with Visual Impairments</h3>
                  <p className="text-sm text-gray-600 mt-1">Proper contrast ratios, scalable text, and screen reader compatibility for users who are blind or have low vision.</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                  <h3 className="font-semibold text-gray-900">👤 For Users with Motor Disabilities</h3>
                  <p className="text-sm text-gray-600 mt-1">Full keyboard navigation, focus indicators, and large click targets for users with limited fine motor control.</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                  <h3 className="font-semibold text-gray-900">👤 For Users with Cognitive Disabilities</h3>
                  <p className="text-sm text-gray-600 mt-1">Clear language, consistent navigation, error prevention, and predictable interactions.</p>
                </div>
              </div>
            </div>

            {/* Section 5: Testing Tools & Compliance */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-[#2C727B]" />
                <h2 className="text-2xl font-bold text-[#1A394E]">Testing & Compliance</h2>
              </div>
              <p className="text-gray-600 mb-3">We employ a comprehensive accessibility testing program that includes:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Automated testing using axe-core, Lighthouse, and WAVE</li>
                <li>Manual testing with keyboard-only navigation</li>
                <li>Screen reader testing (NVDA, JAWS, VoiceOver, TalkBack)</li>
                <li>Color contrast analysis with WCAG contrast checkers</li>
                <li>User testing with people who have disabilities</li>
              </ul>
              <p className="text-gray-600 mt-3">Our websites are designed to meet <strong>ADA Title III, Section 508, EN 301 549, and AODA</strong> requirements, where applicable.</p>
            </div>

            {/* Section 6: Resources */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-[#2C727B]" />
                <h2 className="text-2xl font-bold text-[#1A394E]">Accessibility Resources</h2>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer" className="text-[#2C727B] hover:underline">Web Content Accessibility Guidelines (WCAG) Overview</Link></li>
                <li><Link href="https://www.w3.org/WAI/WCAG22/quickref/" target="_blank" rel="noopener noreferrer" className="text-[#2C727B] hover:underline">WCAG 2.2 Quick Reference</Link></li>
                <li><Link href="https://www.section508.gov/" target="_blank" rel="noopener noreferrer" className="text-[#2C727B] hover:underline">U.S. Section 508 Standards</Link></li>
                <li><Link href="https://www.ada.gov/resources/web-guidance/" target="_blank" rel="noopener noreferrer" className="text-[#2C727B] hover:underline">ADA Web Guidance</Link></li>
              </ul>
            </div>

            {/* Section 7: Feedback */}
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-[#1A394E] mb-2">Continuous Improvement</h3>
              <p className="text-gray-600">
                We are committed to making this website accessible to all. If you encounter any accessibility barriers, please contact us so we can address the issue promptly.
              </p>
              <Link href="/contact">
                <button className="mt-4 px-6 py-2.5 bg-[#2C727B] text-white font-semibold rounded-full shadow-md hover:bg-[#1A394E] transition-all inline-flex items-center gap-2">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>

          {/* Footer Internal Links (Approved URLs Only) */}
          <div className="text-center pb-12 text-sm text-gray-400 pt-8">
            <Link href="/" className="hover:text-[#2C727B] transition-colors">Home</Link>
            <span className="mx-2">|</span>
            <Link href="/about" className="hover:text-[#2C727B] transition-colors">About</Link>
            <span className="mx-2">|</span>
            <Link href="/services" className="hover:text-[#2C727B] transition-colors">Services</Link>
            <span className="mx-2">|</span>
            <Link href="/contact" className="hover:text-[#2C727B] transition-colors">Contact</Link>
            <span className="mx-2">|</span>
            <Link href="/blogs" className="hover:text-[#2C727B] transition-colors">Blog</Link>
            <p className="mt-4 text-gray-400 text-xs">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </main>
    </>
  );
}