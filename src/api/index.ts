import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';

import i18n from '../i18n';

const client = (config?: AxiosRequestConfig): AxiosInstance => {
  const httpClient = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    ...config,
  });

  httpClient.interceptors.request.use(
    async (request) => {
      const currentLanguage = i18n.language;

      if (request.method?.toLowerCase() === 'get') {
        request.params = {
          ...request.params,
          lang: currentLanguage,
          t: Date.now(),
        };
      }

      request.headers['Accept-Language'] = currentLanguage;
      console.log(
        `Request [${currentLanguage}] -`,
        new Date().toLocaleTimeString(),
        JSON.stringify(request, null, 2),
      );
      return request;
    },
    (response) => {
      console.error(JSON.stringify(response, null, 2));
      return Promise.reject(response);
    },
  );
  httpClient.interceptors.response.use(
    async (response) => {
      return response;
    },
    (response) => {
      console.error('ERROR: ' + JSON.stringify(response, null, 2));
      return Promise.reject(response);
    },
  );

  return httpClient;
};

const api = client();

export default api;
