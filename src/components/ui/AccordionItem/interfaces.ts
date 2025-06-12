import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface AccordionItemProps {
  label: ReactNode;
  content: ReactNode;
  style?: StyleProp<ViewStyle>;
  duration?: number;
  contentContainerStyles?: StyleProp<ViewStyle>;
}
