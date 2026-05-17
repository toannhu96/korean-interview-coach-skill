import { buildRobotsText, getSiteBaseUrl } from "../../lib/agent-discovery";

export function GET(request: Request) {
  const baseUrl = getSiteBaseUrl(new URL(request.url));

  return new Response(buildRobotsText(baseUrl), {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

