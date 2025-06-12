import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Mask, Rect } from 'react-native-svg';

import { useThemedStyles } from '../../../../../hooks/useThemedStyles';
import { QR_CODE_BORDER_RADIUS, QR_CODE_SIZE } from './constants';
import { QROverlayStyles } from './styles';

const QROverlay = () => {
  const { styles } = useThemedStyles(QROverlayStyles);

  const { top } = useSafeAreaInsets();

  return (
    <View style={styles.container} pointerEvents="none">
      <View style={styles.square}>
        <View style={[styles.block, { marginBottom: top }]}>
          <View style={[styles.radius, styles.radiusTopRight]} />
          <View style={[styles.radius, styles.radiusTopLeft]} />
          <View style={[styles.radius, styles.radiusBottomRight]} />
          <View style={[styles.radius, styles.radiusBottomLeft]} />
        </View>
      </View>
      <Svg style={styles.icon} height="100%" width="100%">
        <Mask id="mask" x={0} y={0} height="100%" width="100%">
          <Rect height="100%" width="100%" fill="#fff" />
          <Rect
            x="50%"
            y="50%"
            transform={`translate(${(QR_CODE_SIZE / 2) * -1}, ${
              (QR_CODE_SIZE / 2) * -1 - top
            })`}
            width={QR_CODE_SIZE}
            height={QR_CODE_SIZE}
            fill="#000"
            rx={QR_CODE_BORDER_RADIUS}
          />
        </Mask>
        <Rect
          height="100%"
          width="100%"
          fill="rgba(0,0,0,.6)"
          mask="url(#mask)"
        />
      </Svg>
    </View>
  );
};

export default QROverlay;
