import {
  NavigatorScreenParams,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeStackParamList = {
  HomeScreen: undefined;
  QRScannerScreen: undefined;
  PostDetailsScreen: {
    postId: string;
  };
  SettingsScreen: undefined;
  WebViewScreen: {
    url: string;
    headerTitle: string;
  };
  LanguageScreen: undefined;
};

export type OnboardingStackParamList = {
  WelcomeScreen: undefined;
};

export type RootStackParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  OnboardingStack: NavigatorScreenParams<OnboardingStackParamList>;
};

export type AllParamLists = RootStackParamList &
  HomeStackParamList &
  OnboardingStackParamList;

export const useDynamicParams = <T extends keyof AllParamLists>() => {
  const route = useRoute<RouteProp<AllParamLists, T>>();
  return route.params;
};

export const useDynamicNavigation = () => {
  type NavigationType = NativeStackNavigationProp<AllParamLists>;
  const navigation = useNavigation<NavigationType>();

  const setParams = <T extends keyof AllParamLists>(
    params: Partial<AllParamLists[T]>,
  ) => {
    navigation.setParams(params as Partial<AllParamLists[T]>);
  };

  return {
    ...navigation,
    setParams,
  };
};
