import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AddIngredient from "./frontend/src/components/addIngredient"; // updated import path
import HomeScreen from "./frontend/src/components/homeScreen";
import MyFridge from "./frontend/src/components/myFridge";
import LoginScreen from "./frontend/src/components/loginScreen";
import SignUpScreen from "./frontend/src/components/signupScreen";
import ResetPasswordScreen from './frontend/src/components/resetPasswordScreen';
import RecipeSearchScreen from './frontend/src/components/searchScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddIngredient" component={AddIngredient} options={{ headerShown: false }}/>
        <Stack.Screen name="RecipeSearchScreen" component={RecipeSearchScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="MyFridge" component={MyFridge} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}
