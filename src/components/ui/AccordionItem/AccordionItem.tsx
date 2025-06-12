import React, { FC } from 'react';
import { Pressable, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { useThemedStyles } from '../../../hooks/useThemedStyles';
import AppText from '../AppText/AppText';
import { AccordionItemProps } from './interfaces';
import { accordionItemStyles } from './styles';

const AccordionItem: FC<AccordionItemProps> = ({
  label,
  content,
  style,
  contentContainerStyles,
  duration = 200,
}) => {
  const height = useSharedValue(0);
  const open = useSharedValue(false);
  const { styles } = useThemedStyles(accordionItemStyles);

  const onPress = () => {
    open.value = !open.value;
  };

  const derivedHeight = useDerivedValue(() =>
    withTiming(height.value * Number(open.value), {
      duration,
    }),
  );
  const bodyStyle = useAnimatedStyle(() => ({
    height: derivedHeight.value,
  }));

  return (
    <View style={[styles.container, contentContainerStyles]}>
      <Pressable style={styles.button} onPress={onPress}>
        <AppText style={styles.buttonText}>{label}</AppText>
        <AppText>Arrow</AppText>
      </Pressable>
      <Animated.View style={[styles.animatedView, bodyStyle, style]}>
        <View
          onLayout={(e) => {
            height.value = e.nativeEvent.layout.height;
          }}
          style={styles.wrapper}
        >
          <AppText style={styles.contentText}>{content}</AppText>
        </View>
      </Animated.View>
    </View>
  );
};

export default AccordionItem;
