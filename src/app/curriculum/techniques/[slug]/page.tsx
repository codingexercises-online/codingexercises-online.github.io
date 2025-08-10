import { getTechniqueBySlug, loadAllTechniques } from "@/content/registry";
import TechniqueClient from "./technique-client";

export function generateStaticParams() {
  return loadAllTechniques().map((t) => ({ slug: t.slug }));
}

export default async function TechniquePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const technique = getTechniqueBySlug(slug);
  if (!technique) return <div className="text-sm text-red-600">Unknown technique.</div>;
  return <TechniqueClient technique={technique} />;
}
