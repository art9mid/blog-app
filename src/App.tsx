import { useEffect, useRef } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import './i18n';
import 'dayjs/locale/en';
import 'dayjs/locale/uk';

import RootNavigator from './navigation';
import { AppInitializationProvider } from './providers/AppInitializationProvider/AppInitializationProvider';
import { appPersister, queryClient } from './store/services';
import { appStyles } from './styles';
import { colorSet } from './theme';

SplashScreen.preventAutoHideAsync();

const linking = {
  prefixes: ['adosolutions://'],
  config: {
    screens: {
      PostScreen: 'posts/:id',
    },
  },
};

export default function App() {
  const routeNameRef = useRef<string | undefined>();

  const navigationRef = useNavigationContainerRef();

  const activeColorScheme = colorSet('dark');

  const [fontsLoaded, fontError] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  return (
    <GestureHandlerRootView style={appStyles.container}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <StatusBar style="light" />
        <PersistQueryClientProvider
          client={queryClient ?? new QueryClient()}
          persistOptions={{ persister: appPersister }}
        >
          <AppInitializationProvider>
            <NavigationContainer
              ref={navigationRef}
              linking={linking}
              onReady={() => {
                routeNameRef.current =
                  navigationRef.current?.getCurrentRoute()?.name;
              }}
              theme={activeColorScheme}
            >
              <BottomSheetModalProvider>
                <RootNavigator />
              </BottomSheetModalProvider>
            </NavigationContainer>
          </AppInitializationProvider>
        </PersistQueryClientProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
