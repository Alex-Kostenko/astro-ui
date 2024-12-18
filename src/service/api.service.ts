import type { ApiPath } from "@constant/index";
import type { Popylate, QueryApi } from "@interfaces/index";

class ApiService {
  apiUrl = import.meta.env.PUBLIC_API_URL;
  apiKey = import.meta.env.PUBLIC_CMS_KEY;

  async requst(
    path: string,
    method: "POST" | "GET" | "PUT" | "DELETE",
    init: {
      body?: any;
      headers?: any;
    },
  ): Promise<Response> {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.apiKey}`,
      ...init.headers,
    };

    const res = await fetch(this.apiUrl + path, {
      method: method,
      headers,
      body: init.body,
    });

    if (!res.ok) {
      throw new Error(
        `API request failed ${path} : ${res.status} ${res.statusText}`,
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
    const res = await this.requst(path, "POST", {
      ...init,
      body: JSON.stringify(init.body),
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
    const res = await this.requst(path + query, "GET", init);

    return await res.json();
  }
}

function convertToQueryString(params?: QueryApi): string {
  if (!params) return "";

  const popylate = convertPopylate(params.populate);
  console.log("popylate: ", popylate);

  const query = popylate;
  return query ? `?${query}` : "";
}

function convertPopylate(popylate?: (Popylate | string)[]) {
  if (!popylate) return "";

  return popylate
    .map((v) => {
      if (typeof v === "string") return `populate=${v}`;
      if (typeof v === "object")
        return `populate[${v.field}][fields]=${v.insideFields.join(",")}`;
    })
    .join("&");
}

export default new ApiService();
