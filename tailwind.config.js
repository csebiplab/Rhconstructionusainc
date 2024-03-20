/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        DEFAULT: ['var(--font-raleway)', "sans"],
        sans: ['var(--font-raleway)', 'sans-serif'],
      },
      colors: {
        primary: "#fab704",
        secondary: "#555",
        "gray-1": "var(--gray-1)",
        "gray-2": "var(--gray-2)",
        "gray-3": "var(--gray-3)",
        dark: {
          DEFAULT: "#000000",
          50: "#D9D9D980",
          100: "#484848",
          200: "#434343",
          300: "#535455",
          400: "#181514",
        },
        background: "var(--background-color)",
        foreground: "var(--foreground)",

        tremor: {
          background: {
            DEFAULT: "var(--background-color)",
          },
          border: {
            DEFAULT: "var(--gray-2)",
          },
          ring: {
            DEFAULT: "var(--gray-2)",
          },
          content: {
            subtle: "var(--gray-2)",
            DEFAULT: "var(--gray-1)",
            emphasis: "var(--foreground)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
});
