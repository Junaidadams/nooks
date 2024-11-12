/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "periwinkle-sm":
          "0px 1px 2px 0px rgb(228 217 255 / var(--tw-bg-opacity))",
      },
      backgroundImage: {
        "cloud-bg": "url('cloudbg.png')",
        "cloud-bg-reversed": "url('cloudbg2.png')",
      },
      animation: {
        "scroll-left-right-fast": "scroll-left-right 12s linear infinite",
        "scroll-left-right-slow": "scroll-left-right 100s linear infinite",
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
