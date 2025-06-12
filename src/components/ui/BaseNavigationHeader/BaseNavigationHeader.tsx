import React from 'react';
import { StatusBarStyle, StyleProp, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';
import { Feather } from '@expo/vector-icons';

import { useDynamicNavigation } from '../../../hooks/useAppNavigation';
import { useThemedStyles } from '../../../hooks/useThemedStyles';
import { AppButton, AppText } from '../index';
import { baseNavigationHeaderStyles } from './styles';

interface BaseNavigationHeaderProps {
  title?: string;
  showCloseIcon?: boolean;
  closeIconType?: 'chevron' | 'x';
  contentContainerStyle?: StyleProp<ViewStyle>;
  onClose?: () => void;
  statusBarTheme?: null | StatusBarStyle | undefined;
  RightContent?: React.ReactNode;
}

const BaseNavigationHeader: React.FC<BaseNavigationHeaderProps> = ({
  title,
  showCloseIcon = false,
  closeIconType = 'chevron',
  contentContainerStyle,
  onClose,
  RightContent,
}) => {
  const navigation = useDynamicNavigation();
  const { styles, theme } = useThemedStyles(baseNavigationHeaderStyles);

  return (
    <>
      <SafeAreaView
        edges={['top']}
        style={[styles.container, contentContainerStyle]}
      >
        <View style={styles.header}>
          <View>
            {showCloseIcon && (
              <AppButton
                hitSlop={moderateScale(12)}
                size={'small'}
                skin={'grey'}
                onPress={onClose || navigation.goBack}
                style={styles.headerButton}
              >
                {closeIconType === 'chevron' && (
                  <Feather
                    name={'chevron-left'}
                    size={moderateScale(24)}
                    color={theme.colors.textColours.text10}
                  />
                )}
                {closeIconType === 'x' && (
                  <Feather
                    name={'x'}
                    size={moderateScale(24)}
                    color={theme.colors.textColours.text10}
                  />
                )}
              </AppButton>
            )}
          </View>
          <View style={styles.titleContainer}>
            <AppText numberOfLines={1} style={styles.title}>
              {title}
            </AppText>
          </View>
          {RightContent ? RightContent : <View />}
        </View>
      </SafeAreaView>
    </>
  );
};

export default BaseNavigationHeader;
