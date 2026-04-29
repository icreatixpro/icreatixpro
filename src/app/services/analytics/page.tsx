import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  TrendingUp,
  Users,
  Target,
  ArrowRight,
  CheckCircle,
  Clock,
  Sparkles,
  Award,
  Zap,
  DollarSign,
  LineChart,
  Home,
} from "lucide-react";

// ===============================
// ✅ SEO METADATA (OPTIMIZED)
// ===============================
export const metadata: Metadata = {
  title: "SEO Analytics Services for Data-Driven Growth",
  description:
    "Boost growth with SEO analytics services by iCreatixPRO. Track traffic, conversions & user behavior with data-driven insights for better ROI.",
  alternates: {
    canonical: "https://icreatixpro.com/services/analytics/",
  },
  openGraph: {
    title: "SEO Analytics Services for Data-Driven Growth",
    description:
      "Boost growth with SEO analytics services by iCreatixPRO. Track traffic, conversions & user behavior for better ROI.",
    url: "https://icreatixpro.com/services/analytics/",
    siteName: "iCreatixPRO",
    type: "website",
    images: [
      {
        url: "https://icreatixpro.com/og/analytics-og.jpg",
        width: 1200,
        height: 630,
        alt: "iCreatixPRO SEO Analytics Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Analytics Services for Data-Driven Growth",
    description:
      "Boost growth with SEO analytics services by iCreatixPRO. Track traffic, conversions & user behavior.",
    images: ["https://icreatixpro.com/og/analytics-og.jpg"],
  },
  // ✅ IMPROVED KEYWORDS (Long-tail SEO)
  keywords: [
    "SEO analytics",
    "data-driven growth",
    "website analytics",
    "conversion tracking",
    "user behavior analytics",
    "SEO tracking",
    "google analytics integration",
    "GA4 tracking",
    "conversion optimization services",
    "website performance tracking",
    "iCreatixPRO analytics",
  ],
};

// ===============================
// ✅ SCHEMA - Service
// ===============================
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Analytics Services",
  provider: {
    "@type": "Organization",
    name: "iCreatixPRO",
    url: "https://icreatixpro.com",
    logo: "https://icreatixpro.com/logo.png",
  },
  url: "https://icreatixpro.com/services/analytics/",
  description:
    "Boost growth with SEO analytics services by iCreatixPRO. Track traffic, conversions & user behavior with data-driven insights for better ROI.",
  serviceType: "SEO Analytics",
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Analytics Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Website Analytics",
        description: "Track and analyze every visitor interaction in real-time",
      },
      {
        "@type": "Offer",
        name: "SEO Performance Analytics",
        description: "Improve search visibility with deep SEO tracking",
      },
      {
        "@type": "Offer",
        name: "User Behavior Analytics",
        description: "Understand how users interact with your website",
      },
      {
        "@type": "Offer",
        name: "Conversion Tracking",
        description: "Measure leads, sales, and ROI with precision",
      },
    ],
  },
};

// ===============================
// ✅ SCHEMA - BreadcrumbList (VERY IMPORTANT)
// ===============================
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
      name: "Services",
      item: "https://icreatixpro.com/services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Analytics",
      item: "https://icreatixpro.com/services/analytics/",
    },
  ],
};

