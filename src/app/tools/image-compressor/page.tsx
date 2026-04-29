// src/app/tools/image-compressor/page.tsx
// Server Component - Main page
import { JsonLdSchemas } from './schemas';
import { CompressorToolClient } from './client';
import { SEOContentSections } from './seo-content';

export const metadata = {
  title: 'Free Image Compressor | Reduce Image Size Online | iCreatixPRO',
  description: 'Compress JPEG, PNG, WebP images online for free. Reduce file size up to 80% while maintaining quality. Fast, secure, and private image compression tool.',
};

export default function ImageCompressorPage() {
  return (
    <>
      <JsonLdSchemas />
      
      <div className="min-h-screen max-w-4xl mx-auto px-4 py-8 md:py-12">
        
        {/* Hero Section - Strong H1 */}
        <div className="text-center mb-10">
          <div className="inline-block px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-medium mb-4 animate-pulse">
            ⚡ Save 80% bandwidth instantly
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A394E] mb-6 leading-tight">
            Make Your Website Fly{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2C727B] to-[#1A394E]">
              in Seconds
            </span>
          </h1>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-3">
            Compress JPG, PNG & WebP images up to 80% smaller without losing quality.
            No upload. No signup. 100% free.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <span className="text-green-500">✓</span> SEO Optimized
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <span className="text-green-500">✓</span> Core Web Vitals Ready
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <span className="text-green-500">✓</span> Google PageSpeed Boost
            </div>
          </div>
        </div>
        
        {/* Interactive Tool */}
        <CompressorToolClient />
        
        {/* Static SEO Content */}
        <SEOContentSections />
        
        {/* Footer */}
        <div className="mt-10 pt-6 text-center text-xs text-gray-400 border-t border-gray-200">
          <p>© 2026 iCreatixPRO - Website Growth Toolkit</p>
        </div>
        
      </div>
    </>
  );
}