"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n";

export function WebMcpSiteTools() {
  const { setLocale } = useLanguage();

  useEffect(() => {
    const context = document.modelContext;
    if (!context?.registerTool) return;

    const lifecycle = new AbortController();

    try {
      void Promise.resolve(
        context.registerTool(
          {
            name: "set_site_language",
            title: "Set site language",
            description:
              "Switch all visible Royal India Haeundae website content between English and Korean.",
            inputSchema: {
              type: "object",
              properties: {
                locale: { type: "string", enum: ["en", "ko"] },
              },
              required: ["locale"],
              additionalProperties: false,
            },
            annotations: { readOnlyHint: false, untrustedContentHint: false },
            execute(input) {
              if (
                !input ||
                typeof input !== "object" ||
                !("locale" in input) ||
                (input.locale !== "en" && input.locale !== "ko")
              ) {
                throw new Error("locale must be either 'en' or 'ko'");
              }
              setLocale(input.locale);
              return {
                locale: input.locale,
                visibleLanguage: input.locale === "ko" ? "한국어" : "English",
              };
            },
          },
          { signal: lifecycle.signal },
        ),
      ).catch(() => undefined);
    } catch {
      // WebMCP is optional and feature-detected.
    }

    return () => lifecycle.abort();
  }, [setLocale]);

  return null;
}
