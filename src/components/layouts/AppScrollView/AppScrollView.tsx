import type { LegacyRef } from 'react';
import React from 'react';
import type { ScrollViewProps } from 'react-native';
import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useThemedStyles } from '../../../hooks/useThemedStyles';
import { appScrollViewStyles } from './styles';

const AppScrollView: React.FC<
  ScrollViewProps & {
    scrollViewRef?: LegacyRef<ScrollView> | any;
    container?: boolean;
  }
> = ({
  scrollViewRef,
  container = true,
  contentContainerStyle,
  ...restProps
}) => {
  const { styles, theme } = useThemedStyles(appScrollViewStyles);
  const { bottom } = useSafeAreaInsets();
  const maintainPosition = {
    minIndexForVisible: 0,
    autoscrollToTopThreshold: 100,
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      keyboardDismissMode="interactive"
      contentInsetAdjustmentBehavior="never"
      maintainVisibleContentPosition={maintainPosition}
      ref={scrollViewRef}
      automaticallyAdjustKeyboardInsets
      contentContainerStyle={[
        container && [
          styles.container,
          { paddingBottom: theme.sizes.paddingVertical + bottom },
        ],
        contentContainerStyle,
      ]}
      {...restProps}
    />
  );
};

export default AppScrollView;
