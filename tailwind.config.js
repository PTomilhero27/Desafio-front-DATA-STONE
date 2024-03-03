
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
       colors: {
        primary: '#2B6CB0',
        secondary: '#48BB78',
        action: '#ECC94B',
        alert: '#F56565', 
        background: '#CBD5E0', 
      },
      screens: {
        'custom': '900px',
      },
    },
  },
  plugins: [],
}

