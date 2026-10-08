module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        fb: {
          bg: "#f0f2f5",
          card: "#ffffff",
          primary: "#1877f2",
          text: "#1c1e21",
          muted: "#65676b",
          border: "#e4e6eb"
        }
      }
    }
  },
  plugins: []
};
