export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface IPaginationQuery {
  page: number;
  pageSize: number;
  limit?: number;
}
