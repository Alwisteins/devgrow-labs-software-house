import LogoLoop from "@/components/LogoLoop";

const imageLogos = [
  { src: "/logoipsum-1.svg", alt: "Company 1", href: "" },
  { src: "/logoipsum-2.svg", alt: "Company 2", href: "" },
  { src: "/logoipsum-3.svg", alt: "Company 3", href: "" },
  { src: "/logoipsum-4.svg", alt: "Company 4", href: "" },
  { src: "/logoipsum-5.svg", alt: "Company 5", href: "" },
];

export default function TrustedBy() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="mb-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Dipercaya oleh
          </span>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Brand & bisnis yang mempercayakan sistem digitalnya kepada kami
          </p>
        </div>

        <LogoLoop
          logos={imageLogos}
          className="opacity-60 dark:opacity-50"
          speed={64}
          direction="left"
          logoHeight={28}
          gap={48}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="transparent"
          ariaLabel="Trusted partners"
        />
      </div>
    </section>
  );
}
