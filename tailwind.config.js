/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "cloud-bg": "url('cloudbg.png')", // Add custom background image
      },
      animation: {
        "scroll-left-right": "scroll-left-right 100s linear infinite",
      },
      keyframes: {
        "scroll-left-right": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      colors: {
        "delft-blue": "#273469",
        "space-cadet": "#1e2749",
        "ghost-white": "#FAFAFF",
        periwinkle: "#E4D9FF",
      },
    },
  },
  plugins: [],
};
