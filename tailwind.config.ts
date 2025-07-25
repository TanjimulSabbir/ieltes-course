import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Define your custom global colors here
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
  },
  plugins: [],
};

export default config;
