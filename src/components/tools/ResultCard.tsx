// src/components/tools/ResultCard.tsx
import React from "react";

type Props = {
  label: string;
  value: string | number;
  highlight?: boolean; // Top keyword
};

const ResultCard: React.FC<Props> = ({ label, value, highlight = false }) => {
  return (
    <div
      className={`p-4 rounded-2xl border border-white/10 backdrop-blur-md bg-white/5 shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer
        ${highlight ? "border-yellow-400 bg-yellow-500/10" : ""}`}
    >
      <p className="text-sm opacity-70">{label}</p>
      <h3
        className={`text-xl font-semibold mt-1 ${
          highlight ? "text-yellow-400" : "text-white"
        }`}
      >
        {value}
      </h3>
      {highlight && (
        <span className="inline-block mt-1 text-xs text-yellow-300 font-medium animate-pulse">
          Top Keyword 🔥
        </span>
      )}
    </div>
  );
};

export default ResultCard;