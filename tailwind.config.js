module.exports = {
  content: ["./app/**/*.js", "./components/**/*.js"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)", panel: "var(--panel)", ink: "var(--ink)",
        muted: "var(--muted)", line: "var(--line)", brand: "var(--brand)", accent: "var(--accent)",
      },
      fontFamily: { sans: ["var(--font-main)", "system-ui", "sans-serif"] },
    },
  },
};
