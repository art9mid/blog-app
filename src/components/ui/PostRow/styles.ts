import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { AppTheme } from '../../../theme/interfaces';

export const homeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      marginHorizontal: theme.sizes.paddingHorizontal,
      flexDirection: 'row',
      gap: moderateScale(8),
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
      paddingBottom: moderateScale(8),
    },
    preview: {
      width: moderateScale(100),
      height: moderateScale(100),
      borderRadius: theme.sizes.mainBorderRadius,
    },
    content: {
      flex: 1,
    },
    tags: {
      fontSize: moderateScale(12),
      color: theme.colors.accent.brand,
      opacity: 0.85,
    },
    title: {
      marginTop: moderateScale(4),
      fontSize: moderateScale(16),
      ...theme.fonts.bold,
    },
    date: {
      marginTop: moderateScale(4),
      fontSize: moderateScale(12),
      color: theme.colors.textColours.text20,
      textTransform: 'capitalize',
    },
  });
