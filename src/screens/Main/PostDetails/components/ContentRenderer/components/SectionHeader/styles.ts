import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { AppTheme } from '../../../../../../../theme/interfaces';

export const sectionHeaderStyles = (theme: AppTheme) =>
  StyleSheet.create({
    title: {
      fontSize: moderateScale(18),
      marginBottom: moderateScale(12),
      ...theme.fonts.bold,
    },
  });
