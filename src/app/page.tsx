import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Learn Data Structures & Algorithms by Doing
        </h1>
        <p className="text-lg text-foreground/80">
          A modern, browser‑based platform for practicing DSA with hands‑on
          JupyterLite notebooks. No server, no installs.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-5">
          <h3 className="font-semibold mb-1">For experienced programmers</h3>
          <p className="text-sm text-foreground/70">
            Practical explanations with minimal math. Focus on reasoning and implementation.
          </p>
        </div>
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-5">
          <h3 className="font-semibold mb-1">Run fully in your browser</h3>
          <p className="text-sm text-foreground/70">
            Exercises execute locally via JupyterLite. Core language: C. Also Python, TypeScript, Dart.
          </p>
        </div>
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-5">
          <h3 className="font-semibold mb-1">Hands‑on curriculum</h3>
          <p className="text-sm text-foreground/70">
            Short readings + guided notebooks that build intuition and fluency.
          </p>
        </div>
      </div>

      <div className="flex gap-3 justify-center">
        <Link
          href="/curriculum"
          className="rounded-md px-4 py-2 bg-foreground text-background font-medium hover:opacity-90"
        >
          Browse curriculum
        </Link>
        <Link
          href="/foundations"
          className="rounded-md px-4 py-2 border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
        >
          Read foundations
        </Link>
        <Link
          href="/login"
          className="rounded-md px-4 py-2 border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}
