import type {
  IFilter,
  IPaginationQuery,
  IProject,
  IProjectDomain,
  IResponseApi,
  MetaPagination,
} from "@interfaces/index";
import apiService from "./api.service";
import { ApiPath } from "@constant/api.path";
import type { Languages } from "@i18n/index";
import type { IService, IServicePreview } from "@interfaces/service";

class ProjectService {
  async get({
    locale,
    pagination,
    filter,
  }: {
    pagination?: IPaginationQuery;
    locale?: Languages;
    filter?: IFilter[];
  }): Promise<IResponseApi<IProject[], MetaPagination>> {
    return apiService.get(ApiPath.project, {
      query: {
        populate: [
          { field: "image", insideFields: ["id", "formats", "url"] },
          { field: "technologies", insideFields: ["*"] },
          { field: "services", insideFields: ["*"] },
        ],
        filter,
        pagination,
        locale,
      },
    });
  }

  async getService({
    locale,
    filter,
  }: { locale?: Languages; filter?: IFilter[] } = {}): Promise<
    IResponseApi<IService[], MetaPagination>
  > {
    return apiService.get(ApiPath.service, {
      query: {
        pagination: {
          limit: "max",
        },
        populate: ["features:*", "steps:items.image", "preview"],
        filter,
        locale,
      },
    });
  }

  async getServicePreview({
    locale,
    filter,
  }: { locale?: Languages; filter?: IFilter[] } = {}): Promise<
    IResponseApi<IServicePreview[], MetaPagination>
  > {
    return apiService.get(ApiPath.service, {
      query: {
        pagination: {
          limit: "max",
        },
        populate: ["preview"],
        filter,
        locale,
      },
    });
  }
}

export default new ProjectService();
