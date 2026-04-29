"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  ChevronRight,
  Star,
  Award,
  Shield,
  Heart,
  Sparkles,
  Globe,
  Calendar,
  User,
  Briefcase,
  TrendingUp,
  Search,
  Target,
  Zap,
  FileText,
  Users,
  Building,
  DollarSign,
  Headphones,
  ThumbsUp,
  CheckSquare
} from "lucide-react";

// ============================================
// ANIMATION VARIANTS
// ============================================

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

// ============================================
// SERVICE CARDS DATA
// ============================================

const serviceCards = [
  { icon: Search, title: "SEO Optimization", desc: "Rank #1 on Google with AI-powered SEO", href: "/services/search-engine-optimization", color: "from-emerald-500 to-teal-500" },
  { icon: MapPin, title: "Local SEO", desc: "Dominate Google Maps & local search", href: "/services/local-seo", color: "from-blue-500 to-cyan-500" },
  { icon: DollarSign, title: "Google Ads", desc: "Drive instant qualified traffic", href: "/services/google-ads", color: "from-orange-500 to-red-500" },
  { icon: TrendingUp, title: "Meta Ads", desc: "Scale sales on social media", href: "/services/meta-ads", color: "from-purple-500 to-pink-500" },
  { icon: Globe, title: "Digital Marketing", desc: "Complete growth strategy", href: "/services/digital-marketing", color: "from-indigo-500 to-purple-500" },
  { icon: Zap, title: "Content Marketing", desc: "Engage & convert audiences", href: "/services/content-marketing", color: "from-rose-500 to-orange-500" }
];

// ============================================
// CONTACT INFO
// ============================================

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Services",
    details: ["PK, UK, USA, UAE, Australia, Canada", "France, Germany,", "Abu Dhabi, Dubai, Sharjah"],
    action: { text: "Get Directions", href: "https://maps.google.com", icon: ArrowRight }
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["Whatsapp: +44 (734) 815-3162", "Support: +44 (734) 815-3162"],
    action: { text: "Call Now", href: "tel:+44 (734) 815-3162", icon: Phone }
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@icreatixpro.com", "seo@icreatixpro.com"],
    action: { text: "Send Email", href: "mailto:hello@icreatixpro.com", icon: Mail }
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon-Fri: 9AM - 6PM EST", "Sat: 10AM - 2PM EST", "Sun: Closed"],
    action: null
  }
];

// ============================================
// FAQ DATA
// ============================================

const faqs = [
  { q: "How quickly will you respond to my inquiry?", a: "We typically respond within 2-4 hours during business hours. For urgent inquiries, please call us directly at +1 (555) 123-4567." },
  { q: "Do you offer free consultations?", a: "Yes! We offer a free 30-minute strategy consultation to discuss your business goals and how our digital marketing services can help you achieve them." },
  { q: "What industries do you specialize in?", a: "We work with businesses across e-commerce, healthcare, real estate, technology, hospitality, professional services, and local businesses." },
  { q: "How do you measure success?", a: "We track key metrics including organic traffic, keyword rankings, conversion rates, ROI, lead generation, and revenue growth - all reported in your custom dashboard." },
  { q: "Can you provide case studies?", a: "Absolutely! We have numerous success stories across different industries. Check our Case Studies section or ask for relevant examples during your consultation." },
  { q: "What makes your SEO different?", a: "We combine AI-powered strategies with proven SEO techniques, focusing on AEO (Answer Engine Optimization) and GEO (Generative Experience Optimization) for modern search." }
];

// ============================================
// TRUST BADGES
// ============================================

const trustBadges = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Globe, value: "15+", label: "Countries" },
  { icon: Star, value: "4.9", label: "Client Rating" },
  { icon: Award, value: "50+", label: "Expert Team" }
];

