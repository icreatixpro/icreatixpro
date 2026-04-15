// src/components/tools/ToolLoader.tsx
import React from "react";

const ToolLoader: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-6">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-t-4 border-blue-500/30 animate-spin"></div>
        <div className="absolute inset-0 rounded-full border-4 border-t-4 border-purple-500/40 animate-spin animation-delay-200"></div>
        <div className="absolute inset-0 rounded-full border-4 border-t-4 border-pink-400/50 animate-spin animation-delay-400"></div>
      </div>
      <p className="mt-4 text-gray-400 text-center text-sm">Analyzing text...</p>
      <style jsx>{`
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
};

export default ToolLoader;