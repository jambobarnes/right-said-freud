module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'freud-orange': '#ff7700'
      },
      fontFamily: {
        'sans': ['Bebas Neue', 'sans-serif'],
        'arimo': ['Arima', 'sans-serif']
      }
    },
  },
  plugins: [],
}
