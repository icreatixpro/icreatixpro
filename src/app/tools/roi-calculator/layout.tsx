"use client";

export default function ROILayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {title && (
        <h2 className="text-4xl font-bold text-black mb-6">
          {title}
        </h2>
      )}

      <div className="bg-white/30 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 shadow-xl">
        {children}
      </div>
    </div>
  );
}