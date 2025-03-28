import { defineMiddleware } from 'astro/middleware';

export const onRequest = defineMiddleware((context, next) => {
  const { url } = context;
  const lang = url.pathname.split('/')[1];

  const supportedLanguages = ['en', 'ua'];
  if (!supportedLanguages.includes(lang)) {
    return new Response('Not Found', { status: 404 });
  }

  return next();
});
