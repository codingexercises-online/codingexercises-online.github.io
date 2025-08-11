export const metadata = {
  title: "Low-Level Dialects Overview",
  description: "Overview of llPython, llJavascript, llTypescript, llDart, llKotlin, llSwift, llJava, llC#, and llGo used in this project.",
};

const DIALECTS: { key: string; name: string; description: string }[] = [
  { key: "llPython", name: "llPython", description: "A constrained, low-level subset of Python with explicit memory-like constructs." },
  { key: "llJavascript", name: "llJavascript", description: "A minimized dialect of JavaScript emphasizing predictable control and data primitives." },
  { key: "llTypescript", name: "llTypescript", description: "A typed low-level TS dialect focusing on structural types and fixed-size data." },
  { key: "llDart", name: "llDart", description: "Dart-inspired low-level dialect for portable, deterministic execution." },
  { key: "llKotlin", name: "llKotlin", description: "Low-level Kotlin variant with deterministic collections and memory semantics." },
  { key: "llSwift", name: "llSwift", description: "Swift-like dialect emphasizing value semantics and constrained generics." },
  { key: "llJava", name: "llJava", description: "Low-level Java with fixed-size arrays and explicit iteration constructs." },
  { key: "llC#", name: "llC#", description: "C#-inspired low-level dialect oriented around value types and spans." },
  { key: "llGo", name: "llGo", description: "Go-like dialect with explicit slices and simplified concurrency stubs." },
];

export default function DialectsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Low-Level Dialects</h1>
      <p className="text-foreground/80 max-w-3xl">
      We've created these dialects to make the transition to learning about data structures and algorithms easier on you as a developer.
      Modern languages have many advantages, but they abstract some low-level concepts (particularly around pointers) that are essential for a thorough intuitive understanding of data structures and algorithms.
      These dialects are minified, strictly typed, low-level versions of popular languages that focus on the core concepts of data structures and algorithms.
      They compile to web-assembly and run directly in your own browser.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {DIALECTS.map((d) => (
          <div key={d.key} className="rounded-xl border border-black/10 dark:border-white/10 p-5">
            <h3 className="font-semibold mb-1">{d.name}</h3>
            <p className="text-sm text-foreground/70">{d.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
