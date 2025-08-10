import Link from "next/link";
import { loadAllAdts } from "@/content/registry";

export const dynamic = "error";

export default function AdtsListPage() {
  const adts = loadAllAdts();
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-6">Abstract Data Types (ADTs)</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {adts.map((a) => (
          <Link key={a.slug} href={`/curriculum/adts/${a.slug}`} className="rounded-xl border border-black/10 dark:border-white/10 p-5 hover:bg-black/5 dark:hover:bg-white/5 transition">
            <h3 className="font-semibold mb-1">{a.title}</h3>
            <p className="text-sm text-foreground/70">{a.overview}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
