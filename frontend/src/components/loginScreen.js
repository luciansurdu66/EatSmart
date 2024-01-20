import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/loginAndSignIn.style";
import Icon from 'react-native-vector-icons/FontAwesome';
import RecipeSearch from "./recipeSearch";
import axios from "axios";
import baseURL from "../../assets/constants";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [error, setError] = useState("");


  const navigation = useNavigation();

  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };
  
    console.log(user);
  
    axios.post(baseURL + "/auth/login", user)
      .then((res) => {
        console.log("Login successful");
        navigation.navigate("RecipeSearch");
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {

          setError("Incorrect email or password. Please try again.");
          setPassword("");
        } else {
          setError("Login failed. Please try again later.");
        }
      });
  };
  const handleInputChange = () => {
    setError("");
  };
  const handleResetPassword = () => {
    navigation.navigate("ResetPasswordScreen");
  }

  const handleSignUp = () => {
    navigation.navigate("SignUpScreen");
  }

  const handleSearch = () => {
    navigation.navigate("RecipeSearchScreen");
  }

  return (
      <View>
        <Text style={styles.loginText}>Login</Text>
        <Text style={styles.text}>E-mail</Text>
        <TextInput
          placeholder="Your email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            handleInputChange(); // Reset error message on input change
          }}
          style={styles.textInput}
        />
        <Text style={styles.text}>Password</Text>
        <View>
          <TextInput
            placeholder="Your Password"
            secureTextEntry={isPasswordVisible}
            style={styles.textInput}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              handleInputChange();}}
          />
          <TouchableOpacity
            style={{ position: 'absolute', right: 30, top: 20 }}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Icon name={isPasswordVisible ? 'eye-slash' : 'eye'} size={22} color="gray" />
          </TouchableOpacity>
        </View>
        {error ? <Text style={styles.errorMessage}>{error}</Text> : null}


       <TouchableOpacity onPress={handleResetPassword}>
          <Text style={styles.button} >Forgot Password </Text> 
       </TouchableOpacity>
        
          <TouchableOpacity style={styles.container1} onPress={handleLogin}>        
            <Text style={styles.container1.loginBut}>Login</Text>
          </TouchableOpacity>

        <View style={styles.container}>
        <Text style={{fontSize: 20, fontFamily: 'serif'}}>Don't have an account?</Text>
        <Text style={styles.button} onPress={handleSignUp}>Sign up</Text>
            
            <TouchableOpacity onPress={handleSignUp}>
            </TouchableOpacity>
        </View>
        <View style={styles.CircleShape3}
          />
          <View style={styles.CircleShape1}
          />
          <View style={styles.CircleShape2}
          />
      </View>
  )};

export default LoginScreen;


