import React, { FC } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { moderateScale } from 'react-native-size-matters';

import { useGetComponentSize } from '../../../hooks/useGetComponentSize';
import { useThemedStyles } from '../../../hooks/useThemedStyles';
import AppText from '../AppText/AppText';
import {
  useGetButtonSkin,
  useGetButtonTextSkin,
} from './hooks/useGetButtonSkin';
import { AppButtonProps } from './interfaces';
import { appButtonStyles } from './styles';

const AppButton: FC<AppButtonProps> = ({
  textStyle,
  children,
  size,
  skin,
  contentContainerStyles,
  style,
  disabled,
  renderContent,
  ...restProps
}) => {
  const { styles } = useThemedStyles(appButtonStyles);
  const scale = useSharedValue(1);
  const buttonHeight = useGetComponentSize(size);
  const buttonSkin = useGetButtonSkin(skin);
  const buttonTextSkin = useGetButtonTextSkin(skin);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    if (disabled) {
      return;
    }
    scale.value = withSpring(0.9, {
      damping: 10,
      stiffness: 400,
    });
  };

  const handlePressOut = () => {
    if (disabled) {
      return;
    }
    scale.value = withSpring(1, {
      damping: 10,
      stiffness: 400,
    });
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      hitSlop={moderateScale(4)}
      {...restProps}
      style={contentContainerStyles}
    >
      <Animated.View
        style={[
          styles.button,
          disabled && styles.disabled,
          { height: buttonHeight, backgroundColor: buttonSkin },
          animatedStyle,
          style,
        ]}
      >
        {renderContent ? (
          renderContent()
        ) : (
          <AppText style={[styles.text, { color: buttonTextSkin }, textStyle]}>
            {children}
          </AppText>
        )}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default AppButton;
