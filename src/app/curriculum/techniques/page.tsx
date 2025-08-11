import Link from "next/link";
import { loadAllTechniques } from "@/content/registry";

export const dynamic = "error";

export default function TechniquesListPage() {
  const techniques = loadAllTechniques();
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-6">Algorithmic Techniques</h1>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold">Fundamental Concepts</h2>
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-5 text-sm text-foreground/80 space-y-3">
          <p>An algorithm is an ordered set of fundamental operations orchestrated by high‑level strategies to produce a new value or state.</p>
          <ul className="list-disc pl-6">
            <li><strong>Navigation</strong>: linear (single‑pointer, multi‑pointer) and non‑linear (hierarchical/tree traversal, network/graph traversal).</li>
            <li><strong>Querying</strong>: direct (stored properties) vs computed queries.</li>
            <li><strong>Computation</strong>: primitive, algorithmic, heuristic (greedy, simulated annealing, genetic algorithms).</li>
            <li><strong>Optimization Techniques</strong>: precomputation; iterative refinement via loops or recursion.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold">Established Patterns</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { slug: "two_pointer", title: "Two‑Pointer", overview: "Multi‑pointer linear navigation for arrays and strings." },
            { slug: "fast_slow_pointer", title: "Fast & Slow Pointers", overview: "Cycle detection and middle finding in linked lists." },
            { slug: "binary_search", title: "Binary Search", overview: "Iterative refinement on ordered domains." },
            { slug: "dfs", title: "Depth‑First Search (DFS)", overview: "Hierarchical or network traversal using a stack/recursion." },
            { slug: "bfs", title: "Breadth‑First Search (BFS)", overview: "Level‑order traversal using a queue." },
            { slug: "preorder_inorder_postorder", title: "Pre/In/Post‑order Traversal", overview: "Canonical tree traversals for structured processing." },
            { slug: "sliding_window", title: "Sliding Window", overview: "Loop‑based iterative refinement over subarrays/substrings." },
            { slug: "divide_and_conquer", title: "Divide & Conquer", overview: "Break problems into subproblems and combine results." },
            { slug: "dynamic_programming", title: "Dynamic Programming", overview: "Precompute and reuse subproblem results." },
            { slug: "greedy", title: "Greedy", overview: "Heuristic local choices aimed at global optimum." },
            { slug: "backtracking", title: "Backtracking", overview: "Systematic search with reversal on dead ends." },
            { slug: "recursion", title: "Recursion", overview: "Solve by reducing to smaller subproblems using the call stack." },
            { slug: "prefix_sums", title: "Prefix Sums", overview: "Precomputation enabling constant‑time range queries." },
            { slug: "intervals", title: "Intervals", overview: "Sort + sweep for scheduling and overlap problems." },
          ].map((t) => (
            <Link key={t.slug} href={`/curriculum/techniques/${t.slug}`} className="rounded-xl border border-black/10 dark:border-white/10 p-5 hover:bg-black/5 dark:hover:bg-white/5 transition">
              <h3 className="font-semibold mb-1">{t.title}</h3>
              <p className="text-sm text-foreground/70">{t.overview}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">From the Catalog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {techniques.map((t) => (
            <Link key={t.slug} href={`/curriculum/techniques/${t.slug}`} className="rounded-xl border border-black/10 dark:border-white/10 p-5 hover:bg-black/5 dark:hover:bg-white/5 transition">
              <h3 className="font-semibold mb-1">{t.title}</h3>
              <p className="text-sm text-foreground/70">{t.overview}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
