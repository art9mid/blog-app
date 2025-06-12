import React from 'react';
import { Text, TextProps } from 'react-native';

import { useThemedStyles } from '../../../hooks/useThemedStyles';
import { appTextStyles } from './styles';

interface AppTextProps extends TextProps {
  uiTextView?: boolean;
}

const AppText: React.FC<AppTextProps> = ({ style, ...restProps }) => {
  const { styles } = useThemedStyles(appTextStyles);
  return <Text style={[styles.text, style]} {...restProps} />;
};

export default AppText;
