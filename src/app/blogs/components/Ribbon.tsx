"use client";

export default function Ribbon({ text }: { text: string }) {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-50 border-b">

      <div className="animate-marquee whitespace-nowrap py-3 text-sm text-gray-700">

        <span className="mx-10">🚀 {text}</span>
        <span className="mx-10">🚀 {text}</span>

      </div>

    </div>
  );
}