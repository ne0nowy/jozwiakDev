/** @type {import('tailwindcss').Config} */

module.exports = {
    mode: "jit",
    content: [
      "./components/**/*.{vue,js}",
      "./containers/**/*.{vue,js}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./nuxt.config.{js,ts}",
    ],
    theme: {
      container: {
        screens: {
          '2xl': '1280px',
        }
      },
      fontSize: {
        'sm': '0.8rem',
        'base': '0.875rem',
        'xl': '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
    }
}