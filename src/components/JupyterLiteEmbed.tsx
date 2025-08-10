"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Language } from "./LanguageTabs";

export function JupyterLiteEmbed({
  baseUrl,
  notebookPath,
  language,
}: {
  baseUrl: string;
  notebookPath: string;
  language: Language;
}) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  const src = useMemo(() => {
    // Expect a classic JupyterLite URL pattern. The actual index will be provided later.
    const params = new URLSearchParams();
    params.set("path", notebookPath);
    params.set("lang", language);
    return `${baseUrl.replace(/\/$/, "")}/?${params.toString()}`;
  }, [baseUrl, notebookPath, language]);

  useEffect(() => {
    setLoaded(false);
  }, [src]);

  return (
    <div className="w-full h-[70vh] rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
      {!loaded && (
        <div className="h-full grid place-items-center text-sm text-foreground/70">
          Loading notebook…
        </div>
      )}
      <iframe
        ref={iframeRef}
        src={src}
        className={`w-full h-full ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
        title="JupyterLite Notebook"
      />
    </div>
  );
}
