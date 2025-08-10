export const metadata = {
  title: "Algorithmic Techniques — A Practical Mental Model",
  description:
    "From fundamental operations to precomputation and iterative refinement—how we structure solutions.",
};

export default function AlgorithmicTechniquesPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Algorithmic Techniques</h1>
      <p>
        This is the mental model for algorithmic techniques. This taxonomy is not a set of mutually exclusive boxes
        but rather a tiered system of abstraction for intuitive understanding.
      </p>
      <p>
        An algorithm is an ordered set of fundamental operations orchestrated by high-level strategies to produce a new
        value or state.
      </p>

      <h2>1. Fundamental Operations</h2>
      <p>
        These are the basic, atomic actions you perform on data: <strong>Navigation</strong>, <strong>Querying</strong>,
        and <strong>Computation</strong>.
      </p>

      <h3>a. Navigation</h3>
      <p>The process of traversing a data structure to visit its elements.</p>
      <h4>i. Linear Navigation</h4>
      <p>
        <strong>Single-Pointer</strong>: move one at a time (e.g., array for-loop). <strong>Multi-Pointer</strong>:
        two or more indices (two pointers, fast/slow pointers, low/high in binary search).
      </p>
      <h4>ii. Non-Linear Navigation</h4>
      <p>
        <strong>Hierarchical Traversal</strong>: parent/children (DFS, BFS). <strong>Network Traversal</strong>:
        arbitrary neighbors in graphs.
      </p>

      <h3>b. Querying 🔎</h3>
      <p>
        <strong>Direct Queries</strong> (stored): lookups of existing properties (size, head, valueAtIndex).<br />
        <strong>Computed Queries</strong>: require traversal or computation (contains on unsorted array, min on list, primality test).
      </p>

      <h3>c. Computation ⚙️</h3>
      <p>
        <strong>Primitive Computation</strong>: arithmetic, logic, comparisons.<br />
        <strong>Algorithmic Computation</strong>: fixed sequences (sum, average, merge).<br />
        <strong>Heuristic Computation</strong>: decision-making at each step (e.g., Greedy, Simulated Annealing, Genetic Algorithms).
      </p>

      <h2>2. Implementation Strategies</h2>
      <h3>a. Precomputation</h3>
      <p>
        Initial pass to build optimized auxiliary structures: hash maps for lookup, prefix sums for range queries, sorting intervals before merging.
      </p>
      <h3>b. Iterative Refinement</h3>
      <p>
        Repeatedly refine a solution via loops or recursion.
      </p>
      <h4>i. Iterative Method (Looping)</h4>
      <p>
        Explicitly manage state in variables/structures (e.g., binary search with <code>low</code>/<code>high</code>, sliding windows).
      </p>
      <h4>ii. Recursive Method</h4>
      <p>
        Break into subproblems; state lives on the call stack (recursive binary search, DFS).
      </p>

      <h2>Common Interview Topics via This Model</h2>
      <ul>
        <li>Arrays, Strings, Linked Lists: linear navigation and basic querying.</li>
        <li>Stacks &amp; Queues: constrained access ADTs.</li>
        <li>Hash Maps/Sets: precomputation enables fast queries and updates.</li>
        <li>Trees &amp; Graphs: non-linear navigation with DFS/BFS strategies.</li>
        <li>Sorting: computation with multi-pointer navigation and precomputation.</li>
        <li>Binary Search: iterative refinement with multi-pointer state.</li>
        <li>Recursion: technique to implement refinement and non-linear navigation.</li>
        <li>Heaps: precomputation (build) enabling peek/extract operations.</li>
        <li>Prefix Sums &amp; Intervals: precompute to answer range queries efficiently.</li>
        <li>Two-Pointer &amp; Fast–Slow: linear multi-pointer navigation patterns.</li>
        <li>Sliding Windows: iterative refinement over a moving subset.</li>
        <li>Dynamic Programming: refined precomputation with memoization/tabulation.</li>
        <li>Greedy: heuristic computation with locally optimal choices.</li>
        <li>Backtracking: recursive exploration with systematic undo.</li>
      </ul>
    </article>
  );
}
