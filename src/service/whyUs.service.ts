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
import type { IWhyUs } from "@interfaces/whyUs";

class WhyUsService {
  async get({
    locale,
    pagination,
    filter,
  }: {
    pagination?: IPaginationQuery;
    locale?: Languages;
    filter?: IFilter[];
  }): Promise<IResponseApi<IWhyUs, MetaPagination>> {
    return apiService.get(ApiPath.whyUs, {
      query: {
        populate: ["items.image"],
        filter,
        pagination,
        locale,
      },
    });
  }
}

export default new WhyUsService();
