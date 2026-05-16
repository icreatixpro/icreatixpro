import type { Metadata } from "next";
import Link from "next/link";
import { 
  TrendingUp, BarChart3, Users, 
  Award, Clock, ArrowRight, Sparkles, 
  Globe, Bot, Rocket, Target, LineChart, Heart, Shield
} from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies | AI SEO & SaaS Growth Results iCreatixPRO",
  description:
    "Real SEO, AI & GEO case studies from iCreatixPRO. See how we boosted rankings, AI citations, and revenue for global SaaS, e‑commerce & enterprise brands.",
alternates: {
  canonical: "/case-studies",
},
  openGraph: {
    title: "Case Studies | AI SEO & SaaS Growth Results",
    description:
      "Proven case studies: +189% traffic, 97% AI visibility, 120% organic signups. See our work for USA, UK, UAE brands.",
    url: "https://icreatixpro.com/case-studies",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | iCreatixPRO",
    description: "Real growth stories from global brands.",
  },
};

export const revalidate = 86400;

// Case study data (no links inside)
const caseStudies = [
  {
    id: 1,
    title: "SaaS Platform (USA)",
    category: "AI SEO & GEO",
    industry: "SaaS / B2B",
    region: "USA",
    client: "TechStart Inc.",
    before: {
      organicTraffic: "8,000 /mo",
      aiCitations: 0,
      revenue: "$120k /mo",
    },
    after: {
      organicTraffic: "23,120 /mo",
      aiCitations: 15,
      revenue: "$342k /mo",
    },
    metrics: [
      { label: "Organic Traffic", before: "8k", after: "23.1k", change: "+189%" },
      { label: "AI Citations", before: "0", after: "15+ keywords", change: "New" },
      { label: "Revenue", before: "$120k", after: "$342k", change: "+185%" },
    ],
    quote: "iCreatixPRO’s AI SEO & GEO strategy got us cited in ChatGPT for 15+ terms. Our organic pipeline grew 3x in 6 months.",
    author: "Sarah Johnson, CEO",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "E‑commerce Brand (UAE)",
    category: "GEO & AI Search",
    industry: "E‑commerce / Retail",
    region: "UAE",
    client: "FashionHub",
    before: {
      organicRevenue: "$45k",
      aiVisibility: "None",
      sgeCtr: "2%",
    },
    after: {
      organicRevenue: "$64.8k",
      aiVisibility: "Cited in Perplexity & Gemini",
      sgeCtr: "11%",
    },
    metrics: [
      { label: "Organic Revenue", before: "$45k", after: "$64.8k", change: "+44%" },
      { label: "AI Visibility", before: "None", after: "Cited in 3 AI engines", change: "97% increase" },
      { label: "SGE CTR", before: "2%", after: "11%", change: "+450%" },
    ],
    quote: "GEO optimization from iCreatixPRO put our products inside ChatGPT answers. Sales from organic nearly doubled.",
    author: "Emily Rodriguez, Founder",
    icon: Globe,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 3,
    title: "B2B SaaS Platform (UK)",
    category: "SaaS Technical SEO",
    industry: "SaaS / Enterprise",
    region: "UK",
    client: "Cloudlytics",
    before: {
      pagesIndexed: "40%",
      lcpScore: "4.5s",
      organicSignups: "220 /mo",
    },
    after: {
      pagesIndexed: "95%",
      lcpScore: "1.9s",
      organicSignups: "484 /mo",
    },
    metrics: [
      { label: "Indexation", before: "40%", after: "95%", change: "+137% more pages" },
      { label: "LCP", before: "4.5s", after: "1.9s", change: "58% faster" },
      { label: "Organic Signups", before: "220", after: "484", change: "+120%" },
    ],
    quote: "Technical SEO overhaul fixed our faceted navigation and JS issues. We now dominate niche keywords with 95% indexation.",
    author: "Michael Chen, CTO",
    icon: BarChart3,
    color: "from-violet-500 to-purple-500",
  },
  {
    id: 4,
    title: "Healthcare Lead Gen (USA)",
    category: "Local SEO + PPC",
    industry: "Healthcare",
    region: "USA",
    client: "MediConnect",
    before: {
      localLeads: "85 /mo",
      mapPackRank: "Not in top 10",
    },
    after: {
      localLeads: "312 /mo",
      mapPackRank: "#1 in Google Maps (3 markets)",
    },
    metrics: [
      { label: "Local Leads", before: "85", after: "312", change: "+267%" },
      { label: "Google Maps", before: "Not ranked", after: "Top 3 positions", change: "Dominant" },
    ],
    quote: "Our Google Maps presence exploded. Now we get more leads than we can handle from local search.",
    author: "Dr. James Wilson, Owner",
    icon: Target,
    color: "from-orange-500 to-red-500",
  },
];

const stats = [
  { value: "98%", label: "Client Retention", icon: Heart },
  { value: "600+", label: "Projects Completed", icon: Award },
  { value: "15+", label: "Countries Served", icon: Globe },
  { value: "$42M+", label: "Revenue Generated", icon: TrendingUp },
];

const categories = ["All", "AI SEO & GEO", "SaaS Technical SEO", "Local SEO + PPC"];

