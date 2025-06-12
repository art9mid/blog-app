import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '../hooks/useAppNavigation';
import { useBranchHandle } from '../hooks/useBranchHandle';
import { useAppInitialization } from '../providers/AppInitializationProvider/AppInitializationProvider';
import HomeStack from './HomeStack/HomeStack';
import OnboardingStack from './OnboardingStack/OnboardingStack';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { isOnboardingCompleted } = useAppInitialization();
  useBranchHandle();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={isOnboardingCompleted ? 'HomeStack' : 'OnboardingStack'}
    >
      <Stack.Screen name={'OnboardingStack'} component={OnboardingStack} />
      <Stack.Screen name={'HomeStack'} component={HomeStack} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
