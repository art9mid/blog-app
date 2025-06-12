import React from 'react';
import { StyleProp, TextInputProps, ViewStyle } from 'react-native';

export interface AppInputProps extends TextInputProps {
  label?: string;
  error?: string | boolean;
  accessoryRight?: React.ReactNode;
  accessoryLeft?: React.ReactNode;
  inputContainerStyle?: StyleProp<ViewStyle>;
  caption?: string;
  accessoryRightStyle?: StyleProp<ViewStyle>;
  accessoryLeftStyle?: StyleProp<ViewStyle>;
  size?: AppInputSizes;
  skin?: 'grey' | 'dark';
}

export type AppInputSkins = 'grey' | 'dark';

export type AppInputSizes = 'large' | 'medium' | 'small';
