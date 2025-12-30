import { IoWarningOutline } from "react-icons/io5";
import { GiCancel } from "react-icons/gi";

const problems = [
  "Traffic ada, leads tidak masuk",
  "Desain terlihat modern, tapi tidak meyakinkan",
  "Website lambat dan sulit dikembangkan",
  "Tidak muncul di pencarian Google",
  "Developer sulit diajak diskusi bisnis",
];

export default function Problem() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 dark:bg-black">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-600/30 bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-600 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-400">
            <IoWarningOutline className="h-4 w-4" />
            Masalah Umum Bisnis
          </span>

          <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl dark:text-white">
            Kenapa Banyak Website Bagus <br className="hidden sm:block" />
            <span className="text-indigo-600 dark:text-indigo-400">Tapi Tidak Menghasilkan?</span>
          </h2>
        </div>

        {/* Problems list */}
        <div className="mx-auto mt-12 max-w-4xl md:mt-16">
          <ul className="grid gap-4 sm:grid-cols-2">
            {problems.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-indigo-600/40 dark:border-slate-800 dark:bg-slate-900">
                <GiCancel className="mt-1 h-5 w-5 shrink-0 text-indigo-600 dark:text-indigo-400" />
                <p className="text-sm font-medium text-slate-700 sm:text-base dark:text-slate-300">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-indigo-600/20 bg-indigo-600/5 p-6 text-center sm:p-8 dark:border-indigo-500/20 dark:bg-indigo-500/10">
          <p className="text-base leading-relaxed text-slate-800 sm:text-lg dark:text-slate-200">
            Masalahnya <span className="font-semibold">bukan</span> di{" "}
            <span className="font-semibold">“punya website atau tidak”</span>,
            <br className="hidden sm:block" />
            tapi{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              bagaimana website tersebut dibangun dan diarahkan
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
