import { DataAndMeta, DataType, Pagination } from '../types/api.types';
import { Post, PostWithContent } from '../types/post.types';
import api from './index';

export type GetPostsParams = {
  page?: number | any;
  limit?: number;
  tags?: string[];
  search?: string;
};

export const getPosts = async (
  params?: GetPostsParams,
): Promise<DataAndMeta<Post[], Pagination>> => {
  const postsParams = new URLSearchParams();

  if (params?.page) {
    postsParams.set('page', params?.page?.toString());
  }
  if (params?.limit) {
    postsParams.set('limit', params?.limit?.toString());
  }
  if (params?.tags?.length) {
    postsParams.set('tags', params?.tags?.join(','));
  }
  if (params?.search) {
    postsParams.set('search', params?.search);
  }

  const response = await api.get<DataAndMeta<Post[], Pagination>>(
    `/posts?${postsParams}`,
  );
  return response.data;
};

export const getPostDetails = async (id: string): Promise<PostWithContent> => {
  const response = await api.get<DataType<PostWithContent>>(`/posts/${id}`);
  return response.data.data;
};
