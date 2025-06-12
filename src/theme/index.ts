import { ColorSchemeName } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { fonts } from './fonts';
import { AppTheme } from './interfaces';

const sizes: AppTheme['sizes'] = {
  paddingVertical: moderateScale(16),
  paddingHorizontal: moderateScale(16),
  mainBorderRadius: moderateScale(16),
  largeHeight: moderateScale(56),
  mediumHeight: moderateScale(44),
  smallHeight: moderateScale(32),
  navigationHeaderHeight: moderateScale(50),
  postPreviewHeight: moderateScale(180),
};

const light = {
  dark: false,
  colors: {
    primary: 'rgb(0, 122, 255)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(216, 216, 216)',
    notification: 'rgb(255, 59, 48)',
  },
  fonts,
};

const dark: AppTheme = {
  dark: true,
  colors: {
    // basic navigation styles
    primary: '#161617',
    card: '#161617',
    border: 'rgba(255,255,255,0.08)',
    notification: '#161617',
    text: '#FFFFFF',
    background: '#121212',

    // custom styles
    textColours: {
      text10: '#FFFFFF',
      text20: 'rgba(255,255,255,0.48)',
      text30: 'rgba(255,255,255,0.24)',
      text40: 'rgba(255,255,255,0.12)',
      textInverse10: '#242424',
    },
    backgroundColours: {
      bg00: '#080808',
      bg20: '#1C1C1C',
      bg30: '#242424',
      bgInverseTransparent30: 'rgba(255,255,255,0.08)',
    },
    accent: {
      brand: '#E68A00',
      red: '#EA6969',
    },
  },
  sizes,
  fonts,
};

export const iconSet = {
  welcome: {
    image1: require('../../assets/welcome/image-1/preview.png'),
    image2: require('../../assets/welcome/image-2/preview.png'),
    image3: require('../../assets/welcome/image-3/preview.png'),
    image4: require('../../assets/welcome/image-4/preview.png'),
    image5: require('../../assets/welcome/image-5/preview.png'),
    image6: require('../../assets/welcome/image-6/preview.png'),
  },
};

export function colorSet(colorScheme: ColorSchemeName) {
  switch (colorScheme) {
    case 'light': {
      return light;
    }
    case 'dark': {
      return dark;
    }
    default: {
      return dark;
    }
  }
}
