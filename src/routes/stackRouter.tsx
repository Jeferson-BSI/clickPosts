import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components';
import { darkTheme, theme } from '../theme';


import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { useUsers } from '../hooks/UseUsers';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export type RootStackParams = {
  Home: undefined;
  Profile: {
    userId: number;
    username: string
  };
};

const Stack = createNativeStackNavigator<RootStackParams>();


export function Router() {
  const { userPreferences } = useUsers();
  return (
  <GestureHandlerRootView
      style={{
      flex: 1,
      backgroundColor: theme.colors.background
    }}
    >
    
    <ThemeProvider theme={
      userPreferences=== "dark"?darkTheme
      :theme
    }>

    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          title: 'Profile',
        }}
      />

    </Stack.Navigator>
    </ThemeProvider>
  </GestureHandlerRootView>

  );
};