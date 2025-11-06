module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#141A38',
        'royal-blue': '#173357',
        'cyan-blue': '#2992BE',
        'steel-blue': '#235780',
        'cool-gray': '#8D9CAA',
      },
    },
    animation: {
      "fade-in": "fadeIn 1s ease-out forwards",
      "slide-in": "slideIn 1s ease-out forwards",
      "float-slow": "float-slow 8s ease-in-out infinite",
      "float-medium": "float-medium 6s ease-in-out infinite",
      "float-fast": "float-fast 4s ease-in-out infinite",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
