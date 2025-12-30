import { MdOutlineArticle } from "react-icons/md";

export default function InsightsHero() {
  return (
    <section className="px-6 py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-600 bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
          <MdOutlineArticle className="h-4 w-4" />
          Insights
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Insights & Articles</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl">
          Artikel seputar website, web app, UI/UX, performance, dan pengalaman kami membangun produk
          digital untuk bisnis.
        </p>
      </div>
    </section>
  );
}
