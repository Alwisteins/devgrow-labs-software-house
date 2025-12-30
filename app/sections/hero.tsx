"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="lg:h-[110vh] relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/grid.webp')" }}
      />

      <div className="relative z-10 mx-auto grid h-full min-h-screen max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 md:grid-cols-2">
        <div className="flex flex-col">
          <span className="mb-4 w-fit rounded-full border border-indigo-600/30 bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-600 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-400">
            #1 Software House di Pemalang
          </span>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white">
            Bangun website yang menghasilkan{" "}
            <span className="text-indigo-600 dark:text-indigo-400">leads & klien</span>
            , <br className="hidden sm:block" />
            bukan sekadar tampilan
          </h1>

          <p className="my-6 max-w-xl text-base font-medium text-slate-600 dark:text-slate-400">
            Kami membantu bisnis membangun website dan web app yang cepat, terstruktur, SEO-ready,
            dan dirancang untuk konversi — sehingga website benar-benar bekerja untuk pertumbuhan
            bisnis Anda.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="gap-2 rounded-full bg-indigo-600 px-7 text-white hover:bg-indigo-700"
              onClick={() => {
                window.open("https://wa.me/6281361296979", "_blank");
              }}>
              Konsultasi Gratis
              <IoLogoWhatsapp />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="gap-2 rounded-full border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
              Lihat Cara Kerja Kami
              <FaAngleRight />
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md md:max-w-lg">
          <Image
            src="/Mockup.png"
            alt="Website Mockup"
            width={560}
            height={560}
            priority
            className="rounded-xl drop-shadow-2xl dark:drop-shadow-[0_20px_40px_rgba(99,102,241,0.25)]"
          />
        </div>
      </div>
    </section>
  );
}
