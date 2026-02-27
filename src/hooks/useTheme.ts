import { useEffect, useState } from "react";

export type Theme = "light" | "dark";
export type Palette = "professional" | "cyberpunk" | "playful";

const THEME_KEY = "theme";
const PALETTE_KEY = "palette";

function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark";
}

function isPalette(value: unknown): value is Palette {
  return (
    value === "professional" || value === "cyberpunk" || value === "playful"
  );
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const stored = localStorage.getItem(THEME_KEY);
  if (isTheme(stored)) return stored;

  const prefersDark =
    window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
  return prefersDark ? "dark" : "light";
}

function getInitialPalette(): Palette {
  if (typeof window === "undefined") return "professional";

  const stored = localStorage.getItem(PALETTE_KEY);
  if (isPalette(stored)) return stored;

  return "professional";
}

function applyTheme(theme: Theme, palette: Palette) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.dataset.theme = theme;
  root.dataset.palette = palette;
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());
  const [palette, setPalette] = useState<Palette>(() => getInitialPalette());

  useEffect(() => {
    applyTheme(theme, palette);
    window.localStorage.setItem(THEME_KEY, theme);
    window.localStorage.setItem(PALETTE_KEY, palette);
  }, [theme, palette]);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === THEME_KEY && isTheme(e.newValue)) {
        setTheme(e.newValue);
      }
      if (e.key === PALETTE_KEY && isPalette(e.newValue)) {
        setPalette(e.newValue);
      }
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggleTheme = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  return {
    theme,
    setTheme,
    toggleTheme,
    palette,
    setPalette,
  };
}
