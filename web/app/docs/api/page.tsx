import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Korean Interview Coach API",
  description: "Discovery and operational endpoints for automated agent tooling.",
};

export default function DocsApiPage() {
  return (
    <main className="section-shell">
      <h1>API Documentation</h1>
      <p>Agent tooling endpoints exposed by this site.</p>
      <ul>
        <li>
          <a href="/.well-known/api-catalog">API catalog</a>
        </li>
        <li>
          <a href="/openapi.json">OpenAPI description</a>
        </li>
        <li>
          <a href="/api/health">Health endpoint</a>
        </li>
        <li>
          <a href="/.well-known/openid-configuration">OpenID discovery</a>
        </li>
      </ul>
    </main>
  );
}

