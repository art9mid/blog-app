import { StyleSheet } from 'react-native';

import { AppTheme } from '../../../theme/interfaces';

export const QRScannerScreenStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
