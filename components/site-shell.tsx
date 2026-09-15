"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "@/lib/i18n";
import { MobileActions } from "@/components/mobile-actions";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WebMcpSiteTools } from "@/components/webmcp-site-tools";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <WebMcpSiteTools />
      <SiteHeader />
      {children}
      <SiteFooter />
      <MobileActions />
    </LanguageProvider>
  );
}
