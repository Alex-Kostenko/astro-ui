import type { IPaginationQuery } from "./pagination";

export interface QueryApi {
  populate?: (Popylate | string)[];
  filter?: IFilter[];
  pagination?: IPaginationQuery;
  locale?: "en" | "ua";
}

export interface Popylate {
  insideFields: string[];
  field: string;
}

export interface IFilter {
  fields: string[];
  value: string | number;
}
