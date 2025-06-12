import React from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { moderateScale } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons';

import { useAppTheme } from '../../../hooks/useAppTheme';
import AppTextInput from '../AppTextInput/AppTextInput';
import { AppInputProps } from '../AppTextInput/interfaces';

interface PasswordInputProps extends AppInputProps {}

const AnimatedIonicons = Animated.createAnimatedComponent(Ionicons);

const SearchTextInput: React.FC<PasswordInputProps> = ({
  value,
  onChangeText,
  style,
  ...props
}) => {
  const theme = useAppTheme();
  const textPresence = useSharedValue(0);
  const clearButtonProgress = useSharedValue(0);

  React.useEffect(() => {
    const hasText = !!value?.trim().length;
    textPresence.value = withTiming(hasText ? 1 : 0, { duration: 150 });
    clearButtonProgress.value = withTiming(hasText ? 1 : 0, { duration: 150 });
  }, [value]);

  const searchIconAnimatedProps = useAnimatedProps(() => ({
    color: interpolateColor(
      textPresence.value,
      [0, 1],
      [theme.colors.textColours.text20, theme.colors.textColours.text10],
    ),
  }));

  const clearButtonAnimatedStyle = useAnimatedStyle(() => ({
    opacity: clearButtonProgress.value,
    transform: [{ scale: clearButtonProgress.value }],
  }));

  return (
    <AppTextInput
      {...props}
      value={value}
      onChangeText={onChangeText}
      accessoryLeft={
        <AnimatedIonicons
          name="search"
          color={theme.colors.textColours.text20}
          animatedProps={searchIconAnimatedProps}
          size={moderateScale(18)}
        />
      }
      accessoryRight={
        <Animated.View
          style={clearButtonAnimatedStyle}
          pointerEvents={value?.trim().length ? 'auto' : 'none'}
        >
          <TouchableOpacity
            hitSlop={moderateScale(10)}
            onPress={() => onChangeText?.('')}
          >
            <Ionicons
              name="close"
              color={theme.colors.accent.brand}
              size={moderateScale(18)}
            />
          </TouchableOpacity>
        </Animated.View>
      }
    />
  );
};

export default SearchTextInput;
