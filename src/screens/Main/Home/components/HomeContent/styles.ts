import { StyleSheet } from 'react-native';
import type { EdgeInsets } from 'react-native-safe-area-context/src/SafeArea.types';
import { moderateScale } from 'react-native-size-matters';

import { AppTheme } from '../../../../../theme/interfaces';

export const homeContainerStyles = (theme: AppTheme, { bottom }: EdgeInsets) =>
  StyleSheet.create({
    container: {
      paddingTop: moderateScale(4),
      rowGap: moderateScale(8),
      paddingBottom: bottom + theme.sizes.paddingVertical,
    },
    emptyContainer: {
      flex: 1,
    },
    loading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    noPostsWasFoundContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: theme.sizes.paddingHorizontal,
    },
    noPostsWasFoundText: {
      textAlign: 'center',
      fontSize: moderateScale(18),
      ...theme.fonts.bold,
    },
  });
