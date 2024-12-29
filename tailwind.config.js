/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens : {
        "mobile-mini": "320px",
        "mobile-medium" : "360px",
        "mobile-small" : "412px",
        "mobile-larger" : "640px",
        
      },
      boxShadow: {
        'green': '0 4px 100px 10px rgba(7, 121, 49, 0.5), 0 2px 4px -1px rgba(7, 121, 49, 0.3)',
        "text-green": '0 0 10px rgba(0, 0, 0, 0.5)'
      },
      fontSize: {
        "mini-primary": "6px",
        "mini": "8px",
        "small": "10px",
        "medium": "12px",
        "medium-second": "14px",
        "larger": "18px",
        "larger-second": "20px",
        "extra": "32px",
        "extra-second": "40px"
      },
      fontFamily: {
        "primary": "DM Sans",
        "second": "Poppins"
      },
      colors: {
        "dark-primary": '#191919',
        "light-primary": '#A7A7A7'
      }
    },
  },
  plugins: [],
}

