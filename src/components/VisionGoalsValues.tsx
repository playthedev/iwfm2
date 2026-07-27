import { Compass, Target, HeartHandshake } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { visionGoalsValues } from "@/lib/content";

const ICONS = {
  vision: Compass,
  goals: Target,
  values: HeartHandshake,
};

export function VisionGoalsValues() {
  return (
    <section className="bg-brand-50/60 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            What Drives Us
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
            Our Vision, Goals &amp; Values
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {visionGoalsValues.map((item, i) => {
            const Icon = ICONS[item.key as keyof typeof ICONS];
            return (
              <Reveal key={item.key} delay={i * 0.1}>
                <div className="h-full rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-brand-100 transition-all hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-200/40">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500 text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
