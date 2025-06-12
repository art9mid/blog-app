import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons';
import * as Application from 'expo-application';

import { AppText } from '../../../components/ui';
import BaseNavigationHeader from '../../../components/ui/BaseNavigationHeader/BaseNavigationHeader';
import MenuListItem from '../../../components/ui/MenuListItem/MenuListItem';
import { useDynamicNavigation } from '../../../hooks/useAppNavigation';
import { useThemedStyles } from '../../../hooks/useThemedStyles';
import { settingsScreenStyles } from './styles';

const Settings = () => {
  const navigation = useDynamicNavigation();
  const { styles, theme } = useThemedStyles(settingsScreenStyles);
  const { t } = useTranslation('settingsScreen');

  return (
    <>
      <BaseNavigationHeader showCloseIcon title={t('headerTitle')} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <MenuListItem
          onPress={() => {
            navigation.navigate('HomeStack', {
              screen: 'LanguageScreen',
            });
          }}
          icon={
            <Ionicons
              color={theme.colors.textColours.text10}
              name={'language'}
              size={moderateScale(24)}
            />
          }
        >
          {t('language')}
        </MenuListItem>
        <MenuListItem
          onPress={() => {
            navigation.navigate('HomeStack', {
              screen: 'WebViewScreen',
              params: {
                headerTitle: 'Privacy policy',
                url: 'https://www.freeprivacypolicy.com/live/42b66d12-45d6-4386-be41-4abc862b5a7b',
              },
            });
          }}
          icon={
            <Ionicons
              color={theme.colors.textColours.text10}
              name={'document-text-outline'}
              size={moderateScale(24)}
            />
          }
        >
          {t('privacyPolicy')}
        </MenuListItem>
        <AppText style={styles.versionText}>
          {t('version')} {Application.nativeApplicationVersion} (
          {Application.nativeBuildVersion})
        </AppText>
      </ScrollView>
    </>
  );
};

export default Settings;
