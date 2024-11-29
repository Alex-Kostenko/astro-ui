import { languages } from "@i18n/ui";

export function formatLink(url: URL, href: string) {
  const link = href.startsWith("/") ? href : "/" + href;

  const [, lang] = url.pathname.split("/");
  if (lang in languages) return `/${lang}${link}`;
  return `${link}`;
}
