import { getTrack, loadAllTracks } from "@/content/tracks";
import Link from "next/link";

export function generateStaticParams() {
  return loadAllTracks().map((t) => ({ slug: t.slug }));
}

export default function TrackPage({ params }: any) {
  const track = getTrack(params.slug);
  if (!track) return <div className="text-sm text-red-600">Unknown track.</div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">{track.title}</h1>
        <p className="text-sm text-foreground/70">{track.summary}</p>
      </div>

      <section>
        <h2 className="text-lg font-semibold mb-2">ADTs</h2>
        <div className="flex flex-wrap gap-2 text-sm">
          {track.adts.map((a) => (
            <Link key={a} href={`/curriculum/adts/${a}`} className="rounded-md px-2 py-1 border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10">{a.replace(/_/g, " ")}</Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Techniques</h2>
        <div className="flex flex-wrap gap-2 text-sm">
          {track.techniques.map((t) => (
            <Link key={t} href={`/curriculum/techniques/${t}`} className="rounded-md px-2 py-1 border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10">{t.replace(/_/g, " ")}</Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Case Studies</h2>
        <ul className="list-disc pl-5 text-sm">
          {track.caseStudies.map((c, i) => (
            <li key={i}>{c.replace(/_/g, " ")}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
