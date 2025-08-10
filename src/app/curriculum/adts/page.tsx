import Link from "next/link";
import { loadAllAdts } from "@/content/registry";
import { Badge } from "@/components/Badge";

export const dynamic = "error";

type Group = { name: string; match: (key: string) => boolean; tone?: "info" | "warn" | "success" | "danger" };

const groups: Group[] = [
  { name: "Linear Structures", match: (s) => /(array|string|list|stack|queue|deque|skip_list)/.test(s), tone: "info" },
  { name: "Hash-Based", match: (s) => /(hash|bloom)/.test(s), tone: "success" },
  { name: "Trees", match: (s) => /(tree|trie|suffix|ternary|kd|quad|oct|r_tree|finger)/.test(s), tone: "info" },
  { name: "Self-Balancing Trees", match: (s) => /(avl|red_black|splay|b_tree|treap|van_emde_boas|fusion)/.test(s), tone: "warn" },
  { name: "Heaps & Priority", match: (s) => /(heap|priority)/.test(s), tone: "warn" },
  { name: "Graphs & DSU", match: (s) => /(graph|disjoint_set|union|dsu)/.test(s), tone: "info" },
  { name: "Persistent & Advanced", match: (s) => /(persistent)/.test(s), tone: "danger" },
];

function groupFor(slug: string, title: string): Group | undefined {
  const key = `${slug}_${title}`.toLowerCase().replace(/\s+/g, "_");
  return groups.find((g) => g.match(key));
}

export default function AdtsListPage() {
  const adts = loadAllAdts().sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-6">Abstract Data Types (ADTs)</h1>
      <p className="text-foreground/80 mb-6 max-w-3xl">Exhaustive catalog of ADTs grouped by structure family. Each card links to a detail page with overview, exercises, related concepts, and notebook embeds.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {adts.map((a) => {
          const group = groupFor(a.slug, a.title);
          return (
            <Link key={a.slug} href={`/curriculum/adts/${a.slug}`} className="rounded-xl border border-black/10 dark:border-white/10 p-5 hover:bg-black/5 dark:hover:bg-white/5 transition">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold">{a.title}</h3>
                {group && <Badge tone={group.tone || "info"}>{group.name}</Badge>}
              </div>
              <p className="text-sm text-foreground/70">{a.overview}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
