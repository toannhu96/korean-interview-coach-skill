export async function GET() {
  return Response.json({
    sub: "anonymous",
    preferred_username: "site-agent-user",
  });
}

