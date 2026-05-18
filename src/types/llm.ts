// src/types/llm.ts

export interface ExtractedContent {
  title?: string;
  description?: string;
  author?: string;
  siteName?: string;

  content: string;
  headings: string[];
  internalLinks: string[];
  externalLinks: string[];
  images: string[];
  wordCount: number;
}

export interface PageData extends ExtractedContent {}

export interface GenerateOptions {
  includeHeadings: boolean;
  includeMeta: boolean;
  includeLinks: boolean;
  includeImages: boolean;
  maxTokens: number;
}
