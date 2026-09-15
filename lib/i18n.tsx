"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Locale, LocalizedText } from "@/data/restaurant";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  text: (value: LocalizedText) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("royal-india-language");
    const nextLocale: Locale =
      stored === "en" || stored === "ko"
        ? stored
        : window.navigator.language.toLowerCase().startsWith("ko")
          ? "ko"
          : "en";
    setLocaleState(nextLocale);
    document.documentElement.lang = nextLocale === "ko" ? "ko" : "en";
  }, []);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem("royal-india-language", nextLocale);
    document.documentElement.lang = nextLocale === "ko" ? "ko" : "en";
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale, text: (content: LocalizedText) => content[locale] }),
    [locale, setLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
