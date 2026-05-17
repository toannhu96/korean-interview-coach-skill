import { getSiteBaseUrl } from "../../../lib/agent-discovery";

export async function GET(request: Request) {
  const baseUrl = getSiteBaseUrl(new URL(request.url));

  const payload = {
    linkset: [
      {
        anchor: `${baseUrl}/`,
        rel: "service-desc",
        href: `${baseUrl}/openapi.json`,
      },
      {
        anchor: `${baseUrl}/`,
        rel: "service-doc",
        href: `${baseUrl}/docs/api`,
      },
      {
        anchor: `${baseUrl}/`,
        rel: "status",
        href: `${baseUrl}/api/health`,
      },
    ],
  };

  return new Response(JSON.stringify(payload), {
    status: 200,
    headers: {
      "Content-Type": "application/linkset+json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
