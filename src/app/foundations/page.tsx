import Link from "next/link";

export default function FoundationsIndexPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Foundations</h1>
      <p className="text-foreground/80 max-w-3xl">
        The principles behind our approach to teaching Data Structures and Algorithms. Start here to internalize the storage models, abstract data types, and mental models we reference throughout exercises.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <Link
          href="/foundations/data-structures"
          className="block rounded-xl border border-black/10 dark:border-white/10 p-5 hover:bg-black/5 dark:hover:bg-white/5 transition"
        >
          <h2 className="text-xl font-semibold">Data Structures: Storage Models and ADTs</h2>
          <p className="text-sm text-foreground/70">A paradigm that unifies in-memory storage models (indexes and pointers) with abstract data types and their constraints.</p>
        </Link>
        <Link
          href="/foundations/algorithmic-techniques"
          className="block rounded-xl border border-black/10 dark:border-white/10 p-5 hover:bg-black/5 dark:hover:bg:white/5 transition"
        >
          <h2 className="text-xl font-semibold">Algorithmic Techniques: A Practical Mental Model</h2>
          <p className="text-sm text-foreground/70">From fundamental operations to precomputation and iterative refinement—how we structure solutions.</p>
        </Link>
      </div>
    </div>
  );
}
