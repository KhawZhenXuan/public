"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("drunkitten-theme") as Theme | null;
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initial = saved ?? preferred;
    document.documentElement.dataset.theme = initial;
    setTheme(initial);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("drunkitten-theme", next);
    setTheme(next);
  };

  return (
    <button className="themeToggle" type="button" onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
      <span className="toggleTrack" aria-hidden="true"><i className="toggleThumb">{theme === "dark" ? "☾" : "☀"}</i></span>
      <span className="toggleText">{theme === "dark" ? "Dark" : "Light"}</span>
    </button>
  );
}
