import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AddIngredient from "./frontend/src/components/addIngredient"; // updated import path
import HomeScreen from "./frontend/src/components/homeScreen";
import MyFridge from "./frontend/src/components/myFridge";
import LoginScreen from "./frontend/src/components/loginScreen";
import SignUpScreen from "./frontend/src/components/signupScreen";
import ResetPasswordScreen from './frontend/src/components/resetPasswordScreen';
import Header from './frontend/src/components/Header/Header';
import RecipePage from './frontend/src/components/recipepage';
import RecipeSearch from './frontend/src/components/recipeSearch';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RecipeSearch" component={RecipeSearch} options={({ route }) => ({ header: () => <Header title={route.name} /> })} />
        <Stack.Screen name="AddIngredient" component={AddIngredient} options={({ route }) => ({ header: () => <Header title={route.name} /> })} />
        <Stack.Screen name="MyFridge" component={MyFridge} options={({ route }) => ({ header: () => <Header title={route.name} /> })} />
        <Stack.Screen name="RecipePage" component={RecipePage} options={({ route }) => ({ header: () => <Header title={route.name} /> })}/>

      </Stack.Navigator> 
    </NavigationContainer>
  );
}
