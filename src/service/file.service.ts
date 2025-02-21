import { ApiPath } from "@constant/api.path";
import apiService from "./api.service";
import type { IImage, IUploadBody } from "@interfaces/index";

class FileService {
  async upload(body: IUploadBody): Promise<IImage[]> {
    const form = new FormData();

    form.append("path", body.path);

    form.append("field", body.field || "");

    if (Array.isArray(body.files)) {
      body.files.forEach((file) => {
        form.append("files", file);
      });
    } else {
      form.append("files", body.files);
    }

    console.log(Array.from(form.entries()));

    return apiService.postData(ApiPath.upload, {
      body: form,
    });
  }

  delete(id: string) {
    return apiService.delete(`${ApiPath.upload}/files/${id}`);
  }
}

export default new FileService();
