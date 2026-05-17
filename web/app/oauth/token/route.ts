export async function POST() {
  return Response.json({
    error: "token_not_configured",
    error_description: "OAuth token exchange is not enabled in this static product surface.",
  });
}

export async function GET() {
  return Response.json({
    message: "Use POST to request a token response. See /oauth/authorization-server metadata.",
  });
}

