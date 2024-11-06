/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        xs: "12px",
        s: "14px",
        m: "16px",
        l: "18px",
        xl: "20px",
        "2xl": "26px",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#063436",
        secondary: "#C6E51B",
        tertiary: "#B0D9D4",
        quaternary: "#B0D9D433",
      },
    },
  },
  plugins: [],
};
