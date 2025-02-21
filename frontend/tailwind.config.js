/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        primary: "rgb(var(--primary))",
        "dark-grey": "rgb(var(--dark-grey))",
        "pinkish-grey": "rgb(var(--pinkish-grey))",
        "warm-grey": "rgb(var(--warm-grey))",
        gainsboro: "rgb(var(--gainsboro))",
        emerald: "rgb(var(--emerald))",
      },
    },
  },
  plugins: [],
};
