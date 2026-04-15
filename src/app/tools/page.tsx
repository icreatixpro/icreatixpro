"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, TrendingUp, Target, Calendar, Download, Share2, Info, ArrowRight, Zap, Shield, BarChart3, PieChart, LineChart, Users, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";

// Remove or comment out the AdsenseAd import if you don't have it configured
// import AdsenseAd from "@/components/AdsenseAd";

export default function ROICalculatorPage() {
  const [investment, setInvestment] = useState<number>(5000);
  const [revenue, setRevenue] = useState<number>(25000);
  const [period, setPeriod] = useState<"monthly" | "quarterly" | "yearly">("monthly");

  const calculateROI = () => {
    const profit = revenue - investment;
    const roi = (profit / investment) * 100;
    return { profit, roi };
  };

  const { profit, roi } = calculateROI();

  const getROIColor = () => {
    if (roi >= 100) return "text-green-600";
    if (roi >= 50) return "text-emerald-500";
    if (roi >= 25) return "text-yellow-500";
    if (roi >= 0) return "text-orange-500";
    return "text-red-500";
  };

  const getROIMessage = () => {
    if (roi >= 200) return "Excellent ROI! 🚀";
    if (roi >= 100) return "Great ROI! ⭐";
    if (roi >= 50) return "Good ROI! 👍";
    if (roi >= 25) return "Decent ROI 📈";
    if (roi >= 0) return "Positive ROI ✅";
    return "Negative ROI - Needs Review ⚠️";
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1A394E] via-[#2C727B] to-[#1A394E]">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] animate-pulse delay-1000" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <DollarSign className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white/90 font-semibold">ROI Calculator</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Calculate Your</span>
            <span className="block bg-gradient-to-r from-white via-[#2C727B] to-white bg-clip-text text-transparent mt-2">
              Marketing ROI
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Measure your marketing effectiveness and optimize your campaigns for better returns
          </p>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-[#1A394E] mb-6 flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-[#2C727B]" />
              Investment Details
            </h2>

            {/* Investment Input */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Total Investment ($)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#2C727B] focus:ring-2 focus:ring-[#2C727B]/20 outline-none transition-all"
                />
              </div>
            </div>

            {/* Revenue Input */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Total Revenue ($)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#2C727B] focus:ring-2 focus:ring-[#2C727B]/20 outline-none transition-all"
                />
              </div>
            </div>

            {/* Period Selector */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Time Period
              </label>
              <div className="flex gap-3">
                {["monthly", "quarterly", "yearly"].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPeriod(p as any)}
                    className={`flex-1 py-2.5 rounded-xl font-medium transition-all ${
                      period === p
                        ? "bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white shadow-md"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {p.charAt(0).toUpperCase() + p.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-800">
                  ROI measures the profitability of your investment. A higher ROI means better returns.
                </p>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="bg-gradient-to-br from-[#2C727B]/5 to-[#1A394E]/5 rounded-2xl shadow-xl p-6 md:p-8 border border-[#2C727B]/10">
            <h2 className="text-2xl font-bold text-[#1A394E] mb-6 flex items-center gap-2">
              <PieChart className="w-6 h-6 text-[#2C727B]" />
              Your Results
            </h2>

            {/* ROI Display */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm mb-4">
                <Target className="w-4 h-4 text-[#2C727B]" />
                <span className="text-sm font-semibold text-[#2C727B]">ROI Calculation</span>
              </div>
              <div className={`text-6xl md:text-7xl font-bold ${getROIColor()} mb-3`}>
                {roi.toFixed(1)}%
              </div>
              <div className="text-lg font-semibold text-gray-700">
                {getROIMessage()}
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="text-sm text-gray-500 mb-1">Investment</div>
                <div className="text-xl font-bold text-[#1A394E]">${investment.toLocaleString()}</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="text-sm text-gray-500 mb-1">Revenue</div>
                <div className="text-xl font-bold text-[#1A394E]">${revenue.toLocaleString()}</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="text-sm text-gray-500 mb-1">Profit</div>
                <div className="text-xl font-bold text-green-600">${profit.toLocaleString()}</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="text-sm text-gray-500 mb-1">Period</div>
                <div className="text-xl font-bold text-[#2C727B] capitalize">{period}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 py-3 bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Download Report
              </button>
              <button className="flex-1 py-3 bg-white text-[#2C727B] rounded-xl font-semibold border border-[#2C727B]/20 hover:shadow-lg transition-all flex items-center justify-center gap-2">
                <Share2 className="w-4 h-4" />
                Share Results
              </button>
            </div>
          </div>
        </div>

        {/* ROI Tips Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#1A394E] text-center mb-8">
            Tips to Improve Your ROI
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-[#1A394E] mb-2">Optimize Campaigns</h3>
              <p className="text-gray-500 text-sm">Regularly review and adjust your campaigns for better performance.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-[#1A394E] mb-2">Target Right Audience</h3>
              <p className="text-gray-500 text-sm">Focus on high-intent audiences that are more likely to convert.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <LineChart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-[#1A394E] mb-2">Track Metrics</h3>
              <p className="text-gray-500 text-sm">Monitor key performance indicators and adjust strategy accordingly.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#2C727B] to-[#1A394E] rounded-3xl blur-2xl opacity-20" />
          <div className="relative bg-gradient-to-br from-[#2C727B] to-[#1A394E] rounded-3xl p-10 text-center overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <Zap className="w-12 h-12 text-white/80 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to Boost Your ROI?
              </h3>
              <p className="text-white/80 mb-6">
                Let our experts help you optimize your marketing strategy
              </p>
              <Link href="/contact">
                <button className="px-8 py-3 bg-white text-[#1A394E] rounded-xl font-semibold hover:bg-gray-100 transition-all flex items-center gap-2 mx-auto">
                  Talk to an Expert
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Ads are commented out until Google Adsense is configured */}
      {/* <AdsenseAd adClient="ca-pub-xxx" adSlot="xxx" /> */}
    </main>
  );
}