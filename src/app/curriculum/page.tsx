import Link from "next/link";
import { topicsList } from "@/content/topics";

export default function CurriculumPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-6">Data Structures & Algorithms</h1>
      <p className="text-foreground/80 mb-6 max-w-2xl">
        The curriculum overview is public. You will need to sign in to open a topic and launch the notebook exercises.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {topicsList.map((t) => (
          <Link
            key={t.slug}
            href={`/topics/${t.slug}`}
            className="rounded-xl border border-black/10 dark:border-white/10 p-5 hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            <h3 className="font-semibold mb-1">{t.title}</h3>
            <p className="text-sm text-foreground/70">{t.summary}</p>
            <div className="mt-3 inline-flex items-center text-xs px-2 py-1 rounded-md border border-black/10 dark:border-white/10">
              View topic
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
