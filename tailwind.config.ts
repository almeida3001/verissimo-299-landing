import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:      "#090C0C",
        surface: "#0F1518",
        cream:   "#F2EDE6",
        muted:   "#8A9EA3",
        sand:    "#D9CDB8",
        sea:     "#7FA8B0",
        bronze:  "#B8874E",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "serif"],
        josefin:   ["var(--font-josefin)", "sans-serif"],
        outfit:    ["var(--font-outfit)", "sans-serif"],
        italiana:  ["var(--font-italiana)", "serif"],
      },
      letterSpacing: {
        w1: "0.08em",
        w2: "0.15em",
        w3: "0.25em",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
      },
    },
  },
  plugins: [],
};

export default config;
