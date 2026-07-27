import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          What We Do
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
          Services Offered By IWFM
        </h2>
        <p className="mt-4 text-base text-ink-700">
          End-to-end facility management and housekeeping solutions, delivered
          by trained professionals across every site we serve.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={(i % 4) * 0.08}>
            <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-brand-100 transition-all hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-200/40">
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-base font-bold text-ink-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {service.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
