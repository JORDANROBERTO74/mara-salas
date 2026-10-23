import { notFound } from "next/navigation";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Notes } from "@/components/notes";
import { Process } from "@/components/process";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Studio } from "@/components/studio";
import { Testimonials } from "@/components/testimonials";
import { Work } from "@/components/work";
import { site } from "@/config/site";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: dict.meta.description,
    url: `${site.url}/${locale}`,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Valencia",
      addressCountry: "ES",
    },
    areaServed: "Europe",
    founder: {
      "@type": "Person",
      name: site.name,
      jobTitle:
        locale === "es" ? "Arquitecta interior" : "Interior architect",
    },
  };

  return (
    <>
      <SiteHeader dict={dict} locale={locale} />
      <main id="main">
        <Hero dict={dict} />
        <Work dict={dict} />
        <Studio dict={dict} />
        <Process dict={dict} />
        <Testimonials dict={dict} />
        <Notes dict={dict} locale={locale} />
        <Contact dict={dict} />
      </main>
      <SiteFooter dict={dict} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
