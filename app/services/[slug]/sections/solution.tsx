import { TService } from "@/data/services";
import { Card, CardContent } from "@/components/ui/card";
import { IoBulbOutline } from "react-icons/io5";

export default function Solution({ service }: { service: TService }) {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-600/30 bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-600 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-400">
            <IoBulbOutline className="h-4 w-4" />
            Solusi & Pendekatan
          </span>

          <h2 className="my-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Bagaimana Kami Menyelesaikan Masalah Anda
          </h2>

          <p className="text-slate-600 dark:text-slate-400">
            Pendekatan yang kami gunakan selalu berangkat dari kebutuhan bisnis, bukan sekadar
            tampilan visual.
          </p>
        </div>

        <div className="mt-8">
          <Card className="border-indigo-600 bg-indigo-50 dark:border-indigo-500/20 dark:bg-indigo-500/10">
            <CardContent className="text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-200">
              {service.solution}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
