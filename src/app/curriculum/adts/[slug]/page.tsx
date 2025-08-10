import { getAdtBySlug, loadAllAdts } from "@/content/registry";
import TopicClient from "./topic-client";

export function generateStaticParams() {
  return loadAllAdts().map((a) => ({ slug: a.slug }));
}

export default function AdtPage({ params }: any) {
  const adt = getAdtBySlug(params.slug);
  if (!adt) return <div className="text-sm text-red-600">Unknown ADT.</div>;
  return <TopicClient adt={adt} />;
}
