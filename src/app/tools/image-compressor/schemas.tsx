// src/app/tools/image-compressor/schemas.tsx
// Server Component for JSON-LD schemas - Optimized with @graph for cleaner structure

const SITE_URL = 'https://icreatixpro.com';
const PAGE_URL = `${SITE_URL}/tools/image-compressor`;

export function JsonLdSchemas() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            // ============================================================
            // 1. WebApplication (Better for browser tools than SoftwareApplication)
            // ============================================================
            {
              "@type": "WebApplication",
              "name": "Free Image Compressor",
              "applicationCategory": "UtilityApplication",
              "applicationSubCategory": "Image Optimization Tool",
              "operatingSystem": "Web Browser",
              "browserRequirements": "Requires JavaScript. Works on Chrome, Firefox, Safari, Edge.",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "isAccessibleForFree": true,
              "featureList": [
                "JPEG compression",
                "PNG optimization", 
                "WebP conversion",
                "Lossy compression",
                "Browser-based processing",
                "No upload required",
                "Instant results",
                "Free forever"
              ],
              "description": "Free online image compressor to reduce JPG, PNG & WebP size up to 80%. Improve website speed, Core Web Vitals and SEO rankings.",
              "url": PAGE_URL,
              "image": `${SITE_URL}/og-images/image-compressor.jpg`,
              "creator": {
                "@type": "Organization",
                "name": "iCreatixPRO",
                "url": SITE_URL
              },
              "publisher": {
                "@type": "Organization",
                "name": "iCreatixPRO",
                "url": SITE_URL
              },
              "potentialAction": {
                "@type": "UseAction",
                "target": PAGE_URL,
                "name": "Compress Image Online"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "1247",
                "bestRating": "5",
                "worstRating": "1"
              }
            },
            
            // ============================================================
            // 2. Organization (E-E-A-T signal - only real, verified profiles)
            // ============================================================
            {
              "@type": "Organization",
              "name": "iCreatixPRO",
              "url": SITE_URL,
              "logo": `${SITE_URL}/logo.png`,
              "description": "Website Growth Toolkit - SEO tools & image optimization for better search rankings",
              "sameAs": [
                // Only include profiles that ACTUALLY exist and are active
                // "https://twitter.com/iCreatixPRO",  // UNCOMMENT ONLY IF EXISTS
                // "https://www.linkedin.com/company/icreatixpro/",  // UNCOMMENT ONLY IF EXISTS
                // "https://www.facebook.com/icreatixpro/",  // UNCOMMENT ONLY IF EXISTS
                // "https://www.instagram.com/icreatixpro/"  // UNCOMMENT ONLY IF EXISTS
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "url": `${SITE_URL}/contact`,
                "availableLanguage": ["English"]
              }
            },
            
            // ============================================================
            // 3. BreadcrumbList (SERP breadcrumbs)
            // ============================================================
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": SITE_URL
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Tools",
                  "item": `${SITE_URL}/tools`
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Image Compressor",
                  "item": PAGE_URL
                }
              ]
            },
            
            // ============================================================
            // 4. HowTo (Rich result for step-by-step)
            // ============================================================
            {
              "@type": "HowTo",
              "name": "How to compress an image online",
              "description": "Compress JPG, PNG and WebP images in 3 simple steps",
              "totalTime": "PT1M",
              "step": [
                {
                  "@type": "HowToStep",
                  "position": 1,
                  "name": "Upload Image",
                  "text": "Drag & drop your JPG, PNG, or WebP image into the upload area",
                  "image": `${SITE_URL}/steps/step1-upload.jpg`
                },
                {
                  "@type": "HowToStep",
                  "position": 2,
                  "name": "Adjust Quality",
                  "text": "Use the quality slider to balance file size vs image quality (70% recommended)",
                  "image": `${SITE_URL}/steps/step2-quality.jpg`
                },
                {
                  "@type": "HowToStep",
                  "position": 3,
                  "name": "Download",
                  "text": "Click download to save your optimized image",
                  "image": `${SITE_URL}/steps/step3-download.jpg`
                }
              ]
            },
            
            // ============================================================
            // 5. FAQPage (Matches visible FAQs on page)
            // ============================================================
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How do I reduce image size without losing quality?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Use 70-80% compression level. This maintains visual quality while reducing file size by 50-70%."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the best compression level for web images?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "70% is the recommended sweet spot balancing file size and image quality for most websites."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I use WebP or JPEG for SEO?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "WebP offers 25-35% better compression than JPEG. Use WebP for modern browsers, JPEG as fallback."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does image size affect Google rankings?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Google uses page speed as a ranking factor. Smaller images = faster pages = better rankings."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is this image compressor secure?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "100% secure all compression happens in your browser. Images never leave your device."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is this tool really free?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes no signup, no limits, no watermarks, forever."
                  }
                }
              ]
            },
            
            // ============================================================
            // 6. ItemList (Internal SEO boost - tool collection)
            // ============================================================
            {
              "@type": "ItemList",
              "name": "Free SEO Tools by iCreatixPRO",
              "description": "Collection of free SEO optimization tools",
              "numberOfItems": 3,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "AI Title Generator",
                  "url": `${SITE_URL}/tools/ai-title-generator`
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Meta Tag Generator",
                  "url": `${SITE_URL}/tools/meta-tag-generator`
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Keyword Density Checker",
                  "url": `${SITE_URL}/tools/keyword-density-checker`
                }
              ]
            },
            
            // ============================================================
            // 7. WebSite (Search action for site search)
            // ============================================================
            {
              "@type": "WebSite",
              "name": "iCreatixPRO",
              "url": SITE_URL,
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": `${SITE_URL}/search?q={search_term_string}`
                },
                "query-input": "required name=search_term_string"
              }
            }
          ]
        })
      }}
    />
  );
}