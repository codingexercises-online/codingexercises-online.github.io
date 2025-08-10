"use client";
import { useState } from "react";
import { RequireAuth } from "@/lib/auth";
import { Language, LanguageTabs } from "@/components/LanguageTabs";
import { JupyterLiteEmbed } from "@/components/JupyterLiteEmbed";
import { siteConfig } from "@/config/site";
import { topicMeta } from "@/content/topics";

export default function TopicClient({ slug }: { slug: string }) {
  const meta = topicMeta[slug];
  const [lang, setLang] = useState<Language>("c");
  const notebookPath = meta.notebooks[lang];

  return (
    <RequireAuth>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold">{meta.title}</h1>
            <p className="text-sm text-foreground/70">Choose your language and start the exercise.</p>
          </div>
          <LanguageTabs initial={lang} onChange={(l) => setLang(l)} />
        </div>
        <JupyterLiteEmbed
          baseUrl={siteConfig.jupyterLiteBaseUrl}
          notebookPath={notebookPath}
          language={lang}
        />
      </div>
    </RequireAuth>
  );
}
