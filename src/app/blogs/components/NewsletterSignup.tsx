"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    
    // Simulate API call - Replace with your actual endpoint
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };
  
  return (
    <div className="mt-12 p-6 bg-gradient-to-r from-[#2C727B]/5 to-[#1A394E]/5 rounded-2xl border border-[#2C727B]/10">
      <div className="text-center">
        <div className="w-12 h-12 rounded-full bg-[#2C727B]/10 flex items-center justify-center mx-auto mb-4">
          <Mail className="w-6 h-6 text-[#2C727B]" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Get More SEO Insights
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Subscribe to our newsletter and get the latest SEO strategies delivered weekly.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2C727B] focus:border-transparent"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-2 bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : status === "success" ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <Send className="w-4 h-4" />
            )}
            Subscribe
          </button>
        </form>
        
        <p className="text-xs text-gray-400 mt-3">
          No spam. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </div>
  );
}