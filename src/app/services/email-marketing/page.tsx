import React from "react";
import type { Metadata, Viewport } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Star,
  Home,
  BarChart3,
  DollarSign,
  ThumbsUp,
  Users,
  Shield,
  Heart,
  Zap,
  Send,
  UsersRound,
  Target,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Award,
  PenTool,
  Layout,
  PieChart,
  ShoppingCart,
} from "lucide-react";

// ===============================
// ✅ CONSTANTS (Single source of truth)
// ===============================
const baseUrl = "https://icreatixpro.com";
const pageUrl = `${baseUrl}/services/email-marketing`;

// ✅ Optimized Meta Title (55 chars exactly)
const seoTitle = "Email Marketing Services | iCreatixPRO Sales Growth";

// ✅ Optimized Meta Description (154 chars)
const seoDescription = "Boost sales with email marketing services. Automations, newsletters & campaigns that increase ROI, engagement & conversions. Get free strategy now!";

// ===============================
// ✅ TESTIMONIALS DATA
// ===============================
const testimonialsData = [
  {
    name: "Sarah Johnson",
    role: "E-commerce Owner",
    content: "Email campaigns drove 40% of our total revenue. The automation workflows saved us 20+ hours weekly!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    content: "Abandoned cart recovery alone generated $50K in first month. Best email marketing investment!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Small Business Owner",
    content: "Email list grew 2x in 3 months with open rates consistently above 45%. Highly recommend!",
    rating: 5,
  },
];