export default function AnalyticsPage() {
  return (
    <>
      {/* ✅ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30 py-16 px-4 md:py-24 md:px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Visual Breadcrumb for Users */}
          <div className="mb-8">
            <nav className="flex items-center gap-2 text-sm flex-wrap">
              <Link 
                href="/" 
                className="text-[#1A394E]/50 hover:text-[#2C727B] transition-colors flex items-center gap-1"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <span className="text-[#1A394E]/30">/</span>
              <Link 
                href="/services" 
                className="text-[#1A394E]/50 hover:text-[#2C727B] transition-colors"
              >
                Services
              </Link>
              <span className="text-[#1A394E]/30">/</span>
              <span className="text-[#2C727B] font-medium">Analytics</span>
            </nav>
          </div>

          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2C727B]/10 to-[#1A394E]/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-[#2C727B]" />
              <span className="text-sm font-medium text-[#1A394E]">Data-Driven Growth</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#1A394E] to-[#2C727B] bg-clip-text text-transparent mb-6">
              Analytics Services for Data-Driven Business Growth
            </h1>
            
            <p className="text-[#1A394E]/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              At <strong className="text-[#2C727B]">iCreatixPRO</strong>, we deliver powerful analytics services that transform raw data into actionable insights. 
              From website performance tracking to SEO analytics and conversion optimization, 
              we help businesses make smarter, faster, and more profitable decisions.
            </p>
          </div>

          {/* Key Metrics Trust Section - REMOVED Activity icon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { value: "99.9%", label: "Data Accuracy & Uptime", icon: TrendingUp },
              { value: "24/7", label: "Analytics Support", icon: Clock },
              { value: "500+", label: "Business Projects Analyzed", icon: BarChart3 },
              { value: "50M+", label: "Data Points Processed", icon: LineChart },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/50 backdrop-blur-sm rounded-xl p-4 text-center border border-white/60 hover:shadow-md transition-all"
              >
                <stat.icon className="w-6 h-6 text-[#2C727B] mx-auto mb-2" />
                <div className="text-xl md:text-2xl font-bold text-[#1A394E]">{stat.value}</div>
                <div className="text-[10px] md:text-xs text-[#1A394E]/50">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            
            {/* Website Analytics */}
            <div className="group bg-white/40 backdrop-blur-sm rounded-2xl border border-white/60 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-[#1A394E] mb-2">Website Analytics</h2>
              <p className="text-[#1A394E]/60 text-sm mb-4">
                Track and analyze every visitor interaction with advanced real-time analytics tools.
              </p>
              <div className="space-y-2">
                {["Real-time visitor tracking", "Custom performance dashboards", "Traffic source analysis", "Detailed engagement reports"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-[#1A394E]/70">
                    <CheckCircle className="w-4 h-4 text-[#2C727B]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SEO Performance Analytics */}
            <div className="group bg-white/40 backdrop-blur-sm rounded-2xl border border-white/60 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-[#1A394E] mb-2">SEO Performance Analytics</h2>
              <p className="text-[#1A394E]/60 text-sm mb-4">
                Improve your search visibility with deep SEO tracking and keyword intelligence.
              </p>
              <div className="space-y-2">
                {["Keyword ranking monitoring", "Competitor SEO analysis", "Organic traffic growth tracking", "Backlink performance insights"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-[#1A394E]/70">
                    <CheckCircle className="w-4 h-4 text-[#2C727B]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* User Behavior Analytics */}
            <div className="group bg-white/40 backdrop-blur-sm rounded-2xl border border-white/60 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-[#1A394E] mb-2">User Behavior Analytics</h2>
              <p className="text-[#1A394E]/60 text-sm mb-4">
                Understand how users interact with your website to optimize experience and engagement.
              </p>
              <div className="space-y-2">
                {["Heatmaps & click tracking", "Session recordings", "User journey analysis", "Funnel drop-off insights"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-[#1A394E]/70">
                    <CheckCircle className="w-4 h-4 text-[#2C727B]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conversion Tracking */}
            <div className="group bg-white/40 backdrop-blur-sm rounded-2xl border border-white/60 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-[#1A394E] mb-2">Conversion Tracking</h2>
              <p className="text-[#1A394E]/60 text-sm mb-4">
                Measure what matters—leads, sales, and ROI with precision tracking systems.
              </p>
              <div className="space-y-2">
                {["Goal tracking setup", "Conversion rate optimization", "ROI performance reports", "Attribution modeling"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-[#1A394E]/70">
                    <CheckCircle className="w-4 h-4 text-[#2C727B]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Choose iCreatixPRO Analytics */}
          <div className="bg-gradient-to-r from-[#1A394E]/5 to-[#2C727B]/5 rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-3">
                Why Choose iCreatixPRO Analytics?
              </h2>
              <p className="text-[#1A394E]/60 max-w-2xl mx-auto">
                We don't just show data—we turn it into growth strategies.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Brain,
                  title: "Smarter Data-Driven Decisions",
                  description: "Make informed choices based on real insights",
                },
                {
                  icon: DollarSign,
                  title: "Higher ROI from Marketing",
                  description: "Optimize campaigns for maximum returns",
                },
                {
                  icon: Zap,
                  title: "Faster Business Scaling",
                  description: "Identify and scale what works best",
                },
                {
                  icon: Award,
                  title: "Competitive Advantage",
                  description: "Stay ahead with real-time analytics",
                },
              ].map((benefit, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white/50 flex items-center justify-center mx-auto mb-3">
                    <benefit.icon className="w-6 h-6 text-[#2C727B]" />
                  </div>
                  <h3 className="font-semibold text-[#1A394E] mb-1">{benefit.title}</h3>
                  <p className="text-xs text-[#1A394E]/50">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section - Improved */}
          <div className="text-center bg-gradient-to-r from-[#2C727B] to-[#1A394E] rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Ready to Unlock Powerful Business Insights?
            </h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Start making data-driven decisions today with iCreatixPRO analytics services.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#1A394E] px-8 py-3 rounded-full font-semibold hover:bg-white/90 hover:scale-105 transition-all duration-300 hover:gap-3"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-white/50 text-center">
            <p className="text-xs text-[#1A394E]/40">
              © {new Date().getFullYear()} iCreatixPRO. All rights reserved.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

// ===============================
// ✅ Custom Icons (Not in lucide-react)
// ===============================

// Gauge Icon (replaces Activity)
function Gauge(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M4.93 4.93l2.83 2.83" />
      <path d="M16.24 16.24l2.83 2.83" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M4.93 19.07l2.83-2.83" />
      <path d="M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

// Brain Icon
function Brain(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4a4 4 0 0 1 3.5 6A4 4 0 0 1 12 18a4 4 0 0 1-3.5-6A4 4 0 0 1 12 4z" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4 12H2" />
      <path d="M22 12h-2" />
      <path d="M19.07 4.93l-1.41 1.41" />
      <path d="M6.34 17.66l-1.41 1.41" />
      <path d="M17.66 6.34l1.41-1.41" />
      <path d="M6.34 6.34L4.93 4.93" />
    </svg>
  );
}