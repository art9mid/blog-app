import { StyleSheet } from 'react-native';

import { AppTheme } from '../../../../../theme/interfaces';
import {
  QR_CODE_BORDER_PADDING_FROM_MAIN_CONTAINER,
  QR_CODE_BORDER_RADIUS,
  QR_CODE_BORDER_WIDTH,
  QR_CODE_SIZE,
} from './constants';

export const QROverlayStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    container: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      flex: 1,
      zIndex: 1,
    },
    icon: {
      zIndex: 1,
      ...StyleSheet.absoluteFillObject,
    },
    square: {
      position: 'relative',
      flex: 1,
      zIndex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    block: {
      width: QR_CODE_SIZE - QR_CODE_BORDER_PADDING_FROM_MAIN_CONTAINER,
      height: QR_CODE_SIZE - QR_CODE_BORDER_PADDING_FROM_MAIN_CONTAINER,
      borderRadius: QR_CODE_BORDER_RADIUS,
    },
    radius: {
      position: 'absolute',
      width: QR_CODE_BORDER_RADIUS * 2,
      height: QR_CODE_BORDER_RADIUS * 2,
      borderColor: theme.colors.accent.brand,
    },
    radiusTopRight: {
      top: 0,
      right: 0,
      borderTopRightRadius: QR_CODE_BORDER_RADIUS,
      borderTopWidth: QR_CODE_BORDER_WIDTH,
      borderRightWidth: QR_CODE_BORDER_WIDTH,
    },
    radiusTopLeft: {
      top: 0,
      left: 0,
      borderTopLeftRadius: QR_CODE_BORDER_RADIUS,
      borderTopWidth: QR_CODE_BORDER_WIDTH,
      borderLeftWidth: QR_CODE_BORDER_WIDTH,
    },
    radiusBottomRight: {
      bottom: 0,
      left: 0,
      borderBottomLeftRadius: QR_CODE_BORDER_RADIUS,
      borderBottomWidth: QR_CODE_BORDER_WIDTH,
      borderLeftWidth: QR_CODE_BORDER_WIDTH,
    },
    radiusBottomLeft: {
      bottom: 0,
      right: 0,
      borderBottomRightRadius: QR_CODE_BORDER_RADIUS,
      borderBottomWidth: QR_CODE_BORDER_WIDTH,
      borderRightWidth: QR_CODE_BORDER_WIDTH,
    },
  });
};
