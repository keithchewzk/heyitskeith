module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-primary": "var(--background-primary)",
        "background-secondary": "var(--background-secondary)",
        "text-primary": "var(--text-primary)",
        "text-muted": "var(--text-muted)",
        "button-primary": "var(--button-primary)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
      },
    },
    variants: {
      extend: {
        boxShadow: ["hover"], // Enable hover state for boxShadow
      },
    },
  },
  plugins: [],
};
