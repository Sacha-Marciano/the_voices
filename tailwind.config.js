/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        background: "#383434",
        secondary: "#A91589",
        primary: "#B0148C",
        hover: "#8F126F",
        // accent: "#FFC3E1",
      },
    },
  },
  plugins: [],
};
