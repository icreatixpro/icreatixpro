// lib/seo/link-graph.ts
// Internal linking system for: Home, About, Services, Tools, Blogs, Contact

export interface PageNode {
  url: string;
  title: string;
  keywords: string[];
  importance: number;
  pageType: 'home' | 'about' | 'services' | 'tools' | 'blog' | 'contact';
}

class LinkGraphBuilder {
  private pages: Map<string, PageNode> = new Map();
  
  constructor() {
    this.initializePages();
  }
  
  private initializePages() {
    const pages: PageNode[] = [
      { 
        url: '/', 
        title: 'Home', 
        keywords: ['AI SEO', 'digital growth', 'SEO agency', 'home'], 
        importance: 1.0,
        pageType: 'home'
      },
      { 
        url: '/about', 
        title: 'About Us', 
        keywords: ['AI SEO agency', 'ex-Google engineers', 'SEO experts', 'team', 'founders'], 
        importance: 0.9,
        pageType: 'about'
      },
      { 
        url: '/services', 
        title: 'Our Services', 
        keywords: ['AI SEO', 'voice search', 'visual search', 'technical SEO', 'content strategy'], 
        importance: 0.95,
        pageType: 'services'
      },
      { 
        url: '/tools', 
        title: 'SEO Tools', 
        keywords: ['SEO tools', 'AI tools', 'rank tracker', 'keyword research', 'audit tools'], 
        importance: 0.85,
        pageType: 'tools'
      },
      { 
        url: '/blogs', 
        title: 'Blog', 
        keywords: ['SEO tips', 'AI news', 'digital marketing', 'guides', 'tutorials'], 
        importance: 0.8,
        pageType: 'blog'
      },
      { 
        url: '/contact', 
        title: 'Contact Us', 
        keywords: ['contact', 'get in touch', 'consultation', 'support', 'hello'], 
        importance: 0.85,
        pageType: 'contact'
      }
    ];
    
    pages.forEach(page => this.pages.set(page.url, page));
  }
  
  // Calculate semantic relevance between pages
  calculateRelevance(source: PageNode, target: PageNode): number {
    let score = 0;
    
    // Match keywords
    const sharedKeywords = source.keywords.filter(k => target.keywords.includes(k));
    score += sharedKeywords.length * 0.4;
    
    // Boost important pages
    score += target.importance * 0.3;
    
    // Page type relevance
    const relatedTypes: Record<string, string[]> = {
      'home': ['services', 'about', 'contact'],
      'about': ['home', 'services', 'contact'],
      'services': ['home', 'tools', 'blog', 'contact'],
      'tools': ['services', 'blog', 'home'],
      'blog': ['services', 'tools', 'home'],
      'contact': ['home', 'services', 'about']
    };
    
    if (relatedTypes[source.pageType]?.includes(target.pageType)) {
      score += 0.2;
    }
    
    // Don't link to self
    if (source.url === target.url) score = 0;
    
    return Math.min(score, 1);
  }
  
  // Get related pages for internal linking
  getRelatedPages(pageUrl: string, limit: number = 4): PageNode[] {
    const source = this.pages.get(pageUrl);
    if (!source) return [];
    
    const related = Array.from(this.pages.values())
      .filter(p => p.url !== pageUrl)
      .map(target => ({
        ...target,
        relevance: this.calculateRelevance(source, target)
      }))
      .filter(p => p.relevance > 0.3)
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, limit);
    
    return related;
  }
  
  // Get contextual anchor text suggestions
  getAnchorText(target: PageNode, context?: string): string {
    const defaultAnchors: Record<string, string> = {
      '/': 'Home',
      '/about': 'Learn more about us',
      '/services': 'Explore our services',
      '/tools': 'Try our free SEO tools',
      '/blogs': 'Read our latest blogs',
      '/contact': 'Get in touch'
    };
    
    if (context && target.keywords.some(k => context.toLowerCase().includes(k))) {
      return context;
    }
    
    return defaultAnchors[target.url] || target.title;
  }
}

export const linkGraph = new LinkGraphBuilder();