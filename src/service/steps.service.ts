import apiService from "./api.service";
import { ApiPath } from "@constant/api.path";
import type { Languages } from "@i18n/index";
import type { IStep, IResponseApi } from "@interfaces/index";

class StepsService {
  async get({
    locale,
  }: {
    locale?: Languages;
  } = {}) {
    return apiService.get<IResponseApi<IStep[]>>(ApiPath.step, {
      query: {
        locale,
      },
    });
  }
}

export default new StepsService();
