export type Dialect =
  | "llPython"
  | "llJavascript"
  | "llTypescript"
  | "llDart"
  | "llKotlin"
  | "llSwift"
  | "llJava"
  | "llCSharp"
  | "llGo";

export type CompileResult = {
  success: boolean;
  stdout: string;
  stderr?: string;
  diagnostics?: Array<{ line: number; column: number; message: string; severity: "error" | "warning" }>;
};

const helloByDialect: Record<Dialect, string> = {
  llPython: "print('Hello from llPython')",
  llJavascript: "print('Hello from llJavascript')",
  llTypescript: "print('Hello from llTypescript')",
  llDart: "print('Hello from llDart')",
  llKotlin: "print('Hello from llKotlin')",
  llSwift: "print('Hello from llSwift')",
  llJava: "print('Hello from llJava')",
  llCSharp: "print('Hello from llC#')",
  llGo: "print('Hello from llGo')",
};

export async function compileInBrowser(dialect: Dialect, sourceCode: string): Promise<CompileResult> {
  // Stub: Simulate a compile + run entirely in the browser.
  // In the future, this will call into a WebAssembly-compiled C compiler from a separate repo.
  const trimmed = sourceCode.trim();
  const isEmpty = trimmed.length === 0;

  if (isEmpty) {
    return {
      success: true,
      stdout: helloByDialect[dialect] + "\n(Note: compiler stub ran — provide code to see output.)",
    };
  }

  // Extremely naive "syntax" check: deliberately insert a warning if we see the word TODO
  const diagnostics: CompileResult["diagnostics"] = [];
  const todoIndex = trimmed.indexOf("TODO");
  if (todoIndex >= 0) {
    diagnostics.push({ line: 1, column: todoIndex + 1, message: "Found TODO in code (stub diagnostic)", severity: "warning" });
  }

  // Echo the code back as "output" for now
  return {
    success: true,
    stdout: `Dialect: ${dialect}\n--- Program Output (stub) ---\n${sourceCode}`,
    diagnostics,
  };
}