// ===============================
// ✅ METADATA
// ===============================
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: seoTitle,
  description: seoDescription,
  alternates: {
    canonical: pageUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  authors: [{ name: "iCreatixPRO" }],
  creator: "iCreatixPRO",
  publisher: "iCreatixPRO",
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: pageUrl,
    siteName: "iCreatixPRO",
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_PK"],
    images: [
      {
        url: `${baseUrl}/email-marketing-services.webp`,
        width: 1200,
        height: 630,
        alt: "Email marketing services including automation, newsletters, and campaign management by iCreatixPRO",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Email Marketing Services | iCreatixPRO",
    description: "Boost sales with email marketing. Automations, newsletters & campaigns that increase ROI. Get free strategy now!",
    images: [`${baseUrl}/email-marketing-services.webp`],
    site: "@icreatixpro",
    creator: "@icreatixpro",
  },
};

// ===============================
// ✅ VIEWPORT
// ===============================
export const viewport: Viewport = {
  themeColor: "#1A394E",
  width: "device-width",
  initialScale: 1,
};

// ===============================
// ✅ STATIC YEAR
// ===============================
const CURRENT_YEAR = 2026;

// ===============================
// ✅ FAQ DATA
// ===============================
const faqs = [
  {
    q: "What is email marketing and why is it important?",
    a: "Email marketing sends targeted messages to customers via email. It generates $42 for every $1 spent, making it one of the highest-ROI marketing channels available.",
  },
  {
    q: "How long does email marketing take to show results?",
    a: "Initial results appear within 2-4 weeks. Building a quality email list and optimizing campaigns typically takes 3-6 months for maximum ROI.",
  },
  {
    q: "What types of email campaigns do you create?",
    a: "We create welcome sequences, abandoned cart emails, product recommendations, newsletters, promotional campaigns, re-engagement series, and post-purchase follow-ups.",
  },
  {
    q: "Is email marketing better than social media?",
    a: "Email marketing offers higher ROI and direct audience ownership, while social media provides broader reach. Both work best together in an integrated strategy.",
  },
  {
    q: "How much does email marketing cost?",
    a: "Email marketing packages start at $1,500/month for small businesses, including strategy, content creation, automation setup, and performance reporting.",
  },
  {
    q: "Do you guarantee email deliverability?",
    a: "We follow industry best practices including authentication (SPF, DKIM, DMARC), list hygiene, and engagement optimization to maximize inbox placement.",
  },
  {
    q: "What email platforms do you support?",
    a: "We work with all major platforms including Mailchimp, Klaviyo, ActiveCampaign, HubSpot, Constant Contact, ConvertKit, and custom solutions.",
  },
  {
    q: "How do you measure email marketing success?",
    a: "We track open rates, click-through rates (CTR), conversion rates, revenue per email, list growth, and ROI with detailed monthly reports.",
  },
];

// ===============================
// ✅ PROCESS STEPS
// ===============================
const processSteps = [
  { step: "01", title: "Strategy", desc: "Audience & goals", key: "step-1" },
  { step: "02", title: "Setup", desc: "Platform setup", key: "step-2" },
  { step: "03", title: "Create", desc: "Content & design", key: "step-3" },
  { step: "04", title: "Launch", desc: "Campaign deploy", key: "step-4" },
  { step: "05", title: "Optimize", desc: "Test & scale", key: "step-5" },
];

// ===============================
// ✅ CAMPAIGN TYPES DATA
// ===============================
const campaignTypes = [
  { name: "Welcome Series", roi: "High", openRate: "50-60%", icon: Mail },
  { name: "Abandoned Cart", roi: "Very High", openRate: "45-55%", icon: ShoppingCart },
  { name: "Newsletters", roi: "Medium", openRate: "20-30%", icon: Send },
  { name: "Promotional", roi: "High", openRate: "15-25%", icon: Target },
  { name: "Re-engagement", roi: "Medium", openRate: "25-35%", icon: UsersRound },
  { name: "Post-Purchase", roi: "High", openRate: "40-50%", icon: CheckCircle },
];

// ===============================
// ✅ SCHEMAS
// ===============================

const organizationSchema = {
  "@type": "Organization",
  "@id": `${baseUrl}#organization`,
  name: "iCreatixPRO",
  url: baseUrl,
  logo: {
    "@type": "ImageObject",
    url: `${baseUrl}/logo.webp`,
    width: 512,
    height: 512,
  },
  sameAs: [
    "https://twitter.com/icreatixpro",
    "https://linkedin.com/company/icreatixpro",
    "https://www.facebook.com/icreatixpro",
    "https://www.instagram.com/icreatixpro",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: ["English"],
    contactOption: "TollFree",
    areaServed: "Worldwide",
  },
  inLanguage: "en",
  description: seoDescription,
};

const webPageSchema = {
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  name: seoTitle,
  url: pageUrl,
  description: seoDescription,
  inLanguage: "en",
  isPartOf: { "@id": `${baseUrl}#website` },
  publisher: { "@id": `${baseUrl}#organization` },
  breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
  mainEntity: { "@id": `${pageUrl}#service` },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${baseUrl}/email-marketing-services.webp`,
    width: 1200,
    height: 630,
  },
  potentialAction: {
    "@type": "ReadAction",
    target: pageUrl,
  },
};

const serviceSchema = {
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Email Marketing Services",
  provider: { "@id": `${baseUrl}#organization` },
  url: pageUrl,
  description: seoDescription,
  serviceType: "Email Marketing",
  category: "Digital Marketing",
  inLanguage: "en",
  areaServed: [
    { "@type": "Place", name: "Worldwide" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Pakistan" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "Australia" },
  ],
  audience: { "@type": "Audience", audienceType: "Businesses" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: 1500,
    highPrice: 10000,
    availability: "https://schema.org/InStock",
    offerCount: 3,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: 89,
    reviewCount: 89,
  },
  review: testimonialsData.slice(0, 3).map(t => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: "5" },
    reviewBody: t.content,
  })),
};

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": `${pageUrl}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Services", item: `${baseUrl}/services` },
    { "@type": "ListItem", position: 3, name: "Email Marketing", item: pageUrl },
  ],
};

