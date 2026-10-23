const FALLBACK_URL = "https://mara-salas.vercel.app";

function resolveSiteUrl(): string {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return (value && value.length > 0 ? value : FALLBACK_URL).replace(/\/+$/, "");
}

export const site = {
  name: "Mara Salas",
  domain: "marasalas.studio",
  email: "hola@marasalas.studio",
  url: resolveSiteUrl(),
} as const;
