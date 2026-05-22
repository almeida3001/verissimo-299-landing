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
        /* Paleta Luxury Real Estate (Stone warm-neutral + Champagne Gold) */
        bg:       "#1C1917",  /* stone-900 — warm dark neutral, sem barro */
        surface:  "#292524",  /* stone-800 */
        elevated: "#44403C",  /* stone-700 */
        cream:    "#FAFAF9",  /* stone-50 */
        muted:    "#A8A29E",  /* stone-400 */
        line:     "#57534E",  /* stone-600 — para divisores */

        /* Light variants — pra alternar seções em bege off-white */
        warmlight:   "#EDE5D5",  /* bege off-white quente, intermediate */
        textdark:    "#1C1917",  /* texto principal sobre fundo light = stone-900 */
        muteddark:   "#57534E",  /* texto secundário sobre fundo light = stone-600 */
        linedark:    "#D6CFC1",  /* divisores sobre fundo light */

        /* Accents */
        gold:     "#CA8A04",  /* champagne gold — CTA principal */
        goldsoft: "#EAB308",  /* champagne hover */
        sand:     "#D6C8A3",  /* areia clara — secondary accent */
        sea:      "#7FA8B0",  /* azul mar — mantido pra ar de praia */
        bronze:   "#CA8A04",  /* alias compat */
        terra:    "#3F3935",
        warmsand: "#E8DCC4",
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
