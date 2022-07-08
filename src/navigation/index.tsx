import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TypesNavigation } from '@/types';

import SplashScreen from '@/screens/Splash';
import HomeScreen from '@/screens/Home';

const RootStack =
  createNativeStackNavigator<TypesNavigation.RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Splash" component={SplashScreen} />
        <RootStack.Screen
          options={{ animation: 'fade' }}
          name="Home"
          component={HomeScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
