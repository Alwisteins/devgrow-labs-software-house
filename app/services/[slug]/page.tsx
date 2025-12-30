import { notFound } from "next/navigation";
import { services } from "@/data/services";

import { Navbar } from "@/app/components/navbar";
import Hero from "./sections/hero";
import Problem from "./sections/problem";
import Solution from "./sections/solution";
import Process from "./sections/process";
import CaseStudy from "./sections/case-study";
import FAQ from "./sections/faq";
import CTA from "./sections/cta";
import Footer from "@/app/components/footer";

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const service = services[slug as keyof typeof services];

  if (!service) return notFound();

  return (
    <main className="bg-white dark:bg-slate-950">
      <Navbar />
      <Hero service={service} />
      <Problem service={service} />
      <Solution service={service} />
      <Process service={service} />
      <CaseStudy service={service} />
      <FAQ service={service} />
      <CTA />
      <Footer />
    </main>
  );
}
