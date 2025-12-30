import InsightsCard from "./insights-card";

const insights = [
  {
    title: "Kenapa Website Lambat Bisa Turunkan Konversi?",
    excerpt:
      "Website yang lambat bukan cuma bikin user pergi, tapi juga berdampak langsung ke SEO dan revenue.",
    date: "Jan 12, 2025",
    slug: "website-performance-conversion",
  },
  {
    title: "Struktur Landing Page yang Efektif untuk Bisnis",
    excerpt: "Pelajari struktur landing page yang fokus ke clarity, trust, dan conversion.",
    date: "Jan 5, 2025",
    slug: "landing-page-structure",
  },
  {
    title: "UI Clean ≠ UI Kosong",
    excerpt: "Clean UI bukan berarti minim informasi, tapi bagaimana menyusun visual dengan tepat.",
    date: "Dec 28, 2024",
    slug: "clean-ui-not-empty",
  },
];

export default function InsightsList() {
  return (
    <section className="px-6 py-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {insights.map((item) => (
          <InsightsCard key={item.slug} {...item} />
        ))}
      </div>
    </section>
  );
}
