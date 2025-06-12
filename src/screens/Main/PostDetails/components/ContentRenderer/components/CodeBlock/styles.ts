import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { AppTheme } from '../../../../../../../theme/interfaces';

export const codeBlockStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      borderRadius: moderateScale(8),
      overflow: 'hidden',
      marginBottom: moderateScale(14),
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: moderateScale(16),
      paddingVertical: moderateScale(12),
      backgroundColor: theme.colors.backgroundColours.bg30,
      borderBottomWidth: moderateScale(1),
      borderBottomColor: theme.colors.backgroundColours.bgInverseTransparent30,
    },
    language: {
      ...theme.fonts.bold,
    },
    codeHighlighterContentContainer: {
      backgroundColor: 'initial',
      paddingHorizontal: moderateScale(12),
      paddingVertical: moderateScale(12),
    },
  });
