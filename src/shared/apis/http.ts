import type { AxiosRequestConfig } from 'axios';
import { apiInstance } from './axios';

export const http = {
  get: async <TData>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<TData> => {
    const response = await apiInstance.get<TData>(url, config);
    return response.data;
  },

  post: async <TData, TBody = unknown>(
    url: string,
    data?: TBody,
    config?: AxiosRequestConfig,
  ): Promise<TData> => {
    const response = await apiInstance.post<TData>(url, data, config);
    return response.data;
  },

  delete: async <TData, TBody = unknown>(
    url: string,
    data?: TBody,
    config?: AxiosRequestConfig,
  ): Promise<TData> => {
    const response = await apiInstance.delete<TData>(url, { data, ...config });
    return response.data;
  },
};
