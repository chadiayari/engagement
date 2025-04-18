import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        border: "hsl(var(--border))",
        background: "#EBE7E2",
        foreground: "hsl(var(--foreground))",
        primaryBrown: "#99986D",
        black: "#000000",
        white: "#ffffff",
        transparent: "transparent",
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(10vh)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein300: "slidein 1s ease 300ms ",
        slidein600: "slidein 1s ease 600ms ",
      },
      fontFamily: {
        primaryBold: ["Lato-Bold"],
        primaryMedium: ["Lato-Medium"],
        primaryLight: ["Lato-Ultralight"],
        textDescription: ["Lato"],
        melodramaRegular: ["Melodrama-Regular"],
        melodramaSemibold: ["Melodrama-Semibold"],
        melodramaMedium: ["Melodrama-Medium"],
        melodramaBold: ["Melodrama-Bold"],
        tuesdayNightRegular: ["TuesdayNight-Regular"],
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        "b-sm": "0px",
        "b-md": "480px",
        "b-lg": "768px",
        "b-xl": "992px",
        "max-sm": { max: "479px" },
        "max-md": { max: "767px" },
        "max-lg": { max: "991px" },
        "max-xl": { max: "1280px" },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
