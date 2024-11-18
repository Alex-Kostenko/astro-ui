export interface IResponseApi<R = {}, M = {}> {
  data: R;
  meta: M;
}
