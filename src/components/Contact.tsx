import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { company } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-ink-900 py-24">
      <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-brand-400/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            Get In Touch
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s Talk Facility Management
          </h2>
          <p className="mt-4 text-base text-white/70">
            Need reliable housekeeping, deep cleaning or facility management
            services? Reach out to IWFM today.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          <Reveal delay={0}>
            <a
              href={company.phoneHref}
              className="flex h-full flex-col items-center gap-3 rounded-2xl bg-white/5 p-8 text-center ring-1 ring-white/10 transition-all hover:-translate-y-1 hover:bg-white/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500">
                <Phone className="h-5 w-5 text-white" />
              </span>
              <span className="text-sm font-semibold text-white">
                {company.phone}
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href={`mailto:${company.email}`}
              className="flex h-full flex-col items-center gap-3 rounded-2xl bg-white/5 p-8 text-center ring-1 ring-white/10 transition-all hover:-translate-y-1 hover:bg-white/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500">
                <Mail className="h-5 w-5 text-white" />
              </span>
              <span className="break-all text-sm font-semibold text-white">
                {company.email}
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex h-full flex-col items-center gap-3 rounded-2xl bg-white/5 p-8 text-center ring-1 ring-white/10">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500">
                <MapPin className="h-5 w-5 text-white" />
              </span>
              <span className="text-sm font-semibold text-white">
                {company.cities.join(", ")}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.25} className="mt-12 flex justify-center">
          <a
            href={company.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:scale-[1.03] hover:bg-brand-600"
          >
            <MessageCircle className="h-4 w-4" />
            Chat with us on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
