import type { Metadata } from "next";
import Link from "next/link";
import { 
  Rocket, Search, Brush, Code, Briefcase, 
  Users, Clock, Award, ArrowRight, 
  Sparkles, Star, Heart, CheckCircle 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers at iCreatixPRO | Join AI SEO & Web Development Team",
  description:
    "Join iCreatixPRO internship program for SEO, web development, and graphic design. Learn AI-powered digital marketing and grow your career with real projects.",
  alternates: {
    canonical: "https://icreatixpro.com/careers",
  },
  openGraph: {
    title: "Careers at iCreatixPRO | Join Digital Growth Team",
    description:
      "We are hiring interns in SEO, Web Development, and Graphic Design to build AI-driven digital solutions.",
    url: "https://icreatixpro.com/careers",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at iCreatixPRO",
    description:
      "Join AI SEO, Web Dev & Design internship program at iCreatixPRO.",
  },
};

export const revalidate = 3600;

// Job data
const jobs = [
  {
    slug: "seo-internship",
    title: "SEO Internship",
    icon: Search,
    description: "Learn AI-powered SEO, keyword research, and ranking strategies on real global projects.",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "AI Content Tools", "Performance Tracking"],
    duration: "3 months",
    stipend: "Performance-based stipend",
    type: "Remote",
  },
  {
    slug: "graphic-design-internship",
    title: "Graphic Design Internship",
    icon: Brush,
    description: "Create modern UI, branding, and social media visuals for clients in USA, UK, UAE & Europe.",
    features: ["Brand Identity", "Social Media Design", "UI/UX Basics", "Adobe Creative Suite", "Figma"],
    duration: "3 months",
    stipend: "Performance-based stipend",
    type: "Remote",
  },
  {
    slug: "web-development-internship",
    title: "Web Development Internship",
    icon: Code,
    description: "Build real websites and web apps using Next.js, React, and Tailwind CSS for global brands.",
    features: ["Next.js / React", "Tailwind CSS", "API Integration", "Git & GitHub", "Performance Optimization"],
    duration: "3 months",
    stipend: "Performance-based stipend",
    type: "Remote",
  },
];

// Stats
const stats = [
  { value: "50+", label: "Interns Trained", icon: Users },
  { value: "90%", label: "Placement Rate", icon: Award },
  { value: "15+", label: "Live Projects", icon: Rocket },
  { value: "24/7", label: "Mentorship", icon: Clock },
];

// FAQ data
const faqs = [
  { q: "Is this a paid internship?", a: "We offer performance-based stipends. High performers receive additional benefits and full-time opportunities." },
  { q: "What is the duration?", a: "All internships are 3 months (flexible based on performance)." },
  { q: "Is it remote?", a: "Yes, fully remote – work from anywhere." },
  { q: "What are the selection criteria?", a: "Portfolio/relevant projects, basic skills test, and a short interview." },
  { q: "Will I get a certificate?", a: "Yes, you receive a completion certificate and a recommendation letter based on performance." },
];

export default function CareersPage() {
  // Schema remains the same but we'll keep it inside the component
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "iCreatixPRO",
    url: "https://icreatixpro.com",
    description: "Global digital marketing agency offering SEO, web development, and AI-powered growth solutions.",
    sameAs: [
      "https://www.facebook.com/icreatixpro/",
      "https://www.instagram.com/icreatixpro/",
      "https://www.linkedin.com/company/icreatixpro/",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://icreatixpro.com/" },
      { "@type": "ListItem", position: 2, name: "Careers", item: "https://icreatixpro.com/careers/" },
    ],
  };

const jobsSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Digital Internship Program - SEO, Web Development, Design",
  description: "Join iCreatixPRO internship program in SEO, Web Development, and Graphic Design.",
  datePosted: "2026-05-01",
  validThrough: "2026-12-31",
  employmentType: "INTERN",
  hiringOrganization: {
    "@type": "Organization",
    name: "iCreatixPRO",
    url: "https://icreatixpro.com",
  },
  jobLocationType: "TELECOMMUTE",
  applicantLocationRequirements: {
    "@type": "Country",
    name: "Worldwide",
  },
};

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      
      {/* Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobsSchema) }} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6 md:pt-36 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A394E] via-[#2C727B] to-[#1A394E] opacity-95" />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#2C727B]" />
            <span className="text-sm text-white/90 font-semibold">Join Our Team</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Build Your Future with{" "}
            <span className="bg-gradient-to-r from-[#2C727B] via-white to-[#2C727B] bg-clip-text text-transparent">
              AI-Powered Growth
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Hands-on internships in SEO, Web Development & Graphic Design. Work on real global projects, learn from experts, and kickstart your career.
          </p>
          <div className="mt-8">
            <Link href="#internships">
              <button className="group px-8 py-3.5 bg-white text-[#1A394E] font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                View Open Positions
                <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
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

      {/* Internship Cards */}
      <section id="internships" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C727B]/10 mb-4">
              <Rocket className="w-4 h-4 text-[#2C727B]" />
              <span className="text-sm text-[#2C727B] font-semibold">Open Internships</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E]">
              Start Your{" "}
              <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
                Journey Today
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              3-month remote programs designed to give you real-world skills and experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, idx) => {
              const Icon = job.icon;
              return (
                <div key={idx} className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
                  <div className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A394E]">{job.title}</h3>
                    <p className="mt-2 text-gray-600 text-sm">{job.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.features.slice(0, 3).map((f, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{f}</span>
                      ))}
                      {job.features.length > 3 && <span className="text-xs text-[#2C727B]">+{job.features.length - 3} more</span>}
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[#2C727B] font-semibold">{job.duration}</span>
                        <span className="text-gray-500">{job.type}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{job.stipend}</p>
                    </div>
                    <div className="mt-4">
                      <Link href="/contact">
                        <span className="inline-flex items-center gap-1 text-[#2C727B] text-sm font-medium group-hover:gap-2 transition-all">
                          Apply Now <ArrowRight className="w-4 h-4" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Join iCreatixPRO */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#2C727B]/5 via-white to-[#1A394E]/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm mb-4">
              <Heart className="w-4 h-4 text-[#2C727B]" />
              <span className="text-sm text-[#2C727B] font-semibold">Why Intern With Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E]">
              More Than Just{" "}
              <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
                an Internship
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6 text-[#2C727B]" />
              </div>
              <h3 className="font-bold text-xl">Real Projects</h3>
              <p className="text-gray-600 text-sm mt-2">Work on live client projects for USA, UK, UAE & European brands.</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-[#2C727B]" />
              </div>
              <h3 className="font-bold text-xl">Expert Mentorship</h3>
              <p className="text-gray-600 text-sm mt-2">Learn directly from industry veterans in SEO, Dev & Design.</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-[#2C727B]" />
              </div>
              <h3 className="font-bold text-xl">Growth Path</h3>
              <p className="text-gray-600 text-sm mt-2">Top performers get full-time offers and career placement support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E]">
              Frequently Asked <span className="text-[#2C727B]">Questions</span>
            </h2>
            <p className="mt-2 text-gray-600">Everything you need to know about our internship program</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-[#1A394E] flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2C727B]" />
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Urgency */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#2C727B] to-[#1A394E] rounded-3xl p-10 text-center">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Limited Slots Available
              </h2>
              <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
                We accept only 10–15 interns per batch. Apply now to secure your spot.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <button className="px-8 py-3.5 bg-white text-[#1A394E] font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                    Apply Now →
                  </button>
                </Link>
                <Link href="/about">
                  <button className="px-8 py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition">
                    Learn About Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb links (simple) */}
      <div className="text-center pb-12 text-sm text-gray-400">
        <Link href="/" className="hover:text-[#2C727B]">Home</Link> <span className="mx-2">|</span>
        <Link href="/about" className="hover:text-[#2C727B]">About</Link> <span className="mx-2">|</span>
        <Link href="/services" className="hover:text-[#2C727B]">Services</Link>
      </div>
    </main>
  );
}