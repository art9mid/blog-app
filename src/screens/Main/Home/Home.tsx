import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ActivityIndicator,
  ScrollView,
  useWindowDimensions,
  View,
} from 'react-native';
import { TabView } from 'react-native-tab-view';
import { useDebouncedCallback } from 'use-debounce';

import SearchTextInput from '../../../components/ui/SearchTextInput/SearchTextInput';
import { useThemedStyles } from '../../../hooks/useThemedStyles';
import { useAppInitialization } from '../../../providers/AppInitializationProvider/AppInitializationProvider';
import { useTagsQuery } from '../../../store/services/tags';
import CategoryTab from './components/CategoryTab/CategoryTab';
import HomeContent from './components/HomeContent/HomeContent';
import HomeHeader from './components/HomeHeader/HomeHeader';
import { homeStyles } from './styles';

const Home = () => {
  const { t, i18n } = useTranslation('homeScreen');
  const { styles } = useThemedStyles(homeStyles);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const { isAppReady } = useAppInitialization();
  const { data: tags } = useTagsQuery();

  const handleSearch = useDebouncedCallback((value: string) => {
    setDebouncedSearch(value);
  }, 500);

  const routes = useMemo(() => {
    if (!tags) {
      return [];
    }
    return tags.data.map((category) => ({
      key: category.key,
      title: category.label,
      category: category,
    }));
  }, [tags]);

  if (!isAppReady) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <>
      <HomeHeader />
      <View style={styles.topContent}>
        <SearchTextInput
          placeholder={t('searchInputPlaceholder')}
          value={search}
          onChangeText={(value) => {
            setSearch(value);
            handleSearch(value);
          }}
        />
      </View>
      <TabView
        renderTabBar={() => (
          <ScrollView
            keyboardShouldPersistTaps="always"
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={styles.tabsContainer}
            style={styles.tabs}
          >
            {tags?.data?.map((category, i) => (
              <CategoryTab
                title={category.label}
                key={category.key}
                onPress={() => setIndex(i)}
                active={i === index}
              />
            ))}
          </ScrollView>
        )}
        navigationState={{ index, routes }}
        //TODO: replace type any
        renderScene={({ route }: any) => {
          return (
            <HomeContent
              key={route.category + route.id}
              category={route.category}
              searchQuery={debouncedSearch}
            />
          );
        }}
        lazy
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </>
  );
};

export default Home;
