import { TService } from "@/data/services";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IoHelpCircleOutline } from "react-icons/io5";

export default function FAQ({ service }: { service: TService }) {
  if (!service.faq || service.faq.length === 0) return null;

  return (
    <section className="px-6 py-20 md:px-12 lg:px-20 bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-600/30 bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-600 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-400">
            <IoHelpCircleOutline className="h-4 w-4" />
            FAQ
          </span>

          <h2 className="my-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Pertanyaan yang Sering Ditanyakan
          </h2>

          <p className="text-slate-600 dark:text-slate-400">
            Beberapa hal yang biasanya ingin diketahui klien sebelum memulai.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {service.faq.map((item, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="rounded-xl border border-slate-200 bg-white px-4
                         dark:border-slate-800 dark:bg-slate-950">
              <AccordionTrigger
                className="text-left font-medium text-slate-900
                           hover:text-indigo-600
                           dark:text-white dark:hover:text-indigo-400">
                {item.q}
              </AccordionTrigger>

              <AccordionContent className="text-slate-600 dark:text-slate-400">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
