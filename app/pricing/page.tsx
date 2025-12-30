"use client";

import { Navbar } from "../components/navbar";
import { IoPricetagsOutline } from "react-icons/io5";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "../components/footer";
import { IoLogoWhatsapp } from "react-icons/io";

const pricingPlans = [
  {
    name: "Basic",
    price: "Rp 3 – 6 jt",
    highlight: false,
    description: "Untuk bisnis kecil yang butuh website profesional dan rapi.",
    suitableFor: "UMKM, personal brand, bisnis lokal",
    features: [
      "Landing page / company profile",
      "UI modern & responsive",
      "SEO basic setup",
      "Fast loading & clean code",
      "1x revisi mayor",
    ],
  },
  {
    name: "Growth",
    price: "Rp 8 – 15 jt",
    highlight: true,
    description: "Untuk bisnis yang ingin website sebagai alat growth.",
    suitableFor: "Startup, service business, agency",
    features: [
      "Multi-page website",
      "Strategi UI/UX & flow konversi",
      "SEO on-page terstruktur",
      "Optimasi performa",
      "Integrasi WhatsApp / Form",
      "2x revisi mayor",
    ],
  },
  {
    name: "Custom",
    price: "Mulai dari Rp 20 jt",
    highlight: false,
    description: "Solusi custom untuk kebutuhan kompleks & scalable.",
    suitableFor: "SaaS, sistem internal, web app",
    features: [
      "Web app / dashboard / SaaS",
      "Arsitektur scalable",
      "Custom fitur & workflow",
      "Performance & security focused",
      "Diskusi & support berkelanjutan",
    ],
  },
];

export default function Pricing() {
  return (
    <main className="w-full bg-white dark:bg-slate-950">
      <Navbar />
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-600 bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
            <IoPricetagsOutline className="h-4 w-4" />
            Pricing & Paket
          </span>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl dark:text-white">
            Harga Transparan untuk
            <span className="block text-indigo-600 dark:text-indigo-400">
              Klien yang Serius Bertumbuh
            </span>
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Kami tidak bersaing di harga termurah.
            <br />
            Kami fokus membangun website yang bekerja sebagai sistem bisnis.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex h-full flex-col rounded-2xl border transition-all duration-300
                ${plan.highlight ? "border-indigo-600 shadow-xl" : "border-slate-200"}
                bg-white hover:-translate-y-1 hover:shadow-xl
                dark:border-slate-800 dark:bg-slate-900`}>
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
                  Paling Dipilih
                </span>
              )}

              <CardHeader className="space-y-2 text-center">
                <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                  {plan.name}
                </CardTitle>
                <p className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
                  {plan.price}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Cocok untuk:
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{plan.suitableFor}</p>
                </div>

                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="mt-auto">
                <Button
                  className="w-full bg-indigo-600 text-white hover:bg-indigo-700
                             dark:bg-indigo-500 dark:hover:bg-indigo-400 rounded-full"
                  onClick={() => {
                    window.open("https://wa.me/6281361296979", "_blank");
                  }}>
                  Konsultasi Paket Ini <IoLogoWhatsapp className="h-5 w-5" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div
          className="mx-auto mt-16 max-w-3xl rounded-2xl border border-indigo-600/20 bg-indigo-50 p-6 text-center
                        dark:border-indigo-500/20 dark:bg-indigo-950">
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            💡 Harga bersifat estimasi dan dapat menyesuaikan kebutuhan, kompleksitas, serta tujuan
            bisnis Anda.
            <br />
            Kami lebih fokus pada <span className="font-semibold">hasil</span>, bukan sekadar
            deliverable.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
