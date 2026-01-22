/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",    // Dark background
        secondary: "#38bdf8",  // Sky blue
        accent: "#22c55e",     // Green accent
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      spacing: {
        section: "5rem",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
}
