import { DataType } from '../types/api.types';
import { Tag } from '../types/tags.types';
import api from './index';

export const getTags = async (): Promise<DataType<Tag[]>> => {
  const response = await api.get<DataType<Tag[]>>(`/tags`);
  return response.data;
};
