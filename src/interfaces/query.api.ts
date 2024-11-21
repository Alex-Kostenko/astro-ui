import type { IPaginationQuery } from "./pagination";

export interface QueryApi {
  populate?: (Popylate | string)[];
  pagination?: IPaginationQuery;
  locale?: "en" | "ua";
}

export interface Popylate {
  insideFields: string[];
  field: string;
}
