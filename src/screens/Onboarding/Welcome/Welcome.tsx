import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { AppButton, AppImage, AppText } from '../../../components/ui';
import { COMPANY_NAME, welcomeImages } from '../../../constants';
import { useDynamicNavigation } from '../../../hooks/useAppNavigation';
import { useThemedStyles } from '../../../hooks/useThemedStyles';
import { QUERY_KEY } from '../../../store/keys';
import { clientStorage } from '../../../store/services';
import { welcomeAuthStyles } from './styles';

const Welcome = () => {
  const { t } = useTranslation('welcomeScreen');
  const { styles, theme } = useThemedStyles(welcomeAuthStyles);
  const navigation = useDynamicNavigation();

  const handleNavigateToHomeScreen = () => {
    clientStorage.setItem(QUERY_KEY.storage.isOnboardingCompleted, 'true');
    navigation.replace('HomeStack', {
      screen: 'HomeScreen',
    });
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <View style={styles.galleryContainer}>
        {welcomeImages.map((item, index) => (
          <View
            key={item.id}
            style={[
              styles.pictureContainer,
              index % 2 === 0 ? styles.first : styles.second,
            ]}
          >
            <AppImage
              source={item.image}
              style={styles.picture}
              contentFit="cover"
            />
            <View style={styles.captionContainer}>
              <AppText style={styles.captionText}>{t(item.caption)}</AppText>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.contentContainer}>
        <LinearGradient
          colors={['transparent', theme.colors.background]}
          style={styles.linearGradient}
        />
        <SafeAreaView edges={['bottom']} style={styles.content}>
          <AppText style={styles.title}>{t('title')}</AppText>
          <AppText style={styles.subtitle}>
            {t('description')} {COMPANY_NAME}.
          </AppText>

          <View style={styles.buttonContainer}>
            <AppButton
              onPress={handleNavigateToHomeScreen}
              style={styles.button}
              size={'large'}
            >
              <Feather
                name="arrow-right"
                size={moderateScale(24)}
                color={theme.colors.textColours.text10}
              />
            </AppButton>
          </View>
        </SafeAreaView>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
