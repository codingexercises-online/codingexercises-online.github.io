import Link from "next/link";
import { loadAllAdts } from "@/content/registry";

export const dynamic = "error"; // ensure static on export

export default function CurriculumPage() {
  const adts = loadAllAdts();

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-6">Curriculum</h1>
      <p className="text-foreground/80 mb-6 max-w-2xl">
        Start by implementing core Abstract Data Types (ADTs). Each topic includes brief discussions, hands-on case studies, and links to related algorithmic techniques.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {adts.map((adt) => (
          <Link
            key={adt.slug}
            href={`/curriculum/adts/${adt.slug}`}
            className="rounded-xl border border-black/10 dark:border-white/10 p-5 hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            <h3 className="font-semibold mb-1">{adt.title}</h3>
            <p className="text-sm text-foreground/70">{adt.overview}</p>
            <div className="mt-3 inline-flex items-center text-xs px-2 py-1 rounded-md border border-black/10 dark:border-white/10">
              View ADT
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
