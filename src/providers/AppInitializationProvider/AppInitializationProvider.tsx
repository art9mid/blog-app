import React, { createContext, useContext } from 'react';

import useInitializeApp from './hooks/initializeApp';

interface AppInitializationContextType {
  isAppReady: boolean;
  isOnboardingCompleted: boolean;
}

const AppInitializationContext = createContext<AppInitializationContextType>({
  isAppReady: false,
  isOnboardingCompleted: false,
});

export const useAppInitialization = () => {
  return useContext(AppInitializationContext);
};

export const AppInitializationProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { isAppReady, isOnboardingCompleted } = useInitializeApp();

  return (
    <AppInitializationContext.Provider
      value={{
        isAppReady,
        isOnboardingCompleted,
      }}
    >
      {children}
    </AppInitializationContext.Provider>
  );
};
