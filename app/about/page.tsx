import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { IoPeopleOutline } from "react-icons/io5";
import { Navbar } from "../components/navbar";
import Footer from "../components/footer";

const team = [
  {
    name: "Alwi Wahyu",
    role: "Founder & Frontend Developer",
    image: "/team/alwi.png",
  },
  {
    name: "Dimitri Luis",
    role: "Fullstack Developer",
    image: "/team/dimitri.png",
  },
  {
    name: "Chandra Lin",
    role: "Head of Designer",
    image: "/team/chandra.png",
  },
  {
    name: "Hudo Prasetyo",
    role: "Backend / System Architect",
    image: "/team/hudo.png",
  },
];

const values = [
  {
    title: "Business First",
    desc: "Kami memulai dari tujuan bisnis, bukan dari tampilan.",
  },
  {
    title: "Clarity over Complexity",
    desc: "Website harus jelas, mudah dipahami, dan terarah.",
  },
  {
    title: "Long-Term Thinking",
    desc: "Kami membangun sistem yang bisa tumbuh, bukan solusi instan.",
  },
];

const mindset = [
  "Website adalah alat bisnis, bukan pajangan",
  "Desain yang bagus harus bisa menjelaskan & meyakinkan",
  "Teknologi harus mempermudah growth, bukan menghambat",
];

export default function AboutPage() {
  return (
    <main className="w-full bg-white dark:bg-slate-950">
      <Navbar />
      {/* HERO */}
      <section className="px-6 pt-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-600 bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
            <IoPeopleOutline className="h-4 w-4" />
            Tentang Kami
          </span>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl dark:text-white">
            Kami Bukan Sekadar
            <span className="block text-indigo-600 dark:text-indigo-400">Pembuat Website</span>
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Kami adalah partner digital yang membantu bisnis membangun website yang bekerja,
            bertumbuh, dan menghasilkan.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Cerita Singkat Kami
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              DevGrow Labs lahir dari satu masalah yang sering kami lihat:
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                {" "}
                banyak website terlihat bagus, tapi tidak memberi dampak bisnis.
              </span>
              <br />
              <br />
              Kami percaya website seharusnya membantu bisnis: menjelaskan value, membangun
              kepercayaan, dan mendorong aksi. Bukan sekadar “online presence”.
            </p>
          </div>

          {/* FOTO REAL */}
          <div
            className="relative mx-auto aspect-square w-72 overflow-hidden rounded-2xl border border-slate-200 shadow-lg
                          dark:border-slate-800">
            <Image src="/team.png" alt="DevGrow Labs Team" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="px-6 py-20 md:px-12 lg:px-20 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Tim di Balik{" "}
              <span className="text-indigo-600 dark:text-indigo-400">DevGrow Labs</span>
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Kami tim kecil, fokus, dan hands-on di setiap proyek.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-center
                     transition hover:-translate-y-1 hover:shadow-lg
                     dark:border-slate-800 dark:bg-slate-950">
                <div
                  className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border border-slate-200
                          dark:border-slate-700">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{member.name}</h3>
                <p className="mt-1 text-sm text-indigo-600 dark:text-indigo-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="px-6 py-20 md:px-12 lg:px-20 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Misi & Nilai Kami</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Prinsip yang selalu kami pegang dalam setiap proyek.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6
                           dark:border-slate-800 dark:bg-slate-950">
                <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MINDSET */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Cara Berpikir Kami</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Prinsip sederhana yang membedakan kami dari vendor website biasa.
          </p>

          <ul className="mt-10 space-y-4">
            {mindset.map((item) => (
              <li
                key={item}
                className="flex items-center justify-center gap-3 text-slate-700 dark:text-slate-300">
                <CheckCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="px-6 py-20 md:px-12 lg:px-20 bg-indigo-600 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-extrabold">Kenapa Kami Berbeda?</h2>
          <p className="mt-4 text-indigo-100 leading-relaxed">
            Kami tidak mengejar jumlah proyek.
            <br />
            Kami memilih bekerja dengan klien yang ingin bertumbuh serius.
            <br />
            <br />
            Fokus kami bukan hanya “jadi”, tapi
            <span className="font-semibold"> berdampak.</span>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
