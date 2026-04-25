import React from "react";
import type { Metadata, Viewport } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  TrendingUp,
  Target,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Award,
  Search,
  FileText,
  PieChart,
  Star,
  Home,
  BarChart3,
  Globe,
  DollarSign,
  ThumbsUp,
  Rocket,
  Users,
  Shield,
  Heart,
} from "lucide-react";

// ===============================
// ✅ METADATA BASE (Absolute URLs - NO TRAILING SLASH)
// ===============================
const baseUrl = "https://icreatixpro.com";
const pageUrl = `${baseUrl}/services/digital-marketing`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Digital Marketing Services SEO & Social Media Marketing",
  description:
    "Grow your business with comprehensive digital marketing services. SEO, content marketing, and analytics. Get a free consultation today!",
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
    title: "Digital Marketing Services | iCreatixPRO",
    description:
      "Grow your business with SEO and content marketing. Data-driven strategies that deliver real results.",
    url: pageUrl,
    siteName: "iCreatixPRO",
    type: "website",
    images: [
      {
        url: `${baseUrl}/digital-marketing-services.webp`,
        width: 1200,
        height: 630,
        alt: "Digital marketing services including SEO and content marketing by iCreatixPRO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services | iCreatixPRO",
    description: "Grow your business with SEO and content marketing.",
    images: [`${baseUrl}/digital-marketing-services.webp`],
  },
};

// ===============================
// ✅ VIEWPORT (SEO + Performance)
// ===============================
export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

// ===============================
// ✅ STATIC YEAR (No CLS risk)
// ===============================
const CURRENT_YEAR = 2026;

// ===============================
// ✅ FAQ DATA - SINGLE SOURCE OF TRUTH
// ===============================
const faqs = [
  {
    q: "What exactly does a digital marketing agency do?",
    a: "A digital marketing agency helps businesses grow online through strategies like search engine optimization, content creation, paid advertising, and analytics. At iCreatixPRO, we focus on sustainable growth through ethical SEO and valuable content.",
  },
  {
    q: "When will I start seeing results from digital marketing?",
    a: "SEO typically shows meaningful progress within 3-6 months, while content marketing builds momentum over 4-8 months. Unlike traditional advertising, digital marketing provides compounding returns over time.",
  },
  {
    q: "Which digital marketing services do you provide?",
    a: "We specialize in technical SEO, content marketing that drives organic traffic, and data analytics to measure real business impact. Each strategy is custom-built for your industry and goals.",
  },
  {
    q: "What is the investment for professional digital marketing?",
    a: "Custom digital marketing strategies start at $1,500/month for small to mid-sized businesses. Enterprise and e-commerce solutions are quoted individually based on scope and competition level.",
  },
  {
    q: "Do you promise first-page Google rankings?",
    a: "No legitimate SEO provider can guarantee specific rankings. We guarantee 100% white-hat methods, full transparency, continuous optimization, and measurable improvements in organic visibility and qualified traffic.",
  },
];

// ===============================
// ✅ PROCESS STEPS - MOVED OUTSIDE COMPONENT
// ===============================
const processSteps = [
  { step: "01", title: "Discovery", desc: "Research & strategy", key: "step-1" },
  { step: "02", title: "Setup", desc: "Implementation", key: "step-2" },
  { step: "03", title: "Launch", desc: "Campaign launch", key: "step-3" },
  { step: "04", title: "Optimize", desc: "Continuous improvement", key: "step-4" },
  { step: "05", title: "Scale", desc: "Growth & expansion", key: "step-5" },
];

// ===============================
// ✅ SCHEMAS - CLEAN & SIMPLE (No duplication)
// ===============================
const organizationSchema = {
  "@type": "Organization",
  "@id": `${baseUrl}#org`,
  name: "iCreatixPRO",
  url: baseUrl,
  logo: {
    "@type": "ImageObject",
    url: `${baseUrl}/logo.webp`,
  },
  sameAs: [
    "https://twitter.com/icreatixpro",
    "https://linkedin.com/company/icreatixpro",
  ],
};

const webSiteSchema = {
  "@type": "WebSite",
  "@id": `${baseUrl}#website`,
  name: "iCreatixPRO",
  url: baseUrl,
  inLanguage: "en",
  publisher: { "@id": `${baseUrl}#org` },
};

const webPageSchema = {
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  name: "Digital Marketing Services | iCreatixPRO",
  url: pageUrl,
  description:
    "Grow your business with comprehensive digital marketing services. SEO, content marketing, and analytics.",
  inLanguage: "en",
  isPartOf: { "@id": `${baseUrl}#website` },
  publisher: { "@id": `${baseUrl}#org` },
  breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
  mainEntity: { "@id": `${pageUrl}#service` },
};

