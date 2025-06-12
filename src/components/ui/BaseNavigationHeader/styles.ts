import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { AppTheme } from '../../../theme/interfaces';

export const baseNavigationHeaderStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      borderBottomWidth: moderateScale(1),
      borderBottomColor: theme.colors.border,
    },
    header: {
      height: theme.sizes.navigationHeaderHeight,
      paddingHorizontal: theme.sizes.paddingHorizontal,
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    titleContainer: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center',
      pointerEvents: 'none',
    },
    headerButton: {
      height: moderateScale(40),
      width: moderateScale(40),
      paddingHorizontal: 0,
    },
    title: {
      maxWidth: '65%',
      width: '100%',
      textAlign: 'center',
      fontSize: moderateScale(16),
      ...theme.fonts.bold,
    },
  });
