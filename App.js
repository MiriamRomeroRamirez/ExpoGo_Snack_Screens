import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import PostScreen from './screens/PostScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "Login"
          options = {{ title: "Iniciar Sesión"}}
          component = {LoginScreen}
        />
        <Stack.Screen
          name = "Post"
          options = {{ title: "Perfil de usuario"}}
          component = {PostScreen}
        />
        <Stack.Screen
          name = "Home"
          options = {{ title: "Menú"}} //headerShown: false
          component = {HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;