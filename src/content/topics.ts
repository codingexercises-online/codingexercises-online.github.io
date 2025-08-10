export type Language = "c" | "python" | "typescript" | "dart";

export type TopicSummary = {
  slug: string;
  title: string;
  summary: string;
};

export const topicsList: TopicSummary[] = [
  {
    slug: "arrays-and-strings",
    title: "Arrays & Strings",
    summary: "Traversal, two‑pointers, sliding window, hashing",
  },
  {
    slug: "linked-lists",
    title: "Linked Lists",
    summary: "Singly/doubly lists, fast‑slow pointers, in‑place ops",
  },
  {
    slug: "stacks-and-queues",
    title: "Stacks & Queues",
    summary: "Monotonic stack, BFS patterns, queue via stacks",
  },
  {
    slug: "trees-and-bsts",
    title: "Trees & BSTs",
    summary: "DFS/BFS, recursion, balancing, traversal variants",
  },
  {
    slug: "heaps-and-priority-queues",
    title: "Heaps & Priority Queues",
    summary: "Top‑K, scheduling, heap construction",
  },
  {
    slug: "graphs",
    title: "Graphs",
    summary: "BFS/DFS, shortest paths, topological sort",
  },
  {
    slug: "sorting-and-searching",
    title: "Sorting & Searching",
    summary: "Comparators, divide‑and‑conquer, binary search variants",
  },
  {
    slug: "dynamic-programming",
    title: "Dynamic Programming",
    summary: "1D/2D DP, knapsack family, state compression",
  },
  {
    slug: "greedy",
    title: "Greedy",
    summary: "Exchange arguments, proofs of optimality",
  },
];

export const topicMeta: Record<string, { title: string; notebooks: Record<Language, string> }> = {
  "arrays-and-strings": {
    title: "Arrays & Strings",
    notebooks: {
      c: "dsa/arrays_and_strings/c.ipynb",
      python: "dsa/arrays_and_strings/python.ipynb",
      typescript: "dsa/arrays_and_strings/typescript.ipynb",
      dart: "dsa/arrays_and_strings/dart.ipynb",
    },
  },
  "linked-lists": {
    title: "Linked Lists",
    notebooks: {
      c: "dsa/linked_lists/c.ipynb",
      python: "dsa/linked_lists/python.ipynb",
      typescript: "dsa/linked_lists/typescript.ipynb",
      dart: "dsa/linked_lists/dart.ipynb",
    },
  },
  "stacks-and-queues": {
    title: "Stacks & Queues",
    notebooks: {
      c: "dsa/stacks_and_queues/c.ipynb",
      python: "dsa/stacks_and_queues/python.ipynb",
      typescript: "dsa/stacks_and_queues/typescript.ipynb",
      dart: "dsa/stacks_and_queues/dart.ipynb",
    },
  },
  "trees-and-bsts": {
    title: "Trees & BSTs",
    notebooks: {
      c: "dsa/trees_and_bsts/c.ipynb",
      python: "dsa/trees_and_bsts/python.ipynb",
      typescript: "dsa/trees_and_bsts/typescript.ipynb",
      dart: "dsa/trees_and_bsts/dart.ipynb",
    },
  },
  "heaps-and-priority-queues": {
    title: "Heaps & Priority Queues",
    notebooks: {
      c: "dsa/heaps/c.ipynb",
      python: "dsa/heaps/python.ipynb",
      typescript: "dsa/heaps/typescript.ipynb",
      dart: "dsa/heaps/dart.ipynb",
    },
  },
  graphs: {
    title: "Graphs",
    notebooks: {
      c: "dsa/graphs/c.ipynb",
      python: "dsa/graphs/python.ipynb",
      typescript: "dsa/graphs/typescript.ipynb",
      dart: "dsa/graphs/dart.ipynb",
    },
  },
  "sorting-and-searching": {
    title: "Sorting & Searching",
    notebooks: {
      c: "dsa/sorting_and_searching/c.ipynb",
      python: "dsa/sorting_and_searching/python.ipynb",
      typescript: "dsa/sorting_and_searching/typescript.ipynb",
      dart: "dsa/sorting_and_searching/dart.ipynb",
    },
  },
  "dynamic-programming": {
    title: "Dynamic Programming",
    notebooks: {
      c: "dsa/dp/c.ipynb",
      python: "dsa/dp/python.ipynb",
      typescript: "dsa/dp/typescript.ipynb",
      dart: "dsa/dp/dart.ipynb",
    },
  },
  greedy: {
    title: "Greedy",
    notebooks: {
      c: "dsa/greedy/c.ipynb",
      python: "dsa/greedy/python.ipynb",
      typescript: "dsa/greedy/typescript.ipynb",
      dart: "dsa/greedy/dart.ipynb",
    },
  },
};
