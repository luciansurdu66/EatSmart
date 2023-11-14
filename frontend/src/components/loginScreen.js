import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AddIngredient from "./addIngredient";
import styles from "../styles/login.style";
import SignUpScreen from "./signupScreen";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleLogin = () => {
    console.log("Autentificare: ", email, password);
    navigation.navigate("AddIngredient");
  };

  const handleSignUp = () => {
    navigation.navigate("SignUpScreen");
  }
  return (

      <View style={styles.view}>
        <Text style={styles.loginText}>Login</Text>
        <Text style={styles.text}>E-mail</Text>
        <TextInput
          placeholder="Your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.textInput}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.textInput}
        />

       
        <Text style={styles.button} onPress={handleLogin}>Forgot Password </Text> 
    	  <Text title="Login"
           onPress={handleLogin} style={styles.button}/>
        <View style={styles.container}>
            <Text>Don't have an account?</Text>
        <Text style={styles.button} onPress={handleSignUp}>Sign up</Text>
        </View>
        
      </View>
      
  )

};

export default LoginScreen;


