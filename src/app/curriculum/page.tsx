import Link from "next/link";
import { loadAllTracks } from "@/content/tracks";

export const dynamic = "error"; // ensure static on export

export default function CurriculumPage() {
  const tracks = loadAllTracks();

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-6">Curriculum</h1>
      <p className="text-foreground/80 mb-6 max-w-2xl">Pick a path by language or by purpose. Each track curates ADTs, techniques, case studies, and exercises with increasing complexity.</p>

      <h2 className="text-2xl font-semibold tracking-tight mb-3">By Language</h2>
      <p className="text-foreground/80 mb-4 max-w-2xl">Choose a low-level dialect that mirrors your favorite language and learn DSA in that environment.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {[
          { slug: "llpython", title: "For Python Devs", href: "/curriculum/tracks/llpython" },
          { slug: "lljavascript", title: "For JavaScript Devs", href: "/curriculum/tracks/lljavascript" },
          { slug: "lltypescript", title: "For TypeScript Devs", href: "/curriculum/tracks/lltypescript" },
          { slug: "lldart", title: "For Dart/Flutter Devs", href: "/curriculum/tracks/lldart" },
          { slug: "lljava", title: "For Java Devs", href: "/curriculum/tracks/lljava" },
          { slug: "llkotlin", title: "For Kotlin Devs", href: "/curriculum/tracks/llkotlin" },
          { slug: "llswift", title: "For Swift/iOS Devs", href: "/curriculum/tracks/llswift" },
          { slug: "llcsharp", title: "For C#/.NET Devs", href: "/curriculum/tracks/llcsharp" },
          { slug: "llgo", title: "For Go Devs", href: "/curriculum/tracks/llgo" },
        ].map((t) => (
          <Link key={t.slug} href={t.href} className="rounded-xl border border-black/10 dark:border-white/10 p-5 hover:bg-black/5 dark:hover:bg-white/5 transition">
            <h3 className="font-semibold mb-1">{t.title}</h3>
            <p className="text-sm text-foreground/70">Dialects: {t.slug.replace(/^ll/, "ll").replace(/csharp/, "csharp").toUpperCase()}</p>
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-semibold tracking-tight mb-3">By Purpose</h2>
      <p className="text-foreground/80 mb-4 max-w-2xl">Pick a specialization to get a curated path across ADTs, techniques, case studies, and exercises.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          ...tracks,
          { slug: "data_science", title: "Data Science Path", summary: "Data munging, feature engineering, and classic ML workflows." },
          { slug: "ai_ml", title: "AI & ML Path", summary: "Foundations of algorithmic optimization for ML/AI, search, and inference." },
          { slug: "game_dev", title: "Game Development Path", summary: "Game loops, spatial structures, physics-friendly data layouts." },
          { slug: "biostatistics", title: "Biostatistics Path", summary: "Data handling and computation for clinical and biological datasets." },
        ].map((t: any) => (
          <Link key={t.slug} href={`/curriculum/tracks/${t.slug}`} className="rounded-xl border border-black/10 dark:border-white/10 p-5 hover:bg-black/5 dark:hover:bg-white/5 transition">
            <h3 className="font-semibold mb-1">{t.title}</h3>
            <p className="text-sm text-foreground/70">{t.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
