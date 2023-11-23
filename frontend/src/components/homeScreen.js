import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddIngredient from './addIngredient';
import styles from '../styles/homeScreen.style';
import LoginScreen from './loginScreen';
import SignUpScreen from './signupScreen';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ navigation }) => {
  const handleSignIn = () => {
    navigation.navigate("LoginScreen");
  }

  return (
    // <ImageBackground
    // source={require('./frontend/assets/images/fruitdish.jpg')}
    //   style={styles.backgroundImage}
    // >
    <LinearGradient colors={['#53587300', '#191B2F']} style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeLine}>Welcome</Text>
        <Text style={styles.welcomeLine}>to</Text>
        <Text style={styles.welcomeLine}>EatSmart</Text>
      </View>
    <View style={styles.overlay}>
          <TouchableOpacity
            style={styles.container1}
            onPress={() => navigation.navigate(SignUpScreen)}>
            <Text style={styles.container1.startBut}>Start with email</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
            <Text style={{fontSize: 20, fontFamily: 'serif', color: 'white'}}>Already have an account?</Text>
            <TouchableOpacity onPress={handleSignIn}>
              <Text style={styles.button}>Sign in</Text>
            </TouchableOpacity>
            
        </View>
    </LinearGradient>
    // </ImageBackground>
  );
};



export default HomeScreen;
