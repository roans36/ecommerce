/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    listStyleType: { none: 'none' },

    extend: {
      space: {
        '5px': '1px',
      },


      backdropBlur: {
        'backdrop-filter': 'blur(5px)'

      },

      fontFamily: {
        'Raleway': ['Raleway', 'sans-sarif']
      },
      colors: {

        'grill': '#65A30D',
        'grilb': '#194D36',
        'limeyel': '#FFDA91',
        'white': 'white',
        'hovdark': '#B7AD76'
      },
    },
  },
  plugins: [

  ],
}
