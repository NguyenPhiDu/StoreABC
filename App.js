import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigaBottom from './src/Screens/NavigaBottom'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="NavigaBottom">
        <Stack.Screen name="NavigaBottom" component={NavigaBottom} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
