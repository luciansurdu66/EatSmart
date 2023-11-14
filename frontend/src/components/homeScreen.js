import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/homeScreen.style';
import LoginScreen from './loginScreen';
import SignUpScreen from './signupScreen';

const HomeScreen = ({ navigation }) => {
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
  );
};



export default HomeScreen;
