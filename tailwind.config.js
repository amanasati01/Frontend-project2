/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: "#0A0118",
        "text-col-1": "#787183"
      },
      keyframes: {
        borderSpin: {  
          '0%': { transform: 'rotate(0deg)' }, 
          '100%': { transform: 'rotate(360deg)' } 
        }
      },
      animation: {
        borderSpin: 'borderSpin 3s linear infinite' 
      }
    },
  },
  plugins: [],
}
