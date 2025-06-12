import { AxiosError } from 'axios';

export interface ServerErrors {
  [key: string]: string[];
}

export interface Pagination {
  locale: 'en';
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

export type ApiServiceErr = AxiosError<{
  errors?: ServerErrors;
  message?: string;
}>;

export interface DataType<T> {
  data: T;
}

export interface MetaType<T> {
  meta: T;
}

export type DataAndMeta<T, K> = DataType<T> & MetaType<K>;
