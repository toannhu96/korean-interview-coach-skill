import type { Metadata } from "next";
import "./globals.css";
import { defaultLocale, dictionary } from "./i18n";
import { WebMCPClient } from "./WebMCPClient";

export const metadata: Metadata = dictionary[defaultLocale].metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
        <WebMCPClient />
      </body>
    </html>
  );
}
