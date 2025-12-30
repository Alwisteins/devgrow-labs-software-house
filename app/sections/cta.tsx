"use client";

import { Button } from "@/components/ui/button";
import { GiCancel } from "react-icons/gi";
import { IoLogoWhatsapp } from "react-icons/io";

const problems = [
  "Tidak menghasilkan leads",
  "Sulit dikembangkan",
  "Tidak merepresentasikan kualitas bisnis",
];

export default function CTA() {
  return (
    <section className="relative w-full bg-indigo-600 dark:bg-indigo-950 text-white px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
          Website Anda Harus Bekerja untuk Bisnis Anda
        </h2>

        <p className="mt-4 text-base md:text-lg text-indigo-100">Jika website Anda mengalami:</p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 rounded-xl border border-indigo-200 bg-white p-5 text-left
                         shadow-sm transition hover:border-indigo-400
                         dark:border-slate-800 dark:bg-slate-900">
              <GiCancel className="mt-1 h-5 w-5 shrink-0 text-indigo-600 dark:text-indigo-400" />
              <p className="text-slate-700 dark:text-slate-300">{item}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-base md:text-lg text-indigo-100">
          Maka ini saatnya membangun ulang dengan pendekatan yang benar.
        </p>

        <div className="mt-8">
          <Button
            size="lg"
            className="gap-2 bg-white px-8 py-6 text-indigo-600 font-semibold
                       hover:bg-white/90
                       dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 rounded-full"
            onClick={() => {
              window.open("https://wa.me/6281361296979", "_blank");
            }}>
            Konsultasi Gratis
            <IoLogoWhatsapp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
