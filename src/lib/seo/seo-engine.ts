// lib/seo/seo-engine.ts
// Integrated with your sitemap.ts AI scoring system

import { validateUrl } from "./urlValidator"

const baseUrl = "https://icreatixpro.com"

// Your existing functions
export function buildCanonical(path: string) {
  const clean = path.startsWith("/") ? path : `/${path}`
  return `${baseUrl}${clean}`
}

export function isSEOValid(url: string) {
  return validateUrl(url)
}

// ============================================
// AI PRIORITY SCORING (Matches sitemap.ts)
// ============================================

const aiPriorityScore = (path: string, depth = 1): number => {
  let score = 0.5

  if (path === '/') score = 1.0
  else if (path.startsWith('/services')) score = 0.95
  else if (path.startsWith('/blogs')) score = 0.92
  else if (path.startsWith('/tools')) score = 0.85
  else if (path.startsWith('/case-studies')) score = 0.88
  else if (path === '/about') score = 0.90
  else if (path === '/contact') score = 0.85

  score -= depth * 0.02
  return Math.max(0.3, Math.min(1, score))
}

// ============================================
// SCHEMA GENERATION
// ============================================

export function generatePageSchema(config: {
  pageType: 'about' | 'home' | 'services' | 'tools' | 'blog' | 'contact';
  title: string;
  description: string;
  path: string;
  publishedDate?: string;
  modifiedDate?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqs?: Array<{ question: string; answer: string }>;
}) {
  const fullUrl = `${baseUrl}${config.path}`;
  
  // Validate URL first (matches sitemap.ts)
  if (!validateUrl(fullUrl)) {
    console.warn(`Invalid URL: ${fullUrl}`);
  }
  
  const graph: any[] = [
    {
      '@type': 'Organization',
      name: 'iCreatixPRO',
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      description: 'AI-powered SEO agency helping businesses achieve sustainable growth',
      foundingDate: '2020',
      foundingLocation: 'San Francisco, CA',
      numberOfEmployees: 75,
      sameAs: [
        'https://twitter.com/icreatixpro',
        'https://linkedin.com/company/icreatixpro',
        'https://github.com/icreatixpro',
        'https://facebook.com/icreatixpro'
      ]
    },
    {
      '@type': 'WebSite',
      name: 'iCreatixPRO',
      url: baseUrl,
      description: 'AI-powered SEO agency for modern businesses',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    }
  ];
  
  // Add page-specific schema
  if (config.pageType === 'about') {
    graph.push({
      '@type': 'AboutPage',
      name: config.title,
      description: config.description,
      url: fullUrl,
      dateModified: config.modifiedDate || new Date().toISOString().split('T')[0],
      datePublished: config.publishedDate || '2020-01-01',
      isPartOf: {
        '@type': 'WebSite',
        name: 'iCreatixPRO',
        url: baseUrl
      }
    });
  }
  
  // Add breadcrumbs
  if (config.breadcrumbs && config.breadcrumbs.length > 0) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: config.breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`
      }))
    });
  }
  
  // Add FAQ schema
  if (config.faqs && config.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: config.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    });
  }
  
  return {
    '@context': 'https://schema.org',
    '@graph': graph
  };
}

// ============================================
// INTERNAL LINKING SUGGESTIONS (Uses AI scoring)
// ============================================

export function getLinkingSuggestions(currentPath: string) {
  const allPages = [
    { path: '/', title: 'Home', pageType: 'home' },
    { path: '/about', title: 'About Us', pageType: 'about' },
    { path: '/services', title: 'Our Services', pageType: 'services' },
    { path: '/tools', title: 'SEO Tools', pageType: 'tools' },
    { path: '/blogs', title: 'Blog', pageType: 'blog' },
    { path: '/contact', title: 'Contact Us', pageType: 'contact' }
  ];
  
  return allPages
    .filter(page => page.path !== currentPath)
    .map(page => ({
      url: page.path,
      anchorText: page.title,
      title: page.title,
      relevanceScore: aiPriorityScore(page.path), // Uses same AI scoring as sitemap
      pageType: page.pageType,
      recommendedPosition: aiPriorityScore(page.path) > 0.8 ? 'content' : 'footer'
    }));
}

// ============================================
// EXPORTS
// ============================================

export const seoEngine = {
  buildCanonical,
  isSEOValid,
  generatePageSchema,
  getLinkingSuggestions
};