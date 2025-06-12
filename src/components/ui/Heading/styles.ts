import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { AppTheme } from '../../../theme/interfaces';

export const headingStyles = (theme: AppTheme) =>
  StyleSheet.create({
    text: {
      fontSize: moderateScale(18),
      fontWeight: '500',
    },
  });
