module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          start: '#007BFF',
          end: '#00BFFF',
        },
        accent: '#C0C0C0',
      },
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'sans-serif'],
        body: ['Roboto', 'Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}