import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a73e8",
        gray: "#6B7280",
        grayLight: "#4B5563",
        blue: "#0000FF",
        grayText: "#111827",
        black: "#02090B",
        light: "#f9fafb",
        green: "#1DAB55",
        greenText: "#1CAB55",
      },
    },
    screens: {
      sm: "500px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
    },
  },
  plugins: [],
};

export default config;
