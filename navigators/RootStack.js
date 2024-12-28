import React from 'react';
import { Colors } from './../components/style';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, createStackNavigator } from '@react-navigation/stack';

import Login from './../screens/Login';
import Singup from './../screens/Signup';
import Welcome from './../screens/Welcome';
const { primary, tertiary } = Colors;
const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: tertiary,
          headerTransparent: true,
          headerTitle: '',
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Singup} />
        <Stack.Screen options={{ headerTintColor: primary }} name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
