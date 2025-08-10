import { getAdtBySlug, loadAllAdts } from "@/content/registry";
import TopicClient from "./topic-client";

export function generateStaticParams() {
  return loadAllAdts().map((a) => ({ slug: a.slug }));
}

export default async function AdtPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const adt = getAdtBySlug(slug);
  if (!adt) return <div className="text-sm text-red-600">Unknown ADT.</div>;
  return <TopicClient adt={adt} />;
}
