import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from '../styles/homeScreen.style';
import LoginScreen from './loginScreen';
import { LinearGradient } from 'expo-linear-gradient'; 
import SignUpScreen from './signupScreen';

const HomeScreen = ({ navigation }) => {
  const handleSignIn = () => {
    navigation.navigate("LoginScreen");
  }

  return (
    <View style={styles.container}>
      
        <View style={styles.overlay}>
          <Text style={styles.title}>Eat Smart</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(LoginScreen)}
          >
            <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
      
    </View>
  </LinearGradient>
</ImageBackground>

  );
};



export default HomeScreen;

