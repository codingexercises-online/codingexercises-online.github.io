import Link from "next/link";
import { loadAllTechniques } from "@/content/registry";

export const dynamic = "error";

export default function TechniquesListPage() {
  const techniques = loadAllTechniques();
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-6">Techniques and Algorithms</h1>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold">Fundamental Concepts</h2>
        <div className="flex flex-col gap-3">
          <p className="text-sm text-foreground/80 space-y-2">
            Our philosophy around teaching algorithms is built on a high-level understanding of the different logical components of an algorithm.
            We believe that understanding these components is more important than memorizing established patterns and popular algorithms, which is what most DSA courses tend to focus on.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-1">
            {
              [
                {
                  slug: "navigation", title: "Navigation", description: "How we traverse or access data structures.",
                    subitems: [
                      {slug: "linear", title: "Linear", description: "Single-pointer or multi-pointer traversal of arrays and strings."},
                      {slug: "non_linear", title: "Non-Linear", description: "Hierarchical/tree traversal or network/graph traversal."}
                    ]
                },
                {
                  slug: "querying", title: "Querying", description: "How we retrieve or compute values from data structures.",
                    subitems: [
                      {slug: "direct", title: "Direct", description: "Stored properties (e.g., size, head, valueAtIndex)."},
                      {slug: "computed", title: "Computed", description: "Require traversal or computation (e.g., contains on unsorted array, min on list)."}
                    ]
                },
                {
                  slug: "computation", title: "Computation", description: "How we perform operations on data.",
                    subitems: [
                      {slug: "primitive", title: "Primitive", description: "Basic arithmetic, logic, comparisons."},
                      {slug: "algorithmic", title: "Algorithmic", description: "Fixed sequences (e.g., sum, average, merge)."},
                      {slug: "heuristic", title: "Heuristic", description: "Decision-making at each step (e.g., Greedy, Simulated Annealing, Genetic Algorithms)."}
                    ]
                },
                {
                  slug: "optimization_techniques", title: "Optimization Techniques", description: "How we improve algorithm performance.",
                    subitems: [
                      {slug: "precomputation", title: "Precomputation", description: "Initial pass to build optimized auxiliary structures (e.g., hash maps for lookup, prefix sums for range queries, sorting intervals before merging)."},
                      {slug: "iterative_refinement", title: "Iterative Refinement", description: "Repeatedly refine a solution via loops or recursion."}
                    ]
                }
              ].map((item) => (
                <Link key={item.slug} href={`/curriculum/techniques/${item.slug}`} className="rounded-xl border border-black/10 dark:border-white/10 p-5 hover:bg-black/5 dark:hover:bg-white/5 transition flex flex-col">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                  <div className="flex flex-row gap-2 justify-start items-end flex-nowrap flex-1">
                    {item.subitems && item.subitems.map((subitem) => (
                      <Link key={subitem.slug} href={`/curriculum/techniques/${item.slug}/${subitem.slug}`} className="text-sm text-foreground/70 hover:underline border border-black/10 dark:border-white/10 p-1 rounded-md transition mt-2">
                        {subitem.title}
                      </Link>
                    ))}
                  </div>
                </Link>
              ))
            }
          </div>
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

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold">Popular Algorithms</h2>

        <div className="flex flex-col gap-3">
          <section className="text-lg text-foreground/80 space-y-2">
            <h3>Sorting Algorithms</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-1">
              {[
                { slug: "bubble_sort", title: "Bubble Sort", overview: "Simple comparison-based sorting with O(n^2) complexity." },
                { slug: "selection_sort", title: "Selection Sort", overview: "In-place selection of minimum element for sorting." },
                { slug: "insertion_sort", title: "Insertion Sort", overview: "Builds sorted array incrementally, efficient for small datasets." },
                { slug: "merge_sort", title: "Merge Sort", overview: "Divide and conquer sorting with O(n log n) complexity." },
                { slug: "quick_sort", title: "Quick Sort", overview: "Efficient divide and conquer sorting with average O(n log n)." },
                { slug: "heap_sort", title: "Heap Sort", overview: "Sorts using a binary heap structure." },
              ].map((algo) => (
                <Link key={algo.slug} href={`/curriculum/techniques/sorting/${algo.slug}`} className="rounded-xl border border-black/10 dark:border-white/10 p-5 hover:bg-black/5 dark:hover:bg-white/5 transition">
                  <h4 className="font-semibold mb-1">{algo.title}</h4>
                  <p className="text-sm text-foreground/70">{algo.overview}</p>
                </Link>
              ))}
            </div>
          </section>
          <section className="text-lg text-foreground/80 space-y-2">
            <h3>Searching Algorithms</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-1">
              {[
                { slug: "linear_search", title: "Linear Search", overview: "Simple search through each element." },
                { slug: "binary_search", title: "Binary Search", overview: "Efficient search on sorted arrays with O(log n) complexity." },
                { slug: "jump_search", title: "Jump Search", overview: "Search in sorted arrays with block jumps." },
                { slug: "exponential_search", title: "Exponential Search", overview: "Combines binary search with exponential range expansion." },
              ].map((algo) => (
                <Link key={algo.slug} href={`/curriculum/techniques/searching/${algo.slug}`} className="rounded-xl border border-black/10 dark:border-white/10 p-5 hover:bg-black/5 dark:hover:bg-white/5 transition">
                  <h4 className="font-semibold mb-1">{algo.title}</h4>
                  <p className="text-sm text-foreground/70">{algo.overview}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
