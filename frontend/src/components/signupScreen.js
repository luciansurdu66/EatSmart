import React, { useState } from "react";
import { View, TextInput, Button, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoginScreen from "./loginScreen";
import styles from "../styles/loginAndSignIn.style";
import axios from "axios";


const SignUpScreen = () =>{
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    const handleBackButton = () => {
    navigation.navigate('loginScreen');
    };


    const handleSignUp = () => {
        const user = {
          fullName: fullName,
          email: email,
          password: password,
        };
        console.log(user);
        axios
          .post("http://localhost:5000/auth/register", user)
          .then((res) => {
            console.log(res);
            console.log(res.data);
          });
    };
    return (

        <View style={styles.view}>
          <Text style={styles.loginText}>Sign Up</Text>
          <Text style={styles.text}>Full Name</Text>
          <TextInput
            placeholder="Full name"
            value={fullName}
            onChangeText={(text) => setFullName(text)}
            style={styles.textInput}
          />
          <Text style={styles.text}>E-mail</Text>
          <TextInput
            placeholder="Email"
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
          <TouchableOpacity style={styles.container1} onPress={handleSignUp}>        
            <Text style={styles.container1.loginBut}>Sing Up</Text>
          </TouchableOpacity>
          <View style={styles.CircleShape3}
          />
          <View style={styles.CircleShape1}
          />
          <View style={styles.CircleShape2}
          />
        </View>
        
    )
}

export default SignUpScreen

