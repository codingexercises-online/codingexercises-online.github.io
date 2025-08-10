"use client";
import Link from "next/link";
import { useAuth } from "@/lib/auth";

export function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="border-b border-black/10 dark:border-white/10 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-semibold text-lg tracking-tight">
            CodingExercises.Online
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <Link href="/foundations" className="hover:underline">
              Foundations
            </Link>
            <Link href="/curriculum" className="hover:underline">
              Curriculum
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
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
