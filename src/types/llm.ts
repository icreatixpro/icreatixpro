export interface ExtractedContent {
  title: string;
  description: string;
  author?: string;
  siteName?: string;
  content: string;
  headings: string[];
  internalLinks: string[];
  externalLinks: string[];
  images: string[];
  wordCount: number;
  readingTime: number;
}

export interface LLMOptions {
  includeHeadings: boolean;
  includeMeta: boolean;
  includeLinks: boolean;
  includeImages: boolean;
  maxTokens: number;
}