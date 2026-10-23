"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { site } from "@/config/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

export function SiteHeader({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeAndRestore = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  const links = [
    { href: "#work", label: dict.nav.work, index: "01" },
    { href: "#studio", label: dict.nav.studio, index: "02" },
    { href: "#contact", label: dict.nav.contact, index: "03" },
  ];

  const handlePanelKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab" || !panelRef.current) {
      return;
    }

    const focusables = panelRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );

    if (focusables.length === 0) {
      return;
    }

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bone">
      <div className="mx-auto flex h-[76px] w-full max-w-[1240px] items-center justify-between gap-6 px-5 md:px-8 lg:px-12">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-3"
          aria-label={dict.common.brand}
        >
          <BrandMark className="size-7 text-cobalt" />
          <span className="font-serif text-[22px] leading-none tracking-tight">
            {dict.common.brand}
          </span>
          <span className="hidden text-[9px] uppercase tracking-[0.18em] text-muted xl:block">
            {dict.common.discipline}
          </span>
        </Link>

        <nav
          aria-label={dict.nav.label}
          className="hidden items-center gap-8 lg:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted transition hover:text-cobalt"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher locale={locale} label={dict.common.language} />
          <a
            href={`mailto:${site.email}`}
            className="hidden items-center gap-2 bg-cobalt px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.14em] text-bone transition hover:bg-cobalt-deep lg:inline-flex"
          >
            {dict.nav.start}
            <ArrowUpRight className="size-3.5" />
          </a>
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={dict.common.menu}
            className="flex size-9 items-center justify-center border border-line text-ink transition hover:border-cobalt hover:text-cobalt lg:hidden"
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>

      {open && (
        <div
          ref={panelRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={dict.nav.label}
          onKeyDown={handlePanelKeyDown}
          className="fixed inset-0 z-50 flex flex-col bg-bone lg:hidden"
        >
          <div className="flex h-[76px] shrink-0 items-center justify-between px-5 md:px-8">
            <span className="flex items-center gap-3">
              <BrandMark className="size-7 text-cobalt" />
              <span className="font-serif text-[22px] leading-none tracking-tight">
                {dict.common.brand}
              </span>
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={closeAndRestore}
              aria-label={dict.common.close}
              className="flex size-9 items-center justify-center border border-line text-ink transition hover:border-cobalt hover:text-cobalt"
            >
              <X className="size-4" />
            </button>
          </div>

          <nav
            aria-label={dict.nav.label}
            className="flex flex-1 flex-col justify-center px-5 md:px-8"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between border-b border-line py-5 first:border-t"
              >
                <span className="font-serif text-4xl tracking-tight">
                  {link.label}
                </span>
                <span className="text-[10px] tracking-[0.16em] text-muted">
                  {link.index}
                </span>
              </a>
            ))}
          </nav>

          <div className="shrink-0 px-5 pb-8 md:px-8">
            <a
              href={`mailto:${site.email}`}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between bg-cobalt px-5 py-4 text-bone transition hover:bg-cobalt-deep"
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.14em]">
                {dict.nav.start}
              </span>
              <ArrowUpRight className="size-4" />
            </a>
            <div className="mt-5 flex items-center justify-between">
              <LocaleSwitcher locale={locale} label={dict.common.language} />
              <span className="text-[9px] uppercase tracking-[0.16em] text-muted">
                Valencia, ES
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
