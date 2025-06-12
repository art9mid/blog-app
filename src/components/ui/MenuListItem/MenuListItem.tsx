import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Feather } from '@expo/vector-icons';

import { useThemedStyles } from '../../../hooks/useThemedStyles';
import AppText from '../AppText/AppText';
import { menuListItemStyles } from './styles';

interface MenuListItemProps extends PropsWithChildren {
  icon: ReactNode;
  onPress?: () => void;
}

const MenuListItem: FC<MenuListItemProps> = ({ onPress, icon, children }) => {
  const { theme, styles } = useThemedStyles(menuListItemStyles);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.icon}>{!!icon && icon}</View>
      <View style={styles.content}>
        <AppText style={styles.label}>{children}</AppText>
        <Feather
          name={'chevron-right'}
          size={moderateScale(24)}
          color={theme.colors.textColours.text10}
        />
      </View>
    </TouchableOpacity>
  );
};

export default MenuListItem;
