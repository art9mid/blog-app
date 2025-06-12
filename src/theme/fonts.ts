import { Platform } from 'react-native';

import { AppTheme } from './interfaces';

const WEB_FONT_STACK =
  'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

export const fonts = Platform.select<AppTheme['fonts']>({
  web: {
    regular: {
      fontFamily: WEB_FONT_STACK,
      fontWeight: '400',
    },
    medium: {
      fontFamily: WEB_FONT_STACK,
      fontWeight: '500',
    },
    bold: {
      fontFamily: WEB_FONT_STACK,
      fontWeight: '600',
    },
    heavy: {
      fontFamily: WEB_FONT_STACK,
      fontWeight: '700',
    },
  },
  ios: {
    regular: {
      fontFamily: 'Montserrat_400Regular',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'Montserrat_500Medium',
      fontWeight: '500',
    },
    bold: {
      fontFamily: 'Montserrat_600SemiBold',
      fontWeight: '600',
    },
    heavy: {
      fontFamily: 'Montserrat_700Bold',
      fontWeight: '700',
    },
  },
  android: {
    regular: {
      fontFamily: 'Montserrat_400Regular',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'Montserrat_500Medium',
      fontWeight: '500',
    },
    bold: {
      fontFamily: 'Montserrat_600SemiBold',
      fontWeight: '600',
    },
    heavy: {
      fontFamily: 'Montserrat_700Bold',
      fontWeight: '700',
    },
  },
  default: {
    regular: {
      fontFamily: 'Montserrat_400Regular',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'Montserrat_500Medium',
      fontWeight: '500',
    },
    bold: {
      fontFamily: 'Montserrat_600SemiBold',
      fontWeight: '600',
    },
    heavy: {
      fontFamily: 'Montserrat_700Bold',
      fontWeight: '700',
    },
  },
});
