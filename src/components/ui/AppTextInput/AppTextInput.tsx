import React, { useRef } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { useGetComponentSize } from '../../../hooks/useGetComponentSize';
import { useThemedStyles } from '../../../hooks/useThemedStyles';
import AppText from '../AppText/AppText';
import CaptionText from '../CaptionText/CaptionText';
import { useGetTextInputSkin } from './hooks/useGetTextInputSkin';
import { AppInputProps } from './interfaces';
import { appInputStyles } from './styles';

const AppTextInput: React.FC<AppInputProps> = ({
  label,
  error,
  accessoryRight,
  accessoryLeft,
  inputContainerStyle,
  caption,
  style,
  accessoryRightStyle,
  accessoryLeftStyle,
  size,
  skin,
  ...props
}) => {
  const { styles, theme } = useThemedStyles(appInputStyles);
  const inputRef = useRef<TextInput>(null);
  const inputHeight = useGetComponentSize(size);
  const inputSkin = useGetTextInputSkin(skin);

  return (
    <View style={inputContainerStyle}>
      {!!label && <AppText style={styles.label}>{label}</AppText>}
      <Pressable
        hitSlop={moderateScale(4)}
        onPress={() => inputRef.current?.focus()}
        style={[
          styles.inputContentContainer,
          error && styles.error,
          { backgroundColor: inputSkin },
        ]}
      >
        {!!accessoryLeft && (
          <View
            style={[
              styles.accessoryLeft,
              { height: inputHeight },
              accessoryLeftStyle,
            ]}
          >
            {accessoryLeft}
          </View>
        )}
        <TextInput
          ref={inputRef}
          style={[
            styles.input,
            { height: inputHeight },
            !!accessoryRight && styles.inputHasAccessoryRight,
            !!accessoryLeft && styles.inputHasAccessoryLeft,
            style,
          ]}
          placeholderTextColor={theme.colors.textColours.text20}
          {...props}
        />
        {!!accessoryRight && (
          <View
            style={[
              styles.accessoryRight,
              { height: inputHeight },
              accessoryRightStyle,
            ]}
          >
            {accessoryRight}
          </View>
        )}
      </Pressable>
      {error ? (
        <CaptionText color={'error'}>{error}</CaptionText>
      ) : (
        caption && <CaptionText color={'grey'}>{caption}</CaptionText>
      )}
    </View>
  );
};

export default AppTextInput;
