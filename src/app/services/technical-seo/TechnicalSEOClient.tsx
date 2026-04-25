"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  Sparkles,
  Star,
  Home,
  BarChart3,
  Globe,
  ThumbsUp,
  Users,
  Shield,
  Heart,
  Target,
  ArrowRight,
  Award,
  TrendingUp,
  DollarSign,
  Search,
  Server,
  Zap,
  Eye,
  Activity,
  Calendar,
  UserCheck,
  BadgeCheck,
  ChevronRight,
  Gauge,
  FileText,
  Link2,
  Smartphone,
  Code,
  AlertCircle,
} from "lucide-react";

// ===============================
// ✅ CONSTANTS
// ===============================
const CURRENT_YEAR = 2026;
const LAST_UPDATED = "April 2026";

// ===============================
// ✅ STATIC DATA
// ===============================
const stats = [
  { value: "89%", label: "Speed Improvement", icon: Gauge },
  { value: "15K+", label: "Pages Indexed", icon: FileText },
  { value: "100%", label: "Schema Coverage", icon: Code },
  { value: "0", label: "Crawl Errors", icon: AlertCircle },
];

const servicesList = [
  { icon: Zap, title: "Site Speed Optimization", description: "Improve loading times and Core Web Vitals for better rankings and user experience.", features: ["Image Optimization", "Caching Implementation", "CSS/JS Minification", "CDN Setup", "Server Response Time"], link: "/services/technical-seo", ctaText: "Speed up site" },
  { icon: Search, title: "Crawl Budget Analysis", description: "Optimize how search engines crawl and index your website for maximum efficiency.", features: ["Crawl Error Fixes", "Robots.txt Optimization", "XML Sitemaps", "Internal Linking", "Orphan Page Discovery"], link: "/services/technical-seo", ctaText: "Fix crawling" },
  { icon: Code, title: "Schema Markup Implementation", description: "Add structured data to enable rich snippets and enhanced search results.", features: ["Organization Schema", "LocalBusiness Schema", "Product Schema", "FAQ Schema", "Article Schema"], link: "/services/technical-seo", ctaText: "Add schema" },
  { icon: Smartphone, title: "Mobile Optimization", description: "Ensure your website delivers an exceptional experience on all mobile devices.", features: ["Responsive Design", "Mobile Usability", "Viewport Configuration", "Touch-friendly Navigation", "Mobile Speed"], link: "/services/technical-seo", ctaText: "Optimize mobile" },
  { icon: Link2, title: "Canonical & Redirects", description: "Fix duplicate content issues and implement proper redirect strategies.", features: ["Canonical Tags", "301 Redirects", "WWW vs Non-WWW", "Trailing Slash Consistency", "URL Parameter Handling"], link: "/services/search-engine-optimization", ctaText: "Fix redirects" },
  { icon: Server, title: "JavaScript SEO", description: "Optimize JavaScript-heavy websites for search engine crawling and indexing.", features: ["Rendering Optimization", "Dynamic Content", "Lazy Loading", "Pre-rendering", "Hydration Fixes"], link: "/services/technical-seo", ctaText: "Fix JS SEO" },
];

const plans = [
  { title: "Technical SEO Audit", price: "$2,499", features: ["Site Speed Analysis", "Crawlability Review", "Schema Audit", "Mobile Testing", "Canonical Check", "Detailed Report (50+ pages)"], isPopular: false },
  { title: "Technical SEO Management", price: "$1,500", features: ["Ongoing Monitoring", "Monthly Fixes", "Core Web Vitals Optimization", "Schema Implementation", "Crawl Budget Management", "Weekly Reports"], isPopular: true },
  { title: "Enterprise Technical SEO", price: "Custom", features: ["Full Infrastructure Audit", "JavaScript SEO", "International SEO", "API Integration", "Custom Development Support", "Dedicated Technical SEO Lead"], isPopular: false },
];

const reasons = [
  { icon: Award, title: "Technical SEO Experts", desc: "Specialized in infrastructure optimization" },
  { icon: Users, title: "Certified Team", desc: "Google-certified technical SEO specialists" },
  { icon: Shield, title: "Data-Driven", desc: "All fixes based on real crawl data" },
  { icon: Heart, title: "Transparent Reporting", desc: "Real-time technical health dashboards" },
];

