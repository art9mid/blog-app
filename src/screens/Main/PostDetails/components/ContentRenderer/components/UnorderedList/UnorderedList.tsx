import React, { FC } from 'react';
import { View } from 'react-native';

import { AppText } from '../../../../../../../components/ui';
import { useThemedStyles } from '../../../../../../../hooks/useThemedStyles';
import LinkText from '../LinkText/LinkText';
import { unorderedListStyles } from './styles';

interface UnorderedListProps {
  items: string[];
}

export const UnorderedList: FC<UnorderedListProps> = ({ items }) => {
  const { styles } = useThemedStyles(unorderedListStyles);

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={styles.listItem}>
          <AppText style={styles.number}>•</AppText>
          <LinkText text={item} />
        </View>
      ))}
    </View>
  );
};

export default UnorderedList;
