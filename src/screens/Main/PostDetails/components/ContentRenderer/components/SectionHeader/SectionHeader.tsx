import React, { FC } from 'react';

import { AppText } from '../../../../../../../components/ui';
import { useThemedStyles } from '../../../../../../../hooks/useThemedStyles';
import { sectionHeaderStyles } from './styles';

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({ title }) => {
  const { styles } = useThemedStyles(sectionHeaderStyles);
  return <AppText style={styles.title}>{title}</AppText>;
};

export default SectionHeader;