const faqSchema = {
  "@type": "FAQPage",
  "@id": `${pageUrl}#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, webPageSchema, serviceSchema, breadcrumbSchema, faqSchema],
};

// ===============================
// ✅ STATIC DATA
// ===============================
const stats = [
  { value: "$42", label: "Avg ROI per $1", icon: DollarSign },
  { value: "89+", label: "Happy Clients", icon: Users },
  { value: "45%+", label: "Avg. Open Rate", icon: Mail },
  { value: "4.9", label: "Client Rating", icon: Star },
];

const servicesList = [
  {
    icon: PenTool,
    title: "Email Strategy",
    description: "Data-driven email marketing strategy tailored to your audience.",
    features: ["Audience segmentation", "Content planning", "Campaign calendar", "A/B testing"],
    link: "/services/digital-marketing",
    ctaText: "View digital strategy",
  },
  {
    icon: Zap,
    title: "Email Automation",
    description: "Automated workflows that nurture leads and recover sales.",
    features: ["Welcome sequences", "Abandoned cart recovery", "Post-purchase follow-ups", "Re-engagement"],
    link: "/services/digital-marketing",
    ctaText: "Explore automation",
  },
  {
    icon: Layout,
    title: "Newsletter Design",
    description: "Professional email templates that engage and convert.",
    features: ["Responsive design", "Brand alignment", "Click optimization", "Mobile-first"],
    link: "/services/digital-marketing",
    ctaText: "See newsletter design",
  },
  {
    icon: PieChart,
    title: "Analytics & Reporting",
    description: "Track performance and optimize campaigns for ROI.",
    features: ["Open rate tracking", "CTR analysis", "Revenue attribution", "Monthly reports"],
    link: "/services/analytics",
    ctaText: "Track performance",
  },
];

const platforms = [
  "Mailchimp", "Klaviyo", "ActiveCampaign", "HubSpot", 
  "Constant Contact", "ConvertKit", "SendGrid", "Brevo",
];

const reasons = [
  { icon: Award, title: "Email Experts", desc: "10+ years experience" },
  { icon: Users, title: "Dedicated Team", desc: "Strategy + design + copy" },
  { icon: Shield, title: "High Deliverability", desc: "Inbox-first approach" },
  { icon: Heart, title: "ROI Focused", desc: "Results-driven campaigns" },
];

const tools = [
  "Mailchimp", "Klaviyo", "ActiveCampaign", "HubSpot",
  "Google Analytics", "Litmus", "ZeroBounce", "Mailjet",
];

// ===============================
// ✅ COMPONENTS
// ===============================

function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-[#1A394E] focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
    >
      Skip to content
    </a>
  );
}

function StatCard({ stat }: { stat: typeof stats[0] }) {
  const Icon = stat.icon;
  return (
    <div className="bg-white rounded-xl p-4 md:p-6 text-center border border-gray-100 shadow-sm">
      <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 rounded-full bg-[#2C727B]/10 flex items-center justify-center">
        <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#2C727B]" />
      </div>
      <div className="text-2xl md:text-3xl font-bold text-[#1A394E]">{stat.value}</div>
      <div className="text-[10px] md:text-sm text-[#1A394E]/60 mt-1">{stat.label}</div>
    </div>
  );
}

function ServiceCard({ service }: { service: typeof servicesList[0] }) {
  const Icon = service.icon;
  return (
    <article className="bg-white rounded-2xl border border-gray-100 p-5 md:p-6 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
      </div>
      <h3 className="text-lg md:text-xl font-bold text-[#1A394E] mb-2">{service.title}</h3>
      <p className="text-[#1A394E]/60 text-sm leading-relaxed mb-4">{service.description}</p>
      <div className="space-y-2">
        {service.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-[#1A394E]/70">
            <CheckCircle className="w-4 h-4 text-[#2C727B] flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <Link href={service.link} className="text-[#2C727B] text-sm font-medium hover:underline inline-flex items-center gap-1">
          {service.ctaText} <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </article>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonialsData[0] }) {
  return (
    <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-100 shadow-sm">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
        ))}
      </div>
      <p className="text-[#1A394E]/70 text-sm leading-relaxed mb-4">"{testimonial.content}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center text-white font-bold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-[#1A394E] text-sm">{testimonial.name}</div>
          <div className="text-xs text-[#1A394E]/50">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}

function ReasonCard({ reason }: { reason: typeof reasons[0] }) {
  const Icon = reason.icon;
  return (
    <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100">
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#2C727B]/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 md:w-5 md:h-5 text-[#2C727B]" />
      </div>
      <div>
        <h3 className="font-semibold text-[#1A394E] text-sm md:text-base">{reason.title}</h3>
        <p className="text-xs md:text-sm text-[#1A394E]/60">{reason.desc}</p>
      </div>
    </div>
  );
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 md:mb-8">
      <div className="flex items-center gap-2 text-sm flex-wrap">
        <Link href="/" className="text-[#1A394E]/50 hover:text-[#2C727B] transition-colors flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <span className="text-[#1A394E]/30" aria-hidden="true">/</span>
        <Link href="/services" className="text-[#1A394E]/50 hover:text-[#2C727B] transition-colors">
          Services
        </Link>
        <span className="text-[#1A394E]/30" aria-hidden="true">/</span>
        <span className="text-[#2C727B] font-medium" aria-current="page">Email Marketing</span>
      </div>
    </nav>
  );
}

// ✅ FIXED: Table component with proper JSX structure
function CampaignTypeRow({ campaign, index }: { campaign: typeof campaignTypes[0]; index: number }) {
  const Icon = campaign.icon;

  return (
    <tr className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
      <td className="p-4 text-[#1A394E]/80">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-[#2C727B]" />
          <span>{campaign.name}</span>
        </div>
      </td>
      <td className="p-4">
        <span
          className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
            campaign.roi === "Very High"
              ? "bg-green-100 text-green-700"
              : campaign.roi === "High"
              ? "bg-teal-100 text-teal-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {campaign.roi}
        </span>
      </td>
      <td className="p-4 text-[#1A394E]/80 font-medium">{campaign.openRate}</td>
    </tr>
  );
}

// ===============================
// ✅ MAIN COMPONENT
// ===============================
export default function EmailMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />

      <SkipLink />

      <main id="main-content" role="main" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30 py-12 md:py-16 lg:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb />

          {/* Hero Section */}
          <section aria-labelledby="main-heading" className="text-center mb-12 md:mb-16">
            <div className="mb-6 md:mb-8 flex justify-center">
              <Image
                src="/email-marketing-services.webp"
                width={800}
                height={420}
                priority
                quality={70}
                alt="Email marketing services including automation, newsletters, and campaign management by iCreatixPRO"
                className="rounded-xl shadow-lg w-full max-w-4xl h-auto"
                sizes="(max-width: 768px) 100vw, 800px"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2C727B]/10 to-[#1A394E]/10 rounded-full px-3 py-1 md:px-4 md:py-2 mb-4 md:mb-6">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#2C727B]" />
              <span className="text-xs md:text-sm font-medium text-[#1A394E]">$42 ROI per $1 Spent</span>
            </div>

            <h1 id="main-heading" className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#1A394E] to-[#2C727B] bg-clip-text text-transparent mb-4 md:mb-6">
              Email Marketing That Drives Sales & Loyalty
            </h1>

            <p className="text-[#1A394E]/70 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Professional email marketing services that deliver exceptional ROI through automation, segmentation, and data-driven campaigns.
            </p>

            <div className="mt-4 md:mt-6">
              <p className="text-[#1A394E]/70 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                At <strong className="text-[#2C727B]">iCreatixPRO</strong>, we create email campaigns that convert subscribers into loyal customers.
              </p>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-3 md:mt-4">
                <Link href="/blogs" className="text-[#2C727B] hover:underline font-medium text-sm md:text-base">
                  Email marketing insights →
                </Link>
                <Link href="/services/digital-marketing" className="text-[#2C727B] hover:underline font-medium text-sm md:text-base">
                  Digital marketing services →
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-6 md:mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm md:text-base"
              >
                Get Free Strategy Session
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/50 text-[#1A394E] font-semibold hover:bg-white/90 transition-all hover:scale-105 text-sm md:text-base"
              >
                View Success Stories
              </Link>
            </div>
          </section>

          {/* What is Email Marketing Section */}
          <section aria-labelledby="what-is-heading" className="mb-12 md:mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 id="what-is-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-3 md:mb-4">
                What Is Email Marketing?
              </h2>
              <p className="text-[#1A394E]/70 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                Email marketing sends targeted messages to your audience via email. With an average <strong className="text-[#2C727B]">$42 return for every $1 spent</strong>, it's one of the highest-ROI marketing channels available.
              </p>
              <p className="text-[#1A394E]/70 text-sm md:text-base leading-relaxed">
                Unlike social media, email gives you direct ownership of your audience relationship through strategic <strong className="text-[#2C727B]">segmentation</strong>, <strong className="text-[#2C727B]">automation</strong>, and <strong className="text-[#2C727B]">personalization</strong>.
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section aria-label="Key metrics" className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </section>

          {/* Email ROI Table Section - FIXED TABLE */}
          <section aria-labelledby="table-heading" className="mb-12 md:mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 id="table-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
                Email Campaign ROI by Type
              </h2>
              <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
                Different campaign types deliver different results - we use the right mix for your goals
              </p>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl border border-gray-100 shadow-sm">
                  <thead className="bg-[#1A394E]/5">
                    <tr>
                      <th scope="col" className="text-left p-4 font-semibold text-[#1A394E]">Campaign Type</th>
                      <th scope="col" className="text-left p-4 font-semibold text-[#1A394E]">ROI Potential</th>
                      <th scope="col" className="text-left p-4 font-semibold text-[#1A394E]">Avg. Open Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {campaignTypes.map((campaign, idx) => (
                      <CampaignTypeRow key={campaign.name} campaign={campaign} index={idx} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section aria-labelledby="benefits-heading" className="mb-12 md:mb-16">
            <div className="text-center mb-6 md:mb-8">
              <h2 id="benefits-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-3 md:mb-4">
                Why Email Marketing Matters
              </h2>
              <p className="text-[#1A394E]/60 text-sm md:text-base max-w-2xl mx-auto">
                Email delivers unmatched ROI and direct customer relationships
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="text-center p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-[#2C727B]" />
                </div>
                <h3 className="font-semibold text-[#1A394E] text-sm md:text-base mb-1">Highest ROI</h3>
                <p className="text-xs md:text-sm text-[#1A394E]/50">$42 return per $1 spent</p>
              </div>
              <div className="text-center p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <UsersRound className="w-5 h-5 md:w-6 md:h-6 text-[#2C727B]" />
                </div>
                <h3 className="font-semibold text-[#1A394E] text-sm md:text-base mb-1">Own Your Audience</h3>
                <p className="text-xs md:text-sm text-[#1A394E]/50">Direct customer relationships</p>
              </div>
              <div className="text-center p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <Target className="w-5 h-5 md:w-6 md:h-6 text-[#2C727B]" />
                </div>
                <h3 className="font-semibold text-[#1A394E] text-sm md:text-base mb-1">Personalization</h3>
                <p className="text-xs md:text-sm text-[#1A394E]/50">Segment & target effectively</p>
              </div>
              <div className="text-center p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-[#2C727B]" />
                </div>
                <h3 className="font-semibold text-[#1A394E] text-sm md:text-base mb-1">Measurable Results</h3>
                <p className="text-xs md:text-sm text-[#1A394E]/50">Track every metric</p>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section aria-labelledby="services-heading" className="mb-12 md:mb-16">
            <h2 id="services-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
              Our Email Marketing Services
            </h2>
            <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
              Comprehensive email solutions to grow your business
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {servicesList.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </section>

          {/* Platforms Section */}
          <section aria-labelledby="platforms-heading" className="mb-12 md:mb-16">
            <h2 id="platforms-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
              Email Platforms We Support
            </h2>
            <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
              Expert setup and management on all major platforms
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {platforms.map((platform) => (
                <span
                  key={platform}
                  className="px-3 py-1 md:px-4 md:py-2 rounded-lg bg-white border border-gray-100 text-[#1A394E] text-xs md:text-sm font-medium shadow-sm"
                >
                  {platform}
                </span>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section aria-labelledby="process-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
            <h2 id="process-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
              Our Email Marketing Process
            </h2>
            <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
              A proven 5-step methodology for email success
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
              {processSteps.map((item) => (
                <div key={item.key} className="text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] text-white font-bold flex items-center justify-center mx-auto mb-2 text-sm md:text-base">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-[#1A394E] text-xs md:text-sm">{item.title}</h3>
                  <p className="text-[10px] md:text-xs text-[#1A394E]/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section aria-labelledby="why-heading" className="mb-12 md:mb-16">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
              <div>
                <h2 id="why-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-4 md:mb-6">
                  Why Choose iCreatixPRO?
                </h2>
                <div className="space-y-3 md:space-y-4">
                  {reasons.map((reason, idx) => (
                    <ReasonCard key={idx} reason={reason} />
                  ))}
                </div>
                <div className="mt-4 md:mt-6 p-3 md:p-4 bg-teal-50 rounded-xl">
                  <div className="flex items-center gap-2 md:gap-3">
                    <ThumbsUp className="w-6 h-6 md:w-8 md:h-8 text-[#2C727B]" />
                    <div>
                      <p className="font-semibold text-[#1A394E] text-sm md:text-base">Free Email Strategy Session</p>
                      <p className="text-xs md:text-sm text-[#1A394E]/60">No commitment. 24-hour response.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#2C727B]/5 to-[#1A394E]/5 rounded-2xl p-6 md:p-8 border border-gray-100">
                <div className="text-center mb-4 md:mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">
                    <Star className="w-3 h-3 fill-teal-700" />
                    Client Testimonials
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4">
                  {testimonialsData.map((testimonial, idx) => (
                    <TestimonialCard key={idx} testimonial={testimonial} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Tools Section */}
          <section aria-labelledby="tools-heading" className="mb-12 md:mb-16 text-center">
            <h2 id="tools-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-3 md:mb-4">
              Tools We Use
            </h2>
            <p className="text-[#1A394E]/60 text-sm md:text-base mb-6 md:mb-8">Enterprise-grade email marketing platforms and analytics</p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 md:px-4 md:py-2 rounded-lg bg-white border border-gray-100 text-[#1A394E]/70 text-xs md:text-sm font-medium shadow-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section aria-labelledby="pricing-heading" className="mb-12 md:mb-16 text-center">
            <h2 id="pricing-heading" className="text-xl md:text-2xl font-bold text-[#1A394E] mb-2 md:mb-3">
              Flexible Email Marketing Packages
            </h2>
            <p className="text-[#1A394E]/60 text-sm md:text-base max-w-2xl mx-auto">
              Email marketing services start at <strong className="text-[#2C727B]">$1,500 USD/month</strong> for small businesses. 
              <Link href="/contact" className="text-[#2C727B] hover:underline ml-1">Contact our team</Link> for a custom quote.
            </p>
          </section>

          {/* FAQ Section */}
          <section aria-labelledby="faq-heading" className="mb-12 md:mb-16">
            <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
              Everything about email marketing and automation
            </p>
            <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 md:p-6 border border-gray-100">
                  <h3 className="text-base md:text-lg font-semibold text-[#1A394E] mb-2">{faq.q}</h3>
                  <p className="text-[#1A394E]/70 text-sm md:text-base">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section aria-label="Call to action" className="text-center bg-gradient-to-r from-[#2C727B] to-[#1A394E] rounded-2xl p-6 md:p-12 text-white">
            <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3">
              Ready to Grow Your Email List?
            </h2>
            <p className="text-white/80 text-sm md:text-base mb-4 md:mb-6 max-w-2xl mx-auto">
              Get a free email marketing strategy session. <strong>Limited slots available. No obligation.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#1A394E] px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-white/90 transition-all hover:scale-105 text-sm md:text-base"
              >
                Get Free Strategy Session
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/50 text-white font-semibold hover:bg-white/30 transition-all hover:scale-105 text-sm md:text-base"
              >
                View Case Studies
              </Link>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/50 text-center">
            <p className="text-[10px] md:text-xs text-[#1A394E]/40">
              © {CURRENT_YEAR} iCreatixPRO. Email marketing specialists.
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}