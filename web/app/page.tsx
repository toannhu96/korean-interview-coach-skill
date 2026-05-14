import type { Metadata } from "next";
import { LandingPage } from "./LandingPage";
import { defaultLocale, dictionary } from "./i18n";

export const metadata: Metadata = dictionary[defaultLocale].metadata;

export default function Home() {
  return <LandingPage locale={defaultLocale} />;
}
