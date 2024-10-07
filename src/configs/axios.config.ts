import { baseURL } from '@/constants/baseUrls';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

instance.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

instance.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error) => Promise.reject(error)
);

export const GET = async <T extends object = object>(
  url: string,
  config: AxiosRequestConfig = {}
): Promise<T> => {
  return instance.get(url, { ...config }).then((res) => res.data);
};

export const POST = async <T extends object = object>(
  url: string,
  data: object = {},
  config: AxiosRequestConfig = {}
) => {
  return instance.post<T>(url, data, { ...config }).then((res) => res.data);
};

export const PATCH = async <T extends object = object>(
  url: string,
  data: object = {},
  config: AxiosRequestConfig = {}
) => {
  return instance.patch<T>(url, data, { ...config }).then((res) => res.data);
};

export const DELETE = async <T extends object = object>(
  url: string,
  config: AxiosRequestConfig = {}
) => {
  return instance.delete<T>(url, { ...config }).then((res) => res.data);
};
