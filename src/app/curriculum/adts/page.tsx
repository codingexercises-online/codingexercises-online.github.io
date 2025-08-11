import Link from "next/link";
import { loadAllAdts } from "@/content/registry";
import { Badge } from "@/components/Badge";

export const dynamic = "error";

type Group = { name: string; match: (key: string) => boolean; tone?: "info" | "warn" | "success" | "danger" };

// Logical division first, then rough difficulty ordering
const groups: Group[] = [
  // Linear ADTs
  { name: "Linear — Index-based", match: (s) => /(static_array|dynamic_array|string)/.test(s), tone: "success" },
  { name: "Linear — Node-based", match: (s) => /(linked_list|stack|queue|deque|skip_list)/.test(s), tone: "info" },

  // Non-linear — Trees
  { name: "Trees — Fundamentals", match: (s) => /(binary_tree|bst|tree|trie|ternary)/.test(s), tone: "info" },
  { name: "Trees — Balanced & External", match: (s) => /(avl|red_black|splay|b_tree)/.test(s), tone: "warn" },
  { name: "Trees — Specialized", match: (s) => /(suffix|kd|quad|oct|r_tree|finger|persistent)/.test(s), tone: "danger" },

  // Non-linear — Heaps
  { name: "Heaps & Priority", match: (s) => /(heap|fibonacci)/.test(s), tone: "warn" },

  // Non-linear — Graphs
  { name: "Graphs & DSU", match: (s) => /(graph|disjoint_set|union|dsu)/.test(s), tone: "info" },

  // Hash-based
  { name: "Hashing & Probabilistic", match: (s) => /(hash|hashtable|bloom)/.test(s), tone: "success" },
];

function groupFor(slug: string, title: string): Group | undefined {
  const key = `${slug}_${title}`.toLowerCase().replace(/\s+/g, "_");
  return groups.find((g) => g.match(key));
}

export default function AdtsListPage() {
  const adts = loadAllAdts();

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-6">Abstract Data Types (ADTs)</h1>
      <p className="text-foreground/80 mb-6 max-w-3xl">Exhaustive catalog of ADTs grouped by structure family. Each card links to a detail page with overview, exercises, related concepts, and notebook embeds.</p>
      <div className="space-y-8">
        {groups.map((g) => (
          <section key={g.name}>
            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Badge tone={g.tone || "info"}>{g.name}</Badge>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {adts
                .filter((a) => !!groupFor(a.slug, a.title) && groupFor(a.slug, a.title)?.name === g.name)
                .map((a) => (
                  <Link key={a.slug} href={`/curriculum/adts/${a.slug}`} className="rounded-xl border border-black/10 dark:border-white/10 p-5 hover:bg-black/5 dark:hover:bg-white/5 transition">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold">{a.title}</h3>
                      <Badge tone={g.tone || "info"}>Level</Badge>
                    </div>
                    <p className="text-sm text-foreground/70">{a.overview}</p>
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
