import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { AppTheme } from '../../../theme/interfaces';

export const homeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    topContent: {
      paddingTop: theme.sizes.paddingVertical,
      paddingHorizontal: theme.sizes.paddingHorizontal,
    },
    tabs: {
      flexDirection: 'row',
      maxHeight: moderateScale(54),
    },
    tabsContainer: {
      alignItems: 'center',
      paddingHorizontal: theme.sizes.paddingHorizontal,
      gap: moderateScale(8),
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
