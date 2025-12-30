import { CheckCircle } from "lucide-react";
import { CiStar } from "react-icons/ci";

const solutions = [
  "Strategi bisnis",
  "UI/UX yang jelas dan intuitif",
  "Struktur SEO yang rapi",
  "Performa cepat & scalable",
  "Alur konversi yang terukur",
];

export default function Solution() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6">
        {/* Headline */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-600/30 bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-600 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-400">
            <CiStar className="h-4 w-4" />
            Pendekatan Kami
          </span>

          <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl dark:text-white">
            Kami Membangun Website sebagai
            <span className="block text-indigo-600 dark:text-indigo-400">
              Sistem Bisnis Digital
            </span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
            Kami bukan sekadar membuat website.
            <br className="hidden sm:block" />
            Kami membangun struktur digital yang menggabungkan:
          </p>
        </div>

        {/* Solution Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-600/50 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <p className="text-sm font-medium text-slate-800 sm:text-base dark:text-slate-200">
                  {item}
                </p>
              </div>

              {/* Tech accent */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-linear-to-r from-transparent via-indigo-600 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:via-indigo-400" />
            </div>
          ))}
        </div>

        {/* Result Statement */}
        <div className="mt-16 text-center md:mt-20">
          <p className="text-base font-semibold text-slate-900 dark:text-slate-200">Hasilnya?</p>
          <p className="mt-3 text-lg font-bold text-indigo-600 sm:text-xl dark:text-indigo-400">
            👉 Website yang dipercaya, ditemukan, dan menghasilkan.
          </p>
        </div>
      </div>
    </section>
  );
}