function MetricCard({ metric }: { metric: { label: string; before: string; after: string; change: string } }) {
  return (
    <div className="bg-gray-50 rounded-lg p-3 text-center">
      <p className="text-xs text-gray-500">{metric.label}</p>
      <div className="flex items-center justify-center gap-2 mt-1">
        <span className="text-sm text-red-500 line-through">{metric.before}</span>
        <ArrowRight className="w-3 h-3 text-gray-400" />
        <span className="text-sm font-bold text-green-600">{metric.after}</span>
      </div>
      <span className="text-xs font-semibold text-[#2C727B]">{metric.change}</span>
    </div>
  );
}

export default function CaseStudiesPage() {
  const lastUpdated = "2026-05-10";

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Case Studies",
    url: "https://icreatixpro.com/case-studies/",
    description: "SEO and digital marketing case studies from iCreatixPRO showing real growth results.",
    publisher: { "@type": "Organization", name: "iCreatixPRO", url: "https://icreatixpro.com" },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://icreatixpro.com" },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://icreatixpro.com/case-studies" },
    ],
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6 md:pt-36 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A394E] via-[#2C727B] to-[#1A394E] opacity-95" />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#2C727B]" />
            <span className="text-sm text-white/90 font-semibold">Trusted by Global Brands</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Real Growth,{" "}
            <span className="bg-gradient-to-r from-[#2C727B] via-white to-[#2C727B] bg-clip-text text-transparent">
              Real Results
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Explore how we’ve transformed organic performance, AI visibility, and revenue for SaaS, e‑commerce, and enterprise brands worldwide.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20">
                  <Icon className="w-6 h-6 text-[#2C727B] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/70">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C727B]/10 mb-4">
              <Rocket className="w-4 h-4 text-[#2C727B]" />
              <span className="text-sm text-[#2C727B] font-semibold">Success Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E]">
              Data‑Proven{" "}
              <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
                Transformations
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              See the exact strategies and metrics behind our clients’ growth.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat, idx) => (
              <button key={idx} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${cat === "All" ? "bg-[#2C727B] text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-100 border"}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => {
              const Icon = study.icon;
              return (
                <div key={study.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className={`h-2 bg-gradient-to-r ${study.color}`} />
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{study.region}</span>
                        <p className="text-xs text-gray-400 mt-1">{study.industry}</p>
                      </div>
                    </div>
                    <span className="inline-block mt-3 text-xs font-semibold text-[#2C727B] uppercase tracking-wide">{study.category}</span>
                    <h3 className="text-2xl font-bold text-[#1A394E] mt-1">{study.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">Client: {study.client}</p>
                    
                    <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {study.metrics.map((metric, idx) => (
                        <MetricCard key={idx} metric={metric} />
                      ))}
                    </div>

                    <div className="mt-5 p-4 bg-gray-50 rounded-xl border-l-4 border-[#2C727B]">
                      <p className="text-gray-700 italic text-sm">“{study.quote}”</p>
                      <p className="text-xs font-semibold text-[#1A394E] mt-2">— {study.author}</p>
                    </div>

                    {/* No "Read full case study" link – detail pages not in approved list */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Trust iCreatixPRO */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#2C727B]/5 via-white to-[#1A394E]/5">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm mb-4">
            <Shield className="w-4 h-4 text-[#2C727B]" />
            <span className="text-sm text-[#2C727B] font-semibold">The iCreatixPRO Difference</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E]">
            AI‑Powered, Globally Proven,<br />
            <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
              Client‑First Growth
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Bot className="w-10 h-10 text-[#2C727B] mx-auto mb-3" />
              <h3 className="font-bold text-xl">AI & GEO Specialists</h3>
              <p className="text-gray-600 text-sm mt-2">We optimise for Google & AI engines – ChatGPT, Perplexity, Gemini.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Globe className="w-10 h-10 text-[#2C727B] mx-auto mb-3" />
              <h3 className="font-bold text-xl">Global Reach</h3>
              <p className="text-gray-600 text-sm mt-2">Proven success for clients in USA, UK, UAE, Europe & Australia.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <LineChart className="w-10 h-10 text-[#2C727B] mx-auto mb-3" />
              <h3 className="font-bold text-xl">Transparent Reporting</h3>
              <p className="text-gray-600 text-sm mt-2">Real‑time dashboards with revenue attribution and AI citation tracking.</p>
            </div>
          </div>
          <p className="mt-8 text-gray-600 text-sm">
            Want similar results? Explore our{" "}
            <Link href="/services" className="text-[#2C727B] font-semibold underline">growth services</Link>.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#2C727B] to-[#1A394E] rounded-3xl p-10 text-center">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Achieve Similar Growth?
              </h2>
              <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
                Get a free, no‑obligation AI SEO & Growth audit tailored to your business.
              </p>
              <Link href="/contact">
                <button className="px-8 py-3.5 bg-white text-[#1A394E] font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                  Get Your Free Growth Plan →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer – only 3 approved links: Home, About, Services */}
      <div className="text-center pb-12 text-sm text-gray-400">
        <Link href="/" className="hover:text-[#2C727B]">Home</Link> <span className="mx-2">|</span>
        <Link href="/about" className="hover:text-[#2C727B]">About</Link> <span className="mx-2">|</span>
        <Link href="/services" className="hover:text-[#2C727B]">Services</Link>
        <p className="mt-4 text-gray-400 text-xs">Last updated: {lastUpdated}</p>
      </div>
    </main>
  );
}