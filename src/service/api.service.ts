import type { ApiPath } from '@constant/index';
import type {
  IFilter,
  IPaginationQuery,
  Popylate,
  QueryApi,
} from '@interfaces/index';

class ApiService {
  apiUrl = import.meta.env.PUBLIC_API_URL;
  apiKey = import.meta.env.PIRIVATE_CMS_KEY || import.meta.env.PUBLIC_CMS_KEY;

  async requst(
    path: string,
    method: 'POST' | 'GET' | 'PUT' | 'DELETE',
    init: {
      body?: any;
      headers?: any;
    },
  ): Promise<Response> {
    const headers = {
      Authorization: `Bearer ${this.apiKey}`,
      ...init.headers,
    };

    const res = await fetch(this.apiUrl + path, {
      method: method,
      headers,
      body: init.body,
    });

    if (!res.ok) {
      const data = await res.json();
      console.log(data);
      throw new Error(
        `API request failed ${path} : ${res.status} ${res.statusText} \n${data}`,
      );
    }
    return res;
  }

  async post<T>(
    path: string | ApiPath,
    init: {
      body: any;
      headers?: any;
    },
  ): Promise<T> {
    const res = await this.requst(path, 'POST', {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...init.headers,
      },
      body: JSON.stringify(init.body),
    });

    return await res.json();
  }

  async postData<T>(
    path: string | ApiPath,
    init: {
      body: FormData;
      headers?: any;
    },
  ): Promise<T> {
    const res = await this.requst(path, 'POST', {
      ...init,
      headers: {
        // "Content-Type": "multipart/form-data",
      },
      body: init.body,
    });

    return await res.json();
  }

  async get<T>(
    path: string | ApiPath,
    init: {
      headers?: any;
      query?: QueryApi;
    } = {},
  ): Promise<T> {
    const query = convertToQueryString(init.query);
    const res = await this.requst(path + query, 'GET', init);

    return await res.json();
  }

  async delete<T>(
    path: string | ApiPath,
    init: {
      headers?: any;
    } = {},
  ): Promise<T> {
    const res = await this.requst(path, 'DELETE', {
      ...init,
    });

    return await res.json();
  }
}

function convertToQueryString(params?: QueryApi): string {
  if (!params) return '';

  const popylate = convertPopylate(params.populate);
  const pagination = convertPagination(params.pagination);
  const filter = convertFilter(params.filter);
  const locale = params.locale ? `locale=${params.locale}` : '';

  const query = [popylate, pagination, filter, locale]
    .filter(Boolean)
    .join('&');

  return query ? `?${query}` : '';
}

function convertPopylate(
  popylate?: (Popylate | string | `${string}:${string}`)[],
) {
  if (!popylate) return '';

  return popylate
    .map((v) => {
      if (typeof v === 'string') {
        if (v.includes(':')) {
          const [field, populate] = v.split(':');
          return `populate[${field}][populate]=${populate}`;
        } else {
          return `populate=${v}`;
        }
      }
      if (typeof v === 'object')
        return `populate[${v.field}][fields]=${v.insideFields.join(',')}`;
    })
    .join('&');
}

function convertPagination(pagination?: IPaginationQuery) {
  if (!pagination) return '';

  return Object.keys(pagination)
    .map((v) => `pagination[${v}]=${pagination[v as keyof IPaginationQuery]}`)
    .join('&');
}

function convertFilter(filters?: IFilter[]) {
  if (!filters) return '';

  return filters
    .map((filter) => {
      const fields = filter.fields.map((v) => `[${v}]`).join('');
      return `filters${fields}=${filter.value}`;
    })
    .join('&');
}

export default new ApiService();
