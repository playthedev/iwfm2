import {
  Building2,
  ClipboardCheck,
  DoorOpen,
  ShieldCheck,
  UserMinus,
  Wrench,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { advantages } from "@/lib/content";

const ICONS = [Building2, UserMinus, Wrench, ShieldCheck, ClipboardCheck, DoorOpen];

export function Advantages() {
  return (
    <section className="bg-brand-50/60 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Why IWFM
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
            Advantages of Using IWFM Services
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((text, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={text} delay={(i % 3) * 0.1}>
                <div className="flex h-full items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-100 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-200/40">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-medium leading-snug text-ink-700">
                    {text}
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
