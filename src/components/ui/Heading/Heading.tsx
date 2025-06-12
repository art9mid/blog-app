import React from 'react';
import { TextProps } from 'react-native';

import { useThemedStyles } from '../../../hooks/useThemedStyles';
import AppText from '../AppText/AppText';
import { headingStyles } from './styles';

const Heading: React.FC<TextProps> = ({ style, ...restProps }) => {
  const { styles } = useThemedStyles(headingStyles);
  return <AppText style={[styles.text, style]} {...restProps} />;
};

export default Heading;
