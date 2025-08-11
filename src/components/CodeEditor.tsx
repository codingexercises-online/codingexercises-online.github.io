"use client";
import { useEffect, useRef, useState } from "react";
import type { Dialect } from "@/lib/compilerStub";
import { compileInBrowser } from "@/lib/compilerStub";

export function CodeEditor({
  initialCode = "",
  dialect,
}: {
  initialCode?: string;
  dialect: Dialect;
}) {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [output, setOutput] = useState<string>("");
  const [running, setRunning] = useState(false);

  // Fallback textarea editor for now (no CM package yet). We'll replace with CM once dependency is added.
  const [code, setCode] = useState(initialCode);

  async function run() {
    setRunning(true);
    try {
      const result = await compileInBrowser(dialect, code);
      const diag = result.diagnostics?.length
        ? "\n\nDiagnostics:\n" + result.diagnostics.map(d => `- ${d.severity.toUpperCase()} @${d.line}:${d.column} ${d.message}`).join("\n")
        : "";
      setOutput((result.stdout || "") + diag + (result.stderr ? `\n\nStderr:\n${result.stderr}` : ""));
    } finally {
      setRunning(false);
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Source ({dialect})</label>
        <textarea
          className="w-full h-64 rounded-md border border-black/10 dark:border-white/15 bg-background p-3 font-mono text-sm"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Write your code here…"
        />
        <div className="flex gap-2">
          <button
            onClick={run}
            disabled={running}
            className="text-sm rounded-md px-3 py-1.5 border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
          >
            {running ? "Running…" : "Run"}
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Output</label>
        <pre className="w-full h-64 rounded-md border border-black/10 dark:border-white/15 bg-black/90 text-white p-3 overflow-auto text-sm">
{output || "(no output)"}
        </pre>
      </div>
    </div>
  );
}
