"use client";

export default function MiddleRibbon() {
  return (
    <section className="relative py-20 my-12 overflow-hidden bg-gradient-to-r from-[#1A394E] via-[#2C727B] to-[#1A394E]">
      {/* Diagonal Ribbon Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_30%,white_30%,white_50%,transparent_50%,transparent_80%,white_80%,white_100%)] bg-[length:60px_60px]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
          <span className="text-white/80 text-xs tracking-wider">LIMITED OFFER</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          🚀 Get 50% Off Your First SEO Campaign
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-6">
          Plus free technical SEO audit worth . Offer ends soon!
        </p>
        <button className="px-8 py-3 bg-white text-[#1A394E] font-semibold rounded-full hover:shadow-lg transition">
          Claim Your Discount →
        </button>
      </div>

      {/* Ribbon Tails */}
      <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-[#1A394E] rotate-45" />
      <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-[#1A394E] rotate-45" />
    </section>
  );
}
