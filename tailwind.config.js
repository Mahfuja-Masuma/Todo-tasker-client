/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#5E1675',
        'secondary':'#EE4266',
        'tertiary':'#FFD23F',
        'quaternary':'#337357',
        'quinary':'#114232',
        'senary':'#FCDC2A',
        'octonary':'#87A922',
        
      },

      fontFamily: {
       'poppins': ['Poppins', 'sans-serif'],
       'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

