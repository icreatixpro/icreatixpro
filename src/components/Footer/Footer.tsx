"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
  Sparkles,
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
  Github,
  YoutubeIcon,
  MessageCircle,
  ThumbsUp,
  PinIcon
} from "lucide-react";

// ============================================
// CUSTOM ICON COMPONENTS (Defined BEFORE use)
// ============================================

const HandshakeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12L5 15L10 10L15 15L19 9M22 7L19 10L15 6L10 11L5 6L2 9" />
  </svg>
);

const VideoIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const BookIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

// ============================================
// SOCIAL MEDIA LINKS (With proper URLs)
// ============================================

const socialLinks = [
  {
    name: "Facebook",
    icon: FacebookIcon,
    url: "https://www.facebook.com/icreatixpro/",
    color: "#1877F2",
    hoverColor: "hover:bg-[#1877F2]"
  },
  {
    name: "Twitter",
    icon: TwitterIcon,
    url: "https://x.com/iCreatixPRO",
    color: "#1DA1F2",
    hoverColor: "hover:bg-[#1DA1F2]"
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    url: "https://www.instagram.com/icreatixpro/",
    color: "#E4405F",
    hoverColor: "hover:bg-[#E4405F]"
  },
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/company/icreatixpro/",
    color: "#0077B5",
    hoverColor: "hover:bg-[#0077B5]"
  },
  {
    name: "Pinterest",
    icon: PinIcon,
    url: "https://www.pinterest.com/icreatixpro/",
    color: "#BD081C",
    hoverColor: "hover:bg-[#BD081C]"
  },
  {
    name: "YouTube",
    icon: YoutubeIcon,
    url: "https://www.youtube.com/@iCreatixPRO",
    color: "#FF0000",
    hoverColor: "hover:bg-[#FF0000]"
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://wa.me/447348153162",
    color: "#25D366",
    hoverColor: "hover:bg-[#25D366]"
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/icreatixpro",
    color: "#333333",
    hoverColor: "hover:bg-[#333333]"
  }
];

// ============================================
// FOOTER LINKS DATA
// ============================================

const footerLinks = {
  services: [
    { name: "SEO Optimization", href: "/services/search-engine-optimization", icon: TrendingUp },
    { name: "Local SEO", href: "/services/local-seo", icon: MapPin },
    { name: "Google Ads", href: "/services/google-ads", icon: Globe },
    { name: "Meta Ads", href: "/services/meta-ads", icon: FacebookIcon },
    { name: "Digital Marketing", href: "/services/digital-marketing", icon: Zap },
    { name: "Content Marketing", href: "/services/content-marketing", icon: FileText },
    { name: "Email Marketing", href: "/services/email-marketing", icon: Mail },
    { name: "Analytics & Reporting", href: "/services/analytics", icon: TrendingUp }
  ],
  company: [
    { name: "About Us", href: "/about", icon: Users },
    { name: "Blog", href: "/blogs", icon: FileText },
    { name: "Case Studies", href: "/case-studies", icon: Briefcase },
    { name: "Contact", href: "/contact", icon: PhoneCall },
    { name: "Careers", href: "/careers", icon: Briefcase },
    { name: "Testimonials", href: "/testimonials", icon: ThumbsUp },
    { name: "Partners", href: "/partners", icon: HandshakeIcon },
    { name: "FAQs", href: "/faqs", icon: HelpCircle }
  ],
  resources: [
    { name: "SEO Tools", href: "/tools", icon: Settings },
    { name: "Free Guides", href: "/guides", icon: FileText },
    { name: "Webinars", href: "/webinars", icon: VideoIcon },
    { name: "E-books", href: "/ebooks", icon: BookIcon },
    { name: "Glossary", href: "/glossary", icon: HelpCircle },
    { name: "Sitemap", href: "/sitemap", icon: MapPin },
    { name: "RSS Feed", href: "/rss", icon: Zap },
    { name: "Status", href: "/status", icon: Shield }
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "DMCA", href: "/dmca" },
    { name: "GDPR", href: "/gdpr" },
    { name: "Accessibility", href: "/accessibility" },
    { name: "Security", href: "/security" }
  ]
};

