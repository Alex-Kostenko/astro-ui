import { ApiPath } from "@constant/api.path";
import apiService from "./api.service";

class SubscribeService {
  async create(body: any) {
    return apiService.post(ApiPath.subscribeNews, { body: { data: body } });
  }
}

export default new SubscribeService();
