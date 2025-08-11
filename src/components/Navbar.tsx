"use client";
import Link from "next/link";
import { useAuth } from "@/lib/auth";
import { useTheme } from "@/lib/theme";

export function Navbar() {
  const { user, logout } = useAuth();
  const { theme, toggle } = useTheme();

  return (
    <header className="border-b border-black/10 dark:border-white/10 bg-background">
      <div className="container mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-semibold text-lg tracking-tight">
            CEO
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <Link href="/foundations" className="hover:underline">
              Foundations
            </Link>
            <Link href="/curriculum" className="hover:underline">
              Curriculum
            </Link>
            <Link href="/curriculum/adts" className="hover:underline">Abstract Data Types</Link>
            <Link href="/curriculum/techniques" className="hover:underline">Techniques & Algorithms</Link>
            <Link href="/dialects" className="hover:underline">Low-Level Dialects</Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <label className="inline-flex items-center cursor-pointer select-none">
            <span className="sr-only">Toggle theme</span>
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggle}
              className="peer sr-only"
              aria-label="Toggle theme"
            />
            <div className="peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-black/20 dark:peer-focus:ring-white/20 relative h-6 w-11 rounded-full bg-black/10 dark:bg-white/20 transition-colors after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:shadow after:transition-all peer-checked:bg-black/60 peer-checked:after:translate-x-5"></div>
          </label>
          {user ? (
            <>
              <span className="text-sm text-foreground/80">{user.email}</span>
              <button
                onClick={logout}
                className="text-sm rounded-md px-3 py-1.5 border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="text-sm rounded-md px-3 py-1.5 border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
