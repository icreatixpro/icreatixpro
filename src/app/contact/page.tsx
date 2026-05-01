import ContactForm from "./ContactForm";
import type { Metadata } from "next";

// ✅ METADATA - Works perfectly in Server Component
export const metadata: Metadata = {
  title: "Contact iCreatixPRO | Get Free SEO Consultation Today",
  description: "Need more traffic and leads? Contact iCreatixPRO for SEO, Google Ads, and digital marketing. Get a free consultation and start growing today.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://icreatixpro.com/contact",
  },
  openGraph: {
    title: "Contact iCreatixPRO | Global Digital Marketing Agency",
    description: "Get expert SEO, Google Ads, and digital marketing services. Free consultation available.",
    url: "https://icreatixpro.com/contact",
    siteName: "iCreatixPRO",
    locale: "en_US",
    type: "website",
    // ✅ REMOVED - og-contact.jpg (404 issue fixed)
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact iCreatixPRO | Global Digital Marketing Agency",
    description: "Get expert SEO, Google Ads, and digital marketing services.",
    // ✅ REMOVED - twitter-image.jpg (404 issue fixed)
  },
  // ✅ SERVER SIDE SCHEMA - Google 100% pick karega
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "iCreatixPRO",
      alternateName: "iCreatixPRO Digital Marketing Agency",
      url: "https://icreatixpro.com",
      logo: "https://icreatixpro.com/logo.png",
      image: "https://icreatixpro.com/og-image.jpg",
      description: "Global digital marketing agency specializing in SEO, Google Ads, Meta Ads, and social media marketing.",
      email: "icreatixpro@gmail.com",
      telephone: "+447348153162",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+447348153162",
        contactType: "customer service",
        availableLanguage: "English",
        email: "icreatixpro@gmail.com",
      },
      sameAs: [
        "https://www.facebook.com/icreatixpro/",
        "https://x.com/iCreatixPRO",
        "https://www.instagram.com/icreatixpro/",
        "https://www.linkedin.com/company/icreatixpro/",
        "https://www.youtube.com/@iCreatixPRO",
      ],
      areaServed: ["US", "UK", "UAE", "Australia", "Canada", "France", "Germany"],
      priceRange: "$$",
    }),
  },
};

export default function ContactPage() {
  return <ContactForm />;
}