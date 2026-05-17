import { getSiteBaseUrl } from "../../../../lib/agent-discovery";

export async function GET(request: Request) {
  const baseUrl = getSiteBaseUrl(new URL(request.url));

  return Response.json(
    {
      schema_version: "2025-03-26",
      serverInfo: {
        name: "Korean Interview Coach",
        version: "1.0.0",
      },
      transport: {
        type: "http",
        endpoint: `${baseUrl}/mcp`,
      },
      capabilities: {
        tools: {
          listChanged: true,
        },
        resources: {
          listChanged: false,
        },
      },
    },
    {
      headers: {
        "Cache-Control": "public, max-age=3600",
      },
    },
  );
}

