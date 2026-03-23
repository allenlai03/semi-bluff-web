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
          primary: "#0D0D0D",
          secondary: "#1A1A1A",
          tertiary: "#242424",
        },
        surface: {
          primary: "#1E1E1E",
          secondary: "#2A2A2A",
          elevated: "#333333",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#A0A0A0",
          tertiary: "#666666",
          inverse: "#0D0D0D",
        },
        accent: {
          primary: "#7C3AED",
          secondary: "#9F67FF",
          muted: "#3D1F7A",
        },
        positive: "#22C55E",
        negative: "#EF4444",
        warning: "#F59E0B",
        border: "#2E2E2E",
        divider: "#1F1F1F",
        medal: {
          gold: "#FFD700",
          silver: "#C0C0C0",
          bronze: "#CD7F32",
        },
      },
      fontFamily: {
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
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "12px",
        xl: "20px",
      },
    },
  },
  plugins: [],
};

export default config;
