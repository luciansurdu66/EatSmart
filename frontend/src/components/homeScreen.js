import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from '../styles/homeScreen.style';
import LoginScreen from './loginScreen';
import { LinearGradient } from 'expo-linear-gradient'; 

const HomeScreen = ({ navigation }) => {
  const handleSignIn = () => {
    navigation.navigate("LoginScreen");
  }

  return (
  //  <LinearGradient colors={['#53587300', '#191B2F']} style={styles.container}>
<ImageBackground source={require('../../images/fruitdish.jpg')} style={{width: '100%', height: '100%'}}>
  <LinearGradient colors={['#53587300', '#191B2F']} style={styles.container}>
    <View style={styles.welcomeContainer}>
      <Text style={styles.welcomeLine}>Welcome</Text>
      <Text style={styles.welcomeLine}>to</Text>
      <Text style={styles.welcomeLine}>EatSmart</Text>
    </View>
    <View style={styles.overlay}>
      <TouchableOpacity
        style={styles.container1}
        onPress={() => navigation.navigate(LoginScreen)}>
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
</ImageBackground>

  );
};



export default HomeScreen;

