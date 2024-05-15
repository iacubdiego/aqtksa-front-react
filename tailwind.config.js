module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        '16': '4rem',
      },
      backgroundColor: {
        'whatsapp-green': '#25D366',
      },
    },
  },
  variants: {},
  plugins: [],
};