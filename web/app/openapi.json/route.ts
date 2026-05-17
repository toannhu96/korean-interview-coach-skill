import { getSiteBaseUrl } from "../../lib/agent-discovery";

export function GET(request: Request) {
  const baseUrl = getSiteBaseUrl(new URL(request.url));
  const spec = {
    openapi: "3.1.0",
    info: {
      title: "Korean Interview Coach API",
      version: "1.0.0",
      description: "Discovery and health endpoints for landing-site automation.",
    },
    servers: [{ url: baseUrl }],
    paths: {
      "/api/health": {
        get: {
          summary: "Health check",
          responses: {
            200: {
              description: "Service is reachable",
            },
          },
        },
      },
      "/oauth/authorize": {
        get: {
          summary: "Authorization start",
          responses: {
            200: {
              description: "Authorization hint endpoint",
            },
          },
        },
      },
      "/oauth/token": {
        post: {
          summary: "Token exchange",
          responses: {
            200: {
              description: "Token response",
            },
          },
        },
      },
      "/oauth/userinfo": {
        get: {
          summary: "User profile metadata",
          responses: {
            200: {
              description: "User profile metadata",
            },
          },
        },
      },
      "/oauth/jwks.json": {
        get: {
          summary: "JWKS",
          responses: {
            200: {
              description: "JSON Web Key Set metadata",
            },
          },
        },
      },
    },
  };

  return new Response(JSON.stringify(spec, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/vnd.oai.openapi+json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

