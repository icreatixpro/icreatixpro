// src/app/tools/image-compressor/layout.tsx
import type { Metadata } from 'next';

const SITE_URL = 'https://icreatixpro.com';
const PAGE_URL = `${SITE_URL}/tools/image-compressor`;

export const metadata: Metadata = {
  // ✅ OPTIMAL TITLE: 53 characters
  title: 'Free Image Compressor | Reduce JPG PNG WebP Size',
  
  // ✅ OPTIMAL DESCRIPTION: 152 characters
  description: 'Reduce JPG, PNG & WebP file size up to 80% without quality loss. Improve website speed, Core Web Vitals & SEO rankings. 100% browser-based, no upload.',
  
  // ✅ COMPREHENSIVE KEYWORDS for SEO
  keywords: [
    // Primary keywords
    'image compressor',
    'compress image online',
    'reduce image size',
    'free image compressor',
    'online image compressor',
    
    // Format-specific keywords
    'JPG compressor',
    'JPEG compressor',
    'PNG optimizer',
    'PNG compressor',
    'WebP converter',
    'WebP compressor',
    
    // Action-based keywords
    'compress JPG online',
    'compress PNG online',
    'compress WebP online',
    'reduce JPG size',
    'reduce PNG size',
    'reduce WebP size',
    'optimize images for web',
    'image size reducer',
    
    // SEO-related keywords
    'image optimization for SEO',
    'Core Web Vitals optimization',
    'improve page speed',
    'image compression for website',
    'faster image loading',
    'PageSpeed Insights optimization',
    
    // Long-tail keywords
    'how to reduce image size without losing quality',
    'best free image compressor',
    'compress image without quality loss',
    'image optimizer for WordPress',
    'bulk image compressor',
    
    // Tool comparisons
    'alternative to TinyPNG',
    'free TinyPNG alternative',
    'Squoosh alternative',
    
    // Industry keywords
    'image optimization for web developers',
    'compress images for ecommerce',
    'image compression for bloggers',
    'SEO image optimizer',
    
    // Technical keywords
    'lossy image compression',
    'lossless image compression',
    'browser-based image compression',
    'client-side image compressor',
    'no upload image compression',
  ].join(', '),
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  
  alternates: {
    canonical: PAGE_URL,
  },
  
  openGraph: {
    title: 'Free Image Compressor | Reduce JPG PNG WebP Size',
    description: 'Reduce JPG, PNG & WebP file size up to 80% without quality loss. Improve website speed, Core Web Vitals & SEO rankings. 100% browser-based, no upload.',
    url: PAGE_URL,
    siteName: 'iCreatixPRO',
    images: [
      {
        url: `${SITE_URL}/og-images/image-compressor.jpg`,
        width: 1200,
        height: 630,
        alt: 'Free Image Compressor Tool - iCreatixPRO',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Free Image Compressor | Reduce JPG PNG WebP Size',
    description: 'Reduce JPG, PNG & WebP file size up to 80% without quality loss. Improve Core Web Vitals & SEO rankings.',
    images: [`${SITE_URL}/og-images/image-compressor.jpg`],
    site: '@iCreatixPRO',
    creator: '@iCreatixPRO',
  },
  
authors: [
  {
    name: 'John Smith',
  },
],
creator: 'iCreatixPRO SEO Team',
publisher: 'iCreatixPRO',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}