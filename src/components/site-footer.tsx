import { BrandMark } from "@/components/brand-mark";
import type { Dictionary } from "@/i18n/get-dictionary";

export function SiteFooter({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-line bg-bone">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <BrandMark className="size-5 text-cobalt" />
          <div>
            <p className="font-serif text-lg leading-none tracking-tight">
              {dict.common.brand}
            </p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-muted">
              {dict.footer.tagline}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] text-muted">
          <span>{dict.footer.rights}</span>
          <a href="#main" className="uppercase tracking-[0.14em] transition hover:text-cobalt">
            {dict.common.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
