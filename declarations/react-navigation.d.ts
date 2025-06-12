import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AllParamLists } from '../src/hooks/useAppNavigation';
import { AppTheme } from '../src/theme/interfaces';

declare module '@react-navigation/native' {
  export function useTheme(): AppTheme;
}

declare module '@react-navigation/native' {
  export function useNavigation<
    T extends keyof AllParamLists,
  >(): NativeStackNavigationProp<AllParamLists, T>;
}
