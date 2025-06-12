import React, { FC } from 'react';
import { View } from 'react-native';

import { AppText } from '../../../../../../../components/ui';
import { useThemedStyles } from '../../../../../../../hooks/useThemedStyles';
import LinkText from '../LinkText/LinkText';
import { orderedListStyles } from './styles';

interface OrderedListProps {
  items: string[];
}

export const OrderedList: FC<OrderedListProps> = ({ items }) => {
  const { styles } = useThemedStyles(orderedListStyles);

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={styles.listItem}>
          <AppText style={styles.number}>{index + 1}.</AppText>
          <LinkText text={item} />
        </View>
      ))}
    </View>
  );
};

export default OrderedList;
