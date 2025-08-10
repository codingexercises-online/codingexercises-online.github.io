import Link from "next/link";
import { loadAllTracks } from "@/content/tracks";

export const dynamic = "error"; // ensure static on export

export default function CurriculumPage() {
  const tracks = loadAllTracks();

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-6">Curriculum</h1>
      <p className="text-foreground/80 mb-6 max-w-2xl">Pick a specialization track. Each track curates ADTs, techniques, and case studies with exercises and notebook links.</p>

      <h2 className="text-2xl font-semibold tracking-tight mb-3">Tracks</h2>
      <p className="text-foreground/80 mb-4 max-w-2xl">Pick a specialization to get a curated path across ADTs, techniques, and case studies.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {tracks.map((t) => (
          <Link key={t.slug} href={`/curriculum/tracks/${t.slug}`} className="rounded-xl border border-black/10 dark:border-white/10 p-5 hover:bg-black/5 dark:hover:bg-white/5 transition">
            <h3 className="font-semibold mb-1">{t.title}</h3>
            <p className="text-sm text-foreground/70">{t.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
