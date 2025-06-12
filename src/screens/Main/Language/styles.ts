import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { AppTheme } from '../../../theme/interfaces';

export const settingsScreenStyles = (theme: AppTheme) =>
  StyleSheet.create({
    contentContainer: {
      paddingVertical: moderateScale(10),
    },
    versionText: {
      textAlign: 'center',
      fontSize: moderateScale(12),
      marginTop: moderateScale(18),
      color: theme.colors.textColours.text20,
    },
  });
