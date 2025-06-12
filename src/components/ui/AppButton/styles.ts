import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { AppTheme } from '../../../theme/interfaces';

export const appButtonStyles = (theme: AppTheme) =>
  StyleSheet.create({
    button: {
      backgroundColor: theme.colors.accent.brand,
      paddingHorizontal: moderateScale(12),
      borderRadius: theme.sizes.mainBorderRadius,
      alignItems: 'center',
      justifyContent: 'center',
    },
    disabled: {
      opacity: 0.4,
    },
    text: {
      fontSize: moderateScale(14),
      fontWeight: '700',
      color: theme.colors.textColours.textInverse10,
      textAlign: 'center',
    },
  });
