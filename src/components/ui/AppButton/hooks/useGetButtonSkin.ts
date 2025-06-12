import { useMemo } from 'react';

import { useAppTheme } from '../../../../hooks/useAppTheme';
import { AppButtonSkins } from '../interfaces';

export const useGetButtonSkin = (skin?: AppButtonSkins) => {
  const theme = useAppTheme();
  return useMemo(() => {
    switch (skin) {
      case 'brand': {
        return theme.colors.accent.brand;
      }
      case 'grey': {
        return theme.colors.backgroundColours.bg30;
      }
      case 'initial': {
        return 'initial';
      }
      default: {
        return theme.colors.accent.brand;
      }
    }
  }, [skin, theme.colors.backgroundColours.bg30, theme.colors.accent.brand]);
};

export const useGetButtonTextSkin = (skin?: AppButtonSkins) => {
  const theme = useAppTheme();
  return useMemo(() => {
    switch (skin) {
      case 'brand': {
        return theme.colors.textColours.textInverse10;
      }
      case 'grey': {
        return theme.colors.textColours.text10;
      }
      default: {
        return theme.colors.textColours.textInverse10;
      }
    }
  }, [
    skin,
    theme.colors.textColours.textInverse10,
    theme.colors.textColours.text10,
  ]);
};
