export function formatMonthYear(value: string, locale: string): string {
  return new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  }).format(new Date(`${value}T12:00:00Z`));
}
