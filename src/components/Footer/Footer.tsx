// src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  Mail,
  PhoneCall,
  MapPin,
  Clock,
  Shield,
  Heart,
} from "lucide-react";

// SOCIAL LINKS
const socialLinks = [
  { name: "Facebook", icon: FacebookIcon, url: "https://www.facebook.com/icreatixpro/" },
  { name: "Twitter", icon: TwitterIcon, url: "https://x.com/iCreatixPRO" },
  { name: "Instagram", icon: InstagramIcon, url: "https://www.instagram.com/icreatixpro/" },
  { name: "LinkedIn", icon: LinkedinIcon, url: "https://www.linkedin.com/company/icreatixpro/" },
  { name: "YouTube", icon: YoutubeIcon, url: "https://www.youtube.com/@iCreatixPRO" },
];

// FOOTER LINKS (cleaned structure)
const footerLinks = {
  services: [
    { name: "SEO Optimization", href: "/services/search-engine-optimization" },
    { name: "Local SEO", href: "/services/local-seo" },
    { name: "Google Ads", href: "/services/google-ads" },
    { name: "Content Marketing", href: "/services/content-marketing" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blogs" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "SEO Tools", href: "/tools" },
    { name: "Guides", href: "/guides" },
    { name: "Sitemap", href: "/sitemap" },
    { name: "FAQs", href: "/faqs" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms", href: "/terms" },
    { name: "Cookies", href: "/cookies" },
    { name: "DMCA", href: "/dmca" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-gray-200 bg-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-12 gap-10 mb-14">

          {/* BRAND */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="iCreatixPRO"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              AI-powered SEO agency helping businesses grow on Google, ChatGPT,
              and generative search engines with measurable results.
            </p>

            <div className="mt-5 space-y-2 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5" />
                +44 (734) 815-3162
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" />
                icreatixpro@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" />
                Global Remote Agency
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                Mon–Fri 9:00 AM – 6:00 PM
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">

            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-gray-600 hover:text-black transition">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-gray-600 hover:text-black transition">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-gray-600 hover:text-black transition">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-gray-600 hover:text-black transition">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* NEWSLETTER (CLEAN SAAS STYLE) */}
        <div className="border border-gray-200 rounded-xl p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <div>
              <h4 className="font-semibold text-gray-900">
                Get AI SEO Insights Weekly
              </h4>
              <p className="text-sm text-gray-500">
                No spam only actionable growth strategies.
              </p>
            </div>

            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full md:w-64 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
              />
              <button className="px-5 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition">
                Subscribe
              </button>
            </div>

          </div>
        </div>

        {/* SOCIAL + BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Social */}
          <div className="flex gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                className="text-gray-500 hover:text-black transition"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Bottom text */}
          <div className="text-xs text-gray-500 text-center">
            © {year} iCreatixPRO — All rights reserved
          </div>

          {/* Trust line */}
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <Heart className="w-3 h-3 text-red-400" />
            Built for performance & growth
          </div>

        </div>

      </div>
    </footer>
  );
}