const serviceSchema = {
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Digital Marketing Services",
  provider: { "@id": `${baseUrl}#org` },
  url: pageUrl,
  description:
    "Grow your business with comprehensive digital marketing services. SEO, content marketing, and analytics.",
  serviceType: "Digital Marketing",
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Businesses",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "1500",
    availability: "https://schema.org/InStock",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "SEO Optimization",
        description: "Boost organic search rankings and drive qualified traffic",
      },
      {
        "@type": "Offer",
        name: "Content Marketing",
        description: "Create valuable content that attracts and converts",
      },
      {
        "@type": "Offer",
        name: "Analytics & Reporting",
        description: "Make data-driven decisions with comprehensive analytics",
      },
    ],
  },
};

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": `${pageUrl}#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: baseUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${baseUrl}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Digital Marketing",
      item: pageUrl,
    },
  ],
};

const faqSchema = {
  "@type": "FAQPage",
  "@id": `${pageUrl}#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

// ✅ CLEAN COMBINED SCHEMA - No duplication
const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    webSiteSchema,
    webPageSchema,
    breadcrumbSchema,
    serviceSchema,
    faqSchema,
  ],
};

// ===============================
// ✅ STATIC DATA (Outside component)
// ===============================
const stats = [
  { value: "500+", label: "Happy Clients", icon: Users },
  { value: "2500+", label: "Projects Completed", icon: Rocket },
  { value: "300%", label: "Avg. Traffic Growth", icon: TrendingUp },
  { value: "4.9", label: "Client Rating", icon: Star },
];

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your organic search rankings and drive qualified traffic to your website.",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building", "Local SEO"],
    link: "/services/search-engine-optimization",
    ctaText: "Explore SEO packages",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "Create valuable content that attracts, engages, and converts your audience.",
    features: ["Blog Posts", "White Papers", "Case Studies", "Infographics", "Video Content"],
    link: "/services/content-marketing",
    ctaText: "View content solutions",
  },
  {
    icon: PieChart,
    title: "Analytics & Reporting",
    description: "Make data-driven decisions with comprehensive analytics and reporting.",
    features: ["Custom Dashboards", "ROI Tracking", "Conversion Analysis", "Monthly Reports", "KPI Monitoring"],
    link: "/services/analytics",
    ctaText: "See analytics in action",
  },
];

const industries = [
  "E-commerce",
  "Healthcare",
  "Real Estate",
  "Technology",
  "Hospitality",
  "Professional Services",
  "Manufacturing",
  "Retail",
];

const reasons = [
  { icon: Award, title: "Proven Track Record", desc: "500+ successful projects delivered", key: "proven-track-record" },
  { icon: Users, title: "Expert Team", desc: "Certified professionals with 10+ years experience", key: "expert-team" },
  { icon: Shield, title: "Data-Driven Approach", desc: "All decisions backed by analytics", key: "data-driven" },
  { icon: Heart, title: "Dedicated Support", desc: "24/7 client support and regular updates", key: "dedicated-support" },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "iCreatixPRO transformed our digital presence. Our organic traffic increased by 200% in just 6 months!",
    rating: 5,
    key: "sarah-johnson",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    content: "The team's expertise in SEO helped us double our organic traffic while reducing bounce rate.",
    rating: 5,
    key: "michael-chen",
  },
  {
    name: "Emily Rodriguez",
    role: "Small Business Owner",
    content: "Finally found a digital marketing agency that actually delivers results. Highly recommend!",
    rating: 5,
    key: "emily-rodriguez",
  },
];

const tools = [
  "Google Analytics", "SEMrush", "Ahrefs", "HubSpot", "Salesforce",
  "Mailchimp", "Hotjar", "Optimizely", "WordPress",
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
    <div className="bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm min-h-[140px]">
      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#2C727B]/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-[#2C727B]" />
      </div>
      <div className="text-3xl font-bold text-[#1A394E]">{stat.value}</div>
      <div className="text-sm text-[#1A394E]/60 mt-1">{stat.label}</div>
    </div>
  );
}

const ServiceCard = React.memo(function ServiceCard({ service }: { service: typeof services[0] }) {
  const Icon = service.icon;
  return (
    <article className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow min-h-[420px]">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-bold text-[#1A394E] mb-2">{service.title}</h3>
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
});
ServiceCard.displayName = "ServiceCard";

const TestimonialCard = React.memo(function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
      <div className="flex items-center gap-1 mb-4">
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
});
TestimonialCard.displayName = "TestimonialCard";

function ReasonCard({ reason }: { reason: typeof reasons[0] }) {
  const Icon = reason.icon;
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100">
      <div className="w-10 h-10 rounded-lg bg-[#2C727B]/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-[#2C727B]" />
      </div>
      <div>
        <h3 className="font-semibold text-[#1A394E]">{reason.title}</h3>
        <p className="text-sm text-[#1A394E]/60">{reason.desc}</p>
      </div>
    </div>
  );
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
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
        <span className="text-[#2C727B] font-medium" aria-current="page">Digital Marketing</span>
      </div>
    </nav>
  );
}

export default function DigitalMarketingPage() {
  return (
    <>
      {/* ✅ CLEAN COMBINED SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />

      <SkipLink />

      <main id="main-content" role="main" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30 py-16 px-4 md:py-24 md:px-6">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb />

          {/* Hero Section */}
          <section aria-labelledby="main-heading" className="text-center mb-12 md:mb-16">
            {/* LCP Image */}
            <div className="mb-8 flex justify-center">
              <Image
                src="/digital-marketing-services.webp"
                width={800}
                height={420}
                priority
                quality={85}
                alt="Digital marketing services including SEO and content marketing by iCreatixPRO"
                className="rounded-xl shadow-lg w-full max-w-4xl h-auto"
                sizes="(max-width: 768px) 100vw, 800px"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2C727B]/10 to-[#1A394E]/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-[#2C727B]" />
              <span className="text-sm font-medium text-[#1A394E]">Serving Businesses Globally | Pakistan, UAE, USA</span>
            </div>

            <h1 id="main-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#1A394E] to-[#2C727B] bg-clip-text text-transparent mb-6">
              Digital Marketing Services That Grow Your Business
            </h1>

            <p className="text-[#1A394E]/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Professional online growth strategies designed for organic visibility, lead generation, and brand authority.
            </p>

            <div className="mt-4">
              <p className="text-[#1A394E]/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                At <strong className="text-[#2C727B]">iCreatixPRO</strong>, we help businesses scale with proven digital marketing strategies.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-3">
                <Link href="/services/search-engine-optimization" className="text-[#2C727B] hover:underline font-medium">
                  Technical SEO packages →
                </Link>
                <Link href="/blogs" className="text-[#2C727B] hover:underline font-medium">
                  Latest marketing insights →
                </Link>
                <Link href="/services" className="text-[#2C727B] hover:underline font-medium">
                  Explore all services →
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/50 text-[#1A394E] font-semibold hover:bg-white/90 transition-all hover:scale-105"
              >
                View Success Stories
              </Link>
            </div>
          </section>

          {/* Rest of the sections remain the same... */}
          {/* What is Digital Marketing Section */}
          <section aria-labelledby="what-is-heading" className="mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 id="what-is-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-4">
                What Is Online Growth Strategy?
              </h2>
              <p className="text-[#1A394E]/70 leading-relaxed mb-4">
                Online growth strategy encompasses all digital marketing efforts to connect with potential customers through search engines, social media, email, and websites. With over <strong className="text-[#2C727B]">5 billion internet users worldwide</strong>, digital marketing has become essential for business growth.
              </p>
              <p className="text-[#1A394E]/70 leading-relaxed">
                Unlike traditional advertising, digital marketing offers precise targeting, measurable results, and compounding returns. At iCreatixPRO, we leverage data-driven strategies to ensure your marketing budget delivers maximum ROI.
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section aria-label="Key metrics" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </section>

          {/* Benefits Section */}
          <section aria-labelledby="benefits-heading" className="mb-16">
            <div className="text-center mb-8">
              <h2 id="benefits-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-4">
                Why Invest in Online Growth?
              </h2>
              <p className="text-[#1A394E]/60 max-w-2xl mx-auto">
                Digital marketing offers unparalleled advantages for businesses of all sizes
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-6 h-6 text-[#2C727B]" />
                </div>
                <h3 className="font-semibold text-[#1A394E] mb-1">Cost-Effective</h3>
                <p className="text-xs text-[#1A394E]/50">Lower cost than traditional marketing with better ROI</p>
              </div>
              <div className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-[#2C727B]" />
                </div>
                <h3 className="font-semibold text-[#1A394E] mb-1">Targeted Reach</h3>
                <p className="text-xs text-[#1A394E]/50">Reach your ideal customers with precision targeting</p>
              </div>
              <div className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="w-6 h-6 text-[#2C727B]" />
                </div>
                <h3 className="font-semibold text-[#1A394E] mb-1">Measurable Results</h3>
                <p className="text-xs text-[#1A394E]/50">Track every dollar spent and measure exact ROI</p>
              </div>
              <div className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-[#2C727B]" />
                </div>
                <h3 className="font-semibold text-[#1A394E] mb-1">Global Reach</h3>
                <p className="text-xs text-[#1A394E]/50">Expand your business beyond geographical boundaries</p>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section aria-labelledby="services-heading" className="mb-16">
            <h2 id="services-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-4">
              Our Digital Marketing Services
            </h2>
            <p className="text-[#1A394E]/60 text-center max-w-2xl mx-auto mb-8">
              Comprehensive online growth solutions tailored to your business goals
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section aria-labelledby="process-heading" className="mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-100">
            <h2 id="process-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-4">
              Our Growth Process
            </h2>
            <p className="text-[#1A394E]/60 text-center max-w-2xl mx-auto mb-8">
              A proven 5-step methodology that delivers consistent results
            </p>
            <div className="grid md:grid-cols-5 gap-4">
              {processSteps.map((item) => (
                <div key={item.key} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] text-white font-bold flex items-center justify-center mx-auto mb-2">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-[#1A394E] text-sm">{item.title}</h3>
                  <p className="text-xs text-[#1A394E]/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Industries Section */}
          <section aria-labelledby="industries-heading" className="mb-16">
            <h2 id="industries-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-4">
              Industries We Serve
            </h2>
            <p className="text-[#1A394E]/60 text-center max-w-2xl mx-auto mb-8">
              We help businesses across diverse industries achieve their online growth goals
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="px-4 py-2 rounded-lg bg-white border border-gray-100 text-[#1A394E] text-sm font-medium shadow-sm"
                >
                  {industry}
                </span>
              ))}
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section aria-labelledby="why-heading" className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 id="why-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-6">
                  Why Choose iCreatixPRO?
                </h2>
                <div className="space-y-4">
                  {reasons.map((reason) => (
                    <ReasonCard key={reason.key} reason={reason} />
                  ))}
                </div>
                <div className="mt-6 p-4 bg-teal-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <ThumbsUp className="w-8 h-8 text-[#2C727B]" />
                    <div>
                      <p className="font-semibold text-[#1A394E]">Free Consultation & Audit</p>
                      <p className="text-sm text-[#1A394E]/60">No commitment. 24-hour response. Cancel anytime.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#2C727B]/5 to-[#1A394E]/5 rounded-2xl p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">
                    <Star className="w-3 h-3 fill-teal-700" />
                    Client Testimonials
                  </div>
                </div>
                <div className="space-y-4">
                  {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.key} testimonial={testimonial} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Technologies Section */}
          <section aria-labelledby="tools-heading" className="mb-16 text-center">
            <h2 id="tools-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-4">
              Enterprise-Grade Tools & Technologies
            </h2>
            <p className="text-[#1A394E]/60 mb-8">We use industry-leading platforms to deliver exceptional results</p>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-lg bg-white border border-gray-100 text-[#1A394E]/70 text-sm font-medium shadow-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section aria-labelledby="pricing-heading" className="mb-16 text-center">
            <h2 id="pricing-heading" className="text-xl md:text-2xl font-bold text-[#1A394E] mb-3">
              Flexible Growth Packages
            </h2>
            <p className="text-[#1A394E]/60 max-w-2xl mx-auto">
              Our online growth services start at <strong className="text-[#2C727B]">$1,500/month</strong> for small businesses. Enterprise solutions are custom-priced based on your specific needs. We offer <strong>month-to-month agreements</strong> with no long-term contracts. <Link href="/contact" className="text-[#2C727B] hover:underline">Contact our team</Link> for a personalized quote.
            </p>
          </section>

          {/* FAQ Section */}
          <section aria-labelledby="faq-heading" className="mb-16">
            <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#1A394E]/60 text-center max-w-2xl mx-auto mb-8">
              Everything you need to know about our online growth services
            </p>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-[#1A394E] mb-2">{faq.q}</h3>
                  <p className="text-[#1A394E]/70">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section aria-label="Call to action" className="text-center bg-gradient-to-r from-[#2C727B] to-[#1A394E] rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Ready to Grow Your Business?
            </h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Get a free consultation and discover how our online growth strategies can help you achieve your business goals. <strong>Free audit. No obligation. 24-hour response.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#1A394E] px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-all hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/50 text-white font-semibold hover:bg-white/30 transition-all hover:scale-105"
              >
                View Success Stories
              </Link>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-white/50 text-center">
            <p className="text-xs text-[#1A394E]/40">
              © {CURRENT_YEAR} iCreatixPRO. All rights reserved. Serving businesses globally.
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}