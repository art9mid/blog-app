import React, { FC, useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { useThemedStyles } from '../../../../../hooks/useThemedStyles';
import { categoryTabStyles } from './styles';

interface CategoryTabProps {
  active: boolean;
  onPress: () => void;
  title: string;
}

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
const AnimatedText = Animated.createAnimatedComponent(Text);

const CategoryTab: FC<CategoryTabProps> = ({ active, onPress, title }) => {
  const { styles, theme } = useThemedStyles(categoryTabStyles);
  const progress = useSharedValue(active ? 1 : 0.4);

  useEffect(() => {
    progress.value = withTiming(active ? 1 : 0.4, { duration: 150 });
  }, [active, progress]);

  const animatedContainerStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progress.value,
      [0.4, 1],
      ['transparent', theme.colors.backgroundColours.bgInverseTransparent30],
    ),
  }));

  const animatedTextStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
  }));

  return (
    <AnimatedTouchable
      onPress={onPress}
      style={[styles.tab, animatedContainerStyle]}
      activeOpacity={0.7}
    >
      <AnimatedText style={[styles.text, animatedTextStyle]}>
        {title}
      </AnimatedText>
    </AnimatedTouchable>
  );
};

export default CategoryTab;
