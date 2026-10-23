"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import {
  localeCookie,
  localeNames,
  locales,
  type Locale,
} from "@/i18n/config";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({
  locale,
  label,
  className,
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  const pathname = usePathname() ?? `/${locale}`;
  const suffix = pathname.split("/").slice(2).join("/");

  useEffect(() => {
    document.documentElement.lang = locale;
    document.cookie = `${localeCookie}=${locale}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
  }, [locale]);

  return (
    <div
      role="group"
      aria-label={label}
      className={cn("flex items-center border border-line", className)}
    >
      {locales.map((code) => (
        <Link
          key={code}
          href={`/${code}${suffix ? `/${suffix}` : ""}`}
          hrefLang={code}
          aria-current={code === locale ? "true" : undefined}
          className={cn(
            "px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] transition",
            code === locale
              ? "bg-cobalt text-bone"
              : "text-muted hover:bg-sand hover:text-ink",
          )}
        >
          {code}
          <span className="sr-only"> — {localeNames[code]}</span>
        </Link>
      ))}
    </div>
  );
}
