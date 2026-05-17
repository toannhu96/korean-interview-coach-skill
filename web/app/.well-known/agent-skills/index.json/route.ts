import { getSiteBaseUrl, sha256Hex } from "../../../../lib/agent-discovery";

const SKILLS = [
  {
    name: "robots-rules",
    type: "discovery/robots",
    description: "Robot policy and AI crawler directives.",
    path: "robots.txt",
  },
  {
    name: "agent-catalog",
    type: "discovery/api-catalog",
    description: "RFC 9727 API catalog for automated API discovery.",
    path: ".well-known/api-catalog",
  },
  {
    name: "agent-metadata",
    type: "discovery/mcp",
    description: "MCP server card for agent tool transport.",
    path: ".well-known/mcp/server-card.json",
  },
  {
    name: "markdown-homepage",
    type: "response/markdown",
    description: "Markdown response mode for agent clients.",
    path: "",
  },
];

export async function GET(request: Request) {
  const baseUrl = getSiteBaseUrl(new URL(request.url));

  const skillEntries = await Promise.all(
    SKILLS.map(async (skill) => {
    const url = `${baseUrl}/${skill.path}`.replace(/\/\/+$/u, "/");
    return {
      name: skill.name,
      type: skill.type,
      description: skill.description,
      url,
      sha256: await sha256Hex(url),
    };
  }),
  );

  return Response.json({
    $schema: "https://raw.githubusercontent.com/cloudflare/agent-skills-discovery-rfc/main/schema/agent-skills-index.schema.json",
    skills: skillEntries,
  });
}
