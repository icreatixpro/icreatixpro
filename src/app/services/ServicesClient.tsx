"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Search, MapPin, BarChart3, Globe,
  TrendingUp, Users, Clock, Award,
  Shield, Zap, ArrowRight,
  Sparkles, Rocket, Star,
  Calendar, ChevronRight, Heart,
  Target, LineChart, Code, FileText,
  ShoppingBag, Mail, Bot, Server,
  CheckCircle, Building2
} from "lucide-react";

// ========== SERVICE CLUSTERS WITH LONDON SEO ADDED ==========
const serviceClusters = [
  {
    name: "Growth SEO",
    subtitle: "Proven organic growth strategies",
    gradient: "from-blue-500 to-cyan-500",
    services: [
      {
        slug: "search-engine-optimization",
        title: "SEO Services",
        description: "Data-driven search engine optimization that ranks your business #1 on Google with proven strategies.",
        icon: Search,
        price: "$499/mo",
        results: "200% avg traffic increase",
        popular: false,
        features: ["Advanced Keyword Research", "On-Page SEO", "Technical Audits", "Authority Link Building"]
      },
      {
        slug: "local-seo",
        title: "Local SEO",
        description: "Dominate Google Maps and local pack results to capture nearby customers and drive foot traffic.",
        icon: MapPin,
        price: "$299/mo",
        results: "150% more local leads",
        popular: false,
        features: ["GMB Optimization", "Local Citations", "Review Management", "Map Pack Rankings"]
      },
      {
        slug: "seo-services-london",
        title: "SEO Services London",
        description: "Specialist London SEO agency helping B2B tech companies, SaaS startups & enterprises dominate UK search.",
        icon: Building2,
        price: "$599/mo",
        results: "300%+ UK organic growth",
        popular: false,
        features: ["London Market Expertise", "B2B Tech Focus", "Local + National SEO", "UK Search Domination"]
      },
      {
        slug: "ecommerce-seo",
        title: "E-commerce SEO",
        description: "Increase product page rankings, optimize category architecture, and drive more online sales.",
        icon: ShoppingBag,
        price: "$599/mo",
        results: "200% sales increase",
        popular: false,
        features: ["Product Schema Markup", "Category Optimization", "Faceted Navigation", "Conversion Focus"]
      }
    ]
  }
];

// ===================== FIXED LAZY SECTION =====================
function LazySection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? 0 : "24px"})`,
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
      }}
    >
      {children}
    </section>
  );
}

export default function ServicesClient() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">

      {/* SERVICES SECTION */}
      <LazySection id="services" className="py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C727B]/10 mb-4">
              <Rocket className="w-4 h-4 text-[#2C727B]" />
              <span className="text-sm text-[#2C727B] font-semibold">
                Our Growth Systems
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-[#1A394E] mb-4">
              Three Pillars of{" "}
              <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
                Digital Dominance
              </span>
            </h2>
          </div>

          {serviceClusters.map((cluster) => (
            <div key={cluster.name}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {cluster.services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <div
                      key={service.slug}
                      className="bg-white p-6 rounded-xl border hover:shadow-lg transition-all"
                    >
                      <Icon className="w-6 h-6 text-[#2C727B] mb-3" />
                      <h3 className="font-bold text-[#1A394E]">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2">
                        {service.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

        </div>
      </LazySection>

    </main>
  );
}