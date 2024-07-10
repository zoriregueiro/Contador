/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: '#1D3557',
        primary: "#77ABBD",
        success: "#e6fffa",
        cardColor: "#FFFFFF",
        cardColorDark: "#2D3543",
        textDark: "#9CA3AF",
        dropDownDark: "#4B5563",
        danger: "#EE4266",
      },
      height: {
        "screen-minus-100": "calc(100vh - 100px)",
      },
    },
  },
  plugins: [],
};
