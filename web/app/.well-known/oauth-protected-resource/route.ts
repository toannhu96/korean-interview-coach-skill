import { getSiteBaseUrl } from "../../../lib/agent-discovery";

export async function GET(request: Request) {
  const baseUrl = getSiteBaseUrl(new URL(request.url));

  return Response.json(
    {
      resource: `${baseUrl}/`,
      authorization_servers: [`${baseUrl}/.well-known/oauth-authorization-server`],
      scopes_supported: ["read", "write", "status"],
      bearer_methods_supported: ["Authorization: Bearer"],
    },
    {
      headers: {
        "Cache-Control": "public, max-age=3600",
      },
    },
  );
}

