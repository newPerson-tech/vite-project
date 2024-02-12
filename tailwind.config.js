/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./pages/**/*.{html,js,ts}", "./src/**/*.{js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("rippleui")],
};
