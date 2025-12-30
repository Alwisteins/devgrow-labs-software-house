import { TService } from "@/data/services";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";

export default function CaseStudy({ service }: { service: TService }) {
  if (!service.caseStudy) return null;

  return (
    <section className="px-6 py-20 md:px-12 lg:px-20 bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-600 bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
            <IoBriefcaseOutline className="h-4 w-4" />
            Studi Kasus
          </span>

          <h2 className="my-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Contoh Implementasi Nyata
          </h2>

          <p className="text-slate-600 dark:text-slate-400">
            Studi kasus dari proyek yang pernah kami kerjakan dengan pendekatan serupa.
          </p>
        </div>

        {service.caseStudy.map((item) => (
          <Card
            key={item.title}
            className="mt-10 overflow-hidden border-slate-200 bg-white
                      dark:border-slate-800 dark:bg-slate-950">
            <CardContent className="flex flex-col sm:flex-row items-center gap-6">
              <div
                className="relative aspect-video w-64 overflow-hidden rounded-xl border
                             border-slate-200 dark:border-slate-800">
                <Image src={item.link} alt={item.title} fill className="object-cover" />
              </div>

              <div className="w-full">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-slate-600 dark:text-slate-400">{item.desc}</p>

                {item.demo && (
                  <div className="mt-3 flex justify-end">
                    <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white">
                      <Link href={item.demo}>
                        Live Demo <FaAngleRight />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
