import React from 'react';
import { TextProps } from 'react-native';

import { useThemedStyles } from '../../../hooks/useThemedStyles';
import AppText from '../AppText/AppText';
import { errorTextStyles } from './styles';

interface CaptionTextProps extends TextProps {
  color?: 'error' | 'grey';
}

const CaptionText: React.FC<CaptionTextProps> = ({
  color,
  style,
  ...restProps
}) => {
  const { styles } = useThemedStyles(errorTextStyles);
  return (
    <AppText
      style={[
        styles.caption,
        color === 'error' && styles.error,
        color === 'grey' && styles.grey,
        style,
      ]}
      {...restProps}
    />
  );
};

export default CaptionText;
