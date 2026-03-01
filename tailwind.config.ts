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
        ink: "#1a1a1a",
        paper: "#f5f2eb",
        "paper-warm": "#ebe5d8",
        graphite: "#4a4a4a",
        pencil: "#8a8578",
        "signal-amber": "#c4841d",
        "signal-amber-light": "#f0d9a8",
        "signal-red": "#b84233",
        "draft-blue": "#2d5f8a",
        "draft-blue-light": "#d4e3f0",
        "evidence-green": "#3a6b4a",
      },
      fontFamily: {
        display: ["'Instrument Serif'", "Georgia", "serif"],
        mono: ["'IBM Plex Mono'", "'Courier New'", "monospace"],
        body: ["'DM Sans'", "'Helvetica Neue'", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "2px",
        sm: "2px",
        md: "2px",
        lg: "2px",
        xl: "2px",
        "2xl": "2px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
export default config;
