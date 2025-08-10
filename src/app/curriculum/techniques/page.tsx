import Link from "next/link";
import { loadAllTechniques } from "@/content/registry";

export const dynamic = "error";

export default function TechniquesListPage() {
  const techniques = loadAllTechniques();
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-6">Algorithmic Techniques</h1>
      <div className="rounded-xl border border-black/10 dark:border-white/10 p-5 mb-6 text-sm text-foreground/80">
        We focus on optimization strategies for the three fundamental operations: <strong>navigation</strong>, <strong>querying</strong>, and <strong>computation</strong>. Techniques such as precomputation and iterative refinement (looping or recursion) shape how we efficiently perform these operations across ADTs.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {techniques.map((t) => (
          <Link key={t.slug} href={`/curriculum/techniques/${t.slug}`} className="rounded-xl border border-black/10 dark:border-white/10 p-5 hover:bg-black/5 dark:hover:bg-white/5 transition">
            <h3 className="font-semibold mb-1">{t.title}</h3>
            <p className="text-sm text-foreground/70">{t.overview}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
