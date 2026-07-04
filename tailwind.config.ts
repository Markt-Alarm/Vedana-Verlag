import type { Config } from "tailwindcss";

/**
 * Designsystem Vedana – Farben aus dem Buchcover abgeleitet.
 * Gold ist der einzige "laute" Ton und wird streng rationiert.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: "#FBF6EE", deep: "#F3ECDF" }, // warmes Cremeweiß / Ecru
        ink: { DEFAULT: "#1F1D1A", muted: "#5C574F" }, // Tintenschwarz
        gold: { DEFAULT: "#B98A3C", soft: "#CDA868" }, // Akzent, sparsam
        sage: "#7C8B6F", // Salbeigrün
        bluegrey: "#93A5B1", // sanftes Blaugrau
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      boxShadow: {
        book: "0 24px 60px -20px rgba(31,29,26,0.35)",
        soft: "0 12px 34px -14px rgba(31,29,26,0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
