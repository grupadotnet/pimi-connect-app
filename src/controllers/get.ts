import api from 'api';
import { AxiosRequestConfig } from 'axios';

export const get =
  (config: AxiosRequestConfig<any> | undefined) => (url: string) =>
    api.get('http://localhost:5096/api' + url, config);
