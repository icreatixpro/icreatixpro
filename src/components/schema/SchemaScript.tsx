"use client";

// JSON-LD Schema Component for iCreatixPRO
// This injects structured data into your pages for better SEO

interface SchemaScriptProps {
  type: 'organization' | 'website' | 'blog' | 'article' | 'about';
  data?: any;
}

export default function SchemaScript({ type, data }: SchemaScriptProps) {
  const baseUrl = 'https://icreatixpro.com';
  
  // ============================================
  // ORGANIZATION SCHEMA (Global - for all pages)
  // ============================================
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "iCreatixPRO",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": "AI-powered SEO and digital marketing agency helping businesses grow with scalable strategies and real results.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "hello@icreatixpro.com"
    },
    "sameAs": [
      "https://twitter.com/icreatixpro",
      "https://linkedin.com/company/icreatixpro",
      "https://facebook.com/icreatixpro",
      "https://instagram.com/icreatixpro"
    ]
  };
  
  // ============================================
  // WEBSITE SCHEMA (For homepage)
  // ============================================
  if (type === 'website') {
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "iCreatixPRO",
      "url": baseUrl,
      "description": "AI-powered SEO and digital marketing agency",
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${baseUrl}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    };
    
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, websiteSchema]).replace(/</g, '\\u003c')
        }}
      />
    );
  }
  
  // ============================================
  // BLOG SCHEMA (For /blogs page)
  // ============================================
  if (type === 'blog') {
    const blogSchema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "iCreatixPRO Blog",
      "description": "Expert insights on AI SEO, digital marketing, and growth strategies for 2026.",
      "url": `${baseUrl}/blogs`,
      "publisher": organizationSchema
    };
    
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, blogSchema]).replace(/</g, '\\u003c')
        }}
      />
    );
  }
  
  // ============================================
  // ARTICLE SCHEMA (For individual blog posts)
  // ============================================
  if (type === 'article' && data) {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": data.title,
      "description": data.description,
      "image": data.image || `${baseUrl}/og-image.jpg`,
      "datePublished": data.date,
      "dateModified": data.updatedDate || data.date,
      "author": {
        "@type": "Person",
        "name": data.author || "iCreatixPRO Team",
        "url": `${baseUrl}/author/${(data.author || "icreatixpro").toLowerCase().replace(/\s+/g, '-')}`
      },
      "publisher": organizationSchema,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${baseUrl}/blogs/${data.slug}`
      },
      "keywords": data.keywords?.join(", ") || "",
      "wordCount": data.wordCount,
      "timeRequired": data.readingTime
    };
    
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": `${baseUrl}/blogs`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": data.title,
          "item": `${baseUrl}/blogs/${data.slug}`
        }
      ]
    };
    
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, articleSchema, breadcrumbSchema]).replace(/</g, '\\u003c')
        }}
      />
    );
  }
  
  // ============================================
  // ABOUT PAGE SCHEMA
  // ============================================
  if (type === 'about') {
    const aboutSchema = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About iCreatixPRO",
      "description": "Learn about iCreatixPRO, our AI-powered SEO agency, team of experts, and our mission to drive real business growth.",
      "url": `${baseUrl}/about`,
      "publisher": organizationSchema
    };
    
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, aboutSchema]).replace(/</g, '\\u003c')
        }}
      />
    );
  }
  
  // ============================================
  // DEFAULT: Organization only
  // ============================================
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c')
      }}
    />
  );
}