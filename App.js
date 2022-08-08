import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Screen from './app/components/Screen';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
