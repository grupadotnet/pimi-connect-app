import { get } from 'api';
import { AxiosResponse } from 'axios';

export const getExample = () => get<AxiosResponse<string>>('/');
