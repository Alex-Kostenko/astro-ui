// @ts-check
import { defineConfig } from "astro/config";
import vercelServerless from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "hybrid",
  adapter: vercelServerless(),
  build: { inlineStylesheets: "never" },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ua"],
  },
});
