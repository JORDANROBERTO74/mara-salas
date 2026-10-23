import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";

export function Studio({ dict }: { dict: Dictionary }) {
  return (
    <section id="studio" className="scroll-mt-24 border-t border-line bg-paper">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cobalt">
          {dict.studio.label}
        </p>

        <div className="mt-8 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-4xl leading-[1.02] tracking-tight text-balance md:text-5xl">
              {dict.studio.title.lead}{" "}
              <em className="italic text-cobalt">
                {dict.studio.title.accent}
              </em>
            </h2>

            <figure className="mt-10">
              <div className="relative aspect-square overflow-hidden bg-sand">
                <Image
                  src="/images/studio.webp"
                  alt={dict.studio.imageCaption}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-[9px] uppercase tracking-[0.16em] text-muted">
                {dict.studio.imageCaption}
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-5 text-[15px] leading-7">
              {dict.studio.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <p className="mt-10 text-[9px] font-medium uppercase tracking-[0.16em] text-cobalt">
              {dict.studio.servicesLabel}
            </p>

            <ul className="mt-4 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {dict.studio.services.map((service, index) => (
                <li key={service.title} className="border-t border-line pt-3">
                  <span className="text-[9px] tracking-[0.14em] text-cobalt">
                    0{index + 1}
                  </span>
                  <h3 className="mt-1 font-serif text-xl leading-tight tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-[12px] leading-6 text-muted">
                    {service.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
