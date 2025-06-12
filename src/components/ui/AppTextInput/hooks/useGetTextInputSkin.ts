import { useMemo } from 'react';

import { useAppTheme } from '../../../../hooks/useAppTheme';
import { AppInputSkins } from '../interfaces';

export const useGetTextInputSkin = (skin?: AppInputSkins) => {
  const theme = useAppTheme();
  return useMemo(() => {
    switch (skin) {
      case 'grey': {
        return theme.colors.backgroundColours.bg20;
      }
      case 'dark': {
        return theme.colors.backgroundColours.bg00;
      }
      default: {
        return theme.colors.backgroundColours.bg00;
      }
    }
  }, [
    skin,
    theme.colors.backgroundColours.bg20,
    theme.colors.backgroundColours.bg00,
    theme.colors.backgroundColours.bg00,
  ]);
};
