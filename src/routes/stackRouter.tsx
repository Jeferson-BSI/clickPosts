import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';

export type RootStackParams = {
  Home: undefined;
  Profile: {userId: number};
};

const Stack = createNativeStackNavigator<RootStackParams>();


export function Router() {
  return (
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
  );
};