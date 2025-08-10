"use client";
import { useState } from "react";
import { RequireAuth } from "@/lib/auth";
import type { AdtEntry } from "@/content/registry";
import { Language, LanguageTabs } from "@/components/LanguageTabs";
import { JupyterLiteEmbed } from "@/components/JupyterLiteEmbed";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Badge } from "@/components/Badge";

export default function TopicClient({ adt }: { adt: AdtEntry }) {
  const [lang, setLang] = useState<Language>("c");
  const notebookPath = adt.languages[lang] || "";

  return (
    <RequireAuth>
      <div className="space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div className="max-w-2xl">
            <h1 className="text-2xl font-semibold">{adt.title}</h1>
            <p className="text-sm text-foreground/70">{adt.overview}</p>
          </div>
          <LanguageTabs initial={lang} onChange={(l) => setLang(l)} />
        </div>

        <div id="notebook" />
        {notebookPath ? (
          <JupyterLiteEmbed
            baseUrl={siteConfig.jupyterLiteBaseUrl}
            notebookPath={notebookPath}
            language={lang}
          />
        ) : (
          <div className="text-sm text-foreground/60">Notebook coming soon. This will launch the JupyterLite exercise in-browser.</div>
        )}

        <section>
          <h2 className="text-lg font-semibold mb-2">Exercises</h2>
          <ul className="pl-0 space-y-2 text-sm">
            {adt.exercises?.map((ex, idx) => {
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

        {(adt.relatedTechniques?.length || adt.relatedAdts?.length) && (
          <section>
            <h2 className="text-lg font-semibold mb-2">Related</h2>
            <div className="flex flex-wrap gap-2 text-sm">
              {adt.relatedTechniques?.map((t) => (
                <Link
                  key={t}
                  href={`/curriculum/techniques/${t}`}
                  className="rounded-md px-2 py-1 border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
                >
                  {t.replace(/_/g, " ")}
                </Link>
              ))}
              {adt.relatedAdts?.map((a) => (
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
    </RequireAuth>
  );
}
