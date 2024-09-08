import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        DM: ["DM Sans", "sans-serif"],
        melodrama: ['var(--font-melodrama)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "hero-bg": "url('/img/nairobi-skyline.png')",
      },
      screens: {
        xxs: "320px",
        // => @media (min-width: 320px) { ... }
  
        xsm: "450px",
        // => @media (min-width: 450px) { ... }
  
        sm: "640px",
        // => @media (min-width: 640px) { ... }
  
        md: "768px",
        // => @media (min-width: 768px) { ... }
  
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
  
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
  
        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
