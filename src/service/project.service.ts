import type {
  IPaginationQuery,
  IProject,
  IResponseApi,
  MetaPagination,
  QueryApi,
} from "@interfaces/index";
import apiService from "./api.service";
import { ApiPath } from "@constant/api.path";

class ProjectService {
  async get(
    pagination?: IPaginationQuery,
  ): Promise<IResponseApi<IProject[], MetaPagination>> {
    return apiService.get(ApiPath.project, {
      query: {
        populate: [
          { field: "image", insideFields: ["id", "formats", "url"] },
          "technologies",
        ],
        pagination,
      },
    });
  }
}

export default new ProjectService();
