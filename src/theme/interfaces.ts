import { ColorValue } from 'react-native';
import type { Theme } from '@react-navigation/native/src/types';

type Color = ColorValue & string;

export interface AppTheme {
  dark: boolean;
  colors: {
    primary: Color;
    background: Color;
    card: Color;
    text: Color;
    border: Color;
    notification: Color;
    textColours: {
      text10: Color;
      text20: Color;
      text30: Color;
      text40: Color;
      textInverse10: Color;
    };
    backgroundColours: {
      bg00: Color;
      bg20: Color;
      bg30: Color;
      bgInverseTransparent30: Color;
    };
    accent: {
      brand: Color;
      red: Color;
    };
  };
  sizes: {
    paddingHorizontal: number;
    paddingVertical: number;
    mainBorderRadius: number;
    largeHeight: number;
    mediumHeight: number;
    smallHeight: number;
    navigationHeaderHeight: number;
    postPreviewHeight: number;
  };
  fonts: Theme['fonts'];
}
