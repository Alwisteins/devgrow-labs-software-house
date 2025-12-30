"use client";

import { Button } from "@/components/ui/button";
import { IoLogoWhatsapp } from "react-icons/io";

export default function CTA() {
  return (
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
  );
}
