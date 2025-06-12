import { useTranslation } from 'react-i18next';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { getPostDetails, getPosts, GetPostsParams } from '../../api/post';
import { ApiServiceErr, DataAndMeta, Pagination } from '../../types/api.types';
import { Post, PostWithContent } from '../../types/post.types';
import { QUERY_KEY } from '../keys';

export const usePostsQuery = (params?: GetPostsParams) => {
  const { i18n } = useTranslation();
  return useQuery<DataAndMeta<Post[], Pagination>, ApiServiceErr>({
    queryKey: [QUERY_KEY.post.list, params?.page, params?.tags, i18n.language],
    queryFn: () => getPosts(params),
    placeholderData: keepPreviousData,
  });
};

export const usePostDetails = (id: string) => {
  const { i18n } = useTranslation();
  return useQuery<PostWithContent, ApiServiceErr>({
    queryKey: [QUERY_KEY.post.details, id, i18n.language],
    queryFn: () => getPostDetails(id),
    enabled: !!id,
  });
};
