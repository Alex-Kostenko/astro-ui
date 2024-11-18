import type {
  IProject,
  IResponseApi,
  MetaPagination,
  QueryApi,
} from "@interfaces/index";
import apiService from "./api.service";
import { ApiPath } from "@constant/api.path";

class ProjectService {
  async get(
    query: QueryApi,
  ): Promise<IResponseApi<IProject[], MetaPagination>> {
    return apiService.get(ApiPath.project, { query });
  }
}

export default new ProjectService();
