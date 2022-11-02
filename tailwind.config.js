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
          "2xl": "1280px",
        }
      },
    }
}