// ============================================
// MAIN FOOTER COMPONENT
// ============================================

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Main Footer Content */}
      <div className="relative bg-white/40 backdrop-blur-xl border-t border-white/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
          
          {/* Top Section with Newsletter */}
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-4 space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#1A394E] to-[#2C727B] bg-clip-text text-transparent">
                    iCreatixPRO
                  </h3>
                </div>
                <p className="text-[#1A394E]/70 text-sm leading-relaxed">
                  We help businesses grow with powerful SEO strategies, data-driven digital marketing, 
                  and high-performance websites that deliver measurable results.
                </p>
                
                {/* Contact Info */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#1A394E]/60">
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>+44 (734) 815-3162</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#1A394E]/60">
                    <Mail className="w-3.5 h-3.5" />
                    <span>info@icreatixpro.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#1A394E]/60">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>PK, UK, USA, UAE, Australia, Canada </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#1A394E]/60">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Mon-Fri: 9:00 AM - 6:00 PM EST</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Newsletter Section */}
            <div className="lg:col-span-5 lg:col-start-9">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/50 backdrop-blur-sm rounded-2xl p-5 border border-white/60"
              >
                <h4 className="font-semibold text-[#1A394E] flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4 text-[#2C727B]" />
                  Weekly Newsletter
                </h4>
                <p className="text-xs text-[#1A394E]/60 mb-4">
                  Get the latest SEO tips and digital marketing insights delivered straight to your inbox.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-2.5 text-sm rounded-xl border border-gray-200 bg-white/80 outline-none focus:border-[#2C727B] focus:ring-2 focus:ring-[#2C727B]/20 transition-all"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white text-sm font-medium flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Subscribe
                  </motion.button>
                </div>
                <p className="text-[10px] text-[#1A394E]/40 mt-3">
                  No spam. Unsubscribe anytime.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Services Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-[#1A394E] mb-4 flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#2C727B]" />
                Services
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#1A394E]/60 hover:text-[#2C727B] transition-colors flex items-center gap-1.5 group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-[#1A394E] mb-4 flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-[#2C727B]" />
                Company
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#1A394E]/60 hover:text-[#2C727B] transition-colors flex items-center gap-1.5 group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-[#1A394E] mb-4 flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-[#2C727B]" />
                Resources
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#1A394E]/60 hover:text-[#2C727B] transition-colors flex items-center gap-1.5 group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-[#1A394E] mb-4 flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#2C727B]" />
                Legal
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#1A394E]/60 hover:text-[#2C727B] transition-colors flex items-center gap-1.5 group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-white/50 pt-8 mb-8"
          >
            <div className="flex flex-col items-center text-center">
              <h4 className="font-semibold text-[#1A394E] mb-4">Connect With Us</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative w-10 h-10 rounded-full bg-white/50 backdrop-blur-sm border border-white/60 flex items-center justify-center transition-all duration-300 ${social.hoverColor} hover:text-white hover:border-transparent`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4 text-[#1A394E]/70 group-hover:text-white transition-colors" />
                    
                    {/* Tooltip */}
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-[#1A394E] text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
              <p className="text-xs text-[#1A394E]/50 mt-4">
                Follow us for daily SEO tips and industry updates
              </p>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <div className="border-t border-white/50 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-[#1A394E]/50">
                © {currentYear} iCreatixPRO. All rights reserved.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-xs">
                <Link href="/privacy-policy" className="text-[#1A394E]/50 hover:text-[#2C727B] transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-[#1A394E]/30">|</span>
                <Link href="/terms" className="text-[#1A394E]/50 hover:text-[#2C727B] transition-colors">
                  Terms of Service
                </Link>
                <span className="text-[#1A394E]/30">|</span>
                <Link href="/cookies" className="text-[#1A394E]/50 hover:text-[#2C727B] transition-colors">
                  Cookie Policy
                </Link>
                <span className="text-[#1A394E]/30">|</span>
                <Link href="/dmca" className="text-[#1A394E]/50 hover:text-[#2C727B] transition-colors">
                  DMCA
                </Link>
              </div>

              {/* Trust Badge */}
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
