import type { Metadata } from "next";
import "./globals.css";
import { defaultLocale, dictionary } from "./i18n";

export const metadata: Metadata = dictionary[defaultLocale].metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
