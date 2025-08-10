import { getTrack, loadAllTracks } from "@/content/tracks";
import Link from "next/link";

export function generateStaticParams() {
  return loadAllTracks().map((t) => ({ slug: t.slug }));
}

const stepsTitle: Record<string, string> = {
  interview_prep: "Coding Interview Path",
  finance: "Finance & Quant Path",
  blockchain: "Blockchain & Cryptography Path",
};

export default async function TrackPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const track = getTrack(slug);
  if (!track) return <div className="text-sm text-red-600">Unknown track.</div>;

  const title = stepsTitle[track.slug] || track.title;

  return (
    <div className="space-y-8">
      <div className="glass p-6">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-sm text-foreground/70">{track.summary}</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Your roadmap</h2>
        <ol className="space-y-3">
          {track.adts.map((a, index) => (
            <li key={a} className="glass p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="font-medium">{index + 1}. ADT: {a.replace(/_/g, " ")}</div>
                <Link href={`/curriculum/adts/${a}`} className="text-sm underline">Open overview</Link>
              </div>
              <div className="text-sm text-foreground/70">
                Study the ADT, complete exercises, then launch the notebook for hands-on practice.
              </div>
              <div>
                <Link href={`/curriculum/adts/${a}#notebook`} className="text-xs rounded-md px-2 py-1 border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10">Go to notebook</Link>
              </div>
            </li>
          ))}
          {track.techniques.map((t, index) => (
            <li key={t} className="glass p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="font-medium">{track.adts.length + index + 1}. Technique: {t.replace(/_/g, " ")}</div>
                <Link href={`/curriculum/techniques/${t}`} className="text-sm underline">Open overview</Link>
              </div>
              <div className="text-sm text-foreground/70">
                Learn the technique and apply it to related ADTs. Finish by solving the linked problems.
              </div>
            </li>
          ))}
          {track.caseStudies.map((c, index) => (
            <li key={c} className="glass p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="font-medium">{track.adts.length + track.techniques.length + index + 1}. Case Study: {c.replace(/_/g, " ")}</div>
                <Link href={`/curriculum/cases/${c}`} className="text-sm underline">Open case</Link>
              </div>
              <div className="text-sm text-foreground/70">
                Walk through the case study and launch the notebook to implement and experiment.
              </div>
              <div>
                <Link href={`/curriculum/cases/${c}#notebook`} className="text-xs rounded-md px-2 py-1 border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10">Go to notebook</Link>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
