module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-primary": "var(--background-primary)",
        "background-secondary": "var(--background-secondary)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "button-primary": "var(--button-primary)",
        "button-secondary": "var(--button-secondary)",
        "field-primary": "var(--field-primary)",
        "link-primary": "var(--link-primary)",
      },
    },
  },
  plugins: [],
};
