import type { IPaginationQuery } from "./pagination";

export interface QueryApi {
  populate?: (Popylate | string)[];
  pagination?: IPaginationQuery;
}

export interface Popylate {
  insideFields: string[];
  field: string;
}
