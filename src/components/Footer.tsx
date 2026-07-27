import { Mail, Phone } from "lucide-react";
import { company } from "@/lib/content";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-ink-900 pt-16">
      <div className="mx-auto max-w-7xl px-5 pb-10 sm:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-3">
          <div>
            <span className="font-display text-2xl font-extrabold text-white">
              <span className="text-brand-500">I</span>WFM
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              A pioneer and front leader in Facility Management and executive
              housekeeping, serving Delhi, Noida, Gurugram and Chandigarh.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-brand-400"
                >
                  <Phone className="h-4 w-4" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-brand-400"
                >
                  <Mail className="h-4 w-4" />
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="py-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} IWFM — I Work Facility Management. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
