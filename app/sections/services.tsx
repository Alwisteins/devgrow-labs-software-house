import { LuRocket } from "react-icons/lu";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const services = [
  {
    title: "Website Development",
    description:
      "Website bisnis, company profile, dan landing page yang dirancang untuk konversi dan SEO.",
    image: "https://doodleipsum.com/700x394/flat?i=3758fd27c3704f08f828d043203dd96f",
    accent: "bg-indigo-600 dark:bg-indigo-400",
  },
  {
    title: "Web App Development",
    description: "Dashboard, sistem manajemen, dan MVP SaaS yang scalable dan mudah dikembangkan.",
    image: "https://doodleipsum.com/700x394/flat?i=0eb04614d2ff66e0c288922e95511051",
    accent: "bg-emerald-600 dark:bg-emerald-400",
  },
  {
    title: "UI/UX Design",
    description: "Desain antarmuka yang fokus pada alur pengguna, kejelasan, dan kenyamanan.",
    image: "https://doodleipsum.com/700x394/flat?i=b53c0520896d30f70863f10fbded8ad3",
    accent: "bg-pink-600 dark:bg-pink-400",
  },
  {
    title: "Website Optimization & Maintenance",
    description: "Optimasi performa, SEO dasar, dan support agar website terus tumbuh.",
    image: "https://doodleipsum.com/700x394/flat?i=dc8797cdd78c30bd8c72a5fbf1157b7e",
    accent: "bg-amber-600 dark:bg-amber-400",
  },
];

export default function Services() {
  return (
    <section className="relative bg-white py-16 md:py-24 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-600/30 bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-600 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-400">
            <LuRocket className="h-4 w-4" />
            Layanan Kami
          </span>

          <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl dark:text-white">
            Solusi digital untuk{" "}
            <span className="text-indigo-600 dark:text-indigo-400">bisnis yang ingin tumbuh</span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
            Kami menyediakan layanan website, web application, dan UI/UX design yang terstruktur,
            scalable, dan SEO-ready.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <CardHeader className="space-y-2">
                <CardTitle className="text-base font-semibold text-slate-900 dark:text-white">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm text-slate-600 dark:text-slate-400">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <div
                className={`${service.accent} pointer-events-none absolute inset-x-0 bottom-0 h-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
