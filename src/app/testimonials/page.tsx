import type { Metadata } from "next";
import Link from "next/link";
import { 
  Star, Quote, Users, Award, 
  TrendingUp, Clock, Sparkles, ArrowRight 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Client Testimonials | iCreatixPRO Reviews & Feedback",
  description:
    "Read client testimonials and feedback about iCreatixPRO SEO, web development, and digital growth services delivering real business results.",
  alternates: {
    canonical: "https://icreatixpro.com/testimonials/",
  },
  openGraph: {
    title: "Client Testimonials | iCreatixPRO Reviews & Feedback",
    description:
      "Explore real client testimonials and success feedback from businesses using iCreatixPRO digital marketing and SEO services.",
    url: "https://icreatixpro.com/testimonials/",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials | iCreatixPRO",
    description:
      "See what clients say about iCreatixPRO SEO, web development, and growth services.",
  },
};

export const revalidate = 86400;

// Testimonials data (exactly as in AboutClient component)
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "iCreatixPRO didn't just improve our rankings—they transformed our entire digital presence. Their AI-driven approach generated $5M in organic revenue within 12 months.",
    rating: 5,
    result: "$5M Revenue Generated",
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "CMO, GrowthLabs",
    content:
      "The team at iCreatixPRO understands modern search behavior better than anyone. They helped us dominate AI overviews and voice search results in under 6 months.",
    rating: 5,
    result: "300% Traffic Increase",
    avatar: "MB",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Founder, EcoBrands",
    content:
      "Finally, an agency that delivers what they promise. Our organic visibility increased 400% and we're now ranking for 5,000+ keywords.",
    rating: 5,
    result: "400% Visibility Growth",
    avatar: "ED",
  },
  {
    id: 4,
    name: "Dr. Robert Chen",
    role: "CTO, HealthTech AI",
    content:
      "Their technical SEO expertise is world-class. They optimized our Core Web Vitals from 45 to 95+ and helped us achieve featured snippets for 200+ medical terms.",
    rating: 5,
    result: "95+ Core Web Vitals",
    avatar: "RC",
  },
];

// Stats – consistent with about page style
const stats = [
  { value: "98%", label: "Client Satisfaction", icon: Users },
  { value: "4.98", label: "Average Rating", icon: Star },
  { value: "1500+", label: "Projects Completed", icon: TrendingUp },
  { value: "75+", label: "Expert Team", icon: Users },
];

export default function TestimonialsPage() {
  const lastUpdated = "May 2026";

  const aggregatedRatingSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    name: "iCreatixPRO",
    ratingValue: "4.98",
    bestRating: "5",
    ratingCount: 1500,
    reviewCount: 1500,
    itemReviewed: {
      "@type": "Organization",
      name: "iCreatixPRO",
      url: "https://icreatixpro.com",
    },
  };

  const reviewSchemas = testimonials.map((t) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: 5 },
    reviewBody: t.content,
    itemReviewed: { "@type": "Organization", name: "iCreatixPRO" },
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Testimonials",
    url: "https://icreatixpro.com/testimonials/",
    description:
      "Client testimonials and feedback for iCreatixPRO services.",
    publisher: {
      "@type": "Organization",
      name: "iCreatixPRO",
      url: "https://icreatixpro.com",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://icreatixpro.com/" },
        { "@type": "ListItem", position: 2, name: "Testimonials", item: "https://icreatixpro.com/testimonials/" },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* All Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregatedRatingSchema) }} />
      {reviewSchemas.map((review, idx) => (
        <script key={idx} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(review) }} />
      ))}

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 px-6 md:pt-28 md:pb-20 bg-gradient-to-br from-[#1A394E] via-[#2C727B] to-[#1A394E]">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#2C727B]" />
            <span className="text-sm text-white/90 font-semibold">Client Success</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            What Our{" "}
            <span className="bg-gradient-to-r from-[#2C727B] via-white to-[#2C727B] bg-clip-text text-transparent">
              Clients Say
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Real feedback from businesses who trusted iCreatixPRO to deliver measurable SEO, AI, and digital growth results.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-12">
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
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C727B]/10 mb-4">
              <Quote className="w-4 h-4 text-[#2C727B]" />
              <span className="text-sm text-[#2C727B] font-semibold">Real Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E]">
              Trusted by Businesses{" "}
              <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
                Worldwide
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Hear directly from our clients about their experience and results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <h3 className="font-bold text-[#1A394E] text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                    📈 {testimonial.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators & CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#2C727B]/5 via-white to-[#1A394E]/5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1A394E] mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have achieved measurable growth with iCreatixPRO.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <button className="px-8 py-3.5 bg-[#2C727B] text-white font-semibold rounded-full shadow-md hover:bg-[#1A394E] transition-all">
                Get Your Free Consultation →
              </button>
            </Link>
            <Link href="/case-studies">
              <button className="px-8 py-3.5 border border-[#2C727B] text-[#2C727B] font-semibold rounded-full hover:bg-[#2C727B] hover:text-white transition-all">
                View Case Studies
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Internal Links (Approved URLs Only) */}
      <div className="text-center pb-12 text-sm text-gray-400">
        <Link href="/" className="hover:text-[#2C727B] transition-colors">Home</Link>
        <span className="mx-2">|</span>
        <Link href="/about" className="hover:text-[#2C727B] transition-colors">About</Link>
        <span className="mx-2">|</span>
        <Link href="/services" className="hover:text-[#2C727B] transition-colors">Services</Link>
        <span className="mx-2">|</span>
        <Link href="/contact" className="hover:text-[#2C727B] transition-colors">Contact</Link>
        <p className="mt-4 text-gray-400 text-xs">Last updated: {lastUpdated}</p>
      </div>
    </main>
  );
}