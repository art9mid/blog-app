import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { AppTheme } from '../../../../../../../theme/interfaces';

export const linkTextStyles = (theme: AppTheme) =>
  StyleSheet.create({
    text: {
      flex: 1,
      marginBottom: moderateScale(14),
    },
    link: {
      color: theme.colors.textColours.text20,
    },
    code: {
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 6,
      overflow: 'hidden',
      borderWidth: 1,
      includeFontPadding: false,
      backgroundColor: theme.colors.textColours.text30,
    },
  });
