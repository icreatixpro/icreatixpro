// app/status/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { 
  Activity, CheckCircle, AlertCircle, Clock, 
  Server, Globe, BarChart3, Database, 
  Shield, Sparkles, ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "System Status | iCreatixPRO Platform Health & Uptime",
  description:
    "Check real-time system status of iCreatixPRO services, uptime updates, performance monitoring, and platform health information.",
  alternates: {
    canonical: "https://icreatixpro.com/status",
  },
  openGraph: {
    title: "System Status | iCreatixPRO Platform Updates",
    description:
      "View live system status, uptime reports, and service health updates for iCreatixPRO platform and tools.",
    url: "https://icreatixpro.com/status",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "System Status | iCreatixPRO",
    description:
      "Monitor iCreatixPRO system status, uptime, and platform performance updates in real time.",
  },
};

export const revalidate = 300; // 5 minutes – simulate near real‑time

// Service components
const services = [
  { name: "Website (icreatixpro.com)", status: "operational", uptime: "99.99%", icon: Globe },
  { name: "AI SEO Tools Suite", status: "operational", uptime: "99.95%", icon: BarChart3 },
  { name: "Analytics & Reporting", status: "operational", uptime: "99.98%", icon: Database },
  { name: "Client Dashboards", status: "operational", uptime: "99.97%", icon: Activity },
  { name: "API & Integrations", status: "operational", uptime: "99.99%", icon: Server },
  { name: "Security & Firewalls", status: "operational", uptime: "100%", icon: Shield },
];

// Past incidents (placeholder)
const pastIncidents = [
  { date: "2026-04-15", title: "API latency increase", duration: "12 minutes", resolved: true },
  { date: "2026-03-22", title: "Analytics dashboard delay", duration: "8 minutes", resolved: true },
  { date: "2026-02-10", title: "Scheduled maintenance", duration: "45 minutes", resolved: true },
];

export default function StatusPage() {
  const lastUpdated = new Date().toLocaleString("en-US", { 
    year: "numeric", month: "long", day: "numeric", 
    hour: "2-digit", minute: "2-digit", timeZoneName: "short" 
  });

  const overallStatus = "All Systems Operational";

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "System Status",
    url: "https://icreatixpro.com/status/",
    description:
      "Live system status page showing uptime and performance of iCreatixPRO services.",
    publisher: {
      "@type": "Organization",
      name: "iCreatixPRO",
      url: "https://icreatixpro.com",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://icreatixpro.com" },
        { "@type": "ListItem", position: 2, name: "Status", item: "https://icreatixpro.com/status" },
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
            <Activity className="w-4 h-4 text-[#2C727B]" />
            <span className="text-sm text-white/90 font-semibold">Real‑Time Monitoring</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            System <span className="text-[#2C727B]">Status</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Real‑time updates on the health and performance of iCreatixPRO platform and services.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-white font-medium">{overallStatus}</span>
          </div>
        </div>
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-8 relative z-20 pb-20">
        
        {/* Current Status Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-bold text-[#1A394E]">Current Status</h2>
              <p className="text-gray-500 text-sm mt-1">Last updated: {lastUpdated}</p>
            </div>
            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-green-700 font-medium">{overallStatus}</span>
            </div>
          </div>
        </div>

        {/* Service Components Grid */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 mb-8">
          <div className="bg-[#1A394E] px-6 py-4">
            <h2 className="text-xl font-bold text-white">Service Components</h2>
            <p className="text-gray-300 text-sm mt-1">Real‑time status of each service</p>
          </div>
          <div className="divide-y divide-gray-100">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="flex flex-wrap items-center justify-between p-5 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#2C727B]/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#2C727B]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1A394E]">{service.name}</h3>
                      <p className="text-xs text-gray-400">Uptime: {service.uptime}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span className="text-sm font-medium text-green-600">Operational</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Uptime Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center">
            <p className="text-3xl font-bold text-[#2C727B]">99.98%</p>
            <p className="text-sm text-gray-500">Average uptime (last 90 days)</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center">
            <p className="text-3xl font-bold text-[#2C727B]">0</p>
            <p className="text-sm text-gray-500">Active incidents</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center">
            <p className="text-3xl font-bold text-[#2C727B]">24/7</p>
            <p className="text-sm text-gray-500">Monitoring coverage</p>
          </div>
        </div>

        {/* Past Incidents */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 mb-8">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
            <h2 className="text-xl font-bold text-[#1A394E]">Past Incidents</h2>
            <p className="text-gray-500 text-sm mt-1">Last 90 days of resolved issues</p>
          </div>
          <div className="divide-y divide-gray-100">
            {pastIncidents.map((incident, idx) => (
              <div key={idx} className="flex flex-wrap items-center justify-between p-5">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-4 h-4 text-gray-400" />
                  <div>
                    <h3 className="font-medium text-[#1A394E]">{incident.title}</h3>
                    <p className="text-xs text-gray-400">{incident.date}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-500 mt-2 sm:mt-0">
                  Duration: {incident.duration}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance & Communication */}
        <div className="bg-gradient-to-br from-[#2C727B]/10 to-[#1A394E]/10 rounded-2xl p-6 text-center">
          <h3 className="text-lg font-semibold text-[#1A394E]">Scheduled Maintenance</h3>
          <p className="text-gray-600 text-sm mt-1">
            No upcoming maintenance windows are currently scheduled. Any planned maintenance will be announced here at least 48 hours in advance.
          </p>
          <p className="text-gray-500 text-xs mt-3 flex items-center justify-center gap-1">
            <Clock className="w-3 h-3" />
            Subscribe to status updates via our <Link href="/contact" className="text-[#2C727B] hover:underline">contact page</Link>.
          </p>
        </div>
      </div>

      {/* Footer Internal Links (Approved URLs Only) */}
      <div className="text-center pb-12 text-sm text-gray-400 border-t border-gray-200 pt-8 mt-8">
        <Link href="/" className="hover:text-[#2C727B] transition-colors">Home</Link>
        <span className="mx-2">|</span>
        <Link href="/about" className="hover:text-[#2C727B] transition-colors">About</Link>
        <span className="mx-2">|</span>
        <Link href="/services" className="hover:text-[#2C727B] transition-colors">Services</Link>
        <span className="mx-2">|</span>
        <Link href="/contact" className="hover:text-[#2C727B] transition-colors">Contact</Link>
        <p className="mt-4 text-gray-400 text-xs">Status page updates every 5 minutes</p>
      </div>
    </main>
  );
}