const testimonialsData = [
  { name: "Mark Anderson", role: "CTO, TechFlow", content: "Our Core Web Vitals improved dramatically. Site speed went from 45 to 89 on mobile!", rating: 5, result: "44pt speed gain" },
  { name: "Sarah Williams", role: "SEO Director", content: "They fixed our crawl budget issues and indexed 15K+ pages in 30 days.", rating: 5, result: "15K+ pages indexed" },
  { name: "David Chen", role: "Head of Digital", content: "Finally found a technical SEO agency that understands schema. Our rich snippets are now live!", rating: 5, result: "Rich snippets live" },
];

const tools = [
  "Google Search Console", "Screaming Frog", "Ahrefs", "SEMrush", "PageSpeed Insights",
  "GTmetrix", "WebPageTest", "Lighthouse", "DeepCrawl", "Botify",
];

const coreWebVitalsData = [
  { metric: "LCP (Largest Contentful Paint)", good: "<2.5s", needsImprovement: "2.5-4s", poor: ">4s" },
  { metric: "INP (Interaction to Next Paint)", good: "<200ms", needsImprovement: "200-500ms", poor: ">500ms" },
  { metric: "CLS (Cumulative Layout Shift)", good: "<0.1", needsImprovement: "0.1-0.25", poor: ">0.25" },
];

const faqs = [
  { q: "What is technical SEO and why is it important?", a: "Technical SEO optimizes your website's infrastructure so search engines can crawl, index, and render your pages efficiently. Without solid technical SEO, even great content won't rank." },
  { q: "How long does technical SEO take to show results?", a: "Technical SEO improvements can show results within 2-4 weeks. Fixing crawl errors, indexation issues, and site speed can lead to immediate ranking improvements." },
  { q: "What are Core Web Vitals?", a: "Core Web Vitals are Google's page experience metrics measuring LCP, INP, and CLS. They are ranking factors that affect user experience and search visibility." },
  { q: "How do you fix slow site speed?", a: "We optimize images, implement caching, minify CSS/JS, use CDN, reduce server response time, and eliminate render-blocking resources." },
  { q: "What is crawl budget optimization?", a: "Crawl budget optimization ensures Googlebot crawls your most important pages efficiently by fixing crawl errors, optimizing robots.txt, and improving internal linking." },
  { q: "Do you implement schema markup?", a: "Yes! We implement schema markup including Organization, LocalBusiness, Product, FAQ, Article, and custom schemas to enable rich snippets." },
  { q: "What's the difference between technical SEO and on-page SEO?", a: "Technical SEO focuses on site infrastructure (speed, crawlability, indexation). On-page SEO focuses on content and meta tags. Both are essential." },
  { q: "How much do technical SEO services cost?", a: "Technical SEO audits start at $2,500. Ongoing technical SEO management starts at $1,500/month for comprehensive monitoring and optimization." },
];

// ===============================
// ✅ COMPONENTS
// ===============================

