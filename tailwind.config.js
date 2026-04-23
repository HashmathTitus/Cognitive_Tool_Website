/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mint: {
          50: "#f3f8ff",
          100: "#e7f1ff",
          200: "#cfe3ff",
          300: "#a7ccff",
          400: "#78adff",
          500: "#4f8dff",
          600: "#2f73f0",
          700: "#1f5bc8",
          800: "#1c4aa1",
          900: "#1a3f7f"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(25, 66, 140, 0.12)",
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "mint-radial": "radial-gradient(circle at 10% 10%, #edf4ff 0%, #e9f2ff 35%, #f7fbff 100%)",
      },
    },
  },
  plugins: [],
};
