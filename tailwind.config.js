/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-purple': '#a855f7',
        'neon-cyan': '#22d3ee',
        'neon-blue': '#3b82f6',
        'neon-pink': '#f472b6',
      },
      boxShadow: {
        'neon': '0 0 15px #a855f7, 0 0 30px #22d3ee',
      }
    },
  },
  plugins: [],
}

