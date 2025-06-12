import { Alert, Linking, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useCameraPermissions } from 'expo-camera';

import LogoIcon from '../../../../../components/icons/LogoIcon';
import { AppButton } from '../../../../../components/ui';
import { useDynamicNavigation } from '../../../../../hooks/useAppNavigation';
import { useThemedStyles } from '../../../../../hooks/useThemedStyles';
import { homeHeaderStyles } from './styles';

const HomeHeader = () => {
  const { styles, theme } = useThemedStyles(homeHeaderStyles);
  const navigation = useDynamicNavigation();
  const [permission, requestPermission] = useCameraPermissions();

  const navigateToQRScannerScreen = async () => {
    if (permission?.granted) {
      navigation.navigate('HomeStack', { screen: 'QRScannerScreen' });
      return;
    }

    const { granted } = await requestPermission();

    if (granted) {
      navigation.navigate('HomeStack', { screen: 'QRScannerScreen' });
    } else {
      Alert.alert(
        'Camera Access Denied',
        'To scan QR codes, please enable camera access in the app settings',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Open Settings',
            onPress: () => Linking.openSettings(),
          },
        ],
      );
    }
  };

  const navigateToSettingsScreen = () => {
    navigation.navigate('HomeStack', { screen: 'SettingsScreen' });
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header]}>
        <View style={styles.left}>
          <LogoIcon />
        </View>
        <View style={styles.right}>
          <AppButton
            hitSlop={moderateScale(12)}
            onPress={navigateToQRScannerScreen}
            size={'small'}
            skin={'grey'}
            style={styles.qrButton}
          >
            <MaterialCommunityIcons
              name={'qrcode-scan'}
              size={moderateScale(18)}
              color={theme.colors.textColours.text10}
            />
          </AppButton>
          <AppButton
            hitSlop={moderateScale(12)}
            onPress={navigateToSettingsScreen}
            size={'small'}
            skin={'grey'}
            style={styles.qrButton}
          >
            <Feather
              name={'settings'}
              size={moderateScale(18)}
              color={theme.colors.textColours.text10}
            />
          </AppButton>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
