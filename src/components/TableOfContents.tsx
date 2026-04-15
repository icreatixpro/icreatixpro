"use client";

import { useEffect, useState } from "react";

export default function TableOfContents() {
  const [headings, setHeadings] = useState<any[]>([]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3"));

    const mapped = elements.map((el: any) => ({
      id: el.id,
      text: el.innerText,
      level: el.tagName,
    }));

    setHeadings(mapped);
  }, []);

  return (
    <div className="p-4 rounded-xl border bg-white sticky top-24">
      <h3 className="font-semibold mb-3 text-sm">On this page</h3>

      <ul className="space-y-2 text-sm">
        {headings.map((h, i) => (
          <li key={i} className={h.level === "H3" ? "ml-4 text-gray-500" : ""}>
            <a href={`#${h.id}`} className="hover:text-blue-600">
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
Trusted.tsx
"use client"

import Image from "next/image"

export default function Trusted(){

const logos = [
"/google.svg",
"/amazon.svg",
"/meta.svg",
"/shopify.svg",
"/wordpress.svg",
"/hubspot.svg"
]

return(

<section className="py-20 bg-white overflow-hidden">

<div className="max-w-6xl mx-auto text-center mb-12">

<h2 className="trusted-title">
Trusted By Growing Businesses Worldwide
</h2>

</div>

<div className="logo-marquee">

<div className="logo-track">

{logos.concat(logos).map((logo,i)=>(
<div key={i} className="logo-item">

<Image
src={logo}
alt="client logo"
width={80}
height={10}
/>

</div>
))}

</div>

</div>

</section>

)
}