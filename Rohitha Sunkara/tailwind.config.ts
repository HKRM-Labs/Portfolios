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
        background: "var(--background)",
        foreground: "var(--foreground)",
        plum: {
          950: "#FFFFFF", // Crisp White base
          900: "#FFF5F8", // Porcelain Soft Pink
          850: "#FDF2F7", // Delicate Rose Mist
          800: "#FCE7F3", // Soft Rose Petal (pink-100)
          700: "#FBCFE8", // Powder Pink
          600: "#F472B6", // Rose Quartz
        },
        rose: {
          50: "#FFF1F2",
          100: "#FFE4E6",
          200: "#FECDD3",
          300: "#FDA4AF",
          400: "#FB7185",
          500: "#F43F5E",
          600: "#E11D48",
          700: "#BE123C",
          800: "#9F1239",
          900: "#881337",
          950: "#4C0519",
        },
        pink: {
          50: "#FDF2F8",
          100: "#FCE7F3",
          200: "#FBCFE8",
          300: "#F472B6",
          400: "#EC4899",
          500: "#DB2777",
          600: "#BE185D",
          700: "#9D174D",
          800: "#831843",
          900: "#500724",
          950: "#360417",
        },
        champagne: {
          50: "#FFFFFF",
          100: "#FFF8FA",
          200: "#FCE7F3",
          300: "#EC4899", // Vibrant Rose
          400: "#DB2777", // Haute Magenta
          500: "#9D174D", // Deep Carmine
        },
        mauve: {
          200: "#FCE7F3",
          300: "#FBCFE8",
          400: "#F472B6",
          500: "#EC4899",
          600: "#DB2777",
        },
        apricot: {
          200: "#FFE4E6",
          300: "#FDA4AF",
          400: "#FB7185",
          500: "#F43F5E",
        },
        cashmere: {
          100: "#FFF5F8",
          200: "#FCE7F3",
          300: "#F472B6",
          400: "#BE185D",
          500: "#831843",
        },
      },
      fontFamily: {
        abril: ["var(--font-abril)", "Abril Fatface", "serif"],
        syne: ["var(--font-syne)", "sans-serif"],
        bodoni: ["var(--font-bodoni)", "Didot", "serif"],
        editorial: ["var(--font-editorial)", "Cormorant Garamond", "serif"],
      },
      letterSpacing: {
        widest: "0.25em",
        ultra: "0.35em",
        cinema: "0.45em",
      },
    },
  },
  plugins: [],
};
export default config;
