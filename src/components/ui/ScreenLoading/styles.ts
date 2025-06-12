import { StyleSheet } from 'react-native';

import { AppTheme } from '../../../theme/interfaces';

export const screenLoadingStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      width: '100%',
      height: '100%',
      backgroundColor: theme.colors.backgroundColours.bgInverseTransparent30,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
