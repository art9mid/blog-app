import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { AppTheme } from '../../../theme/interfaces';

export const accordionItemStyles = (theme: AppTheme) =>
  StyleSheet.create({
    wrapper: {
      width: '100%',
      position: 'absolute',
      paddingHorizontal: moderateScale(12),
      paddingVertical: moderateScale(12),
    },
    animatedView: {
      width: '100%',
      overflow: 'hidden',
    },
    container: {
      backgroundColor: theme.colors.backgroundColours.bg20,
      borderRadius: theme.sizes.mainBorderRadius,
    },
    button: {
      flexDirection: 'row',
      paddingHorizontal: moderateScale(12),
      minHeight: moderateScale(48),
      alignItems: 'center',
    },
    buttonText: {
      flex: 1,
      fontSize: moderateScale(12),
      fontWeight: '700',
    },
    contentText: {
      fontSize: moderateScale(12),
    },
  });
