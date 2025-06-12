import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { AppTheme } from '../../../theme/interfaces';

export const appInputStyles = (theme: AppTheme) =>
  StyleSheet.create({
    label: {
      color: theme.colors.text,
      marginBottom: moderateScale(4),
      fontSize: moderateScale(12),
      fontWeight: '500',
    },
    error: {
      borderColor: theme.colors.accent.red,
    },
    input: {
      flex: 1,
      color: theme.colors.text,
      fontSize: moderateScale(16),
      paddingHorizontal: moderateScale(12),
      paddingVertical: moderateScale(8),
    },
    inputHasAccessoryRight: {
      borderRightWidth: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      paddingRight: 0,
    },
    inputHasAccessoryLeft: {
      borderLeftWidth: 0,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      paddingLeft: 0,
    },
    inputContentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: theme.sizes.mainBorderRadius,
      borderWidth: moderateScale(1),
      borderColor: theme.colors.backgroundColours.bgInverseTransparent30,
      overflow: 'hidden',
    },
    accessoryRight: {
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 0,
      paddingRight: moderateScale(12),
    },
    accessoryLeft: {
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
      paddingHorizontal: moderateScale(12),
    },
  });
