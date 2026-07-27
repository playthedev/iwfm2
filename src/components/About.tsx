import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { about, highlights } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            About Us
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
            A pioneer in Facility Management &amp; executive housekeeping
          </h2>
          <div className="mt-6 space-y-4">
            {about.paragraphs.map((p) => (
              <p key={p} className="text-base leading-relaxed text-ink-700">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-brand-100/70 blur-2xl" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-brand-100">
            <Image
              src="/images/deep-cleaning-team.jpg"
              alt="IWFM deep cleaning team with equipment"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white px-5 py-4 shadow-lg ring-1 ring-brand-100 sm:-left-8">
            <p className="font-display text-2xl font-extrabold text-brand-600">
              4 Cities
            </p>
            <p className="mt-0.5 text-xs font-medium text-ink-700">
              Delhi · Noida · Gurugram · Chandigarh
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-100 transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-200/50"
            >
              <p className="font-display text-2xl font-extrabold text-brand-600">
                {h.value}
              </p>
              <p className="mt-1 text-sm font-medium text-ink-700">
                {h.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
