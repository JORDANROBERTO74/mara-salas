import { ArrowUpRight, MapPin } from "lucide-react";
import { region } from "@/config/region";
import { site } from "@/config/site";
import type { Dictionary } from "@/i18n/get-dictionary";
import { CopyEmail } from "./copy-email";

export function Contact({ dict }: { dict: Dictionary }) {
  const fees = dict.contact.fees.replace("{currency}", region.currency);

  return (
    <section id="contact" className="scroll-mt-24 bg-cobalt text-bone">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 md:px-8 md:py-28 lg:px-12">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-bone/60">
          {dict.contact.label}
        </p>

        <div className="mt-6 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-[clamp(2.9rem,5.4vw,5rem)] leading-[0.95] tracking-tight text-balance">
              {dict.contact.title.lead}{" "}
              <em className="italic text-sand">
                {dict.contact.title.accent}
              </em>
            </h2>
            <p className="mt-6 max-w-[46ch] text-[14px] leading-7 text-bone/75">
              {dict.contact.intro}
            </p>
          </div>

          <div className="lg:col-span-5 lg:pt-2">
            <p className="text-[9px] uppercase tracking-[0.16em] text-bone/60">
              {dict.contact.emailLabel}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 inline-flex items-start gap-3 font-serif text-[clamp(1.6rem,3vw,2.4rem)] leading-tight underline decoration-bone/30 underline-offset-8 transition hover:decoration-bone"
            >
              {site.email}
              <ArrowUpRight className="mt-1 size-5 shrink-0" />
            </a>

            <CopyEmail
              email={site.email}
              copyLabel={dict.contact.copy}
              copiedLabel={dict.contact.copied}
            />

            <div className="mt-10 space-y-4 border-t border-bone/20 pt-5 text-[12px] leading-6 text-bone/75">
              <p>{dict.contact.availability}</p>
              <p className="flex items-center gap-2">
                <MapPin className="size-3.5 shrink-0" />
                {dict.contact.location}
              </p>
              <p>{fees}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
