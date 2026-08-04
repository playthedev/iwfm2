import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

type LegalSection = {
  title: string;
  body: string[];
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  lastUpdated,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-brand-100 bg-brand-50/60 px-5 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              {eyebrow}
            </p>
            <h1 className="mt-3 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-700">
              {intro}
            </p>
            <p className="mt-6 text-xs font-medium uppercase tracking-wider text-ink-500">
              Last updated: {lastUpdated}
            </p>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-4xl space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-xl font-bold text-ink-900 sm:text-2xl">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.body.map((paragraph, i) => (
                    <p
                      key={i}
                      className="whitespace-pre-line text-sm leading-relaxed text-ink-700 sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
