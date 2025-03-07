import { ui, defaultLang, languages, type Languages } from "./ui";

export function getLangFromUrl(url: URL): Languages {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang as Languages;
  return defaultLang;
}

export function getFromLocale(lang?: string) {
  if (lang && lang in ui) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(
  lang: keyof typeof languages,
  ns?: string,
): any {
  const getNestedTranslation = (obj: any, path: string): string | undefined => {
    return path.split(".").reduce((acc, part) => acc && acc[part], obj);
  };

  if (ns) {
    return function t(key: string) {
      const namespaceObj =
        getNestedTranslation(ui[lang], ns) ||
        getNestedTranslation(ui[defaultLang], ns);
      const translation =
        getNestedTranslation(namespaceObj, key) ||
        getNestedTranslation(namespaceObj, key);

      if (!translation) {
        throw new Error(
          `Translation for key "${key}" in namespace "${ns}" not found for language "${lang.toString()}".`,
        );
      }
      return translation;
    };
  }

  return function t(key: string) {
    const translation =
      getNestedTranslation(ui[lang], key) ||
      getNestedTranslation(ui[defaultLang], key);

    if (!translation) {
      throw new Error(
        `Translation for key "${key}" not found for language "${lang.toString()}".`,
      );
    }
    return translation;
  };
}
