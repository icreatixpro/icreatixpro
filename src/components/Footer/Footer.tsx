"use client";

import Link from "next/link";
import Image from "next/image";
import {
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  Mail,
  Send,
  PhoneCall,
  MapPin,
  Clock,
  ChevronRight,
  Shield,
  Heart,
  TrendingUp,
  Users,
  Briefcase,
  HelpCircle,
  FileText,
  Settings,
  Globe,
  Zap,
  YoutubeIcon,
  ThumbsUp,
  PinIcon,
} from "lucide-react";

// ============================================
// SOCIAL LINKS (all original URLs)
// ============================================
const socialLinks = [
  {
    name: "Facebook",
    icon: FacebookIcon,
    url: "https://www.facebook.com/icreatixpro/",
    hoverColor: "hover:bg-[#1877F2]",
  },
  {
    name: "Twitter",
    icon: TwitterIcon,
    url: "https://x.com/iCreatixPRO",
    hoverColor: "hover:bg-[#1DA1F2]",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    url: "https://www.instagram.com/icreatixpro/",
    hoverColor: "hover:bg-[#E4405F]",
  },
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/company/icreatixpro/",
    hoverColor: "hover:bg-[#0077B5]",
  },
  {
    name: "Pinterest",
    icon: PinIcon,
    url: "https://www.pinterest.com/icreatixpro/",
    hoverColor: "hover:bg-[#BD081C]",
  },
  {
    name: "YouTube",
    icon: YoutubeIcon,
    url: "https://www.youtube.com/@iCreatixPRO",
    hoverColor: "hover:bg-[#FF0000]",
  },
];

// ============================================
// FOOTER LINKS (all original URLs preserved)
// ============================================
const footerLinks = {
  services: [
    { name: "SEO Optimization", href: "/services/search-engine-optimization" },
    { name: "Local SEO", href: "/services/local-seo" },
    { name: "Google Ads", href: "/services/google-ads" },
    { name: "Meta Ads", href: "/services/meta-ads" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Content Marketing", href: "/services/content-marketing" },
    { name: "Email Marketing", href: "/services/email-marketing" },
    { name: "Analytics & Reporting", href: "/services/analytics" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blogs" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Partners", href: "/partners" },
    { name: "FAQs", href: "/faqs" },
  ],
  resources: [
    { name: "SEO Tools", href: "/tools" },
    { name: "Free Guides", href: "/guides" },
    { name: "Webinars", href: "/webinars" },
    { name: "E-books", href: "/ebooks" },
    { name: "Glossary", href: "/glossary" },
    { name: "Sitemap", href: "/sitemap" },
    { name: "RSS Feed", href: "/rss" },
    { name: "Status", href: "/status" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "DMCA", href: "/dmca" },
    { name: "GDPR", href: "/gdpr" },
    { name: "Accessibility", href: "/accessibility" },
    { name: "Security", href: "/security" },
     { name: "Legal Notice", href: "/legal" },
  ],
};

// ============================================
// MAIN FOOTER COMPONENT
// ============================================
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24">
      {/* Static background (no animation) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative bg-white/40 backdrop-blur-xl border-t border-white/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
          {/* Top Section – Logo + contact + newsletter */}
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            {/* Brand + Logo – exact navbar size (110x40, no extra classes) */}
            <div className="lg:col-span-4 space-y-4">
              <Link href="/" className="inline-block">
                <Image
                  src="/logo.png"
                  alt="iCreatixPRO"
                  width={110}
                  height={40}
                  priority={false}
                />
              </Link>
              <p className="text-[#1A394E]/70 text-sm leading-relaxed">
                We help businesses grow with powerful SEO strategies, data-driven
                digital marketing, and high-performance websites that deliver
                measurable results.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#1A394E]/60">
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>+44 (734) 815-3162</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#1A394E]/60">
                  <Mail className="w-3.5 h-3.5" />
                  <span>icreatixpro@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#1A394E]/60">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>USA, UK, UAE, Australia, Canada, Germany, France</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#1A394E]/60">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Mon-Fri: 9:00 AM - 6:00 PM EST</span>
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="lg:col-span-5 lg:col-start-9">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-5 border border-white/60">
                <h4 className="font-semibold text-[#1A394E] flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4 text-[#2C727B]" />
                  Weekly Newsletter
                </h4>
                <p className="text-xs text-[#1A394E]/60 mb-4">
                  Get the latest SEO tips and digital marketing insights delivered
                  straight to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-2.5 text-sm rounded-xl border border-gray-200 bg-white/80 outline-none focus:border-[#2C727B] focus:ring-2 focus:ring-[#2C727B]/20 transition-all"
                  />
                  <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white text-sm font-medium flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all">
                    <Send className="w-3.5 h-3.5" />
                    Subscribe
                  </button>
                </div>
                <p className="text-[10px] text-[#1A394E]/40 mt-3">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>

          {/* Links Grid – 2 cols on mobile, 4 on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
            {/* Services */}
            <div>
              <h4 className="font-semibold text-[#1A394E] mb-4 flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#2C727B]" />
                Services
              </h4>
              <ul className="space-y-2">
                {footerLinks.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#1A394E]/60 hover:text-[#2C727B] transition-colors flex items-center gap-1 group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-[#1A394E] mb-4 flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-[#2C727B]" />
                Company
              </h4>
              <ul className="space-y-2">
                {footerLinks.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#1A394E]/60 hover:text-[#2C727B] transition-colors flex items-center gap-1 group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-[#1A394E] mb-4 flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-[#2C727B]" />
                Resources
              </h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#1A394E]/60 hover:text-[#2C727B] transition-colors flex items-center gap-1 group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-[#1A394E] mb-4 flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#2C727B]" />
                Legal
              </h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#1A394E]/60 hover:text-[#2C727B] transition-colors flex items-center gap-1 group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Section */}
          <div className="border-t border-white/50 pt-8 mb-8">
            <div className="flex flex-col items-center text-center">
              <h4 className="font-semibold text-[#1A394E] mb-4">Connect With Us</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-10 h-10 rounded-full bg-white/50 backdrop-blur-sm border border-white/60 flex items-center justify-center transition-all duration-300 ${social.hoverColor} hover:text-white hover:border-transparent`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4 text-[#1A394E]/70 group-hover:text-white transition-colors" />
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-[#1A394E] text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/50 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-[#1A394E]/50">
                © {currentYear} iCreatixPRO. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-xs">
                <Link
                  href="/privacy-policy"
                  className="text-[#1A394E]/50 hover:text-[#2C727B] transition-colors"
                >
                  Privacy Policy
                </Link>
                <span className="text-[#1A394E]/30">|</span>
                <Link
                  href="/terms"
                  className="text-[#1A394E]/50 hover:text-[#2C727B] transition-colors"
                >
                  Terms of Service
                </Link>
                <span className="text-[#1A394E]/30">|</span>
                <Link
                  href="/cookies"
                  className="text-[#1A394E]/50 hover:text-[#2C727B] transition-colors"
                >
                  Cookie Policy
                </Link>
                <span className="text-[#1A394E]/30">|</span>
                <Link
                  href="/dmca"
                  className="text-[#1A394E]/50 hover:text-[#2C727B] transition-colors"
                >
                  DMCA
                </Link>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-[#1A394E]/40">
                <Heart className="w-3 h-3 text-red-400" />
                <span>Made with passion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}