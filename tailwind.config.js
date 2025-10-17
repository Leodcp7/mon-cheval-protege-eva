/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6",
        primary2: "#A78BFA",
        accent: "#C084FC",
        hover: "#7C3AED",
        ink: "#3B2651",
        body: "#6B5A7A",
        muted: "#9C8FB0",
        dark: "#0F0A1E",
        page: "#FCF8FF"
      },
      boxShadow: {
        glow: "0 10px 30px rgba(139,92,246,0.20)"
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem'
      }
    },
  },
  plugins: [],
};
