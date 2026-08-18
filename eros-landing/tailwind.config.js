/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emergency: {
          red: '#E53935',
          burgundy: '#B71C1C',
        },
        command: {
          navy: '#102A43',
        },
        deep: {
          blue: '#1565C0',
        },
        corridor: {
          green: '#16A34A',
        },
        traffic: {
          amber: '#F59E0B',
        },
        surface: {
          bg: '#F8FAFC',
          border: '#E2E8F0',
        },
        text: {
          primary: '#102A43',
          secondary: '#52606D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'route-draw': 'routeDraw 3s ease-in-out infinite',
        'signal-cycle': 'signalCycle 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'move-ambulance': 'moveAmbulance 8s linear infinite',
        'data-flow': 'dataFlow 2s linear infinite',
        'radar-ping': 'radarPing 2s ease-out infinite',
      },
      keyframes: {
        routeDraw: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        signalCycle: {
          '0%, 30%': { backgroundColor: '#E53935' },
          '40%, 60%': { backgroundColor: '#F59E0B' },
          '70%, 100%': { backgroundColor: '#16A34A' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        moveAmbulance: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(180px)' },
        },
        dataFlow: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        radarPing: {
          '0%': { transform: 'scale(0.5)', opacity: '1' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
      backgroundImage: {
        'grid-light': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23CBD5E0' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'road-pattern': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50h100M50 0v100' stroke='%23CBD5E0' stroke-width='0.5' stroke-opacity='0.3' fill='none'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
