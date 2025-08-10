import fs from "node:fs";
import path from "node:path";

export type TrackEntry = {
  slug: string;
  title: string;
  summary: string;
  adts: string[];
  techniques: string[];
  caseStudies: string[];
};

const dir = path.join(process.cwd(), "src", "content", "cms", "tracks");

function readJson<T>(p: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(p, "utf8")) as T;
  } catch {
    return null;
  }
}

export function loadAllTracks(): TrackEntry[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => readJson<TrackEntry>(path.join(dir, f)))
    .filter((x): x is TrackEntry => Boolean(x));
}

export function getTrack(slug: string): TrackEntry | null {
  return loadAllTracks().find((t) => t.slug === slug) || null;
}
