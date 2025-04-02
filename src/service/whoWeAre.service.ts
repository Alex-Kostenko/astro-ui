import { ApiPath } from '@constant/api.path';
import type { Languages } from '@i18n/ui';
import type { MetaPagination } from '@interfaces/meta';
import type { IResponseApi } from '@interfaces/response.api';
import apiService from './api.service';
import type { IWhoWeAre } from '@interfaces/whoWeAre';

class WhoWeAreService {
  async get({
    locale,
  }: {
    locale?: Languages;
  }): Promise<IResponseApi<IWhoWeAre[], MetaPagination>> {
    return apiService.get(ApiPath.whoWeAre, {
      query: {
        populate: ['services:*', 'story:*', 'values:*'],
        locale,
      },
    });
  }
}

export default new WhoWeAreService();
