import { ApiPath } from '@constant/api.path';
import type { Languages } from '@i18n/ui';
import type { MetaPagination } from '@interfaces/meta';
import type { IPaginationQuery } from '@interfaces/pagination';
import type { IFilter } from '@interfaces/query.api';
import type { IResponseApi } from '@interfaces/response.api';
import apiService from './api.service';
import type { IPartner } from '@interfaces/partner';

class PartnerService {
  async get({
    locale,
    pagination,
    filter,
  }: {
    pagination?: IPaginationQuery;
    locale?: Languages;
    filter?: IFilter[];
  }): Promise<IResponseApi<IPartner[], MetaPagination>> {
    return apiService.get(ApiPath.partner, {
      query: {
        populate: [{ field: 'image', insideFields: ['id', 'formats', 'url'] }],
        filter,
        pagination,
        locale,
      },
    });
  }
}

export default new PartnerService();
