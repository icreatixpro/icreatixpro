"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
  title?: string;
};

const MetaGeneratorLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <section className="w-full pt-0 pb-20 px-4 sm:px-6 lg:px-12">

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto">

        {/* HEADER SECTION */}
        {title && (
          <div className="mb-8 text-center">

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
              {title}
            </h1>

            <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              Generate SEO-optimized meta titles, descriptions, and preview how your content appears in search engine results.
            </p>

          </div>
        )}

        {/* TOOL WRAPPER */}
        <div className="w-full bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl">

          {/* INNER CONTENT (BETTER READABILITY) */}
          <div className="max-w-5xl mx-auto w-full">
            {children}
          </div>

        </div>

      </div>

    </section>
  );
};

export default MetaGeneratorLayout;