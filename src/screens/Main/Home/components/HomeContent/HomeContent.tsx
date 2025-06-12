import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, FlatList, View } from 'react-native';

import { AppText, PostRow } from '../../../../../components/ui';
import { useThemedStyles } from '../../../../../hooks/useThemedStyles';
import { usePostsQuery } from '../../../../../store/services/post';
import { Category } from '../../../../../types/post.types';
import { homeContainerStyles } from './styles';

interface HomeContentProps {
  category: Category;
  searchQuery: string;
}

const HomeContent: FC<HomeContentProps> = ({ category, searchQuery }) => {
  const { i18n } = useTranslation();
  const [page, setPage] = React.useState(1);
  const { t } = useTranslation('homeScreen');

  const { styles } = useThemedStyles(homeContainerStyles);

  const { isPending, data, refetch } = usePostsQuery({
    search: searchQuery,
    page,
    tags: category.key === 'all' ? [] : [category.key],
  });

  useEffect(() => {
    setPage(1);
    refetch();
  }, [searchQuery, category.key, i18n.language]);

  if (isPending) {
    return (
      <View style={styles.loading}>
        <AppText>
          <ActivityIndicator size={'large'} />
        </AppText>
      </View>
    );
  }

  return (
    <FlatList
      ListEmptyComponent={
        <View style={styles.noPostsWasFoundContainer}>
          <AppText style={styles.noPostsWasFoundText}>
            {t('noPostsWasFound')}
          </AppText>
        </View>
      }
      keyboardShouldPersistTaps="always"
      contentContainerStyle={[
        styles.container,
        data?.data?.length === 0 && styles.emptyContainer,
      ]}
      data={data?.data || []}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PostRow data={item} />}
    />
  );
};

export default HomeContent;
