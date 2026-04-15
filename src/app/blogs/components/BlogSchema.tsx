"use client";

import { BlogPost } from "@/lib/blog-data";
import Script from "next/script";

interface BlogSchemaProps {
  blog: BlogPost;
  url: string;
}

export default function BlogSchema({ blog, url }: BlogSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.description,
    "image": blog.image,
    "datePublished": blog.date,
    "dateModified": blog.updatedDate || blog.date,
    "author": {
      "@type": "Person",
      "name": blog.author,
      "url": `https://icreatixpro.com/blogs/author/${blog.author.toLowerCase().replace(/\s+/g, '-')}`,
    },
    "publisher": {
      "@type": "Organization",
      "name": "iCreatixPRO",
      "logo": {
        "@type": "ImageObject",
        "url": "https://icreatixpro.com/logo.png",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url,
    },
    "keywords": blog.keywords.join(", "),
    "wordCount": blog.wordCount,
    "timeRequired": blog.readingTime,
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://icreatixpro.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://icreatixpro.com/blogs",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": blog.title,
        "item": url,
      },
    ],
  };

  return (
    <>
      <Script
        id="blog-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}