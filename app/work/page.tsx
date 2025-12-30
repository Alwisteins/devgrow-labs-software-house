"use client";

import { IoBriefcaseOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../components/navbar";
import Footer from "../components/footer";
import { IoLogoWhatsapp } from "react-icons/io";

const portfolios = [
  {
    id: "kratonstay",
    title: "KratonStay",
    subtitle: "Hotel Booking Website",
    image: "/portfolio/kratonstay.png",
    industry: "Hospitality",
    clientType: "Hotel Business",
    description:
      "Website hotel booking dengan fokus pada kemudahan reservasi, performa cepat, dan struktur SEO yang rapi.",
    techStack: ["Next.js", "Tailwind CSS"],
    link: "https://kratonstay.vercel.app",
  },
  {
    id: "growth2up",
    title: "Growth2Up",
    subtitle: "Digital Marketing Landing Page",
    image: "/portfolio/growth2up.png",
    industry: "Digital Marketing",
    clientType: "Service Business",
    description:
      "Landing page dengan struktur copywriting yang kuat, CTA jelas, dan flow konversi terarah.",
    techStack: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    link: "https://growth2up.vercel.app",
  },
  {
    id: "umrahease",
    title: "UmrahEase",
    subtitle: "Umrah Travel Website",
    image: "/portfolio/umrahease.png",
    industry: "Travel",
    clientType: "Travel Agency",
    description:
      "Desain website yang membangun kepercayaan jamaah dengan informasi paket yang jelas dan user-friendly.",
    techStack: ["Figma"],
    link: "",
  },
];

export default function Work() {
  return (
    <main className="relative w-full bg-white dark:bg-slate-950">
      <Navbar />
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-600 bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
            <IoBriefcaseOutline className="h-4 w-4" />
            Portfolio Kami
          </span>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl dark:text-white">
            Proyek Nyata dengan
            <span className="block text-indigo-600 dark:text-indigo-400">
              Dampak Nyata untuk Bisnis
            </span>
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Setiap website kami bangun bukan sekadar tampilan, tapi sistem digital yang dirancang
            untuk performa, kejelasan, dan konversi.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolios.map((item) => (
            <Card
              key={item.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                         dark:border-slate-800 dark:bg-slate-900">
              <CardHeader className="space-y-3">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-indigo-50 px-3 py-1 font-medium text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                    {item.industry}
                  </span>
                  <span className="rounded-full bg-indigo-600 px-3 py-1 font-medium text-white">
                    {item.clientType}
                  </span>
                </div>

                <CardTitle className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </CardTitle>

                <CardDescription className="text-sm text-slate-600 dark:text-slate-400">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="mt-auto space-y-4">
                <div className="flex flex-wrap gap-2">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-slate-200 bg-white px-2 py-1 text-xs text-slate-700
                                 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              {item.link && (
                <CardFooter className="flex justify-end">
                  <Link
                    href={item.link}
                    target="_blank"
                    className="flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    Live Demo <FaAngleRight />
                  </Link>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-indigo-600 px-6 py-20 text-center text-white dark:bg-indigo-950">
        <h2 className="text-3xl font-extrabold md:text-4xl">Siap Website Anda Jadi Aset Bisnis?</h2>
        <p className="mt-4 text-indigo-100">
          Mari diskusikan kebutuhan bisnis Anda dan bangun website yang benar-benar bekerja.
        </p>
        <div className="mt-8">
          <Button
            size="lg"
            className="bg-white px-8 py-6 font-semibold text-indigo-600 hover:bg-white/90
                       dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 rounded-full"
            onClick={() => {
              window.open("https://wa.me/6281361296979", "_blank");
            }}>
            Konsultasi Gratis <IoLogoWhatsapp className="h-5 w-5" />
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
