import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "../LandingPage";
import { Locale, dictionary, isLocale, locales } from "../i18n";

type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return dictionary[locale].metadata;
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <LandingPage locale={locale as Locale} />;
}
