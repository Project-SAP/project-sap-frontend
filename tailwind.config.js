/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dominant: '#219ebc', // Aero Blue
        complementary: 'hsl(240, 100%, 90%)', // Lavender Blue
        accent: 'hsl(0, 0%, 0%)', // Black
      },
      fontFamily: {
        sans: ["Raleway", 'sans-serif'],
        serif: ["Playfair Display", 'serif'],
      }
    },
  },
  plugins: [],
}
