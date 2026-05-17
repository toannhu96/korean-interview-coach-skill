export async function GET() {
  return Response.json(
    {
      status: "ok",
      service: "korean-interview-coach",
      timestamp: new Date().toISOString(),
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}

