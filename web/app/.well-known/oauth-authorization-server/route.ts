import { getSiteBaseUrl } from "../../../lib/agent-discovery";

export async function GET(request: Request) {
  const baseUrl = getSiteBaseUrl(new URL(request.url));

  return Response.json(
    {
      issuer: `${baseUrl}/`,
      authorization_endpoint: `${baseUrl}/oauth/authorize`,
      token_endpoint: `${baseUrl}/oauth/token`,
      jwks_uri: `${baseUrl}/oauth/jwks.json`,
      response_types_supported: ["code"],
      response_modes_supported: ["query", "fragment"],
      grant_types_supported: ["authorization_code", "client_credentials"],
      token_endpoint_auth_methods_supported: ["none", "client_secret_basic", "client_secret_post"],
      scopes_supported: ["read", "write", "status"],
      service_documentation: `${baseUrl}/docs/api`,
    },
    {
      headers: {
        "Cache-Control": "public, max-age=3600",
      },
    },
  );
}

