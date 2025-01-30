// @ts-check
import { defineConfig } from "astro/config";
// import vercelServerless from "@astrojs/vercel";

import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "static",
  build: { inlineStylesheets: "never" },

  i18n: {
    defaultLocale: "en",
    locales: ["en", "ua"],
  },

  adapter: cloudflare(),
});
