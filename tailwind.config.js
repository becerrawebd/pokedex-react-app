module.exports = {
  purge: process.env.NODE_ENV === "production" && 
        ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'back-light': 'var(--bg-light)',
        'back-dark': 'var(--bg-dark)',
        yellow: {
          500: 'var(--color-primary)'
        },
        red: {
          500: 'rgb(240, 0, 0)',
          600: 'rgb(210, 0, 0)'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
