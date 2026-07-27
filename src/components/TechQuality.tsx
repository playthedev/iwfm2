import Image from "next/image";
import { ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { technology, qualityControl } from "@/lib/content";

export function TechQuality() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl bg-ink-900 p-9 text-white">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold">
              Our Technology
            </h3>
            <ul className="mt-6 space-y-4">
              {technology.map((point) => (
                <li
                  key={point}
                  className="border-l-2 border-brand-400 pl-4 text-sm leading-relaxed text-white/75"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative h-full min-h-[22rem] overflow-hidden rounded-3xl">
            <Image
              src="/images/team-ceiling-light.jpg"
              alt="IWFM staff following quality control procedures on site"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-white">
                Our Quality Control Procedures
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
                {qualityControl}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
