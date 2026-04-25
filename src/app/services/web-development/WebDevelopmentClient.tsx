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
  Code,
  Smartphone,
  ShoppingBag,
  Layout,
  Server,
  Zap,
  Eye,
  Activity,
  Calendar,
  UserCheck,
  BadgeCheck,
  ChevronRight,
  Monitor,
  Palette,
  Database,
  Lock,
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
  { value: "100+", label: "Websites Built", icon: Code },
  { value: "99%", label: "Client Satisfaction", icon: Heart },
  { value: "50%", label: "Avg. Speed Increase", icon: Zap },
  { value: "24/7", label: "Support", icon: Activity },
];

const servicesList = [
  { icon: Layout, title: "Custom Website Design", description: "Unique, custom-designed websites tailored to your brand and business goals.", features: ["Responsive Design", "User-Friendly Interface", "Custom Graphics", "SEO-Optimized Structure", "Fast Load Times"], link: "/services/web-development", ctaText: "View custom design" },
  { icon: ShoppingBag, title: "E-commerce Development", description: "Powerful online stores that drive sales and provide seamless shopping experiences.", features: ["Product Management", "Secure Payments", "Inventory Tracking", "Order Management", "Customer Accounts"], link: "/services/ecommerce-seo", ctaText: "Build e-commerce store" },
  { icon: Code, title: "SEO-Friendly Development", description: "Websites built with SEO best practices to rank higher from day one.", features: ["Clean Code Structure", "Schema Markup", "Meta Tag Optimization", "Mobile-First Design", "Fast Loading Speed"], link: "/services/search-engine-optimization", ctaText: "Boost SEO rankings" },
  { icon: Smartphone, title: "Responsive Web Design", description: "Websites that look and perform perfectly on all devices and screen sizes.", features: ["Mobile-First Approach", "Tablet Optimization", "Cross-Browser Compatible", "Touch-Friendly Design", "Flexible Layouts"], link: "/services/web-development", ctaText: "Make responsive" },
  { icon: Server, title: "CMS Development", description: "Easy-to-manage content management systems for complete control over your website.", features: ["WordPress Development", "Custom CMS", "User-Friendly Admin", "Content Management", "Plugin Integration"], link: "/services/web-development", ctaText: "Build CMS" },
  { icon: Database, title: "Website Maintenance", description: "Ongoing support, updates, and security monitoring to keep your website running smoothly.", features: ["Security Updates", "Performance Monitoring", "Content Updates", "Backup Management", "Technical Support"], link: "/services/web-development", ctaText: "Maintain website" },
];

const technologies = [
  { name: "React", icon: Code },
  { name: "Next.js", icon: Code },
  { name: "Node.js", icon: Server },
  { name: "WordPress", icon: Layout },
  { name: "Shopify", icon: ShoppingBag },
  { name: "WooCommerce", icon: ShoppingBag },
  { name: "Tailwind CSS", icon: Palette },
  { name: "TypeScript", icon: Lock },
];

const plans = [
  { title: "Basic Website", price: "$2,499", features: ["Up to 5 Pages", "Responsive Design", "SEO Optimized", "Contact Form", "Basic Analytics", "30 Days Support"], isPopular: false },
  { title: "Professional Website", price: "$4,999", features: ["Up to 15 Pages", "E-commerce Ready", "Custom Design", "SEO Optimization", "CMS Integration", "90 Days Support", "Performance Optimization"], isPopular: true },
  { title: "Enterprise Solution", price: "Custom", features: ["Unlimited Pages", "Full Custom Development", "Advanced E-commerce", "API Integration", "Scalable Architecture", "Priority Support", "Dedicated Team"], isPopular: false },
];

const reasons = [
  { icon: Award, title: "Expert Developers", desc: "10+ years of development experience" },
  { icon: Users, title: "Client-Focused", desc: "Dedicated project managers" },
  { icon: Shield, title: "Quality Assured", desc: "Rigorous testing process" },
  { icon: Heart, title: "Ongoing Support", desc: "24/7 technical assistance" },
];

const testimonialsData = [
  { name: "John Anderson", role: "CEO, TechStart", content: "The team built a stunning website that perfectly represents our brand. The SEO optimization has already improved our rankings!", rating: 5, result: "40% traffic increase in 3 months" },
  { name: "Sarah Miller", role: "Owner, Fashion Boutique", content: "Our e-commerce store looks incredible and sales have doubled since launch. Highly recommended!", rating: 5, result: "2x sales increase" },
  { name: "David Thompson", role: "Marketing Director", content: "Professional, responsive, and delivered ahead of schedule. The ongoing support has been exceptional.", rating: 5, result: "Launched 2 weeks early" },
];

