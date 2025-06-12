import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { AppTheme } from '../../../../../../../theme/interfaces';

export const imageBlockStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      marginBottom: moderateScale(14),
    },
    image: {
      flex: 1,
      width: '100%',
      height: moderateScale(180),
    },
    caption: {
      fontSize: moderateScale(12),
      marginTop: moderateScale(8),
      textAlign: 'center',
    },
  });
