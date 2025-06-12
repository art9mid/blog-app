import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { AppTheme } from '../../../theme/interfaces';

export const menuListItemStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.sizes.paddingHorizontal,
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      width: moderateScale(34),
    },
    content: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      height: moderateScale(56),
      borderBottomColor: theme.colors.border,
      borderBottomWidth: moderateScale(1),
    },
    label: {
      ...theme.fonts.bold,
      flex: 1,
    },
  });
