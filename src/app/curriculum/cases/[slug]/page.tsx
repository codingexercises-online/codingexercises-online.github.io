import Link from "next/link";
import { RequireAuth } from "@/lib/auth";
import { CodeEditor } from "@/components/CodeEditor";
import type { Dialect } from "@/lib/compilerStub";

export function generateStaticParams() {
  // Placeholder: in future, enumerate from CMS
  const cases = [
    "array_rotations",
    "two_sum_sorted",
    "three_sum",
    "valid_parentheses",
    "min_window_substring"
  ];
  return cases.map((slug) => ({ slug }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dialect: Dialect = "llTypescript";

  return (
    <RequireAuth>
      <div className="space-y-6">
        <div className="glass p-6">
          <h1 className="text-2xl font-semibold">Case Study: {slug.replace(/_/g, " ")}</h1>
          <p className="text-sm text-foreground/70">Work through the problem statement, examples, and constraints. Then complete the notebook exercises.</p>
        </div>
        <div className="text-sm text-foreground/70">
          Related: <Link className="underline" href="/curriculum/adts/static_arrays">static arrays</Link>, <Link className="underline" href="/curriculum/techniques/two_pointer">two-pointer</Link>, <Link className="underline" href="/curriculum/techniques/sliding_window">sliding window</Link>
        </div>
        <div id="notebook" />
        <CodeEditor initialCode={"// Implement the case study solution here"} dialect={dialect} />
      </div>
    </RequireAuth>
  );
}
