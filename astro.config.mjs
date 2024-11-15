// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({ applyBaseStyles: false, configFile: "./tailwind.config.mjs" }),
  ],
  output: "server",
  build: { inlineStylesheets: "never" },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ua"],
  },
});
