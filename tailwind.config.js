/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],

  theme: {
    extend: {
      fontFamily: {
        sfpro: ['SF Pro', 'sans-serif'],
        onest: ['Onest', 'sans-serif'],
        gotham: ['Gotham Pro', "sans-serif"],
      },
      colors: {
        primary: 'var(--primary)',
      },
    },
  },
  plugins: [],
}
