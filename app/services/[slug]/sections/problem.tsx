import { TService } from "@/data/services";
import { Card, CardContent } from "@/components/ui/card";
import { IoAlertCircleOutline } from "react-icons/io5";
import { GiCancel } from "react-icons/gi";

export default function Problem({ service }: { service: TService }) {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-20 bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-4xl">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-600/30 bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-600 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-400">
            <IoAlertCircleOutline className="h-4 w-4" />
            Masalah Umum Website
          </span>

          <h2 className="my-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Masalah yang Sering Terjadi
          </h2>

          <p className="text-slate-600 dark:text-slate-400">
            Beberapa kendala yang sering kami temui sebelum bisnis menggunakan website dengan
            pendekatan yang tepat.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {service.problem.map((item) => (
            <Card
              key={item}
              className="border-slate-200 bg-white
                         dark:border-slate-800 dark:bg-slate-950">
              <CardContent className="flex items-center gap-3">
                <GiCancel className="h-5 w-5 text-indigo-600" />
                <p className="text-slate-700 dark:text-slate-300">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
