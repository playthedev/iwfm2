import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { gallery } from "@/lib/content";

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          On Site
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
          Our Team Gallery
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3">
        {gallery.map((photo, i) => (
          <Reveal
            key={photo.src}
            delay={(i % 3) * 0.08}
            className={i === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""}
          >
            <div
              className={`group relative w-full overflow-hidden rounded-2xl ${
                i === 0 ? "aspect-[4/5] md:h-full" : "aspect-square"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(min-width: 768px) 33vw, 50vw"
              />
              <div className="absolute inset-0 bg-ink-900/0 transition-colors duration-300 group-hover:bg-ink-900/20" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
