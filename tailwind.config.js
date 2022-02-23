

module.exports = {
  mode:'jit',
  darkMode: 'class', // or 'media' or 'class'
  content: ['./src/**/*.{js,jsx,ts,txs}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#202225',
        secondary: '#5865f2',

      },
    },
  },
  variants: {
    extend: {
      fontFamily: {
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
