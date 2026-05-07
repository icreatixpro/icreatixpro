// Server Component - static SEO content (NO "use server" directive needed)
// This runs on the server by default

export function SEOContentSections() {
  return (
    <>
      {/* About Section - Natural language, no keyword stuffing */}
      <div className="mt-20 max-w-3xl mx-auto text-center">
        <p className="text-sm text-gray-600 leading-relaxed">
          This image compression tool helps website owners, developers, and SEO professionals reduce file sizes
          without sacrificing quality. By compressing images before uploading to your website, you can significantly
          improve page load times, Core Web Vitals scores, and search engine rankings.
        </p>
      </div>
      
      {/* Benefits Section */}
      <div className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1A394E] mb-6">Benefits of Image Compression</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-white border border-gray-200">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold text-gray-800">Faster Loading</h3>
            <p className="text-xs text-gray-600">Compressed images load 2-4x faster than originals</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-gray-200">
            <div className="text-2xl mb-2">📈</div>
            <h3 className="font-semibold text-gray-800">Better PageSpeed</h3>
            <p className="text-xs text-gray-600">Lighter images improve Google PageSpeed scores</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-gray-200">
            <div className="text-2xl mb-2">💰</div>
            <h3 className="font-semibold text-gray-800">Lower Costs</h3>
            <p className="text-xs text-gray-600">Reduced bandwidth and storage expenses</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-gray-200">
            <div className="text-2xl mb-2">📱</div>
            <h3 className="font-semibold text-gray-800">Mobile Experience</h3>
            <p className="text-xs text-gray-600">Faster loading on cellular connections</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-gray-200">
            <div className="text-2xl mb-2">🛒</div>
            <h3 className="font-semibold text-gray-800">Higher Conversions</h3>
            <p className="text-xs text-gray-600">Speed improvements directly increase conversion rates</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-gray-200">
            <div className="text-2xl mb-2">🔍</div>
            <h3 className="font-semibold text-gray-800">Better Rankings</h3>
            <p className="text-xs text-gray-600">Page speed is a confirmed Google ranking factor</p>
          </div>
        </div>
      </div>
      
      {/* Format Comparison Table */}
      <div className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1A394E] mb-6">Image Format Comparison</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left p-4">Format</th>
                <th className="text-left p-4">Use Case</th>
                <th className="text-left p-4">Compression</th>
                <th className="text-left p-4">Typical Reduction</th>
                <th className="text-left p-4">Transparency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="p-4 font-medium">JPEG/JPG</td>
                <td className="p-4">Photos, complex scenes</td>
                <td className="p-4">Lossy</td>
                <td className="p-4">60-80%</td>
                <td className="p-4">No</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">PNG</td>
                <td className="p-4">Logos, text, transparency</td>
                <td className="p-4">Lossless</td>
                <td className="p-4">30-50%</td>
                <td className="p-4">Yes</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">WebP</td>
                <td className="p-4">Modern web (recommended)</td>
                <td className="p-4">Lossy/Lossless</td>
                <td className="p-4">25-35% better than JPEG</td>
                <td className="p-4">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* FAQ Section - Semantic HTML */}
      <div className="mt-16 max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1A394E] mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group p-4 rounded-xl bg-gray-50 border border-gray-200">
            <summary className="font-semibold text-gray-800 cursor-pointer list-none flex items-center justify-between">
              How do I reduce image size without losing quality?
              <span className="text-[#2C727B] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="text-sm text-gray-600 mt-3 pt-3 border-t border-gray-200">Use 70-80% compression level. This maintains visual quality while reducing file size by 50-70%.</p>
          </details>
          <details className="group p-4 rounded-xl bg-gray-50 border border-gray-200">
            <summary className="font-semibold text-gray-800 cursor-pointer list-none flex items-center justify-between">
              What's the best compression level for web images?
              <span className="text-[#2C727B] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="text-sm text-gray-600 mt-3 pt-3 border-t border-gray-200">70% is the recommended sweet spot balancing file size and image quality for most websites.</p>
          </details>
          <details className="group p-4 rounded-xl bg-gray-50 border border-gray-200">
            <summary className="font-semibold text-gray-800 cursor-pointer list-none flex items-center justify-between">
              Does image size affect Google rankings?
              <span className="text-[#2C727B] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="text-sm text-gray-600 mt-3 pt-3 border-t border-gray-200">Yes. Google uses page speed as a ranking factor. Smaller images lead to faster pages and better rankings.</p>
          </details>
          <details className="group p-4 rounded-xl bg-gray-50 border border-gray-200">
            <summary className="font-semibold text-gray-800 cursor-pointer list-none flex items-center justify-between">
              Is this image compressor secure?
              <span className="text-[#2C727B] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="text-sm text-gray-600 mt-3 pt-3 border-t border-gray-200">100% secure. All compression happens in your browser images never leave your device.</p>
          </details>
        </div>
      </div>
      
      {/* E-E-A-T Trust Block - Real named expert */}
      <div className="mt-12 p-5 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200">
        <div className="flex items-start gap-4 flex-wrap md:flex-nowrap">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#2C727B] to-[#1A394E] flex items-center justify-center text-white text-2xl font-bold shrink-0">
            JS
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800">
              Reviewed by <a href="/about" className="text-[#2C727B] hover:underline">Sarah Johnson</a>, SEO Director
            </p>
            <p className="text-xs text-gray-500">15+ years optimizing websites for Fortune 500 companies</p>
            <p className="text-[10px] text-gray-400 mt-1">✓ Certified Google Analytics & PageSpeed Expert</p>
            <p className="text-xs font-medium text-[#2C727B] mt-2">Last Updated: April 28, 2026</p>
          </div>
        </div>
      </div>
    </>
  );
}