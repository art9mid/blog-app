import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OnboardingStackParamList } from '../../hooks/useAppNavigation';
import { WelcomeScreen } from '../../screens/Onboarding';

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

function OnboardingStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'WelcomeScreen'}
    >
      <Stack.Screen name={'WelcomeScreen'} component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

export default OnboardingStack;
