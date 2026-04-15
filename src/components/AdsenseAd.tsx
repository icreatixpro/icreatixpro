"use client";

import { useEffect } from "react";

type Props = {
  adClient: string;
  adSlot: string;
  className?: string;
};

export default function AdsenseAd({ adClient, adSlot, className }: Props) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    <div className={`my-6 flex justify-center ${className || ""}`}>
      <ins
        className="adsbygoogle w-full max-w-3xl h-[90px]"
        style={{ display: "block" }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}