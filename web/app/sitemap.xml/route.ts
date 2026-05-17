import { buildSitemapXml, getSiteBaseUrl } from "../../lib/agent-discovery";

export function GET(request: Request) {
  const baseUrl = getSiteBaseUrl(new URL(request.url));

  return new Response(buildSitemapXml(baseUrl), {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

