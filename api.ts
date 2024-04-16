import { API_URL } from '@env';
import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: API_URL + '/api',
});

const get = <T extends object>(
  url: string,
  config: AxiosRequestConfig<any> | undefined = undefined,
): Promise<T> => api.get(url, config);

const del = <T extends object>(
  url: string,
  config: AxiosRequestConfig<any> | undefined = undefined,
): Promise<T> => api.delete(url, config);

const post = <T extends object>(
  url: string,
  data: unknown | undefined = undefined,
  config: AxiosRequestConfig<any> | undefined = undefined,
): Promise<T> => api.post(url, data, config);

const put = <T extends object>(
  url: string,
  data: unknown | undefined = undefined,
  config: AxiosRequestConfig<any> | undefined = undefined,
): Promise<T> => api.put(url, data, config);

const patch = <T extends object>(url: string, data: unknown): Promise<T> =>
  api.patch(url, data);

export { get, del, post, put, patch };
