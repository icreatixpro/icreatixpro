"use client";

import { useEffect } from "react";

type Props = {
  adClient?: string;
  adSlot?: string;
  className?: string;
};

export default function AdsenseAd({ adClient, adSlot, className }: Props) {
  useEffect(() => {
    // Only push to adsense if we have the required props
    if (adClient && adSlot) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('Adsense error:', e);
      }
    }
  }, [adClient, adSlot]);

  // Don't render anything if no adClient or adSlot provided
  if (!adClient || !adSlot) {
    return null;
  }

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