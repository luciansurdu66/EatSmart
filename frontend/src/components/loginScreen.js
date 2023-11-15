import React, { useState } from "react";
import { View, TextInput, Text, Touchable, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AddIngredient from "./addIngredient";
import styles from "../styles/loginAndSignIn.style";
import SignUpScreen from "./signupScreen";
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log("Autentificare: ", email, password);
    navigation.navigate("AddIngredient");
  };

  const handleSignUp = () => {
    navigation.navigate("SignUpScreen");
  }


  return (

      <View>
        <Text style={styles.loginText}>Login</Text>
        <Text style={styles.text}>E-mail</Text>
        <TextInput
          placeholder="Your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          secureTextEntry
          style={styles.textInput}
        />
        <Text style={styles.text}>Password</Text>
        {/* <TextInput
          placeholder="Your Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.textInput}
        /> */}
        <View>
          <TextInput
            placeholder="Your Password"
            secureTextEntry={isPasswordVisible}
            style={styles.textInput}
          />
          <TouchableOpacity
            style={{ position: 'absolute', right: 30, top: 20 }}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Icon name={isPasswordVisible ? 'eye-slash' : 'eye'} size={22} color="gray" />
          </TouchableOpacity>
        </View>

       <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.button} >Forgot Password </Text> 
       </TouchableOpacity>
        
          <TouchableOpacity style={styles.container1} onPress={handleLogin}>        
            <Text style={styles.container1.loginBut}>Login</Text>
          </TouchableOpacity>

        <View style={styles.container}>
            <Text style={{fontSize: 20, fontFamily: 'serif'}}>Don't have an account?</Text>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={styles.button}>Sign up</Text>
            </TouchableOpacity>
            
        </View>
        
      </View>
      
  )

};

export default LoginScreen;


