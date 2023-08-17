/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes:{
        dragLeft: {
          '0%, 100%': {transform: 'translateX(100%) scale(1)'},
          '50%': {transform: 'translateX(0) scale(1)'},
          '90%': {transform: 'translateX(100%) scale(1.2)'},
        }
      },
      boxShadow: {
        '3xl': '-5px 7px 5px 0px rgba(0,0,0,0.36)',
      }
    },
  },
  plugins: [],
}
