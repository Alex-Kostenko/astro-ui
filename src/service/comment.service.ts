import apiService from "./api.service";
import { ApiPath } from "@constant/api.path";
import type { Languages } from "@i18n/index";
import type {
  MetaPagination,
  IComment,
  IResponseApi,
  IPaginationQuery,
} from "@interfaces/index";

class CommentService {
  async get(pagination?: IPaginationQuery, locale?: Languages) {
    return apiService.get<IResponseApi<IComment[], MetaPagination>>(
      ApiPath.comment,
      {
        query: {
          pagination,
          locale,
        },
      },
    );
  }
}

export default new CommentService();
