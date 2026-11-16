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
          950: "#120E12",
          900: "#181218",
          850: "#201820",
          800: "#2B1F2B",
          700: "#3E2D3E",
          600: "#553E55",
        },
        champagne: {
          50: "#FFFDF9",
          100: "#FAF3EB",
          200: "#F4E5D4",
          300: "#E8CEB5",
          400: "#D8B695",
          500: "#C49B74",
        },
        mauve: {
          200: "#FCE8EF",
          300: "#F6CBD7",
          400: "#E8A2B6",
          500: "#D47A95",
          600: "#B55773",
        },
        apricot: {
          200: "#FDE8E0",
          300: "#F9CDBC",
          400: "#EFA68F",
          500: "#DD7F63",
        },
        cashmere: {
          100: "#F5EFEA",
          200: "#EADFD4",
          300: "#DCCDC0",
          400: "#B8A393",
          500: "#8C7767",
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
