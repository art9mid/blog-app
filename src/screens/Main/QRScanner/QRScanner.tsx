import { useEffect, useRef } from 'react';
import { Alert, AppState, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { CameraView } from 'expo-camera';

import BaseNavigationHeader from '../../../components/ui/BaseNavigationHeader/BaseNavigationHeader';
import { useThemedStyles } from '../../../hooks/useThemedStyles';
import QROverlay from './components/QROverlay/QROverlay';
import { QRScannerScreenStyles } from './styles';

const QRScanner = () => {
  const qrLock = useRef(false);
  const appState = useRef(AppState.currentState);
  const { styles } = useThemedStyles(QRScannerScreenStyles);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        qrLock.current = false;
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <>
      <BaseNavigationHeader showCloseIcon title={'QR Scanner'} />
      <View style={styles.container}>
        <CameraView
          style={StyleSheet.absoluteFillObject}
          facing="back"
          onBarcodeScanned={({ data }) => {
            if (data && !qrLock.current) {
              qrLock.current = true;
              Alert.alert('Обнаружен QRчик');
            }
          }}
        />
        <QROverlay />
      </View>
    </>
  );
};

export default QRScanner;
