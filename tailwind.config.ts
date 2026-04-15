import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography"

plugins: [typography]

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"), // 🔥 IMPORTANT
  ],
};

export default config;