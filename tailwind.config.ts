import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#030711",
        midnight: "#050816",
        panel: "#081120",
        panelSoft: "#0b1628",
        mist: "#b8c7dc",
        violetGlow: "#8b5cf6",
        cyanGlow: "#22d3ee",
        limeGlow: "#a3e635",
      },
      boxShadow: {
        glow: "0 0 36px rgba(139, 92, 246, 0.22)",
        cyan: "0 0 28px rgba(34, 211, 238, 0.16)",
      },
      backgroundImage: {
        "vioniko-gradient":
          "linear-gradient(115deg, #60a5fa 0%, #22d3ee 24%, #a3e635 48%, #8b5cf6 78%, #38bdf8 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
