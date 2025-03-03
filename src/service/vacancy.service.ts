import type { Languages } from "@i18n/ui";
import apiService from "./api.service";
import { ApiPath } from "@constant/api.path";
import type {
  IContactUsBody,
  MetaPagination,
  IPaginationQuery,
  IFilter,
  IResponseApi,
  IVacancy,
  IVacancyWithInfo,
} from "@interfaces/index";

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
          { field: "image", insideFields: ["id", "formats", "url"] },
          { field: "skills", insideFields: ["*"] },
          { field: "workType", insideFields: ["*"] },
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
          { field: "image", insideFields: ["id", "formats", "url"] },
          { field: "skills", insideFields: ["*"] },
          { field: "workType", insideFields: ["*"] },
          "description:items",
          "recruiter:photo",
        ],
        filter,
        pagination,
        locale,
      },
    });
  }

  async create(body: IContactUsBody) {
    return apiService.post(ApiPath.vacancyReplay, { body: { data: body } });
  }
}

export default new VacancyService();
