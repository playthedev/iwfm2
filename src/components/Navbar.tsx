"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { company } from "@/lib/content";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-display text-2xl font-extrabold tracking-tight text-ink-900">
            <span className="text-brand-500">I</span>WFM
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-700 transition-colors hover:text-brand-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={company.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-ink-700"
          >
            <Phone className="h-4 w-4 text-brand-500" />
            {company.phone}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-500/30 transition-all hover:bg-brand-600 hover:shadow-md hover:shadow-brand-500/40"
          >
            Get a Quote
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink-900 lg:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-100 bg-cream px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-brand-50 hover:text-brand-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand-500 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
