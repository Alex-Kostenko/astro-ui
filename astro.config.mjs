// @ts-check
// import vercelServerless from "@astrojs/vercel";
import node from '@astrojs/node';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import AstroPWA from '@vite-pwa/astro';
// process.env.MODE === 'dev'
//     ? node({ mode: 'standalone' })
//     :

const adapter = cloudflare({
  platformProxy: {
    enabled: true,
  },
});

// https://astro.build/config
export default defineConfig({
  vite: {
    logLevel: 'error',
    server: {
      fs: {
        // Allow serving files from hoisted root node_modules
        // allow: ["../.."],
      },
    },
    publicDir: 'public',
  },
  integrations: [
    tailwind(),
    AstroPWA({
      strategies: 'generateSW',
      registerType: 'autoUpdate',
      base: '/',
      manifest: {
        name: 'UniCode Software',
        short_name: 'UniCode',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: '/web-app-manifest-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/web-app-manifest-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        disableDevLogs: true,
        cleanupOutdatedCaches: true, // Clears old caches properly
        clientsClaim: true, // Ensures clients are controlled immediately
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 10mb
        globPatterns: ['**/*.{js,css,html,svg,png,webp,ico,json,mp4}'],
        skipWaiting: true,
        runtimeCaching: [
          {
            urlPattern: /.*\/[^\/]+\.(png|jpe?g|gif|webp|svg|bmp|tiff?)/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 5000,
                maxAgeSeconds: 24 * 60 * 60 * 30,
              },
            },
          },
          {
            urlPattern: /.*\/[^\/]+\.mp4/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'video-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 24 * 60 * 60 * 30 },
            },
          },
        ],
        // exclude: [/\.map$/, /@fs\//], // Exclude FS paths
        globIgnores: ['**/404.{html,astro,js,ts,css}', '**/_routes.json'],
        navigateFallback: '/',
      },
      devOptions: {
        enabled: false,
        // navigateFallbackAllowlist: [/^\//],
        navigateFallback: 'index.html',
        type: 'classic',
      },
      experimental: {
        directoryAndTrailingSlashHandler: false,
      },
    }),
  ],
  output: 'static',
  build: { inlineStylesheets: 'never' },

  redirects: {
    // "/service": "/service/all",
    // "/[...lang]/cases": "/[...lang]/cases/all/1",
    // "/[...lang]/cases/[slug]": "/[...lang]/cases/[slug]/1",
    // "/insights": "/insights/all/1",
    // "/[...lang]/insights": "/[...lang]/insights/all/1",
    // "/[...lang]/insights/[slug]": "/[...lang]/insights/[slug]/1",
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ua'],
  },

  adapter,
});
