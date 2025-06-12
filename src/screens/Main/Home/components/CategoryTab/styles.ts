import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { AppTheme } from '../../../../../theme/interfaces';

export const categoryTabStyles = (theme: AppTheme) =>
  StyleSheet.create({
    tab: {
      justifyContent: 'center',
      backgroundColor: 'initial',
      height: moderateScale(34),
      paddingHorizontal: moderateScale(12),
      borderRadius: moderateScale(12),
    },
    text: {
      fontSize: moderateScale(13),
      color: theme.colors.textColours.text10,
      ...theme.fonts.bold,
    },
  });
