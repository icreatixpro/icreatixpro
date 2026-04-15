import Script from "next/script";

export default function BlogsLayout({ children }: any) {
  return (
    <>
      {/* Ads only for blogs */}
      <Script
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXX"
        crossOrigin="anonymous"
      />
      {children}
    </>
  );
}