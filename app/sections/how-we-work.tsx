import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FcProcess } from "react-icons/fc";

const workflows = [
  {
    title: "Discovery & Strategy",
    description: "Memahami bisnis, target market, dan tujuan website.",
  },
  {
    title: "Design & Structure",
    description: "Menyusun UI/UX dan struktur halaman berbasis konversi.",
  },
  {
    title: "Development",
    description: "Implementasi dengan teknologi modern dan performa tinggi.",
  },
  {
    title: "Testing & Launch",
    description: "Quality check, optimasi, dan peluncuran website.",
  },
  {
    title: "Growth & Support",
    description: "Maintenance dan pengembangan berkelanjutan.",
  },
];

export default function HowWeWork() {
  return (
    <section className="relative w-full bg-white dark:bg-slate-950 px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-2 items-start">
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-600 bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
            <FcProcess className="h-4 w-4" />
            Cara Kerja Kami
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Proses Kerja yang{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Jelas, Terstruktur, dan Fokus pada Hasil
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Tanpa ribet, tanpa asumsi — setiap tahap dirancang untuk memastikan website benar-benar
            bekerja untuk bisnis Anda.
          </p>
        </div>

        <div>
          <Accordion type="single" collapsible className="space-y-4">
            {workflows.map((step, index) => (
              <AccordionItem
                key={index}
                value={step.title}
                className="rounded-lg border border-indigo-200 bg-indigo-50 px-4 transition-colors
                           hover:bg-indigo-100
                           dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800">
                <AccordionTrigger className="text-left font-semibold text-slate-900 dark:text-white">
                  <span className="mr-2 text-indigo-600 dark:text-indigo-400">{index + 1}.</span>
                  {step.title}
                </AccordionTrigger>

                <AccordionContent className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {step.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
