import { IoBriefcaseOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const portfolios = [
  {
    id: "kratonstay",
    title: "KratonStay - Hotel Booking Website",
    image: "/portfolio/kratonstay.png",
    industry: "Hospitality / Hotel",
    clientType: "Hotel Business",
    problem:
      "Hotel membutuhkan sistem pemesanan online yang mudah digunakan dan terlihat profesional.",
    solution:
      "Website hotel booking dengan struktur yang jelas, fokus pada kemudahan reservasi dan kecepatan akses.",
    services: ["Website Development", "SEO Optimization"],
    techStack: ["Next.js", "Tailwind CSS"],
    outcome: "Website lebih cepat, tampilan profesional, dan siap menerima booking online.",
    link: "https://kratonstay.vercel.app",
  },
  {
    id: "growth2up",
    title: "Growth2Up - Digital Marketing Landing Page",
    image: "/portfolio/growth2up.png",
    industry: "Digital Marketing",
    clientType: "Service Business",
    problem: "Bisnis digital marketing membutuhkan landing page yang fokus pada lead generation.",
    solution:
      "Landing page dengan struktur copywriting yang jelas, CTA kuat, dan flow konversi terarah.",
    services: ["Website Development", "SEO Optimization", "Convertion Optimization"],
    techStack: ["Next.js", "Tailwind CSS", "Shadcn UI"],
    outcome: "Landing page siap digunakan untuk campaign dan optimasi konversi.",
    link: "https://growth2up.vercel.app",
  },
  {
    id: "umrahease",
    title: "UmrahEase - Umrah Travel Agency Website",
    image: "/portfolio/umrahease.png",
    industry: "Travel / Tourism",
    clientType: "Travel Agency",
    problem:
      "Travel umrah membutuhkan website yang mampu membangun kepercayaan jamaah, menjelaskan paket secara jelas, dan memudahkan calon jamaah untuk melakukan konsultasi.",
    solution:
      "Desain website dengan pendekatan user-centered, menampilkan paket umrah secara terstruktur, alur informasi yang jelas, dan CTA yang fokus pada konsultasi dan pendaftaran.",
    services: ["UI/UX Design"],
    techStack: ["Figma"],
    outcome:
      "Tampilan website lebih profesional, informasi paket mudah dipahami, dan meningkatkan kepercayaan calon jamaah untuk melakukan kontak.",
    link: "",
  },
];

export default function Portfolio() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-600/30 bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-600 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-400">
            <IoBriefcaseOutline className="h-4 w-4" />
            Portfolio Kami
          </span>

          <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl dark:text-white">
            Proyek Nyata. Hasil Nyata.
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
            Kami telah membantu berbagai jenis bisnis — dari UMKM, startup, hingga personal brand —
            membangun website yang{" "}
            <span className="rounded bg-indigo-600 px-1.5 py-0.5 text-white">
              lebih profesional
            </span>
            , <span className="rounded bg-indigo-600 px-1.5 py-0.5 text-white">lebih cepat</span>,{" "}
            <span className="rounded bg-indigo-600 px-1.5 py-0.5 text-white">
              lebih mudah dipahami
            </span>
            , dan{" "}
            <span className="rounded bg-indigo-600 px-1.5 py-0.5 text-white">
              lebih efektif menghasilkan leads
            </span>
            .
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolios.map((item) => (
            <Card
              key={item.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
              {/* Image */}
              <CardHeader className="space-y-3">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-indigo-50 px-3 py-1 font-medium text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                    {item.industry}
                  </span>
                  <span className="rounded-full bg-indigo-600 px-3 py-1 font-medium text-white">
                    {item.clientType}
                  </span>
                </div>

                <CardTitle className="text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-sm text-slate-600 dark:text-slate-400">
                  {item.solution}
                </CardDescription>
              </CardHeader>

              {/* Content */}
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-slate-200 bg-white px-2 py-1 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              {/* Footer */}
              {item.link && (
                <CardFooter className="mt-auto justify-end">
                  <CardAction>
                    <Link
                      href={item.link}
                      target="_blank"
                      className="flex items-center gap-1 text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400">
                      Live Demo <FaAngleRight />
                    </Link>
                  </CardAction>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
