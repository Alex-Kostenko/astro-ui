import type { Languages } from "@i18n/ui";
import type { MetaPagination } from "@interfaces/meta";
import type { IPaginationQuery } from "@interfaces/pagination";
import type { IFilter } from "@interfaces/query.api";
import type { IResponseApi } from "@interfaces/response.api";
import type { IVacancy, IVacancyWithInfo } from "@interfaces/vacancy";
import apiService from "./api.service";
import { ApiPath } from "@constant/api.path";

class VacancyService {
  async get({
    locale,
    pagination,
    filter,
  }: {
    pagination?: IPaginationQuery;
    locale?: Languages;
    filter?: IFilter[];
  }): Promise<IResponseApi<IVacancy[], MetaPagination>> {
    return apiService.get(ApiPath.vacancy, {
      query: {
        populate: [
          { field: "skills", insideFields: ["*"] },
          { field: "schedule", insideFields: ["*"] },
        ],
        filter,
        pagination,
        locale,
      },
    });
  }

  async getWithInfo({
    locale,
    pagination,
    filter,
  }: {
    pagination?: IPaginationQuery;
    locale?: Languages;
    filter?: IFilter[];
  }): Promise<IResponseApi<IVacancyWithInfo[], MetaPagination>> {
    return apiService.get(ApiPath.vacancy, {
      query: {
        populate: [
          { field: "skills", insideFields: ["*"] },
          { field: "schedule", insideFields: ["*"] },
          "description:items",
          "recruiter",
        ],
        filter,
        pagination,
        locale,
      },
    });
  }
}

export default new VacancyService();
