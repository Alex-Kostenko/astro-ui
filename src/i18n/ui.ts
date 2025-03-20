import ua from "./localization/ukrain.json";
import en from "./localization/english.json";

export const languages: LanguageSet = {
  default: { label: "English", slug: undefined, lang: "en" },
  en: { label: "English", slug: "en", lang: "en" },
  ua: { label: "Ukrain", slug: "ua", lang: "ua" },
};

export interface Language {
  label: string;
  lang: Languages;
  slug: string | undefined;
}

export interface LanguageSet {
  [key: string]: Language;
}

export type Languages = "en" | "ua";

export const languagesSet = new Set<Languages>(["en", "ua"]);

export const defaultLang = "en";

export const ui: any = { en, ua } as const;
