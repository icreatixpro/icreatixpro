"use client";

import { useState } from "react";
import { Twitter, Facebook, Linkedin, Link2, Check, Share2 } from "lucide-react";

interface ShareBarProps {
  url: string;
  title: string;
}

export default function ShareBar({ url, title }: ShareBarProps) {
  const [copied, setCopied] = useState(false);
  
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  };
  
  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const handleShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], "_blank", "width=600,height=400");
  };
  
  return (
    <div className="flex lg:flex-col gap-3">
      <button
        onClick={() => handleShare("twitter")}
        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#1DA1F2] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Share on X"
      >
        <Twitter className="w-4 h-4" />
      </button>
      
      <button
        onClick={() => handleShare("facebook")}
        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#1877F2] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Share on Facebook"
      >
        <Facebook className="w-4 h-4" />
      </button>
      
      <button
        onClick={() => handleShare("linkedin")}
        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#0077B5] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </button>
      
      <button
        onClick={handleCopy}
        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#2C727B] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Copy link"
      >
        {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
      </button>
    </div>
  );
}