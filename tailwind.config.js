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
        logoTitle: ["Itim", 'sans-serif'],  // "Itim" shriftini belgilash
        body: ["Poppins", 'sans-serif'],
      }
    },
  },
  plugins: [],
}

