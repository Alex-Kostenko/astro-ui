import type {
  IFilter,
  IPaginationQuery,
  IResponseApi,
  MetaPagination,
} from "@interfaces/index";
import apiService from "./api.service";
import { ApiPath } from "@constant/api.path";
import type { Languages } from "@i18n/index";
import type { IInsight, IInsightCategory } from "@interfaces/insight";

class InsightService {
  async get({
    locale,
    pagination,
    filter,
  }: {
    pagination?: IPaginationQuery;
    locale?: Languages;
    filter?: IFilter[];
  }): Promise<IResponseApi<IInsight[], MetaPagination>> {
    return apiService.get(ApiPath.insight, {
      query: {
        populate: [
          { field: "image", insideFields: ["id", "formats", "url"] },
          { field: "technologies", insideFields: ["*"] },
          { field: "insight_category", insideFields: ["*"] },
        ],
        filter,
        pagination,
        locale,
      },
    });
  }

  async getCategory({
    locale,
    filter,
  }: { locale?: Languages; filter?: IFilter[] } = {}): Promise<
    IResponseApi<IInsightCategory[], MetaPagination>
  > {
    return apiService.get(ApiPath.insightCategory, {
      query: {
        pagination: {
          limit: "max",
        },
        filter,
        locale,
      },
    });
  }
}

export default new InsightService();
