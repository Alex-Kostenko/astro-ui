/// <reference path="vite-plugin-pwa/client" />
/// <reference path="vite-plugin-pwa/index" />
/// <reference path="vite-plugin-pwa/info" />
/// <reference path="vite-plugin-pwa/vanillajs" />

declare module "virtual:pwa-register" {
  import type { RegisterSWOptions } from "vite-plugin-pwa/types";

  export type { RegisterSWOptions };

  export function registerSW(
    options?: RegisterSWOptions,
  ): (reloadPage?: boolean) => Promise<void>;
}
