// @ts-check
// import vercelServerless from "@astrojs/vercel";
// import node from "@astrojs/node";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import AstroPWA from "@vite-pwa/astro";

// https://astro.build/config
export default defineConfig({
  vite: {
    logLevel: "info",
    server: {
      fs: {
        // Allow serving files from hoisted root node_modules
        allow: ["../.."],
      },
    },
  },
  integrations: [
    tailwind(),
    AstroPWA({
      manifest: {
        name: "UniCode Software",
        short_name: "UniCode",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
          {
            src: "/web-app-manifest-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/web-app-manifest-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        // description:
        //   "This is a long text that can describe what your PWA does to the user",
        // categories: ["games", "education"],
        // screenshots: [
        //   {
        //     src: "",
        //     type: "image/png",
        //     sizes: "512x512",
        //   },
        //   {
        //     src: "",
        //     type: "image/png",
        //     sizes: "512x512",
        //   },
        // ],
      },
      workbox: {
        cleanupOutdatedCaches: true, // Clears old caches properly
        clientsClaim: true, // Ensures clients are controlled immediately
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 10mb
        globPatterns: ["**/*{.,js,css,html,png,svg,webp,ico,json,astro}"],
        // runtimeCaching: [
        //   {
        //     urlPattern: /.*\/[^\/]+/,
        //     handler: "CacheFirst",
        //     options: {
        //       cacheName: "image-cache",
        //       expiration: { maxEntries: 50, maxAgeSeconds: 30 * 24 * 60 * 60 },
        //     },
        //   },
        // ],
        // exclude: [/\.map$/, /@fs\//], // Exclude FS paths
        globIgnores: ["**/404.{html,astro,js,ts,css}", "**/_routes.json"],
        navigateFallback: "/",
      },
      devOptions: {
        enabled: true,
        navigateFallbackAllowlist: [/^\//],
      },
      experimental: {
        directoryAndTrailingSlashHandler: true,
      },
    }),
  ],
  output: "static",
  build: { inlineStylesheets: "never" },

  i18n: {
    defaultLocale: "en",
    locales: ["en", "ua"],
  },

  adapter: cloudflare(),
});
