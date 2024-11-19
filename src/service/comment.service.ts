import apiService from "./api.service";
import { ApiPath } from "@constant/api.path";
import type {
  MetaPagination,
  IComment,
  IResponseApi,
  IPaginationQuery,
} from "@interfaces/index";

class CommentService {
  async get(pagination?: IPaginationQuery) {
    return apiService.get<IResponseApi<IComment, MetaPagination>>(
      ApiPath.comment,
      {
        query: {
          pagination,
        },
      },
    );
  }
}

export default new CommentService();
