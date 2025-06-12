import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { EdgeInsets } from 'react-native-safe-area-context/src/SafeArea.types';

import { AppTheme } from '../theme/interfaces';
import { useAppTheme } from './useAppTheme';

type StylesCallback<T> = (theme: AppTheme, safeAreaInsets: EdgeInsets) => T;

export const useThemedStyles = <T extends StyleSheet.NamedStyles<T>>(
  stylesCallback: StylesCallback<T>,
) => {
  const theme = useAppTheme();
  const safeAreaInsets = useSafeAreaInsets();

  const styles = useMemo(
    () => stylesCallback(theme, safeAreaInsets),
    [stylesCallback, theme, safeAreaInsets],
  );

  return { styles, theme };
};
