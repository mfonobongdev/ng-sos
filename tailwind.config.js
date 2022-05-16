module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif']
      },
      backgroundColor: {
        dullOrange: '#FDF0E5',
        deepBlue: '#070EC4',
        lightBlue: '#EDFBFF'
      },
      textColor: {
        deepBlue: '#070EC4'
      }
    },
  },
  plugins: [],
}
