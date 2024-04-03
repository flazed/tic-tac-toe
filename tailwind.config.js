/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scaling: {
          '0%' : {
            transform: 'scale(0)'
          },
          '60%': {
            transform: 'scale(1)'
          },
          '80%': {
            transform: 'scale(1.2)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
        shaking: {
          '0%': {
            transform: 'translateX(0)'
          },
          '20%': {
            transform: 'translateX(10px)'
          },
          '40%': {
            transform: 'translateX(-10px)'
          },
          '60%': {
            transform: 'translateX(10px)'
          },
          '80%': {
            transform: 'translateX(-10px)'
          },
          '100%': {
            transform: 'translateX(0)'
          },
        },
        appear: {
          '0%': {
            width: 0
          }
        }
      },
      animation: {
        'scaling' : 'scaling .5s linear',
        'shaking' : 'shaking .3s linear',
        'appear' : 'appear .5s linear'
      },
    },
  },
  plugins: [],
}

