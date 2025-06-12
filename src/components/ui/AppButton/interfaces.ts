import React from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableWithoutFeedbackProps,
  ViewStyle,
} from 'react-native';

import { ComponentSize } from '../../../hooks/useGetComponentSize';

export interface AppButtonProps extends TouchableWithoutFeedbackProps {
  textStyle?: StyleProp<TextStyle>;
  contentContainerStyles?: StyleProp<ViewStyle>;
  skin?: AppButtonSkins;
  size?: ComponentSize;
  renderContent?: () => React.ReactElement;
}

export type AppButtonSkins = 'brand' | 'grey' | 'initial';
