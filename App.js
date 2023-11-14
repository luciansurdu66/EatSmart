import { View, Text, StyleSheet, TouchableOpacity, Image  } from "react-native";
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AddIngredient from "./frontend/src/components/addIngredient"; // updated import path
import HomeScreen from "./frontend/src/components/homeScreen";
import LoginScreen from "./frontend/src/components/loginScreen";
//create a stack navigator with bottom menu sticking to the bottom
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} title='Home' />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddIngredient" component={AddIngredient} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}