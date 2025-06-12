import { StyleSheet } from 'react-native';

import { AppTheme } from '../../../theme/interfaces';

export const appScrollViewStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      paddingVertical: theme.sizes.paddingVertical,
      paddingHorizontal: theme.sizes.paddingHorizontal,
    },
  });
