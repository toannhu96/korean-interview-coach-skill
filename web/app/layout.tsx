import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { defaultLocale, dictionary } from "./i18n";
import { WebMCPClient } from "./WebMCPClient";

export const metadata: Metadata = dictionary[defaultLocale].metadata;
const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID || "G-2JFS9MJ6JP";

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
      <GoogleAnalytics gaId={googleAnalyticsId} />
    </html>
  );
}
