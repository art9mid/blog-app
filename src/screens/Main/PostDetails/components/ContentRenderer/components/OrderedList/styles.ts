import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { AppTheme } from '../../../../../../../theme/interfaces';

export const orderedListStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      marginBottom: moderateScale(14),
    },
    listItem: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 4,
    },
    number: {
      marginRight: 8,
    },
  });
