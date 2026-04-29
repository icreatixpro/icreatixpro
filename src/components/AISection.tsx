import {
Globe,
MapPin,
ShoppingCart,
Wrench,
FileText,
Mic,
BarChart,
Rocket,
Scan,
Palette,
Settings,
TrendingUp
} from "lucide-react"

const services = [
{
title: "AI SEO Optimization",
desc: "Boost rankings and traffic using advanced AI-driven SEO strategies.",
icon: <TrendingUp size={20}/>
},
{
title: "International SEO",
desc: "Scale globally with multilingual and geo-targeted optimization.",
icon: <Globe size={20}/>
},
{
title: "Local SEO Domination",
desc: "Rank higher on Google Maps with AI-powered local strategies.",
icon: <MapPin size={20}/>
},
{
title: "E-Commerce SEO",
desc: "Optimize product pages and schema using AI automation.",
icon: <ShoppingCart size={20}/>
},
{
title: "Technical SEO",
desc: "Fix site issues, speed, and indexing with AI audits.",
icon: <Wrench size={20}/>
},
{
title: "AI Content SEO",
desc: "Create high-ranking content using AI and NLP models.",
icon: <FileText size={20}/>
},
{
title: "Voice Search SEO",
desc: "Capture voice traffic and conversational queries.",
icon: <Mic size={20}/>
},
{
title: "AI Analytics",
desc: "Predict growth with real-time SEO data insights.",
icon: <BarChart size={20}/>
},
{
title: "Growth Hacking SEO",
desc: "Accelerate organic growth using AI-based strategies.",
icon: <Rocket size={20}/>
},
{
title: "AI Website Audit",
desc: "Full-site scanning and automated SEO fixes.",
icon: <Scan size={20}/>
},
{
title: "Creative Optimization",
desc: "Improve visuals and banners with AI enhancements.",
icon: <Palette size={20}/>
},
{
title: "Tool Integration",
desc: "Integrate GPT, Surfer SEO, and automation tools.",
icon: <Settings size={20}/>
},
]

export default function AISection(){

return(

<section className="mt-24 px-6">

<div className="max-w-7xl mx-auto text-center">

<h2 className="text-4xl font-bold text-[var(--dark-primary)]">
AI-Powered SEO & Growth Solutions
</h2>

<p className="mt-4 text-gray-600 max-w-2xl mx-auto">
Advanced AI-driven digital marketing services designed to scale your business faster.
</p>

</div>

{/* GRID */}

<div className="max-w-7xl mx-auto mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

{services.map((item, index)=>(

<div
key={index}
className="glass-card p-5 rounded-2xl cursor-pointer"
>

<div className="flex items-center gap-3">

<div className="icon-box">

{item.icon}

</div>

<h3 className="font-semibold text-[15px]">

{item.title}

</h3>

</div>

<p className="text-sm text-gray-600 mt-3">

{item.desc}

</p>

</div>

))}

</div>

</section>

)

}
