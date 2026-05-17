"use client";

import { useEffect } from "react";
import { dictionary, locales, type Locale } from "./i18n";

type WebMCPTool = {
  name: string;
  description: string;
  inputSchema: {
    type: string;
    properties: Record<string, unknown>;
    required?: string[];
    additionalProperties?: boolean;
  };
  execute: (input: Record<string, unknown>) => Promise<Record<string, unknown>>;
};

type ModelContext = {
  provideContext: (context: {
    name: string;
    tools: WebMCPTool[];
  }) => void;
};

function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

function resolveLocale(inputLocale?: string): Locale {
  if (inputLocale && isValidLocale(inputLocale)) {
    return inputLocale;
  }

  return "en";
}

export function WebMCPClient() {
  useEffect(() => {
    const navigatorModel = (
      window.navigator as Navigator & { modelContext?: ModelContext }
    ).modelContext;

    if (!navigatorModel?.provideContext) {
      return;
    }

    navigatorModel.provideContext({
      name: "korean-interview-coach",
      tools: [
        {
          name: "get_install_command",
          description: "Return the install command and quick profile metadata.",
          inputSchema: {
            type: "object",
            properties: {
              locale: {
                type: "string",
                enum: locales,
              },
            },
            additionalProperties: false,
          },
          execute: async (input = {}) => {
            const locale = resolveLocale(typeof input.locale === "string" ? input.locale : undefined);
            const copy = dictionary[locale];

            return {
              locale,
              command: copy.install.command,
              installBadges: copy.install.badges,
              homepage: "/",
              resources: {
                apiCatalog: "/.well-known/api-catalog",
                skillCatalog: "/.well-known/agent-skills/index.json",
                mcpCard: "/.well-known/mcp/server-card.json",
                robots: "/robots.txt",
                sitemap: "/sitemap.xml",
              },
            };
          },
        },
        {
          name: "list_site_sections",
          description: "Return primary website sections and metadata for quick tool planning.",
          inputSchema: {
            type: "object",
            properties: {},
            additionalProperties: false,
          },
          execute: async () => ({
            title: "Korean Interview Coach",
            sections: [
              "/",
              "/docs/api",
              "/install",
              "/workflow",
              "/en",
              "/vi",
            ],
          }),
        },
      ],
    });
  }, []);

  return null;
}

