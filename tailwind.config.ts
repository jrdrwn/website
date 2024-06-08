import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-container": "#363636",
        "primary-on-container": "#F8F8F8",
        "base-100": "#3C3C3C",
        "base-content-100": "#F8F8F8",
        secondary: "#4F4F4F",
      },
      fontFamily: {
        mono: ["var(--font-red-hat-mono)", "monospace"],
        sans: ["var(--font-red-hat-mono)", "monospace"],
        display: ["var(--font-pacifico)", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
