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
  checked?: boolean;
}

const CheckedMenuListItem: FC<MenuListItemProps> = ({
  onPress,
  icon,
  children,
  checked,
}) => {
  const { theme, styles } = useThemedStyles(menuListItemStyles);
  return (
    <TouchableOpacity
      disabled={checked}
      onPress={onPress}
      style={styles.container}
    >
      <View style={styles.icon}>{!!icon && icon}</View>
      <View style={styles.content}>
        <AppText style={styles.label}>{children}</AppText>
        {!!checked && (
          <Feather
            name={'check'}
            size={moderateScale(18)}
            color={theme.colors.textColours.text10}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CheckedMenuListItem;
