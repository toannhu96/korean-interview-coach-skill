export async function GET() {
  return Response.json({
    keys: [
      {
        kty: "RSA",
        kid: "placeholder-kid",
        use: "sig",
        alg: "RS256",
        n: "0",
        e: "AQAB",
      },
    ],
  });
}

