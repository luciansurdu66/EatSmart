import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { IngredientsProvider } from './frontend/src/components/IngredientsContext'; // Import the IngredientsProvider

import AddIngredient from "./frontend/src/components/addIngredient";
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
    <IngredientsProvider> 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} title='Home' />
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="AddIngredient" component={AddIngredient} options={{ headerShown: false }}/>
          <Stack.Screen name="RecipeSearchScreen" component={RecipeSearchScreen}  options={{ headerShown: false }} />
          <Stack.Screen name="MyFridge" component={MyFridge} />
        </Stack.Navigator> 
      </NavigationContainer>
    </IngredientsProvider>
  );
}
