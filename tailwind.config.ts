import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0A0E0B",
          secondary: "#0D0F10",
          tertiary: "#141815",
        },
        surface: {
          primary: "#101411",
          secondary: "#161B17",
        },
        text: {
          primary: "#F5EFE2",
          secondary: "rgba(245,239,226,0.72)",
          tertiary: "rgba(245,239,226,0.50)",
          inverse: "#0A0E0B",
        },
        gold: {
          DEFAULT: "#C9A866",
          light: "#E8C987",
          bright: "#F5D462",
          muted: "rgba(201,168,102,0.22)",
          deep: "#8A7340",
        },
        felt: {
          from: "#126B4E",
          mid: "#0B4D37",
          to: "#063324",
        },
        positive: "#22C55E",
        negative: "#EF4444",
        warning: "#F59E0B",
        border: "rgba(201,168,102,0.22)",
        divider: "rgba(201,168,102,0.12)",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        xxl: "48px",
        xxxl: "64px",
        huge: "96px",
        mega: "128px",
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "14px",
        xl: "20px",
      },
      letterSpacing: {
        caps: "0.12em",
      },
      backgroundImage: {
        felt: "linear-gradient(135deg, #126B4E 0%, #0B4D37 55%, #063324 100%)",
      },
      boxShadow: {
        felt: "0 30px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,102,0.18)",
        card: "0 12px 40px -16px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
