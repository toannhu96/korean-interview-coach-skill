import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { buildDiscoveryHeaders, buildHomepageMarkdown, getSiteBaseUrl, isHomepagePath } from "./lib/agent-discovery";

function shouldUseMarkdown(acceptHeader: string): boolean {
  if (!acceptHeader) {
    return false;
  }

  const lower = acceptHeader.toLowerCase();
  if (lower.includes("text/markdown")) {
    return true;
  }

  return false;
}

export function middleware(request: NextRequest) {
  const pathInfo = isHomepagePath(request.nextUrl.pathname);
  if (!pathInfo.isHome) {
    return NextResponse.next();
  }

  const baseUrl = getSiteBaseUrl(request.nextUrl);
  const markdownHeaders = buildDiscoveryHeaders(baseUrl).join(", ");
  const acceptHeader = request.headers.get("accept") ?? "";

  if (shouldUseMarkdown(acceptHeader)) {
    const markdown = buildHomepageMarkdown(baseUrl, pathInfo.locale);
    const tokenCount = markdown.split(/\s+/u).filter(Boolean).length;

    return new Response(markdown, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "x-markdown-tokens": tokenCount.toString(),
        "Vary": "Accept",
        Link: markdownHeaders,
      },
    });
  }

  const nextResponse = NextResponse.next();
  nextResponse.headers.set("Link", markdownHeaders);

  return nextResponse;
}

export const config = {
  matcher: ["/", "/en", "/en/", "/vi", "/vi/", "/ko", "/ko/"],
};

