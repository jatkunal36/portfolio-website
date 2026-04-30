/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0F"
      },
      boxShadow: {
        glow: "0 24px 90px rgba(139, 92, 246, 0.34)",
        glass: "inset 0 1px 0 rgba(255,255,255,0.12), 0 18px 60px rgba(0,0,0,0.30)"
      },
      fontSize: {
        "hero": ["clamp(3.3rem, 8vw, 7rem)", { lineHeight: "0.92", letterSpacing: "0" }]
      }
    }
  },
  plugins: []
};
