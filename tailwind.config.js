/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'Inter', 'Poppins', 'sans-serif'],
      },
      colors: {
        framex: {
          bg: '#020617',
          card: 'rgba(15,23,42,0.8)',
          accent: '#6366f1',
        },
      },
      boxShadow: {
        'framex-soft': '0 18px 60px rgba(15,23,42,0.9)',
      },
    },
  },
  plugins: [],
}

