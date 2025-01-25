/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        spin: "spin 1s linear infinite",
      },
      backgroundImage: {
        "lodaing-bg-img": `url(./src/assets/image/bgImg.png)`
      },
      fontFamily: {
        logoTitle: ["Itim", 'sans-serif'],
        body: ["Poppins", 'sans-serif'],
        cartFont: ["Inter"]
      },
      colors: {
        'green': {
          100: "#02c543c4",
          200: "#02C543"
        }
      }
    },
  },
  plugins: [],
}

