import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { specializedServices } from "@/lib/content";

export function SpecializedServices() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 h-80 overflow-hidden rounded-3xl lg:order-1 lg:h-[30rem]">
          <Image
            src="/images/facade-glass-exterior.jpg"
            alt="IWFM rope-access facade and glass cleaning"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Beyond the Basics
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
            Specialized Services
          </h2>
          <ul className="mt-8 grid gap-3.5 sm:grid-cols-2">
            {specializedServices.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                <span className="text-sm leading-snug text-ink-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
