import { Users, FlaskConical, Wrench } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { resources, resourcesNote } from "@/lib/content";

const ICONS = [Users, FlaskConical, Wrench];

export function Resources() {
  return (
    <section className="bg-brand-50/60 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Executive Cleaning Inputs
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
            Manpower, Materials &amp; Machines
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {resources.map((group, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={group.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl bg-white p-8 shadow-sm ring-1 ring-brand-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-snug text-ink-700"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm italic text-ink-500">
            {resourcesNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
