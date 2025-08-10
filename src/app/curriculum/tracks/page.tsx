import Link from "next/link";
import { loadAllTracks } from "@/content/tracks";

export const dynamic = "error";

export default function TracksPage() {
  const tracks = loadAllTracks();
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-6">Curriculum Tracks</h1>
      <p className="text-foreground/80 mb-6 max-w-2xl">Specialized pathways combining ADTs, techniques, and case studies for different goals and industries.</p>
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
