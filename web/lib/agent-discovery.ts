import { defaultLocale, dictionary, locales, type Locale } from "../app/i18n";

export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH ?? "";
}

export function getSiteBaseUrl(requestUrl: URL): string {
  const basePath = getBasePath();
  return `${requestUrl.origin}${basePath || ""}`;
}

export function normalizePath(pathname: string): string {
  const basePath = getBasePath();
  const safePath = pathname.replace(/^\/+/u, "/");

  if (!basePath) {
    return safePath === "" ? "/" : safePath.replace(/\/+$/u, "");
  }

  if (safePath === basePath) {
    return "/";
  }

  if (safePath.startsWith(`${basePath}/`)) {
    return safePath.slice(basePath.length).replace(/\/+$/u, "") || "/";
  }

  return safePath.replace(/\/+$/u, "");
}

export function isHomepagePath(pathname: string): { isHome: boolean; locale: Locale } {
  const normalized = normalizePath(pathname);
  const segments = normalized.split("/").filter(Boolean);

  if (segments.length === 0) {
    return { isHome: true, locale: defaultLocale };
  }

  const localeSegment = segments[0];
  if (segments.length === 1 && locales.includes(localeSegment as Locale)) {
    return {
      isHome: true,
      locale: (localeSegment as Locale) || defaultLocale,
    };
  }

  return { isHome: false, locale: defaultLocale };
}

export function buildSitemapUrls(baseUrl: string): string[] {
  const canonicalRoot = baseUrl.replace(/\/+$/u, "");
  return [
    `${canonicalRoot}/`,
    `${canonicalRoot}/en`,
    `${canonicalRoot}/vi`,
    `${canonicalRoot}/docs/api`,
    `${canonicalRoot}/openapi.json`,
    `${canonicalRoot}/api/health`,
    `${canonicalRoot}/.well-known/api-catalog`,
    `${canonicalRoot}/.well-known/agent-skills/index.json`,
    `${canonicalRoot}/.well-known/mcp/server-card.json`,
    `${canonicalRoot}/.well-known/openid-configuration`,
    `${canonicalRoot}/.well-known/oauth-authorization-server`,
    `${canonicalRoot}/.well-known/oauth-protected-resource`,
  ];
}

export function buildSitemapXml(baseUrl: string): string {
  const urls = buildSitemapUrls(baseUrl);
  const now = new Date().toISOString();
  const entries = urls
    .map(
      (loc) => `    <url>
      <loc>${loc}</loc>
      <lastmod>${now}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;
}

export function buildRobotsText(baseUrl: string): string {
  const siteSitemap = `${baseUrl.replace(/\/+$/u, "")}/sitemap.xml`;

  return `# Robots rules for Korean Interview Coach
User-agent: *
Allow: /
Disallow: /api/

User-agent: GPTBot
Allow: /
Disallow: /api/

User-agent: OAI-SearchBot
Allow: /
Disallow: /api/

User-agent: Claude-Web
Allow: /
Disallow: /api/

User-agent: Google-Extended
Allow: /
Disallow: /api/

Content-Signal: ai-train=no, search=yes, ai-input=no
Sitemap: ${siteSitemap}`;
}

export function buildDiscoveryHeaders(baseUrl: string): string[] {
  const canonicalBase = baseUrl.replace(/\/+$/u, "");
  return [
    `<${canonicalBase}/.well-known/api-catalog>; rel="api-catalog"`,
    `<${canonicalBase}/.well-known/agent-skills/index.json>; rel="agent-skills"`,
    `<${canonicalBase}/.well-known/mcp/server-card.json>; rel="service"`,
    `<${canonicalBase}/.well-known/oauth-authorization-server>; rel="authorization_server"`,
    `<${canonicalBase}/docs/api>; rel="service-doc"`,
    `<${canonicalBase}/sitemap.xml>; rel="sitemap"`,
  ];
}

export function buildHomepageMarkdown(baseUrl: string, locale: Locale = defaultLocale): string {
  const copy = dictionary[locale];
  const canonicalBase = baseUrl.replace(/\/+$/u, "");
  const lines = [
    `# ${copy.metadata.title}`,
    copy.metadata.description,
    "",
    `## Quick start for ${locale.toUpperCase()}`,
    `- Home: ${canonicalBase}/`,
    `- Documentation: ${canonicalBase}/docs/api`,
    `- Install skill: ${copy.install.commandLabel}`,
    "",
    `## What is available`,
    "- Robots policy: `/.well-known/` endpoints for agent discovery.",
    "- API catalog (`/.well-known/api-catalog`).",
    "- Agent skills index (`/.well-known/agent-skills/index.json`).",
    "- OAuth/OIDC discovery metadata (`/.well-known/openid-configuration`).",
    "- OAuth protected-resource metadata (`/.well-known/oauth-protected-resource`).",
    "- MCP server card (`/.well-known/mcp/server-card.json`).",
    "",
    `## Install command`,
    "```",
    copy.install.command,
    "```",
    "",
    `## Example usage`,
    "- /en (English landing)",
    "- /vi (Vietnamese landing)",
    "- /ko (default Korean landing)",
  ];

  return lines.join("\n");
}

export async function sha256Hex(value: string): Promise<string> {
  const utf8 = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", utf8);

  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}
