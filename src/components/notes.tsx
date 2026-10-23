import { Plus } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { formatMonthYear } from "@/lib/format";

export function Notes({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <section className="border-t border-line">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cobalt">
              {dict.notes.label}
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.02] tracking-tight md:text-5xl">
              {dict.notes.title}
            </h2>
          </div>
          <p className="max-w-[36ch] text-[13px] leading-6 text-muted">
            {dict.notes.intro}
          </p>
        </div>

        <div className="mt-10 border-t border-line">
          {dict.notesItems.map((note) => (
            <details key={note.id} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6">
                <span className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-8">
                  <time
                    dateTime={note.date}
                    className="text-[9px] uppercase tracking-[0.16em] text-muted"
                  >
                    {formatMonthYear(note.date, locale)}
                  </time>
                  <span className="font-serif text-2xl leading-tight tracking-tight md:text-3xl">
                    {note.title}
                  </span>
                </span>
                <Plus className="size-5 shrink-0 text-cobalt transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none" />
              </summary>
              <p className="max-w-[64ch] pb-8 text-[14px] leading-7 text-muted">
                {note.body}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