function SkipLink() {
  return (
    <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-[#1A394E] focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg">
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

function TestimonialCard({ testimonial }: { testimonial: typeof testimonialsData[0] }) {
  return (
    <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-100 shadow-sm">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
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
          {testimonial.result && <div className="text-xs text-[#2C727B] font-medium mt-1">{testimonial.result}</div>}
        </div>
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
        <Link href="/services" className="text-[#1A394E]/50 hover:text-[#2C727B] transition-colors">Services</Link>
        <span className="text-[#1A394E]/30" aria-hidden="true">/</span>
        <span className="text-[#2C727B] font-medium" aria-current="page">Technical SEO</span>
      </div>
    </nav>
  );
}

function PricingCard({ plan }: { plan: typeof plans[0] }) {
  return (
    <div className={`relative bg-white rounded-2xl border p-6 shadow-sm hover:shadow-md transition-all ${plan.isPopular ? "border-[#2C727B] shadow-lg" : "border-gray-100"}`}>
      {plan.isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white text-xs font-medium">
          Most Popular
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-[#1A394E] mb-2">{plan.title}</h3>
        <div className="text-3xl font-bold text-[#1A394E]">{plan.price}</div>
        {plan.price !== "Custom" && <p className="text-xs text-[#1A394E]/50 mt-1">one-time / month</p>}
      </div>
      <ul className="space-y-3 mb-6">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-[#1A394E]/70">
            <CheckCircle className="w-4 h-4 text-[#2C727B] flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <Link href="/contact" className="block w-full py-3 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white text-center font-semibold hover:shadow-lg transition-all">
        Get Started
      </Link>
    </div>
  );
}

function FAQItem({ faq, idx, isOpen, toggle }: { faq: typeof faqs[0]; idx: number; isOpen: boolean; toggle: () => void }) {
  const buttonId = `faq-button-${idx}`;
  const panelId = `faq-panel-${idx}`;

  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
      <button
        id={buttonId}
        onClick={toggle}
        className="w-full text-left p-5 font-semibold text-[#1A394E] flex items-center justify-between hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span>{faq.q}</span>
        <ChevronRight className={`w-5 h-5 text-[#2C727B] transition-transform ${isOpen ? "rotate-90" : ""}`} />
      </button>
      <div id={panelId} role="region" aria-labelledby={buttonId} className={`${isOpen ? "block" : "hidden"}`}>
        <div className="px-5 pb-5 pt-0 text-[#1A394E]/60 text-sm leading-relaxed">{faq.a}</div>
      </div>
    </div>
  );
}

function PricingPlansSection() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="mb-12 md:mb-16">
      <h2 id="pricing-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Technical SEO Pricing & Packages
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        Flexible options for businesses of all sizes
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, idx) => (
          <PricingCard key={idx} plan={plan} />
        ))}
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  return (
    <section aria-labelledby="why-heading" className="mb-12 md:mb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 id="why-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-4 md:mb-6">
            Why Choose Our Technical SEO Services?
          </h2>
          <div className="space-y-3 md:space-y-4">
            {reasons.map((reason, idx) => (
              <ReasonCard key={idx} reason={reason} />
            ))}
          </div>
          <div className="mt-6 p-4 bg-teal-50 rounded-xl">
            <div className="flex items-center gap-3">
              <ThumbsUp className="w-6 h-6 md:w-8 md:h-8 text-[#2C727B]" />
              <div>
                <p className="font-semibold text-[#1A394E] text-sm md:text-base">Free Technical SEO Audit</p>
                <p className="text-xs md:text-sm text-[#1A394E]/60">No commitment. 24-hour response.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#2C727B]/5 to-[#1A394E]/5 rounded-2xl p-6 md:p-8 border border-gray-100">
          <div className="text-center mb-4 md:mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">
              <Star className="w-3 h-3 fill-teal-700" />
              Client Success Stories
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
  );
}

function ToolsSection() {
  return (
    <section aria-labelledby="tools-heading" className="mb-12 md:mb-16 text-center">
      <h2 id="tools-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-3 md:mb-4">
        Enterprise Technical SEO Tools
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base mb-6 md:mb-8">Industry-leading platforms for comprehensive technical analysis</p>
      <div className="flex flex-wrap justify-center gap-3">
        {tools.map((tool, idx) => (
          <span key={idx} className="px-4 py-2 rounded-lg bg-white border border-gray-100 text-[#1A394E]/70 text-sm font-medium shadow-sm">
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}

function CoreWebVitalsTable() {
  return (
    <section aria-labelledby="cwv-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
      <h2 id="cwv-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Core Web Vitals Explained
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        Google's page experience metrics that directly impact rankings
      </p>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl border border-gray-100 shadow-sm">
          <thead className="bg-[#1A394E]/5">
            <tr>
              <th className="text-left p-4 font-semibold text-[#1A394E]">Metric</th>
              <th className="text-left p-4 font-semibold text-[#1A394E]">Good</th>
              <th className="text-left p-4 font-semibold text-[#1A394E]">Needs Improvement</th>
              <th className="text-left p-4 font-semibold text-[#1A394E]">Poor</th>
            </tr>
          </thead>
          <tbody>
            {coreWebVitalsData.map((item, idx) => (
              <tr key={idx} className="border-t border-gray-100">
                <td className="p-4 text-[#1A394E]/80 font-medium">{item.metric}</td>
                <td className="p-4 text-green-600 font-medium">{item.good}</td>
                <td className="p-4 text-yellow-600">{item.needsImprovement}</td>
                <td className="p-4 text-red-600">{item.poor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-6">
        <p className="text-sm text-[#1A394E]/60">
          <strong className="text-[#2C727B]">Our guarantee:</strong> We'll help you achieve "Good" ratings across all Core Web Vitals.{' '}
          <Link href="/contact" className="text-[#2C727B] hover:underline">Get a free Core Web Vitals audit →</Link>
        </p>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="mb-12 md:mb-16">
      <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Technical SEO FAQs
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        Everything you need to know about technical SEO
      </p>
      <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} faq={faq} idx={idx} isOpen={openIndex === idx} toggle={() => toggleFAQ(idx)} />
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { step: "01", title: "Audit", desc: "Comprehensive technical analysis" },
    { step: "02", title: "Prioritize", desc: "Fix critical issues first" },
    { step: "03", title: "Implement", desc: "Execute technical fixes" },
    { step: "04", title: "Test", desc: "Verify improvements" },
    { step: "05", title: "Monitor", desc: "Continuous tracking" },
    { step: "06", title: "Optimize", desc: "Ongoing refinement" },
  ];

  return (
    <section id="process" aria-labelledby="process-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
      <h2 id="process-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Our Technical SEO Process
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        A systematic approach to fixing technical SEO issues
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {steps.map((step, idx) => (
          <div key={idx} className="text-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] text-white font-bold flex items-center justify-center mx-auto mb-2">
              {step.step}
            </div>
            <h3 className="font-semibold text-[#1A394E] text-sm">{step.title}</h3>
            <p className="text-[10px] text-[#1A394E]/50">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TableOfContents() {
  const sections = [
    { id: "services", title: "Services" },
    { id: "process", title: "Process" },
    { id: "cwv", title: "Core Web Vitals" },
    { id: "pricing", title: "Pricing" },
    { id: "faq", title: "FAQs" },
  ];

  return (
    <div className="mb-8 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100">
      <p className="text-sm font-semibold text-[#1A394E] mb-2 text-center">Table of Contents</p>
      <div className="flex flex-wrap justify-center gap-2">
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`} className="text-xs text-[#1A394E]/70 hover:text-[#2C727B] transition-colors px-2 py-1">
            {section.title}
          </a>
        ))}
      </div>
    </div>
  );
}

function EEATSection() {
  return (
    <section aria-labelledby="eeat-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center"><Calendar className="w-6 h-6 text-[#2C727B]" /></div>
          <div><p className="text-xs text-[#1A394E]/50">Last Updated</p><p className="font-semibold text-[#1A394E]">{LAST_UPDATED}</p></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center"><UserCheck className="w-6 h-6 text-[#2C727B]" /></div>
          <div><p className="text-xs text-[#1A394E]/50">Reviewed By</p><p className="font-semibold text-[#1A394E]">Michael Stewart, Head of Technical SEO</p></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center"><BadgeCheck className="w-6 h-6 text-[#2C727B]" /></div>
          <div><p className="text-xs text-[#1A394E]/50">Certification</p><p className="font-semibold text-[#1A394E]">Google Partner</p></div>
        </div>
      </div>
      <div className="text-center pt-4 border-t border-gray-100">
        <p className="text-sm text-[#1A394E]/60">Our team specializes in technical SEO with proven results for 100+ websites. We use only Google-approved technical optimization techniques.</p>
      </div>
    </section>
  );
}

// ===============================
// ✅ MAIN CLIENT COMPONENT
// ===============================
export default function TechnicalSEOClient() {
  return (
    <main id="main-content" role="main" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30 py-12 md:py-16 lg:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb />
        <TableOfContents />

        {/* Hero Section */}
        <section aria-labelledby="main-heading" className="text-center mb-12 md:mb-16">
          <div className="mb-6 md:mb-8 flex justify-center">
            <Image
              src="/technical-seo-services.webp"
              width={800}
              height={420}
              priority
              fetchPriority="high"
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACwAQCdASoQAAwABkC4JZQCdAE2uBMAAOAAwCp8LAXmDAAA"
              alt="Technical SEO services including site speed optimization, crawl fixes, Core Web Vitals and schema markup by iCreatixPRO"
              className="rounded-xl shadow-lg w-full max-w-4xl h-auto"
              sizes="(max-width: 768px) 100vw, 1200px"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-[#1A394E]/60">
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> Technical SEO Experts</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> 100+ Websites Optimized</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> 89% Speed Improvement</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> 24/7 Monitoring</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2C727B]/10 to-[#1A394E]/10 rounded-full px-3 py-1 md:px-4 md:py-2 mb-4 md:mb-6">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#2C727B]" />
            <span className="text-xs md:text-sm font-medium text-[#1A394E]">Technical SEO Specialists</span>
          </div>

          <h1 id="main-heading" className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#1A394E] to-[#2C727B] bg-clip-text text-transparent mb-4 md:mb-6">
            Fix Technical SEO Issues That Hurt Your Rankings
          </h1>

          <p className="text-[#1A394E]/70 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Site speed optimization, crawl fixes, Core Web Vitals, and schema markup to help search engines find, crawl, and index your website.
          </p>

          <div className="mt-4 md:mt-6">
            <p className="text-[#1A394E]/70 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              At <strong className="text-[#2C727B]">iCreatixPRO</strong>, our technical SEO experts fix the hidden issues preventing your site from ranking.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-3">
              <Link href="/services/search-engine-optimization" className="text-[#2C727B] hover:underline font-medium text-sm md:text-base">Search engine optimization →</Link>
              <Link href="/services/local-seo" className="text-[#2C727B] hover:underline font-medium text-sm md:text-base">Local search optimization →</Link>
              <Link href="/services/analytics" className="text-[#2C727B] hover:underline font-medium text-sm md:text-base">Performance tracking →</Link>
              <Link href="/blogs" className="text-[#2C727B] hover:underline font-medium text-sm md:text-base">Technical insights →</Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-6 md:mt-8">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm md:text-base">
              Get Free Technical SEO Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/case-studies" className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/50 text-[#1A394E] font-semibold hover:bg-white/90 transition-all hover:scale-105 text-sm md:text-base">
              View Case Studies
            </Link>
          </div>
        </section>

        {/* Stats Section */}
        <section aria-label="Key metrics" className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </section>

        {/* Services Section */}
        <section id="services" aria-labelledby="services-heading" className="mb-12 md:mb-16">
          <h2 id="services-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
            Technical SEO Services
          </h2>
          <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
            Fix the hidden technical issues preventing your website from ranking
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {servicesList.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </section>

        {/* Process Section */}
        <ProcessSection />

        {/* Core Web Vitals Table */}
        <div id="cwv">
          <CoreWebVitalsTable />
        </div>

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* Tools Section */}
        <ToolsSection />

        {/* Pricing Plans */}
        <PricingPlansSection />

        {/* EEAT Section */}
        <EEATSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Section */}
        <section aria-label="Call to action" className="text-center bg-gradient-to-r from-[#2C727B] to-[#1A394E] rounded-2xl p-6 md:p-12 text-white">
          <Server className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 opacity-50" />
          <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3">
            Ready to Fix Your Technical SEO Issues?
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-4 md:mb-6 max-w-2xl mx-auto">
            Get a free technical SEO audit and discover exactly what's holding your website back from ranking.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#1A394E] px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-white/90 transition-all hover:scale-105 text-sm md:text-base">
              Get Free Technical SEO Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/case-studies" className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/50 text-white font-semibold hover:bg-white/30 transition-all hover:scale-105 text-sm md:text-base">
              View Case Studies
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/50 text-center">
          <p className="text-[10px] md:text-xs text-[#1A394E]/40">© {CURRENT_YEAR} iCreatixPRO. Technical SEO specialists. Last updated {LAST_UPDATED}.</p>
        </footer>
      </div>
    </main>
  );
}