function ThemeToggle({ theme, setTheme }) {
  return (
    <span
      style={{ cursor: "pointer", fontSize: "18px" }}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "🌙" : "🌞"}
    </span>
  );
}

export default ThemeToggle;
