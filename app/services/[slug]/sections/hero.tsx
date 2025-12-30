import { IoLayersOutline } from "react-icons/io5";
import { TService } from "@/data/services";

export default function Hero({ service }: { service: TService }) {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-600 bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
          <IoLayersOutline className="h-4 w-4" />
          Service Detail
        </span>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl dark:text-white">
          {service.title}
          <span className="block text-indigo-600 dark:text-indigo-400">{service.subtitle}</span>
        </h1>

        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          Solusi website yang dirancang bukan hanya untuk tampil bagus,
          <br className="hidden sm:block" />
          tapi untuk mendukung pertumbuhan bisnis jangka panjang.
        </p>
      </div>
    </section>
  );
}
