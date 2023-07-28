import type { Config } from "tailwindcss";
import { Stark } from "@eventful-ph/stark";
const config = {
  content: [
    "./node_modules/@eventful-ph/stark/dist/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@eventful-ph/stark/dist/components/*.{js,ts,jsx,tsx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        image: "url('/public/background.jpg')",
      },
      colors: {
        primary: {
          base: "#1F7D8B",
          active: "#1D4D55",
          hover: "#1F6D78",
          muted: "#EBF5F7",
        },
      },
    },
  },
  plugins: [Stark],
} satisfies Config;

export default config;
