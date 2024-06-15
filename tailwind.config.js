/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#d1e4fc",
          200: "#a2c9fa",
          300: "#74adf7",
          400: "#4592f5",
          500: "#1777f2",
          600: "#125fc2",
          700: "#0e4791",
          800: "#093061",
          900: "#051830",
          DEFAULT: "#1777f2",
        },
      },
    },
  },
  plugins: [],
};
