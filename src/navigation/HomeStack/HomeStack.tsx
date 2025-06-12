import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeStackParamList } from '../../hooks/useAppNavigation';
import {
  HomeScreen,
  LanguageScreen,
  PostDetailsScreen,
  QRScannerScreen,
  SettingsScreen,
  WebViewScreen,
} from '../../screens/Main';

const Stack = createNativeStackNavigator<HomeStackParamList>();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
      <Stack.Screen name={'QRScannerScreen'} component={QRScannerScreen} />
      <Stack.Screen name={'PostDetailsScreen'} component={PostDetailsScreen} />
      <Stack.Screen name={'SettingsScreen'} component={SettingsScreen} />
      <Stack.Screen
        name={'WebViewScreen'}
        initialParams={{
          headerTitle: '',
          url: '',
        }}
        component={WebViewScreen}
      />
      <Stack.Screen name={'LanguageScreen'} component={LanguageScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
