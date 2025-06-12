import { StyleSheet } from 'react-native';
import type { EdgeInsets } from 'react-native-safe-area-context/src/SafeArea.types';
import { moderateScale } from 'react-native-size-matters';

import { AppTheme } from '../../../../../theme/interfaces';

export const homeHeaderStyles = (theme: AppTheme, { top }: EdgeInsets) =>
  StyleSheet.create({
    container: {
      paddingTop: top,
    },
    header: {
      height: theme.sizes.navigationHeaderHeight,
      flexDirection: 'row',
      paddingHorizontal: theme.sizes.paddingHorizontal,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    left: {
      borderLeftWidth: moderateScale(3),
      paddingLeft: moderateScale(10),
      borderLeftColor: theme.colors.accent.brand,
    },
    right: {
      flexDirection: 'row',
      gap: moderateScale(8),
    },
    qrButton: {
      width: moderateScale(40),
      height: moderateScale(40),
      paddingHorizontal: 0,
    },
  });
