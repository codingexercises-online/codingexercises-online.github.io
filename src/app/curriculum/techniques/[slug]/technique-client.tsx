"use client";
import type { TechniqueEntry } from "@/content/registry";
import Link from "next/link";
import { Badge } from "@/components/Badge";

export default function TechniqueClient({ technique }: { technique: TechniqueEntry }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">{technique.title}</h1>
        <p className="text-sm text-foreground/70">{technique.overview}</p>
      </div>

      <section>
        <h2 className="text-lg font-semibold mb-2">Exercises</h2>
        <ul className="pl-0 space-y-2 text-sm">
          {technique.exercises?.map((ex, idx) => {
            const weight = ex.uses.adts + ex.uses.techniques + ex.uses.caseStudies;
            const tone = weight <= 1 ? "success" : weight <= 3 ? "info" : weight <= 5 ? "warn" : "danger";
            const label = weight <= 1 ? "easy" : weight <= 3 ? "medium" : weight <= 5 ? "hard" : "expert";
            return (
              <li key={idx} className="flex items-center gap-2">
                <Badge tone={tone}>{label}</Badge>
                <span>{ex.title}</span>
              </li>
            );
          }) || <li>Coming soon…</li>}
        </ul>
      </section>

      {(technique.relatedTechniques?.length || technique.relatedAdts?.length) && (
        <section>
          <h2 className="text-lg font-semibold mb-2">Related</h2>
          <div className="flex flex-wrap gap-2 text-sm">
            {technique.relatedTechniques?.map((t) => (
              <Link
                key={t}
                href={`/curriculum/techniques/${t}`}
                className="rounded-md px-2 py-1 border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
              >
                {t.replace(/_/g, " ")}
              </Link>
            ))}
            {technique.relatedAdts?.map((a) => (
              <Link
                key={a}
                href={`/curriculum/adts/${a}`}
                className="rounded-md px-2 py-1 border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
              >
                {a.replace(/_/g, " ")}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
