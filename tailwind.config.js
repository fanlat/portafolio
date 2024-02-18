/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'winter-green': {
          DEFAULT: '#97B6B1',
          50: '#EBF1F0',
          100: '#DFE8E7',
          200: '#C7D8D5',
          300: '#AFC7C3',
          400: '#97B6B1',
          500: '#769F98',
          600: '#5B827B',
          700: '#44615C',
          800: '#2D403D',
          900: '#161F1D',
          950: '#0A0E0E'
        },
        'summer-green':{
          '50': 'hsl(163, 41%, 97%)',
          '100': 'hsl(170, 42%, 89%)',
          '200': 'hsl(169, 41%, 78%)',
          '300': 'hsl(172, 36%, 71%)',
          '400': 'hsl(174, 31%, 50%)',
          '500': 'hsl(175, 38%, 40%)',
          '600': 'hsl(176, 40%, 32%)',
          '700': 'hsl(176, 37%, 26%)',
          '800': 'hsl(177, 33%, 22%)',
          '900': 'hsl(180, 28%, 19%)',
          '950': 'hsl(180, 41%, 10%)',
        },
        "cami":{
          'green':'#7ED7C1',
          'vanilla':'#F0DBAE',
          'pink':'#DC8685',
          'wine':'#B16162'
        },
        'spring':{
          'pomelo':'#FF8080',
          'orange':'#FFCF96',
          'lemon':'#F6FDC3',
          'melon':'#CDFAD5'
        }
      }
    },
  },
  plugins: [],
}

