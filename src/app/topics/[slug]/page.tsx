import { topicsList, topicMeta } from "@/content/topics";
import TopicClient from "./topic-client";

export function generateStaticParams() {
  return topicsList.map((t) => ({ slug: t.slug }));
}

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = topicMeta[slug];

  if (!meta) {
    return <div className="text-sm text-red-600">Unknown topic.</div>;
  }

  return <TopicClient slug={slug} />;
}
