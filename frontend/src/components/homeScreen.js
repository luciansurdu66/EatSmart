import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddIngredient from './addIngredient';
import styles from '../styles/homeScreen.style';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
        <View style={styles.overlay}>
          <Text style={styles.title}>Eat Smart</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(AddIngredient)}
          >
            <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
      
    </View>
  );
};



export default HomeScreen;
