import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';

import { getTags } from '../../api/tags';
import { ApiServiceErr, DataType } from '../../types/api.types';
import { Tag } from '../../types/tags.types';
import { QUERY_KEY } from '../keys';

export const useTagsQuery = () => {
  const { i18n } = useTranslation();
  return useQuery<DataType<Tag[]>, ApiServiceErr>({
    queryKey: [QUERY_KEY.post.tags, i18n.language],
    queryFn: getTags,
  });
};
