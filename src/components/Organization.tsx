import { Reveal } from "@/components/Reveal";
import { departments, strengths } from "@/lib/content";

export function Organization() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Our Human Resource
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
              A Focus on Our Strengths
            </h2>
          </Reveal>
          <div className="mt-8 space-y-5">
            {strengths.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-brand-100 p-6">
                  <h3 className="font-display text-base font-bold text-ink-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal delay={0.1}>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Our Functioning
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
              Built on Accountability
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-700">
              For smooth running of operations we follow a proper hierarchy,
              building accountability towards our prestigious clients through
              dedicated departments.
            </p>
          </Reveal>
          <div className="mt-8 space-y-4">
            {departments.map((dept, i) => (
              <Reveal key={dept.number} delay={i * 0.08}>
                <div className="flex items-start gap-4 rounded-2xl bg-brand-50 p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
                    {dept.number}
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-bold text-ink-900">
                      {dept.title}
                    </h3>
                    <p className="mt-1 text-sm leading-snug text-ink-700">
                      {dept.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
