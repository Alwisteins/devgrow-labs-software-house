import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type InsightsCardProps = {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
};

export default function InsightsCard({ title, excerpt, date, slug }: InsightsCardProps) {
  return (
    <Card className="rounded-2xl border-slate-200 dark:border-slate-800">
      <CardContent className="p-6">
        <span className="text-sm text-indigo-600 font-medium">{date}</span>

        <h3 className="mt-2 text-lg font-semibold leading-snug">{title}</h3>

        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{excerpt}</p>

        <Button asChild variant="ghost" className="mt-4 px-0 text-indigo-600 hover:text-indigo-700">
          <Link href={`/insights/${slug}`}>Read article →</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
