import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";
import type { Dictionary } from "@/i18n/get-dictionary";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-5 pb-16 pt-12 md:px-8 md:pb-24 md:pt-20 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col justify-between lg:col-span-7">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cobalt">
              {dict.hero.eyebrow}
            </p>
            <h1 className="mt-6 font-serif text-[clamp(3.25rem,6.4vw,5.9rem)] leading-[0.92] tracking-[-0.025em] text-balance">
              {dict.hero.title.lead}{" "}
              <em className="italic text-cobalt">
                {dict.hero.title.accent}
              </em>
            </h1>
            <p className="mt-8 max-w-[48ch] text-[15px] leading-7 text-muted">
              {dict.hero.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-cobalt px-5 py-3 text-[10px] font-medium uppercase tracking-[0.14em] text-bone transition hover:bg-cobalt-deep"
              >
                {dict.hero.workCta}
                <ArrowDown className="size-3.5" />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.14em] text-ink"
              >
                {dict.hero.contactCta}
                <ArrowUpRight className="size-3.5 text-cobalt transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-line pt-5">
            {dict.hero.facts.map((fact) => (
              <div key={fact.term}>
                <dt className="text-[9px] uppercase tracking-[0.16em] text-muted">
                  {fact.term}
                </dt>
                <dd className="mt-1 text-[12.5px] font-medium">
                  {fact.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-sand">
            <Image
              src="/images/hero.webp"
              alt={dict.hero.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 flex items-center justify-between text-[9px] uppercase tracking-[0.16em] text-muted">
            <span>{dict.hero.imageCaption}</span>
            <span>MS · 01</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
