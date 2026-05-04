import Script from "next/script";

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* 🔥 ADS (BLOGS ONLY) */}
      <Script
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXX"
        crossOrigin="anonymous"
      />

      {/* 🔥 READER REVENUE MANAGER (SWG) */}
      <Script
        src="https://news.google.com/swg/js/v1/swg-basic.js"
        strategy="afterInteractive"
      />

      <Script id="swg-init" strategy="afterInteractive">
        {`
          (self.SWG_BASIC = self.SWG_BASIC || []).push(function (basicSubscriptions) {
            basicSubscriptions.init({
              type: "NewsArticle",
              isPartOfType: ["Product"],
              isPartOfProductId: "CAowiLTGDA:openaccess",
              clientOptions: { theme: "light", lang: "en-GB" },
            });
          });
        `}
      </Script>

      {children}
    </>
  );
}