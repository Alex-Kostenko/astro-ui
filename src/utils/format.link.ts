import { languages } from '@i18n/ui';
import type { AstroGlobal } from 'astro';
import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

export function formatLink(url: URL, href: string) {
  const link = href.startsWith('/') ? href : '/' + href;

  const [, lang] = url.pathname.split('/');
  if (lang in languages) return `/${lang}${link}`;
  return `${link}`;
}

export function createLink(
  astro: Readonly<
    AstroGlobal<
      Record<string, any>,
      AstroComponentFactory,
      Record<string, string | undefined>
    >
  >,
  href: string,
) {
  // TODO: Create new link format
  // https://docs.astro.build/en/reference/modules/astro-i18n/#imports-from-astroi18n
  return `not done`;
}
