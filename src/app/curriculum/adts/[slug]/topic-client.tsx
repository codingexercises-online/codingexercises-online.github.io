"use client";
import { useState } from "react";
import { RequireAuth } from "@/lib/auth";
import type { AdtEntry } from "@/content/registry";
import { Language, LanguageTabs } from "@/components/LanguageTabs";
import { JupyterLiteEmbed } from "@/components/JupyterLiteEmbed";
import { siteConfig } from "@/config/site";
import Link from "next/link";

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

        {notebookPath ? (
          <JupyterLiteEmbed
            baseUrl={siteConfig.jupyterLiteBaseUrl}
            notebookPath={notebookPath}
            language={lang}
          />
        ) : (
          <div className="text-sm text-foreground/60">No notebook linked for this language yet.</div>
        )}

        <section>
          <h2 className="text-lg font-semibold mb-2">Exercises</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {adt.exercises?.map((ex, idx) => (
              <li key={idx}>{ex.title}</li>
            )) || <li>Coming soon…</li>}
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
