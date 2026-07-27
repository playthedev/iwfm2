import { Reveal } from "@/components/Reveal";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section className="bg-ink-900 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            How We Work
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Our Methodology
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.title} delay={(i % 4) * 0.08}>
              <div className="h-full rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition-colors hover:bg-white/10">
                <span className="font-display text-3xl font-extrabold text-brand-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {step.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
