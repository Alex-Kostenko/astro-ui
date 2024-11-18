export interface QueryApi {
  populate?: (Popylate | string)[];
  pagination?: {
    page: number;
    pageSize: number;
    limit?: number;
  };
}

export interface Popylate {
  insideFields: string[];
  field: string;
}
