"use client";
import { useState } from "react";

export type Language = "c" | "python" | "typescript" | "dart";

export function LanguageTabs({
  initial = "c",
  onChange,
}: {
  initial?: Language;
  onChange?: (lang: Language) => void;
}) {
  const [active, setActive] = useState<Language>(initial);
  const langs: { key: Language; label: string }[] = [
    { key: "c", label: "C-like (llC)" },
    { key: "python", label: "Python" },
    { key: "typescript", label: "TypeScript" },
    { key: "dart", label: "Dart" },
  ];

  return (
    <div className="inline-flex items-center gap-1 rounded-lg border border-black/10 dark:border-white/10 p-1 bg-black/5 dark:bg-white/5">
      {langs.map((l) => (
        <button
          key={l.key}
          onClick={() => {
            setActive(l.key);
            onChange?.(l.key);
          }}
          className={`px-3 py-1.5 text-sm rounded-md transition ${
            active === l.key
              ? "bg-background shadow border border-black/10 dark:border-white/10"
              : "opacity-80 hover:opacity-100"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