const faqs = [
  { q: "What web development services do you offer?", a: "We offer custom website development, e-commerce development, SEO-friendly development, responsive design, CMS integration, and website maintenance." },
  { q: "How long does web development take?", a: "Typical website development takes 4-8 weeks depending on complexity, features, and content requirements. Enterprise projects may take 12-16 weeks." },
  { q: "How much does web development cost?", a: "Custom website development starts at $2,500. E-commerce websites start at $3,500. Enterprise solutions are custom-priced based on requirements." },
  { q: "Do you build SEO-friendly websites?", a: "Yes! All websites we build are optimized for SEO including proper HTML structure, meta tags, schema markup, site speed optimization, and mobile responsiveness." },
  { q: "What platforms do you develop on?", a: "We develop on multiple platforms including React, Next.js, WordPress, Shopify, WooCommerce, and custom solutions tailored to your needs." },
  { q: "Do you provide ongoing maintenance?", a: "Yes! We offer ongoing maintenance packages including security updates, performance monitoring, content updates, and technical support." },
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
        <span className="text-[#2C727B] font-medium" aria-current="page">Web Development</span>
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
        {plan.price !== "Custom" && <p className="text-xs text-[#1A394E]/50 mt-1">one-time</p>}
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
        Web Development Pricing Packages
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

function TechnologiesSection() {
  return (
    <section aria-labelledby="tech-heading" className="mb-12 md:mb-16 text-center">
      <h2 id="tech-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-3 md:mb-4">
        Technologies We Use
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base mb-6 md:mb-8">Modern tools and frameworks for cutting-edge web development</p>
      <div className="flex flex-wrap justify-center gap-3">
        {technologies.map((tech, idx) => (
          <span key={idx} className="px-4 py-2 rounded-lg bg-white border border-gray-100 text-[#1A394E] text-sm font-medium shadow-sm flex items-center gap-2">
            <tech.icon className="w-4 h-4 text-[#2C727B]" />
            {tech.name}
          </span>
        ))}
      </div>
    </section>
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

function WhyChooseUsSection() {
  return (
    <section aria-labelledby="why-heading" className="mb-12 md:mb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 id="why-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-4 md:mb-6">
            Why Choose Our Web Development Services?
          </h2>
          <div className="space-y-3 md:space-y-4">
            {reasons.map((reason, idx) => (
              <div key={idx} className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#2C727B]/10 flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-4 h-4 md:w-5 md:h-5 text-[#2C727B]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A394E] text-sm md:text-base">{reason.title}</h3>
                  <p className="text-xs md:text-sm text-[#1A394E]/60">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-teal-50 rounded-xl">
            <div className="flex items-center gap-3">
              <ThumbsUp className="w-6 h-6 md:w-8 md:h-8 text-[#2C727B]" />
              <div>
                <p className="font-semibold text-[#1A394E] text-sm md:text-base">Free Consultation</p>
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

function ProcessSection() {
  const steps = [
    { step: "01", title: "Discovery", desc: "Requirements gathering" },
    { step: "02", title: "Design", desc: "Wireframes & mockups" },
    { step: "03", title: "Development", desc: "Coding & building" },
    { step: "04", title: "Testing", desc: "Quality assurance" },
    { step: "05", title: "Launch", desc: "Deployment & go-live" },
    { step: "06", title: "Support", desc: "Ongoing maintenance" },
  ];

  return (
    <section id="process" aria-labelledby="process-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
      <h2 id="process-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Our Web Development Process
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        A proven 6-step methodology for successful web development
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
          <div><p className="text-xs text-[#1A394E]/50">Reviewed By</p><p className="font-semibold text-[#1A394E]">Michael Stewart, Head of Web Development</p></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center"><BadgeCheck className="w-6 h-6 text-[#2C727B]" /></div>
          <div><p className="text-xs text-[#1A394E]/50">Certification</p><p className="font-semibold text-[#1A394E]">Google Partner</p></div>
        </div>
      </div>
      <div className="text-center pt-4 border-t border-gray-100">
        <p className="text-sm text-[#1A394E]/60">Our team specializes in web development with proven results for 100+ businesses. We use modern technologies and industry best practices.</p>
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
        Web Development FAQs
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        Everything you need to know about our web development services
      </p>
      <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} faq={faq} idx={idx} isOpen={openIndex === idx} toggle={() => toggleFAQ(idx)} />
        ))}
      </div>
    </section>
  );
}

// ===============================
// ✅ MAIN CLIENT COMPONENT
// ===============================
export default function WebDevelopmentClient() {
  return (
    <main id="main-content" role="main" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30 py-12 md:py-16 lg:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb />
        <TableOfContents />

        {/* Hero Section */}
        <section aria-labelledby="main-heading" className="text-center mb-12 md:mb-16">
          <div className="mb-6 md:mb-8 flex justify-center">
            <Image
              src="/web-development-services.webp"
              width={800}
              height={420}
              priority
              fetchPriority="high"
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACwAQCdASoQAAwABkC4JZQCdAE2uBMAAOAAwCp8LAXmDAAA"
              alt="Web development services including custom website design, e-commerce development and SEO-friendly development by iCreatixPRO"
              className="rounded-xl shadow-lg w-full max-w-4xl h-auto"
              sizes="(max-width: 768px) 100vw, 1200px"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-[#1A394E]/60">
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> Expert Developers</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> 100+ Websites Built</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> SEO Optimized</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#2C727B]" /> 24/7 Support</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2C727B]/10 to-[#1A394E]/10 rounded-full px-3 py-1 md:px-4 md:py-2 mb-4 md:mb-6">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#2C727B]" />
            <span className="text-xs md:text-sm font-medium text-[#1A394E]">Web Development Experts</span>
          </div>

          <h1 id="main-heading" className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#1A394E] to-[#2C727B] bg-clip-text text-transparent mb-4 md:mb-6">
            Custom Web Development That Drives Results
          </h1>

          <p className="text-[#1A394E]/70 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Professional web development services tailored to your business needs. Custom websites, e-commerce solutions, and SEO-friendly development that ranks.
          </p>

          <div className="mt-4 md:mt-6">
            <p className="text-[#1A394E]/70 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              At <strong className="text-[#2C727B]">iCreatixPRO</strong>, we build fast, responsive, and search-engine-optimized websites that help your business grow online.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-3">
              <Link href="/services/search-engine-optimization" className="text-[#2C727B] hover:underline font-medium text-sm md:text-base">SEO optimization →</Link>
              <Link href="/services/ecommerce-seo" className="text-[#2C727B] hover:underline font-medium text-sm md:text-base">E-commerce SEO →</Link>
              <Link href="/services/technical-seo" className="text-[#2C727B] hover:underline font-medium text-sm md:text-base">Technical SEO →</Link>
              <Link href="/blogs" className="text-[#2C727B] hover:underline font-medium text-sm md:text-base">Development insights →</Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-6 md:mt-8">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm md:text-base">
              Get Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/case-studies" className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/50 text-[#1A394E] font-semibold hover:bg-white/90 transition-all hover:scale-105 text-sm md:text-base">
              View Portfolio
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
            Web Development Services
          </h2>
          <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
            End-to-end web development solutions tailored to your business needs
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {servicesList.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </section>

        {/* Process Section */}
        <ProcessSection />

        {/* Technologies Section */}
        <TechnologiesSection />

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* Pricing Plans */}
        <PricingPlansSection />

        {/* EEAT Section */}
        <EEATSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Section */}
        <section aria-label="Call to action" className="text-center bg-gradient-to-r from-[#2C727B] to-[#1A394E] rounded-2xl p-6 md:p-12 text-white">
          <Code className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 opacity-50" />
          <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3">
            Ready to Build Your Website?
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-4 md:mb-6 max-w-2xl mx-auto">
            Get a free consultation and discover how our web development services can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#1A394E] px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-white/90 transition-all hover:scale-105 text-sm md:text-base">
              Get Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/case-studies" className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/50 text-white font-semibold hover:bg-white/30 transition-all hover:scale-105 text-sm md:text-base">
              View Portfolio
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/50 text-center">
          <p className="text-[10px] md:text-xs text-[#1A394E]/40">© {CURRENT_YEAR} iCreatixPRO. Web development specialists. Last updated {LAST_UPDATED}.</p>
        </footer>
      </div>
    </main>
  );
}