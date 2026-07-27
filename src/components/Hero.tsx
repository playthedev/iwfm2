"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { company } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-6.5rem)] items-center overflow-hidden bg-ink-900 py-10 lg:min-h-[calc(100svh-7rem)] lg:py-8"
    >
      <div className="pointer-events-none absolute -left-32 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-400/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex w-fit items-center rounded-full bg-brand-500/15 px-4 py-1.5 text-xs font-semibold text-brand-300 ring-1 ring-inset ring-brand-400/30 sm:text-sm"
          >
            Delhi · Noida · Gurugram · Chandigarh
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl"
          >
            I Work Facility Management
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 max-w-lg text-sm text-white/80 sm:text-base"
          >
            Specialized solutions in Regular Housekeeping Manpower, Deep
            Cleaning &amp; Pre-Handover Cleaning, and Sanitization for
            Commercial &amp; Residential buildings — delivered by a pioneer
            in Facility Management and executive housekeeping.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <a
              href={company.phoneHref}
              className="flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:scale-[1.03] hover:bg-brand-600"
            >
              <Phone className="h-4 w-4" />
              Call {company.phone}
            </a>
            <a
              href={company.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-inset ring-white/25 backdrop-blur transition-all hover:scale-[1.03] hover:bg-white/20"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="relative mt-8 h-44 overflow-hidden rounded-2xl sm:hidden"
          >
            <Image
              src="/images/team-ac-vent.jpg"
              alt="IWFM technician servicing a ceiling AC vent"
              fill
              className="object-cover"
              sizes="90vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 via-transparent to-transparent" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto hidden h-72 w-full max-w-md sm:block sm:h-80 lg:h-[27rem] xl:h-[30rem]"
        >
          <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-brand-400/25 to-brand-600/5 blur-2xl" />

          <div className="absolute inset-y-0 right-0 w-[76%] overflow-hidden rounded-[1.75rem] shadow-2xl ring-1 ring-white/10">
            <Image
              src="/images/team-ac-vent.jpg"
              alt="IWFM technician servicing a ceiling AC vent"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 32vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/55 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-7 left-0 h-[58%] w-[52%] overflow-hidden rounded-2xl shadow-2xl ring-4 ring-ink-900">
            <Image
              src="/images/team-floor-scrub.jpg"
              alt="IWFM staff operating a floor scrubbing machine"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 18vw, 25vw"
            />
          </div>

          <div className="absolute -top-5 right-4 max-w-[11rem] rounded-xl bg-white px-4 py-2.5 shadow-lg sm:right-8">
            <p className="text-xs font-semibold text-ink-900 sm:text-sm">
              Trained &amp; Motivated Manpower
            </p>
            <p className="text-[11px] text-ink-500">
              On-the-job training on every site
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
