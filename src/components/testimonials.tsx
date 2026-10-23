import type { Dictionary } from "@/i18n/get-dictionary";

export function Testimonials({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-cobalt text-bone">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-bone/60">
          {dict.testimonials.label}
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
          {dict.testimonials.items.map((item) => (
            <figure key={item.name}>
              <blockquote className="font-serif text-[26px] leading-[1.3] tracking-tight text-balance md:text-[30px]">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-bone/20 pt-4 text-[9px] uppercase tracking-[0.16em] text-bone/70">
                {item.name} · {item.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
