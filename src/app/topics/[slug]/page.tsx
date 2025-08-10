import { topicsList, topicMeta } from "@/content/topics";
import TopicClient from "./topic-client";

export function generateStaticParams() {
  return topicsList.map((t) => ({ slug: t.slug }));
}

export default function TopicPage({ params }: any) {
  const slug = params.slug;
  const meta = topicMeta[slug];

  if (!meta) {
    return <div className="text-sm text-red-600">Unknown topic.</div>;
  }

  return <TopicClient slug={slug} />;
}
