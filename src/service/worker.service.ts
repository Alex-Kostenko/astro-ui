import type {
  IFilter,
  IPaginationQuery,
  IResponseApi,
  MetaPagination,
} from "@interfaces/index";
import apiService from "./api.service";
import { ApiPath } from "@constant/api.path";
import type { Languages } from "@i18n/index";
import type { IWorker } from "@interfaces/worker";

class WorkerService {
  async get({
    locale,
    pagination,
    filter,
  }: {
    pagination?: IPaginationQuery;
    locale?: Languages;
    filter?: IFilter[];
  }): Promise<IResponseApi<IWorker[], MetaPagination>> {
    return apiService.get(ApiPath.worker, {
      query: {
        populate: [
          { field: "image", insideFields: ["id", "formats", "url"] }, // TODO: test query
          "stack",
        ],
        filter,
        pagination,
        locale,
      },
    });
  }
}

export default new WorkerService();
