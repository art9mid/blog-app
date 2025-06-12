import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { AppTheme } from '../../../theme/interfaces';

export const appTextStyles = (theme: AppTheme) =>
  StyleSheet.create({
    text: {
      fontSize: moderateScale(14),
      color: theme.colors.text,
      ...theme.fonts.medium,
    },
  });
