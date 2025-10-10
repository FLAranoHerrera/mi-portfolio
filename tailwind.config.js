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
        'neon-green': '#10b981',
        'neon-red': '#ef4444',
        'neon-yellow': '#f59e0b',
        'neon-orange': '#f97316',
      },
      boxShadow: {
        'neon': '0 0 15px #a855f7, 0 0 30px #22d3ee',
        'neon-pink': '0 0 15px #f472b6, 0 0 30px #a855f7',
        'neon-cyan': '0 0 15px #22d3ee, 0 0 30px #3b82f6',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px #a855f7, 0 0 10px #22d3ee' },
          '50%': { boxShadow: '0 0 20px #a855f7, 0 0 30px #22d3ee, 0 0 40px #f472b6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-neon': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      fontFamily: {
        'mono': ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}

