import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { AppTheme } from '../../../theme/interfaces';

export const webViewStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    pageLoading: {
      flex: 0,
    },
    loadingContainer: {
      position: 'absolute',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: theme.colors.background,
    },
    infoText: {
      textAlign: 'center',
      fontWeight: '600',
      paddingBottom: moderateScale(35),
    },
  });
