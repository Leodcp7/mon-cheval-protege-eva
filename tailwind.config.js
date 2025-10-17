/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6",
        primaryLight: "#A78BFA",
        accent: "#C084FC",
        hoverAccent: "#7C3AED",
        textDark: "#3B2651",
        body: "#6B5A7A",
        muted: "#9C8FB0",
        darkBg: "#0F0A1E",
        pageBg: "#FCF8FF"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(139, 92, 246, 0.2)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
}
