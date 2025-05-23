/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#FFF9E6',
          100: '#FFEFC0',
          200: '#FFE299',
          300: '#FFD573',
          400: '#FFC84D',
          500: '#FFA500',
          600: '#FF9933',
          700: '#E67300',
          800: '#CC5200',
          900: '#B34700',
        },
        maroon: {
          50: '#F9E6E6',
          100: '#F0CCCC',
          200: '#E69999',
          300: '#D96666',
          400: '#CC3333',
          500: '#B22222',
          600: '#800000',
          700: '#660000',
          800: '#4D0000',
          900: '#330000',
        },
        gold: {
          50: '#FFF9E6',
          100: '#FFF2BF',
          200: '#FFE680',
          300: '#FFD940',
          400: '#FFCC00',
          500: '#FFD700',
          600: '#E6C200',
          700: '#CCAD00',
          800: '#B39800',
          900: '#998200',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      animation: {
        'diya-flicker': 'flicker 3s linear infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};