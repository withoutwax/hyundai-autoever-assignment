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
        midnight: "#08141f",
      },
      fontFamily: {
        sans: ["var(--kia-signature-fix)"],
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(1, 0, 0.2, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.6s cubic-bezier(1, 0, 0.2, 1)",
        "accordion-up": "accordion-up 0.6s cubic-bezier(1, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
