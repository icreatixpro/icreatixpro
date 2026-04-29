"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ROICalculator() {
  const [monthlySpend, setMonthlySpend] = useState(5000);
  const [roas, setRoas] = useState(3.5);

  const estimatedRevenue = monthlySpend * roas;
  const yearlyRevenue = estimatedRevenue * 12;

  return (
    <section aria-labelledby="roi-calculator-heading" className="mb-12 md:mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
      <h2 id="roi-calculator-heading" className="text-2xl md:text-3xl font-bold text-[#1A394E] text-center mb-3 md:mb-4">
        Meta Ads ROI Calculator
      </h2>
      <p className="text-[#1A394E]/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8">
        Estimate your potential return on investment from Meta advertising
      </p>

      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#1A394E] mb-2">
            Monthly Ad Spend: ${monthlySpend.toLocaleString()}
          </label>
          <input
            type="range"
            min="1000"
            max="50000"
            step="1000"
            value={monthlySpend}
            onChange={(e) => setMonthlySpend(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2C727B]"
          />
          <div className="flex justify-between text-xs text-[#1A394E]/50 mt-1">
            <span>$1k</span>
            <span>$10k</span>
            <span>$20k</span>
            <span>$30k</span>
            <span>$40k</span>
            <span>$50k</span>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-[#1A394E] mb-2">
            Expected ROAS: {roas}x
          </label>
          <input
            type="range"
            min="1"
            max="8"
            step="0.5"
            value={roas}
            onChange={(e) => setRoas(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2C727B]"
          />
          <div className="flex justify-between text-xs text-[#1A394E]/50 mt-1">
            <span>1x</span>
            <span>2x</span>
            <span>3x</span>
            <span>4x</span>
            <span>5x</span>
            <span>6x</span>
            <span>7x</span>
            <span>8x</span>
          </div>
          <p className="text-xs text-[#1A394E]/50 mt-2">Industry average: 2.5-4x depending on industry</p>
        </div>

        <div className="bg-teal-50 rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-[#1A394E] mb-2">Your Estimated Meta Ads ROI</h3>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <p className="text-xs text-[#1A394E]/50">Monthly Ad Spend</p>
              <p className="text-xl font-bold text-[#2C727B]">${monthlySpend.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs text-[#1A394E]/50">Monthly Revenue</p>
              <p className="text-xl font-bold text-[#2C727B]">${estimatedRevenue.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs text-[#1A394E]/50">Yearly Revenue</p>
              <p className="text-xl font-bold text-[#2C727B]">${yearlyRevenue.toLocaleString()}</p>
            </div>
          </div>
          <p className="text-xs text-[#1A394E]/60">
            *Based on estimated Meta Ads results. Actual results may vary by industry, competition, and offer strength.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-4 px-6 py-2 rounded-lg bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white text-sm font-semibold hover:shadow-md transition-all"
          >
            Get Custom ROI Analysis
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}