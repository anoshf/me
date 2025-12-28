import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        soft: "0 14px 36px rgba(15, 23, 42, 0.12)",
        ring: "0 0 0 1px rgba(15, 23, 42, 0.08)"
      },
      borderRadius: {
        "2xl": "1.25rem"
      }
    }
  },
  plugins: []
} satisfies Config;
