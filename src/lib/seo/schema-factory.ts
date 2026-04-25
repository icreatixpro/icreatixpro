// lib/seo/schema-factory.ts
// Complete schema generator for: Home, About, Services, Tools, Blogs, Contact

export type PageType = 'home' | 'about' | 'services' | 'tools' | 'blog' | 'contact';

export interface SchemaConfig {
  pageType: PageType;
  title: string;
  description: string;
  path: string;
  publishedDate?: string;
  modifiedDate?: string;
  author?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  blogPosts?: Array<{ title: string; url: string; date: string }>; // For blog listing
  toolsList?: Array<{ name: string; url: string; description: string }>; // For tools page
}

class SchemaFactory {
  private baseUrl = 'https://icreatixpro.com';
  
  // Organization schema (used on ALL pages)
  private generateOrganizationSchema() {
    return {
      '@type': 'Organization',
      name: 'iCreatixPRO',
      url: this.baseUrl,
      logo: `${this.baseUrl}/logo.png`,
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
    };
  }
  
  // Website schema (used on ALL pages)
  private generateWebsiteSchema() {
    return {
      '@type': 'WebSite',
      name: 'iCreatixPRO',
      url: this.baseUrl,
      description: 'AI-powered SEO agency for modern businesses',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${this.baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };
  }
  
  // Breadcrumb schema (used on ALL pages)
  private generateBreadcrumbSchema(breadcrumbs: SchemaConfig['breadcrumbs']) {
    if (!breadcrumbs || breadcrumbs.length === 0) return null;
    
    return {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url.startsWith('http') ? item.url : `${this.baseUrl}${item.url}`
      }))
    };
  }
  
  // FAQ schema (for pages with FAQs)
  private generateFaqSchema(faqs: SchemaConfig['faqs']) {
    if (!faqs || faqs.length === 0) return null;
    
    return {
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };
  }
  
  // Page-specific schema generator
  private generatePageSpecificSchema(config: SchemaConfig) {
    const fullUrl = `${this.baseUrl}${config.path}`;
    
    switch (config.pageType) {
      case 'home':
        return {
          '@type': 'WebPage',
          name: config.title,
          description: config.description,
          url: fullUrl,
          isPartOf: this.generateWebsiteSchema()
        };
        
      case 'about':
        return {
          '@type': 'AboutPage',
          name: config.title,
          description: config.description,
          url: fullUrl,
          dateModified: config.modifiedDate || new Date().toISOString().split('T')[0],
          datePublished: config.publishedDate || '2020-01-01',
          isPartOf: { '@type': 'WebSite', name: 'iCreatixPRO', url: this.baseUrl }
        };
        
      case 'services':
        return {
          '@type': 'ItemList',
          name: config.title,
          description: config.description,
          url: fullUrl,
          numberOfItems: 6,
          itemListElement: [
            { '@type': 'Service', name: 'AI-Powered SEO', position: 1 },
            { '@type': 'Service', name: 'Voice Search Optimization', position: 2 },
            { '@type': 'Service', name: 'Visual Search', position: 3 },
            { '@type': 'Service', name: 'Generative AI Optimization', position: 4 },
            { '@type': 'Service', name: 'Technical SEO', position: 5 },
            { '@type': 'Service', name: 'Content Strategy', position: 6 }
          ]
        };
        
      case 'tools':
        return {
          '@type': 'ItemList',
          name: config.title,
          description: config.description,
          url: fullUrl,
          numberOfItems: config.toolsList?.length || 0,
          itemListElement: config.toolsList?.map((tool, index) => ({
            '@type': 'SoftwareApplication',
            name: tool.name,
            description: tool.description,
            url: `${this.baseUrl}${tool.url}`,
            applicationCategory: 'BusinessApplication',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD'
            },
            position: index + 1
          }))
        };
        
      case 'blog':
        if (config.blogPosts && config.blogPosts.length > 0) {
          return {
            '@type': 'Blog',
            name: config.title,
            description: config.description,
            url: fullUrl,
            blogPost: config.blogPosts.map(post => ({
              '@type': 'BlogPosting',
              headline: post.title,
              url: `${this.baseUrl}${post.url}`,
              datePublished: post.date,
              author: { '@type': 'Person', name: config.author || 'iCreatixPRO Team' }
            }))
          };
        }
        return {
          '@type': 'CollectionPage',
          name: config.title,
          description: config.description,
          url: fullUrl
        };
        
      case 'contact':
        return {
          '@type': 'ContactPage',
          name: config.title,
          description: config.description,
          url: fullUrl,
          mainEntity: {
            '@type': 'Organization',
            name: 'iCreatixPRO',
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              email: 'hello@icreatixpro.com',
              availableLanguage: ['English']
            }
          }
        };
        
      default:
        return {
          '@type': 'WebPage',
          name: config.title,
          description: config.description,
          url: fullUrl
        };
    }
  }
  
  // MAIN METHOD: Generate complete schema graph
  public generateFullSchema(config: SchemaConfig): object {
    const graph: any[] = [
      this.generateOrganizationSchema(),
      this.generateWebsiteSchema()
    ];
    
    // Add page-specific schema
    const pageSchema = this.generatePageSpecificSchema(config);
    if (pageSchema) graph.push(pageSchema);
    
    // Add breadcrumb if exists
    const breadcrumbSchema = this.generateBreadcrumbSchema(config.breadcrumbs);
    if (breadcrumbSchema) graph.push(breadcrumbSchema);
    
    // Add FAQ if exists
    const faqSchema = this.generateFaqSchema(config.faqs);
    if (faqSchema) graph.push(faqSchema);
    
    return {
      '@context': 'https://schema.org',
      '@graph': graph
    };
  }
}

export const schemaFactory = new SchemaFactory();