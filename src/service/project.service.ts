import type {
  IPaginationQuery,
  IProject,
  IResponseApi,
  MetaPagination,
} from "@interfaces/index";
import apiService from "./api.service";
import { ApiPath } from "@constant/api.path";
import type { Languages } from "@i18n/index";

class ProjectService {
  async get(
    pagination?: IPaginationQuery,
    locale?: Languages,
  ): Promise<IResponseApi<IProject[], MetaPagination>> {
    return apiService.get(ApiPath.project, {
      query: {
        populate: [
          { field: "image", insideFields: ["id", "formats", "url"] },
          "technologies",
        ],
        pagination,
        locale,
      },
    });
  }
}

export default new ProjectService();
