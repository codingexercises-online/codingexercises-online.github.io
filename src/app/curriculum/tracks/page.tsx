import Link from "next/link";
import { loadAllTracks } from "@/content/tracks";

export const dynamic = "error";

type LangBucket = {
  label: string;
  languages: string[];
};

const DEV_LANG_GROUPS: LangBucket[] = [
  { label: "For Python Devs", languages: ["python"] },
  { label: "For JavaScript Devs", languages: ["javascript", "typescript"] },
  { label: "For Dart/Flutter Devs", languages: ["dart"] },
  { label: "For Java/Kotlin Devs", languages: ["java", "kotlin"] },
  { label: "For Swift/iOS Devs", languages: ["swift"] },
  { label: "For C#/.NET Devs", languages: ["csharp"] },
  { label: "For Go Devs", languages: ["go"] },
];

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

      <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-3">Tracks by Language</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {DEV_LANG_GROUPS.map((bucket) => (
          <div key={bucket.label} className="rounded-xl border border-black/10 dark:border-white/10 p-5">
            <h3 className="font-semibold mb-2">{bucket.label}</h3>
            <ul className="text-sm text-foreground/70 list-disc pl-5">
              {tracks.slice(0, 4).map((t) => (
                <li key={`${bucket.label}-${t.slug}`}>
                  <Link className="underline" href={`/curriculum/tracks/${t.slug}`}>{t.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
