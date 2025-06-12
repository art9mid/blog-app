import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native';
import { useQueryClient } from '@tanstack/react-query';
import dayjs from 'dayjs';

import EnLanguageFlagIcon from '../../../components/icons/EnLanguageFlagIcon';
import UkLanguageFlagIcon from '../../../components/icons/UkLanguageFlagIcon';
import { CheckedMenuListItem, ScreenLoading } from '../../../components/ui';
import BaseNavigationHeader from '../../../components/ui/BaseNavigationHeader/BaseNavigationHeader';
import { useDynamicNavigation } from '../../../hooks/useAppNavigation';
import { useThemedStyles } from '../../../hooks/useThemedStyles';
import { LanguageType } from '../../../i18n';
import { QUERY_KEY } from '../../../store/keys';
import { clientStorage } from '../../../store/services';
import { settingsScreenStyles } from './styles';

const Language = () => {
  const { styles } = useThemedStyles(settingsScreenStyles);
  const { i18n, t } = useTranslation('languageScreen');
  const currentLanguage = i18n.language as LanguageType;
  const queryClient = useQueryClient();
  const navigation = useDynamicNavigation();
  const [loading, setLoading] = useState(false);

  const changeLanguage = async (lang: LanguageType) => {
    setLoading(true);
    clientStorage.setItem(QUERY_KEY.storage.appLanguage, lang);
    dayjs.locale(lang);
    await i18n.changeLanguage(lang);
    await queryClient.invalidateQueries({
      exact: false,
      predicate: (query) =>
        query.queryKey.includes(QUERY_KEY.post.list) ||
        query.queryKey.includes(QUERY_KEY.post.tags),
    });
    navigation.replace('HomeStack', {
      screen: 'HomeScreen',
    });
    setLoading(false);
  };

  return (
    <>
      <BaseNavigationHeader showCloseIcon title={t('headerTitle')} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <CheckedMenuListItem
          onPress={() => {
            changeLanguage('en');
          }}
          checked={currentLanguage === 'en'}
          icon={<EnLanguageFlagIcon />}
        >
          English
        </CheckedMenuListItem>
        <CheckedMenuListItem
          onPress={() => {
            changeLanguage('uk');
          }}
          checked={currentLanguage === 'uk'}
          icon={<UkLanguageFlagIcon />}
        >
          Український
        </CheckedMenuListItem>
      </ScrollView>
      {loading && <ScreenLoading />}
    </>
  );
};

export default Language;
