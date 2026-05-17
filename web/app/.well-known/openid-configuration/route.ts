import { getSiteBaseUrl } from "../../../lib/agent-discovery";

export async function GET(request: Request) {
  const baseUrl = getSiteBaseUrl(new URL(request.url));

  return Response.json(
    {
      issuer: `${baseUrl}/`,
      authorization_endpoint: `${baseUrl}/oauth/authorize`,
      token_endpoint: `${baseUrl}/oauth/token`,
      userinfo_endpoint: `${baseUrl}/oauth/userinfo`,
      jwks_uri: `${baseUrl}/oauth/jwks.json`,
      response_types_supported: ["code"],
      response_modes_supported: ["query", "fragment"],
      grant_types_supported: ["authorization_code", "refresh_token", "client_credentials"],
      id_token_signing_alg_values_supported: ["RS256"],
      subject_types_supported: ["public"],
      token_endpoint_auth_methods_supported: ["none", "client_secret_post", "client_secret_basic"],
      code_challenge_methods_supported: ["S256"],
      scopes_supported: ["openid", "profile", "email", "read"],
    },
    {
      headers: {
        "Cache-Control": "public, max-age=3600",
      },
    },
  );
}

