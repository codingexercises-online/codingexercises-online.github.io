"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Theme = "light" | "dark";

const ThemeContext = createContext<{ theme: Theme; toggle: () => void } | null>(null);
const STORAGE_KEY = "ceo_theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem(STORAGE_KEY) as Theme)) || null;
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem(STORAGE_KEY, theme);
    }
  }, [theme]);

  const value = useMemo(() => ({ theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
