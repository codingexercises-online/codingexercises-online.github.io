import fs from "node:fs";
import path from "node:path";

export type Language = "c" | "python" | "typescript" | "dart";

export type ExerciseRef = {
  title: string;
  uses: { adts: number; techniques: number; caseStudies: number };
};

export type AdtEntry = {
  slug: string;
  title: string;
  overview: string;
  languages: Partial<Record<Language, string>>;
  relatedTechniques?: string[];
  relatedAdts?: string[];
  exercises?: ExerciseRef[];
};

export type TechniqueEntry = {
  slug: string;
  title: string;
  overview: string;
  relatedAdts?: string[];
  relatedTechniques?: string[];
  exercises?: ExerciseRef[];
};

const root = path.join(process.cwd(), "src", "content", "cms");

function readJson<T>(p: string): T | null {
  try {
    const raw = fs.readFileSync(p, "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function loadAllAdts(): AdtEntry[] {
  const dir = path.join(root, "adts");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => readJson<AdtEntry>(path.join(dir, f)))
    .filter((x): x is AdtEntry => Boolean(x));
}

export function loadAllTechniques(): TechniqueEntry[] {
  const dir = path.join(root, "techniques");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => readJson<TechniqueEntry>(path.join(dir, f)))
    .filter((x): x is TechniqueEntry => Boolean(x));
}

export function getAdtBySlug(slug: string): AdtEntry | null {
  return loadAllAdts().find((a) => a.slug === slug) || null;
}

export function getTechniqueBySlug(slug: string): TechniqueEntry | null {
  return loadAllTechniques().find((t) => t.slug === slug) || null;
}