// ============================================
// MAIN COMPONENT
// ============================================

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const services = [
    "SEO Optimization",
    "Local SEO",
    "Google Ads",
    "Meta Ads",
    "Digital Marketing",
    "Content Marketing",
    "Web Development",
    "Not sure yet"
  ];

  const budgets = [
    "Under $1,000/month",
    "$1,000 - $2,500/month",
    "$2,500 - $5,000/month",
    "$5,000 - $10,000/month",
    "$10,000+/month",
    "Not sure"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === "message") {
      setCharCount(value.length);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      message: ""
    });
    setCharCount(0);
    setLoading(false);
    
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <>
      <Head>
        <title>Contact iCreatixPRO | Digital Marketing Agency</title>
        <meta name="description" content="Get in touch with iCreatixPRO. Free consultation for SEO, Google Ads, Meta Ads, and digital marketing services. Let's grow your business together." />
        <meta name="keywords" content="contact digital marketing agency, SEO consultation, PPC services, Meta Ads expert" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        
        {/* ============================================ */}
        {/* HERO SECTION - Enhanced */}
        {/* ============================================ */}
        <section className="relative overflow-hidden pt-16 md:pt-20 pb-8 md:pb-12">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2C727B]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1A394E]/5 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(44,114,123,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(44,114,123,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C727B]/10 border border-[#2C727B]/20 mb-6">
                <Sparkles className="w-4 h-4 text-[#2C727B]" />
                <span className="text-sm font-medium text-[#2C727B]">Get in Touch</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A394E] mb-4">
                Let's{" "}
                <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
                  Grow Together
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ready to take your digital presence to the next level? Fill out the form 
                and our experts will get back to you within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* MAIN CONTENT - Two Column Layout */}
        {/* ============================================ */}
        <section className="py-10 pb-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-8">
              
              {/* LEFT COLUMN - Contact Form (3 columns) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-3"
              >
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-[#1A394E]">Send us a Message</h2>
                    <p className="text-gray-500 text-sm mt-1">Fill out the form and we'll respond within 24 hours</p>
                  </div>

                  <AnimatePresence>
                    {success && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-green-800">Message Sent Successfully!</p>
                          <p className="text-sm text-green-600">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3"
                      >
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-700">{error}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#2C727B] focus:ring-2 focus:ring-[#2C727B]/20 outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#2C727B] focus:ring-2 focus:ring-[#2C727B]/20 outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Phone <span className="text-gray-400 text-xs">(Optional)</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#2C727B] focus:ring-2 focus:ring-[#2C727B]/20 outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Service Interest
                        </label>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#2C727B] focus:ring-2 focus:ring-[#2C727B]/20 outline-none appearance-none cursor-pointer bg-white"
                          >
                            <option value="">Select a service</option>
                            {services.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Monthly Budget Range
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#2C727B] focus:ring-2 focus:ring-[#2C727B]/20 outline-none appearance-none cursor-pointer bg-white"
                        >
                          <option value="">Select budget range</option>
                          {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your project, goals, or questions..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2C727B] focus:ring-2 focus:ring-[#2C727B]/20 outline-none transition-all resize-none"
                      />
                      <div className="flex justify-end mt-1">
                        <span className={`text-xs ${charCount > 500 ? "text-red-500" : "text-gray-400"}`}>
                          {charCount}/500 characters
                        </span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                      ) : (
                        <><Send className="w-5 h-5" /> Send Message</>
                      )}
                    </button>

                    <p className="text-center text-xs text-gray-400">
                      By submitting, you agree to our <Link href="/privacy-policy" className="text-[#2C727B] hover:underline">Privacy Policy</Link>
                    </p>
                  </form>
                </div>
              </motion.div>

              {/* RIGHT COLUMN - Contact Info & Services (2 columns) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-2 space-y-6"
              >
                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-3">
                  {trustBadges.map((badge, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
                      <div className="w-10 h-10 rounded-lg bg-[#2C727B]/10 flex items-center justify-center">
                        <badge.icon className="w-5 h-5 text-[#2C727B]" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-[#1A394E]">{badge.value}</div>
                        <div className="text-xs text-gray-500">{badge.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact Cards */}
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2C727B]/10 to-[#1A394E]/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-[#2C727B]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#1A394E] mb-1">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-600 text-sm">{detail}</p>
                        ))}
                        {info.action && (
                          <a href={info.action.href} target="_blank" rel="noopener noreferrer" 
                            className="inline-flex items-center gap-1 mt-2 text-sm text-[#2C727B] font-medium hover:gap-2 transition-all">
                            {info.action.text}
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Social Links */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                  <h3 className="font-semibold text-[#1A394E] mb-3">Follow Us</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { icon: Facebook, url: "https://www.facebook.com/icreatixpro/", color: "#1877F2" },
                      { icon: Twitter, url: "https://x.com/iCreatixPRO", color: "#1DA1F2" },
                      { icon: Instagram, url: "https://www.instagram.com/icreatixpro/", color: "#E4405F" },
                      { icon: Linkedin, url: "https://www.linkedin.com/company/icreatixpro/", color: "#0077B5" },
                      { icon: Youtube, url: "https://www.youtube.com/@iCreatixPRO", color: "#FF0000" }
                    ].map((social, i) => (
                      <a
                        key={i}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                        style={{ backgroundColor: `${social.color}15`, color: social.color }}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SERVICES SECTION - Quick Links */}
        {/* ============================================ */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A394E]">Our Digital Growth Services</h2>
              <p className="text-gray-600 mt-2">Explore how we can help your business grow</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceCards.map((service, idx) => (
                <Link key={idx} href={service.href}>
                  <div className="group p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#1A394E] group-hover:text-[#2C727B] transition-colors">{service.title}</h3>
                        <p className="text-xs text-gray-500">{service.desc}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* FAQ SECTION - Accordion */}
        {/* ============================================ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A394E]">Frequently Asked Questions</h2>
              <p className="text-gray-600 mt-2">Everything you need to know about working with us</p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-[#1A394E]">{faq.q}</span>
                    <ChevronRight className={`w-5 h-5 text-[#2C727B] transition-transform duration-300 ${activeFaq === idx ? "rotate-90" : ""}`} />
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-300 ${activeFaq === idx ? "max-h-40 pb-4" : "max-h-0"}`}>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* FINAL CTA SECTION */}
        {/* ============================================ */}
        <section className="py-16 bg-gradient-to-r from-[#2C727B] to-[#1A394E]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <MessageCircle className="w-4 h-4 text-white" />
              <span className="text-sm text-white/90">Ready to Get Started?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join 500+ satisfied clients who trust us for their digital growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/icreatixpro/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-xl bg-white text-[#1A394E] font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Free Consultation
              </a>
              <a
                href="tel:+15551234567"
                className="px-8 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}