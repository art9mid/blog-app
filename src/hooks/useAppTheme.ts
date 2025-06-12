import { useTheme } from '@react-navigation/native';

import { AppTheme } from '../theme/interfaces';

export const useAppTheme = useTheme as () => AppTheme;
