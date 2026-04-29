"use client";

import { useEffect, useState } from "react";
import { brandColors } from "@/lib/blog-data";

interface ReadingProgressProps {
  color?: string;
}

export default function ReadingProgress({ color = brandColors.primary }: ReadingProgressProps) {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const percentage = (scrollPosition / totalHeight) * 100;
      setProgress(percentage);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-100">
      <div
        className="h-full transition-all duration-200"
        style={{ width: `${progress}%`, backgroundColor: color }}
      />
    </div>
  );
}