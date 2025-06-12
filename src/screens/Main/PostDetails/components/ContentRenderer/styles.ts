import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { AppTheme } from '../../../../../theme/interfaces';

export const contentRendererStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      paddingTop: moderateScale(12),
      paddingHorizontal: theme.sizes.paddingHorizontal,
    },
  });
