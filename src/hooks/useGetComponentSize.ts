import { useMemo } from 'react';

import { useAppTheme } from './useAppTheme';

export type ComponentSize = 'large' | 'medium' | 'small';

export const useGetComponentSize = (size?: ComponentSize) => {
  const theme = useAppTheme();

  return useMemo(() => {
    switch (size) {
      case 'large': {
        return theme.sizes.largeHeight;
      }
      case 'medium': {
        return theme.sizes.mediumHeight;
      }
      case 'small': {
        return theme.sizes.smallHeight;
      }
      default: {
        return theme.sizes.mediumHeight;
      }
    }
  }, [
    size,
    theme.sizes.largeHeight,
    theme.sizes.mediumHeight,
    theme.sizes.smallHeight,
  ]);
};
