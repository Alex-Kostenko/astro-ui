import type { IContactUsBody } from "@interfaces/index";
import apiService from "./api.service";
import { ApiPath } from "@constant/api.path";

class ContactUs {
  async create(body: IContactUsBody) {
    return apiService.post(ApiPath.contactUs, { body: { data: body } });
  }
}

export default new ContactUs();
