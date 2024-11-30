import type { Config } from "tailwindcss";

export default {
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
        mint: "#70d7bf",
      },
      fontFamily: {
        sans: ["var(--kia-signature-fix)"],
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(1, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
